'use client';
import RecForm from '@/components/recommendation/RecForm';
import React, { useState, useCallback, useMemo, useEffect} from 'react';
import { useRecommendationStore } from '@/store/RecommendationStore';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ReservationPage = () => {
  const router = useRouter();
const recommendedMethod = useRecommendationStore((state)=> state.recommendedMethod);
const [noRecommendation, setNoRecommendation] = useState(false); // 조건 불일치 상태

useEffect(() => {
  console.log("사용자가 클릭한 추천시술:", recommendedMethod); // recommendedMethod가 변경될 때마다 출력
}, [recommendedMethod]);


const handleReservationClick = useCallback(() => {
  if (!recommendedMethod) {
    Swal.fire({
      icon: 'error',
      text: '답변을 선택해야 진행할 수 있습니다!',
      showConfirmButton: false,
      timer: 1350,
    });
    return;
  }
  router.push('/reservation'); // recommendedMethod가 존재할 경우에만 페이지 이동
}, [recommendedMethod, router]);

const recommendationButton = useMemo(() => {
  return noRecommendation ? (
    <Link href="/userSurvey" passHref>
      <button
        className="px-11 py-3.5 my-8 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"

      >
        다시 추천받기
      </button>
    </Link>
  ) : (
    <button
      onClick={handleReservationClick}
      className="px-11 py-3.5 my-8 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"
    >
      예약일정 보러가기
    </button>
  );
}, [noRecommendation, handleReservationClick]);

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

    <RecForm setNoRecommendation={setNoRecommendation} />

    {recommendationButton}
  </div>
);
};

export default RecommendationPage;
