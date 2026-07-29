import React from 'react';
import { DollarSign, CalendarCheck, Clock, Check, X, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pendingRequests = [
  { id: 101, name: "Alice Johnson", time: "09:00 AM", type: "New Patient", fee: "$50" },
  { id: 102, name: "Michael Smith", time: "11:30 AM", type: "Follow-up", fee: "$50" },
];

const todayAgenda = [
  { id: 201, name: "Emily Davis", time: "01:00 PM", status: "Confirmed" },
  { id: 202, name: "Robert Wilson", time: "03:00 PM", status: "In Progress" },
];

const MetricCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{value}</h3>
      </div>
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <p className={`text-sm font-medium ${trend.startsWith('+') ? 'text-emerald-600' : 'text-slate-500'}`}>
      {trend}
    </p>
  </div>
);

const ProviderDashboard = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Good morning, Dr. Sarah</h1>
          <p className="text-slate-500 font-medium mt-1">Here is what's happening with your practice today.</p>
        </div>
        <Button className="font-bold bg-blue-600 hover:bg-blue-700">
          + Block Time Off
        </Button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Today's Earnings" value="$450.00" icon={DollarSign} trend="+12% from yesterday" />
        <MetricCard title="Pending Requests" value="5" icon={Clock} trend="Requires your attention" />
        <MetricCard title="Upcoming Bookings" value="12" icon={CalendarCheck} trend="For the next 7 days" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Pending Requests Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h2 className="font-bold text-slate-900">Pending Requests</h2>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-none">{pendingRequests.length}</Badge>
            </div>
            
            <div className="divide-y divide-slate-100">
              {pendingRequests.map(req => (
                <div key={req.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900">{req.name}</h3>
                      <p className="text-sm font-medium text-slate-500">{req.time} • {req.type}</p>
                    </div>
                    <span className="font-bold text-emerald-600">{req.fee}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-xs font-bold">
                      <Check className="w-4 h-4 mr-1" /> Accept
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs font-bold text-red-600 hover:bg-red-50 hover:text-red-700">
                      <X className="w-4 h-4 mr-1" /> Decline
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Agenda Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h2 className="font-bold text-slate-900">Today's Agenda</h2>
              <p className="text-sm font-medium text-slate-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="p-6">
              <div className="relative border-l-2 border-slate-100 ml-3 md:ml-4 space-y-8">
                
                {todayAgenda.map(item => (
                  <div key={item.id} className="relative pl-6 md:pl-8">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white ${item.status === 'In Progress' ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <span className="text-sm font-bold text-blue-600 mb-1 block">{item.time}</span>
                        <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                        <Badge variant="secondary" className="mt-2">{item.status}</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto font-semibold">
                        <Eye className="w-4 h-4 mr-2 text-slate-400" /> View Details
                      </Button>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProviderDashboard;
