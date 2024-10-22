interface SurveyAnswerProps {
  name: string;
  answer: string;
  value: string; // 버튼의 값
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  checked: boolean;
}

const SurveyAnswer = ({
  name,
  answer,
  value,
  onChange,
  checked,
}: SurveyAnswerProps) => {
  return (
    <div className="flex gap-5 mt-5 items-center">
      <input
        id={value}
        name={name}
        type="checkbox"
        value={value}
        onChange={() => onChange(answer)}
        checked={checked}
        className="shrink-0 w-5 h-5 bg-white rounded-full border-solid border-[3px] border-zinc-800 cursor-pointer"
      />
      <label htmlFor={value} className="align-middle">
        {answer}
      </label>
    </div>
  );
};

export default SurveyAnswer;
