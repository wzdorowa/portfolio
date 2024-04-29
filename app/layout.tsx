import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Zdorova Veronika",
  description: "Portfolio Zdorova Veronika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jura.className}>{children}</body>
    </html>
  );
}
