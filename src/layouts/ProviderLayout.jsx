import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import { User, LogOut, LayoutDashboard, Calendar, Users, Settings, BriefcaseMedical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ProviderLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const handleLogout = () => {
    navigate('/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/provider/dashboard', icon: LayoutDashboard },
    { name: 'Schedule', path: '/provider/schedule', icon: Calendar },
    { name: 'Clients', path: '/provider/clients', icon: Users },
    { name: 'Staff', path: '/provider/staff', icon: BriefcaseMedical },
    { name: 'Settings', path: '/provider/settings', icon: Settings },
  ];

  // Don't show nav links if on the onboarding screen
  const isOnboarding = location.pathname.includes('/onboarding');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center gap-8">
              <Link to="/provider/dashboard" className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="bg-blue-600 p-1 rounded">OC</span> Provider
              </Link>
              
              {!isOnboarding && (
                <nav className="hidden md:flex gap-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.path;
                    return (
                      <Link 
                        key={link.name} 
                        to={link.path}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                      >
                        <Icon className="h-4 w-4" />
                        {link.name}
                      </Link>
                    )
                  })}
                </nav>
              )}
            </div>

            <div className="flex items-center gap-6 relative">
              
              {!isOnboarding && (
                <div className="hidden sm:flex items-center gap-2">
                  <Switch 
                    id="online-status" 
                    checked={isOnline} 
                    onCheckedChange={setIsOnline} 
                    className="data-[state=checked]:bg-emerald-500"
                  />
                  <Label htmlFor="online-status" className={`text-sm font-bold ${isOnline ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {isOnline ? 'Online' : 'Offline'}
                  </Label>
                </div>
              )}

              <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>

              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none flex items-center gap-3"
              >
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-bold text-white leading-tight">Dr. Sarah Ahmed</p>
                  <p className="text-xs text-slate-400 font-medium">Cardiologist</p>
                </div>
                <Avatar className="h-10 w-10 border-2 border-slate-700">
                  <AvatarFallback className="text-slate-900 font-bold bg-slate-200">SA</AvatarFallback>
                </Avatar>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-14 mt-2 w-48 bg-white border rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b mb-2 md:hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-500 font-semibold">Status</span>
                      <Switch checked={isOnline} onCheckedChange={setIsOnline} className="scale-75" />
                    </div>
                  </div>
                  
                  {!isOnboarding && navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link 
                        key={link.name}
                        to={link.path}
                        className="md:hidden w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-3"
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-slate-400" /> {link.name}
                      </Link>
                    )
                  })}
                  
                  {/* Divider for mobile */}
                  {!isOnboarding && <div className="h-px bg-slate-100 my-1 md:hidden"></div>}

                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-3">
                    <User className="h-4 w-4 text-slate-400" /> Public Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3"
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
      <main className="flex-grow">
        <div className="animate-in fade-in duration-500">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ProviderLayout;
