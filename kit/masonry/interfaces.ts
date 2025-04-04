import { ElementType } from 'react';

export interface MasonryGridProps {
  /** набор элементов грида */
  items?: ElementType[];
  /** гап между элементами */
  gap?: number;
  /** милисекунды, скорость срабатывания ререндера (перерасчета лейаута) после ресайза родителя (делей дебаунса) */
  rerenderSpeed?: number;
  /** */
  elementMinWidth?: number;
}
