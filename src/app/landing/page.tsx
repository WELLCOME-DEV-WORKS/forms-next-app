import CallToActionSection from "@/components/landing/CallToActionSection";
import CommunicationConcernSection from "@/components/landing/CommunicationConcernsection";
import ConcernSection from "@/components/landing/ConcerSection";
import DecisionTimeSection from "@/components/landing/DecisionTimeSection";
import FinalCallToAction from "@/components/landing/FinalCallToAction";
import GroupVisitSection from "@/components/landing/GroupVisitSection";
import HeroSection from "@/components/landing/HeroSection";
import InformationVerificationSection from "@/components/landing/InformationVerificationSection";
import OptimalPricingSection from "@/components/landing/OptimalPricingSection";
import TranslationSection from "@/components/landing/TranslationSection";
import TrustFactorsSection from "@/components/landing/TrustFactorsSection";

const LandingPage = () => {
    return (
        <div className="flex overflow-hidden flex-col items-center bg-gray-50">
            <HeroSection />
            <ConcernSection />
            <OptimalPricingSection />
            <TranslationSection />
            <GroupVisitSection />
            <CallToActionSection buttonText="查看我的最低价" />
            <InformationVerificationSection />
            <DecisionTimeSection />
            <CallToActionSection buttonText="生成我的专属方案" />
            <CommunicationConcernSection />
            <TrustFactorsSection />
            <FinalCallToAction buttonText="开始我的美丽之旅" />
        </div>
    )
}
export default LandingPage;