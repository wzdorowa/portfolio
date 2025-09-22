import { useRef, useEffect, useState } from "react";

/**
 * Хук для определения, нужна ли полная высота контейнера
 */
export const useAdaptiveHeight = (dependency?: unknown) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [needsFullHeight, setNeedsFullHeight] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const checkHeight = () => {
      // Ждем, пока контент полностью загрузится
      setTimeout(() => {
        if (!element) return;
        
        const { scrollHeight, clientHeight } = element;
        
        // Если содержимое больше видимой области на 20px или более, нужна полная высота
        const threshold = 20;
        const needsFull = scrollHeight > clientHeight + threshold;
        
        setNeedsFullHeight(needsFull);
      }, 100); // Небольшая задержка для загрузки контента
    };

    // Проверяем начальное состояние
    checkHeight();

    // Слушаем изменения размера содержимого
    const resizeObserver = new ResizeObserver(checkHeight);
    resizeObserver.observe(element);

    // Также проверяем при изменении dependency
    const timeoutId = setTimeout(checkHeight, 200);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [dependency]);

  return {
    contentRef,
    needsFullHeight,
  };
};
