import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router';
import { Menu, LogOut, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CustomerLayout = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Dashboard Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-xl font-extrabold text-blue-600 tracking-tight">
                OneConnect
              </Link>
              
              <div className="hidden md:flex gap-4">
                <Link to="/customer/dashboard" className="text-sm font-semibold text-blue-600">
                  Dashboard Home
                </Link>
                <Link to="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
                  Search Providers
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 relative">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                <Avatar className="h-9 w-9 bg-emerald-500">
                  <AvatarFallback className="text-white bg-emerald-500">C</AvatarFallback>
                </Avatar>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-12 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-50">
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2">
                    <User className="h-4 w-4" /> Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CustomerLayout;
