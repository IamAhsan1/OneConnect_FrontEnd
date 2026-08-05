import React from "react";

import ProviderListing from "@/components/public/providers/ProviderListing";
import doctorsData from "@/data/providers/doctorsData";

const Doctors = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30">
            Healthcare Professionals
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Find Trusted Doctors
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse verified doctors, compare profiles, read reviews, and book
            appointments through OneConnect.
          </p>
        </div>
      </section>

      <ProviderListing
        providers={doctorsData}
        title="Available Doctors"
        subtitle="Browse verified healthcare professionals"
        showFilters
      />
    </div>
  );
};

export default Doctors;