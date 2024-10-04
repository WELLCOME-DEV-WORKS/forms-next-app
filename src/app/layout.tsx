import Navbar from '@/components/ui/Navbar';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/details/Toaster';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import WellcomeHeader from '@/components/ui/WellcomeHeader';
import WellcomeFooter from '@/components/ui/WellcomeFooter';

export const metadata = {
  title: 'Community-fe-app',
  description: 'A Reddit clone built with Next.js and TypeScript.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-wellcome-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className="min-h-screen  antialiased">
        <Providers>
          {/* @ts-expect-error server component */}
          {/* <Navbar /> */}
          {/* {authModal} */}
          <WellcomeHeader title="Well-Come" buttonText="로그인" />
          <div className="container max-w-7xl mx-auto h-full py-16 bg-wellcome-white">
            {children}
          </div>

          <WellcomeFooter
            text={
              <>
                Company Name : Well-come Visa Co., Ltd. Representative : Inhyuk
                Lee Address : 11th Floor, room 1113 and 1115, 78 Mapo-daero,{' '}
                <br />
                Mapo-gu, Seoul Business Registration Number : 359-86-02092 Email{' '}
                <br />: info@well-come.biz Mail Order Business Registration
                Number : <br />
                2023-Seoul Mapo-3768 Customer Service : +82-70-8655-2888"
              </>
            }
          />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
