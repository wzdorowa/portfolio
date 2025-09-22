"use client";

import { FC, ReactNode } from "react";
import { useLoading } from "../../providers/LoadingProvider";
import { PageLoader } from "../PageLoader";
import { usePageLoading } from "../../hooks/usePageLoading";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

/**
 * Компонент-обертка для управления переходами между страницами
 * Показывает лоадер во время навигации
 */
export const PageTransitionWrapper: FC<PageTransitionWrapperProps> = ({ children }) => {
  const { isLoading } = useLoading();
  
  // Используем хук для автоматического управления лоадингом
  usePageLoading();

  return (
    <>
      {children}
      {isLoading && <PageLoader />}
    </>
  );
};
