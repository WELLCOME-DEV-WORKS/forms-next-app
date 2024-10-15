'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DateClickArg, EventClickArg, EventContentArg } from 'fullcalendar';
import eventSwal from './EventSwal';
import events from './EventList';

interface CalendarProps {
  onDateSelect: (date: string) => void;
}

export default function Calendar({ onDateSelect }: CalendarProps) {
  // 일정 클릭 알림
  const handleDateClick = (info: DateClickArg) => {
    // info.dateStr로 접근
    const allowEvents = events().map((event) => event.date);

    if (allowEvents.includes(info.dateStr)) {
      const date = new Date(info.dateStr);
      const formattedDate = `${date.getFullYear()}년 ${String(
        date.getMonth() + 1
      ).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;
      eventSwal({ dateStr: info.dateStr, formattedDate });
    }
  };

  // 이벤트 클릭 알림
  const handleEventClick = (info: EventClickArg) => {
    // info.event.title로 접근
    const eventDate = info.event.start;

    if (eventDate) {
      const formattedDate = `${eventDate.getFullYear()}년 ${String(
        eventDate.getMonth() + 1
      ).padStart(2, '0')}월 ${String(eventDate.getDate()).padStart(2, '0')}일`;
      onDateSelect(formattedDate); // 이벤트 클릭 시 날짜 전달
      eventSwal({
        dateStr: eventDate.toISOString().split('T')[0],
        formattedDate,
      });
    } else {
      console.error('이벤트 날짜가 유효하지 않습니다.');
    }
  };

  return (
    // <div style={{ width: '500px', height: '500px' }}>
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events()}
      dateClick={handleDateClick}
      editable={true}
      eventClick={handleEventClick}
    />
    // </div>
  );
}
