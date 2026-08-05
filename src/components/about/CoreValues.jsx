import { coreValues } from "@/data/aboutData";

const CoreValues = () => {
  return (
    <section
      aria-labelledby="core-values-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Core Values
          </span>

          <h2
            id="core-values-title"
            className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            The Values That Drive

            <span className="block text-blue-600">
              OneConnect Forward
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every feature, every improvement and every decision is guided by
            our commitment to trust, quality, innovation and customer
            satisfaction.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;