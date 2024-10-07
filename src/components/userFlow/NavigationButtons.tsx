interface NavigationButtonsProps {
    currentQuestionIndex: number;
    totalQuestions: number;
    onNext: () => void;
    onPrevious: () => void;
}
const NavigationButtons = ({ currentQuestionIndex, totalQuestions, onNext, onPrevious }: NavigationButtonsProps) => {
    return (
        <div className="flex justify-center gap-5 self-center mt-11 max-w-full text-center">
            <div 
                className="px-10 py-3.5 text-white bg-rose-400 rounded max-md:px-5"
                onClick={onPrevious}
                style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible', pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto' }}
            >
                이전
            </div>
            <div 
                className="px-10 py-3.5 text-rose-400 bg-white rounded border-2 border-rose-400 border-solid max-md:px-5"
                onClick={onNext}
            >
                {currentQuestionIndex === totalQuestions - 1 ? '제출' : '다음'}
            </div>
        </div>
    );
};

export default NavigationButtons;
