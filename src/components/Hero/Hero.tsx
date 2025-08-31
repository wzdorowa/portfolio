"use client";

import { FC, ReactNode, useRef, useEffect, useState } from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

interface HeroProps {
  /** Заголовок секции */
  title: string | ReactNode;
  /** Основной текст */
  text: string | ReactNode;
}

/**
 * Компонент Hero секции
 * Отображает основную информацию с заголовком, текстом и либо контактами, либо кнопкой назад
 */
export const Hero: FC<HeroProps> = ({ title, text }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    hasScrollTop: false,
    hasScrollBottom: false,
  });

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;

      setScrollState({
        hasScrollTop: scrollTop > 0,
        hasScrollBottom: scrollTop < scrollHeight - clientHeight - 1,
      });
    };

    // Проверяем начальное состояние
    handleScroll();

    element.addEventListener("scroll", handleScroll);

    // Также слушаем изменения размера содержимого
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [text]);

  const scrollContainerClass = [
    scrollState.hasScrollTop && "has-scroll-top",
    scrollState.hasScrollBottom && "has-scroll-bottom",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <HeroWrapper>
      <MainTitle variant="h1">{title}</MainTitle>

      <Content>
        <ScrollContainer className={scrollContainerClass}>
          <Text ref={scrollRef}>
            {typeof text === "string" ? (
              <Typography variant="body1">{text}</Typography>
            ) : (
              text
            )}
          </Text>
        </ScrollContainer>
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
});

const Content = styled("div")({
  flex: 1, // Занимает оставшуюся высоту после заголовка
  maxWidth: 450,
  display: "flex",
  flexDirection: "column",
  minHeight: 0, // Позволяет сжиматься
});

const ScrollContainer = styled("div")({
  flex: 1,
  position: "relative",
  minHeight: 0, // Позволяет flex-элементу сжиматься

  // Верхняя тень при скролле
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 20,
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    zIndex: 1,
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.2s ease",
  },

  // Нижняя тень при скролле
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    background:
      "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    zIndex: 1,
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.2s ease",
  },

  // Показываем тени при скролле
  "&.has-scroll-top::before": {
    opacity: 1,
  },

  "&.has-scroll-bottom::after": {
    opacity: 1,
  },
});

const Text = styled("div")({
  height: "100%", // Занимает всю высоту ScrollContainer
  width: "100%",
  overflowY: "auto",
  paddingRight: 12,

  // Стили для скроллбара
  "&::-webkit-scrollbar": {
    width: 4,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: 2,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(0, 0, 0, 0.3)",
  },

  // Стили для вложенного контента
  "& .MuiTypography-body1": {
    margin: 0,
    lineHeight: 1.7,
  },

  // Стили для сложного контента (ProjectPage)
  "& > div": {
    width: "100%",
  },
});

const MainTitle = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  flexShrink: 0, // Не сжимается
});
