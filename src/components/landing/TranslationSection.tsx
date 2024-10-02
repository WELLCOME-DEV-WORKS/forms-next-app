import React from 'react';

const TranslationSection: React.FC = () => {
  return (
    <section className="flex flex-col px-20 pt-9 pb-14 mt-16 max-w-full rounded-3xl bg-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] max-md:px-5 max-md:mt-10">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-3.5 text-xl font-semibold tracking-tight text-center text-black whitespace-nowrap max-md:mt-10">
              <div className="flex shrink-0 h-[249px] shadow-[4px_0px_4px_rgba(0,0,0,0.25)]" />
              <div className="self-center mt-6">外国顾客</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow max-md:mt-10">
              <div className="flex flex-col justify-center items-center px-2 my-auto w-16 h-16 bg-white rounded-lg max-md:-mr-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f07b991f24e91fcd2d50df70dfd3fd0076701ed6f7eee8d6b62675d9171791?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain w-12 aspect-square" alt="Icon" />
              </div>
              <div className="flex flex-col text-xl font-semibold tracking-tight text-center text-black whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a67b1da64fd459af97ac4aa92ba6b25dd4d3f14831b53ac783c143fa2c1cfe?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain z-10 ml-10 rounded-none aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[66px] max-md:ml-2.5" alt="Translator" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/53c79b088b44e8d704f9699470eeb9655de2a8ba10a60f894dae42dae068197a?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain rounded-none aspect-[0.97] w-[210px]" alt="Communication illustration" />
                <div className="self-center mt-6">翻译职员</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="self-center mt-20 text-2xl font-medium tracking-tighter text-center text-black max-md:mt-10 max-md:max-w-full">
        外国顾客需要配备 <span className="font-semibold text-red-800">翻译职员</span>，导致 <span className="font-semibold text-red-800">附加价格</span> <br /> 有时还有乱七八糟的额外费用
      </p>
    </section>
  );
};

export default TranslationSection;