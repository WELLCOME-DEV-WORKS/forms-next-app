import SignUp from "@/components/auth/SignUp";
import { buttonVariants } from "@/components/ui/details/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const page: FC = () => {
  return (
    <div className="inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20"></div>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "self-start -mt-20"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4"></ChevronLeft>Home
      </Link>

      <SignUp></SignUp>
    </div>
  );
};

export default page;
