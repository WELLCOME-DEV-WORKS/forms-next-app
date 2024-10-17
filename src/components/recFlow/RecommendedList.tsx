const RecommendedList = () => {
  return [
    {
      question: '고민 사항을 선택하세요.',
      answers: [
        '주름 및 피부 탄력 개선',
        '얼굴 윤곽 개선',
        '색소 침착 및 피부 톤 개선',
        '제모',
        '기타',
      ],
    },
    {
      question:
        '주름 및 피부 탄력 개선에 대한 선호하는 시술 방법을 선택하세요.',
      answers: [
        '비수술적 방법: 울쎄라, 슈링크, 써마지',
        '주사 및 필러: 리쥬란, 쁘띠',
        '레이저: CO2 프락셀, 시카레이저',
      ],
    },
    {
      question: '얼굴 윤곽 개선에 대한 선호하는 시술 방법을 선택하세요.',
      answers: [
        '비수술적 방법: 실리프팅, 워너V리프팅',
        '주사 및 필러: 윤곽주사, 볼필러',
      ],
    },
    {
      question:
        '색소 침착 및 피부 톤 개선에 대한 선호하는 시술 방법을 선택하세요.',
      answers: [
        '비수술적 방법: 피코레이저, 착색토닝',
        '레이저: 피코토닝, V레이저',
      ],
    },
    {
      question: '제모 방법을 선택하세요.',
      answers: ['젠틀맥스, 프리미엄제모'],
    },
    {
      question: '기타',
      answers: ['추가 상담 필요'],
    },
    {
      question: '예산을 선택하세요.',
      answers: [
        '100,000 - 300,000 원',
        '300,000 - 600,000 원',
        '600,000 - 1,000,000 원',
        '1,000,000 원 이상',
      ],
    },
    {
      question: '회복 기간을 선택하세요.',
      answers: ['즉시 일상생활 가능', '1-2일', '3일 이상 가능'],
    },
    {
      question: '추가 상담이 필요하신가요?',
      answers: ['네', '아니요'],
    },
  ];
};

export default RecommendedList;
