import React from 'react';
import { DollarSign, Users, CheckCircle, Activity, Building, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MetricCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 text-slate-100 opacity-50 group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-32 h-32" />
    </div>
    <div className="relative z-10 flex justify-between items-start mb-4">
      <div>
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">{value}</h3>
      </div>
    </div>
    <p className={`relative z-10 text-sm font-bold ${trend.startsWith('+') ? 'text-emerald-600' : 'text-slate-500'}`}>
      {trend}
    </p>
  </div>
);

const activities = [
  { id: 1, type: 'Registration', text: 'Dr. Sarah Ahmed registered as a Provider.', time: '10 mins ago', icon: Building, color: 'bg-blue-100 text-blue-600' },
  { id: 2, type: 'Booking', text: 'New booking created for Legal Services.', time: '25 mins ago', icon: Briefcase, color: 'bg-emerald-100 text-emerald-600' },
  { id: 3, type: 'Approval', text: 'Mr. John Smith was approved by Admin.', time: '1 hour ago', icon: CheckCircle, color: 'bg-purple-100 text-purple-600' },
  { id: 4, type: 'System', text: 'Daily database backup completed successfully.', time: '3 hours ago', icon: Activity, color: 'bg-slate-100 text-slate-600' },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">System Overview</h1>
        <p className="text-slate-500 font-medium mt-1">Real-time platform metrics and activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Revenue" value="$24.5k" icon={DollarSign} trend="+8% this week" />
        <MetricCard title="Active Users" value="1,248" icon={Users} trend="+124 new users" />
        <MetricCard title="Total Providers" value="342" icon={Building} trend="+12 pending approval" />
        <MetricCard title="Completed Jobs" value="4,892" icon={CheckCircle} trend="98% success rate" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Revenue Growth (Mock)</h2>
            <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 text-slate-400 font-medium">
              [Chart Component Placeholder]
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="font-bold text-slate-900">Activity Feed</h2>
              <Button variant="ghost" size="sm" className="text-blue-600 text-xs font-bold">View All</Button>
            </div>
            
            <div className="divide-y divide-slate-100">
              {activities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4">
                    <div className={`p-2 rounded-full shrink-0 ${activity.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{activity.text}</p>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">{activity.time}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 mt-2 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
