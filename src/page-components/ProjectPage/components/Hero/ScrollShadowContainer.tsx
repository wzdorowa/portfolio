import { FC, ReactNode, forwardRef } from "react";
import { styled } from "@mui/material";

interface ScrollShadowContainerProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

export const ScrollShadowContainer = forwardRef<HTMLDivElement, ScrollShadowContainerProps>(({
  children,
  className,
  backgroundColor,
}, ref) => (
  <StyledContainer ref={ref} className={className} $backgroundColor={backgroundColor}>
    {children}
  </StyledContainer>
));

ScrollShadowContainer.displayName = 'ScrollShadowContainer';

interface StyledContainerProps {
  $backgroundColor?: string;
}

const StyledContainer = styled("div")<StyledContainerProps>(
  ({ $backgroundColor }) => ({
    position: "relative",
    minHeight: 0, // Позволяет flex-элементу сжиматься
    height: "100%", // Занимает высоту родителя

    // Верхняя тень при скролле
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 20,
      background: $backgroundColor
        ? `linear-gradient(to bottom, ${$backgroundColor} 0%, transparent 100%)`
        : "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
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
      background: $backgroundColor
        ? `linear-gradient(to top, ${$backgroundColor} 0%, transparent 100%)`
        : "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
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
  })
);
