import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface CareerFormProps {
  onSubmit: (country: string, fieldOfInterest: string) => void;
  initialError?: string | null;
}

const CareerForm: React.FC<CareerFormProps> = ({ onSubmit, initialError }) => {
  const [country, setCountry] = useState<string>('');
  const [fieldOfInterest, setFieldOfInterest] = useState<string>('');
  const [formError, setFormError] = useState<string | null>(initialError || null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!country.trim() || !fieldOfInterest.trim()) {
      setFormError('Both country and field of interest are required.');
      return;
    }
    onSubmit(country, fieldOfInterest);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 sm:p-10 transform transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-indigo-700 mb-8">Find Your Dream Career</h2>
      {formError && <ErrorMessage message={formError} simple />}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
            Your Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g., USA, Canada, India"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="fieldOfInterest" className="block text-sm font-medium text-slate-700 mb-1">
            Your Field of Interest
          </label>
          <input
            type="text"
            id="fieldOfInterest"
            value={fieldOfInterest}
            onChange={(e) => setFieldOfInterest(e.target.value)}
            placeholder="e.g., Technology, Healthcare, Arts"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-sky-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg"
        >
          Find Top Careers
        </button>
      </form>
    </div>
  );
};

export default CareerForm;