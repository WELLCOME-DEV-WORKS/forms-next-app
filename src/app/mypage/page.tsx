import { TreatmentCard } from '@/components/mypage/TreatmentCard';
import React from 'react';

const treatments = [
  { treatment: '울쎄라', date: '2024.10.25' },
  { treatment: '울쎄라', date: '2024.10.25' },
];

const MyPage = () => {
  return (
    <main className="flex flex-col items-center px-20  text-xl text-center bg-wellcome-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1199px] max-md:max-w-full p-8 bg-white rounded-lg shadow-xl">
        <section className="flex flex-col self-center mt-8  max-w-full w-[838px] max-md:mt-10">
          <h2
            className="self-center text-4xl font-extrabold mb-8"
            style={{
              background: 'linear-gradient(90deg, #EA708A 0%, #DA2F47 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
              textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
            }}
          >
            마이페이지
          </h2>
          {treatments.map((item, index) => (
            <React.Fragment key={index}>
              <TreatmentCard treatment={item.treatment} date={item.date} />
            </React.Fragment>
          ))}
          <button
            className="self-end text-sm opacity-30 mt-8 text-zinc-400 max-md:mt-10"
            tabIndex={0}
          >
            회원탈퇴를 하시겠습니까?
          </button>
        </section>
      </div>
    </main>
  );
};

export default MyPage;
