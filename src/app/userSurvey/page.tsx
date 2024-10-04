/* eslint-disable no-console */
'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import QuestionList from '@/components/userSurvey/QuestionList';
import QuestionDisplay from '@/components/userSurvey/QuestionDisplay';
import NavigationButtons from '@/components/userSurvey/NavigationButtons';

const UserSurvey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

    const questions = QuestionList();

    const handleAnswerChange = (value: string) => {
        setSelectedAnswer((prev) => {
            const newSelectedAnswers = new Set(prev);
            if (newSelectedAnswers.has(value)) {
                newSelectedAnswers.delete(value);
            } else {
                newSelectedAnswers.add(value);
            }
            return Array.from(newSelectedAnswers);
        });
    };

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
                newAnswers[currentQuestionIndex] = selectedAnswer.join(', ');
                return newAnswers;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer([]);
        } else {
            Swal.fire({
                icon: "success",
                text: "설문이 제출되었습니다!",
            });
            // 제출 로직 추가
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer([]);
        }
    };

    useEffect(() => {
        console.log('savedAnswers =>', savedAnswers);
    }, [savedAnswers]);
    useEffect(() => {
        console.log('답변초기화');
    }, [currentQuestionIndex]);

    return (
        <div className="flex overflow-hidden flex-col items-center px-20 pt-2.5 whitespace-nowrap bg-white max-md:px-5">
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
