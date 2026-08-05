import { statisticsData } from "@/data/aboutData";
import {
  BadgeCheck,
  Grid2X2,
  Star,
  Users,
} from "lucide-react";

const icons = {
  customers: Users,
  professionals: BadgeCheck,
  categories: Grid2X2,
  rating: Star,
};

const StatisticsSection = () => {
  return (
    <section
      aria-labelledby="statistics-title"
      className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            Trusted Across Pakistan
          </span>

          <h2
            id="statistics-title"
            className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Numbers That Speak

            <span className="block text-blue-200">
              For Our Platform
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Thousands of customers trust OneConnect every day to discover
            verified professionals across multiple service categories.
          </p>
        </div>

        {/* Statistics */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statisticsData.map((item) => {
            const Icon = icons[item.key];

            return (
              <article
                key={item.key}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700">
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8"
                  />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-blue-100">
                  {item.label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;