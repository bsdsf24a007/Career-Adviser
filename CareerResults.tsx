import React from 'react';
import { CareerSummary } from '../types';
import CareerCard from './CareerCard';
import { ArrowLeftIcon } from '@/components/icons';

interface CareerResultsProps {
  careers: CareerSummary[];
  onSelectCareer: (career: CareerSummary) => void;
  onBack: () => void;
  userCountry: string;
  userFieldOfInterest: string;
}

const CareerResults: React.FC<CareerResultsProps> = ({ careers, onSelectCareer, onBack, userCountry, userFieldOfInterest }) => {
  if (careers.length === 0) {
    return (
      <div className="bg-white shadow-xl rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">No Careers Found</h2>
        <p className="text-slate-600 mb-2">
          The AI couldn't find careers for "{userFieldOfInterest}" in "{userCountry}".
        </p>
        <p className="text-slate-500 mb-6 text-sm">Please try different keywords or broaden your search.</p>
        <button
          onClick={onBack}
          className="flex items-center justify-center mx-auto bg-indigo-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition duration-150 ease-in-out transform hover:scale-105"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={onBack}
        className="mb-6 group flex items-center text-indigo-600 hover:text-indigo-800 font-semibold py-2 px-4 rounded-lg bg-white hover:bg-slate-100 transition duration-150 ease-in-out shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-sky-100"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Form
      </button>
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700 mb-8 pb-1">Top Career Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {careers.map((career, index) => (
          <CareerCard key={index} career={career} onMoreInfo={onSelectCareer} />
        ))}
      </div>
    </div>
  );
};

export default CareerResults;