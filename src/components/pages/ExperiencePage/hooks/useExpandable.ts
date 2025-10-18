"use client";

import { useState, useCallback } from "react";

export const useExpandable = (initialState = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const expand = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const collapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return {
    isExpanded,
    toggleExpanded,
    expand,
    collapse,
  };
};
