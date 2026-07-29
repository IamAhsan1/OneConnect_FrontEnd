import React from "react";
import { Link, useNavigate } from "react-router";
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

const customerRegisterSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const CustomerRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(customerRegisterSchema),
  });

  const onSubmit = (data) => {
    console.log("Customer Registration Data:", data);
    navigate("/");
  };

  return (
    <Card className="w-full max-w-lg mx-auto border-0 shadow-lg rounded-xl sm:rounded-2xl">
      <CardHeader className="space-y-2 px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 text-center">
        <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
          Create an Account
        </CardTitle>

        <CardDescription className="text-sm sm:text-base">
          Join OneConnect to book trusted professionals
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              className={errors.fullName ? "border-red-500" : ""}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                className={errors.email ? "border-red-500" : ""}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                className={errors.phoneNumber ? "border-red-500" : ""}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className={errors.password ? "border-red-500" : ""}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                className={errors.confirmPassword ? "border-red-500" : ""}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base mt-6"
            disabled={isSubmitting}
          >
            Create Customer Account
          </Button>
        </form>
      </CardContent>

          <CardFooter className="flex justify-center px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default CustomerRegister;
