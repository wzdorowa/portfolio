"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";

import { Header } from "@/src/components/ui";
import { Hero } from "./Hero";
import { BackButton } from "./BackButton";
import { TextColor } from "@/src/types/common";

interface ProjectOverviewProps {
  title: ReactNode;
  isEducational: boolean;
  year: number;
  text: ReactNode;
  onBackClick?: () => void;
  backgroundColor?: string;
  textColor?: TextColor;
}

/**
 * Компонент обзорной секции
 * Отображает главную секцию с заголовком, навигацией и описанием
 */
export const ProjectOverview: FC<ProjectOverviewProps> = ({
  title,
  isEducational,
  year,
  text,
  onBackClick,
  backgroundColor,
  textColor = "black",
}) => {
  return (
    <Root $backgroundColor={backgroundColor} $textColor={textColor}>
      <Header textColor={textColor} />
      <HeroBox>
        <Hero
          title={title}
          isEducational={isEducational}
          year={year}
          text={text}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </HeroBox>
      <ButtonBox>
        <BackButton onClick={onBackClick} />
      </ButtonBox>
    </Root>
  );
};

const Root = styled("div")<{
  $backgroundColor?: string;
  $textColor?: TextColor;
}>(({ $backgroundColor, $textColor }) => ({
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "42px 48px 48px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",
  boxSizing: "border-box",
  backgroundColor: $backgroundColor || "transparent",
  color: $textColor || "inherit",

  "@media (max-width: 1280px)": {
    padding: "24px 128px 40px 48px",
    minWidth: "auto",
    maxWidth: "100%",
    height: "100%",
  },

  "@media (max-width: 768px)": {
    padding: "24px 48px 40px 32px",
  },
  "@media (max-width: 480px)": {
    padding: "16px 32px 24px 16px",
  },
}));

const HeroBox = styled("div")({
  marginTop: 100,
  minHeight: 0,

  "@media (max-width: 1280px)": {
    marginTop: 80,
  },
  "@media (max-width: 768px)": {
    marginTop: 64,
  },
  "@media (max-width: 480px)": {
    marginTop: 48,
    marginRight: 16,
  },
});

const ButtonBox = styled("div")({
  marginTop: 100,

  "@media (max-width: 1280px)": {
    marginTop: 64,
  },
  "@media (max-width: 768px)": {
    marginTop: 32,
  },
  "@media (max-width: 480px)": {
    marginTop: 24,
  },
});
