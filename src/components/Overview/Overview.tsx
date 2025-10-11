"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";

import { Header } from "../Header";
import { TextColor } from "../../types/common";
import { Contacts } from "../Contacts";
import { Title } from "../Title";

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
  marginTop: 16,

  "@media (max-width: 480px)": {
    marginTop: 12,
  },
});
