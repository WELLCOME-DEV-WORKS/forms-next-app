'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist, createJSONStorage } from 'zustand/middleware'

interface RecommendationState {
    recommendedTreatment: string | undefined;
    recommendedPrice: string | undefined;
  }
  
  interface RecommendationAction {
    setRecommendation: (
      recommendedTreatment: string,
      recommendedPrice: string
    ) => void;
  }
  
  const initialRecommendationState: RecommendationState = {
    recommendedTreatment: undefined,
    recommendedPrice: undefined,
  }
  
  export const useRecommendationStore = create<RecommendationState & RecommendationAction>()(
    persist(
      devtools(
        (set) => ({
          ...initialRecommendationState,
          setRecommendation: (recommendedTreatment, treatmentCost) => {
            set({
              recommendedTreatment,
              recommendedPrice: treatmentCost,
            });
  
            console.log('추천 결과 저장:', {
              recommendedTreatment,
              treatmentCost,
            });
          },
  
          clearRecommendationResults: () =>
            set({
              recommendedTreatment: undefined,
              recommendedPrice: undefined,
            }),
        })
      ),
      {
        name: 'RecommendationStore',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
  