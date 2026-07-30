import React,{useState} from "react";
import {Calendar as BigCalendar,dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button";
import {CalendarDays,Clock} from "lucide-react";

const localizer=dateFnsLocalizer({format,parse,startOfWeek,getDay,locales:{"en-US":enUS}});
const t=new Date();
const mockEvents=[
{title:"Available",start:new Date(t.getFullYear(),t.getMonth(),t.getDate(),10),end:new Date(t.getFullYear(),t.getMonth(),t.getDate(),11)},
{title:"Available",start:new Date(t.getFullYear(),t.getMonth(),t.getDate(),11,30),end:new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,30)}
];

export default function BookingWidget({providerId}){
const navigate=useNavigate();
const[selectedSlot,setSelectedSlot]=useState(null);

return(
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
<div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
<div className="flex items-center gap-3">
<CalendarDays className="h-7 w-7"/>
<div>
<h3 className="text-2xl font-bold">Book Appointment</h3>
<p className="text-blue-100 text-sm mt-1">Choose an available slot below.</p>
</div>
</div>
</div>

<div className="p-6">
<div className="mb-6 h-[400px] overflow-hidden rounded-2xl border">
<BigCalendar
localizer={localizer}
events={mockEvents}
startAccessor="start"
endAccessor="end"
defaultView="week"
views={["week","day"]}
onSelectEvent={setSelectedSlot}
eventPropGetter={e=>({style:{background:selectedSlot===e?"#10b981":"#2563eb",borderRadius:"8px",border:"none",color:"#fff"}})}
/>
</div>

{selectedSlot&&(
<div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
<div className="mb-2 flex items-center gap-2 text-blue-700">
<Clock className="h-4 w-4"/>
<span className="text-xs font-bold uppercase">Selected Slot</span>
</div>
<p className="font-semibold text-slate-900">{format(selectedSlot.start,"EEEE, MMM do")} • {format(selectedSlot.start,"h:mm a")}</p>
</div>
)}

<Button
className="h-12 w-full rounded-xl text-base font-bold shadow-lg transition-all hover:scale-[1.02]"
disabled={!selectedSlot}
onClick={()=>selectedSlot&&navigate("/checkout",{state:{providerId,selectedSlot}})}
>
Continue to Checkout
</Button>
</div>
</div>
)}
