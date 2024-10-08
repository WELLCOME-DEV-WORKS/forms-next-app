import Link from 'next/link';
import React from 'react';

interface WellcomeHeaderProps {
  title: string;
  buttonText: string;
}

const WellcomeHeader = ({ title, buttonText }: WellcomeHeaderProps) => {
  return (
    <header className="flex  gap-5 justify-between w-full bg-wellcome-white text-center whitespace-nowrap  max-md:max-w-full px-8">
      {/* 로고 폰트 적용 링크 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <Link href="/">
        <div className="flex gap-7 p-2.5 text-xl font-extrabold text-wellcome-pink">
          <img
            loading="lazy"
            src="logo.webp"
            className="object-contain shrink-0 aspect-[1.95] w-[78px]"
            alt="Well-come logo"
          />
          <div className="my-auto basis-auto font-museo ">{title}</div>
        </div>
      </Link>
      <button className="px-4 py-1 text-lg font-bold tracking-tight text-white bg-wellcome-pink rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-3">
        {buttonText}
      </button>
    </header>
  );
};

export default WellcomeHeader;
