'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { DateClickArg, EventClickArg, EventContentArg } from 'fullcalendar';

export default function Calendar() {

  // 이벤트 리스트
  const events = () => {
    return[
      { title: 'Event 1', date: '2024-10-07' },
      { title: 'Event 2', date: '2024-10-08' },
      { title: 'Event 3', start: new Date('2024-10-09'), end: new Date('2024-10-10')},
    ]}
  const allowEvents = events().map(event => event.date);


  // 일정 클릭 알림
  const handleDateClick = (info:DateClickArg) => {
    if (allowEvents.includes(info.dateStr) ) {
      alert('Date is allowed: ' + info.dateStr);
    }
  };
  // 이벤트 클릭 알림
  const handleEventClick = (info: EventClickArg) => {
    alert('Event clicked: ' + info.event.title);
  };

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      events={events()}
      eventContent={renderEventContent}
      dateClick={handleDateClick}
      editable={true}
      eventClick={handleEventClick}
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