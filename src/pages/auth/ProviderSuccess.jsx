import React from 'react';
import { Link } from 'react-router';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const ProviderSuccess = () => {
  return (
    <Card className="border-0 shadow-lg sm:rounded-2xl w-full max-w-md text-center">
      <CardHeader className="pt-10 pb-2 flex flex-col items-center">
        <CheckCircle className="h-20 w-20 text-emerald-500 mb-4" />
        <CardTitle className="text-2xl font-bold tracking-tight">
          Application Submitted!
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-8 py-4">
        <p className="text-slate-600 text-base leading-relaxed">
          Thank you for applying to OneConnect. Our administrative team will review
          your uploaded documents. You will receive an email once your account is
          approved and ready to use.
        </p>
      </CardContent>

      <CardFooter className="pb-10 flex justify-center">
        <Button asChild className="px-8 h-12 text-base">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProviderSuccess;
