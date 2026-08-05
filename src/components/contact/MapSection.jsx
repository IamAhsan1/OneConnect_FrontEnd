import { MapPin } from "lucide-react";

import { mapData } from "@/data/contactData";

const MapSection = () => {
  return (
    <section
      aria-labelledby="map-section-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            <MapPin
              aria-hidden="true"
              className="mr-2 h-4 w-4"
            />
            Our Location
          </span>

          <h2
            id="map-section-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            {mapData.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {mapData.description}
          </p>
        </div>

        {/* Map */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            title={mapData.locationName}
            src={mapData.embedUrl}
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;