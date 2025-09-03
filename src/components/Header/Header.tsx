"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material";
import { NAVIGATION_ITEMS, HEADER_CONSTANTS } from "./constants";
import { NavigationItemComponent } from "./NavigationItem";
import { isActivePage } from "./utils";

/**
 * Компонент заголовка
 * Отображает навигационное меню в верхней части страницы
 */
export const Header: FC = () => {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <Navigation>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItemComponent
            key={item.href}
            item={item}
            isActive={isActivePage(pathname, item.href)}
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
  gap: HEADER_CONSTANTS.NAVIGATION_GAP,
});
