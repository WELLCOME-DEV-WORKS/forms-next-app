import LandingSection1 from '@/components/landing/LandingSection1';
import LandingSection2 from '@/components/landing/LandingSection2';
import LandingSection3 from '@/components/landing/LandingSection3';
import LandingSection4 from '@/components/landing/LandingSection4';
import LandingSection5 from '@/components/landing/LandingSection5';
import Button from '@/components/landing/Button';

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
        className="mt-12 w-[312px] max-md:px-5 max-md:mt-10
        max-md:w-[250px] max-md:text-lg max-sm:w-[200px] max-sm:text-lg"
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
        text3="辨别困难"
        text4="连"
        text5="项目选择"
        text6="也无从入手"
        text7="在WELL-COME!"
      />
      <LandingSection5
        text1="沟通不顺，怕区别对待, 还担心维权问题？"
        text2="我们有专业的律师全程为您护航"
        text3="与我们合作的都是值得信赖的认证机构"
        text4="全程有我们的专业翻译陪同，保证您的顺畅沟通"
      />
    </div>
  );
};
export default LandingPage;
