import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Navigation for Auth Pages */}
      <header className="py-4 px-6 flex justify-between items-center border-b bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
            OneConnect
          </Link>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/register/customer">Register as Customer</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/register/provider">Register as Provider</Link>
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative background blur (Tailwind translation of previous MUI blur circles) */}
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-blue-600 opacity-5 blur-[100px] rounded-full z-0" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-emerald-500 opacity-5 blur-[100px] rounded-full z-0" />
        
        <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
