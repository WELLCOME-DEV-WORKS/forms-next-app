// import { Session } from "next-auth";
import { useStoreSurvey } from '@/store/Store';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// import { useEffect, useState } from "react";

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}
const NavigationButtons = ({
  currentQuestionIndex,
  totalQuestions,
  onNext,
  onPrevious,
}: NavigationButtonsProps) => {
  const router = useRouter();
  // const [session, setSession] = useState<Session | null>(null);
  // const [redirectToReservation, setRedirectToReservation] = useState(false);
  const setSurveyComplete = useStoreSurvey((state) => state.setSurveyComplete);
  const surveyComplete = useStoreSurvey((state) => state.surveyComplete);

  useEffect(() => {
    console.log('surveyComplete =>', surveyComplete);
  }, [surveyComplete]);

  const handleNext = async () => {
    const session = await getSession();
    console.log('session =>', session);

    if (currentQuestionIndex === totalQuestions - 1) {
      // 로컬스토리지에 결과 저장 로직 추가
      if (!session) {
        setSurveyComplete(true);
        setTimeout(async () => {
          await router.push('/sign-in');
        }, 5000);
        return;
      }
      await router.push('/reservation');
    } else {
      onNext();
    }
  };

  return (
    <div className="flex justify-center gap-5 self-center mt-11 max-w-full text-center">
      <div
        className="px-10 py-3.5 text-white bg-wellcome-pink rounded max-md:px-5 cursor-pointer
        hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300"
        onClick={onPrevious}
        style={{
          visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible',
          pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto',
        }}
      >
        이전
      </div>
      <div
        className="px-10 py-3.5 text-wellcome-pink bg-white rounded border-2 border-wellcome-pink border-solid max-md:px-5 cursor-pointer
        hover:text-wellcome-peach hover:bg-wellcome-pink border-wellcome-pink transition-colors duration-300"
        onClick={handleNext}
      >
        {currentQuestionIndex === totalQuestions - 1 ? '예약' : '다음'}
      </div>
    </div>
  );
};

export default NavigationButtons;
