import React from "react";
import { SlidersHorizontal } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

const specialties = [
  "Cardiologist",
  "General Physician",
  "Dermatologist",
  "Orthopedic Surgeon",
];

const ratings = ["4+ Stars", "3+ Stars"];

const DoctorFilters = () => {
  return (
    <aside className="md:col-span-1">
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        {/* Header */}

        <div className="mb-6 flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-blue-600" />

          <h2 className="text-xl font-bold text-slate-900">
            Filters
          </h2>
        </div>

        {/* Specialties */}

        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Specialty
        </h3>

        <div className="space-y-3">
          {specialties.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-50"
            >
              <Checkbox id={`specialty-${index}`} />

              <Label htmlFor={`specialty-${index}`}>
                {item}
              </Label>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Price */}

        <h3 className="mb-4 text-sm font-semibold text-slate-700">
          Consultation Fee
        </h3>

        <Slider
          defaultValue={[100]}
          max={200}
          step={1}
        />

        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>$0</span>

          <span>$200+</span>
        </div>

        <Separator className="my-6" />

        {/* Rating */}

        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Rating
        </h3>

        {ratings.map((item, index) => (
          <div
            key={item}
            className="mb-2 flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-50"
          >
            <Checkbox id={`rating-${index}`} />

            <Label htmlFor={`rating-${index}`}>
              {item}
            </Label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DoctorFilters;