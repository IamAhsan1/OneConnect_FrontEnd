import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ctaData } from "@/data/contactData";

const CTASection = () => {
  return (
    <section
      aria-labelledby="contact-cta-title"
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
        className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
      />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            Ready to Get Started?
          </span>

          <h2
            id="contact-cta-title"
            className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {ctaData.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            {ctaData.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Contact Sales */}

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <a
                href={ctaData.primaryButton.href}
                aria-label={ctaData.primaryButton.text}
              >
                {ctaData.primaryButton.text}

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                />
              </a>
            </Button>

            {/* Book Meeting */}

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-slate-900 active:scale-95"
            >
              <a
                href={ctaData.secondaryButton.href}
                aria-label={ctaData.secondaryButton.text}
              >
                <CalendarDays
                  aria-hidden="true"
                  className="mr-2 h-5 w-5"
                />

                {ctaData.secondaryButton.text}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;