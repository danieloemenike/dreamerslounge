import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIP Dreamers Lounge",
  description: "VIP Dreamers Lounge Menu List",
};

export default function VipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark font-serif">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
