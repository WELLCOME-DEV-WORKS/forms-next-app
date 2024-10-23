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
  const { loadLocal } = useSurveyResultsStore();

  // 페이지 로드 시 localStorage에서 값 불러오기
  useEffect(() => {
    loadLocal();
  }, [loadLocal]);

  const fields = ['예약일'];
  const ans = [selectedDate || '예약일을 선택해주세요.'];

  return (
    <form className="flex flex-col itmes-center justify-">
      {fields.map((field, index) => (
        <FormField key={index} label={field} ans={ans[index]} />
      ))}
    </form>
  );
};

export default ReservationForm;
