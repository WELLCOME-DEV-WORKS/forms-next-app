import { useSurveyStore } from '@/store/SurveyStore';
import { PricesList } from '../recFlow/PricesList';
import { getRecResults } from '@/components/recommendation/RecLogic';

interface FormFieldProps {
  label: string;
  ans: string[];
  RecButton?: boolean;
  styleClass?: string;
}

const FormField = ({ label, ans, RecButton, styleClass }: FormFieldProps) => (

  <div className={`flex flex-col mb-8 w-full h-full items-center justify-center max-lg:flex-row ${styleClass}`}>
    <div className="flex flex-col px-11 py-2 items-center justify-center w-full h-full">
      <div className="bg-wellcome-pink rounded-lg p-4 w-full z-10 text-center text-white text-xl font-bold">
        {label}
      </div>
      <div className="w-full px-16 py-6 mt-11 rounded-2xl justify-center items-center text-wellcome-pink text-xl font-bold border-2 border-rose-400 border-dashed leading-loose max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ whiteSpace: 'pre-line' }}>
        {ans.map((item, index) => (
          <div key={index} className="my-1 text-center">
                        {item === '조건에 부합하는 상품이 없습니다.' || !RecButton ? (
              <span className="text-wellcome-pink">{item}</span> // 조건에 부합하지 않는 경우 텍스트 표시
            ) : (
              <button
                type="button"
                className="flex flex-row bg-wellcome-peach text-wellcome-pink font-bold py-2 px-4 rounded-lg w-full justify-center my-3 hover:text-[#FEE4E3] hover:bg-[#EA708A] transition-colors duration-300"
                onClick={() => alert(`Clicked on: ${item}`)}
              >
                {item}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RecForm = () => {
  const { treatmentPurpose, treatmentMethod, budget } = useSurveyStore();

  // 추천 결과 로직 호출
  const { recommendedMethod, similarTreatments } = getRecResults(
    treatmentPurpose || '',
    treatmentMethod || '',
    budget || ''
  );

  // 비용 계산 로직
  const treatmentPrice = (methods: string, excludeNoItems = false): string[] => { // 반환 타입을 string[]으로 변경
    if (!methods) return [];
    return methods
    .split(', ')
    .filter((method) => !(excludeNoItems && method === '조건에 부합하는 상품이 없습니다.'))
    .map((method) =>
      `${method} (평균 ${PricesList[method] || ''}원)`
    );
  };

  const recommendedAns = treatmentPrice(recommendedMethod || '');
  const similarAns = treatmentPrice(similarTreatments || '', true);

  return (
    <form className="flex flex-wrap justify-center w-[85%]">
      <FormField label="추천 시술" ans={recommendedAns} RecButton={true} />
      <FormField label="그 외 시술" ans={similarAns} />
    </form>
  );
};

export default RecForm;