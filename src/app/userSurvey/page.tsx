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
    // 답변이 선택되지 않은 경우 경고 메시지 표시
    if (selectedAnswer.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '답변을 선택해야 진행할 수 있습니다!',
      });
      return;
    }

    // 선택한 답변을 저장
    setSavedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = selectedAnswer; // 현재 질문 인덱스에 답변 저장
      return newAnswers;
    });

    const nextQuestionIndex = getNextQuestionIndex(
      currentQuestionIndex,
      selectedAnswer
    );

    // 마지막 질문에 도달한 경우
    if (nextQuestionIndex === questions.length) {
      Swal.fire({
        icon: 'success',
        text: '설문이 제출되었습니다!',
      });
      // 여기서 제출 로직 추가
    } else if (nextQuestionIndex !== undefined) {
      // nextQuestionIndex가 undefined가 아닐 경우에만 상태 업데이트
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const getNextQuestionIndex = (index: number, answers: string) => {
    switch (index) {
      case 0:
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

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setSelectedAnswer(savedAnswers[prevIndex] || '');
    }
  };

  useEffect(() => {
    console.log('savedAnswers =>', savedAnswers);
  }, [savedAnswers]);

  return (
    <div className='flex overflow-hidden flex-col items-center px-20 py-10 whitespace-nowrap max-md:px-5'>
      <div className='flex flex-col w-full max-w-[1199px] max-md:max-w-full'>
        <div className='flex flex-col self-center px-8 py-11 max-w-full rounded-lg shadow-xl bg-white bg-opacity-30 w-[794px] max-md:px-5 max-md:mt-10'>
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
