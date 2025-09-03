/**
 * Типы для компонента Header
 */

export interface NavigationItem {
  href: string;
  label: string;
}

export interface NavigationItemProps {
  $isActive: boolean;
}
