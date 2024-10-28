'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist, createJSONStorage } from 'zustand/middleware'

interface SurveyCompleteState {
  surveyComplete: boolean;
  setSurveyComplete: (complete: boolean) => void;
}

// Zustand 스토어 생성
export const useSurveyCompleteStore = create<SurveyCompleteState>()(
  persist(
    (set) => ({
      surveyComplete: false,
      setSurveyComplete: (complete) => {
        set({ surveyComplete: complete }); // 상태 업데이트
        // localStorage.setItem('SurveyComplete', JSON.stringify(complete)); // 로컬 스토리지에 저장
        console.log('로컬 스토리지에 저장:', complete);
      },
    }),
    { 
      name: 'SurveyCompleteStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

interface SurveyResultsState {
  treatmentPurpose: string | undefined;
  treatmentMethod: string | undefined;
  price: string | undefined;
  injectionArea: string | undefined;
  sideEffects: string | undefined;
  recommendedMethod: string | undefined; // 여기에 recommendedMethod 추가
  similarTreatments: string | undefined; // 여기에 similarTreatments 추가
  treatmentName: string | undefined;
  setTreatmentName: (answers: string) => void;
  setSurveyResults: (answers: string[]) => void;
  setRecResults: (
    recommendedMethod: string,
    similarTreatments: string,
    price: string
  ) => void;
}
export const useSurveyResultsStore = create<SurveyResultsState>()(
  persist(
    devtools(
      (set) => ({
        treatmentPurpose: undefined,
        treatmentMethod: undefined,
        injectionArea: undefined,
        sideEffects: undefined,
        price: undefined,
        recommendedMethod: undefined,
        similarTreatments: undefined,
        treatmentName: undefined,

        setTreatmentName: (answers) => {
          const treatmentName = answers;
          set({
            treatmentName,
          });
        },

        setSurveyResults: (answers) => {
          const treatmentPurpose = answers[0] || '기본값';
          const treatmentMethod = answers[1] || answers[2] || answers[3] || '기타';
          const injectionArea = answers[4] || '기타';
          const sideEffects = answers[5] || '없음';
          const price = answers[6] || '미정';

          set({
            treatmentPurpose,
            treatmentMethod,
            injectionArea,
            sideEffects,
            price,
          });

          console.log('설문 결과 저장:', {
            treatmentPurpose,
            treatmentMethod,
            injectionArea,
            sideEffects,
            price,
          });
        },

        setRecResults: (recommendedMethod, similarTreatments, treatmentCost) => {
          set({
            recommendedMethod,
            similarTreatments,
            price: treatmentCost,
          });

          console.log('추천 결과 저장:', {
            recommendedMethod,
            similarTreatments,
            treatmentCost,
          });
        },

        clearSurveyResults: () =>
          set({
            treatmentPurpose: undefined,
            treatmentMethod: undefined,
            recommendedMethod: undefined,
            similarTreatments: undefined,
            price: undefined,
            injectionArea: undefined,
            sideEffects: undefined,
          }),
      })
    ),
    {
      name: 'SurveyResultsStore', // 로컬 스토리지에서 사용할 키
      storage: createJSONStorage(() => localStorage), // JSON 형식으로 저장
    }
  )
);
