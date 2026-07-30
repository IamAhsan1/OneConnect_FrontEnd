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

const customerRegisterSchema = z.object({
  fullName: z.string().min(2,"Full name must be at least 2 characters"),
  email: z.string().min(1,"Email is required").email("Invalid email address"),
  phoneNumber: z.string().min(10,"Phone number must be at least 10 digits"),
  password: z.string().min(8,"Password must be at least 8 characters"),
  confirmPassword: z.string().min(1,"Please confirm your password"),
}).refine((d)=>d.password===d.confirmPassword,{
  message:"Passwords don't match",
  path:["confirmPassword"]
});

const CustomerRegister=()=>{
  const navigate=useNavigate();
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
    resolver:zodResolver(customerRegisterSchema)
  });

  const onSubmit=(data)=>{
    console.log("Customer Registration Data:",data);
    navigate("/");
  };

  const inputStyle="h-12 rounded-xl border-slate-300 transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return(
    <Card className="mx-auto w-full max-w-lg rounded-2xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-200/60 backdrop-blur-sm transition-all duration-300">
      <CardHeader className="space-y-3 px-6 sm:px-8 pt-8 text-center">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">
          Create an Account
        </CardTitle>
        <CardDescription className="text-sm text-slate-500">
          Join OneConnect to book trusted professionals
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 sm:px-8 pb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" className={`${inputStyle} ${errors.fullName?"border-red-500":""}`} {...register("fullName")} />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" className={`${inputStyle} ${errors.email?"border-red-500":""}`} {...register("email")} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" className={`${inputStyle} ${errors.phoneNumber?"border-red-500":""}`} {...register("phoneNumber")} />
              {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className={`${inputStyle} ${errors.password?"border-red-500":""}`} {...register("password")} />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" className={`${inputStyle} ${errors.confirmPassword?"border-red-500":""}`} {...register("confirmPassword")} />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 h-12 w-full rounded-xl bg-blue-600 text-base font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30">
            {isSubmitting?"Creating Account...":"Create Customer Account"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center px-6 sm:px-8 pb-8">
        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-600 transition-colors hover:text-blue-700">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default CustomerRegister;
