/* eslint-disable no-console */
'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import QuestionList from '@/components/userSurvey/QuestionList';
import QuestionDisplay from '@/components/userSurvey/QuestionDisplay';
import NavigationButtons from '@/components/userSurvey/NavigationButtons';

const UserSurvey = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

  const questions = QuestionList();

  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '답변을 선택해야 진행할 수 있습니다!',
      });
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setSavedAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentQuestionIndex] = selectedAnswer;
        return newAnswers;
      });

      const nextQuestionIndex = getNextQuestionIndex(
        currentQuestionIndex,
        selectedAnswer
      );
      if (
        nextQuestionIndex !== undefined &&
        nextQuestionIndex < questions.length
      ) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        console.error('Invalid question index:', nextQuestionIndex);
      }
      setSelectedAnswer('');
    } else {
      Swal.fire({
        icon: 'success',
        text: '설문이 제출되었습니다!',
      });
      // 제출 로직 추가
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      if (currentQuestionIndex > 6) {
        setCurrentQuestionIndex(prevIndex);
        setSelectedAnswer(savedAnswers[prevIndex] || ''); // 이전 질문의 답변 복원
      } else {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(savedAnswers[prevIndex] || ''); // 이전 질문의 답변 복원
        setSavedAnswers(['']);
      }
    }
  };

  useEffect(() => {
    console.log('savedAnswers =>', savedAnswers);
  }, [savedAnswers]);
  // 질문 결정 로직
  const getNextQuestionIndex = (index: number, answers: string) => {
    switch (index) {
      case 0: // 고민 사항 선택
        if (answers === '주름 개선, 윤곽 개선, 리프팅') return 1;
        if (answers === '피부결 개선, 모공 축소, 잡티 제거') return 2;
        if (answers === '흉터 제거, 점 제거') return 3;
        break;
      case 1:
      case 2:
      case 3:
        return 4;
      case 4:
        return 5;
      case 5:
        return 6;
      case 6:
        return questions.length;
      default:
        return index;
    }
  };

  useEffect(() => {
    console.log('savedAnswers =>', savedAnswers);
  }, [savedAnswers]);

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 py-10 whitespace-nowrap max-md:px-5">
      <div className="flex flex-col w-full max-w-[1199px] max-md:max-w-full">
        <div className="flex flex-col self-center px-8 py-11 max-w-full rounded-lg shadow-xl bg-white bg-opacity-30 w-[794px] max-md:px-5 max-md:mt-10">
          <QuestionDisplay
            questions={questions[currentQuestionIndex]}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
          <NavigationButtons
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSurvey;
