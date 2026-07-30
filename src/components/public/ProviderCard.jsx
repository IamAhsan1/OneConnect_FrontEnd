import React from "react";
import { useNavigate } from "react-router";
import { Star, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProviderCard = ({ provider, viewMode }) => {
  const navigate = useNavigate();

  if (viewMode === "list") {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="flex flex-1 items-start gap-4 p-5 sm:gap-6 sm:p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 sm:h-20 sm:w-20 sm:text-3xl">
              {provider.name.charAt(0)}
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                <h3
                  className="cursor-pointer break-words text-lg font-bold text-blue-600 hover:underline sm:text-xl"
                  onClick={() => navigate(`/provider/${provider.id}`)}
                >
                  {provider.name}
                </h3>

                <Badge className="w-fit bg-emerald-500 px-2 py-1 text-[10px] hover:bg-emerald-600">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
              </div>

              <p className="mb-3 text-sm font-semibold text-slate-600">
                {provider.specialty}
              </p>

              <div className="mb-3 flex flex-wrap items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                <span className="text-sm font-bold text-slate-700">
                  {provider.rating}
                </span>

                <span className="text-sm text-slate-500">
                  ({provider.reviews} Reviews)
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Lahore Medical Center</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-200 lg:h-auto lg:w-px"></div>

          {/* Right Side */}
          <div className="flex flex-col justify-center bg-slate-50 p-5 lg:min-w-[220px] lg:p-6">
            <div className="mb-4 text-center">
              <p className="text-2xl font-bold text-slate-900">
                ${provider.hourlyRate}
              </p>

              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Consultation Fee
              </p>
            </div>

            <Button
              className="w-full font-semibold"
              onClick={() => navigate(`/provider/${provider.id}`)}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // GRID VIEW

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-1 flex-col p-5 text-center sm:p-6">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 sm:h-20 sm:w-20 sm:text-3xl">
          {provider.name.charAt(0)}
        </div>

        <h3
          className="mb-2 cursor-pointer break-words text-lg font-bold text-blue-600 hover:underline"
          onClick={() => navigate(`/provider/${provider.id}`)}
        >
          {provider.name}
        </h3>

        <p className="mb-3 text-sm font-semibold text-slate-600">
          {provider.specialty}
        </p>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

          <span className="text-sm font-bold text-slate-700">
            {provider.rating}
          </span>

          <span className="text-sm text-slate-500">
            ({provider.reviews})
          </span>
        </div>

        <div className="mb-5">
          <span className="text-2xl font-bold text-slate-900">
            ${provider.hourlyRate}
          </span>

          <span className="text-sm text-slate-500"> / session</span>
        </div>

        <div className="mt-auto">
          <Button
            className="w-full font-semibold"
            onClick={() => navigate(`/provider/${provider.id}`)}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;