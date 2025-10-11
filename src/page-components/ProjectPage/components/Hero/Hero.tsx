"use client";

import { FC, ReactNode } from "react";
import { styled } from "@mui/material";
import { useScrollShadow } from "../../../../hooks/useScrollShadow";
import { useAdaptiveHeight } from "../../../../hooks/useAdaptiveHeight";
import { ScrollableText } from "./ScrollableText";
import { ScrollShadowContainer } from "./ScrollShadowContainer";
import { TextColor } from "@/src/types/common";
import { Title } from "@/src/components";

interface HeroProps {
  /** Заголовок секции */
  title: string | ReactNode;
  isEducational: boolean;
  year: number;
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
  year,
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
        <Title variant="h1">{title}</Title>
        <Note>
          {"("}
          {isEducational && "работа в рамках обучения, "}
          {year} год{")"}
        </Note>
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
  gap: 64,
  height: "100%",
  color: "inherit",

  "@media (max-width: 1280px)": {
    gap: 48,
  },
  "@media (max-width: 768px)": {
    gap: 36,
  },
});

const HeroTitleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 26,

  "@media (max-width: 768px)": {
    gap: 24,
  },

  "@media (max-width: 480px)": {
    gap: 16,
  },
});

const Note = styled("span")({
  fontStyle: "italic",
  opacity: 0.75,
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
