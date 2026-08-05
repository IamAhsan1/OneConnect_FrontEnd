import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { officeLocations } from "@/data/contactData";

const OfficeLocations = () => {
  return (
    <section
      id="office-locations"
      aria-labelledby="office-locations-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Our Offices
          </span>

          <h2
            id="office-locations-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Visit One of Our Locations
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our offices are strategically located to better serve our clients.
            Feel free to visit or contact the nearest branch.
          </p>
        </div>

        {/* Office Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {officeLocations.map((office) => {
            const Icon = office.icon;

            return (
              <article
                key={office.id}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                {/* Office Info */}

                <h3 className="text-2xl font-bold text-slate-900">
                  {office.city}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {office.office}
                </p>

                {/* Address */}

                <div className="mt-6 flex items-start gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-shrink-0 text-slate-400"
                  />

                  <p className="text-sm leading-7 text-slate-600">
                    {office.address}
                  </p>
                </div>

                {/* Phone */}

                <div className="mt-4 flex items-center gap-3">
                  <Phone
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-slate-400"
                  />

                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="text-sm text-slate-700 transition-colors hover:text-blue-600"
                  >
                    {office.phone}
                  </a>
                </div>

                {/* Email */}

                <div className="mt-4 flex items-center gap-3">
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-slate-400"
                  />

                  <a
                    href={`mailto:${office.email}`}
                    className="break-all text-sm text-slate-700 transition-colors hover:text-blue-600"
                  >
                    {office.email}
                  </a>
                </div>

                {/* Action */}

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${office.city} office location in Google Maps`}
                    >
                      View on Map

                      <ArrowUpRight
                        aria-hidden="true"
                        className="ml-2 h-4 w-4"
                      />
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;