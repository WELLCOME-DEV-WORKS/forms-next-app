'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist, createJSONStorage } from 'zustand/middleware'

interface RecommendationState {
    recommendedMethod: string | undefined;
    price: string | undefined;
  }
  
  interface RecommendationAction {
    setRecommendation: (
      recommendedMethod: string,
      price: string
    ) => void;
  }
  
  const initialRecommendationState: RecommendationState = {
    recommendedMethod: undefined,
    price: undefined,
  }
  
  export const useRecommendationStore = create<RecommendationState & RecommendationAction>()(
    persist(
      devtools(
        (set) => ({
          ...initialRecommendationState,
          setRecommendation: (recommendedMethod, treatmentCost) => {
            set({
              recommendedMethod,
              price: treatmentCost,
            });
  
            console.log('추천 결과 저장:', {
              recommendedMethod,
              treatmentCost,
            });
          },
  
          clearRecommendationResults: () =>
            set({
              recommendedMethod: undefined,
              price: undefined,
            }),
        })
      ),
      {
        name: 'RecommendationStore',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
  