'use client'
import Swal from 'sweetalert2'
import SurveyAnswer from '@/components/userSurvey/SurveyAnswer';
import SurveyQuestion from '../../components/userSurvey/SurveyQuestion';
import { useEffect, useState } from 'react';
import QuestionList from '@/components/userSurvey/QuestionList';

const UserSurvey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

    // 질문/답변 리스트
    const questions = QuestionList();
    
    const handleAnswerChange = (name: string, value: string) => {
      setSelectedAnswer((prev) => {
          const newSelectedAnswers = new Set(prev);
          // 이미 선택된 경우 선택 해제
          if (newSelectedAnswers.has(value)) {
              newSelectedAnswers.delete(value);
          } else {
              newSelectedAnswers.add(value);
          }
          const updatedAnswers = Array.from(newSelectedAnswers);
          console.log('name, selected answers =>', name, ',', updatedAnswers); // 선택된 값 출력
          return updatedAnswers; // 업데이트된 배열 반환
      });
  };
  

    // 다음 버튼
    const handleNext = () => {
        if (selectedAnswer.length === 0) {
            Swal.fire({
                icon: "error",
                text: "You need to select an answer to proceed!",
              });
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setSavedAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[currentQuestionIndex] = selectedAnswer.join(', '); // 선택된 답변을 저장
            
                return newAnswers;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer([]);
        } else {
            // 마지막 질문 제출 처리
            Swal.fire({
                icon: "success",
                text: "설문이 제출되었습니다!",
            });
            // 제출 로직 추가
        }
    };
    useEffect(() => {
        console.log('savedAnswers =>', savedAnswers);
    }, [savedAnswers]);
    useEffect(() => {
        console.log('답변초기화');
    }, [currentQuestionIndex]);

    // 이전 버튼
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer([]); // 이전 질문으로 돌아갈 때 선택된 답변 초기화
        }
    };

    return (
        <div className="flex overflow-hidden flex-col items-center px-20 pt-2.5 whitespace-nowrap bg-white max-md:px-5">
            <div className="flex flex-col w-full max-w-[1199px] max-md:max-w-full">
                <div className="shrink-0 w-full h-1" />
                <div className="flex flex-col self-center px-8 py-11 mt-28 max-w-full rounded-lg shadow-xl bg-white bg-opacity-30 w-[794px] max-md:px-5 max-md:mt-10">
                    <SurveyQuestion question={questions[currentQuestionIndex].question} />
                    <div className="flex flex-col items-start px-16 py-9 mt-11 w-full font-bold text-black bg-white rounded-2xl border-2 border-rose-400 border-dashed max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        {questions[currentQuestionIndex].answers.map((answer, index) => (
                            <SurveyAnswer 
                                key={index}
                                name={questions[currentQuestionIndex].question} 
                                answer={answer} 
                                value={`item${index + 1}`} 
                                onChange={handleAnswerChange}
                                checked={selectedAnswer.includes(answer)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center gap-5 self-center mt-11 max-w-full text-center">
                        <div 
                            className="px-10 py-3.5 text-white bg-rose-400 rounded max-md:px-5"
                            onClick={handlePrevious}
                            style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible',
                              pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto'
                            }}
                        >
       이전
                        </div>
                        <div 
                             className="px-10 py-3.5 text-rose-400 bg-white rounded border-2 border-rose-400 border-solid max-md:px-5"
                            onClick={handleNext}
                        >
                            {currentQuestionIndex === questions.length - 1 ? '제출' : '다음'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSurvey;
