import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ctaData } from "@/data/aboutData";

const CTASection = () => {
  return (
    <section
      aria-labelledby="cta-title"
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
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/20 bg-white/10 px-8 py-16 text-center backdrop-blur-xl">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            Join OneConnect Today
          </span>

          <h2
            id="cta-title"
            className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {ctaData.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            {ctaData.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Contact Us */}

            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95"
            >
              <Link to="/contact#contact-form">
                Contact Us

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                />
              </Link>
            </Button>

            {/* Login */}

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white bg-transparent px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-700 active:scale-95"
            >
              <Link to="/login">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;