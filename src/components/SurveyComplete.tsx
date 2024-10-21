'use client';

import { useSurveyCompleteStore } from '@/store/Store';
import React, { useEffect } from 'react';

export const SurveyComplete = () => {
  const surveyComplete = useSurveyCompleteStore(
    (state) => state.surveyComplete
  );
  const setSurveyComplete = useSurveyCompleteStore(
    (state) => state.setSurveyComplete
  );

  useEffect(() => {
    const storedSurveyComplete = JSON.parse(
      localStorage.getItem('SurveyComplete') || 'false'
    );
    setSurveyComplete(storedSurveyComplete);
  }, [setSurveyComplete]);

  const handleButtonClick = () => {
    // 현재 상태에 따라 true/false를 토글합니다.
    setSurveyComplete(!surveyComplete);
  };
  return (
    <>
      <hr />
      <br />
      <button onClick={handleButtonClick}>전환버튼</button>
      <hr />
      {surveyComplete ? <p>True</p> : <p>False</p>}
    </>
  );
};
