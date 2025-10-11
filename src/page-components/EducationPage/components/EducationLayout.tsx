"use client";

import { ReactNode } from "react";
import { styled, Box } from "@mui/material";
import { Header, Title } from "@/src/components";
import { EDUCATION_TEXT } from "@/src/data";

interface EducationLayoutProps {
  children: ReactNode;
}

export const EducationLayout = ({ children }: EducationLayoutProps) => (
  <Root>
    <Header />
    <Content>
      <CustomTitle variant="h1">{EDUCATION_TEXT.title}</CustomTitle>
      {children}
    </Content>
  </Root>
);

const Root = styled("div")({
  background: "#fff",
  padding: "42px 48px 48px",
  display: "flex",
  flexDirection: "column",
  gap: 100,

  "@media (max-width: 1300px)": {
    padding: "24px 128px 40px 48px",
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

const CustomTitle = styled(Title)({
  marginBottom: 40,

  "@media (max-width: 768px)": {
    marginBottom: 36,
  },
  "@media (max-width: 480px)": {
    marginBottom: 24,
  },
});
