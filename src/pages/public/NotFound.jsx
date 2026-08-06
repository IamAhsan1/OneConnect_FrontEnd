import React from 'react';
import { Link } from 'react-router';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-2">Page Not Found</h2>
        <p className="text-slate-500 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="font-bold bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
