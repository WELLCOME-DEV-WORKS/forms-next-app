interface SurveyAnswerProps {
    name: string; 
    answer: string;
    value: string; // 버튼의 값
    // eslint-disable-next-line no-unused-vars
    onChange: (name: string, value: string) => void;
}

const SurveyAnswer = ({ name, answer, value, onChange}: SurveyAnswerProps) => {
    return (
        <div className="flex gap-5 mt-5 items-center">
            <input
                name={name}
                type="checkbox"
                value={value}
                onChange={() => onChange(name, answer)}
                className="shrink-0 w-5 h-5 bg-white rounded-full border-solid border-[3px] border-zinc-800"
            />
            <label htmlFor={value} className="align-middle">{answer}</label>
        </div>
    );
};

export default SurveyAnswer;