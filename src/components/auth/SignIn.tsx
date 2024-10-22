import { FC } from 'react';
import { Icons } from '../ui/details/Icons';
import Link from 'next/link';
import UserAuthForm from './UserAuthForm';

const SignIn: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
        <h1 className="text-2xl font-semibold tracking-tight">
          추천결과를 확인하려면
          <br />
          로그인이 필요합니다.
        </h1>
        {/* <p className="text-sm max-w-xs mx-auto text-left">
          <br />
          로그인 후 추천 결과를 확인하고 예약을 진행할 수 있습니다.
        </p> */}
      </div>
      <UserAuthForm />

      <p className="px-8 text-center text-sm text-muted-foreground">
        New to community?{' '}
        <Link
          href="/sign-up"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
