'use client';
import Calendar from '@/components/reservation/Calendar';
import ReservationForm from '@/components/reservation/ReservationForm';
import React, { useState } from 'react';
import Link from 'next/link';

const RecPage = () => {
  // 예약 날짜 상태 정의
  const [selectedDate, setSelectedDate] = useState('');

  // 날짜가 선택될 때 호출될 함수
  const handleDateSelect = (date: string) => {
    setSelectedDate(date); // 선택된 날짜 업데이트
    console.log(date);
  };

  return (
    <div className="flex  flex-col items-center justify-center ">
      <h1
        // className="text-4xl mb-5 font-bold"
        className="text-4xl mb-10 font-extrabold leading-[72px] "
        style={{
          background: 'linear-gradient(90deg, #EA708A 0%, #DA2F47 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        예약 페이지
      </h1>
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full max-w-6xl">
        <div
          className="md:w-1/2 mr-11 content-center
        max-lg:px-4 max-lg:mr-0"
        >
          <ReservationForm selectedDate={selectedDate} />
        </div>
        <div
          className="md:w-1/2 ml-11
        max-lg:px-4 max-lg:ml-0"
        >
          <Calendar onDateSelect={handleDateSelect} />
        </div>
      </div>
      <h2 className="mt-12 text-2xl text-wellcome-pink font-bold">
        예약 시 전문 통역사 동행하여 상담이 진행됩니다!
      </h2>
      <div className="flex justify-center gap-5 self-center max-w-full text-center">
        <Link href="/recommendation">
          <button
            className="px-11 py-3.5 my-8 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
        hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"
          >
            이전
          </button>
        </Link>
        <Link href="/reservation">
          <button
            className="px-11 py-3.5 my-8 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
        hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"
          >
            예약하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecPage;
