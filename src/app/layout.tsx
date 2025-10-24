'use client';

import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: true,
          },
        },
      })
  );

  return (
    <html lang="en" className={dmSans.variable}>
      <body className="flex flex-col items-center w-full font-sans">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <ToastContainer hideProgressBar newestOnTop />
        </QueryClientProvider>
      </body>
    </html>
  );
}
