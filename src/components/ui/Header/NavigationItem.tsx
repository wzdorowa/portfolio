import { FC } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavigationItem, NavigationItemProps } from "./types";
import { TextColor } from "@/src/types/common";

/**
 * Компонент элемента навигации
 */
export const NavigationItemComponent: FC<{
  item: NavigationItem;
  isActive: boolean;
  isExactMatch: boolean;
  textColor?: TextColor;
}> = ({ item, isActive, isExactMatch, textColor = "black" }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isExactMatch) {
      router.push(item.href);
    }
  };

  return (
    <NavigationItemContainer $isActive={isActive}>
      {isExactMatch ? (
        <NavigationText>
          <Typography variant="body1">{item.label}</Typography>
        </NavigationText>
      ) : (
        <NavigationLink
          $textColor={textColor}
          href={item.href}
          onClick={handleClick}
        >
          <Typography variant="body1">{item.label}</Typography>
        </NavigationLink>
      )}
      <ActiveIndicator $isActive={isActive} $textColor={textColor} />
    </NavigationItemContainer>
  );
};

// Styled Components для NavigationItem
const NavigationItemContainer = styled("div")<NavigationItemProps>({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,
});

const NavigationLink = styled(Link)<{ $textColor?: TextColor }>(
  ({ $textColor }) => ({
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.2s ease",

    "&:hover": {
      color: $textColor === "white" ? "#ffffff75" : "#4e64d5",
    },
  })
);

const NavigationText = styled("span")({
  color: "inherit",
  cursor: "default",
});

const ActiveIndicator = styled("div")<
  NavigationItemProps & { $textColor?: TextColor }
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
