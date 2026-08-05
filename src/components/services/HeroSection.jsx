import { Link } from "react-router";
import { ArrowRight, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data/servicesData";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32"
    >
      {/* Decorative Background */}

      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Stethoscope
              aria-hidden="true"
              className="mr-2 h-4 w-4"
            />

            {heroData.badge}
          </span>

          {/* Heading */}

          <h1
            id="services-hero-title"
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {heroData.title}

            <span className="block text-blue-600">
              {heroData.highlight}
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {heroData.description}
          </p>

          {/* Actions */}

          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              asChild
              size="lg"
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Link to="/doctors">
                {heroData.primaryButton}

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Link to="/register/provider">
                {heroData.secondaryButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;