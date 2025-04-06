// сортировщик элементов для вывода их в гриде с количеством колонок cols и формированием
// столбцов флексбоксом с flex-direction: columns.

import { DEFAULT_COLS, DEFAULT_GAP, DEFAULT_ELEMENT_MIN_WIDTH } from './constants';

export const makeMasonryLayout = <T>(items: T[], cols: number = 1): T[][] => {
  const Q = cols < 1 ? 1 : cols;

  const columns: Record<number, T[]> = Object.fromEntries([...new Array(Q)].map((_, i) => [`${i}`, []]));

  items.forEach((item, i) => {
    if (Array.isArray(columns[i % Q])) columns[i % Q].push(item);
  });

  return Object.values(columns);
};

interface ColsControlOptions {
  itemsCount?: number;
  elementMinWidth?: number;
  gap?: number;
}

// контроллер кол-ва колонок в лейауте
export class ColsControl {
  private _cols: number = DEFAULT_COLS;

  private _elementMinWidth: number = DEFAULT_ELEMENT_MIN_WIDTH;

  private _gap: number = DEFAULT_GAP;

  private _itemsCount: number = 0;

  constructor(options?: ColsControlOptions) {
    const { elementMinWidth, gap, itemsCount } = options || {};

    if (elementMinWidth) {
      this._elementMinWidth = elementMinWidth;
    }

    if (gap) {
      this._gap = gap;
    }

    if (itemsCount) {
      this._itemsCount = itemsCount;
    }
  }

  set cols(cols: number) {
    this._cols = cols;
  }

  get cols() {
    return this._cols;
  }

  update(width: number) {
    if (this._itemsCount * (this._elementMinWidth + this._gap) < width + this._gap) {
      this._cols = this._itemsCount || 1;
      return;
    }

    this._cols = Math.floor((width + this._gap) / (this._elementMinWidth + this._gap));
  }
}
