import React from "react";
import { useNavigate } from "react-router";
import { Star, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProviderCard = ({ provider, viewMode }) => {
  const navigate = useNavigate();

  if (viewMode === "list") {
    return (
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 gap-5 p-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white shadow-lg">
              {provider.name.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3
                  onClick={() => navigate(`/provider/${provider.id}`)}
                  className="cursor-pointer text-xl font-bold text-slate-900 transition hover:text-blue-600"
                >
                  {provider.name}
                </h3>

                <Badge className="rounded-full bg-emerald-500 px-3 py-1 hover:bg-emerald-600">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
              </div>

              <p className="font-medium text-blue-600">{provider.specialty}</p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400"/>
                <span className="font-bold">{provider.rating}</span>
                <span className="text-slate-500">({provider.reviews} Reviews)</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-slate-500">
                <MapPin className="h-4 w-4"/>
                <span>Lahore Medical Center</span>
              </div>

              <p className="mt-4 line-clamp-2 text-sm text-slate-600">
                {provider.bio}
              </p>
            </div>
          </div>

          <div className="flex min-w-[230px] flex-col justify-center border-t bg-slate-50 p-6 lg:border-l lg:border-t-0">
            <p className="text-center text-3xl font-extrabold text-slate-900">
              ${provider.hourlyRate}
            </p>
            <p className="mb-5 text-center text-xs uppercase tracking-wider text-slate-500">
              Consultation Fee
            </p>

            <Button
              className="w-full rounded-xl font-semibold shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => navigate(`/provider/${provider.id}`)}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-2 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600"/>
      <div className="flex flex-1 flex-col p-6 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white shadow-lg">
          {provider.name.charAt(0)}
        </div>

        <Badge className="mx-auto mb-3 rounded-full bg-emerald-500 px-3">
          <CheckCircle className="mr-1 h-3 w-3"/>
          Verified
        </Badge>

        <h3
          className="cursor-pointer text-xl font-bold text-slate-900 transition hover:text-blue-600"
          onClick={() => navigate(`/provider/${provider.id}`)}
        >
          {provider.name}
        </h3>

        <p className="mt-2 font-medium text-blue-600">{provider.specialty}</p>

        <div className="mt-3 flex items-center justify-center gap-2">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400"/>
          <span className="font-bold">{provider.rating}</span>
          <span className="text-slate-500">({provider.reviews})</span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm text-slate-600">{provider.bio}</p>

        <div className="mt-6">
          <span className="text-3xl font-extrabold">${provider.hourlyRate}</span>
          <span className="text-slate-500"> / session</span>
        </div>

        <Button
          className="mt-auto mt-6 w-full rounded-xl font-semibold shadow-lg transition-all hover:scale-[1.02]"
          onClick={() => navigate(`/provider/${provider.id}`)}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default ProviderCard;
