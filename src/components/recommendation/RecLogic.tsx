// RecLogic.ts
import RecommendationList from '@/components/recFlow/RecommendationList';
import { PricesList } from '@/components/recFlow/PricesList';

// 추천 시술을 가져오는 로직
export const getRecResults = (
  treatmentPurpose: string,
  treatmentMethod: string,
  price: string
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
      .map((treatment) => PricesList[treatment] || '가격 미정')
      .join(', ') || '가격 미정';

  return {
    recommendedMethod: recommended?.result.join(', ') || '추천 시술 없음',
    similarTreatments: similarTreatments.join(', ') || '유사 시술 없음',
    treatmentCost,
  };
};
