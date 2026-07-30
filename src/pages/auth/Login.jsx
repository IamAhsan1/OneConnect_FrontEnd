import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
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

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/customer/dashboard");
  };

  return (
    <Card className="w-full rounded-2xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-200/60 backdrop-blur-sm transition-all duration-300">
      <CardHeader className="space-y-3 px-6 sm:px-8 pt-8 text-center">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome back
        </CardTitle>

        <CardDescription className="text-sm text-slate-500">
          Log in to OneConnect to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 sm:px-8 pb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <Input
                id="email"
                type="email"
                className={`h-12 rounded-xl border-slate-300 pl-10 transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email")}
              />
            </div>

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`h-12 rounded-xl border-slate-300 pl-10 pr-10 transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password")}
              />

              <button
                type="button"
                className="absolute right-3 top-3.5 text-slate-400 transition-colors hover:text-blue-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-end pt-1">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              Forgot your password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 h-12 w-full rounded-xl bg-blue-600 text-base font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center px-6 sm:px-8 pb-8">
        <p className="text-center text-sm text-slate-500">
          Need an account?{" "}
          <Link
            to="/register/customer"
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Sign up as a Customer
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
