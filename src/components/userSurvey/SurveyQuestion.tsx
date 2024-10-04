import styles from '../../styles/styles.scss'

interface SurveyQuestionProps  {
    question: string
}

const SurveyQuestion = ({question}: SurveyQuestionProps ) => {
    return (
        <div className={styles.survey_question}>
            질문: {question}
        </div>
    )
}

export default SurveyQuestion;
