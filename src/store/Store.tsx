'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import RecommendationList from '@/components/recFlow/RecommendationList';
import { treatmentPrices } from '@/components/recFlow/TreatmentPrices';

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
  recommendedMethod: string | undefined;
  similarTreatments: string | undefined;
  setSurveyResults: (answers: string[]) => void;
  loadFromLocal: () => void; // localStorage에서 값 로드
}
export const useSurveyResultsStore = create<SurveyResultsState>()(
  devtools(
    (set) => ({
      treatmentPurpose: undefined,
      treatmentMethod: undefined,
      injectionArea: undefined,
      sideEffects: undefined,
      price: undefined,
      recommendedMethod: undefined,
      similarTreatments: undefined,

      setSurveyResults: (answers) => {
        const treatmentPurpose = answers[0] || '기본값'; // 기본값 설정
        const treatmentMethod =
          answers[1] || answers[2] || answers[3] || '기타'; // 기본값 설정
        const injectionArea = answers[4] || '기타'; // 기본값 설정
        const sideEffects = answers[5] || '없음'; // 기본값 설정
        const price = answers[6] || '미정'; // 기본값 설정

        // 추천 로직 실행
        const recommended = RecommendationList().find(
          (rec) =>
            rec.category === treatmentPurpose &&
            rec.method === treatmentMethod &&
            rec.budget === price
        );

        const similarTreatments = RecommendationList()
          .filter(
            (rec) =>
              rec.category === treatmentPurpose &&
              rec.budget === price &&
              rec.method !== treatmentMethod
          )
          .map((rec) => rec.result.join(', '));

        const treatmentCost =
          recommended?.result
            .map((treatment) => treatmentPrices[treatment] || '가격 미정')
            .join(', ') || '가격 미정';

        // 상태 업데이트
        set({
          treatmentPurpose: treatmentPurpose,
          treatmentMethod: treatmentMethod,
          recommendedMethod: recommended?.result.join(', ') || '추천 시술 없음',
          similarTreatments: similarTreatments.join(', ') || '유사 시술 없음',
          injectionArea: injectionArea,
          sideEffects: sideEffects,
          price: treatmentCost,
        });

        // 결과를 로컬 스토리지에 키-값 형태로 저장
        const surveyResults = {
          treatmentPurpose,
          recommendedMethod: recommended?.result.join(', ') || '추천 시술 없음',
          similarTreatments: similarTreatments.join(', ') || '유사 시술 없음',
          injectionArea,
          sideEffects,
          price,
        };
        localStorage.setItem('SurveyResults', JSON.stringify(surveyResults)); // 결과를 로컬 스토리지에 저장
        console.log('설문 결과 저장:', surveyResults);
      },

      // 로컬스토리지에서 값 로드
      loadFromLocal: () => {
        const storedResults = localStorage.getItem('SurveyResults');
        if (storedResults) {
          const parsedResults = JSON.parse(storedResults);
          set({
            treatmentPurpose: parsedResults.treatmentPurpose,
            treatmentMethod: parsedResults.treatmentMethod,
            recommendedMethod: parsedResults.recommendedMethod,
            similarTreatments: parsedResults.similarTreatments,
            injectionArea: parsedResults.injectionArea,
            sideEffects: parsedResults.sideEffects,
            price: parsedResults.price,
          });
        }
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
    }),
    { name: 'SurveyStore' }
  )
);
