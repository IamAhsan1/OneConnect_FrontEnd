import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, EyeOff, Eye } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

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
    navigate('/customer/dashboard');
  };

  return (
    <Card className="border-0 shadow-lg sm:rounded-2xl w-full">
      <CardHeader className="text-center space-y-2 pt-8">
        <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
        <CardDescription className="text-base">
          Log in to OneConnect to continue
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input 
                id="email" 
                type="email" 
                className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
            </div>
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input 
                id="password" 
                type={showPassword ? 'text' : 'password'} 
                className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex justify-end pt-1">
            <Link to="/forgot-password" className="text-sm font-semibold text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full h-12 text-base mt-4" disabled={isSubmitting}>
            Login
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center pb-8">
        <p className="text-sm text-slate-500">
          Need an account?{' '}
          <Link to="/register/customer" className="font-semibold text-blue-600 hover:underline">
            Sign up as a Customer
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
