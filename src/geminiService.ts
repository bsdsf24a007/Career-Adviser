
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { CareerSummary, DetailedCareerPlan, CertificationInfo } from "../types";

// IMPORTANT: API_KEY should be set in the environment variables.
// This script attempts to read it from process.env.API_KEY.
let apiKeyFromEnv: string | undefined = undefined;

// Safely attempt to access process.env.API_KEY
// This adheres to the rule that the key MUST be obtained from process.env.API_KEY.
// It ensures that the attempt to obtain it doesn't crash if 'process' isn't defined
// or if process.env.API_KEY is not what's expected.
if (typeof process !== 'undefined' && process.env && typeof process.env.API_KEY === 'string') {
  apiKeyFromEnv = process.env.API_KEY;
} else {
  // Log specific reasons if process.env.API_KEY cannot be accessed as expected.
  if (typeof process === 'undefined') {
    console.warn(
      "'process' is not defined. Cannot access process.env.API_KEY. " +
      "This is common in browser environments without a specific build step or polyfill. " +
      "Ensure your hosting environment makes process.env.API_KEY available to client-side code if required."
    );
  } else if (!process.env) {
    console.warn("'process.env' is not defined. Cannot access process.env.API_KEY.");
  } else if (typeof process.env.API_KEY !== 'string') {
    // This means process.env exists, but API_KEY is missing or not a string.
    console.warn(
      "process.env.API_KEY is missing or not a string. " +
      "AI features will likely not work. Please ensure it is correctly configured in your environment."
    );
  }
}

const API_KEY = apiKeyFromEnv;

if (!API_KEY) {
  // This warning will appear if, after the safe access attempt, API_KEY is still undefined.
  console.warn(
    "Effective API_KEY for Gemini is not set (it was not found or accessible via process.env.API_KEY). " +
    "AI features will not work. Ensure process.env.API_KEY is correctly configured and accessible in this execution environment."
  );
}

// Initialize AI. If API_KEY is undefined, it will use the fallback.
// The API_KEY variable here is the one derived (or not) from process.env.
const ai = new GoogleGenAI({ apiKey: API_KEY || "MISSING_API_KEY_FALLBACK" });
const model = 'gemini-2.5-flash-preview-04-17';

const parseJsonResponse = <T,>(responseText: string, originalPrompt: string): T => {
  let jsonStr = responseText.trim();
  const fenceRegex = /^```(?:json)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[1]) {
    jsonStr = match[1].trim();
  }

  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", e);
    console.error("Original raw response text from AI:", responseText);
    console.error("Attempted to parse (after cleaning fences):", jsonStr);
    console.error("Original prompt sent to AI:", originalPrompt);
    throw new Error("The AI's response was not in the expected JSON format. This might be a temporary issue with the AI model. Please try modifying your query or try again later.");
  }
};

export const fetchTopCareers = async (country: string, fieldOfInterest: string): Promise<CareerSummary[]> => {
  const prompt = `
You are a professional career advisor AI.
A user is seeking career advice. Based on the following inputs:
- Country: ${country}
- Field of Interest: ${fieldOfInterest}

Please return the top 5 most relevant and in-demand professions related to this field in that specific country.
The output for these 5 careers MUST be a JSON array where each object has the following keys:
- "professionName": string (e.g., "Software Engineer")
- "summary": string (one-sentence summary of what this profession does)
- "demand": string (Valid values: "High", "Medium", "Low")
- "salaryLocal": string (estimated average annual salary in local currency, e.g., "€50,000 - €70,000 EUR")
- "salaryUSD": string (estimated average annual salary in USD, e.g., "$55,000 - $77,000 USD")
- "futureScope": string (future scope or projected growth in the next 5–10 years)
- "skills": array of 3-5 strings (must-have skills or qualifications)
- "relatedSpecializations": string (briefly, related specializations or career paths)

CRITICAL INSTRUCTION: The response MUST ONLY be the raw JSON array. Do not include any introductory text, explanations, markdown code fences (like \`\`\`json), or any characters whatsoever outside the JSON array structure itself. Do not add any conversational text, remarks, or any characters that are not part of the valid JSON structure. The response must be parsable by a standard JSON parser directly.

Example of a single object in the array:
{
  "professionName": "Data Scientist",
  "summary": "Analyzes complex data sets to help organizations make better decisions.",
  "demand": "High",
  "salaryLocal": "₹1,000,000 - ₹2,000,000 INR",
  "salaryUSD": "$12,000 - $24,000 USD",
  "futureScope": "Projected to grow by 20% in the next 5 years due to increasing data generation.",
  "skills": ["Python", "Machine Learning", "Statistics", "Data Visualization", "SQL"],
  "relatedSpecializations": "Machine Learning Engineer, Business Analyst, AI Specialist"
}
`;

  if (!API_KEY) { // Check the API_KEY that was derived from process.env
    // This error is for when the API key is definitively not available before making a call.
    throw new Error("API_KEY for Gemini is not configured or accessible. AI features cannot be used.");
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    return parseJsonResponse<CareerSummary[]>(response.text, prompt);
  } catch (error) {
    console.error("Error fetching top careers:", error);
    if (error instanceof Error && error.message.startsWith("The AI's response was not in the expected JSON format")) {
        throw error;
    }
    // Include a check for the specific "MISSING_API_KEY_FALLBACK" if that's what was used.
    if ((ai as any).apiKey === "MISSING_API_KEY_FALLBACK" || (API_KEY === "MISSING_API_KEY_FALLBACK")) {
         throw new Error(`Failed to fetch top careers: The Gemini API key is missing or invalid. Please ensure it's correctly configured in your environment.`);
    }
    throw new Error(`Failed to fetch top careers from AI: ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const fetchCareerDetails = async (careerName: string, country: string, fieldOfInterest: string): Promise<DetailedCareerPlan> => {
  const prompt = `
You are a professional career advisor AI.
For the career titled "${careerName}" in ${country} within the field of ${fieldOfInterest}, provide a detailed career plan.
The output MUST be a single JSON object with the following keys:
- "careerTitle": string (should be "${careerName}")
- "detailedDescription": string (detailed description of the profession)
- "universities": array of objects, where each object has "name" (string, university name), "degree" (string, relevant degree name), and "websiteLink" (string, official university website URL). Provide top 5 relevant universities in ${country}.
- "stepByStepRoadmap": array of strings, where each string is a step in the career roadmap (from beginner to expert). Alternatively, an array of objects, each with "step" (number), "title" (string), and "description" (string).
- "suggestedCertifications": array of objects, where each object has "name" (string, certification/course name) and "link" (string, URL to the certification/course). List suggested certifications or online courses from reputed platforms.
- "challengesAndOpportunities": string (challenges and opportunities in this field)
- "averageGlobalSalaryUSD": string (average global salary in USD, e.g., "$90,000 USD")
- "averageLocalSalary": string (average local salary in ${country} with local currency symbol, e.g., "€75,000 EUR")
- "idealPersonalityTraits": array of strings (ideal personality traits or strengths for success)
- "careerLongevity": string (career longevity prospects)
- "internationalRelocationPotential": string (potential for international relocation)

CRITICAL INSTRUCTION: The response MUST ONLY be the raw JSON object. Do not include any introductory text, explanations, markdown code fences (like \`\`\`json), or any characters whatsoever outside the JSON object structure itself. Do not add any conversational text, remarks, or any characters that are not part of the valid JSON structure. The response must be parsable by a standard JSON parser directly.

Example of the structure for "suggestedCertifications":
"suggestedCertifications": [
  { "name": "AWS Certified Solutions Architect - Associate", "link": "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
  { "name": "Google Professional Cloud Architect", "link": "https://cloud.google.com/certification/cloud-architect" }
]

Full example of the structure:
{
  "careerTitle": "Cloud Solutions Architect",
  "detailedDescription": "Designs and implements cloud-based solutions for organizations, ensuring scalability, security, and cost-effectiveness...",
  "universities": [
    { "name": "University of Techville", "degree": "M.S. in Cloud Computing", "websiteLink": "https://uni-techville.edu/ms-cloud" },
    { "name": "National Institute of Innovation", "degree": "B.Tech. in IT with Cloud Specialization", "websiteLink": "https://nii.gov/${country.toLowerCase()}/btech-it" }
  ],
  "stepByStepRoadmap": [
    "Obtain a Bachelor's degree in Computer Science or related field.",
    "Gain foundational IT experience (2-3 years) in system administration or network engineering.",
    "Achieve certifications like AWS Certified Solutions Architect or Azure Solutions Architect Expert.",
    "Develop expertise in specific cloud services, DevOps practices, and infrastructure as code.",
    "Transition into a Junior Cloud Engineer role, then progress to Architect."
  ],
  "suggestedCertifications": [
    { "name": "AWS Certified Solutions Architect - Associate", "link": "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
    { "name": "Microsoft Certified: Azure Solutions Architect Expert", "link": "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/" },
    { "name": "Google Professional Cloud Architect", "link": "https://cloud.google.com/certification/cloud-architect" }
  ],
  "challengesAndOpportunities": "Challenges include the rapid pace of technological change and security concerns. Opportunities abound due to high demand across industries.",
  "averageGlobalSalaryUSD": "$150,000 USD",
  "averageLocalSalary": "CA$130,000 CAD",
  "idealPersonalityTraits": ["Problem-solver", "Analytical thinker", "Continuous learner", "Good communicator"],
  "careerLongevity": "Excellent, as cloud adoption continues to grow.",
  "internationalRelocationPotential": "High, as cloud skills are globally in demand."
}
`;

  if (!API_KEY) { // Check the API_KEY that was derived from process.env
    throw new Error("API_KEY for Gemini is not configured or accessible. AI features cannot be used.");
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    return parseJsonResponse<DetailedCareerPlan>(response.text, prompt);
  } catch (error) {
    console.error(`Error fetching details for ${careerName}:`, error);
     if (error instanceof Error && error.message.startsWith("The AI's response was not in the expected JSON format")) {
        throw error;
    }
    if ((ai as any).apiKey === "MISSING_API_KEY_FALLBACK" || (API_KEY === "MISSING_API_KEY_FALLBACK")) {
         throw new Error(`Failed to fetch career details for ${careerName}: The Gemini API key is missing or invalid. Please ensure it's correctly configured in your environment.`);
    }
    throw new Error(`Failed to fetch career details from AI for ${careerName}: ${error instanceof Error ? error.message : String(error)}`);
  }
};
