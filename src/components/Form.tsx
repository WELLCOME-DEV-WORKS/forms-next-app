"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { FormDataSchema } from "@/lib/validators/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// import useFormPersist from "react-hook-form-persist";
import { toast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";
// import { useRouter } from "next/navigation";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "피부 고민 및 목표",
    fields: [
      "wantsSkinImprovement",
      "wantsSkinToneImprovement",
      "wantsAcneTreatment",
      "wantsImmediateEffect",
    ],
  },
  {
    id: "Step 2",
    name: "개인적 조건 및 선호도",
    fields: ["wantsShortRecovery", "wantsBudgetBelow100", "wantsLessIntensive"],
  },
  { id: "Step 3", name: "Complete" },
];

export default function Form() {
  // const router = useRouter();
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  // useFormPersist("form-name", { watch, setValue });

  const { mutate: submitForm, isLoading } = useMutation({
    mutationFn: async (form: Inputs) => {
      console.log("insidemutation");
      console.log(form);

      const { data } = await axios.post(`/api/form`, form);
      return data;
    },
    onError: () => {
      return toast({
        title: "Something went wrong.",
        description: "Your form was not submitted. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        description: "Your form has been submitted.",
      });
      // router.refresh();
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    submitForm(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="inset-0 flex flex-col justify-between p-24">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form
        className="mt-12 py-12"
        onSubmit={handleSubmit((e) => submitForm(e))}
      >
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              질문 1 피부 고민 및 목표
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide your personal details.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsSkinImprovement"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  주름이나 피부 탄력을 개선하고 싶으신가요?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsSkinImprovement"
                    {...register("wantsSkinImprovement", {
                      setValueAs: (v) => Boolean(v),
                    })}
                    className="block w-20 rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsSkinImprovement?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsSkinImprovement.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsSkinToneImprovement"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  톤을 개선하거나 색소 침착을 줄이고 싶으신가요?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsSkinToneImprovement"
                    {...register("wantsSkinToneImprovement", {
                      setValueAs: (v) => Boolean(v),
                    })}
                    className="block w-20 rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsSkinToneImprovement?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsSkinToneImprovement.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsAcneTreatment"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  여드름 흉터나 모공 개선이 필요하신가요?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsAcneTreatment"
                    {...register("wantsAcneTreatment", {
                      setValueAs: (v) => Boolean(v),
                    })}
                    className="block w-20 rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsAcneTreatment?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsAcneTreatment.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsImmediateEffect"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  즉각적인 피부 개선을 원하시나요?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsImmediateEffect"
                    {...register("wantsImmediateEffect", {
                      setValueAs: (v) => Boolean(v),
                    })}
                    className="block w-20 rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsImmediateEffect?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsImmediateEffect.message}
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div> */}
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              개인적 조건 및 선호도
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide your personal details.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsShortRecovery"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  회복 기간이 짧은 시술을 선호하십니까?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsShortRecovery"
                    {...register("wantsShortRecovery")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsShortRecovery?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsShortRecovery.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsBudgetBelow100"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  예산이 100만 원 이하입니까?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsBudgetBelow100"
                    {...register("wantsBudgetBelow100")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsBudgetBelow100?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsBudgetBelow100.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="wantsLessIntensive"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  민감한 피부로 인해 저자극 시술을 원하시나요?
                </label>
                <div className="mt-2">
                  <select
                    id="wantsLessIntensive"
                    {...register("wantsLessIntensive")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>-- 선택 --</option>
                    <option value="true">예</option>
                    <option value="">아니오</option>
                  </select>
                  {errors.wantsLessIntensive?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.wantsLessIntensive.message}
                    </p>
                  )}
                </div>
              </div>

              {/* <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street"
                    {...register("street")}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.street?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.street.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.city?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="state"
                    {...register("state")}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.state?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="zip"
                    {...register("zip")}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.zip?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div> */}
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0 || currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
