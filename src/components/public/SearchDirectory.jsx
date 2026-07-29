import React, { useState } from 'react';
import { LayoutList, LayoutGrid } from 'lucide-react';
import ProviderCard from './ProviderCard';

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

// Mock Data
const mockProviders = [
  { id: 1, name: "Dr. Sarah Ahmed", category: "Healthcare", specialty: "Cardiologist", rating: 4.9, reviews: 120, hourlyRate: 50, bio: "Experienced cardiologist with over 10 years of practice in major hospitals." },
  { id: 2, name: "Dr. Ali Khan", category: "Healthcare", specialty: "General Physician", rating: 4.7, reviews: 85, hourlyRate: 30, bio: "Family doctor focusing on holistic and preventive medicine." },
  { id: 3, name: "Mr. John Smith", category: "Legal", specialty: "Corporate Lawyer", rating: 4.8, reviews: 54, hourlyRate: 100, bio: "Specializing in business formation, contracts, and corporate litigation." },
  { id: 4, name: "Ms. Emma Davis", category: "Education", specialty: "Math Tutor", rating: 5.0, reviews: 42, hourlyRate: 40, bio: "High school and college-level mathematics tutor." }
];

const SearchDirectory = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 sticky top-24 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Filters</h2>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Category</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-health" defaultChecked />
                  <Label htmlFor="cat-health" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Healthcare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-legal" defaultChecked />
                  <Label htmlFor="cat-legal" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Legal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-edu" defaultChecked />
                  <Label htmlFor="cat-edu" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Education</Label>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Price Range</h3>
              <Slider defaultValue={[100]} max={200} step={1} className="mb-2" />
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-2">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Rating</h3>
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Found {mockProviders.length} Professionals
            </h2>
            
            <ToggleGroup 
              type="single" 
              value={viewMode} 
              onValueChange={(value) => value && setViewMode(value)}
              className="border rounded-md bg-white p-1"
            >
              <ToggleGroupItem value="list" aria-label="List View" className="px-2">
                <LayoutList className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="grid" aria-label="Grid View" className="px-2">
                <LayoutGrid className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {viewMode === 'list' ? (
            <div className="space-y-4 animate-in fade-in duration-300">
              {mockProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} viewMode="list" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {mockProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} viewMode="grid" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDirectory;
