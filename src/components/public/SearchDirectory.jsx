import React, { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import ProviderCard from "./ProviderCard";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

// Mock Data
const mockProviders = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    category: "Healthcare",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 120,
    hourlyRate: 50,
    bio: "Experienced cardiologist with over 10 years of practice in major hospitals.",
  },
  {
    id: 2,
    name: "Dr. Ali Khan",
    category: "Healthcare",
    specialty: "General Physician",
    rating: 4.7,
    reviews: 85,
    hourlyRate: 30,
    bio: "Family doctor focusing on holistic and preventive medicine.",
  },
  {
    id: 3,
    name: "Mr. John Smith",
    category: "Legal",
    specialty: "Corporate Lawyer",
    rating: 4.8,
    reviews: 54,
    hourlyRate: 100,
    bio: "Specializing in business formation, contracts, and corporate litigation.",
  },
  {
    id: 4,
    name: "Ms. Emma Davis",
    category: "Education",
    specialty: "Math Tutor",
    rating: 5.0,
    reviews: 42,
    hourlyRate: 40,
    bio: "High school and college-level mathematics tutor.",
  },
];

const SearchDirectory = () => {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:sticky md:top-24 md:p-6">
            <h2 className="mb-6 text-lg font-bold text-slate-900">
              Filters
            </h2>

            {/* Category */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-slate-700">
                Category
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-health" defaultChecked />
                  <Label htmlFor="cat-health">Healthcare</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-legal" defaultChecked />
                  <Label htmlFor="cat-legal">Legal</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-edu" defaultChecked />
                  <Label htmlFor="cat-edu">Education</Label>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Price */}
            <div className="mb-6">
              <h3 className="mb-4 text-sm font-semibold text-slate-700">
                Price Range
              </h3>

              <Slider
                defaultValue={[100]}
                max={200}
                step={1}
                className="mb-2"
              />

              <div className="flex justify-between text-xs font-medium text-slate-500">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Rating */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-700">
                Rating
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rate-4" />
                  <Label htmlFor="rate-4">4+ Stars</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="rate-3" />
                  <Label htmlFor="rate-3">3+ Stars</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Results */}
        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Found {mockProviders.length} Professionals
            </h2>

            <ToggleGroup
              type="single"
              value={viewMode}
              onValueChange={(value) => value && setViewMode(value)}
              className="w-fit self-start rounded-md border bg-white p-1 sm:self-auto"
            >
              <ToggleGroupItem
                value="list"
                aria-label="List View"
                className="px-3"
              >
                <LayoutList className="h-4 w-4" />
              </ToggleGroupItem>

              <ToggleGroupItem
                value="grid"
                aria-label="Grid View"
                className="px-3"
              >
                <LayoutGrid className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {viewMode === "list" ? (
            <div className="space-y-4 animate-in fade-in duration-300">
              {mockProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  viewMode="list"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 animate-in fade-in duration-300">
              {mockProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  viewMode="grid"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDirectory;