import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { AppWrapper } from "@/src/components/layout";

export const metadata: Metadata = {
  title: "Вероника Здорова - Портфолио",
  description: "Портфолио UI/UX дизайнера и фронтенд-разработчика",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={{ scrollBehavior: "smooth" }}>
      <body>
        <AppRouterCacheProvider>
          <AppWrapper>
            {children}
            <SpeedInsights />
          </AppWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
