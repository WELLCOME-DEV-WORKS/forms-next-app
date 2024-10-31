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
    <div
    className={`flex items-center w-full gap-5 m-2 rounded-lg text-base 
    ${checked ? 'bg-wellcome-pink text-[#ffffff]' : 'bg-wellcome-peach text-wellcome-pink'}
    hover:text-[#ffffff] hover:bg-[#EA708A] transition-colors duration-300`}
    onClick={() => onChange(answer)} // 전체 div 클릭 시 체크 변경
  >
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
        className="absolute opacity-0 shrink-0 w-0 h-0 bg-white rounded-full border-solid border-[3px] border-zinc-800 cursor-pointer "
      />
      <label htmlFor={value} className="flex flex-1 p-4 justify-center items-center text-center cursor-pointer">
       {answer}
      </label>
    </div>
  );
};

export default SurveyAnswer;
