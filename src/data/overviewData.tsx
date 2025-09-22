import { ReactNode } from "react";

// Types
export interface OverviewData {
  title: ReactNode;
  text: ReactNode;
  isEducational?: boolean;
  withBackButton?: boolean;
}

// Overview data for different pages
export const OVERVIEW_DATA = {
  main: {
    title: (
      <>
        Вероника
        <br />
        Здорова
      </>
    ),
    text: "Развиваюсь в сфере дизайна интерфейсов. Несколько лет работала фронтенд-разработчиком. Помогу построить дизайн интерфейса и реализовать его в веб-пространстве.",
    isEducational: false,
    withBackButton: false,
  },
  portfolio: {
    title: "Портфолио",
    text: "Здесь храняться версии моих мыслей относительно разных проектов. Какие-то уже реализованы, а над какими-то было интересно порассуждать на уровне идеи. В этих работах вы можете познакомиться с уровнем моих навыков.",
    isEducational: false,
    withBackButton: false,
  },
} as const;
