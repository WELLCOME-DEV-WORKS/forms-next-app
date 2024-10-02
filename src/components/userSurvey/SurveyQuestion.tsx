interface SurveyQuestionProps  {
    question: string
}

const SurveyQuestion = ({question}: SurveyQuestionProps ) => {
    return (
        <div className="px-16 py-8 text-2xl text-center text-white bg-rose-400 rounded-md max-md:px-5 max-md:max-w-full">
            질문: {question}
        </div>
    )
}

export default SurveyQuestion;
