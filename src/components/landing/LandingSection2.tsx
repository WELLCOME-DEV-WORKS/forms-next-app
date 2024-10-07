import React from 'react';
import Spacebar from './Spacebar';

type LandingSection2Props = {
  text: string;
  subtext: string;
};

const LandingSection2 = ({ text, subtext }: LandingSection2Props) => {
  return (
    <section className="flex flex-col items-center t-12 text-center max-md:mt-10 max-md:max-w-full ">
      <h2
        className="text-4xl font-extrabold mt-12"
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
        src="/main_pink_arrow.webp"
        className="object-contain mt-12 max-w-full aspect-square w-[46px] max-md:mt-10"
        alt="pink arrow"
      />
      <p
        className="mt-16 text-3xl text-black max-md:mt-10 max-md:max-w-full"
        style={{
          textShadow: '0px 4px 3.5px rgba(0, 0, 0, 0.25)',
        }}
      >
        {subtext}
      </p>

      <div
        className="mt-16 my-5 max-w-full rounded-3xl bg-neutral-100 h-[511px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/main_pricebox.webp')",
        }}
      >
        <img
          loading="lazy"
          src="/main_sad_emoji.webp"
          className="object-contain relative max-w-full aspect-square w-[120px] h-[120px] max-md:mt-10 top-[185px] left-[850px]"
          alt="pink arrow"
          style={{
            filter: 'drop-shadow(0px 7px 2px rgba(0, 0, 0, 0.15))',
          }}
        />
        <img
          loading="lazy"
          src="/main_sad_emoji.webp"
          className="object-contain relative max-w-full aspect-square w-[120px] h-[120px] max-md:mt-10 top-[185px] -left-[180px]"
          alt="pink arrow"
          style={{
            filter: 'drop-shadow(0px 7px 2px rgba(0, 0, 0, 0.15))',
          }}
        />
      </div>
    </section>
  );
};

export default LandingSection2;
