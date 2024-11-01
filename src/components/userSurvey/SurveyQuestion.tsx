interface SurveyQuestionProps {
  question: string;
}

const SurveyQuestion = ({ question }: SurveyQuestionProps) => {
  return (
    <div className="px-16 py-8 text-2xl font-extrabold max-md:text-xl text-center text-white bg-wellcome-pink rounded-md max-md:px-5 max-md:max-w-full">
      {question}
    </div>
  );
};

export default SurveyQuestion;
