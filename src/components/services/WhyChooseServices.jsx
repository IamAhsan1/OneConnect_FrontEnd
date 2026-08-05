import { whyChooseData } from "@/data/servicesData";

const WhyChooseServices = () => {
  return (
    <section
      aria-labelledby="why-choose-title"
      className="bg-slate-50 py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Why Choose OneConnect
          </span>

          <h2
            id="why-choose-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Healthcare Made
            <span className="block text-blue-600">
              Simple & Reliable
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            OneConnect helps patients connect with trusted healthcare
            professionals through a secure, transparent and easy-to-use
            platform.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {whyChooseData.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseServices;