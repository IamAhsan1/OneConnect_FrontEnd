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
  reasonForVisit: z.string().min(10, "Please provide a detailed reason (at least 10 characters)"),
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
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#0f172a',
              fontFamily: 'Inter, sans-serif',
              '::placeholder': { color: '#94a3b8' },
            },
            invalid: { color: '#ef4444' },
          },
        }} />
      </div>

      {paymentError && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
          {paymentError}
        </div>
      )}

      <Button
        type="submit"
        className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700"
        disabled={!stripe || isProcessing}
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
  const { providerId, selectedSlot } = location.state || { providerId: '1', selectedSlot: { start: new Date() } };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(intakeSchema),
    mode: 'onTouched'
  });

  const [intakeData, setIntakeData] = useState(null);

  const onSubmitIntake = (data) => {
    setIntakeData(data);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Complete Your Booking</h1>
        <p className="text-slate-600 text-lg">Please provide the required details and complete your payment to confirm your appointment.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Flow */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Step 1: Intake Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm relative">
            {intakeData && (
              <div className="absolute top-6 right-6 flex items-center text-emerald-600 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 mr-1" /> Completed
              </div>
            )}
            
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Required Details</h2>
            <Separator className="mb-6" />

            <form onSubmit={handleSubmit(onSubmitIntake)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reasonForVisit">Reason for Visit <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="reasonForVisit" 
                  rows={4}
                  placeholder="Please describe why you are scheduling this appointment..."
                  disabled={!!intakeData}
                  className={errors.reasonForVisit ? 'border-red-500' : ''}
                  {...register('reasonForVisit')}
                />
                {errors.reasonForVisit && <p className="text-sm text-red-500">{errors.reasonForVisit.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicalHistory">Past Medical History (Optional)</Label>
                <Textarea 
                  id="medicalHistory" 
                  rows={3}
                  disabled={!!intakeData}
                  placeholder="Any previous diagnoses, allergies, or ongoing treatments..."
                  {...register('medicalHistory')}
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Previous Reports (Optional)</Label>
                <div className={`border-2 border-dashed border-slate-200 rounded-xl p-6 text-center transition-colors ${intakeData ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50 cursor-pointer'}`}>
                  <UploadCloud className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">Select File</p>
                </div>
              </div>

              {!intakeData && (
                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={!isValid}
                  >
                    Save & Continue
                  </Button>
                </div>
              )}
            </form>
          </div>

          {/* Step 2: Payment */}
          <div className={`bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm transition-opacity duration-300 ${!intakeData ? 'opacity-50 pointer-events-none' : ''}`}>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Payment Method</h2>
            <Separator className="mb-6" />
            
            {intakeData ? (
              <Elements stripe={stripePromise}>
                <CheckoutForm providerId={providerId} selectedSlot={selectedSlot} formData={intakeData} />
              </Elements>
            ) : (
              <p className="text-slate-500 text-sm text-center py-8">Please complete Step 1 first.</p>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl sticky top-24 text-white">
            <h2 className="text-lg font-bold mb-4">Appointment Summary</h2>
            <Separator className="mb-6 opacity-20 bg-white" />
            
            <div className="mb-6">
              <p className="text-sm text-slate-400 mb-1">Professional</p>
              <p className="text-base font-semibold">Dr. Sarah Ahmed</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-slate-400 mb-1">Date & Time</p>
              <p className="text-base font-semibold">
                {selectedSlot?.start?.toLocaleString()}
              </p>
            </div>

            <Separator className="my-6 opacity-20 bg-white" />

            <div className="flex justify-between items-center mb-2 text-slate-300">
              <span>Consultation Fee</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between items-center mb-6 text-slate-300">
              <span>Platform Fee</span>
              <span>$0.00</span>
            </div>

            <div className="flex justify-between items-center text-xl">
              <span className="font-bold">Total</span>
              <span className="font-extrabold">$50.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
