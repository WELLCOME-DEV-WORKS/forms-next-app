import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';

interface WellcomeFooterProps {
  text: ReactNode;
}

const WellcomeFooter = ({ text }: WellcomeFooterProps) => {
  return (
    <footer className="bottom-0 flex gap-5 justify-between w-full bg-wellcome-pink max-md:max-w-full p-5 text-white text-base sm:text-xs md:text-xs lg:text-xs">
      <span>{text}</span>
    </footer>
  );
};

export default WellcomeFooter;
