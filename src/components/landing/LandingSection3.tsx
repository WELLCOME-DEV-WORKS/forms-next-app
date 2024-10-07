import React from 'react';
import Spacebar from './Spacebar';

type LandingSection3Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  subtext1: string;
  subtext2: string;
  subtext3: string;
  subtext4: string;
  subtext5: string;
  subtext6: string;
  subtext7: string;
  subtext8: string;
};

const LandingSection3 = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  subtext1,
  subtext2,
  subtext3,
  subtext4,
  subtext5,
  subtext6,
  subtext7,
  subtext8,
}: LandingSection3Props) => {
  return (
    <section className="flex relative flex-col items-center t-12 text-center max-md:mt-10 max-md:max-w-full font-bold">
      <div
        className="flex flex-col text-2xl items-center t-12 text-center max-md:mt-10 max-md:max-w-full font-bold bg-white rounded-3xl mt-10  w-[790px] h-[880px]"
        style={{
          boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 26px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h1
          className="max-md:max-w-full max-md:text-4xl max-md:leading-[50px] text-wellcome-black400 mt-9"
          style={{
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            display: 'inline-block',
          }}
        >
          {text1}
        </h1>
        <br />
        <p
          className="text-4xl mb-5"
          style={{
            background:
              'linear-gradient(90deg, #FF275B 28.82%, #940047 99.94%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
        >
          {subtext1}
        </p>
        <p>{subtext2}</p>
        <div className="flex items-center leading-[50px]">
          <p>{subtext3}</p>
          <p
            className="text-3xl"
            style={{
              background:
                'linear-gradient(90deg, #FF275B 28.82%, #940047 99.94%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            {subtext4}
          </p>
          <p>{subtext5}</p>
          <p
            className="text-3xl"
            style={{
              background:
                'linear-gradient(90deg, #FF275B 28.82%, #940047 99.94%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            {subtext6}
          </p>
        </div>
        <img
          loading="lazy"
          src="/CN_main_graph.webp"
          className="object-contain mt-12 max-w-full aspect-square w-[675.596px] h-[294.848px] max-md:mt-10"
          alt="pink arrow"
        />
        <img
          loading="lazy"
          src="/main_yellow_arrow.webp"
          className="object-contain mt-12 max-w-full aspect-square w-[150.949px] h-[104.054px] max-md:mt-10"
          alt="pink arrow"
        />
        <Spacebar className="text-3xl mt-9" text={subtext7} />
        <p className="text-4xl underline text-wellcome-red">{subtext8}</p>
      </div>
      <div className="grid grid-cols-2 flex flex-col px-20 py-9 mt-16 max-w-full rounded-3xl bg-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] h-[527px] max-md:px-5 max-md:mt-10 text-2xl">
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            src="/CN_main_people1.webp"
            className="object-contain max-w-full aspect-square w-[260px] h-[277px] max-md:mt-10"
            alt="pink arrow"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            src="/CN_main_people2.webp"
            className="object-contain max-w-full aspect-square w-[260px] h-[277px] max-md:mt-10"
            alt="pink arrow"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p>{text2}</p>
          <p className="font-bold text-wellcome-red ">{text3}</p>
          <p>{text4}</p>
          <p className="font-bold text-wellcome-red">{text5}</p>
        </div>
        <div className="col-span-2 ">
          <p>{text6}</p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection3;
