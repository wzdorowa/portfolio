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
  gap: 125,
  padding: "42px 48px 80px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    padding: "24px 16px 40px",
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
});

const Description = styled("div")({
  maxWidth: 435,
  marginTop: 72,
  lineHeight: 1.7,
});

const ContactsBox = styled("div")({
  marginTop: 40,
});
