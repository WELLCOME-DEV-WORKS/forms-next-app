'use client'
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface StoreState {
    surveyComplete: boolean;
    setSurveyComplete: (complete: boolean) => void;
}

// Zustand 스토어 생성
export const useStoreSurvey = create<StoreState>()(
  devtools((set) => ({
    surveyComplete: false,
    setSurveyComplete: (complete) => {
      console.log('설문 완료 상태 업데이트:', complete);
      set({ surveyComplete: complete }); // 상태 업데이트
      localStorage.setItem('SurveyComplete', JSON.stringify(complete)); // 로컬 스토리지에 저장
      console.log('로컬 스토리지에 저장:', complete);
    },
  }), { name: "SurveyStore" }) // 스토어 이름 설정
);
