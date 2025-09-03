import { FC } from "react";
import { styled } from "@mui/material";

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
  gap: 125,
  padding: "40px 32px 80px 64px",
  minWidth: 580,
  maxWidth: 600,
  height: "100vh",
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    padding: "24px 16px 40px",
  },
});
