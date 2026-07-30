import React, { useState } from "react";
import { LayoutGrid, LayoutList, SlidersHorizontal } from "lucide-react";
import ProviderCard from "./ProviderCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Mock Data
const mockProviders = [
  {id:1,name:"Dr. Sarah Ahmed",category:"Healthcare",specialty:"Cardiologist",rating:4.9,reviews:120,hourlyRate:50,bio:"Experienced cardiologist with over 10 years of practice in major hospitals."},
  {id:2,name:"Dr. Ali Khan",category:"Healthcare",specialty:"General Physician",rating:4.7,reviews:85,hourlyRate:30,bio:"Family doctor focusing on holistic and preventive medicine."},
  {id:3,name:"Mr. John Smith",category:"Legal",specialty:"Corporate Lawyer",rating:4.8,reviews:54,hourlyRate:100,bio:"Specializing in business formation, contracts, and corporate litigation."},
  {id:4,name:"Ms. Emma Davis",category:"Education",specialty:"Math Tutor",rating:5.0,reviews:42,hourlyRate:40,bio:"High school and college-level mathematics tutor."},
];

export default function SearchDirectory(){
  const [viewMode,setViewMode]=useState("list");
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-blue-600"/>
              <h2 className="text-xl font-bold">Filters</h2>
            </div>

            <h3 className="mb-3 text-sm font-semibold text-slate-700">Category</h3>
            <div className="space-y-3">
              {["Healthcare","Legal","Education"].map((c,i)=>(
                <div key={c} className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-50">
                  <Checkbox id={"c"+i} defaultChecked/>
                  <Label htmlFor={"c"+i}>{c}</Label>
                </div>
              ))}
            </div>

            <Separator className="my-6"/>

            <h3 className="mb-4 text-sm font-semibold text-slate-700">Price Range</h3>
            <Slider defaultValue={[100]} max={200} step={1}/>
            <div className="mt-2 flex justify-between text-xs text-slate-500"><span>$0</span><span>$200+</span></div>

            <Separator className="my-6"/>

            <h3 className="mb-3 text-sm font-semibold text-slate-700">Rating</h3>
            {["4+ Stars","3+ Stars"].map((r,i)=>(
              <div key={r} className="mb-2 flex items-center gap-2 rounded-lg p-2 hover:bg-slate-50">
                <Checkbox id={"r"+i}/>
                <Label htmlFor={"r"+i}>{r}</Label>
              </div>
            ))}
          </div>
        </aside>

        <section className="md:col-span-3">
          <div className="mb-6 flex flex-col gap-4 rounded-3xl border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Search Results</p>
              <h2 className="text-2xl font-bold text-slate-900">Found {mockProviders.length} Professionals</h2>
            </div>

            <ToggleGroup type="single" value={viewMode} onValueChange={v=>v&&setViewMode(v)} className="rounded-xl border bg-slate-50 p-1">
              <ToggleGroupItem value="list"><LayoutList className="h-4 w-4"/></ToggleGroupItem>
              <ToggleGroupItem value="grid"><LayoutGrid className="h-4 w-4"/></ToggleGroupItem>
            </ToggleGroup>
          </div>

          {viewMode==="list" ? (
            <div className="space-y-5">
              {mockProviders.map(p=><ProviderCard key={p.id} provider={p} viewMode="list"/>)}
            </div>
          ):(
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {mockProviders.map(p=><ProviderCard key={p.id} provider={p} viewMode="grid"/>)}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
