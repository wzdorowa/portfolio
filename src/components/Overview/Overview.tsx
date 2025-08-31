"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailSharp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Header } from "../Header";
import { Hero } from "../Hero";

import BackButtonIcon from "../../../public/icons/BackButtonIcon";

interface OverviewProps {
  title: ReactNode;
  text: ReactNode;
  withBackButton?: boolean;
  onBackClick?: () => void;
}

/**
 * Компонент обзорной секции
 * Отображает главную секцию с заголовком, навигацией и описанием
 */
export const Overview: FC<OverviewProps> = ({
  title,
  text,
  withBackButton = false,
  onBackClick,
}) => {
  return (
    <Content>
      <Header />
      <Hero title={title} text={text} />

      {withBackButton ? (
        <BackButtonIconBox onClick={onBackClick}>
          <BackButtonIcon />
        </BackButtonIconBox>
      ) : (
        <ContactsWrapper>
          <ContactLink href="mailto:w.zdorowa@gmail.com">
            <EmailIcon />
            <Typography variant="body2">w.zdorowa@gmail.com</Typography>
          </ContactLink>
          <ContactLink
            href="https://t.me/zdorova_veronika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            <Typography variant="body2">@zdorova_veronika</Typography>
          </ContactLink>
        </ContactsWrapper>
      )}
    </Content>
  );
};

const Content = styled("div")({
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 125,
  padding: "40px 32px 80px 64px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",

  "@media (max-width: 768px)": {
    padding: "24px 16px 40px",
  },
});

const BackButtonIconBox = styled("button")({
  background: "none",
  border: "none",
  cursor: "pointer",
  flexShrink: 0, // Не сжимается
  "&:hover": {
    textDecoration: "none",
  },
});

const ContactsWrapper = styled("div")({
  display: "flex",
  gap: 16,
  flexShrink: 0, // Не сжимается
});

const ContactLink = styled("a")({
  color: "#4e64d5",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,
});
