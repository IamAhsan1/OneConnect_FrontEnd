import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import HeroSection from "@/components/public/HeroSection";
import ProviderListing from "@/components/public/providers/ProviderListing";

import doctorsData from "@/data/providers/doctorsData";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection />

      <ProviderListing
        providers={doctorsData}
        limit={3}
        showFilters={false}
        defaultView="grid"
        title="Featured Doctors"
        subtitle="Top Rated Healthcare Professionals"
        headerAction={
          <Button
            asChild
            variant="outline"
            className="rounded-full"
          >
            <Link to="/doctors">
              View All

              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />
    </div>
  );
};

export default Home;