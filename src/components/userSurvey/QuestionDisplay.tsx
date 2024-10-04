import { Question } from '@/types/usersurvey';
import SurveyQuestion from '../../components/userSurvey/SurveyQuestion';
import SurveyAnswer from '@/components/userSurvey/SurveyAnswer';


interface QuestionDisplayProps {
    questions: Question;
    selectedAnswer: string[];
    onAnswerChange: (value: string) => void;
}

const QuestionDisplay = ({ questions, selectedAnswer, onAnswerChange }: QuestionDisplayProps) => {
    return (
        <>
            <SurveyQuestion question={questions.question} />
            <div className="flex flex-col items-start px-16 py-9 mt-11 w-full font-bold text-black bg-white rounded-2xl border-2 border-rose-400 border-dashed max-md:px-5 max-md:mt-10 max-md:max-w-full">
                {questions.answers.map((answer, index) => (
                    <SurveyAnswer 
                        key={index}
                        name={questions.question} 
                        answer={answer} 
                        value={`item${index + 1}`} 
                        onChange={onAnswerChange}
                        checked={selectedAnswer.includes(answer)}
                    />
                ))}
            </div>
        </>
    );
};

export default QuestionDisplay;
