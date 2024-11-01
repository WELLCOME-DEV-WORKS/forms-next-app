/* eslint-disable no-console */
'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { QuestionList } from '@/components/userSurvey/QuestionList';
import QuestionDisplay from '@/components/userSurvey/QuestionDisplay';
import NavigationButtons from '@/components/userSurvey/NavigationButtons';
import { useSurveyStore } from '@/store/SurveyStore';

const UserSurvey = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

  const { setSurveyResults } = useSurveyStore();

  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    // 답변이 선택되지 않은 경우 경고 메시지 표시
    if (selectedAnswer.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '답변을 선택해야 진행할 수 있습니다!',
        showConfirmButton: false,
        timer: 1350,
      });
      return;
    }

    // 선택한 답변을 저장
    setSavedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = selectedAnswer; // 현재 질문 인덱스에 답변 저장

      const nextQuestionIndex = getNextQuestionIndex(
        currentQuestionIndex,
        selectedAnswer
      );

      // 마지막 질문에 도달한 경우
      if (nextQuestionIndex === QuestionList.length) {
        setSurveyResults(newAnswers); // 업데이트된 newAnswers를 사용하여 저장
        Swal.fire({
          html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="100" height="100" style="display: block; margin: 0 auto;">
            <g transform="translate(50 50)">
              <g transform="scale(0.8)">
                <g transform="translate(-50 -50)">
                  <g>
                    <animateTransform keyTimes="0;0.33;0.66;1" values="-20 -20;20 -20;0 20;-20 -20" dur="1s" repeatCount="indefinite" type="translate" attributeName="transform"></animateTransform>
                    <path d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z" fill="#f1feff"></path>
                    <path d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z" fill="#ea708a"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        `,
          title: '추천드릴 시술을 찾아보는 중이에요!',
          showConfirmButton: false,
          customClass: {
            title: 'text-xl max-md:text-base',
            actions: 'max-md:mt-0',
            },
          timer: 2000,
          // didOpen: () => {
          //   Swal.showLoading(); // 열리면서 로딩 아이콘 표시
          // },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("타이머에 의해 창이 닫혔습니다.");
            // 여기서 추가로 필요한 로직을 넣을 수 있습니다.
          }
        });
        // 다음 버튼 로직
      } else if (nextQuestionIndex !== undefined) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer('');
      }

      return newAnswers;
    });
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
        return QuestionList.length;
      default:
        return index;
    }
  };
  const getPreviousQuestionIndex = (index: number) => {
    switch (index) {
      case 1:
      case 2:
      case 3:
        return 0;
      case 4:
        return 1;
      case 5:
        return 4;
      case 6:
        return 5;
      default:
        return index;
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = getPreviousQuestionIndex(currentQuestionIndex);
      setCurrentQuestionIndex(prevIndex);
      setSelectedAnswer(savedAnswers[prevIndex] || '');
    }
  };

  useEffect(() => {
    console.log('savedAnswers =>', savedAnswers);
  }, [savedAnswers]);

  return (
    <div className="flex overflow-hidden flex-col items-center pt-1 pb-20 py-10 whitespace-nowrap max-md:px-5">
      <div className="flex flex-col w-full max-w-[1199px] max-md:max-w-full">
        <div className="flex flex-col self-center px-8 py-11 max-w-full rounded-lg shadow-xl bg-white bg-opacity-30 w-[794px] max-md:px-5 max-md:mt-10">
          <QuestionDisplay
            questions={QuestionList[currentQuestionIndex]}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
          <NavigationButtons
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QuestionList.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSurvey;
