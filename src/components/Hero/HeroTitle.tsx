import { FC, ReactNode } from "react";
import { styled, Typography } from "@mui/material";
import { HERO_CONSTANTS } from "./constants";

interface HeroTitleProps {
  children: ReactNode;
}

export const HeroTitle: FC<HeroTitleProps> = ({ children }) => (
  <StyledTitle variant="h1">{children}</StyledTitle>
);

const StyledTitle = styled(Typography)({
  fontSize: HERO_CONSTANTS.TITLE_FONT_SIZE,
  lineHeight: HERO_CONSTANTS.TITLE_LINE_HEIGHT,
  flexShrink: 0, // Не сжимается
});
