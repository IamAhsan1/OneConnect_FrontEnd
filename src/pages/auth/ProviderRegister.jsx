import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { UploadCloud } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const providerRegisterSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Sub-category is required"),
  experience: z.coerce.number().min(0, "Experience cannot be negative"),
});

const steps = ['Basic Details', 'Professional Info', 'Verification'];

const ProviderRegister = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(providerRegisterSchema),
    mode: 'onTouched',
    defaultValues: {
      category: '',
      subCategory: '',
      experience: 0,
    }
  });

  const handleNext = async () => {
    let isStepValid = false;
    
    if (activeStep === 0) {
      isStepValid = await trigger(['fullName', 'email', 'password']);
    } else if (activeStep === 1) {
      isStepValid = await trigger(['category', 'subCategory', 'experience']);
    } else if (activeStep === 2) {
      isStepValid = true; 
    }

    if (isStepValid) {
      if (activeStep === steps.length - 1) {
        handleSubmit(onSubmit)();
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    console.log("Provider Registration Data:", data);
    navigate('/register/provider/success');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4 py-4 animate-in fade-in duration-300">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                placeholder="e.g. Dr. Sarah Ahmed"
                className={errors.fullName ? 'border-red-500' : ''}
                {...register('fullName')}
              />
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                className={errors.email ? 'border-red-500' : ''}
                {...register('email')}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                className={errors.password ? 'border-red-500' : ''}
                {...register('password')}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4 py-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select 
                  id="category"
                  className={`flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.category ? 'border-red-500' : 'border-input'}`}
                  {...register('category')}
                >
                  <option value="">Select Category</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Legal">Legal</option>
                  <option value="Education">Education</option>
                </select>
                {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subCategory">Sub-Category</Label>
                <select 
                  id="subCategory"
                  className={`flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.subCategory ? 'border-red-500' : 'border-input'}`}
                  {...register('subCategory')}
                >
                  <option value="">Select Sub-Category</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Lawyer">Lawyer</option>
                  <option value="Teacher">Teacher</option>
                </select>
                {errors.subCategory && <p className="text-sm text-red-500">{errors.subCategory.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input 
                id="experience" 
                type="number" 
                className={errors.experience ? 'border-red-500' : ''}
                {...register('experience')}
              />
              {errors.experience && <p className="text-sm text-red-500">{errors.experience.message}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 py-4 animate-in fade-in duration-300">
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
              <UploadCloud className="h-10 w-10 text-blue-500 mx-auto mb-2" />
              <p className="font-semibold text-slate-700">Upload Government ID</p>
              <p className="text-sm text-slate-500">Drag & Drop File or Browse</p>
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
              <UploadCloud className="h-10 w-10 text-blue-500 mx-auto mb-2" />
              <p className="font-semibold text-slate-700">Upload Professional License/Degree</p>
              <p className="text-sm text-slate-500">Drag & Drop File or Browse</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="border-0 shadow-lg sm:rounded-2xl w-full max-w-2xl mx-auto">
      <CardHeader className="text-center space-y-2 pt-8 pb-4">
        <CardTitle className="text-3xl font-bold tracking-tight">Professional Application</CardTitle>
        <CardDescription className="text-base">
          Join OneConnect in three easy steps
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-4 md:px-8 pb-8">
        
        {/* Stepper Header (Custom Tailwind) */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((label, index) => (
            <div key={label} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${activeStep >= index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {index + 1}
              </div>
              <span className={`ml-2 text-sm font-semibold hidden md:block ${activeStep >= index ? 'text-slate-800' : 'text-slate-400'}`}>
                {label}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-10 md:w-16 h-1 mx-2 rounded-full ${activeStep > index ? 'bg-blue-600' : 'bg-slate-100'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="min-h-[300px]">
            {renderStepContent(activeStep)}
          </div>

          <div className="flex justify-between mt-8 pt-4 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            
            <Button 
              type="button" 
              onClick={handleNext} 
              disabled={isSubmitting}
            >
              {activeStep === steps.length - 1 ? 'Submit Application' : 'Next Step'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProviderRegister;
