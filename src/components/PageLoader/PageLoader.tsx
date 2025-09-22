"use client";

import { FC } from "react";
import { styled, keyframes } from "@mui/material";
import { Box } from "@mui/material";

/**
 * Компонент лоадера страницы
 * Отображается во время переходов между страницами
 */
export const PageLoader: FC = () => {
  return (
    <LoaderOverlay>
      <LoaderContainer>
        <Spinner />
        <LoaderText>Загрузка...</LoaderText>
      </LoaderContainer>
    </LoaderOverlay>
  );
};

// Анимации
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
});

const Spinner = styled("div")({
  width: 40,
  height: 40,
  border: "3px solid #f3f3f3",
  borderTop: "3px solid #4e64d5",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});

const LoaderText = styled("div")({
  fontSize: 14,
  color: "#666",
  fontWeight: 500,
});
