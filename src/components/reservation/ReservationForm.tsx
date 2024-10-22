import { useSurveyResultsStore } from '@/store/Store';
import { treatmentPrices } from '../recFlow/TreatmentPrices';
import { useEffect } from 'react';
interface FormFieldProps {
  label: string;
  ans: string;
}

const FormField = ({ label, ans }: FormFieldProps) => {
  return (
    <div className="relative mb-8 ">
      <div className="rounded-lg flex items-center justify-between">
        <div
          className="bg-wellcome-pink rounded-lg 
            p-4 w-1/3 z-10 text-center text-white text-xl
             font-bold"
        >
          {label}
        </div>
        <div
          className="w-2/3 z-10 text-center justify-center text-wellcome-pink text-xl font-bold"
          style={{ whiteSpace: 'pre-line' }}
        >
          {ans}
        </div>
      </div>
    </div>
    // <div className="flex flex-col mt-12 max-w-full text-black bg-white w-[349px] max-md:mt-10">
    //   <div className="px-9 py-4 bg-white max-md:px-5">{label}</div>
    // </div>
  );
};

interface ReservationFormProps {
  selectedDate: string;
}

const ReservationForm = ({ selectedDate }: ReservationFormProps) => {
  const { recommendedMethod, similarTreatments, price, loadFromLocal } =
    useSurveyResultsStore();

  // 페이지 로드 시 localStorage에서 값 불러오기
  useEffect(() => {
    loadFromLocal();
  }, [loadFromLocal]);

  // 비용 계산 로직
  const calculatePriceDetails = (methods: string) => {
    if (!methods) return ''; // 값이 없으면 빈 문자열 반환
    const methodList = methods.split(', ');
    return methodList
      .map((method) => `${method}: ${treatmentPrices[method] || '정보 없음'}`)
      .join('\n');
  };

  const fields = ['추천 시술', '유사 시술', '비용', '예약일'];
  const ans = [
    recommendedMethod || '',
    similarTreatments || '',
    calculatePriceDetails(recommendedMethod || ''), // 비용 계산하여 표시
    selectedDate || '예약일을 선택해주세요.',
  ];

  return (
    <form className="flex flex-col itmes-center justify-">
      {fields.map((field, index) => (
        <FormField key={index} label={field} ans={ans[index]} />
      ))}
    </form>
  );
};

export default ReservationForm;
