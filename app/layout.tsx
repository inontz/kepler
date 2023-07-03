import { Metadata } from "next";
import "./globals.css";
import { lineSeedRg } from "@/fonts";

export const metadata: Metadata = {
  title: {
    template: '%s | KEPLER 🚀',
    default: 'KEPLER 🚀',
  },
}

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
