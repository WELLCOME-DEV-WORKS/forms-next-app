import React from 'react';

const GroupVisitSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-16 pb-28 mt-12 w-full text-2xl font-semibold text-center whitespace-nowrap bg-white rounded-3xl max-w-[996px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <p className="text-rose-400 max-md:max-w-full">
        与其他wellcome的顾客一起进行团体访问， <br /> 专业的翻译陪同，甚至还能获得更低的团购价格！
      </p>
      <div className="flex shrink-0 self-stretch mt-20 h-[273px] max-md:mt-10 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mb-0 max-w-full text-black w-[703px] max-md:mb-2.5">
        <div>团体访问</div>
        <div>专业翻译</div>
      </div>
    </section>
  );
};

export default GroupVisitSection;