import styles from '../../styles/styles.scss'
interface SurveyAnswerProps {
    name: string; 
    answer: string;
    value: string; // 버튼의 값
    // eslint-disable-next-line no-unused-vars
    onChange: (name: string, value: string) => void;
}

const SurveyAnswer = ({ name, answer, value, onChange }: SurveyAnswerProps) => {
    return (
        <div className={styles.survey_answer}>
            <input
                name={name}
                type="checkbox"
                value={value}
                onChange={() => onChange(name, answer)}
                className={styles.checkbox}
                id={value} // id 추가 (label과 연결하기 위해)
            />
            <label htmlFor={value} className={styles.label}>
                {answer}
            </label>
        </div>
    );
};

export default SurveyAnswer;