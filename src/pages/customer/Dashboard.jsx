import React from 'react';
import { CalendarDays, Clock, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock Data
const mockUpcoming = [
  { id: 1, date: "Aug 15, 2026", time: "10:00 AM", provider: "Dr. Sarah Ahmed", type: "Cardiologist", status: "CONFIRMED" },
  { id: 2, date: "Aug 20, 2026", time: "02:00 PM", provider: "Mr. John Smith", type: "Lawyer", status: "PENDING" },
];

const mockPast = [
  { id: 3, date: "Jul 10, 2026", time: "11:30 AM", provider: "Ms. Emma Davis", type: "Tutor", status: "COMPLETED" },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'CONFIRMED': return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100';
    case 'PENDING': return 'bg-amber-100 text-amber-800 hover:bg-amber-100';
    case 'COMPLETED': return 'bg-slate-100 text-slate-800 hover:bg-slate-100';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const AppointmentCard = ({ appointment, isPast }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-4 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-shadow">
    
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Date & Time */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-slate-700">
          <CalendarDays className="h-4 w-4 text-blue-500 shrink-0" />
          <span className="font-semibold text-sm">{appointment.date}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <Clock className="h-4 w-4 shrink-0" />
          <span className="text-sm">{appointment.time}</span>
        </div>
      </div>
      
      {/* Provider Details */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-slate-900">
          <User className="h-4 w-4 text-blue-500 shrink-0" />
          <span className="font-bold text-sm">{appointment.provider}</span>
        </div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-6">
          {appointment.type}
        </span>
      </div>
    </div>

    {/* Status */}
    <div className="flex items-center">
      <Badge className={`${getStatusColor(appointment.status)} border-none px-3 py-1 font-bold`}>
        {appointment.status}
      </Badge>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-2 md:justify-end">
      {!isPast ? (
        <>
          <Button variant="outline" size="sm" className="font-semibold">Reschedule</Button>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold">Cancel</Button>
        </>
      ) : (
        <Button variant="secondary" size="sm" className="font-semibold flex items-center gap-2">
          <MessageSquare className="w-4 h-4" /> Leave Review
        </Button>
      )}
    </div>
  </div>
);

const CustomerDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto pb-12 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          My Appointments
        </h1>
        <p className="text-slate-600">
          Manage your upcoming bookings and view your past history.
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="bg-transparent h-12 mb-6 border-b rounded-none w-full justify-start p-0">
          <TabsTrigger 
            value="upcoming" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none px-6 font-semibold text-base h-full"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger 
            value="past" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none px-6 font-semibold text-base h-full"
          >
            Past History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-0 outline-none">
          {mockUpcoming.map((apt) => (
            <AppointmentCard key={apt.id} appointment={apt} isPast={false} />
          ))}
        </TabsContent>
        
        <TabsContent value="past" className="mt-0 outline-none">
          {mockPast.map((apt) => (
            <AppointmentCard key={apt.id} appointment={apt} isPast={true} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
