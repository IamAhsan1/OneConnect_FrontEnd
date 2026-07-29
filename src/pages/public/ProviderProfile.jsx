import React from 'react';
import { useParams, Link } from 'react-router';
import { Star, ArrowLeft, MapPin } from 'lucide-react';

import BookingWidget from '../../components/public/BookingWidget';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ProviderProfile = () => {
  const { id } = useParams();

  // Mock Provider Data
  const provider = {
    id: id,
    name: "Dr. Sarah Ahmed",
    category: "Healthcare",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 120,
    hourlyRate: 50,
    languages: ["English", "Urdu"],
    location: "Lahore Medical Center, Gulberg III",
    bio: "I am a board-certified Cardiologist with over 10 years of experience in diagnosing and treating cardiovascular diseases. I specialize in preventive cardiology and echocardiography. My goal is to provide comprehensive and compassionate care to all my patients."
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-in fade-in duration-500">
      <Link to="/" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Directory
      </Link>

      {/* Profile Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-4xl md:text-5xl font-bold shrink-0">
            {provider.name.charAt(0)}
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                {provider.name}
              </h1>
              <Badge className="bg-emerald-500 hover:bg-emerald-600">Verified</Badge>
            </div>
            
            <p className="text-lg text-slate-600 font-medium mb-4">
              {provider.category} <span className="mx-2">•</span> {provider.specialty}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-slate-900 text-base">{provider.rating}</span>
                <span className="text-slate-500">({provider.reviews} Reviews)</span>
              </div>
              
              <div className="hidden sm:block w-px h-5 bg-slate-300"></div>
              
              <div className="text-slate-900 text-base">
                <span className="font-bold">${provider.hourlyRate}</span> <span className="text-slate-500 font-normal">/ session</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <Tabs defaultValue="about" className="w-full">
              <div className="border-b px-6">
                <TabsList className="bg-transparent h-14">
                  <TabsTrigger value="about" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none px-4 font-semibold text-base">About</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none px-4 font-semibold text-base">Reviews</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6 md:p-8">
                <TabsContent value="about" className="mt-0 outline-none">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Biography</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {provider.bio}
                  </p>

                  <Separator className="mb-8" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Specialization</h4>
                      <p className="font-semibold text-slate-900">{provider.specialty}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Languages Spoken</h4>
                      <p className="font-semibold text-slate-900">{provider.languages.join(', ')}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Clinic Location</h4>
                      <div className="flex items-start gap-2 text-slate-900 font-semibold">
                        <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-0 outline-none">
                  <div className="py-12 text-center text-slate-500">
                    Reviews will appear here...
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Sidebar: Booking Widget */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingWidget providerId={provider.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
