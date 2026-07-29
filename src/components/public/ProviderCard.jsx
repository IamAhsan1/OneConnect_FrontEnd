import React from 'react';
import { useNavigate } from 'react-router';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProviderCard = ({ provider, viewMode }) => {
  const navigate = useNavigate();

  if (viewMode === 'list') {
    return (
      <div className="flex flex-col sm:flex-row mb-4 bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex-grow flex p-6 items-start">
          <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-3xl font-bold mr-6 shrink-0">
            {provider.name.charAt(0)}
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <h3 
                className="text-xl font-bold text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate(`/provider/${provider.id}`)}
              >
                {provider.name}
              </h3>
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-[10px] h-5 px-1.5"><CheckCircle className="w-3 h-3 mr-1" />Verified</Badge>
            </div>
            
            <p className="text-sm font-semibold text-slate-600 mb-2">
              {provider.specialty}
            </p>
            
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-slate-700">{provider.rating}</span>
              <span className="text-sm text-slate-500">({provider.reviews} Reviews)</span>
            </div>

            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Lahore Medical Center</span>
            </div>
          </div>
        </div>

        <div className="hidden sm:block w-px bg-slate-200"></div>
        <div className="sm:hidden h-px bg-slate-200 w-full"></div>

        <div className="p-6 flex flex-col justify-center min-w-[200px] bg-slate-50">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-slate-900">${provider.hourlyRate}</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Consultation Fee</p>
          </div>
          <Button 
            className="w-full font-semibold" 
            onClick={() => navigate(`/provider/${provider.id}`)}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    );
  }

  // GRID VIEW
  return (
    <div className="h-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex-grow p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
          {provider.name.charAt(0)}
        </div>
        
        <h3 
          className="text-lg font-bold text-blue-600 cursor-pointer hover:underline mb-1"
          onClick={() => navigate(`/provider/${provider.id}`)}
        >
          {provider.name}
        </h3>
        <p className="text-sm font-semibold text-slate-600 mb-3">
          {provider.specialty}
        </p>
        
        <div className="flex justify-center items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold text-slate-700">{provider.rating}</span>
          <span className="text-sm text-slate-500">({provider.reviews})</span>
        </div>

        <div className="mb-2">
          <span className="text-xl font-bold text-slate-900">${provider.hourlyRate}</span>
          <span className="text-sm text-slate-500"> / session</span>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Button 
          className="w-full font-semibold" 
          onClick={() => navigate(`/provider/${provider.id}`)}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default ProviderCard;
