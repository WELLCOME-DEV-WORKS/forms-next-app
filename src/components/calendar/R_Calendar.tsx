'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventContentArg } from 'fullcalendar';

export default function Calendar() {
    const events = [
        { title: 'Event 1', date: '2023-10-07' },
        { title: 'Event 2', date: '2023-10-08' }
      ];
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
      />
    )
}

  function renderEventContent(eventInfo: EventContentArg) {
    return(
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }