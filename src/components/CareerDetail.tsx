import React from 'react';
import { DetailedCareerPlan, UniversityInfo, CertificationInfo } from '../types';
import { 
    BriefcaseIcon, 
    AcademicCapIcon, 
    ArrowLeftIcon, 
    StarIcon as ImportedStarIcon, // Renamed to avoid conflict with local Star
    CurrencyDollarIcon, 
    GlobeAltIcon, 
    PuzzlePieceIcon, 
    SparklesIcon, 
    ExclamationTriangleIcon, 
    LightBulbIcon, 
    ClockIcon, 
    PaperAirplaneIcon 
} from '@/components/icons';

// A generic star icon for ratings or highlights, if a different style is needed than ImportedStarIcon
const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.382c-.836.067-1.171 1.071-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.58.3-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
  </svg>
);


interface CareerDetailProps {
  plan: DetailedCareerPlan;
  onBack: () => void;
}

const DetailSection: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className = "" }) => (
  <div className={`mb-6 sm:mb-8 p-5 sm:p-6 bg-white shadow-lg rounded-xl border border-slate-200 ${className}`}>
    <div className="flex items-center mb-4">
      {icon && <span className="mr-3 text-indigo-600">{icon}</span>}
      <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
    </div>
    <div className="text-slate-700 space-y-3 leading-relaxed text-sm sm:text-base">{children}</div>
  </div>
);

const CareerDetail: React.FC<CareerDetailProps> = ({ plan, onBack }) => {
  return (
    <div className="w-full bg-slate-50 shadow-xl rounded-xl p-5 sm:p-8 md:p-10">
      <button
        onClick={onBack}
        className="mb-6 group flex items-center text-indigo-600 hover:text-indigo-800 font-semibold py-2 px-4 rounded-lg bg-white hover:bg-indigo-50 transition duration-150 ease-in-out shadow-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Results
      </button>

      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4 shadow-sm">
         <BriefcaseIcon className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700 pb-1">{plan.careerTitle}</h2>
      </header>

      <DetailSection title="Profession Overview" icon={<BriefcaseIcon className="w-6 h-6"/>}>
        <p>{plan.detailedDescription}</p>
      </DetailSection>

      {plan.universities && plan.universities.length > 0 && (
        <DetailSection title="Top Universities" icon={<AcademicCapIcon className="w-6 h-6"/>}>
          <ul className="space-y-3">
            {plan.universities.map((uni: UniversityInfo, index: number) => (
              <li key={index} className="p-3.5 bg-indigo-50 rounded-lg shadow-sm border border-indigo-100">
                <strong className="block text-indigo-700 text-base">{uni.name}</strong>
                <span className="block text-sm text-slate-600">Degree: {uni.degree}</span>
                <a href={uni.websiteLink} target="_blank" rel="noopener noreferrer" className="text-sm text-sky-600 hover:text-sky-700 hover:underline transition-colors duration-150">
                  Visit Website &rarr;
                </a>
              </li>
            ))}
          </ul>
        </DetailSection>
      )}

      <DetailSection title="Career Roadmap" icon={<LightBulbIcon className="w-6 h-6"/>}>
        {Array.isArray(plan.stepByStepRoadmap) ? (
          <ol className="list-decimal list-outside space-y-2.5 pl-5 marker:text-indigo-500 marker:font-semibold">
            {plan.stepByStepRoadmap.map((step, index) => (
              <li key={index} className="pl-1">
                {typeof step === 'string' 
                ? step
                : <><strong className="text-indigo-700">{step.title}:</strong> {step.description}</>}
              </li>
            ))}
          </ol>
        ) : <p>{String(plan.stepByStepRoadmap)}</p>}
      </DetailSection>

      {plan.suggestedCertifications && plan.suggestedCertifications.length > 0 && (
        <DetailSection title="Suggested Certifications & Courses" icon={<ImportedStarIcon className="w-6 h-6" />}>
          <ul className="list-disc list-outside space-y-2.5 pl-5 marker:text-indigo-500">
            {plan.suggestedCertifications.map((cert: CertificationInfo, index: number) => (
              <li key={index} className="pl-1">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 hover:underline font-medium transition-colors duration-150">
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </DetailSection>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <DetailSection title="Salary Insights" icon={<CurrencyDollarIcon className="w-6 h-6" />}>
            <p><strong className="text-slate-800">Average Global (USD):</strong> {plan.averageGlobalSalaryUSD}</p>
            <p><strong className="text-slate-800">Average Local:</strong> {plan.averageLocalSalary}</p>
        </DetailSection>

        <DetailSection title="Ideal Personality Traits" icon={<SparklesIcon className="w-6 h-6" />}>
          {plan.idealPersonalityTraits && plan.idealPersonalityTraits.length > 0 ? (
            <ul className="list-disc list-outside space-y-1.5 pl-5 marker:text-indigo-500">
              {plan.idealPersonalityTraits.map((trait, index) => <li key={index} className="pl-1">{trait}</li>)}
            </ul>
          ) : <p>Information not available.</p>}
        </DetailSection>
      </div>
      
      <DetailSection title="Challenges & Opportunities" icon={<ExclamationTriangleIcon className="w-6 h-6" />}>
        <p className="whitespace-pre-line">{plan.challengesAndOpportunities}</p>
      </DetailSection>

      <DetailSection title="Career Outlook" icon={<GlobeAltIcon className="w-6 h-6" />}>
        <p><strong className="text-slate-800">Longevity:</strong> {plan.careerLongevity}</p>
        <p><strong className="text-slate-800">International Relocation Potential:</strong> {plan.internationalRelocationPotential}</p>
      </DetailSection>
    </div>
  );
};

export default CareerDetail;