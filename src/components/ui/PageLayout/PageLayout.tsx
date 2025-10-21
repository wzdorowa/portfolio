"use client";

import { ReactNode } from "react";
import { styled, Box } from "@mui/material";
import { Header, Title } from "@/src/components/ui";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => (
  <Root>
    <Header />
    <Content>
      <CustomTitle variant="h1">{title}</CustomTitle>
      {children}
    </Content>
  </Root>
);

const Root = styled("div")({
  background: "#fff",
  minHeight: "100vh",
  padding: "24px 128px 160px 48px",
  display: "flex",
  flexDirection: "column",
  gap: 100,

  "@media (max-width: 1300px)": {
    padding: "24px 128px 120px 48px",
  },

  "@media (max-width: 768px)": {
    padding: "24px 48px 100px 32px",
    gap: 64,
  },
  "@media (max-width: 480px)": {
    padding: "16px 32px 64px 16px",
    gap: 48,
  },
});

const Content = styled(Box)({
  maxWidth: 969,
  display: "flex",
  flexDirection: "column",
});

const CustomTitle = styled(Title)({
  marginBottom: 40,

  "@media (max-width: 768px)": {
    marginBottom: 36,
  },
  "@media (max-width: 480px)": {
    marginBottom: 16,
  },
});
