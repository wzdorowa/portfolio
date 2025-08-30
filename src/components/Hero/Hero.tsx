"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailSharp";
import TelegramIcon from "@mui/icons-material/Telegram";

import BackButtonIcon from "../../../public/icons/BackButtonIcon";

interface HeroProps {
  /** Заголовок секции */
  title: string | ReactNode;
  /** Основной текст */
  text: string | ReactNode;
  /** Флаг для отображения кнопки "Назад" вместо контактов */
  withBackButton?: boolean;
}

/**
 * Компонент Hero секции
 * Отображает основную информацию с заголовком, текстом и либо контактами, либо кнопкой назад
 */
export const Hero: FC<HeroProps> = ({ title, text, withBackButton }) => {
  return (
    <HeroWrapper>
      <MainTitle variant="h1">{title}</MainTitle>

      <TextContent>
        <Typography variant="body1">{text}</Typography>

        {withBackButton ? (
          <BackButtonIconBox>
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
      </TextContent>
    </HeroWrapper>
  );
};

const HeroWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 72,
});

const TextContent = styled("div")({
  maxWidth: 435,
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  gap: 40,
});

const MainTitle = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
});

const BackButtonIconBox = styled("button")({
  background: "none",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "none",
  },
});

const ContactsWrapper = styled("div")({
  marginTop: "auto",
  display: "flex",
  gap: 16,
});

const ContactLink = styled("a")({
  color: "#4e64d5",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,
});
