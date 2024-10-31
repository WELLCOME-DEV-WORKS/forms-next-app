import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

// '예약하러가기' 버튼 핸들러
export const RecommendationBtnHandler = (
  recommendedTreatment: string | undefined
) => {
  const router = useRouter();

  const handleReservationClick = () => {
    if (!recommendedTreatment) {
      Swal.fire({
        icon: 'error',
        text: '시술을 선택하신 뒤 예약을 진행해주세요!',
        showConfirmButton: false,
        timer: 1350,
      });
      return;
    }
    router.push('/reservation');
  };
  return { handleReservationClick };
};


