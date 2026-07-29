import React from 'react';
import { Save, User, Clock, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const ProviderSettings = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Settings & Profile</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your public presence and operational rules.</p>
        </div>
        <Button className="font-bold bg-blue-600 hover:bg-blue-700 hidden sm:flex">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <Tabs defaultValue="profile" className="w-full flex flex-col md:flex-row">
          
          <TabsList className="flex md:flex-col justify-start items-start bg-slate-50 md:w-64 h-auto border-b md:border-b-0 md:border-r border-slate-200 rounded-none p-0">
            <TabsTrigger value="profile" className="w-full justify-start px-6 py-4 text-left data-[state=active]:bg-white data-[state=active]:border-l-4 data-[state=active]:border-l-blue-600 rounded-none shadow-none font-semibold text-slate-600 data-[state=active]:text-blue-700">
              <User className="w-4 h-4 mr-3" /> Public Profile
            </TabsTrigger>
            <TabsTrigger value="schedule" className="w-full justify-start px-6 py-4 text-left data-[state=active]:bg-white data-[state=active]:border-l-4 data-[state=active]:border-l-blue-600 rounded-none shadow-none font-semibold text-slate-600 data-[state=active]:text-blue-700">
              <Clock className="w-4 h-4 mr-3" /> Availability
            </TabsTrigger>
            <TabsTrigger value="billing" className="w-full justify-start px-6 py-4 text-left data-[state=active]:bg-white data-[state=active]:border-l-4 data-[state=active]:border-l-blue-600 rounded-none shadow-none font-semibold text-slate-600 data-[state=active]:text-blue-700">
              <CreditCard className="w-4 h-4 mr-3" /> Billing & Fees
            </TabsTrigger>
          </TabsList>

          <div className="flex-grow p-6 md:p-8">
            <TabsContent value="profile" className="m-0 outline-none space-y-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Profile Information</h2>
              
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input id="displayName" defaultValue="Dr. Sarah Ahmed" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" defaultValue="Healthcare" disabled className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty</Label>
                  <Input id="specialty" defaultValue="Cardiologist" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Professional Biography</Label>
                <Textarea id="bio" rows={6} defaultValue="I am a board-certified Cardiologist with over 10 years of experience..." />
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="m-0 outline-none space-y-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Standard Availability</h2>
              
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="flex items-center gap-4 py-2 border-b border-slate-100 last:border-0">
                    <div className="flex items-center space-x-2 w-32 shrink-0">
                      <Checkbox id={`setting-${day}`} defaultChecked />
                      <Label htmlFor={`setting-${day}`} className="font-semibold cursor-pointer">{day}</Label>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-grow">
                      <Input type="time" defaultValue="09:00" className="w-32" />
                      <span className="text-slate-400 font-medium">to</span>
                      <Input type="time" defaultValue="17:00" className="w-32" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="billing" className="m-0 outline-none space-y-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Billing Rules</h2>
              
              <div className="space-y-2 max-w-sm">
                <Label htmlFor="fee">Consultation Fee</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-500 font-medium">$</span>
                  <Input id="fee" type="number" defaultValue="50.00" className="pl-8" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900">Require Prepayment</h4>
                    <p className="text-sm text-slate-500">Clients must pay to book an appointment.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900">Allow Cancellations</h4>
                    <p className="text-sm text-slate-500">Clients can cancel up to 24 hours prior.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </TabsContent>

            <div className="mt-8 pt-6 border-t border-slate-100 sm:hidden">
              <Button className="w-full font-bold bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" /> Save Changes
              </Button>
            </div>
          </div>

        </Tabs>
      </div>
    </div>
  );
};

export default ProviderSettings;
