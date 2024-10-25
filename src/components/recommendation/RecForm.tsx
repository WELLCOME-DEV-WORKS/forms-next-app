import { useSurveyResultsStore } from '@/store/Store';
import { PricesList } from '../recFlow/PricesList';
import { useEffect } from 'react';
import { getRecResults } from '@/components/recommendation/RecLogic';

interface FormFieldProps {
  label: string;
  ans: string;
}

const FormField = ({ label, ans }: FormFieldProps) => {
  return (
    <div
      className="flex flex-col mb-8 w-full h-full items-center justify-center
    max-lg:flex-row "
    >
      <div className="px-11 py-2 flex flex-col items-center justify-center  w-full h-full">
        <div
          className="bg-wellcome-pink rounded-lg 
            p-4 w-full z-10 text-center text-white text-xl 
             font-bold"
        >
          {label}
        </div>

        <div
          className="w-full px-16 py-9 mt-11 rounded-2xl text-left justify-center items-center text-wellcome-pink text-xl font-bold border-2 border-rose-400 border-dashed leading-loose
          max-md:px-5 max-md:mt-10 max-md:max-w-full"
          style={{ whiteSpace: 'pre-line' }}
        >
          {ans}
        </div>
      </div>
    </div>
  );
};

const RecForm = () => {
  const { treatmentPurpose, treatmentMethod, price, loadLocal } =
    useSurveyResultsStore();
  console.log('treatmentMethod', treatmentMethod);

  // 페이지 로드 시 localStorage에서 값 불러오기
  useEffect(() => {
    loadLocal();
  }, [loadLocal]);

  // 추천 결과 로직 호출
  const { recommendedMethod, similarTreatments, treatmentCost } = getRecResults(
    treatmentPurpose || '',
    treatmentMethod || '',
    price || ''
  );

  // 비용 계산 로직
  const calculatePriceDetails = (methods: string) => {
    if (!methods) return ''; // 값이 없으면 빈 문자열 반환
    const methodList = methods.split(', ');
    return methodList
      .map((method) => `${method}: ${PricesList[method] || '정보 없음'}`)
      .join('\n');
  };

  const fields = ['추천 시술', '시술방법이 다른 시술들'];
  const ans = [
    calculatePriceDetails(recommendedMethod || ''), // 비용 계산하여 표시
    calculatePriceDetails(similarTreatments || ''),
  ];

  return (
    <form className="flex justify-center w-[85%] ">
      {fields.map((field, index) => (
        <FormField key={index} label={field} ans={ans[index]} />
      ))}
    </form>
  );
};

export default RecForm;
