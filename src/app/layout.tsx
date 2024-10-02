import Navbar from "@/components/ui/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/details/Toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import WellcomeHeader from "@/components/ui/WellcomeHeader";

export const metadata = {
  title: "Community-fe-app",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

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
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 antialiased">
        <Providers>
          {/* @ts-expect-error server component */}
          {/* <Navbar /> */}
          {/* {authModal} */}
          <WellcomeHeader title="Well-Come" buttonText="로그인" />
          <div className="container max-w-7xl mx-auto h-full pt-16">
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
