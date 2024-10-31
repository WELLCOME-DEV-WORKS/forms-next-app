import RecommendationList from '@/components/recFlow/RecommendationList';
import { PricesList } from '@/components/recFlow/PricesList';

// 추천 시술 로직
export const RecommendationLogic = (
  treatmentPurpose: string, // 고민 사항
  treatmentMethod: string, // 시술 방법
  price: string // 가격
) => {
  const recommended = RecommendationList().find(
    (rec) =>
      rec.category === treatmentPurpose &&
      rec.method === treatmentMethod &&
      rec.budget === price
  );

  const similarTreatment = RecommendationList()
    .filter(
      (rec) =>
        rec.category === treatmentPurpose &&
        rec.budget === price &&
        rec.method !== treatmentMethod
        
    )
    .map((rec) => rec.result.join(', '))
    .filter((result)=> result.length > 0)

const recommendedTreatment = 
( recommended?.result && recommended.result.length > 0) 
? recommended.result.join(', ') 
: '조건에 부합하는 상품이 없습니다.'


const similarTreatmentResult =
similarTreatment.length > 0
? similarTreatment.join(', ')
: '조건에 부합하는 상품이 없습니다.'
    
  const treatmentCost =
    recommended?.result
      .map((treatment) => PricesList[treatment] || '가격 정보 없음')
      .join(', ') || '가격 정보 없음';

  return {
    recommendedTreatment,
    similarTreatment: similarTreatmentResult,
    treatmentCost,
  };
};
