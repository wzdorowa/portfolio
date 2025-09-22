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
  margin: "42px 64px 160px",
  display: "flex",
  flexDirection: "column",
  gap: 125,
});

const Content = styled(Box)({
  maxWidth: 969,
  display: "flex",
  flexDirection: "column",
});

const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.18,
  marginBottom: 80,

  "@media (max-width: 768px)": {
    fontSize: "3.3rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "2.5rem",
  },
});
