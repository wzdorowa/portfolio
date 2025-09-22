"use client";

import { FC, ReactNode } from "react";
import { styled, Typography } from "@mui/material";
import { useScrollShadow } from "../../../../hooks/useScrollShadow";
import { useAdaptiveHeight } from "../../../../hooks/useAdaptiveHeight";
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
  const { contentRef, needsFullHeight } = useAdaptiveHeight(text);

  // Если text - это не строка (например, ProjectContent компонент), то всегда используем полную высоту
  const isComplexContent = typeof text !== "string";
  const shouldUseFullHeight = isComplexContent || needsFullHeight;

  return (
    <HeroWrapper>
      <HeroTitleWrapper>
        <HeroTitle variant="h1">{title}</HeroTitle>
        {isEducational && <Note>Работа в рамках обучения</Note>}
      </HeroTitleWrapper>

      <Content $needsFullHeight={shouldUseFullHeight}>
        <ScrollShadowContainer
          className={scrollContainerClass}
          backgroundColor={backgroundColor}
          ref={contentRef}
        >
          <ScrollableText scrollRef={scrollRef}>{text}</ScrollableText>
        </ScrollShadowContainer>
      </Content>
    </HeroWrapper>
  );
};

const HeroWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 72,
  minHeight: 0, // Позволяет flex-элементу сжиматься меньше своего контента
  color: "inherit",
});

const HeroTitle = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  flexShrink: 0, // Не сжимается
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

interface ContentProps {
  $needsFullHeight: boolean;
}

const Content = styled("div")<ContentProps>(({ $needsFullHeight }) => ({
  maxWidth: 450,
  display: "flex",
  flexDirection: "column",
  minHeight: $needsFullHeight ? 1 : "auto", // Минимальная высота только если контент большой
  height: $needsFullHeight ? "100%" : "auto", // Увеличенная высота для страниц проектов
}));
