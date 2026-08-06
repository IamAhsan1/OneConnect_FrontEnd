import React from 'react';
import { Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProviderClients = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Patient/Client Directory</h1>
          <p className="text-slate-500 font-medium mt-1">View and manage your patient records and history.</p>
        </div>
        <Button className="font-bold bg-blue-600 hover:bg-blue-700">
          + Add New Client
        </Button>
      </div>
      
      <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Client Management</h2>
        <p className="text-slate-500 max-w-md">
          This is a placeholder for the client list where you can access medical histories, past notes, and contact information.
        </p>
      </div>
    </div>
  );
};

export default ProviderClients;
