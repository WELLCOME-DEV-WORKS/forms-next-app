import Swal from 'sweetalert2';

const eventSwal = (info: { dateStr: string; formattedDate: string }) => {
  Swal.fire({
    title: `${info.formattedDate}은 예약가능합니다.`,
    customClass: {
      title: 'text-2xl max-md:text-xl max-sm:text-base',
      confirmButton:
        'px-11 py-3.5 my-5 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] !hover:text-[#EA708A] !hover:bg-[#FEE4E3] transition-colors duration-300 max-md:text-xl max-md:px-9 max-md:py-1.5 max-sm:text-base',
      actions: 'max-md:mt-0',
    },
    icon: 'info',
  });
  //   .then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("예약일 지정완료!", "", "success");
  //     }
  //   });
};

export default eventSwal;
