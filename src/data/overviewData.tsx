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
    title: <>Вероника Здорова</>,
    text: "Развиваюсь в\u00A0сфере дизайна интерфейсов. Несколько лет работала фронтенд-разработчиком. Помогу построить дизайн интерфейса и\u00A0реализовать его в\u00A0веб-пространстве.",
    isEducational: false,
    withBackButton: false,
  },
  portfolio: {
    title: "Портфолио",
    text: "Здесь храняться версии моих мыслей относительно разных проектов. Какие\u2011то уже реализованы, а\u00A0над какими-то было интересно порассуждать на\u00A0уровне идеи. В\u00A0этих работах вы\u00A0можете познакомиться с\u00A0уровнем моих навыков.",
    isEducational: false,
    withBackButton: false,
  },
} as const;
