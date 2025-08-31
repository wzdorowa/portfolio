import { FC, ReactNode, RefObject } from "react";
import { styled, Typography } from "@mui/material";
import { HERO_CONSTANTS } from "./constants";

interface ScrollableTextProps {
  children: ReactNode;
  scrollRef: RefObject<HTMLDivElement>;
}

export const ScrollableText: FC<ScrollableTextProps> = ({
  children,
  scrollRef,
}) => (
  <StyledText ref={scrollRef}>
    {typeof children === "string" ? (
      <Typography variant="body1">{children}</Typography>
    ) : (
      children
    )}
  </StyledText>
);

const StyledText = styled("div")({
  height: "100%", // Занимает всю высоту ScrollContainer
  width: "100%",
  overflowY: "auto",
  paddingRight: HERO_CONSTANTS.TEXT_PADDING_RIGHT,

  // Стили для скроллбара
  "&::-webkit-scrollbar": {
    width: HERO_CONSTANTS.SCROLLBAR.WIDTH,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: HERO_CONSTANTS.SCROLLBAR.THUMB_COLOR,
    borderRadius: HERO_CONSTANTS.SCROLLBAR.BORDER_RADIUS,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: HERO_CONSTANTS.SCROLLBAR.THUMB_HOVER_COLOR,
  },

  // Стили для вложенного контента
  "& .MuiTypography-body1": {
    margin: 0,
    lineHeight: HERO_CONSTANTS.TEXT_LINE_HEIGHT,
  },

  // Стили для сложного контента (ProjectPage)
  "& > div": {
    width: "100%",
  },
});
