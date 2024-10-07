import LandingSection1 from '@/components/landing/LandingSection1';
import LandingSection2 from '@/components/landing/LandingSection2';
import LandingSection3 from '@/components/landing/LandingSection3';
import LandingSection4 from '@/components/landing/LandingSection4';
// import LandingSection5 from '@/components/landing/LandingSection5';
import Button from '@/components/landing/Button';
// import PricingPlan from '@/components/landing/PricingPlan';

const LandingPage = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-gray-50">
      <LandingSection1
        backgroundImage="url('/main_banner.webp')"
        title="想以最优惠的价格 在韩国变美？"
        subtitle="变美心动，Well-Come行动！"
      />
      <Button
        text="开始我的美丽之旅"
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10"
      />
      <LandingSection2
        text="hi, 变美路上，你有过这些烦恼吗?"
        subtext="对比了打折时间和价格, 却还是做贵了?"
      />
      <LandingSection3
        text1="WELL-COME 为您提供"
        subtext1="最优选报价"
        subtext2="根据您的访问时间和所需项目"
        subtext3=" 分析各机构"
        subtext4="活动情况"
        subtext5="&"
        subtext6="优惠力度"
        subtext7="最低价"
        subtext8="xx医院：30万"
        text2="外国顾客需要配备"
        text3="翻译职员"
        text4=", 导致"
        text5="附加价格"
        text6="有时还有乱七八糟的额外费用"
      />
      <LandingSection4
        text1="千挑万选，对比了各个项目 还是不知道到底什么适合自己？"
        text2="信息真实性"
        text3="辨别困难 连"
        text4="项目选择"
        text5="也无从入手"
        text6="在WELL-COME!"
      />
      <Button
        text="查看我的最低价"
        className="w-[312px] max-md:px-5 max-md:mt-10"
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
        text="查看我的最低价"
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
    </div>
  );
};
export default LandingPage;
