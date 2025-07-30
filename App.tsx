import React, { useState, useCallback } from 'react';
import { Page, CareerSummary, DetailedCareerPlan } from './types';
import CareerForm from './components/CareerForm';
import CareerResults from './components/CareerResults';
import CareerDetail from './components/CareerDetail';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { fetchTopCareers, fetchCareerDetails } from './services/geminiService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.FORM);
  const [userCountry, setUserCountry] = useState<string>('');
  const [userFieldOfInterest, setUserFieldOfInterest] = useState<string>('');
  
  const [topCareers, setTopCareers] = useState<CareerSummary[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<CareerSummary | null>(null);
  const [detailedCareerPlan, setDetailedCareerPlan] = useState<DetailedCareerPlan | null>(null);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = useCallback(async (country: string, fieldOfInterest: string) => {
    setIsLoading(true);
    setError(null);
    setUserCountry(country);
    setUserFieldOfInterest(fieldOfInterest);
    try {
      const careers = await fetchTopCareers(country, fieldOfInterest);
      setTopCareers(careers);
      setCurrentPage(Page.RESULTS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching careers.');
      setTopCareers([]); // Clear previous results on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelectCareer = useCallback(async (career: CareerSummary) => {
    setIsLoading(true);
    setError(null);
    setSelectedCareer(career);
    try {
      const details = await fetchCareerDetails(career.professionName, userCountry, userFieldOfInterest);
      setDetailedCareerPlan(details);
      setCurrentPage(Page.DETAILS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching career details.');
      setDetailedCareerPlan(null);
    } finally {
      setIsLoading(false);
    }
  }, [userCountry, userFieldOfInterest]);

  const handleBack = useCallback(() => {
    setError(null); // Clear error when navigating back
    if (currentPage === Page.DETAILS) {
      setCurrentPage(Page.RESULTS);
      setDetailedCareerPlan(null); // Clear details
    } else if (currentPage === Page.RESULTS) {
      setCurrentPage(Page.FORM);
      setTopCareers([]); // Clear results
      setSelectedCareer(null);
    }
  }, [currentPage]);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error && currentPage !== Page.FORM) { 
       return <ErrorMessage message={error} onRetry={currentPage === Page.RESULTS ? () => handleFormSubmit(userCountry, userFieldOfInterest) : (selectedCareer ? () => handleSelectCareer(selectedCareer) : undefined)} />;
    }

    switch (currentPage) {
      case Page.FORM:
        return <CareerForm onSubmit={handleFormSubmit} initialError={error} />;
      case Page.RESULTS:
        return <CareerResults careers={topCareers} onSelectCareer={handleSelectCareer} onBack={handleBack} userCountry={userCountry} userFieldOfInterest={userFieldOfInterest} />;
      case Page.DETAILS:
        if (detailedCareerPlan) {
          return <CareerDetail plan={detailedCareerPlan} onBack={handleBack} />;
        }
        return <ErrorMessage message="No career details available. This may be due to an issue fetching the data or an incomplete plan." onRetry={() => handleBack()} />; 
      default:
        return <CareerForm onSubmit={handleFormSubmit} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 text-slate-800 flex flex-col items-center justify-start p-4 pt-10 sm:pt-16 selection:bg-indigo-500 selection:text-white">
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-700 pb-2">
          Abdullah's Career Advisor
        </h1>
        <p className="text-lg text-slate-600 mt-2">Discover your path to success with AI-powered insights.</p>
      </header>
      <main className="w-full max-w-4xl">
        {renderContent()}
      </main>
      <footer className="text-center text-slate-500 mt-12 pb-6">
        <p>&copy; {new Date().getFullYear()} Abdullah's Career Advisor. Powered by Gemini.</p>
      </footer>
    </div>
  );
};

export default App;