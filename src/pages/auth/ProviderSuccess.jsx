import React from "react";
import { Link } from "react-router";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";

const ProviderSuccess=()=>(
<Card className="w-full max-w-md rounded-2xl border border-slate-200/70 bg-white text-center shadow-2xl shadow-slate-200/60 backdrop-blur-sm transition-all duration-300">
<CardHeader className="flex flex-col items-center px-8 pt-10 pb-4">
<div className="mb-5 rounded-full bg-emerald-100 p-4">
<CheckCircle className="h-16 w-16 text-emerald-600"/>
</div>
<CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">Application Submitted!</CardTitle>
<CardDescription className="mt-2 text-sm text-slate-500">Your professional application has been received successfully.</CardDescription>
</CardHeader>
<CardContent className="px-8 pb-6">
<p className="text-base leading-7 text-slate-600">Thank you for applying to OneConnect. Our administrative team will review your uploaded documents. You will receive an email once your account is approved and ready to use.</p>
</CardContent>
<CardFooter className="flex justify-center px-8 pb-10">
<Button asChild className="h-12 rounded-xl bg-blue-600 px-8 text-base font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30">
<Link to="/">Return to Homepage</Link>
</Button>
</CardFooter>
</Card>
);
export default ProviderSuccess;
