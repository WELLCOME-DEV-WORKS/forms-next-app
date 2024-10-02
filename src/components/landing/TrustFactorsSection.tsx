import React from 'react';

const TrustFactorsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-16 pb-28 mt-12 w-full text-2xl font-semibold text-center whitespace-nowrap bg-white rounded-3xl max-w-[996px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <p className="text-rose-400 max-md:max-w-full">
        我们有专业的律师全程为您护航
      </p>
      <p className="px-16 py-7 mt-16 bg-red-100 rounded-[42px] max-md:px-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
        与我们合作的都是值得信赖的认证机构
      </p>
      <p className="px-16 py-6 mt-16 bg-red-100 rounded-[42px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        全程有我们的专业翻译陪同，保证您的顺畅沟通
      </p>
    </section>
  );
};

export default TrustFactorsSection;