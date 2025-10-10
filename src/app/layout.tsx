'use client';
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: true,
      },
    },
  }));

  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <ToastContainer hideProgressBar newestOnTop />
        </QueryClientProvider>
      </body>
    </html>
  );
}
