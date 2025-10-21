"use client";

import { FC } from "react";
import { styled, keyframes } from "@mui/material";
import { PortfolioIcon } from "@/public/icons";

/**
 * Компонент лоадера для изображений
 * Отображается во время загрузки изображений проектов
 */
export const ImageLoader: FC = () => {
  return (
    <LoaderContainer>
      <LoaderIcon>
        <PortfolioIcon />
      </LoaderIcon>
      <ProgressText>Загрузка проекта...</ProgressText>
    </LoaderContainer>
  );
};

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

const LoaderContainer = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  zIndex: 1,
  padding: "40px 0",

  "@media (max-width: 1280px)": {
    justifyContent: "space-around",
  },
});

const LoaderIcon = styled("div")({
  width: "33%",
  height: "auto",
  animation: `${portfolio} 2s cubic-bezier(.76,.24,.88,.33) infinite`,
});

const ProgressText = styled("p")({
  margin: 0,
  fontSize: 14,
  color: "#495057",
  fontWeight: 500,
  fontFamily: "inherit",
  letterSpacing: "0.5px",
  textDecoration: "none",
});
