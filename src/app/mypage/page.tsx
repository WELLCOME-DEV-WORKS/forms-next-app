
import { TreatmentCard } from '@/components/mypage/TreatmentCard';
import React from 'react'

const treatments = [
    { treatment: "울쎄라", date: "2024.10.25" },
    { treatment: "울쎄라", date: "2024.10.25" }
  ];

const MyPage = () => {
        return (
            <main className="flex overflow-hidden flex-col items-center px-20 pt-2.5 pb-20 text-xl text-center bg-white max-md:px-5">
              <div className="flex flex-col w-full max-w-[1199px] max-md:max-w-full">
                <section className="flex flex-col self-center mt-16 ml-9 max-w-full w-[838px] max-md:mt-10">
                  <h2 className="self-center text-4xl">
                    마이페이지
                  </h2>
                  {treatments.map((item, index) => (
                    <React.Fragment key={index}>
                      <TreatmentCard treatment={item.treatment} date={item.date} />
                      <div className="self-start -mt-4 ml-24 font-extrabold text-white max-md:ml-2.5">
                        추천 시술
                      </div>
                    </React.Fragment>
                  ))}
                  <button 
                    className="self-end mt-24 text-base text-zinc-400 max-md:mt-10"
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
