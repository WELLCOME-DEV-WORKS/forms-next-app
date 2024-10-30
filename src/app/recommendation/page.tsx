'use client';
import RecommendationForm from '@/components/recommendation/RecommendationForm';
import React, { useState, useEffect} from 'react';
import { useRecommendationStore } from '@/store/RecommendationStore';
import {RecommendationBtn} from '@/components/recommendation/RecommendationBtn';

const RecommendationPage = () => {
const recommendedTreatment = useRecommendationStore((state)=> state.recommendedTreatment);
const [noRecommendation, setNoRecommendation] = useState(false); // 조건 불일치 상태

useEffect(() => {
  console.log("사용자가 클릭한 추천시술:", recommendedTreatment); // recommendedTreatment가 변경될 때마다 출력
}, [recommendedTreatment]);


return (
  <div className="flex flex-col items-center justify-center">
    <h1
      className="text-4xl mb-9 font-extrabold leading-[72px] text-center
      max-md:text-3xl max-md:leading-[52px] max-md:mb-7 max-sm:text-base max-sm:leading-[32px] max-sm:mb-4" 
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

      {/* 추천 폼 컴포넌트 */}
      <RecommendationForm setNoRecommendation={setNoRecommendation} />

      {/* 버튼 컴포넌트 */}
      <RecommendationBtn
        noRecommendation={noRecommendation}
        recommendedTreatment={recommendedTreatment}
      />
    </div>
  );
};

export default RecommendationPage;
