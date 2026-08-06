import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = ({ fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      <p className="text-sm font-medium text-slate-500 animate-pulse">Loading...</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50/50 backdrop-blur-sm z-50">
        {content}
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center p-8">
      {content}
    </div>
  );
};

export default Loader;
