import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// Mock Stripe Promise (Use a real publishable key in production)
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// Intake Form Schema
const intakeSchema = z.object({
  reasonForVisit: z
    .string()
    .min(10, "Please provide a detailed reason (at least 10 characters)"),
  medicalHistory: z.string().optional(),
});

const CheckoutForm = ({ providerId, selectedSlot, formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setPaymentError(null);

    // Simulate network request
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/customer/dashboard');
    }, 2000);
  };

  return (
    <form onSubmit={handlePayment} className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#0f172a',
                fontFamily: 'Inter, sans-serif',
                '::placeholder': {
                  color: '#94a3b8',
                },
              },
              invalid: {
                color: '#ef4444',
              },
            },
          }}
        />
      </div>

      {paymentError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600">
          {paymentError}
        </div>
      )}

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="h-12 w-full rounded-xl bg-blue-600 text-base font-bold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
      >
        {isProcessing ? 'Processing Payment...' : 'Confirm & Pay $50.00'}
      </Button>
    </form>
  );
};


const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mock fallback if state is missing
  const { providerId, selectedSlot } =
    location.state || {
      providerId: '1',
      selectedSlot: { start: new Date() },
    };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(intakeSchema),
    mode: 'onTouched',
  });

  const [intakeData, setIntakeData] = useState(null);

  const onSubmitIntake = (data) => {
    setIntakeData(data);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Complete Your Booking
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
          Please provide the required details and complete your payment to
          confirm your appointment.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">

        {/* Left Column: Flow */}
        <div className="space-y-6 lg:col-span-2">
          
        {/* Step 1: Intake Form */}
<div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-8">
  {intakeData && (
    <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
      <CheckCircle2 className="h-5 w-5" />
      Completed
    </div>
  )}

  <h2 className="mb-2 text-2xl font-bold text-slate-900">
    1. Required Details
  </h2>

  <p className="mb-6 text-sm text-slate-500">
    Fill in your appointment details before proceeding to payment.
  </p>

  <Separator className="mb-8" />

  <form onSubmit={handleSubmit(onSubmitIntake)} className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="reasonForVisit">
        Reason for Visit <span className="text-red-500">*</span>
      </Label>

      <Textarea
        id="reasonForVisit"
        rows={4}
        placeholder="Please describe why you are scheduling this appointment..."
        disabled={!!intakeData}
        className={`rounded-xl transition-all focus:ring-2 focus:ring-blue-500 ${
          errors.reasonForVisit ? 'border-red-500' : ''
        }`}
        {...register('reasonForVisit')}
      />

      {errors.reasonForVisit && (
        <p className="text-sm font-medium text-red-500">
          {errors.reasonForVisit.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="medicalHistory">
        Past Medical History (Optional)
      </Label>

      <Textarea
        id="medicalHistory"
        rows={3}
        disabled={!!intakeData}
        placeholder="Any previous diagnoses, allergies, or ongoing treatments..."
        className="rounded-xl transition-all focus:ring-2 focus:ring-blue-500"
        {...register('medicalHistory')}
      />
    </div>

    <div className="space-y-2">
      <Label>Upload Previous Reports (Optional)</Label>

      <div
        className={`rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center transition-all duration-300 ${
          intakeData
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:border-blue-500 hover:bg-blue-50'
        }`}
      >
        <UploadCloud className="mx-auto mb-3 h-10 w-10 text-blue-500" />

        <p className="text-sm font-semibold text-slate-700">
          Select File
        </p>

        <p className="mt-1 text-xs text-slate-500">
          PDF, JPG or PNG (Max 10MB)
        </p>
      </div>
    </div>

    {!intakeData && (
      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          size="lg"
          disabled={!isValid}
          className="rounded-xl px-8 shadow-md transition-all duration-300 hover:shadow-lg"
        >
          Save & Continue
        </Button>
      </div>
    )}
  </form>
</div>

         {/* Step 2: Payment */}
<div
  className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-8 ${
    !intakeData ? 'pointer-events-none opacity-50' : ''
  }`}
>
  <h2 className="mb-2 text-2xl font-bold text-slate-900">
    2. Payment Method
  </h2>

  <p className="mb-6 text-sm text-slate-500">
    Securely complete your payment to confirm the appointment.
  </p>

  <Separator className="mb-8" />

  {intakeData ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        providerId={providerId}
        selectedSlot={selectedSlot}
        formData={intakeData}
      />
    </Elements>
  ) : (
    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 py-10 text-center">
      <p className="text-sm font-medium text-slate-500">
        Please complete <span className="font-semibold">Step 1</span> first.
      </p>
    </div>
  )}
</div>
</div>

{/* Right Column: Order Summary */}
<div className="lg:col-span-1">
  <div className="sticky top-24 rounded-3xl bg-slate-900 p-6 text-white shadow-2xl">
    <h2 className="mb-2 text-xl font-bold">
      Appointment Summary
    </h2>

    <p className="mb-6 text-sm text-slate-400">
      Review your booking before confirming payment.
    </p>

    <Separator className="mb-6 bg-white opacity-20" />

    <div className="mb-6">
      <p className="mb-1 text-sm text-slate-400">
        Professional
      </p>

      <p className="text-base font-semibold">
        Dr. Sarah Ahmed
      </p>
    </div>

    <div className="mb-6">
      <p className="mb-1 text-sm text-slate-400">
        Date & Time
      </p>

      <p className="text-base font-semibold leading-6">
        {selectedSlot?.start?.toLocaleString()}
      </p>
    </div>

    <Separator className="my-6 bg-white opacity-20" />

    <div className="mb-3 flex items-center justify-between text-slate-300">
      <span>Consultation Fee</span>
      <span className="font-medium">$50.00</span>
    </div>

    <div className="mb-6 flex items-center justify-between text-slate-300">
      <span>Platform Fee</span>
      <span className="font-medium">$0.00</span>
    </div>

    <Separator className="mb-6 bg-white opacity-20" />

    <div className="flex items-center justify-between text-2xl">
      <span className="font-bold">Total</span>
      <span className="font-extrabold text-emerald-400">
        $50.00
      </span>
    </div>
  </div>
</div>

</div>
</div>
);
};

export default Checkout;
