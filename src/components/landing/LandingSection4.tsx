import React from 'react';
import Spacebar from './Spacebar';

type LandingSection4Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
};

const LandingSection4 = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}: LandingSection4Props) => {
  return (
    <section className="flex relative flex-col items-center t-12 text-center max-md:mt-10 max-md:max-w-full font-bold">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb75d781b075df8ff4ec7faa57c79183728b4ede2199bfc989e8fcd38957a96?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
        alt=""
        className="object-contain mt-12 max-w-full aspect-square w-[124px] max-md:mt-10"
      />
      <div
        className="flex shrink-0 mt-10 max-w-full rounded-3xl bg-neutral-100 h-[610px]  w-[996px] max-md:mt-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-cover bg-center"
        style={{
          backgroundImage: "url('/CN_main_manypeople.webp')",
        }}
      ></div>
      <div className="mt-12 w-56 max-md:px-5 max-md:mt-10"></div>
    </section>
  );
};

export default LandingSection4;
