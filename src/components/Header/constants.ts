import { NavigationItem } from "./types";

/**
 * Константы для компонента Header
 */

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Обо мне" },
  { href: "/portfolio", label: "Что умею" },
  { href: "/education", label: "Где училась" },
  { href: "/experience", label: "Где работала" },
];

export const HEADER_CONSTANTS = {
  NAVIGATION_GAP: 24,
  INDICATOR_WIDTH: 24,
  INDICATOR_HEIGHT: 2,
  ACTIVE_COLOR: "#4e64d5",
  TRANSITION_DURATION: "0.2s",
} as const;
