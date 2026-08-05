import { howItWorksData } from "@/data/servicesData";

const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            How It Works
          </span>

          <h2
            id="how-it-works-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Get Healthcare
            <span className="block text-blue-600">
              In Four Simple Steps
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Finding the right healthcare professional has never been easier.
            Follow these simple steps to connect with trusted doctors.
          </p>
        </div>

        {/* Steps */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {howItWorksData.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Step Number */}

                <div
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 select-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;