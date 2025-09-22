"use client";

import { FC } from "react";
import { styled, keyframes } from "@mui/material";

/**
 * Компонент лоадера для изображений
 * Отображается во время загрузки изображений проектов
 */
export const ImageLoader: FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <ProgressText>Загрузка изображения...</ProgressText>
    </LoaderContainer>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#f8f9fa",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  zIndex: 1,
});

const Spinner = styled("div")({
  width: 40,
  height: 40,
  border: "3px solid #e0e0e0",
  borderTop: "3px solid #1976d2",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});

const ProgressText = styled("p")({
  margin: 0,
  fontSize: 14,
  color: "#495057",
  fontWeight: 500,
  fontFamily: "inherit",
  letterSpacing: "0.5px",
});
