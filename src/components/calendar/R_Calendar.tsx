'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventContentArg } from 'fullcalendar';

export default function Calendar() {
    const events = () => {
      return[
        { title: 'Event 1', date: '2024-10-07' },
        { title: 'Event 2', date: '2024-10-08' },
        { title: 'Event 3', start: new Date('2024-10-09'), end: new Date('2024-10-10')},
      ]}

    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={events()}
        eventContent={renderEventContent}
      />
    )
}

  function renderEventContent(eventInfo: EventContentArg) {
    return(
      <>
        {/* <b>{eventInfo.timeText}</b> */}
        <i>{eventInfo.event.title}</i>
      </>
    )
  }