'use client'
import { useEffect } from 'react';
import { create } from 'zustand'

interface StoreState {
    surveyComplete: boolean;
    // eslint-disable-next-line no-unused-vars
    setSurveyComplete: (complete: boolean) => void;
}

// Zustand 스토어 생성
export const useStoreSurvey = create<StoreState>((set) => ({
        surveyComplete: false,
        setSurveyComplete: (complete) => {
            console.log('설문 완료 상태 업데이트:', complete);
            set({ surveyComplete: complete }); // 상태 업데이트
            localStorage.setItem('SurveyComplete', JSON.stringify(complete)); // 로컬 스토리지에 저장
            console.log('로컬 스토리지에 저장:', complete);
        },
    }));