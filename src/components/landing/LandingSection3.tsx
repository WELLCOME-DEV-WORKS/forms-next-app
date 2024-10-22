import React from 'react';
import Spacebar from './Spacebar';
import Button from '@/components/landing/Button';

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
    <section
      className="flex flex-col items-center t-12 text-center cursor-default font-bold px-[1rem]                   
    max-lg:w-full max-lg:px-[1rem] max-md:w-full max-md:px-[1rem] max-sm:w-full max-sm:px-[1rem] max-md:mt-0 max-sm:mt-0"
    >
      <div
        className="flex flex-col items-center t-12 text-center text-2xl font-bold bg-white rounded-3xl mt-10 w-[790px] h-[880px] max-w-full
        max-lg:w-[800px] max-lg:px-[1rem] max-lg:text-lg max-lg:h-[780px] max-md:w-full max-md:px-[1rem] max-md:mt-8 max-md:h-[730px] max-sm:w-full max-sm:px-[1rem] max-sm:mt-6 max-sm:h-[590px]"
        style={{
          boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 26px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h1
          className="max-md:max-w-full text-wellcome-black400 mt-9 text-2xl
          max-lg:text-2xl max-md:text-xl max-md: max-sm:text-lg"
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
          className="text-4xl mb-5
          max-lg:text-3xl max-lg:mb-3 max-md:text-3xl max-md:mb-3 max-sm:text-2xl max-sm:mb-1"
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
        <div
          className="flex items-center leading-[50px]
         max-lg:leading-[30px] max-md:leading-[30px] max-sm:leading-[20px]"
        >
          <p>{subtext3}</p>
          <p
            className="text-3xl
            max-lg:text-2xl max-md:text-2xl max-sm:text-2xl"
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
            className="text-3xl
            max-lg:text-2xl max-md:text-2xl max-sm:text-2xl"
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
          src="landingPage/CN/CN_main_graph.webp"
          className="object-contain mt-12 max-w-full aspect-square w-[675.596px] h-[294.848px] 
           max-lg:mt-8 max-md:mt-6 max-md:h-[270px] max-sm:h-[200px]"
          alt="pink arrow"
        />
        <img
          loading="lazy"
          src="landingPage/main_yellow_arrow.webp"
          className="object-contain mt-12 max-w-full aspect-square w-[150.949px] h-[104.054px] 
          max-lg:mt-8 max-lg:w-[120px] max-lg:h-[80px] max-md:mt-6 max-md:w-[100px] max-md:h-[60px] max-sm:mt-4 max-sm:w-[80px] max-sm:h-[40px]"
          alt="pink arrow"
        />
        <Spacebar
          className="text-3xl mt-9
        max-lg:text-2xl max-lg:mt-7 max-md:text-2xl max-md:mt-5 max-sm:text-2xl max-sm:mt-4"
          text={subtext7}
        />
        <p
          className="text-4xl underline text-wellcome-red
          max-lg:text-3xl   max-md:text-3xl  max-sm:text-2xl"
        >
          {subtext8}
        </p>
      </div>
      <Button
        text="查看我的最低价"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10
        max-md:w-[250px] max-md:text-lg max-sm:w-[200px] max-sm:text-lg"
      />

      <div
        className="grid grid-cols-2 flex flex-col px-20 py-9 mt-16 max-w-full rounded-3xl bg-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] h-[527px] text-2xl
        max-lg:text-xl max-lg:h-[500px] max-md:text-xl  max-md:px-5 max-md:mt-10  max-md:h-[450px] max-sm:text-base max-sm:h-[400px] "
      >
        <div
          className="flex items-center justify-center
         max-md:h-[250px] max-sm:h-[220px]"
        >
          <img
            loading="lazy"
            src="landingPage/CN/CN_main_people1.webp"
            className="object-contain max-w-full aspect-square w-[260px] h-[277px]
           max-md:h-[250px] max-sm:h-[220px]"
            alt="pink arrow"
          />
        </div>
        <div
          className="flex items-center justify-center
        max-md:h-[250px] max-sm:h-[220px]"
        >
          <img
            loading="lazy"
            src="landingPage/CN/CN_main_people2.webp"
            className="object-contain max-w-full aspect-square w-[260px] h-[277px] 
            max-md:h-[250px] max-sm:h-[220px]"
            alt="pink arrow"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p>{text2}</p>
          <p className="font-extrabold text-wellcome-red ">{text3}</p>
          <p>{text4}</p>
          <p className="font-extrabold text-wellcome-red">{text5}</p>
        </div>
        <div className="col-span-2 ">
          <p>{text6}</p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection3;
