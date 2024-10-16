'use client'
import { SurveyComplete } from '@/components/SurveyComplete';
import Redirect from '@/components/ui/Redirect';
import { buttonVariants } from '@/components/ui/details/Button';
import { useLoadSurveyComplete, useSurveyRedirect } from '@/hooks/useSurveyRedirect';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';


export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function Home() {
  // useSurveyRedirect();
  useLoadSurveyComplete();
  return (
    <>
      <Link href='/userSurvey'>설문 링크</Link>
      <SurveyComplete />
      {/* <Redirect /> */}
      {/* <h1 className="font-bold text-3xl md:text-4xl">Landing Page</h1> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
        {feed}

        {categories}
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="font-semibold flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4"></HomeIcon>
              Home
            </p>
          </div>

          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                Your personal frontpage. Come here to check in with your
                favorite communities.
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: "w-full mt-4 mb-6",
              })}
              href={`/community/create`}
            >
              Create Community
            </Link>
            <Link
              className={buttonVariants({
                className: 'w-full mt-4 mb-6',
              })}
              href={`/form`}
            >
              Fill out the form
            </Link>
          </dl>
        </div>
      </div> */}
    </>
  );
}
