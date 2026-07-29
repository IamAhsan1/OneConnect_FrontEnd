import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router';
import { Button } from "@/components/ui/button";

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Mock available slots
const today = new Date();
const mockEvents = [
  {
    title: 'Available',
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
  },
  {
    title: 'Available',
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
  },
];

const BookingWidget = ({ providerId }) => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedSlot(event);
  };

  const handleContinue = () => {
    if (selectedSlot) {
      navigate('/checkout', { state: { providerId, selectedSlot } });
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Book an Appointment</h3>
      <p className="text-sm text-slate-500 mb-6">Select an available time slot from the calendar below.</p>

      <div className="h-[400px] mb-6">
        <BigCalendar
          localizer={localizer}
          events={mockEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week', 'day']}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: selectedSlot === event ? '#10b981' : '#3b82f6', // Emerald or Blue
              borderRadius: '6px',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }
          })}
        />
      </div>

      {selectedSlot && (
        <div className="bg-blue-50 text-blue-900 p-4 rounded-xl mb-6 animate-in fade-in duration-300">
          <p className="text-xs font-bold uppercase tracking-wider mb-1 text-blue-600">Selected Time</p>
          <p className="font-semibold text-lg">
            {format(selectedSlot.start, 'EEEE, MMM do')} at {format(selectedSlot.start, 'h:mm a')}
          </p>
        </div>
      )}

      <Button
        className="w-full h-12 text-base font-bold"
        disabled={!selectedSlot}
        onClick={handleContinue}
      >
        Continue to Checkout
      </Button>
    </div>
  );
};

export default BookingWidget;
