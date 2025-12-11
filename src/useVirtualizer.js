import { useState, useEffect, useMemo } from 'react';

/**
 * Hook personalizado para Virtualización (Windowing).
 * Renderiza solo los elementos visibles en el viewport para optimizar rendimiento.
 * * @param {Object} ref - Referencia al contenedor con scroll (useRef)
 * @param {number} itemCount - Total de elementos en la lista
 * @param {number} itemHeight - Altura fija estimada de cada elemento (px)
 * @param {number} overscan - Cantidad de elementos extra a renderizar arriba/abajo (buffer)
 */
export const useVirtualizer = (ref, itemCount, itemHeight = 88, overscan = 5) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // Escuchar el evento de scroll y resize
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => requestAnimationFrame(() => setScrollTop(element.scrollTop));
    const handleResize = () => requestAnimationFrame(() => setContainerHeight(element.clientHeight));

    // Inicializar
    setContainerHeight(element.clientHeight);

    element.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      element.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  // Cálculos de rangos visibles
  const { items, totalHeight, startOffset } = useMemo(() => {
    // 1. Altura total simulada del contenedor
    const totalHeight = itemCount * itemHeight;

    // 2. Índices de inicio y fin basados en el scroll actual
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      itemCount,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );

    // 3. Generar array de índices virtuales para renderizar
    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      items.push({
        index: i,
        offsetTop: i * itemHeight, // Posición absoluta simulada
      });
    }

    return { items, totalHeight };
  }, [scrollTop, containerHeight, itemCount, itemHeight, overscan]);

  return { virtualItems: items, totalHeight };
};