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
    <div className="flex items-center p-4 w-full gap-5 mt-5 bg-wellcome-peach rounded-lg  text-wellcome-pink text-base
     hover:text-[#FEE4E3] hover:bg-[#EA708A] transition-colors duration-300
    ">
      <input
        id={value}
        name={name}
        type="checkbox"
        value={value}
        onChange={() => {
          console.log("이거 클릭했지!! : ", answer); // 체크된 값을 콘솔에 출력
          onChange(answer);
        }}
        checked={checked}
        className="shrink-0 w-5 h-5 bg-white rounded-full border-solid border-[3px] border-zinc-800 cursor-pointer "
      />
      <label htmlFor={value} className="align-middle cursor-pointer">
        {answer}
      </label>
    </div>
  );
};

export default SurveyAnswer;
