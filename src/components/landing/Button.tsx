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
        className={`px-11 py-3.5 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
        hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300 ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
