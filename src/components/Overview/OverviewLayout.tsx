import { FC } from "react";
import { styled } from "@mui/material";
import { OVERVIEW_CONSTANTS } from "./constants";

interface OverviewLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Базовый layout компонент для Overview
 * Предоставляет общую структуру и стили
 */
export const OverviewLayout: FC<OverviewLayoutProps> = ({
  children,
  className,
}) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled("div")({
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: OVERVIEW_CONSTANTS.LAYOUT.GAP,
  padding: OVERVIEW_CONSTANTS.LAYOUT.PADDING_DESKTOP,
  minWidth: OVERVIEW_CONSTANTS.LAYOUT.MIN_WIDTH,
  maxWidth: OVERVIEW_CONSTANTS.LAYOUT.MAX_WIDTH,
  height: OVERVIEW_CONSTANTS.LAYOUT.HEIGHT,
  boxSizing: "border-box",

  [`@media (max-width: ${OVERVIEW_CONSTANTS.BREAKPOINTS.MOBILE})`]: {
    padding: OVERVIEW_CONSTANTS.LAYOUT.PADDING_MOBILE,
  },
});
