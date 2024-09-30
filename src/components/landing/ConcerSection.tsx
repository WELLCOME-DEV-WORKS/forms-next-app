import React from 'react';

const ConcernSection: React.FC = () => {
  return (
      <section className="mt-12 text-center max-md:mt-10 max-md:max-w-full">
       <h2 className="text-4xl font-extrabold">
                hi， <br /> 在变美路上，你有过这些烦恼吗？
          </h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25b1a4a091df8376d88747a0adc3d3c7d466a20758599bb244ec683c48b9c3d?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain mt-7 aspect-square w-[46px]" alt="Decorative element" />
            <p className="mt-16 text-3xl text-black max-md:mt-10 max-md:max-w-full">
                对比了打折时间和价格，却还是做贵了？
            </p>
            <div className="flex shrink-0 mt-16 max-w-full rounded-3xl bg-neutral-100 h-[511px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[914px] max-md:mt-10" />
        </section>
    );
};

export default ConcernSection;