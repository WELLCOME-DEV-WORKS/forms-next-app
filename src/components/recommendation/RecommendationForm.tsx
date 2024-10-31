'use client';
import { useSurveyStore } from '@/store/SurveyStore';
import { PricesList } from '../recFlow/PricesList';
import { RecommendationLogic } from '@/components/recommendation/RecommendationLogic';
import { useEffect, useState } from 'react';
import { useRecommendationStore } from '@/store/RecommendationStore';

interface FormFieldProps {
  label: string;
  ans: string[];
  RecButton?: boolean;
  onRecommendationSelect?: (method: string) => void;
}

const FormField = ({ label, ans, RecButton, onRecommendationSelect }: FormFieldProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // 선택된 추천 시술 상태

  const handleButtonClick = (item: string) => {
    const method = item.split(' ')[0]; // method만 추출
    setSelectedItem(method); // 선택된 항목 업데이트
    onRecommendationSelect && onRecommendationSelect(item); // 선택한 추천 시술 전달
  };

  return (
    <div className="flex flex-col mb-8 w-full h-full items-center justify-center max-lg:flex-row">
      <div className="flex flex-col px-11 py-2 items-center justify-center w-full h-full">
        <div className="bg-wellcome-pink rounded-lg p-4 w-full z-10 text-center text-white text-xl font-bold
        max-md:text-base
        ">
          {label}
        </div>
        <div
          className="w-full px-16 py-6 mt-11 rounded-2xl justify-center items-center text-wellcome-pink text-xl font-bold border-2 border-rose-400 border-dashed leading-loose 
          max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-base max-sm:text-md"
          style={{ whiteSpace: 'pre-line' }}
        >
          {ans.map((item, index) => {
            const method = item.split(' ')[0]; // method만 추출하여 비교
            const isSelected = selectedItem === method;
            return (
              <div key={index} className="my-1 text-center">
                {item === '조건에 부합하는 상품이 없습니다.' || !RecButton ? (
                  <span className="text-wellcome-pink">{item}</span>
                ) : (
                  <button
                    type="button"
                    className={`flex flex-row font-bold py-2 px-4 rounded-lg w-full justify-center my-3 transition-colors duration-300
                    ${isSelected ? 'bg-[#EA708A] text-[#ffffff]' : 'bg-wellcome-peach text-wellcome-pink hover:text-[#ffffff] hover:bg-[#EA708A]'}`}
                    onClick={() => handleButtonClick(item)}
                  >
                    {item}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface RecommendationFormProps {
  setNoRecommendation: (value: boolean) => void;
}

const RecommendationForm = ({ setNoRecommendation }: RecommendationFormProps) => {
  const { treatmentPurpose, treatmentMethod, budget } = useSurveyStore();
  const { setRecommendation } = useRecommendationStore();

  // 추천 결과 로직 호출
  const { recommendedTreatment, similarTreatment } = RecommendationLogic(
    treatmentPurpose || '',
    treatmentMethod || '',
    budget || ''
  );

  useEffect(() => {
    setNoRecommendation(recommendedTreatment === '조건에 부합하는 상품이 없습니다.');
  }, [recommendedTreatment, setNoRecommendation]);

  // 비용 계산 로직
  const treatmentPrice = (methods: string, excludeNoItems = false): string[] => { 
    if (!methods) return [];
    return methods
      .split(', ')
      .filter((method) => !(excludeNoItems && method === '조건에 부합하는 상품이 없습니다.'))
      .map((method) =>
        method === '조건에 부합하는 상품이 없습니다.'
          ? method 
          : `${method} (평균 ${PricesList[method] || '정보 없음'}원)` 
      );
  };

  const recommendedAns = treatmentPrice(recommendedTreatment || '');
  const similarAns = treatmentPrice(similarTreatment || '', true);

  // 사용자가 선택한 추천 시술 핸들러
  const handleRecommendationSelect = (methodWithPrice: string) => {
    const method = methodWithPrice.split(' ')[0];
    const price = PricesList[method] 
      ? parseInt(PricesList[method].replace(/,/g, ''), 10) 
      : '정보 없음';  
    setRecommendation(method, price.toString());
  };

  return (
    <form className="flex flex-wrap justify-center w-[85%]">
      <FormField 
      label="추천 시술" 
      ans={recommendedAns} 
      RecButton={true} 
      onRecommendationSelect={handleRecommendationSelect} />
      <FormField 
      label="그 외 시술" 
      ans={similarAns} />
    </form>
  );
};

export default RecommendationForm;
