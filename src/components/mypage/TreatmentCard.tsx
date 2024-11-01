import React from 'react';

interface TreatmentCardProps {
  treatment: string;
  date: string;
}

const Style = {
  title:
    'flex justify-center items-center py-6 px-11 font-extrabold bg-wellcome-pink max-md:px-5 text-center border-solid border-2 border-wellcome-pink rounded-r-none rounded-lg max-lg:rounded',
  text: 'flex justify-center items-center py-6 px-11 text-center max-md:w-full  text-wellcome-pink font-bold border-solid border-2 border-wellcome-pink rounded-l-none rounded-lg max-lg:rounded',
};

export const TreatmentCard = ({ treatment, date }: TreatmentCardProps) => {
  return (
    <section className="flex flex-col my-6 w-full text-white bg-white rounded-2xl border-2 border-wellcome-pink border-dashed  max-md:max-w-full">
      <div className="flex justify-end text-wellcome-pink text-2xl m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
      <div className="flex justify-center max-lg:flex-col px-4 pt-2 pb-8 max-w-full w-full">
        <div className="flex flex-row mx-5">
          <div className={Style.title}>추천 시술</div>
          <div className={Style.text}>{treatment}</div>
        </div>
        <div className="flex flex-row max-lg:flex-col rounded max-lg:w-full ">
          <div className="flex flex-row mx-5">
            <div className={Style.title}>예약 일정</div>
            <div className={Style.text}>{date}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
