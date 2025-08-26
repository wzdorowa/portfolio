import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./fonts";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Вероника Здорова - Портфолио",
  description: "Портфолио UI/UX дизайнера и фронтенд-разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
