import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar, Footer } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iPhone 15 pro | Home",
  description: "Apple | iPhone 15 pro home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
