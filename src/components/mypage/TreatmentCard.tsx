import React from 'react';

interface TreatmentCardProps {
    treatment: string;
    date: string;
}

export const TreatmentCard = ({ treatment, date }: TreatmentCardProps) => {
  return (
    <section className="flex flex-col pt-3 pr-4 pb-20 pl-8 mt-16 w-full text-white bg-white rounded-2xl border-2 border-rose-400 border-dashed max-md:pl-5 max-md:mt-10 max-md:max-w-full">
    
      <div className="flex flex-row max-md:flex-col gap-5 justify-between mt-14 max-w-full w-full">
        <div className="px-16 py-5 font-extrabold bg-rose-400 rounded max-md:px-5 text-center">
          추천 시술
        </div>
        <div className="my-auto text-black text-center max-md:w-full">
          {treatment}
        </div>
        <div className="flex flex-row max-md:flex-col bg-rose-400 rounded max-md:w-full">
          <div className="px-16 py-5 bg-rose-400 rounded max-md:px-5 text-center">
            예약 일정
          </div>
        </div>
        <div className="my-auto text-black text-center max-md:w-full">
          {date}
        </div>
      </div>
    </section>
  );
};
