import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';

interface WellcomeFooterProps {
  text: ReactNode;
}

const WellcomeFooter = ({ text }: WellcomeFooterProps) => {
  return (
    <footer className="sticky bottom-0 flex gap-5 justify-between w-full bg-wellcome-pink whitespace-nowrap  max-md:max-w-full p-5">
      <span>{text}</span>
    </footer>
  );
};

export default WellcomeFooter;
