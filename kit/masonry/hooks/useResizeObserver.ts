import { useRef, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

export interface ResizeObserverOptions {
  debounceDelay?: number;
}

export const useResizeObserver = <T extends HTMLElement = HTMLDivElement>(
  onSizeChange: (targetElement: Element) => void,
  options?: ResizeObserverOptions,
) => {
  const { debounceDelay = 150 } = { ...options };

  const ref = useRef<T>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSizeChangeDebounced = useCallback(debounce(onSizeChange, debounceDelay), [onSizeChange]);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      onSizeChangeDebounced(entry.target);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onSizeChangeDebounced]);

  return {
    ref,
  };
};
