import Image from 'next/image';
import React from 'react';


const HeroSection = () => {
  return (
        <section className="flex relative flex-col justify-center items-start px-20 py-36 max-w-full
         whitespace-nowrap min-h-[495px] rounded-[30px] 
         w-[996px] max-md:px-5 max-md:py-24">
            <div className='absoluted'>
             <img loading="lazy" src="/main_banner.jpg"  
             className="w-full object-cover absolute inset-0 size-full" alt="Background image" />
                <div className="flex relative flex-col -mb-8 max-w-full w-[512px] max-md:mb-2.5">
                    <h1 className="text-6xl font-black leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                        想以最优惠的价格
                    </h1>
                    <h1 className="text-6xl font-black leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                    在韩国变美？
                    </h1>
                    <p className="self-start mt-8 text-3xl font-semibold text-white">
                    变美心动，Well-Come行动！
                    </p>
                </div>
            </div>
            <div className="absoluted px-16 py-3.5 mt-12 max-w-full text-2xl font-medium text-center text-white whitespace-nowrap bg-rose-400 rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[312px] max-md:px-5 max-md:mt-10">
                开始我的美丽之旅
            </div>
        </section>
    );
};

export default HeroSection;