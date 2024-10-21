'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSurveyCompleteStore } from '@/store/Store';

export const useSurveyRedirect = () => {
  const router = useRouter();
  const { surveyComplete, setSurveyComplete } = useSurveyCompleteStore();

  // useEffect(() => {
  if (surveyComplete === true) {
    console.log('설문 완료, 리다이렉트 중');
    setSurveyComplete(false); // 상태를 false로 설정
    router.push('/reservation'); // 리다이렉트
  }
  // }, [surveyComplete, router, setSurveyComplete]);
};

export const useLoadSurveyComplete = () => {
  const router = useRouter();
  const { surveyComplete, setSurveyComplete } = useSurveyCompleteStore();

  useEffect(() => {
    if (surveyComplete === true) {
      console.log('초기값 로드:', surveyComplete);
      setSurveyComplete(false);
      router.push('/reservation');
    }
  }, [surveyComplete]);
};
