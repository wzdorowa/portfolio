import { useRef, useEffect, useState } from "react";

interface ScrollState {
  hasScrollTop: boolean;
  hasScrollBottom: boolean;
}

/**
 * Кастомный хук для отслеживания состояния скролла и показа теней
 */
export const useScrollShadow = (dependency?: unknown) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    hasScrollTop: false,
    hasScrollBottom: false,
  });

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;

      setScrollState({
        hasScrollTop: scrollTop > 0,
        hasScrollBottom: scrollTop < scrollHeight - clientHeight - 1,
      });
    };

    // Проверяем начальное состояние
    handleScroll();

    element.addEventListener("scroll", handleScroll);

    // Также слушаем изменения размера содержимого
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [dependency]);

  const scrollContainerClass = [
    scrollState.hasScrollTop && "has-scroll-top",
    scrollState.hasScrollBottom && "has-scroll-bottom",
  ]
    .filter(Boolean)
    .join(" ");

  return {
    scrollRef,
    scrollState,
    scrollContainerClass,
  };
};
