// src/useVirtualizer.js
import { useState, useEffect, useMemo } from "react";

export const useVirtualizer = (parentRef, count, itemHeight) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const element = parentRef.current;
    if (!element) return;

    const handleScroll = () => {
      setScrollTop(element.scrollTop);
    };

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [parentRef]);

  const totalHeight = count * itemHeight;

  const virtualItems = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const visibleCount = parentRef.current
      ? Math.ceil(parentRef.current.clientHeight / itemHeight)
      : 10; // Fallback inicial

    // Renderizamos un poco más arriba y abajo (buffer) para que no parpadee
    const buffer = 5;
    const startIndex = Math.max(0, start - buffer);
    const endIndex = Math.min(count, start + visibleCount + buffer);

    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      items.push({
        index: i,
        offsetTop: i * itemHeight,
      });
    }
    return items;
  }, [scrollTop, count, itemHeight]);

  return { virtualItems, totalHeight };
};
