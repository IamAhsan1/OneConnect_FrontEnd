import React,{useState} from "react";
import {Link} from "react-router";
import {Mail,CheckCircle2} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,CardFooter} from "@/components/ui/card";

const forgotPasswordSchema=z.object({email:z.string().min(1,"Email is required").email("Invalid email address")});

export default function ForgotPassword(){
const [submitted,setSubmitted]=useState(false);
const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({resolver:zodResolver(forgotPasswordSchema)});
const onSubmit=(d)=>{console.log("Forgot Password Request for:",d.email);setSubmitted(true);};

return(
<Card className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-200/60 backdrop-blur-sm transition-all duration-300">
<CardHeader className="space-y-3 px-6 sm:px-8 pt-8 text-center">
<CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">Reset your password</CardTitle>
<CardDescription className="text-sm text-slate-500">Enter the email address associated with your account and we will send you a secure reset link.</CardDescription>
</CardHeader>
<CardContent className="px-6 sm:px-8 pb-8">
{!submitted?(
<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
<div className="space-y-2">
<Label htmlFor="email">Email Address</Label>
<div className="relative">
<Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400"/>
<Input id="email" type="email" className={`h-12 rounded-xl border-slate-300 pl-10 transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${errors.email?"border-red-500":""}`} {...register("email")}/>
</div>
{errors.email&&<p className="text-sm text-red-500">{errors.email.message}</p>}
</div>
<Button type="submit" disabled={isSubmitting} className="mt-6 h-12 w-full rounded-xl bg-blue-600 text-base font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30">
{isSubmitting?"Sending...":"Send Reset Link"}
</Button>
</form>
):(
<div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
<CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600"/>
<p className="text-sm font-medium text-emerald-800">If an account exists for that email, a reset link has been sent. Please check your inbox.</p>
</div>
)}
</CardContent>
<CardFooter className="flex justify-center px-6 sm:px-8 pb-8">
<Link to="/login" className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">&larr; Back to Login</Link>
</CardFooter>
</Card>);
}
