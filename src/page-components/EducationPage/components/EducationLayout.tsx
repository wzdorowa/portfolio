"use client";

import { ReactNode } from "react";
import { styled, Typography, Box } from "@mui/material";
import { Header } from "@/src/components";
import { EDUCATION_TEXT } from "@/src/data";

interface EducationLayoutProps {
  children: ReactNode;
}

export const EducationLayout = ({ children }: EducationLayoutProps) => (
  <Root>
    <Header />
    <Content>
      <Title variant="h1">{EDUCATION_TEXT.title}</Title>
      {children}
    </Content>
  </Root>
);

const Root = styled("div")({
  background: "#fff",
  padding: "42px 64px 80px",
  display: "flex",
  flexDirection: "column",
  gap: 100,

  "@media (max-width: 1300px)": {
    padding: "24px 128px 40px 64px",
  },

  "@media (max-width: 768px)": {
    padding: "24px 48px 40px 32px",
    gap: 64,
  },
  "@media (max-width: 480px)": {
    padding: "16px 32px 24px 16px",
    gap: 48,
  },
});

const Content = styled(Box)({
  maxWidth: 720,
  display: "flex",
  flexDirection: "column",
});

const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  marginBottom: 54,

  "@media (max-width: 768px)": {
    fontSize: "3.3rem",
    marginBottom: 36,
  },

  "@media (max-width: 480px)": {
    fontSize: "2.5rem",
    marginBottom: 24,
  },
});
