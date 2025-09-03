"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";
import { useScrollShadow } from "../../hooks/useScrollShadow";
import { HeroTitle } from "./HeroTitle";
import { ScrollableText } from "./ScrollableText";
import { ScrollShadowContainer } from "./ScrollShadowContainer";

interface HeroProps {
  /** Заголовок секции */
  title: string | ReactNode;
  isEducational: boolean;
  /** Основной текст */
  text: string | ReactNode;
  /** Цвет фона для scroll shadow */
  backgroundColor?: string;
}

/**
 * Компонент Hero секции
 * Отображает основную информацию с заголовком и текстом с поддержкой скролла
 */
export const Hero: FC<HeroProps> = ({
  title,
  isEducational,
  text,
  backgroundColor,
}) => {
  const { scrollRef, scrollContainerClass } = useScrollShadow(text);

  return (
    <HeroWrapper>
      <HeroTitleWrapper>
        <HeroTitle>{title}</HeroTitle>
        {isEducational && <Note>Работа в рамках обучения</Note>}
      </HeroTitleWrapper>

      <Content>
        <ScrollShadowContainer
          className={scrollContainerClass}
          backgroundColor={backgroundColor}
        >
          <ScrollableText scrollRef={scrollRef}>{text}</ScrollableText>
        </ScrollShadowContainer>
      </Content>
    </HeroWrapper>
  );
};

const HeroWrapper = styled("div")({
  flex: 1, // Занимает всю доступную высоту в Overview
  display: "flex",
  flexDirection: "column",
  gap: 72,
  minHeight: 0, // Позволяет flex-элементу сжиматься меньше своего контента
  color: "inherit",
});

const HeroTitleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const Note = styled("span")({
  fontStyle: "italic",
});

const Content = styled("div")({
  flex: 1, // Занимает оставшуюся высоту после заголовка
  maxWidth: 450,
  display: "flex",
  flexDirection: "column",
  minHeight: 0, // Позволяет сжиматься
});
