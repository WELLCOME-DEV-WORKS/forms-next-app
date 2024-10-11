import React from 'react';
import Spacebar from './Spacebar';
import Button from '@/components/landing/Button';

type LandingSection4Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
};

const LandingSection4 = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
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
        className="object-contain mt-12 max-w-full aspect-square w-[124px]
        max-md:mt-8 max-md:w-[94px] max-sm:mt-6 max-sm:w-[64px]"
      />

      <div
        className="flex items-center ali shrink-0 mt-10 max-w-full rounded-3xl bg-white h-[610px] w-[996px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden 
        max-md:mt-10 max-md:w-full max-md:h-[395px] max-sm:mt-8 max-sm:w-full max-sm:h-[295px]"
      >
        <img
          loading="lazy"
          src="CN_main_manypeople.webp"
          alt="main_manypeople"
          className="object-contain relative w-full h-auto transform
           max-md:scale-110 max-sm:scale-105"
        />
      </div>
      <Button
        text="查看我的最低价"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10
        max-md:w-[250px] max-md:text-lg max-sm:w-[200px] max-sm:text-lg"
      />
      <img
        loading="lazy"
        src="main__line.webp"
        alt="main_hand"
        className="object-contain mt-[120px] max-w-full aspect-square w-[1084px] h-[1px] max-md:mt-10"
      />
      <div
        className="mt-14 text-3xl text-black  max-md:max-w-full font-normal
        max-md:text-2xl max-md:mt-10 max-sm:text-xl max-sm:mt-6"
        style={{
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Spacebar text={text1} />
      </div>

      <div
        className="flex flex-col p-9 mt-16 max-w-full rounded-3xl bg-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] h-[700px] text-2xl
       max-md:mt-12 max-md:h-[600px] max-sm:mt-8 max-sm:h-[365px] max-sm:px-3"
      >
        <img
          loading="lazy"
          src="/CN_main_ad.webp"
          className="object-contain max-w-full w-[938px] h-[380px]
          max-md:w-[839px] max-md:h-[320px] max-sm:w-[739px] max-sm:h-[150px]"
          alt="CN_main_ad"
        />
        <div
          className=" flex items-center justify-center font-bold mt-5
        max-sm:mt-0 max-sm:pt-3"
        >
          <p
            className="text-wellcome-red
          max-lg:text-2xl max-md:text-xl max-sm:text-lg"
          >
            {text2}
          </p>
          <p className="max-lg:text-2xl max-md:text-xl max-sm:text-lg">
            {text3}
          </p>
        </div>{' '}
        <div className="flex items-center justify-center font-bold">
          <p className="max-lg:text-2xl max-md:text-xl max-sm:text-lg">
            {text4}
          </p>
          <p
            className="text-wellcome-red
          max-lg:text-2xl max-md:text-xl max-sm:text-lg"
          >
            {text5}
          </p>
          <p className="max-lg:text-2xl max-md:text-xl max-sm:text-lg">
            {text6}
          </p>
        </div>
        <div className=" flex items-center justify-center font-bold mt-2">
          <img
            loading="lazy"
            src="/main__difficult_emoji.webp"
            className="object-contain relative max-w-full w-[125px] h-[125px] mt-5 bg-cover bg-center
            max-md:w-[105px] max-md:h-[105px] max-sm:w-[65px] max-sm:h-[55px]"
            alt="CN_main_ad"
          />
        </div>
      </div>
      <h1
        className="text-4xl leading-[72px] max-md:leading-[50px] mt-14 font-extrabold
         max-lg:text-3xl max-lg:mt-10 max-md:text-3xl max-md:mt-8 max-sm:text-2xl max-sm:mb-6"
        style={{
          background: 'linear-gradient(90deg, #EA708A 0%, #DA2F47 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
        }}
      >
        {text7}
      </h1>
    </section>
  );
};

export default LandingSection4;
