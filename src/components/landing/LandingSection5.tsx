import React from 'react';
import Spacebar from './Spacebar';
import Button from '@/components/landing/Button';
import Link from 'next/link';

type LandingSection4Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

const LandingSection4 = ({
  text1,
  text2,
  text3,
  text4,
}: LandingSection4Props) => {
  return (
    <section
      className="flex flex-col items-center t-12 text-center font-bold cursor-default font-Pretendard px-[1rem] pb-2
    max-lg:w-full max-lg:px-[1rem] max-lg:pb-3 max-md:w-full max-md:px-[1rem] max-md:mt-0 max-sm:mt-0"
    >
      <img
        loading="lazy"
        src="landingPage/main_hand.webp"
        alt="main_hand"
        className="object-contain mt-6 max-w-full aspect-square w-[124px]
        max-md:mt-2 max-md:w-[94px] max-sm:mt-0 max-sm:w-[64px]"
      />
      <div
        className="flex shrink-0 mt-10 max-w-full rounded-3xl bg-white h-[819px] w-[993px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden
        max-md:mt-10 max-md:w-full max-md:h-[395px] max-sm:mt-8 max-sm:w-full max-sm:h-[295px]"
      >
        <img
          loading="lazy"
          src="landingPage/CN/CN_main_result.webp"
          className="object-contain w-full h-auto transform
          max-md:scale-105 max-sm:scale-105 "
          alt="main_result"
        />
      </div>
      <Button
        text="生成我的专属方案"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10
        max-md:w-[250px] max-md:text-lg max-sm:w-[200px] max-sm:text-lg"
      />
      <img
        loading="lazy"
        src="landingPage/main__line.webp"
        alt="main__line"
        className="object-contain mt-[120px] max-w-full aspect-square w-[1084px] h-[1px] max-md:mt-10"
      />
      <div
        className="mt-14 text-3xl text-black font-normal
        max-md:mt-8 max-md:text-xl max-sm:mt-6 max-sm:text-lg
        
        "
        style={{
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Spacebar text={text1} />
      </div>
      <img
        loading="lazy"
        src="landingPage/main_hand.webp"
        alt="main_hand"
        className="object-contain mt-12 max-w-full aspect-square w-[124px]
        max-md:mt-8 max-md:w-[94px] max-sm:mt-6 max-sm:w-[64px]"
      />
      <div
        className="flex flex-col items-center justify-center t-12 text-center max-w-full font-bold bg-white rounded-3xl mt-16 w-[993px] h-[490px]
        max-md:mt-10 max-md:max-w-full max-md:h-[390px] max-sm:h-[290px]"
        style={{
          boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 26px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          className="flex flex-col  max-w-full text-2xl w-[757.627px] text-wellcome-pink 
         max-lg:text-xl max-md:text-lg max-sm:text-base
        "
        >
          <p
            className="p-7  bg-wellcome-peach rounded-[42px]  transition-all duration-300 ease-in-out hover:bg-[#FFD7A1] hover:text-[#DA2F47]
          max-lg:p-6 max-lg:m-5 max-md:p-5 max-sm:p-3"
          >
            {text2}
          </p>
          <p
            className="px-7 py-7 mt-14 bg-wellcome-peach rounded-[42px]  transition-all duration-300 ease-in-out hover:bg-[#FFD7A1] hover:text-[#DA2F47]
          max-lg:p-6 max-lg:m-5 max-md:p-5 max-sm:p-3 "
          >
            {text3}
          </p>
          <p
            className="px-7 py-7 mt-14 bg-wellcome-peach rounded-[42px]  transition-all duration-300 ease-in-out hover:bg-[#FFD7A1] hover:text-[#DA2F47]
          max-lg:p-6 max-lg:m-5 max-md:p-5 max-sm:p-3  max-sm:text-base"
          >
            {text4}
          </p>
        </div>
      </div>
      <Button
        text="开始我的美丽之旅"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10
        max-md:w-[250px] max-md:text-lg max-sm:w-[200px] max-sm:text-lg max-sm:mb-8"
      />
    </section>
  );
};

export default LandingSection4;
