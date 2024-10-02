import React from 'react';

type FinalCallToActionProps = {
  buttonText: string;
};

const FinalCallToAction: React.FC<FinalCallToActionProps> = ({ buttonText }) => {
  return (
    <section className="flex flex-col items-center mt-16 max-md:mt-10">
      <button className="px-7 py-6 w-56 max-w-full text-2xl font-medium text-center text-white whitespace-nowrap bg-rose-400 rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
        {buttonText}
      </button>
      <div className="flex self-stretch mt-52 w-full bg-red-100 min-h-[476px] max-md:mt-10 max-md:max-w-full" />
    </section>
  );
};

export default FinalCallToAction;