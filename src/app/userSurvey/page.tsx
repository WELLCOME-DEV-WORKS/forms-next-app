// UserSurvey.tsx
'use client';
import SurveyAnswer from '@/components/userSurvey/SurveyAnswer';
import SurveyQuestion from '../../components/userSurvey/SurveyQuestion';
import { useState } from 'react';
import QuestionList from '@/components/userSurvey/QuestionList';
import styles from '../../styles/UserSurvey/UserSurvey.module.scss'; // Sass 파일 import

const UserSurvey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = QuestionList();

    const handleAnswerChange = (name: string, value: string) => {
        setSelectedAnswer((prev) => {
            const newSelectedAnswers = new Set(prev);
            if (newSelectedAnswers.has(value)) {
                newSelectedAnswers.delete(value);
            } else {
                newSelectedAnswers.add(value);
            }
            const updatedAnswers = Array.from(newSelectedAnswers);
            console.log('name, selected answers =>', name, ',', updatedAnswers);
            return updatedAnswers;
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer([]);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer([]); // 이전 질문으로 돌아갈 때 선택된 답변 초기화
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.spacer} />
                <div className={styles.survey_box}>
                    <SurveyQuestion question={questions[currentQuestionIndex].question} />
                    <div className={`${styles.answer_box} ${styles.question}`}>
                        {questions[currentQuestionIndex].answers.map((answer, index) => (
                            <SurveyAnswer 
                                key={index}
                                name={questions[currentQuestionIndex].question}
                                answer={answer}
                                value={`item${index + 1}`} 
                                onChange={handleAnswerChange} 
                                className={styles.answer} // 필요 시 추가
                            />
                        ))}
                    </div>
                    <div className={styles.navigation}>
                        <div 
                            className={styles.previous_button}
                            onClick={handlePrevious}
                            style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible', pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto' }}
                        >
                            이전
                        </div>
                        <div 
                            className={`${styles.next_button} ${currentQuestionIndex === 0 ? 'fixed' : ''}`}
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
