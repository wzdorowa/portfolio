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
  minHeight: "100vh",
  margin: "0 64px",
  display: "flex",
  flexDirection: "column",
  gap: 125,
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
});
