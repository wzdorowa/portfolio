"use client";

import { ReactNode } from "react";
import { styled, Typography, Box } from "@mui/material";
import { Header } from "@/src/components";
import { EXPERIENCE_PAGE_CONTENT } from "@/src/data";

interface ExperienceLayoutProps {
  children: ReactNode;
}

export const ExperienceLayout = ({ children }: ExperienceLayoutProps) => (
  <Root>
    <Header />
    <Content>
      <Title variant="h1">{EXPERIENCE_PAGE_CONTENT.title}</Title>
      {children}
    </Content>
  </Root>
);

const Root = styled("div")({
  background: "#fff",
  minHeight: "100vh",
  padding: "24px 128px 160px 64px",
  display: "flex",
  flexDirection: "column",
  gap: 100,

  "@media (max-width: 1300px)": {
    padding: "24px 128px 120px 64px",
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

const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.18,
  marginBottom: 40,

  "@media (max-width: 768px)": {
    fontSize: "3.3rem",
    marginBottom: 36,
  },
  "@media (max-width: 480px)": {
    fontSize: "2.5rem",
    marginBottom: 24,
  },
});
