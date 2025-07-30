
export enum Page {
  FORM,
  RESULTS,
  DETAILS,
}

export interface CareerSummary {
  professionName: string;
  summary: string;
  demand: 'High' | 'Medium' | 'Low' | string; // Allow string for flexibility from AI
  salaryLocal: string;
  salaryUSD: string;
  futureScope: string;
  skills: string[];
  relatedSpecializations: string;
}

export interface UniversityInfo {
  name: string;
  degree: string;
  websiteLink: string;
}

export interface CertificationInfo {
  name: string;
  link: string;
}

export interface DetailedCareerPlan {
  careerTitle: string;
  detailedDescription: string;
  universities: UniversityInfo[];
  stepByStepRoadmap: string[] | { step: number; title: string; description: string }[]; // Flexible roadmap
  suggestedCertifications: CertificationInfo[];
  challengesAndOpportunities: string;
  averageGlobalSalaryUSD: string;
  averageLocalSalary: string;
  idealPersonalityTraits: string[];
  careerLongevity: string;
  internationalRelocationPotential: string;
}