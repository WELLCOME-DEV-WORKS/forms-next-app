'use client';

import { useSurveyCompleteStore } from '@/store/SurveyStore';
import React, { useEffect } from 'react';

export const SurveyComplete = () => {
  const {surveyComplete, setSurveyComplete} = useSurveyCompleteStore(); 

  useEffect(() => {
    const storedSurveyComplete = JSON.parse(
      localStorage.getItem('SurveyCompleteStore') || '{"state":{"surveyComplete":false}}'
    );
    setSurveyComplete(storedSurveyComplete.state.surveyComplete);
    console.log('storedSurveyComplete 체크', storedSurveyComplete);
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
