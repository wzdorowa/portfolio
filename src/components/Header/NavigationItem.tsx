import { FC } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Link from "next/link";
import { NavigationItem, NavigationItemProps } from "./types";

const ActiveIndicator = styled("div")<NavigationItemProps>(({ $isActive }) => ({
  width: 24,
  height: 2,
  backgroundColor: $isActive ? "#4e64d5" : "transparent",
  borderRadius: 1,
  transition: "background-color 0.2s ease",
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
  transition: "opacity 0.2s ease",

  "&:hover": {
    opacity: 0.7,
  },

  "&:focus": {
    outline: "2px solid #4e64d5",
    outlineOffset: "2px",
    borderRadius: "4px",
  },
});
