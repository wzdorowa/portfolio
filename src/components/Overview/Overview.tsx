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
}) => {
  return (
    <OverviewLayout>
      <Header />
      <Hero title={title} isEducational={isEducational} text={text} />
      <OverviewFooter
        withBackButton={withBackButton}
        onBackClick={onBackClick}
      />
    </OverviewLayout>
  );
};
