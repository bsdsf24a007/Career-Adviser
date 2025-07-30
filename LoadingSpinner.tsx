import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-lg absolute inset-0 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-indigo-700">Loading Your Future...</p>
      <p className="text-sm text-slate-500">Please wait a moment.</p>
    </div>
  );
};

export default LoadingSpinner;