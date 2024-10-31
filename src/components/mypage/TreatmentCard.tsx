import React from 'react';

interface TreatmentCardProps {
    treatment: string;
    date: string;
}

const Style = {
  title : 'px-16 py-5 font-extrabold bg-rose-400 rounded max-md:px-5 text-center',
  text : 'my-auto text-center max-md:w-full  text-wellcome-pink font-bold' 
}
 
export const TreatmentCard = ({ treatment, date }: TreatmentCardProps) => {
  return (
    <section className="flex flex-col my-6 w-full text-white bg-white rounded-2xl border-2 border-rose-400 border-dashed  max-md:max-w-full">
      <div className="flex flex-row max-md:flex-col gap-6 justify-between px-4 py-8 max-w-full w-full">
        <div className={Style.title}>
          추천 시술
        </div>
        <div className={Style.text}>
          {treatment}
        </div>
        <div className="flex flex-row max-md:flex-col bg-rose-400 rounded max-md:w-full">
          <div className={Style.title}>
            예약 일정
          </div>
        </div>
        <div className={Style.text}>
          {date}
        </div>
      </div>
    </section>
  );
};
