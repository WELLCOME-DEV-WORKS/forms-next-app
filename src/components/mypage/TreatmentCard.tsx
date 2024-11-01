import React from 'react';

interface TreatmentCardProps {
  treatment: string;
  date: string;
}

const Style = {
  title:
    'px-16 py-5 font-extrabold bg-wellcome-pink rounded max-md:px-5 text-center',
  text: 'my-auto text-center max-md:w-full  text-wellcome-pink font-bold',
};

export const TreatmentCard = ({ treatment, date }: TreatmentCardProps) => {
  return (
    <section className="flex flex-col my-6 w-full text-white bg-white rounded-2xl border-2 border-wellcome-pink border-dashed  max-md:max-w-full">
      <div className="flex flex-row justify-evenly max-lg:flex-col  gap-6 px-4 py-8 max-w-full w-full">
        <div className={Style.title}>추천 시술</div>
        <div className={Style.text}>{treatment}</div>
        <div className="flex flex-row max-lg:flex-col  bg-wellcome-pink rounded max-lg:w-full">
          <div className={Style.title}>예약 일정</div>
        </div>
        <div className={Style.text}>{date}</div>
      </div>
    </section>
  );
};
