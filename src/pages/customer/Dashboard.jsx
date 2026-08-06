import React from 'react';
import { CalendarDays, Clock, User, MessageSquare, CalendarCheck, ClipboardList, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const mockUpcoming = [
    { id: 1, date: "Aug 15, 2026", time: "10:00 AM", provider: "Dr. Sarah Ahmed", type: "Cardiologist", status: "CONFIRMED" },
    { id: 2, date: "Aug 20, 2026", time: "02:00 PM", provider: "Mr. John Smith", type: "Lawyer", status: "PENDING" },
];
const mockPast = [
    { id: 3, date: "Jul 10, 2026", time: "11:30 AM", provider: "Ms. Emma Davis", type: "Tutor", status: "COMPLETED" },
];

const getStatusColor = s => ({
    CONFIRMED: "bg-emerald-100 text-emerald-700",
    PENDING: "bg-amber-100 text-amber-700",
    COMPLETED: "bg-slate-200 text-slate-700"
}[s] || "bg-slate-100 text-slate-700");

const Stat = ({ icon: Icon, title, value, color }) => (
    <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center justify-between">
            <div><p className="text-sm text-slate-500">{title}</p><h3 className="mt-2 text-3xl font-bold">{value}</h3></div>
            <div className={`rounded-xl p-3 ${color}`}><Icon className="h-6 w-6" /></div>
        </div>
    </div>
);

const AppointmentCard = ({ appointment, isPast }) => (
    <div className="mb-5 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid flex-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-blue-600" /><span className="font-semibold">{appointment.date}</span></div>
                    <div className="flex items-center gap-2 text-slate-500"><Clock className="h-4 w-4" />{appointment.time}</div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2"><User className="h-4 w-4 text-blue-600" /><span className="font-bold">{appointment.provider}</span></div>
                    <p className="pl-6 text-sm text-slate-500">{appointment.type}</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                <Badge className={`${getStatusColor(appointment.status)} border-0 px-3 py-1 font-semibold`}>{appointment.status}</Badge>
                {!isPast ? <>
                    <Button variant="outline" className="rounded-lg">Reschedule</Button>
                    <Button variant="ghost" className="rounded-lg text-red-600 hover:bg-red-50">Cancel</Button>
                </> : <Button variant="secondary" className="rounded-lg"><MessageSquare className="mr-2 h-4 w-4" />Leave Review</Button>}
            </div>
        </div>
    </div>
);

export default function CustomerDashboard() {
    return (
        <div className="mx-auto max-w-6xl pb-10">
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-slate-900">My Appointments</h1>
                <p className="mt-2 text-slate-600">Track, manage and review all your bookings from one place.</p>
            </div>

            <div className="mb-8 grid gap-5 md:grid-cols-3">
                <Stat icon={CalendarCheck} title="Upcoming" value={mockUpcoming.length} color="bg-blue-100 text-blue-600" />
                <Stat icon={ClipboardList} title="Pending" value={mockUpcoming.filter(x => x.status === "PENDING").length} color="bg-amber-100 text-amber-600" />
                <Stat icon={CheckCircle2} title="Completed" value={mockPast.length} color="bg-emerald-100 text-emerald-600" />
            </div>

            <Tabs defaultValue="upcoming">
                <TabsList className="mb-8 h-auto rounded-xl bg-slate-100 p-1">
                    <TabsTrigger value="upcoming" className="rounded-lg px-6 py-2 font-semibold data-[state=active]:bg-white">Upcoming</TabsTrigger>
                    <TabsTrigger value="past" className="rounded-lg px-6 py-2 font-semibold data-[state=active]:bg-white">Past History</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">{mockUpcoming.map(a => <AppointmentCard key={a.id} appointment={a} isPast={false} />)}</TabsContent>
                <TabsContent value="past">{mockPast.map(a => <AppointmentCard key={a.id} appointment={a} isPast={true} />)}</TabsContent>
            </Tabs>
        </div>
    )
}
