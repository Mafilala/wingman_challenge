import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wingman Challenge",
  description: "Wingman Challenge, Next.js, Tailwind CSS, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Sidebar />

        <div className="flex-1 min-h-screen bg-white overflow-y-auto scrollbar-hide">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
