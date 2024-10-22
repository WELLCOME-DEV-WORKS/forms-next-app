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
      lang="cn"
      className={cn(
        'bg-wellcome-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className="min-h-screen  antialiased bg-wellcome-white">
        <Providers>
          {/* <Navbar /> */}
          {authModal}
          {/* @ts-expect-error server component */}
          <WellcomeHeader />
          <div
            className="container h-full py-16 bg-wellcome-white px-0
          max-sm:py-2 max-md:py-5
          "
          >
            {children}
          </div>
          <WellcomeFooter />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
