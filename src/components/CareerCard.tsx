import React from 'react';
import { CareerSummary } from '../types';
import { BriefcaseIcon, ChevronRightIcon } from '@/components/icons';

interface CareerCardProps {
  career: CareerSummary;
  onMoreInfo: (career: CareerSummary) => void;
}

const DemandBadge: React.FC<{ demand: string }> = ({ demand }) => {
  let bgColor = 'bg-slate-400';
  let textColor = 'text-white';
  const demandLower = demand?.toLowerCase();

  if (demandLower === 'high' || demandLower === 'very high') {
    bgColor = 'bg-emerald-100'; // Brighter, cleaner green
    textColor = 'text-emerald-700';
  } else if (demandLower === 'medium') {
    bgColor = 'bg-amber-100'; // Brighter, cleaner yellow
    textColor = 'text-amber-700';
  } else if (demandLower === 'low') {
    bgColor = 'bg-rose-100'; // Brighter, cleaner red
    textColor = 'text-rose-700';
  }


  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>
      {demand || 'N/A'} Demand
    </span>
  );
};

const CareerCard: React.FC<CareerCardProps> = ({ career, onMoreInfo }) => {
  return (
    <div 
      className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] cursor-pointer group border border-transparent hover:border-indigo-300"
      onClick={() => onMoreInfo(career)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onMoreInfo(career)}
      aria-label={`View more details for ${career.professionName}`}
    >
      <div>
        <div className="flex items-start mb-4">
          <BriefcaseIcon className="w-10 h-10 text-indigo-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-indigo-700 group-hover:text-indigo-800 transition-colors">
              {career.professionName}
            </h3>
             <div className="mt-1.5">
                <DemandBadge demand={career.demand} />
             </div>
          </div>
        </div>
        
        <p className="text-sm text-slate-600 mb-4 h-16 overflow-hidden line-clamp-3">
          {career.summary}
        </p>
        
        <div className="text-sm text-slate-700 space-y-1.5">
          <p><strong className="font-medium text-slate-800">Salary (Local):</strong> {career.salaryLocal || 'N/A'}</p>
          <p><strong className="font-medium text-slate-800">Salary (USD):</strong> {career.salaryUSD || 'N/A'}</p>
        </div>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onMoreInfo(career);}}
        className="mt-5 w-full flex items-center justify-center bg-indigo-50 text-indigo-700 font-semibold py-2.5 px-4 rounded-lg shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-150 ease-in-out group-hover:bg-indigo-600 group-hover:text-white"
        aria-label={`More information about ${career.professionName}`}
      >
        More Info
        <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default CareerCard;