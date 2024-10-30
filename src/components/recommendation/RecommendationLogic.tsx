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

  const similarTreatments = RecommendationList()
    .filter(
      (rec) =>
        rec.category === treatmentPurpose &&
        rec.budget === price &&
        rec.method !== treatmentMethod
    )
    .map((rec) => rec.result.join(', '));

    
  const treatmentCost =
    recommended?.result
      .map((treatment) => PricesList[treatment] || '가격 정보 없음')
      .join(', ') || '가격 정보 없음';

  return {
    recommendedTreatments: recommended?.result.join(', ') || '추천 시술 없음',
    similarTreatments: similarTreatments.join(', ') || '유사 시술 없음',
    treatmentCost,
  };
};
