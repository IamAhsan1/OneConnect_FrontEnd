import { Link } from "react-router";
import { ArrowRight, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ctaData } from "@/data/servicesData";

const CTASection = () => {
  return (
    <section
      aria-labelledby="services-cta-title"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700"
      />

      {/* Decorative Blur */}

      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
      />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            <Stethoscope
              aria-hidden="true"
              className="mr-2 h-4 w-4"
            />

            Healthcare Made Simple
          </span>

          {/* Heading */}

          <h2
            id="services-cta-title"
            className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {ctaData.title}
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {ctaData.description}
          </p>

          {/* Actions */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Link to="/doctors">
                {ctaData.primaryButton.text}

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
              className="border-white/30 bg-transparent text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-slate-900 active:scale-95"
            >
              <Link to="/register/provider">
                {ctaData.secondaryButton.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;