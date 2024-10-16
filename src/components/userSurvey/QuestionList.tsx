// QuestionList.tsx
const questions = [
    {
        // 0
        question: '주요 고민 사항은 무엇인가요?',
        answers: [
            '주름 개선, 윤곽 개선, 리프팅',
            '피부결 개선, 모공 축소, 잡티 제거',
            '흉터 제거, 점 제거',
        ]
    },
    {
        // 1
        question: '선호하는 시술 방법이 있나요?',
        answers: [
            '주사',
            '실리프팅',
            '고주파'
        ]
    },
    {
        // 2
        question: '선호하는 시술 방법이 있나요?',
        answers: [
            '주사',
            '레이저',
            '필링',
        ]
    },
    {
        // 3
        question: '선호하는 시술 방법이 있나요?',
        answers: [
            '레이저',
        ]
    },
    {
        // 4
        question: '시술 부위는 어디인가요?',
        answers: [
            '눈가',
            '이마',
            '볼',
            '입주변',
            '턱'
        ]
    },
    {
        // 5
        question: '과거 시술 후 부작용 경험이 있나요?',
        answers: [
            '없음',
            '주사 부위 통증 및 붓기',
            '감염',
            '색소침착',
            '화상 또는 홍반',
            '기타'
        ]
    },
    {
        // 6
        question: '예산은 어느 정도인가요?',
        answers: [
            '10만원 이하',
            '50만원 이하',
            '100만원 이하',
            '100만원 이상',         
        ]
    },
];

const QuestionList = () => {
    return questions;
};

export default QuestionList;
