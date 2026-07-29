import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const steps = ['Profile Setup', 'Pricing & Rules', 'Availability'];

const daysOfWeek = [
  { id: 'mon', label: 'Monday' },
  { id: 'tue', label: 'Tuesday' },
  { id: 'wed', label: 'Wednesday' },
  { id: 'thu', label: 'Thursday' },
  { id: 'fri', label: 'Friday' },
  { id: 'sat', label: 'Saturday' },
  { id: 'sun', label: 'Sunday' },
];

const ProviderOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/provider/dashboard');
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-6 mb-2">
              <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Profile Photo</h4>
                <p className="text-sm text-slate-500 mb-3">Upload a professional headshot. Max size 2MB.</p>
                <Button variant="outline" size="sm">Choose File</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input id="displayName" placeholder="e.g. Dr. Sarah Ahmed" defaultValue="Dr. Sarah Ahmed" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Biography</Label>
              <Textarea 
                id="bio" 
                rows={5}
                placeholder="Write a brief introduction about your experience and specialties..."
              />
              <p className="text-xs text-slate-500">This will be displayed on your public profile.</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Primary Clinic / Office Location</Label>
              <Input id="location" placeholder="e.g. Lahore Medical Center" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <Label htmlFor="consultationFee">Base Consultation Fee (per session)</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-500 font-medium">$</span>
                <Input id="consultationFee" type="number" className="pl-8" placeholder="50.00" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">Payment & Cancellation Policies</h4>
              
              <div className="flex items-start space-x-3">
                <Checkbox id="requirePrepayment" defaultChecked className="mt-1" />
                <div>
                  <Label htmlFor="requirePrepayment" className="font-medium">Require full prepayment to book</Label>
                  <p className="text-sm text-slate-500">Clients must pay via Stripe before the appointment is confirmed.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="allowCancellations" defaultChecked className="mt-1" />
                <div>
                  <Label htmlFor="allowCancellations" className="font-medium">Allow free cancellations</Label>
                  <p className="text-sm text-slate-500">Clients can cancel up to 24 hours before the appointment for a full refund.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <p className="text-sm text-slate-600 mb-4">
              Select the days you are available for appointments and set your standard working hours.
            </p>

            <div className="space-y-4">
              {daysOfWeek.map((day) => (
                <div key={day.id} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center space-x-2 w-32 shrink-0">
                    <Checkbox id={`day-${day.id}`} defaultChecked={['mon', 'tue', 'wed', 'thu', 'fri'].includes(day.id)} />
                    <Label htmlFor={`day-${day.id}`} className="font-semibold cursor-pointer">{day.label}</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-grow">
                    <Input type="time" defaultValue="09:00" className="w-32 bg-white" />
                    <span className="text-slate-400 font-medium">to</span>
                    <Input type="time" defaultValue="17:00" className="w-32 bg-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 border border-blue-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">
                You can always block off specific dates or adjust your schedule later from your Dashboard settings.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-8 md:p-12 text-center">
          <h1 className="text-3xl font-extrabold mb-2">Welcome to OneConnect</h1>
          <p className="text-slate-300 font-medium">Let's get your profile set up so you can start taking bookings.</p>
        </div>
        
        <CardContent className="p-8 md:p-12">
          
          {/* Stepper Navigation */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((label, index) => (
              <div key={label} className="flex flex-col items-center flex-1 relative">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors ${
                    activeStep >= index 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`mt-3 text-sm font-semibold hidden md:block ${
                  activeStep >= index ? 'text-slate-900' : 'text-slate-400'
                }`}>
                  {label}
                </span>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute top-5 left-1/2 w-full h-1 -z-0 ${
                    activeStep > index ? 'bg-blue-600' : 'bg-slate-100'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="min-h-[400px]">
            {renderStepContent(activeStep)}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-slate-100">
            <Button
              variant="outline"
              disabled={activeStep === 0}
              onClick={handleBack}
              className="px-6"
            >
              Back
            </Button>
            
            <Button 
              onClick={handleNext}
              className="px-8"
            >
              {activeStep === steps.length - 1 ? 'Finish Setup' : 'Continue'}
            </Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default ProviderOnboarding;
