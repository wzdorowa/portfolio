"use client";

import { FC } from "react";
import { styled, keyframes } from "@mui/material";
import { Box } from "@mui/material";
import { PortfolioIcon } from "@/public/icons";

/**
 * Компонент лоадера страницы
 * Отображается во время переходов между страницами
 */
export const PageLoader: FC = () => {
  return (
    <LoaderOverlay>
      <LoaderContainer>
        <LoaderIcon>
          <PortfolioIcon />
        </LoaderIcon>
        <LoaderText>Загрузка...</LoaderText>
      </LoaderContainer>
    </LoaderOverlay>
  );
};

// Анимация
const portfolio = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(7deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-7deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// Styled Components
const LoaderOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 1)", // Непрозрачный белый фон
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
}));

const LoaderContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
});

const LoaderIcon = styled("div")({
  width: "20%",
  height: "auto",
  animation: `${portfolio} 2s cubic-bezier(.76,.24,.88,.33) infinite`,
});

const LoaderText = styled("div")({
  fontSize: 14,
  color: "#666",
  fontWeight: 500,
});
