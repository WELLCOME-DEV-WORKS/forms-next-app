import React from 'react';

const OptimalPricingSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-14 py-11 mt-12 max-w-full bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[790px] max-md:px-5 max-md:mt-10">
      <h2 className="text-2xl font-semibold text-center text-zinc-900">
        WELL-COME 为您提供
      </h2>
      <h3 className="mt-7 text-4xl font-black text-center">最优选报价</h3>
      <p className="mt-4 text-2xl font-semibold text-center text-zinc-900">
        根据您的<span className="text-zinc-900">访问时间</span>和 <span className="text-zinc-900">所需项目</span> <br /> 分析各机构<span className="text-3xl">活动情况</span>& <span className="text-3xl">优惠力度</span>
      </p>
      <div className="flex flex-col items-end self-stretch p-1 mt-12 w-full rounded-lg bg-amber-100 bg-opacity-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between mr-16 max-w-full text-xl font-semibold text-center text-black whitespace-nowrap w-[453px] max-md:mr-2.5">
          <div className="shrink-0 h-[58px] w-[3px]" />
          <div className="my-auto">8月</div>
          <div className="shrink-0 h-[58px] w-[3px]" />
          <div className="my-auto">9月</div>
          <div className="shrink-0 h-[58px] w-[3px]" />
          <div className="my-auto">10月</div>
        </div>
        <div className="shrink-0 self-stretch h-1 max-md:max-w-full" />
        <div className="max-w-full w-[638px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-10 max-md:mt-10">
                <div className="flex flex-col items-center my-auto text-xl font-semibold text-center text-black whitespace-nowrap">
                  <div>xx医院</div>
                  <div className="self-stretch mt-12 max-md:mt-10"> xx皮肤科 </div>
                  <div className="mt-12 max-md:mt-10">xx医院</div>
                </div>
                <div className="flex flex-col grow shrink-0 pb-9 basis-0 w-fit">
                  <div className="flex z-10 max-md:pr-5">
                    <div className="flex shrink-0 self-start mt-8 bg-rose-200 h-[37px] w-[174px]" />
                    <div className="flex shrink-0 my-auto mr-0 bg-red-300 h-[41px] w-[155px]" />
                    <div className="flex shrink-0 border-2 border-red-800 border-solid bg-amber-300 bg-opacity-20 h-[232px] w-[51px]" />
                  </div>
                  <div className="flex shrink-0 self-center bg-red-300 h-[37px] w-[204px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex shrink-0 mx-auto mt-8 bg-rose-200 h-[37px] w-[116px] max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e47b68fc70ddd4e65d9e35c284026dbf3bc4ab1ea8b280cbc5d7e6dbae2e6c55?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain mt-8 max-w-full rounded-sm aspect-[1.45] w-[151px]" alt="Decorative element" />
      <div className="mt-10 text-xs font-semibold text-center text-rose-400 w-[309px]">
        <span className="text-3xl text-zinc-900">最低价</span> <br />
        <span className="text-4xl font-black text-red-800">xx医院：30万</span>
      </div>
      <div className="flex shrink-0 mt-4 h-1 bg-red-800 w-[239px]" />
      <button className="px-16 py-3.5 mt-12 max-w-full text-2xl font-medium text-center text-white whitespace-nowrap bg-rose-400 rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[312px] max-md:px-5 max-md:mt-10">
        查看我的最低价
      </button>
    </section>
  );
};

export default OptimalPricingSection;