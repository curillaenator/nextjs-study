import { useState, useRef, useCallback, type ElementType } from 'react';

import { useResizeObserver } from './useResizeObserver';
import { makeMasonryLayout, ColsControl } from '../utils';
import type { MasonryGridProps } from '../interfaces';

export const useMasonrizeItems = (props: MasonryGridProps) => {
  const { items = [], gap = 64, rerenderSpeed = 150, elementMinWidth = 420 } = props;

  const [masonryItems, setMasonryItems] = useState<ElementType[][]>([]);
  const colsControl = useRef(new ColsControl({ elementMinWidth, itemsCount: items.length }));

  const onSizeChange = useCallback(
    (element: Element) => {
      if (masonryRef.current) {
        masonryRef.current.style.setProperty('--mansonry-layout-gap', `${gap}px`);
      }

      colsControl.current.update(element.clientWidth);

      setMasonryItems(makeMasonryLayout(items, colsControl.current.cols));
    },
    [items, gap], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const { ref: masonryRef } = useResizeObserver(onSizeChange, { debounceDelay: rerenderSpeed });

  return {
    masonryRef,
    masonryItems,
    cols: colsControl.current.cols,
  };
};
