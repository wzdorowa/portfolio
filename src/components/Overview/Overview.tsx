"use client";

import { FC, ReactNode } from "react";
import { styled, Typography } from "@mui/material";

import { Header } from "../Header";
import { TextColor } from "../../types/common";
import { Contacts } from "./Contacts";

interface OverviewProps {
  title: ReactNode;
  isEducational: boolean;
  text: ReactNode;
  withBackButton?: boolean;
  onBackClick?: () => void;
  backgroundColor?: string;
  textColor?: TextColor;
}

/**
 * Компонент обзорной секции
 * Отображает главную секцию с заголовком, навигацией и описанием
 */
export const Overview: FC<OverviewProps> = ({ title, text }) => {
  return (
    <Root>
      <Header />
      <Main>
        <Title variant="h1">{title}</Title>
        <Description>{text}</Description>
        <ContactsBox>
          <Contacts />
        </ContactsBox>
      </Main>
    </Root>
  );
};

const Root = styled("div")({
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 100,
  padding: "42px 48px 48px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",
  boxSizing: "border-box",

  "@media (max-width: 1280px)": {
    padding: "24px 128px 40px 48px",
    minWidth: "auto",
    maxWidth: "100%",
    height: "100%",
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

const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: 0, // Позволяет flex-элементу сжиматься меньше своего контента
});

const Title = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  flexShrink: 0, // Не сжимается
  color: "inherit",

  "@media (max-width: 768px)": {
    fontSize: "3.3rem",
  },

  "@media (max-width: 480px)": {
    fontSize: "2.5rem",
  },
});

const Description = styled("div")({
  maxWidth: 435,
  marginTop: 64,
  lineHeight: 1.7,

  "@media (max-width: 1280px)": {
    maxWidth: 675,
  },

  "@media (max-width: 768px)": {
    marginTop: 36,
  },
});

const ContactsBox = styled("div")({
  marginTop: 40,

  "@media (max-width: 768px)": {
    marginTop: 24,
  },
  "@media (max-width: 480px)": {
    marginTop: 16,
  },
});
