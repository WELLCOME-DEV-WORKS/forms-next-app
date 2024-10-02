'use client'
import SurveyAnswer from '@/components/userSurvey/SurveyAnswer';
import SurveyQuestion from '../../components/userSurvey/SurveyQuestion';
import { useState } from 'react';

const UserSurvey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // 질문/답변 리스트
    const questions = [
        { question: '피부입니까?', answers: ['항목1', '항목2', '항목3', '항목4'] },
        { question: '나이는?', answers: ['항목1', '항목2', '항목3'] },
        // 추가 질문을 여기에 정의
    ];

    const handleAnswerChange = (name: string, value: string) => {
        setSelectedAnswer(value);
        console.log('name, value =>', name, ',', value); // 선택된 값 출력
    };

    // 다음 버튼
    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(''); // 다음 질문으로 넘어갈 때 선택된 답변 초기화
        }
    };

    // 이전 버튼
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(''); // 이전 질문으로 돌아갈 때 선택된 답변 초기화
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
                            />
                        ))}
                    </div>
                    <div className="flex justify-center gap-5 self-center mt-11 max-w-full text-center">
                        <div 
                            className="px-10 py-3.5 text-white bg-rose-400 rounded max-md:px-5"
                            onClick={handlePrevious}
                            style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible',
                              pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto'
                            }} // 첫 질문에서 이전 버튼 숨김
                        >
                            이전
                        </div>
                        <div 
                             className={`px-10 py-3.5 text-rose-400 bg-white rounded border-2 border-rose-400 border-solid max-md:px-5 
                              ${currentQuestionIndex === 0 ? 'fixed' : ''}
                              `}
                            onClick={handleNext}
                        >
                            다음
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSurvey;
