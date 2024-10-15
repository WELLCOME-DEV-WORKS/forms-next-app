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
        <div className="w-2/3 z-10 text-center justify-center text-wellcome-pink text-xl font-bold">
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
  const fields = ['시술 내역', '가격', '예약 일정'];
  const ans = ['울쎄라TEST', 'TEST만원', selectedDate || ''];

  return (
    <form className="flex flex-col  itmes-center  justify-">
      {fields.map((field, index) => (
        <FormField key={index} label={field} ans={ans[index]} />
      ))}
    </form>
  );
};

export default ReservationForm;
