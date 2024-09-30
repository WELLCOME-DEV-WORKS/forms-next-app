import React from 'react';

const InformationVerificationSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-7 py-9 mt-20 w-full text-black rounded-3xl bg-zinc-100 max-w-[996px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex items-start self-stretch px-14 py-8 whitespace-nowrap bg-white rounded-2xl max-md:px-5">
        <div className="flex flex-col items-center self-end pt-px pb-3 mt-20 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10">
          <div className="flex flex-col items-start self-stretch px-8 pt-10 pb-1.5 w-full rounded-xl bg-white bg-opacity-50 max-md:px-5">
            <div className="flex gap-5 text-xs font-medium tracking-normal">
              <div>1.</div>
              <div className="flex shrink-0 self-start h-1.5 bg-zinc-800 w-[106px]" />
            </div>
            <div className="flex shrink-0 self-center mt-2.5 h-1.5 bg-zinc-800 w-[77px]" />
            <div className="flex z-10 mt-3 max-md:pr-5">
              <div className="flex flex-col items-start self-end mt-1.5 mr-0 w-full text-xs font-medium tracking-normal">
                <div className="flex gap-5 self-stretch">
                  <div>2.</div>
                  <div className="flex shrink-0 self-start h-1.5 bg-zinc-800 w-[106px]" />
                </div>
                <div className="flex shrink-0 mt-2 ml-6 h-1.5 bg-zinc-800 w-[33px] max-md:ml-2.5" />
                <div className="mt-5">3.</div>
                <div className="mt-9">4.</div>
              </div>
              <div className="px-4 py-8 text-3xl font-bold tracking-tighter text-center border-4 border-red-700 border-solid">
                广告
              </div>
            </div>
            <div className="flex gap-5 text-xs font-medium tracking-normal">
              <div>2.</div>
              <div className="flex shrink-0 self-start h-1.5 bg-zinc-800 w-[106px]" />
            </div>
            <div className="flex shrink-0 mt-2 ml-6 h-1.5 bg-zinc-800 w-[33px] max-md:ml-2.5" />
            <div className="flex gap-5 mt-5 text-xs font-medium tracking-normal">
              <div>3.</div>
              <div className="flex shrink-0 h-1.5 bg-zinc-800 w-[106px]" />
            </div>
            <div className="flex shrink-0 self-center mt-2 h-1.5 bg-zinc-800 w-[106px]" />
          </div>
          <div className="mt-4 text-base font-medium tracking-tight">
            KR韩国医美项目推荐
          </div>
          <div className="flex gap-10 mt-3.5 max-w-full text-sm tracking-tight w-[150px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8eb5c2f76f128e47e04746d8d62476c414b4203009b3c2ce9c2a3a6f97472a6?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 aspect-[1.04] rounded-[33px] w-[29px]" alt="User avatar" />
            <div className="flex flex-1 gap-1.5 my-auto">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/651e21a6c65946eedb07eb8067ff4e98d01cd834cc9772bb0f783a72a278b29c?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 aspect-[1.07] w-[15px]" alt="Like icon" />
              <div>108</div>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 mt-28 -mr-10 bg-red-700 h-[101px] w-[152px] max-md:mt-10" />
        <div className="flex flex-col items-center pb-4 max-w-full bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[212px]">
          <div className="flex relative flex-col self-stretch w-full text-3xl font-bold tracking-tighter text-center rounded-xl aspect-[0.848]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd25c92e210ab1873641dca5856ceafc5da9d3cdddee57792ce08f4a09383813?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-cover absolute inset-0 size-full" alt="Background image" />
            <div className="flex relative flex-col justify-center items-center px-11 py-16 rounded-xl bg-white bg-opacity-50 max-md:px-5">
              <div className="px-4 py-8 border-4 border-red-700 border-solid w-[61px]">
                赞助
              </div>
            </div>
          </div>
          <div className="mt-3.5 text-base font-medium tracking-tight">
            强推！！韩国美容院推荐
          </div>
          <div className="flex gap-10 mt-3.5 max-w-full text-sm tracking-tight w-[169px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9dd2627a601bee8c1d77d5aa489482fea879deab3e975fce2f188d93312107?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 aspect-[1.04] rounded-[100px] w-[29px]" alt="User avatar" />
            <div className="flex flex-1 gap-1 self-start mt-3">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3370398e2b4dd05306d209901e12d7cc469c3021c573ab95c2b66bd40101662?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 w-3.5 aspect-square" alt="Like icon" />
              <div>1244</div>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 mt-40 mr-0 bg-red-700 h-[95px] w-[175px] max-md:mt-10" />
        <div className="flex flex-col self-stretch pb-3.5 my-auto bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col text-center rounded-xl bg-white bg-opacity-50">
            <div className="flex relative flex-col items-center px-11 pt-6 pb-9 rounded-xl aspect-[0.844] w-[211px] max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d45582b3e4a8bade3a9f25ea12d7e876517ad99c0f48a5dfa1954b9822b2de4?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-cover absolute inset-0 size-full" alt="Background image" />
              <div className="relative text-xs font-medium tracking-tight">
                Before
              </div>
              <div className="relative px-4 py-4 mt-1.5 text-3xl font-bold tracking-tighter border-4 border-red-700 border-solid w-[61px]">
                虚假后记
              </div>
            </div>
          </div>
          <div className="flex flex-col px-5 mt-3 w-full max-md:px-5">
            <div className="self-start text-base font-medium tracking-tight">
              韩国do脸真实后记
            </div>
            <div className="flex gap-10 mt-4 w-full text-sm tracking-tight">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d5e6cfb74c4b0a7d3c257c8670e405ff2dceeea33d084ad1122a218d376882?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 aspect-[1.04] rounded-[100px] w-[29px]" alt="User avatar" />
              <div className="flex flex-1 gap-2 self-start mt-3.5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d38dcb478fd61e91a786a62166291773f9c79f60bd8fb6f32607ee5ba6c8d7e?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain shrink-0 w-3.5 aspect-square" alt="Like icon" />
                <div className="my-auto">451</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-2xl font-semibold tracking-tighter text-center w-[565px]">
        <span className="text-red-800">信息真实性</span>辨别困难 <br />连<span className="text-red-800">项目选择</span>也无从入手
      </p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58f61076ebef7428639a300d7acafc67f571a4b3023232814297a2af20533c9?placeholderIfAbsent=true&apiKey=e0c395b96452442183c02ce725ff7111" className="object-contain mt-5 max-w-full aspect-square w-[125px]" alt="Decorative element" />
    </section>
  );
};

export default InformationVerificationSection;