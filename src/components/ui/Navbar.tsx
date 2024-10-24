import Link from "next/link";
import { Icons } from "./details/Icons";
import { buttonVariants } from "./details/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* { logo } */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6"></Icons.logo>
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Community
          </p>
        </Link>
        {/* {search bar} */}
        { }
        <div className="ml-auto">
          <Link href="/admin" className={buttonVariants()}>
            Admin Panel
          </Link>
        </div>

        {session ? (
          <div>
            <UserAccountNav user={session.user} />
          </div>
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
