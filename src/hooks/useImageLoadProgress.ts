"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Хук для отслеживания загрузки изображения
 */
export const useImageLoadProgress = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);

    const img = new Image();
    imageRef.current = img;

    const handleLoad = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      setHasError(true);
      setIsLoaded(true);
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
        imageRef.current.onerror = null;
      }
    };
  }, [src]);

  return {
    isLoaded,
    hasError,
  };
};
