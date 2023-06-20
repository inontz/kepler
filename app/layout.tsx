"use client"
import "./globals.css";
import { lineSeedRg } from "@/fonts";
import { InitLiff } from "./hooks/useLine";
import liff from "@line/liff";

export const metadata = {
  title: "Kepler 🚀",
  description: "Fly to the Moon.",
};

export default function RootLayout({
  children
}: {
    children: React.ReactNode;
  }) {
  
  return (
    <html lang="en">
      <body className={lineSeedRg.className}>
        {children}
      </body>
    </html>
  );
}
