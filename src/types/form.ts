import { Form } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<Form>[] = [
  {
    accessorKey: "userId",
    header: "User",
  },
  {
    accessorKey: "wantsSkinImprovement",
    header: "Skin Improvement",
  },
  {
    accessorKey: "wantsSkinToneImprovement",
    header: "Skin Tone Improvement",
  },
  {
    accessorKey: "wantsAcneTreatment",
    header: "Acne Treatment",
  },
  {
    accessorKey: "wantsImmediateEffect",
    header: "Immediate Effect",
  },
  {
    accessorKey: "wantsShortRecovery",
    header: "Short Recovery",
  },
  {
    accessorKey: "wantsBudgetBelow100",
    header: "Budget Below 100",
  },
  {
    accessorKey: "wantsLessIntensive",
    header: "Less Intensive",
  },
];
