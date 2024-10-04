import React from 'react';
import Spacebar from '../../components/landing/Spacebar';

type HeroSectionProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
};

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
}: HeroSectionProps) => {
  return (
    <section
      className="flex relative flex-col justify-center items-start px-20 py-36 max-w-full min-h-[495px] rounded-[30px] w-[996px] max-md:px-5 max-md:py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/main_banner.webp')",
      }}
    >
      <div className="flex relative flex-col -mb-8 max-w-full w-[674px] max-md:mb-2.5">
        <h1 className="text-6xl font-black leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          <Spacebar text={title} />
        </h1>
        <p className="self-start mt-8 text-3xl font-semibold text-white">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
