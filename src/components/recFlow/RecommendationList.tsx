// RecommendedList.tsx
interface Recommendation {
  category: string;
  method: string;
  budget: string;
  result: string[];
}

const RecommendationList = (): Recommendation[] => {
  return [
    // 주름개선, 윤곽 개선, 리프팅
    //   > 주사
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '주사',
      budget: '10만원 이하',
      result: ['필러', '보톡스'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '주사',
      budget: '50만원 이하',
      result: ['윤곽주사', '엑소좀', '쥬베록', '필러', '보톡스'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '주사',
      budget: '100만원 이하',
      result: ['지방이식', '윤곽주사', '엑소좀', '쥬베록', '필러', '보톡스'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '주사',
      budget: '100만원 이상',
      result: ['지방이식', '윤곽주사', '엑소좀', '쥬베록', '필러', '보톡스'],
    },

    // 주름개선, 윤곽 개선, 리프팅
    //   > 실리프팅
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '실리프팅',
      budget: '10만원 이하',
      result: ['결과 없음'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '실리프팅',
      budget: '50만원 이하',
      result: ['실리프팅'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '실리프팅',
      budget: '100만원 이하',
      result: ['실리프팅'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '실리프팅',
      budget: '100만원 이상',
      result: ['실리프팅'],
    },

    // 주름개선, 윤곽 개선, 리프팅
    //  > 고주파
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '고주파',
      budget: '10만원 이하',
      result: ['리프테라'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '고주파',
      budget: '50만원 이하',
      result: ['슈링크', '인모드', '리프테라'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '고주파',
      budget: '100만원 이하',
      result: ['울쎄라', '슈링크', '인모드', '리프테라'],
    },
    {
      category: '주름 개선, 윤곽 개선, 리프팅',
      method: '고주파',
      budget: '100만원 이상',
      result: ['써마지', '울쎄라', '슈링크', '인모드', '리프테라'],
    },

    // 피부결개선, 모공축소, 잡티제거
    //   > 주사
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '주사',
      budget: '10만원 이하',
      result: ['결과 없음'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '주사',
      budget: '50만원 이하',
      result: ['엑소좀', '리쥬란', '쥬베록'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '주사',
      budget: '100만원 이하',
      result: ['엑소좀', '리쥬란', '쥬베록'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '주사',
      budget: '100만원 이상',
      result: ['엑소좀', '리쥬란', '쥬베록'],
    },

    // 피부결개선, 모공축소, 잡티제거
    //   > 레이저
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '레이저',
      budget: '10만원 이하',
      result: ['프락셀', '피코슈어', 'CO2레이저', 'IPL'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '레이저',
      budget: '50만원 이하',
      result: ['프락셀', '피코슈어', 'CO2레이저', 'IPL'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '레이저',
      budget: '100만원 이하',
      result: ['프락셀', '피코슈어', 'CO2레이저', 'IPL'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '레이저',
      budget: '100만원 이상',
      result: ['프락셀', '피코슈어', 'CO2레이저', 'IPL'],
    },

    // 피부결개선, 모공축소, 잡티제거
    //   > 필링
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '필링',
      budget: '10만원 이하',
      result: ['필링'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '필링',
      budget: '50만원 이하',
      result: ['필링'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '필링',
      budget: '100만원 이하',
      result: ['필링'],
    },
    {
      category: '피부결 개선, 모공 축소, 잡티 제거',
      method: '필링',
      budget: '100만원 이상',
      result: ['필링'],
    },

    // 흉터 제거, 점 제거
    //   > 레이저
    {
      category: '흉터 제거, 점 제거',
      method: '레이저',
      budget: '10만원 이하',
      result: ['레이저토닝', '피코슈어', 'CO2레이저'],
    },
    {
      category: '흉터 제거, 점 제거',
      method: '레이저',
      budget: '50만원 이하',
      result: ['레이저토닝', '피코슈어', 'CO2레이저'],
    },
    {
      category: '흉터 제거, 점 제거',
      method: '레이저',
      budget: '100만원 이하',
      result: ['레이저토닝', '피코슈어', 'CO2레이저'],
    },
    {
      category: '흉터 제거, 점 제거',
      method: '레이저',
      budget: '100만원 이상',
      result: ['레이저토닝', '피코슈어', 'CO2레이저'],
    },
  ];
};

export default RecommendationList;
