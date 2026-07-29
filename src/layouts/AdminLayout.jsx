import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import { LogOut, LayoutDashboard, CheckSquare, Tags, DollarSign, Menu, X, ShieldAlert } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const navLinks = [
    { name: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Approvals', path: '/admin/approvals', icon: CheckSquare },
    { name: 'Categories', path: '/admin/categories', icon: Tags },
    { name: 'Finances', path: '/admin/finances', icon: DollarSign }, // Placeholder for future
  ];

  return (
    <div className="min-h-screen flex bg-slate-100">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link to="/admin/dashboard" className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <ShieldAlert className="text-red-500 w-5 h-5" /> Admin Control
          </Link>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Menu</p>
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-10 w-10 border-2 border-slate-700">
              <AvatarFallback className="text-slate-900 font-bold bg-slate-200">SA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Super Admin</p>
              <p className="text-xs text-slate-400 font-medium">System Role</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-bold text-red-400 bg-slate-800 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" /> Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Mobile Top Header */}
        <header className="md:hidden h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between shrink-0">
          <Link to="/admin/dashboard" className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <ShieldAlert className="text-red-500 w-5 h-5" /> Admin
          </Link>
          <button 
            className="p-2 text-slate-600 bg-slate-100 rounded-md"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
            <Outlet />
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default AdminLayout;
