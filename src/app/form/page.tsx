// import { redirect } from "next/navigation";

// import { UserNameForm } from "@/components/UserNameForm";
// import { authOptions, getAuthSession } from "@/lib/auth";
import Form from "@/components/common/Form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function HospitalFormPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="grid items-start gap-8">
        <h1 className="font-bold text-3xl md:text-4xl">
          최신 피부과 시술, 모르신다면?! 1분만에 나에게 맞는 시술 알아보기
        </h1>

        <div className="grid gap-10">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
