import { FC } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Link from "next/link";
import { NavigationItem, NavigationItemProps } from "./types";

/**
 * Компонент элемента навигации
 */
export const NavigationItemComponent: FC<{
  item: NavigationItem;
  isActive: boolean;
  isExactMatch: boolean;
  textColor?: "white" | "black";
}> = ({ item, isActive, isExactMatch, textColor = "black" }) => (
  <NavigationItemContainer $isActive={isActive}>
    {isExactMatch ? (
      <NavigationText>
        <Typography variant="body1">{item.label}</Typography>
      </NavigationText>
    ) : (
      <NavigationLink href={item.href}>
        <Typography variant="body1">{item.label}</Typography>
      </NavigationLink>
    )}
    <ActiveIndicator $isActive={isActive} $textColor={textColor} />
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
  transition: "color 0.2s ease",

  "&:hover": {
    color: "#4e64d5",
  },
});

const NavigationText = styled("span")({
  color: "inherit",
  cursor: "default",
});

const ActiveIndicator = styled("div")<
  NavigationItemProps & { $textColor?: "white" | "black" }
>(({ $isActive, $textColor }) => ({
  width: 24,
  height: 2,
  backgroundColor: $isActive
    ? $textColor === "white"
      ? "white"
      : "#4e64d5"
    : "transparent",
  borderRadius: 1,
  transition: "background-color 0.2s ease",
}));
