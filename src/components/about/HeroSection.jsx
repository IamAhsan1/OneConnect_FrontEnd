import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { heroData, heroServices } from "@/data/aboutData";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}

          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              {heroData.badge}
            </span>

            <h1
              id="about-hero-title"
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {heroData.title}{" "}
              <span className="text-blue-600">
                {heroData.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {heroData.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                aria-label="Explore OneConnect services"
                className="rounded-full px-8 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                {heroData.primaryButton}

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                aria-label="Learn more about OneConnect"
                className="rounded-full px-8 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                {heroData.secondaryButton}
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {heroData.stats.map((item) => (
                <div key={item.label}>
                  <h2 className="text-3xl font-bold text-blue-600">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {heroData.servicesBadge}
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Professional Categories
            </h2>

            <p className="mt-2 text-slate-500">
              Discover trusted professionals across multiple industries.
            </p>

            <div className="mt-8 grid gap-5">
              {heroServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.id}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-blue-100 p-3">
                        <Icon
                          className="h-6 w-6 text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {service.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <span
                      aria-label={`Status ${service.status}`}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                    >
                      {service.status}
                    </span>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;