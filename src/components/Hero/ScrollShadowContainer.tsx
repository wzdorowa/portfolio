import { FC, ReactNode } from "react";
import { styled } from "@mui/material";

interface ScrollShadowContainerProps {
  children: ReactNode;
  className?: string;
}

export const ScrollShadowContainer: FC<ScrollShadowContainerProps> = ({
  children,
  className,
}) => <StyledContainer className={className}>{children}</StyledContainer>;

const StyledContainer = styled("div")({
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
