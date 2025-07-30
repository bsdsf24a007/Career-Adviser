import React from 'react';

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);


export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.25c2.761 0 5.408-.566 7.697-1.64 2.058-.968 3.952-2.247 5.516-3.829a11.232 11.232 0 0 1 .058-1.415a47.472 47.472 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.75c2.761 0 5.408.566 7.697 1.64 2.058.968 3.952-2.247 5.516-3.829a11.232 11.232 0 0 1 .058-1.415a47.472 47.472 0 0 0-.491-6.347m-15.482 0A50.636 50.636 0 0 0 2.658 9.334M12 12.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 9.75-7.5 9.75s-7.5-2.608-7.5-9.75S7.028 3 12 3s7.5 0 7.5 7.5Z" />
  </svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

// New Icons for CareerDetail
export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.557 2.638c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434L10.788 3.21Z" clipRule="evenodd" />
  </svg>
);

export const CurrencyDollarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.219 12.768 11 12 11c-.768 0-1.536.219-2.121.727M15 14.25v-2.818m0 0a2.5 2.5 0 0 0-5 0M12 6V5.25A2.25 2.25 0 0 0 9.75 3H8.25A2.25 2.25 0 0 0 6 5.25V6" />
  </svg>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
  </svg>
);

export const PuzzlePieceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-6.75 3h10.5m-10.5 3h10.5m-10.5 3h10.5m-10.5 3h10.5M4.5 6.75h.75v.75H4.5v-.75Zm0 3h.75v.75H4.5v-.75Zm0 3h.75v.75H4.5v-.75Zm0 3h.75v.75H4.5v-.75Zm0 3h.75v.75H4.5v-.75Zm15 0h.75v.75h-.75v-.75Zm0-3h.75v.75h-.75v-.75Zm0-3h.75v.75h-.75v-.75Zm0-3h.75v.75h-.75v-.75Zm0-3h.75v.75h-.75v-.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5H18.5C19.0523 7.5 19.5 7.05228 19.5 6.5V5C19.5 4.44772 19.0523 4 18.5 4H6.75C6.19772 4 5.75 4.44772 5.75 5V6.5C5.75 7.05228 6.19772 7.5 6.75 7.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.75 10.5H18.5C19.0523 10.5 19.5 10.0523 19.5 9.5V8C19.5 7.44772 19.0523 7 18.5 7H5.75C5.19772 7 4.75 7.44772 4.75 8V9.5C4.75 10.0523 5.19772 10.5 5.75 10.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.75 13.5H18.5C19.0523 13.5 19.5 13.0523 19.5 12.5V11C19.5 10.4477 19.0523 10 18.5 10H5.75C5.19772 10 4.75 10.4477 4.75 11V12.5C4.75 13.0523 5.19772 13.5 5.75 13.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.75 16.5H18.5C19.0523 16.5 19.5 16.0523 19.5 15.5V14C19.5 13.4477 19.0523 13 18.5 13H5.75C5.19772 13 4.75 13.4477 4.75 14V15.5C4.75 16.0523 5.19772 16.5 5.75 16.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.75 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V17C19.5 16.4477 19.0523 16 18.5 16H5.75C5.19772 16 4.75 16.4477 4.75 17V18.5C4.75 19.0523 5.19772 19.5 5.75 19.5Z" />
  </svg>
);


export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.5 13.5h.008v.008H16.5v-.008Z" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a7.5 7.5 0 0 1-3 0m3-12.442c0-2.034.372-4.016 1.056-5.765A9.375 9.375 0 0 0 8.25 3.75c0 2.034-.372 4.016-1.056 5.765m1.056-5.765a9.375 9.375 0 0 1 5.488 0m-5.488 0A9.375 9.375 0 0 0 3.75 9.515M12 3c2.923 0 5.597.876 7.742 2.31m-15.484 0A12.005 12.005 0 0 1 12 3Z" />
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const PaperAirplaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);