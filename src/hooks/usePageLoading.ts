"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "../providers/LoadingProvider";

/**
 * Хук для управления лоадингом при переходах между страницами
 */
export const usePageLoading = () => {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Показываем лоадер при смене пути (кроме первой загрузки)
    if (!isInitialLoad) {
      setIsLoading(true);
    }

    // Функция для скрытия лоадера
    const hideLoader = () => {
      // Ждем следующий кадр, чтобы убедиться, что React завершил рендеринг
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsLoading(false);
          setIsInitialLoad(false);
        }, 100); // Минимальная задержка для плавности
      });
    };

    // Если документ уже загружен
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      // Слушаем событие полной загрузки
      const handleLoad = () => hideLoader();
      window.addEventListener('load', handleLoad);
      
      // Также слушаем готовность DOM
      const handleDOMContentLoaded = () => {
        if (document.readyState === 'complete') {
          hideLoader();
        }
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
      } else {
        hideLoader();
      }

      return () => {
        window.removeEventListener('load', handleLoad);
        document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      };
    }
  }, [pathname, setIsLoading, isInitialLoad]);
};
