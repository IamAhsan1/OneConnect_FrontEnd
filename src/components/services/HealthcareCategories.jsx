import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { healthcareCategories } from "@/data/servicesData";

const HealthcareCategories = () => {
  return (
    <section
      aria-labelledby="healthcare-categories-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Healthcare Categories
          </span>

          <h2
            id="healthcare-categories-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Browse Healthcare Specialists
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Start with our currently available healthcare professionals. More
            specialist categories will be added as OneConnect continues to grow.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {healthcareCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.id}
                className={`group flex h-full flex-col rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  category.available
                    ? "border-slate-200 bg-white hover:border-blue-200"
                    : "border-slate-200 bg-slate-50 opacity-90"
                }`}
              >
                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                    category.available
                      ? "bg-blue-100 group-hover:bg-blue-600"
                      : "bg-slate-200"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-8 w-8 transition-colors duration-300 ${
                      category.available
                        ? "text-blue-600 group-hover:text-white"
                        : "text-slate-500"
                    }`}
                  />
                </div>

                {/* Badge */}

                <div className="mt-6">
                  {category.available ? (
                    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Available Now
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Title */}

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>

                {/* Description */}

                <p className="mt-4 flex-1 leading-8 text-slate-600">
                  {category.description}
                </p>

                {/* Providers */}

                <p className="mt-6 text-sm font-semibold text-blue-600">
                  {category.providers}
                </p>

                {/* Action */}

                <div className="mt-8">
                  {category.available ? (
                    <Button
                      asChild
                      className="w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Link to="/doctors">
                        Explore Doctors

                        <ArrowRight
                          aria-hidden="true"
                          className="ml-2 h-4 w-4"
                        />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      className="w-full cursor-not-allowed"
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthcareCategories;