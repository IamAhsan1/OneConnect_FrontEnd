import React from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import logoIcon from "@/assets/logo-icon.png";
import { Button } from "@/components/ui/button";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6">
          {/* Back Button + Logo */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              aria-label="Go Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <Link to="/" className="flex items-center">
              <img
                src={logoIcon}
                alt="OneConnect"
                className="h-11 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
            >
              <Link to="/register/customer">
                Register as Customer
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="w-full sm:w-auto"
            >
              <Link to="/register/provider">
                Register as Provider
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-6 sm:px-6">
        {/* Background Blur */}
        <div className="absolute left-[20%] top-[10%] h-[300px] w-[300px] rounded-full bg-blue-600 opacity-5 blur-[100px] sm:h-[400px] sm:w-[400px]" />

        <div className="absolute bottom-[10%] right-[20%] h-[300px] w-[300px] rounded-full bg-emerald-500 opacity-5 blur-[100px] sm:h-[400px] sm:w-[400px]" />

        {/* Auth Content */}
        <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;