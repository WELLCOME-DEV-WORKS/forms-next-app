import React from 'react';

type WellcomeHeaderProps = {
  title: string;
  buttonText: string;
};

const WellcomeHeader: React.FC<WellcomeHeaderProps> = ({ title, buttonText }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full bg-white text-center whitespace-nowrap max-w-[1200px] max-md:max-w-full">
      <div className="flex gap-7 p-2.5 text-xl font-extrabold text-rose-400">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f58222dea8a08782d31a3d0097d70e847bc7291bdb5fe7cd7606f9bb278ecc?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 aspect-[1.95] w-[78px]" alt="Well-come logo" />
        <div className="my-auto basis-auto">{title}</div>
      </div>
      <button className="px-4 py-1 text-lg font-bold tracking-tight text-white bg-rose-400 rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-3">
        {buttonText}
      </button>
    </header>   
  );
};

export default WellcomeHeader;