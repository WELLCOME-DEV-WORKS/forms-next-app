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
    <section className="flex relative flex-col items-center t-12 text-center max-md:mt-10 max-md:max-w-full font-bold cursor-default">
      <img
        loading="lazy"
        src="main_hand.webp"
        alt="main_hand"
        className="object-contain mt-12 max-w-full aspect-square w-[124px] max-md:mt-10"
      />
      <div
        className="flex shrink-0 mt-10 max-w-full rounded-3xl bg-neutral-100 h-[610px]  w-[996px] max-md:mt-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-cover bg-center"
        style={{
          backgroundImage: "url('/CN_main_manypeople.webp')",
        }}
      ></div>
      <Button
        text="查看我的最低价"
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

      <div className="flex flex-col px-9 py-9 mt-16 max-w-full rounded-3xl bg-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] h-[700px] max-md:px-5 max-md:mt-10 text-2xl">
        <img
          loading="lazy"
          src="/CN_main_ad.webp"
          className="object-contain max-w-full w-[938px] h-[380px]"
          alt="CN_main_ad"
        />
        <div className=" flex items-center justify-center font-bold mt-5">
          <p className="text-wellcome-red">{text2}</p>
          <p>{text3}</p>
        </div>{' '}
        <div className=" flex items-center justify-center font-bold">
          <p>{text4}</p>
          <p className="text-wellcome-red">{text5}</p>
          <p>{text6}</p>
        </div>
        <div className=" flex items-center justify-center font-bold mt-2">
          <img
            loading="lazy"
            src="/main__difficult_emoji.webp"
            className="object-contain relative max-w-full w-[125px] h-[125px] mt-5 bg-cover bg-center"
            alt="CN_main_ad"
          />
        </div>
      </div>
      <h1
        className="text-4xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px] mt-14"
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
