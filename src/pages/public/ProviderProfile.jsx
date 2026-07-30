import React from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle, MapPin, Star, Globe } from "lucide-react";
import BookingWidget from "../../components/public/BookingWidget";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProviderProfile = () => {
  const { id } = useParams();

  const provider = {
    id,
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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-4 w-4"/> Back to Directory
      </Link>

      <div className="mb-8 overflow-hidden rounded-3xl border bg-gradient-to-br from-white via-blue-50 to-slate-50 shadow-xl">
        <div className="p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-5xl font-bold text-white shadow-xl">
              {provider.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-extrabold text-slate-900">{provider.name}</h1>
                <Badge className="rounded-full bg-emerald-500 px-3 py-1">
                  <CheckCircle className="mr-1 h-3 w-3"/> Verified
                </Badge>
              </div>

              <p className="text-lg font-medium text-blue-600">
                {provider.category} • {provider.specialty}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="rounded-xl bg-white px-4 py-3 shadow">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400"/>
                    <span className="font-bold">{provider.rating}</span>
                    <span className="text-slate-500">({provider.reviews})</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white px-4 py-3 shadow">
                  <span className="text-2xl font-bold">${provider.hourlyRate}</span>
                  <span className="text-slate-500"> / session</span>
                </div>

                <div className="rounded-xl bg-white px-4 py-3 shadow">
                  <span className="font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-3xl border bg-white shadow-lg">
            <Tabs defaultValue="about">
              <div className="border-b px-6">
                <TabsList className="h-14 bg-transparent">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
              </div>

              <div className="p-8">
                <TabsContent value="about">
                  <h2 className="mb-4 text-2xl font-bold">Biography</h2>
                  <p className="leading-8 text-slate-600">{provider.bio}</p>

                  <Separator className="my-8"/>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h4 className="mb-2 text-sm font-bold uppercase text-slate-400">Specialization</h4>
                      <p className="font-semibold">{provider.specialty}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h4 className="mb-2 text-sm font-bold uppercase text-slate-400">Languages</h4>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600"/>
                        <span>{provider.languages.join(", ")}</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5 md:col-span-2">
                      <h4 className="mb-2 text-sm font-bold uppercase text-slate-400">Clinic Location</h4>
                      <div className="flex gap-2">
                        <MapPin className="h-5 w-5 text-blue-600"/>
                        <span>{provider.location}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="py-12 text-center text-slate-500">
                    Reviews will appear here...
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        <div>
          <div className="sticky top-24 rounded-3xl bg-white/70 backdrop-blur-sm">
            <BookingWidget providerId={provider.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
