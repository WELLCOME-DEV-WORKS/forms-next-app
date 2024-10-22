import React from 'react';
import Spacebar from './Spacebar';

type LandingSection2Props = {
  text: string;
  subtext: string;
};

const LandingSection2 = ({ text, subtext }: LandingSection2Props) => {
  return (
    <section
      className="flex flex-col items-center t-12 text-center font-bold cursor-default px-[1rem]
    max-lg:w-full max-lg:px-[1rem] max-md:w-full max-md:px-[1rem] max-md:mt-0 max-sm:mt-0"
    >
      <h2
        className="text-5xl font-extrabold mt-10 leading-[5rem]
         max-md:mt-8 max-md:text-3xl max-sm:mt-6 max-sm:text-2xl"
        style={{
          background: 'linear-gradient(90deg, #EA708A 0%, #DA2F47 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Spacebar text={text} />
      </h2>
      <img
        loading="lazy"
        src="landingPage/main_pink_arrow.webp"
        className="object-contain mt-12 max-w-full aspect-square w-[46px] 
         max-md:mt-8 max-md:w-[30px] max-sm:mt-6 max-sm:w-[20px]"
        alt="pink arrow"
      />
      <p
        className="mt-16 text-3xl text-black  max-md:max-w-full font-normal
        max-md:mt-8 max-md:text-xl max-sm:mt-6 max-sm:text-lg"
        style={{
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        {subtext}
      </p>

      <div
        className="flex shrink-0 mt-16 max-w-full rounded-3xl bg-neutral-100 h-[511px]  w-[794px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        max-md:overflow-hidden max-md:mt-10 max-md:w-full max-md:h-[395px] max-sm:overflow-hidden max-sm:mt-8 max-sm:w-full max-sm:h-[295px]"
      >
        <img
          loading="lazy"
          src="landingPage/CN/CN_main_pricebox.webp"
          alt="main_manypeople"
          className="object-contain relative w-full h-auto transform
           max-md:scale-110 max-sm:scale-105"
        />
        <img
          loading="lazy"
          src="landingPage/main_sad_emoji.webp"
          className="object-contain relative max-w-full aspect-square w-[120px] h-[120px] top-[185px] -left-[855px]
          max-lg:hidden max-md:hidden max-sm:hidden"
          alt="main_sad_emoji"
          style={{
            filter: 'drop-shadow(0px 7px 2px rgba(0, 0, 0, 0.15))',
          }}
        />
        <img
          loading="lazy"
          src="landingPage/main_sad_emoji.webp"
          className="object-contain relative max-w-full aspect-square w-[120px] h-[120px] top-[185px] -left-[180px]
          max-lg:hidden max-md:hidden max-sm:hidden"
          alt="main_sad_emoji"
          style={{
            filter: 'drop-shadow(0px 7px 2px rgba(0, 0, 0, 0.15))',
          }}
        />
      </div>
      <img
        loading="lazy"
        src="landingPage/main_hand.webp"
        alt="main_hand"
        className="object-contain mt-12 max-w-full aspect-square w-[124px]
        max-md:mt-8 max-md:w-[94px] max-sm:mt-6 max-sm:w-[64px]"
      />
    </section>
  );
};

export default LandingSection2;
