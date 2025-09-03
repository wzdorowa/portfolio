"use client";

import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { OverviewFooter } from "./OverviewFooter";
import { OverviewLayout } from "./OverviewLayout";

interface OverviewProps {
  title: ReactNode;
  isEducational: boolean;
  text: ReactNode;
  withBackButton?: boolean;
  onBackClick?: () => void;
  backgroundColor?: string;
  textColor?: "white" | "black";
}

/**
 * Компонент обзорной секции
 * Отображает главную секцию с заголовком, навигацией и описанием
 */
export const Overview: FC<OverviewProps> = ({
  title,
  isEducational,
  text,
  withBackButton = false,
  onBackClick,
  backgroundColor,
  textColor = "black",
}) => {
  return (
    <OverviewLayout backgroundColor={backgroundColor} textColor={textColor}>
      <Header textColor={textColor} />
      <Hero
        title={title}
        isEducational={isEducational}
        text={text}
        backgroundColor={backgroundColor}
      />
      <OverviewFooter
        withBackButton={withBackButton}
        onBackClick={onBackClick}
      />
    </OverviewLayout>
  );
};
