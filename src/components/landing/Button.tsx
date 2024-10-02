import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-11 py-3.5 text-2xl font-medium text-center text-white bg-rose-400 rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
