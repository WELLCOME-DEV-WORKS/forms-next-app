'use client';
import Calendar from '@/components/reservation/Calendar';
import ReservationForm from '@/components/reservation/ReservationForm';
import React, { useState } from 'react';

const ReservationPage = () => {
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
        예약시 전문 통역사 동행 서비스를 제공합니다.
      </h2>
      <button
        className="px-11 py-3.5 my-8 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
        hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"
      >
        예약하기
      </button>
      {/* <div className='flex-row self-center px-16 py-6 mt-[4rem] w-1/3 font-extrabold text-white whitespace-nowrap text-center bg-wellcome-pink hover:bg-wellcome-peach  rounded-xl  max-md:px-5 max-md:mt-10'>
          예약하기
        </div> */}
    </div>
  );
};

export default ReservationPage;
