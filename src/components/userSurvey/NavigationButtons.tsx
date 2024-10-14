import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

interface NavigationButtonsProps {
    currentQuestionIndex: number;
    totalQuestions: number;
    onNext: () => void;
    onPrevious: () => void;
}
const NavigationButtons = ({ currentQuestionIndex, totalQuestions, onNext, onPrevious }: NavigationButtonsProps) => {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);
    const [redirectToReservation, setRedirectToReservation] = useState(false);

    const handleNext  = async () => {
        const session = await getSession();
        console.log('session =>', session);
        
        if (currentQuestionIndex === totalQuestions - 1) {
            // 로컬스토리지에 결과 저장 로직 추가
            if (!session) {
                setRedirectToReservation(true);
                // setSurveyComplete(true)
                await router.push('/sign-in');
                return ;
            }
            await router.push('/reservation');
        } else {
            onNext();
        } 
    }

    useEffect(() => {
        if (redirectToReservation && session) {
            router.push('/reservation');
        }
    }, [session, redirectToReservation, router]);

    return (
        <div className="flex justify-center gap-5 self-center mt-11 max-w-full text-center">
            <div 
                className="px-10 py-3.5 text-white bg-rose-400 rounded max-md:px-5"
                onClick={onPrevious}
                style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible', pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto' }}
            >
                이전
            </div>
            <div 
                className="px-10 py-3.5 text-rose-400 bg-white rounded border-2 border-rose-400 border-solid max-md:px-5"
                onClick={handleNext}
            >
                {currentQuestionIndex === totalQuestions - 1 ? '예약' : '다음'}
            </div>
        </div>
    );
};

export default NavigationButtons;
