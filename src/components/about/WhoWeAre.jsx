import { CheckCircle2 } from "lucide-react";
import { whoWeAreData } from "@/data/aboutData";

const WhoWeAre = () => {
  return (
    <section
      aria-labelledby="who-we-are-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              {whoWeAreData.badge}
            </span>

            <h2
              id="who-we-are-title"
              className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {whoWeAreData.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {whoWeAreData.description}
            </p>

            <ul className="mt-8 space-y-4">
              {whoWeAreData.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                  />

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}

          <aside className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl lg:p-10">
            <div className="space-y-5">
              <article className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-900">
                  Customer
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Find trusted professionals in just a few clicks.
                </p>
              </article>

              <article className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-bold">
                  OneConnect
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  A secure bridge connecting customers with verified
                  professionals.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-900">
                  Professional
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Grow your business by reaching more customers digitally.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;