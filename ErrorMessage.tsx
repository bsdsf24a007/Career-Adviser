import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  simple?: boolean; // For a less intrusive error message, e.g., on forms
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry, simple }) => {
  if (simple) {
    return (
      <div className="my-4 p-3 bg-red-50 border border-red-300 text-red-700 rounded-md text-sm shadow-sm" role="alert">
        {message}
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 text-center border border-red-200" role="alert">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-red-700 mb-2">Oops! Something Went Wrong</h3>
      <p className="text-slate-600 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white transition duration-150 ease-in-out"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;