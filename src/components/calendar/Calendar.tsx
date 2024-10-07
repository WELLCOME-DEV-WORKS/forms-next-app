'use client'
import { useEffect } from 'react';
import { Calendar } from 'fullcalendar';

const CalendarComponent = () => {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');

    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        initialView: 'dayGridMonth',
      });
      calendar.render();
    }
  }, []);


  return <div id='calendar'></div>;

}
export default CalendarComponent;