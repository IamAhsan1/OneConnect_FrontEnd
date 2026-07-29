import React, { useState } from "react";
import { Link } from "react-router";
import { Mail, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
});

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data) => {
    console.log("Forgot Password Request for:", data.email);
    setSubmitted(true);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-lg rounded-xl sm:rounded-2xl">
      <CardHeader className="space-y-2 px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 text-center">
        <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
          Reset your password
        </CardTitle>

        <CardDescription className="text-sm sm:text-base">
          Enter the email address associated with your account and we will send
          you a secure reset link.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                <Input
                  id="email"
                  type="email"
                  className={`pl-10 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base mt-6"
              disabled={isSubmitting}
            >
              Send Reset Link
            </Button>
          </form>
        ) : (
          <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600 mt-0.5" />

            <p className="text-sm font-medium text-emerald-800">
              If an account exists for that email, a reset link has been sent.
              Please check your inbox.
            </p>
          </div>
        )}
      </CardContent>

            <CardFooter className="flex justify-center px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        <Link
          to="/login"
          className="text-center text-sm font-semibold text-blue-600 hover:underline"
        >
          &larr; Back to Login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ForgotPassword;
