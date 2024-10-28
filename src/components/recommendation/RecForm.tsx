import { useSurveyStore } from '@/store/SurveyStore';
import { PricesList } from '../recFlow/PricesList';
import { getRecResults } from '@/components/recommendation/RecLogic';

interface FormFieldProps {
  label: string;
  ans: string[];
  RecButton?: boolean;
}

const FormField = ({ label, ans, RecButton }: FormFieldProps) => {
  return (
    <div className="flex flex-col mb-8 w-full h-full items-center justify-center max-lg:flex-row">
      <div className="flex flex-col px-11 py-2 items-center justify-center w-full h-full">
        <div className=" bg-wellcome-pink rounded-lg p-4 w-full z-10 text-center text-white text-xl font-bold">
          {label}
        </div>
        <div className="w-full px-16 py-9 mt-11 rounded-2xl text-left justify-center items-center text-wellcome-pink text-xl font-bold border-2 border-rose-400 border-dashed leading-loose max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ whiteSpace: 'pre-line' }}>
          {ans.map((item, index) => {
            if (item === '조건에 부합하는 상품이 없습니다.') {
              return (
                <div key={index} className="mb-2">
                  {item} {/* 일반 텍스트로 표시 */}
                </div>
              );
            } else if (RecButton) {
              return (
                <div key={index} className="mb-2">
                  <button
                    type="button"
                    className="flex flex-row bg-wellcome-pink text-white font-bold py-2 px-4 rounded-lg"
                    onClick={() => alert(`Clicked on: ${item}`)} 
                  >
                    {item} {/* 버튼형식 */}
                  </button>
                </div>
              );
            } else {
              return (
                <div key={index} className="mb-2">
                  {item} {/* 일반 텍스트로 표시 */}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const RecForm = () => {
  const { treatmentPurpose, treatmentMethod, price } =
  useSurveyStore();
  console.log('treatmentMethod', treatmentMethod);


  // 추천 결과 로직 호출
  const { recommendedMethod, similarTreatments, treatmentCost } = getRecResults(
    treatmentPurpose || '',
    treatmentMethod || '',
    price || ''
  );

  // 비용 계산 로직
  const calculatePriceDetails = (methods: string) => {
    if (!methods) return []; // 값이 없으면 빈 배열 반환
    return methods.split(', ').map(method => 
      method === '조건에 부합하는 상품이 없습니다.' 
        ? method // 가격 정보 없이 그대로 반환 
        : `${method}: ${PricesList[method] || '정보 없음'}` // 가격 정보 포함
    );
  };
  
  const fields = ['추천 시술', '그 외 시술'];
  const ans = [
    calculatePriceDetails(recommendedMethod || ''),
    calculatePriceDetails(similarTreatments || ''),
  ];

  return (
    <form className="flex flex-wrap justify-center w-[85%] ">
      {fields.map((field, index) => (
        <FormField key={index} label={field} ans={ans[index]} RecButton={index === 0} />
      ))}
    </form>
  );
};

export default RecForm;
