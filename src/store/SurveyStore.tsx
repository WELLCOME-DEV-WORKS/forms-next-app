'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist, createJSONStorage } from 'zustand/middleware'

interface SurveyCompleteState {
  surveyComplete: boolean;
  // eslint-disable-next-line no-unused-vars
  setSurveyComplete: (complete: boolean) => void;
}

// Zustand 스토어 생성
export const useSurveyCompleteStore = create<SurveyCompleteState>()(
  persist(
    (set) => ({
      surveyComplete: false,
      setSurveyComplete: (complete) => {
        set({ surveyComplete: complete });
        console.log('로컬 스토리지에 저장:', complete);
      },
    }),
    { 
      name: 'SurveyCompleteStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

interface SurveyState {
  treatmentPurpose: string | undefined;
  treatmentMethod: string | undefined;
  price: string | undefined;
  injectionArea: string | undefined;
  sideEffects: string | undefined;
}

interface SurveyAction {
  setSurveyResults: (answers: string[]) => void;
  
}

const initialSurveyState : SurveyState = {
  treatmentPurpose: undefined,
  treatmentMethod: undefined,
  injectionArea: undefined,
  sideEffects: undefined,
  price: undefined,
}


export const useSurveyStore = create<SurveyState & SurveyAction>()(
  persist(
    devtools(
      (set) => ({
        ...initialSurveyState,
        
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

        clearSurveyResults: () =>
          set({
            treatmentPurpose: undefined,
            treatmentMethod: undefined,
            price: undefined,
            injectionArea: undefined,
            sideEffects: undefined,
          }),
      })
    ),
    {
      name: 'SurveyStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

