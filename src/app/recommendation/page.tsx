'use client';
import RecForm from '@/components/recommendation/RecForm';
import React from 'react';
import Link from 'next/link';

const ReservationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className="text-4xl mb-9 font-extrabold leading-[72px] text-center"
        style={{
          background: 'linear-gradient(90deg, #EA708A 0%, #DA2F47 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        아름다움을 향한 당신의 선택, <br />
        추천 시술로 더욱 빛나는 변화를 경험하세요!
      </h1>

      <RecForm />

      <h2 className="mt-1 text-2xl text-wellcome-pink font-bold">
        예약시 전문 통역사 동행 서비스를 제공합니다.
      </h2>
      <Link href="/reservation">
        <button
          className="px-11 py-3.5 my-8 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
        hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"
        >
          예약일정 보러가기
        </button>
      </Link>
    </div>
  );
};

export default ReservationPage;
