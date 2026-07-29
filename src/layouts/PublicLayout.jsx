import React from 'react';
import { Outlet, Link } from 'react-router';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
                OneConnect
              </Link>
              
              <div className="hidden md:flex gap-4">
                <Link to="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                  Find Professionals
                </Link>
                <Link to="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                  How it Works
                </Link>
              </div>
            </div>

            <div className="hidden md:flex gap-3">
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register/customer">Register</Link>
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Universal Footer */}
      <footer className="py-8 bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-slate-500">
            &copy; {new Date().getFullYear()} OneConnect Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
