import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-[#f4f7f6] py-16 md:py-24 border-b border-slate-200 mb-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Find and Book the Best Professionals
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          Instantly book appointments with top doctors, lawyers, and educators near you.
        </p>

        <div className="bg-white p-2 rounded-full shadow-lg border border-slate-200 flex flex-col md:flex-row items-center max-w-3xl mx-auto transition-shadow hover:shadow-xl">
          
          <div className="flex-1 flex items-center w-full px-4 py-2 md:py-0">
            <Search className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="Doctors, Hospitals, Lawyers..." 
              className="w-full bg-transparent border-none focus:outline-none text-base text-slate-900 placeholder:text-slate-400"
            />
          </div>
          
          <div className="hidden md:block w-px h-8 bg-slate-200 mx-2"></div>
          <div className="w-full h-px bg-slate-200 md:hidden my-2"></div>

          <div className="flex-1 flex items-center w-full px-4 py-2 md:py-0">
            <MapPin className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="City, Area, or Zip..." 
              className="w-full bg-transparent border-none focus:outline-none text-base text-slate-900 placeholder:text-slate-400"
            />
          </div>
          
          <Button className="w-full md:w-auto rounded-full px-8 py-6 text-base font-bold shadow-md md:ml-2 mt-2 md:mt-0">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
