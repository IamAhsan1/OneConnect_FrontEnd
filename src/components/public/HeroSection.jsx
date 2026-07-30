import React from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative mb-12 overflow-hidden border-b border-slate-200 bg-[#f4f7f6] py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Find and Book the Best Professionals
        </h1>

        <p className="mb-10 text-lg text-slate-600 md:text-xl">
          Instantly book appointments with top doctors, lawyers, and educators
          near you.
        </p>

        {/* Search Card */}
        <div className="mx-auto flex w-full max-w-3xl flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-lg transition-shadow hover:shadow-xl md:flex-row md:items-center md:rounded-full md:p-2">
          {/* Search */}
          <div className="flex w-full flex-1 items-center px-2 py-2 md:px-4 md:py-0">
            <Search className="mr-3 h-5 w-5 shrink-0 text-blue-500" />

            <input
              type="text"
              placeholder="Doctors, Hospitals, Lawyers..."
              className="w-full border-none bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Divider */}
          <div className="my-2 h-px w-full bg-slate-200 md:my-0 md:h-8 md:w-px" />

          {/* Location */}
          <div className="flex w-full flex-1 items-center px-2 py-2 md:px-4 md:py-0">
            <MapPin className="mr-3 h-5 w-5 shrink-0 text-blue-500" />

            <input
              type="text"
              placeholder="City, Area, or Zip..."
              className="w-full border-none bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <Button
            className="
              mt-3
              w-full
              rounded-xl
              py-6
              text-base
              font-bold
              shadow-md
              md:mt-0
              md:ml-2
              md:w-auto
              md:rounded-full
              md:px-8
            "
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;