import React from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-blue-50/40 to-white py-16 md:py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"></div>
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Find and Book the Best Professionals
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg lg:text-xl">
          Instantly book appointments with trusted doctors, lawyers, and
          educators near you — all from one modern platform.
        </p>

        {/* Search Card */}
        <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl md:flex-row md:items-center md:rounded-full md:p-2">
          {/* Search */}
          <div className="group flex w-full flex-1 items-center rounded-xl px-3 py-3 transition-colors hover:bg-blue-50 md:px-5 md:py-2 md:rounded-full">
            <Search className="mr-3 h-5 w-5 shrink-0 text-blue-600 transition-transform group-hover:scale-110" />

            <input
              type="text"
              placeholder="Doctors, Hospitals, Lawyers..."
              className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Divider */}
          <div className="my-2 h-px w-full bg-slate-200 md:my-0 md:h-10 md:w-px"></div>

          {/* Location */}
          <div className="group flex w-full flex-1 items-center rounded-xl px-3 py-3 transition-colors hover:bg-blue-50 md:px-5 md:py-2 md:rounded-full">
            <MapPin className="mr-3 h-5 w-5 shrink-0 text-blue-600 transition-transform group-hover:scale-110" />

            <input
              type="text"
              placeholder="City, Area, or Zip..."
              className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <Button
            className="
              mt-3
              h-12
              w-full
              rounded-xl
              px-8
              text-base
              font-semibold
              shadow-md
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              md:mt-0
              md:ml-2
              md:h-12
              md:w-auto
              md:rounded-full
            "
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;