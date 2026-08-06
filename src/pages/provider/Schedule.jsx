import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProviderSchedule = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Your Schedule</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your availability and upcoming appointments.</p>
        </div>
        <Button className="font-bold bg-blue-600 hover:bg-blue-700">
          + Block Time Off
        </Button>
      </div>
      
      <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Schedule Calendar View</h2>
        <p className="text-slate-500 max-w-md">
          This is a placeholder for the calendar view where you will be able to see your daily, weekly, and monthly schedule in detail.
        </p>
      </div>
    </div>
  );
};

export default ProviderSchedule;
