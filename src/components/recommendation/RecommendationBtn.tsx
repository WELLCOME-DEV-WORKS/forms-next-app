import React from 'react';
import Link from 'next/link';
import {RecommendationBtnHandler} from '@/components/recommendation/RecommendationBtnHandler';

interface ReservationBtnProps {
    noRecommendation: boolean;
    recommendedTreatment: string | undefined;
  }
  
  export const RecommendationBtn = ({
    noRecommendation,
    recommendedTreatment,
  }: ReservationBtnProps) => {
    const { handleReservationClick } = RecommendationBtnHandler(recommendedTreatment);
  
    const Style = 'px-11 py-3.5 my-8 text-2xl font-bold text-center text-white bg-wellcome-pink rounded-[44px] shadow-lg hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300'

    return noRecommendation ? (
      <Link href="/userSurvey" passHref>
        <button className={Style}>
          다시 추천받기
        </button>
      </Link>
    ) : (
      <button
        onClick={handleReservationClick}
        className={`${Style} max-md:text-xl max-md:my-7 max-sm:text-base max-sm:my-4`}
      >
        예약일정 보러가기
      </button>
    );
  };
