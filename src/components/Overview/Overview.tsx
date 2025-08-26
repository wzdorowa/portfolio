"use client";

import { FC } from "react";
import { styled } from "@mui/material";
import { Header } from "../Header";
import { Hero } from "../Hero";

interface OverviewProps {
  type?: "main" | "portfolio";
}

/**
 * Компонент обзорной секции
 * Отображает главную секцию с заголовком, навигацией и фотографией
 */
export const Overview: FC<OverviewProps> = ({ type = "main" }) => {
  const content = {
    main: {
      title: (
        <>
          Вероника
          <br />
          Здорова
        </>
      ),
      text: "Развиваюсь в сфере дизайна интерфейсов, три года работала фронтенд-разработчиком. Помогу спроектировать дизайн интерфейса и&nbsp;реализовать его в веб-пространстве.",
      withBackButton: false,
    },
    portfolio: {
      title: "Портфолио",
      text: "Здесь храняться версии моих мыслей относительно разных проектов. Какие-то уже реализованы, а над какими-то было интересно порассуждать на уровне идеи. В этих работах вы можете познакомиться с уровнем моих навыков.",
      withBackButton: false,
    },
  };

  return (
    <Content>
      <Header />
      <Hero
        title={content[type].title}
        text={content[type].text}
        withBackButton={content[type].withBackButton}
      />
    </Content>
  );
};

const Content = styled("div")({
  gridColumn: "1 / 2",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 125,
  padding: "40px 32px 80px 64px",
  minWidth: 580,
  maxWidth: 600,

  "@media (max-width: 768px)": {
    padding: "24px 16px 40px",
  },
});
