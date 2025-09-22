"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";

import { Header } from "@/src/components";
import { Hero } from "./Hero";
import { BackButton } from "./BackButton";
import { TextColor } from "@/src/types/common";

interface ProjectOverviewProps {
  title: ReactNode;
  isEducational: boolean;
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
  text,
  onBackClick,
  backgroundColor,
  textColor = "black",
}) => {
  return (
    <Root $backgroundColor={backgroundColor} $textColor={textColor}>
      <Header textColor={textColor} />
      <Hero
        title={title}
        isEducational={isEducational}
        text={text}
        backgroundColor={backgroundColor}
      />
      <BackButton onClick={onBackClick} />
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
  gap: 125,
  padding: "42px 48px 80px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",
  boxSizing: "border-box",
  backgroundColor: $backgroundColor || "transparent",
  color: $textColor || "inherit",

  "@media (max-width: 768px)": {
    padding: "24px 16px 40px",
  },
}));
