import { useSurveyResultsStore } from '@/store/Store';
import { PricesList } from '../recFlow/PricesList';
import { getRecResults } from '@/components/recommendation/RecLogic';

interface FormFieldProps {
  label: string;
  ans: (string | JSX.Element)[];
  RecButton?: boolean;
  styleClass?: string;
}

const FormField = ({ label, ans, RecButton, styleClass }: FormFieldProps) => (
  <div className={`flex flex-col mb-8 w-full h-full items-center justify-center max-lg:flex-row ${styleClass}`}>
    <div className="flex flex-col px-11 py-2 items-center justify-center w-full h-full">
      <div className="bg-wellcome-pink rounded-lg p-4 w-full z-10 text-center text-white text-xl font-bold">
        {label}
      </div>
      <div className="w-full px-16 py-9 mt-11 rounded-2xl text-left justify-center items-center text-wellcome-pink text-xl font-bold border-2 border-rose-400 border-dashed leading-loose max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ whiteSpace: 'pre-line' }}>
        {ans.map((item, index) => (
          <div key={index} className="mb-2">
            {item === '조건에 부합하는 상품이 없습니다.' ? (
              <span className="text-wellcome-pink">{item}</span>
            ) : RecButton ? (
              <button
                type="button"
                className="flex flex-row bg-wellcome-peach text-wellcome-pink font-bold py-2 px-4 rounded-lg w-full justify-center"
                onClick={() => alert(`Clicked on: ${item}`)}
              >
                {item}
              </button>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RecForm = () => {
  const { treatmentPurpose, treatmentMethod, price } = useSurveyResultsStore();
  console.log('treatmentMethod', treatmentMethod);


  // 추천 결과 로직 호출
  const { recommendedMethod, similarTreatments } = getRecResults(
    treatmentPurpose || '',
    treatmentMethod || '',
    price || ''
  );

  // 비용 계산 로직
  const calculatePriceDetails = (methods: string): (string | JSX.Element)[] => {
    if (!methods) return [];
    return methods.split(', ').map((method) =>
      method === '조건에 부합하는 상품이 없습니다.'
        ? method
        : (
            <span className="text-wellcome-pink  font-bold">
              {method} <span>({PricesList[method] || '정보 없음'})</span>
            </span>
          )
    );
  };


  const recommendedAns = calculatePriceDetails(recommendedMethod || '');
  const similarAns = calculatePriceDetails(similarTreatments || '');


  return (
<form className="flex flex-wrap justify-center w-[85%]">
      <FormField label="추천 시술" ans={recommendedAns} RecButton={true} />
      <FormField label="그 외 시술" ans={similarAns} />
    </form>
  );
};


export default RecForm;
