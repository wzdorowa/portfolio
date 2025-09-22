"use client";

import { FC, ReactNode } from "react";
import { styled, Typography } from "@mui/material";
import { useScrollShadow } from "../../../../hooks/useScrollShadow";
import { useAdaptiveHeight } from "../../../../hooks/useAdaptiveHeight";
import { ScrollableText } from "./ScrollableText";
import { ScrollShadowContainer } from "./ScrollShadowContainer";
import { TextColor } from "@/src/types/common";

interface HeroProps {
  /** Заголовок секции */
  title: string | ReactNode;
  isEducational: boolean;
  /** Основной текст */
  text: string | ReactNode;
  /** Цвет фона для scroll shadow */
  backgroundColor?: string;
  /** Цвет текста для адаптации скроллбара */
  textColor?: TextColor;
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
  textColor = "black",
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
          <ScrollableText scrollRef={scrollRef} textColor={textColor}>
            {text}
          </ScrollableText>
        </ScrollShadowContainer>
      </Content>
    </HeroWrapper>
  );
};

const HeroWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 72,
  height: "100%",
  color: "inherit",

  "@media (max-width: 768px)": {
    gap: 36,
  },
});

const HeroTitle = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  flexShrink: 0, // Не сжимается
  color: "inherit",

  "@media (max-width: 768px)": {
    fontSize: "3.3rem",
  },

  "@media (max-width: 480px)": {
    fontSize: "2.5rem",
  },
});

const HeroTitleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 32,

  "@media (max-width: 768px)": {
    gap: 24,
  },

  "@media (max-width: 480px)": {
    gap: 16,
  },
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

  "@media (max-width: 1280px)": {
    maxWidth: "100%",
  },
}));
