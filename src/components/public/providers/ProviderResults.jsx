import React, { useMemo, useState } from "react";
import { LayoutGrid, LayoutList } from "lucide-react";

import ProviderCard from "@/components/public/ProviderCard";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

const ProviderResults = ({
  providers = [],
  limit,
  title = "Available Doctors",
  subtitle = "Browse verified healthcare professionals",
  headerAction = null,
  defaultView = "list",
  fullWidth = false,
}) => {
  const [viewMode, setViewMode] = useState(defaultView);

  const displayedProviders = useMemo(() => {
    if (!limit) return providers;
    return providers.slice(0, limit);
  }, [providers, limit]);

  return (
    <section className={fullWidth ? "md:col-span-4" : "md:col-span-3"}>
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {subtitle}
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {displayedProviders.length} doctor
            {displayedProviders.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="flex items-center gap-3">
          {headerAction}

          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(value) => value && setViewMode(value)}
            className="rounded-xl border border-slate-200 bg-slate-50 p-1"
          >
            <ToggleGroupItem value="list">
              <LayoutList className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem value="grid">
              <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Empty State */}

      {displayedProviders.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
          <h3 className="text-xl font-semibold text-slate-900">
            No Doctors Found
          </h3>

          <p className="mt-2 text-slate-500">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : viewMode === "list" ? (
        <div className="space-y-5">
          {displayedProviders.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              viewMode="list"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProviders.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              viewMode="grid"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProviderResults;