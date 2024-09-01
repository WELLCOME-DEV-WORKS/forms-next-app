import { notFound, redirect } from "next/navigation";

import { authOptions, getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/types/form";

export default async function AdminPage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const forms = await db.form.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });

  if (!forms) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="grid items-start gap-8">
        <h1 className="font-bold text-3xl md:text-4xl">Admin Panel</h1>

        <div className="grid gap-10">
          {forms.map((item: any) => (
            <div key={item.id} className="p-4 border rounded-lg">
              <h2 className="font-semibold text-xl">{item.user?.id}</h2>
              <p>{item.wantsAcneTreatment}</p>
              {/* You can display more fields as needed */}

              <DataTable columns={columns} data={forms} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
