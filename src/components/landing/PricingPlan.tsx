import React from 'react';
import HeroSection from './HeroSection';
import Button from './Button';
import PricingPlan from './PricingPlan';

const MyComponent = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-gray-50">
      <HeroSection
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac59c4a3d2b72d856b3b9cb7f220f7dca88f4c7109ead5731f8d5c660381126?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
        title="한국에서 가장 저렴한 가격으로 예뻐지고 싶나요?"
        subtitle="变美心动，Well-Come行动！"
      />
      <Button
        text="나의 아름다운 여행 시작"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10"
      />
      <h2 className="self-stretch mt-11 w-full text-4xl font-extrabold text-center max-md:mt-10 max-md:max-w-full">
        hi， <br /> 예뻐지는 길에서，이런 고민 있어요?
      </h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c136cbb70fb0a9c30881b81c6d8232ec79636ae26994ead482ec779b5fd67d1?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
        alt=""
        className="object-contain mt-7 aspect-square w-[46px]"
      />
      <p className="mt-16 text-3xl text-center text-black max-md:mt-10 max-md:max-w-full">
        이벤트기간랑 가격을 대비했는데，그래도 비싸게 시술 받았어요?
      </p>
      <div className="flex shrink-0 mt-16 max-w-full rounded-3xl bg-neutral-100 h-[511px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[914px] max-md:mt-10" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dc533f68616e7485e3b4a14b58ea80e40e8bce62b076cdf043e064f1929bccc?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
        alt=""
        className="object-contain mt-12 max-w-full aspect-square w-[125px] max-md:mt-10"
      />
      <section className="flex flex-col items-center px-14 py-11 mt-12 max-w-full bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[790px] max-md:px-5 max-md:mt-10">
        <h3 className="text-2xl font-semibold text-center text-zinc-900">
          WELL-COME 당신을 위해
        </h3>
        <h2 className="mt-7 text-4xl font-black text-center">베스트 견적</h2>
        <p className="mt-4 text-2xl font-semibold text-center text-zinc-900 max-md:max-w-full">
          방문시간과 시술항목을 따라 <br />각 의료진의
          <span className="text-3xl">이벤트 상황</span>&{' '}
          <span className="text-3xl">할인 강도</span>{' '}
          <span className="text-black">를 분석</span>
        </p>
        {/* Chart component would go here */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a75efcff4a4a63330564294e145b0d04957bbcc0a4fbcbc90747aa17a5979002?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
          alt="Chart"
          className="object-contain mt-8 max-w-full rounded-sm aspect-[1.45] w-[151px]"
        />
        <div className="mt-10 text-xs font-semibold text-center text-rose-400 w-[309px]">
          <span className="text-3xl text-zinc-900">최저가</span> <br />
          <span className="text-4xl font-black text-red-800">xx병원：30만</span>
        </div>
        <div className="flex shrink-0 mt-4 h-1 bg-red-800 w-[239px]" />
      </section>
      <Button
        text="나의 최저가 조회"
        className="mt-12 w-[227px] max-md:px-5 max-md:mt-10"
      />
      <section className="flex flex-col px-20 pt-9 pb-14 mt-16 max-w-full rounded-3xl bg-zinc-100 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[794px] max-md:px-5 max-md:mt-10">
        {/* Content for this section */}
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb75d781b075df8ff4ec7faa57c79183728b4ede2199bfc989e8fcd38957a96?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
        alt=""
        className="object-contain mt-12 max-w-full aspect-square w-[124px] max-md:mt-10"
      />
      <section className="flex flex-col items-center pt-16 pb-28 mt-12 w-full text-2xl font-semibold text-center bg-white rounded-3xl max-w-[996px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <p className="text-rose-400 max-md:max-w-full">
          다른 wellcome고객과 같이 단체 방문 하면， <br /> 전문 통역사
          동행，심지어 더 낮은 단체 가격으로도 가능！
        </p>
        <div className="flex shrink-0 self-stretch mt-20 h-[273px] max-md:mt-10 max-md:max-w-full" />
        <div className="flex flex-wrap gap-5 justify-between mb-0 max-w-full text-black w-[704px] max-md:mb-2.5">
          <div>단체방문</div>
          <div>전문 통역사</div>
        </div>
      </section>
      <Button
        text="나의 최저가 조회"
        className="mt-12 w-56 max-md:px-5 max-md:mt-10"
      />
      <div className="shrink-0 mt-32 max-w-full h-px border border-rose-400 border-dashed w-[1084px] max-md:mt-10" />
      <p className="mt-12 text-3xl text-center text-black w-[588px] max-md:mt-10 max-md:max-w-full">
        여러 가지 항목을 봤는데도, 뭐가 자신에게 맞는지 모르겠어요?
      </p>
      <section className="flex flex-col items-center px-7 py-9 mt-20 w-full text-black rounded-3xl bg-zinc-100 max-w-[996px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {/* Content for this section */}
      </section>
      <h2 className="mt-14 text-3xl font-semibold text-center max-md:mt-10">
        WELL-COME 에서!
      </h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6786e7ad294e568681d44d5b79e4ecf51bc48314360f5f10bab165893d920111?placeholderIfAbsent=true&apiKey=5234d2e82f7b48648ec2ffba5221ceea"
        alt=""
        className="object-contain mt-4 max-w-full aspect-square w-[124px]"
      />
      <section className="flex flex-col justify-center items-center px-20 py-14 mt-12 w-full text-2xl font-medium text-center text-rose-400 bg-white rounded-3xl max-w-[993px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[763px]">
          <p className="px-16 py-7 bg-red-100 rounded-[42px] max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
            우리는 전문 변호사의 전 과정이 당신을 호위합니다
          </p>
          <p className="px-16 py-7 mt-16 bg-red-100 rounded-[42px] max-md:px-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
            우리와 협력하는 것은 신뢰할 수 있는 인증 기관들이다.
          </p>
          <p className="px-2.5 py-3 mt-16 bg-red-100 rounded-[42px] max-md:mt-10 max-md:max-w-full">
            전 과정에 우리의 전문 통역사가 동행하여, 당신의 원활한 의사소통을
            보장합니다.
          </p>
        </div>
      </section>
      <Button
        text="나의 아름다운 여행 시작"
        className="mt-16 w-[312px] max-md:px-5 max-md:mt-10"
      />
      <footer className="flex self-stretch mt-52 w-full bg-red-100 min-h-[476px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
};

export default MyComponent;
