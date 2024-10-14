'use client'
import { create } from 'zustand'

interface StoreState {
    surveyComplete: boolean;
    // eslint-disable-next-line no-unused-vars
    setSurveyComplete: (complete: boolean) => void;
}

// Zustand 스토어 생성
export const useStore = create<StoreState>((set) => ({
    surveyComplete: false,
    setSurveyComplete: (complete) => set({ surveyComplete: complete }), // 상태 업데이트 함수
}));