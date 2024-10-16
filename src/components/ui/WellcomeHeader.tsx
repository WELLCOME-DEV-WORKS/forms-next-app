import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './details/Button';
import UserAccountNav from './UserAccountNav';

interface WellcomeHeaderProps {
  title: string;
  buttonText: string;
}

const WellcomeHeader = async () => {
  const session = await getAuthSession();
  return (
    <header
      className="flex gap-5 justify-between w-full bg-wellcome-white text-center whitespace-nowrap  max-md:max-w-full px-20
    max-sm:px-0 max-md:px-0
    "
    >
      {/* 로고 폰트 적용 링크 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <Link href="/">
        <div className="flex gap-7 p-2.5 text-xl font-extrabold text-wellcome-pink">
          <img
            loading="lazy"
            src="logo.webp"
            className="object-contain shrink-0 aspect-[1.95] w-[78px]"
            alt="Well-come logo"
          />
          <div className="my-auto basis-auto font-museo ">Well-Come</div>
        </div>
      </Link>

      {session ? (
        <div className="flex">
          <UserAccountNav user={session.user} />
        </div>
      ) : (
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      )}
      {/* <button className="px-4 py-1 text-lg font-bold tracking-tight text-white bg-wellcome-pink rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-3">
        {buttonText}
      </button> */}
    </header>
  );
};

export default WellcomeHeader;
