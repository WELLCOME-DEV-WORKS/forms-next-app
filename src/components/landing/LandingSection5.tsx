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
      className="flex flex-col items-center t-12 text-center cursor-default font-bold font-Pretendard px-[1rem]                   
    max-lg:w-full max-lg:px-[1rem] max-md:w-full max-md:px-[1rem] max-sm:w-full max-sm:px-[1rem] max-md:mt-0 max-sm:mt-0"
    >
      <img
        loading="lazy"
        src="main_hand.webp"
        alt="main_hand"
        className="object-contain mt-6 max-w-full aspect-square w-[124px]
        max-md:mt-2 max-md:w-[94px] max-sm:mt-0 max-sm:w-[64px]"
      />

      <div
        className="flex shrink-0 mt-10 max-w-full rounded-3xl bg-neutral-100 h-[819px]  w-[993px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-cover bg-center
        max-md:mt-10 max-md:w-full max-md:h-[395px] max-sm:mt-8 max-sm:w-full max-sm:h-[295px]"
      >
        <img loading="lazy" src="CN_main_result.webp" alt="main_hand" />
      </div>
      <Button
        text="生成我的专属方案"
        className="w-[312px] max-md:px-5 max-md:mt-10 mt-12"
      />
      <img
        loading="lazy"
        src="main__line.webp"
        alt="main_hand"
        className="object-contain mt-[120px] max-w-full aspect-square w-[1084px] h-[1px] max-md:mt-10"
      />

      <div
        className="mt-14 text-3xl text-black max-md:mt-10 max-md:max-w-full font-normal"
        style={{
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Spacebar text={text1} />
      </div>
      <img
        loading="lazy"
        src="main_hand.webp"
        alt="main_hand"
        className="object-contain mt-12 max-w-full aspect-square w-[124px] max-md:mt-10"
      />
      <div
        className="flex flex-col text-2xl items-center t-12 text-center max-md:mt-10 max-md:max-w-full font-bold bg-white rounded-3xl mt-16  w-[993px] h-[490px]"
        style={{
          boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 26px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className="flex flex-col max-w-full w-[757.627px] text-wellcome-pink">
          <p className="px-7 py-7 mt-14 bg-wellcome-peach rounded-[42px] max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
            {text2}
          </p>
          <p className="px-7 py-7 mt-14 bg-wellcome-peach rounded-[42px] max-md:px-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
            {text3}
          </p>
          <p className="px-7 py-7 mt-14 bg-wellcome-peach rounded-[42px] max-md:mt-10 max-md:max-w-full">
            {text4}
          </p>
        </div>
      </div>

      <Button
        text="开始我的美丽之旅"
        className="w-[312px] max-md:px-5 max-md:mt-10 my-12"
      />
    </section>
  );
};

export default LandingSection4;
