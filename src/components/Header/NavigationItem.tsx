import { FC } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Link from "next/link";
import { NavigationItem, NavigationItemProps } from "./types";
import { HEADER_CONSTANTS } from "./constants";

const ActiveIndicator = styled("div")<NavigationItemProps>(({ $isActive }) => ({
  width: HEADER_CONSTANTS.INDICATOR_WIDTH,
  height: HEADER_CONSTANTS.INDICATOR_HEIGHT,
  backgroundColor: $isActive ? HEADER_CONSTANTS.ACTIVE_COLOR : "transparent",
  borderRadius: 1,
  transition: `background-color ${HEADER_CONSTANTS.TRANSITION_DURATION} ease`,
}));

/**
 * Компонент элемента навигации
 */
export const NavigationItemComponent: FC<{
  item: NavigationItem;
  isActive: boolean;
}> = ({ item, isActive }) => (
  <NavigationItemContainer $isActive={isActive}>
    <NavigationLink href={item.href}>
      <Typography variant="body1">{item.label}</Typography>
    </NavigationLink>
    <ActiveIndicator $isActive={isActive} />
  </NavigationItemContainer>
);

// Styled Components для NavigationItem
const NavigationItemContainer = styled("div")<NavigationItemProps>({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
});

const NavigationLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  transition: `opacity ${HEADER_CONSTANTS.TRANSITION_DURATION} ease`,

  "&:hover": {
    opacity: 0.7,
  },

  "&:focus": {
    outline: `2px solid ${HEADER_CONSTANTS.ACTIVE_COLOR}`,
    outlineOffset: "2px",
    borderRadius: "4px",
  },
});
