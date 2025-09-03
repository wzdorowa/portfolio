/**
 * Утилиты для компонента Header
 */

/**
 * Проверяет, является ли страница активной
 * @param pathname - текущий путь
 * @param href - путь для проверки
 * @returns true, если страница активна
 */
export const isActivePage = (pathname: string, href: string): boolean => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

/**
 * Проверяет, точно ли совпадает текущий путь с href
 * @param pathname - текущий путь
 * @param href - путь для проверки
 * @returns true, если пути точно совпадают
 */
export const isExactMatch = (pathname: string, href: string): boolean => {
  return pathname === href;
};
