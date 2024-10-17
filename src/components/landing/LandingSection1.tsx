import React from 'react';
import Spacebar from './Spacebar';
import Button from '@/components/landing/Button';

type LandingSection1Props = {
  backgroundImage: string;
  title: string;
  subtitle: string;
};

const LandingSection1 = ({
  backgroundImage,
  title,
  subtitle,
}: LandingSection1Props) => {
  return (
    <section className="flex flex-col items-center t-12 text-center max-md:mt-10 max-md:max-w-full font-bold cursor-default font-Pretendard">
      <div
        className="flex flex-col justify-center shrink-0 max-w-full rounded-3xl w-[996px] h-[510px]  bg-cover bg-center
         max-sm:w-full max-sm:h-[294px] max-md:w-full max-md:h-[394px] max-lg:w-[805px] max-lg:h-[494px]"
        style={{
          backgroundImage: "url('landingPage/main_banner.webp')",
          boxShadow: '0px 4px 43.5px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className="flex flex-col ml-[2.5em] -mb-8 max-w-full w-[674px] max-md:mb-2.5 text-left">
          <h1
            className="text-6xl font-black leading-[72px] 
            max-md:max-w-full max-md:text-5xl max-sm:text-4xl"
            style={{
              background:
                'linear-gradient(90deg, #FFF -6.08%, #FFCCD3 -6.06%, #FFF 76%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            <Spacebar text={title} />
          </h1>
          <p
            className="mt-[1em] text-3xl font-semibold text-white
          max-md:max-w-full max-md:text-lg max-sm:text-lg"
          >
            {subtitle}
          </p>
        </div>
      </div>
      <Button
        text="开始我的美丽之旅"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10
        max-md:w-[250px] max-md:text-lg max-sm:w-[200px] max-sm:text-lg"
      />
    </section>
  );
};

export default LandingSection1;
