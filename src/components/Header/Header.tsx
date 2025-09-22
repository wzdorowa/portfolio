"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material";
import { NAVIGATION_ITEMS } from "./constants";
import { NavigationItemComponent } from "./NavigationItem";
import { isActivePage, isExactMatch } from "./utils";
import { TextColor } from "../../types/common";

interface HeaderProps {
  textColor?: TextColor;
}

/**
 * Компонент заголовка
 * Отображает навигационное меню в верхней части страницы
 */
export const Header: FC<HeaderProps> = ({ textColor = "black" }) => {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <Navigation>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItemComponent
            key={item.href}
            item={item}
            isActive={isActivePage(pathname, item.href)}
            isExactMatch={isExactMatch(pathname, item.href)}
            textColor={textColor}
          />
        ))}
      </Navigation>
    </HeaderContainer>
  );
};
// Styled Components для Header
const HeaderContainer = styled("div")({
  display: "flex",
});

const Navigation = styled("nav")({
  display: "flex",
  gap: 24,

  "@media (max-width: 768px)": {
    gap: 16,
  },
  "@media (max-width: 480px)": {
    gap: 12,
  },
});
