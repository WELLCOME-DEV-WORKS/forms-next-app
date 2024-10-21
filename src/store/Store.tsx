'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SurveyCompleteState {
  surveyComplete: boolean;
  setSurveyComplete: (complete: boolean) => void;
}

// Zustand 스토어 생성
export const useSurveyCompleteStore = create<SurveyCompleteState>()(
  devtools(
    (set) => ({
      surveyComplete: false,
      setSurveyComplete: (complete) => {
        set({ surveyComplete: complete }); // 상태 업데이트
        localStorage.setItem('SurveyComplete', JSON.stringify(complete)); // 로컬 스토리지에 저장
        console.log('로컬 스토리지에 저장:', complete);
      },
    }),
    { name: 'SurveyCompleteStore' }
  ) // 스토어 이름 설정
);

interface SurveyResultsState {
  treatmentPurpose: string | undefined;
  treatmentMethod: string | undefined;
  price: string | undefined;
  injectionArea: string | undefined;
  sideEffects: string | undefined;
  setSurveyResults: (answers: string[]) => void; // 결과를 설정하는 메서드
}
export const useSurveyResultsStore = create<SurveyResultsState>()(
  devtools(
    (set) => ({
      treatmentPurpose: undefined,
      treatmentMethod: undefined,
      injectionArea: undefined,
      sideEffects: undefined,
      price: undefined,
      setSurveyResults: (answers) => {
        const treatmentPurpose = answers[0] || '기본값'; // 기본값 설정
        const treatmentMethod =
          answers[1] || answers[2] || answers[3] || '기타'; // 기본값 설정
        const injectionArea = answers[4] || '기타'; // 기본값 설정
        const sideEffects = answers[5] || '없음'; // 기본값 설정
        const price = answers[6] || '미정'; // 기본값 설정

        set({
          treatmentPurpose: treatmentPurpose,
          treatmentMethod: treatmentMethod,
          injectionArea: injectionArea,
          sideEffects: sideEffects,
          price: price,
        });

        // 결과를 로컬 스토리지에 키-값 형태로 저장
        const surveyResults = {
          treatmentPurpose,
          treatmentMethod,
          injectionArea,
          sideEffects,
          price,
        };
        localStorage.setItem('SurveyResults', JSON.stringify(surveyResults)); // 결과를 로컬 스토리지에 저장
        console.log('설문 결과 저장:', surveyResults);
      },
      clearSurveyResults: () =>
        set({
          treatmentPurpose: undefined,
          treatmentMethod: undefined,
          price: undefined,
          injectionArea: undefined,
          sideEffects: undefined,
        }),
    }),
    { name: 'SurveyStore' }
  )
);
