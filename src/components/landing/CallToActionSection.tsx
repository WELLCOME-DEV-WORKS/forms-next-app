import React from 'react';

type CallToActionSectionProps = {
  buttonText: string;
};

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ buttonText }) => {
  return (
    <section className="flex flex-col items-center mt-12 max-md:mt-10">
      <button className="px-16 py-6 max-w-full text-2xl font-medium text-center text-white whitespace-nowrap bg-rose-400 rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[386px] max-md:px-5">
        {buttonText}
      </button>
      <div className="shrink-0 mt-32 max-w-full h-px border border-rose-400 border-dashed w-[1084px] max-md:mt-10" />
    </section>
  );
};

export default CallToActionSection;