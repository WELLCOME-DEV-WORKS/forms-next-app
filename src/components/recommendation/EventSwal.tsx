import Swal from 'sweetalert2';

const eventSwal = (info: { dateStr: string; formattedDate: string }) => {
  Swal.fire({
    title: `${info.formattedDate}은 예약가능합니다`,
    // showCancelButton: true,
    // confirmButtonText: "Save",
    customClass: {
      confirmButton:
        'px-11 py-3.5 my-5 text-2xl font-medium text-center text-white bg-wellcome-pink rounded-[44px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:text-[#EA708A] hover:bg-[#FEE4E3] transition-colors duration-300',
      // cancelButton:
      //   'mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto',
      // popup: "!relative !transform !overflow-hidden !rounded-lg !bg-white !text-left !shadow-xl !transition-all sm:!my-8 sm:!w-full sm:!max-w-lg !p-0 !grid-cols-none",
      // icon: '!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2',
      // title: "!p-0 !pt-3 !text-center sm:!text-left !text-base !font-semibold !leading-6 !text-gray-900 !pl-4 !pr-4 sm:!pr-6 sm:!pl-0 sm:!pt-6 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
      // htmlContainer: "!mt-2 sm:!mt-0 !m-0 !text-center sm:!text-left !text-sm !text-gray-500 !pl-4 sm:!pl-0 !pr-4 !pb-4 sm:!pr-6 sm:!pb-4 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
      // actions: "!bg-gray-50 !px-4 !py-3 sm:!flex sm:!flex-row-reverse sm:!px-6 !w-full !justify-start !mt-0 !col-start-1 !col-end-3",
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
