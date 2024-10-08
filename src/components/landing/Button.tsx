import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return (
    <Link href="/userSurvey">
      <button
        className={`px-11 py-3.5 text-2xl font-medium text-center text-white bg-rose-400 rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
