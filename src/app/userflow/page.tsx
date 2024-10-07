'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import QuestionDisplay from '@/components/userFlow/QuestionDisplay';
import NavigationButtons from '@/components/userFlow/NavigationButtons';
import QuestionList from '@/components/userFlow/QuestionList';

const UserSurvey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [savedAnswers, setSavedAnswers] = useState<string[]>([]);
    
    const questions = QuestionList(); // 질문 목록 가져오기

    const handleAnswerChange = (value: string) => {
        setSelectedAnswer(value);
    };

    const handleNext = () => {
        if (selectedAnswer.length === 0) {
            Swal.fire({
                icon: "error",
                text: "답변을 선택해야 진행할 수 있습니다!",
            });
            return;
        }

        // 현재 질문의 답변에 따라 다음 질문 결정
        if (currentQuestionIndex < questions.length - 1) {
            // 현재 질문의 답변을 저장
            setSavedAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[currentQuestionIndex] = selectedAnswer;
                return newAnswers;
            });

            // 고객 주요 고민 사항에 따른 다음 질문 인덱스 설정
            const nextQuestionIndex = getNextQuestionIndex(currentQuestionIndex, selectedAnswer);
            if (nextQuestionIndex !== undefined && nextQuestionIndex < questions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                console.error("Invalid question index:", nextQuestionIndex);
            }
            setSelectedAnswer(''); // 선택 초기화
        } else {
            Swal.fire({
                icon: "success",
                text: "설문이 제출되었습니다!",
            });
            // 제출 로직 추가
        }
    };

    const getNextQuestionIndex = (index: number, answer: string) => {
        // 고객 주요 고민 사항에 따른 다음 질문 인덱스 결정
        switch (index) {
            case 0: // 고민 사항 선택
                if (answer === "주름 및 피부 탄력 개선") return 1; // 주름 질문
                if (answer === "얼굴 윤곽 개선") return 2; // 얼굴 윤곽 질문
                if (answer === "색소 침착 및 피부 톤 개선") return 3; // 색소 질문
                if (answer === "제모") return 4; // 제모 질문
                if (answer === "기타") return 5; // 기타 질문
                break;
            case 1: // 주름 질문
            case 2: // 얼굴 윤곽 질문
            case 3: // 색소 질문
            case 4: // 제모 질문
                return 6; // 예산 질문으로 이동
            case 5: // 기타 질문
                return 6; // 예산 질문으로 이동
            case 6: // 예산 질문
                return 7; // 회복 기간 질문으로 이동
            case 7: // 회복 기간 질문
                return 8; // 알레르기 경험 질문으로 이동
            case 8: // 알레르기 경험 질문
                return 9; // 부작용 경험 질문으로 이동
            case 9: // 부작용 경험 질문
                return 10; // 추가 상담 필요 질문으로 이동
            case 10: // 추가 상담 질문
                return questions.length; // 설문 종료
            default:
                return index; // 기본적으로 현재 인덱스 유지
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
                setSavedAnswers([''])
            }
    
        }
    };

    useEffect(() => {
        console.log('savedAnswers =>', savedAnswers);
    }, [savedAnswers]);

    useEffect(() => {
        console.log('답변 초기화');
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
