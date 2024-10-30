import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { useCallback } from 'react';


export const RecommendationBtnHandler = (recommendedTreatment: string | undefined) => {
    const router = useRouter();
  
    const handleReservationClick = useCallback(() => {
      if (!recommendedTreatment) {
        Swal.fire({
          icon: 'error',
          text: '답변을 선택해야 진행할 수 있습니다!',
          showConfirmButton: false,
          timer: 1350,
        });
        return;
      }
      router.push('/reservation');
    }, [recommendedTreatment, router]);
  
    return { handleReservationClick };
  };