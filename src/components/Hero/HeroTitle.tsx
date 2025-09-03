import { FC, ReactNode } from "react";
import { styled, Typography } from "@mui/material";

interface HeroTitleProps {
  children: ReactNode;
}

export const HeroTitle: FC<HeroTitleProps> = ({ children }) => (
  <StyledTitle variant="h1">{children}</StyledTitle>
);

const StyledTitle = styled(Typography)({
  fontSize: "4.5rem",
  lineHeight: 1.15,
  flexShrink: 0, // Не сжимается
  color: "inherit",
});
