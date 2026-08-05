import React from "react";

import ProviderFilters from "./ProviderFilters";
import ProviderResults from "./ProviderResults";

const ProviderListing = ({
  providers = [],
  limit,
  showFilters = true,
  title = "Available Doctors",
  subtitle = "Browse verified healthcare professionals",
  headerAction = null,
  defaultView = "list",
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-4">
        {showFilters && <ProviderFilters />}

        <ProviderResults
          providers={providers}
          limit={limit}
          title={title}
          subtitle={subtitle}
          headerAction={headerAction}
          defaultView={defaultView}
          fullWidth={!showFilters}
        />
      </div>
    </section>
  );
};

export default ProviderListing;