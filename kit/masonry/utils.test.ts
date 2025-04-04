// import { DEFAULT_COLS, DEFAULT_ELEMENT_MIN_WIDTH, DEFAULT_GAP } from './constants';
// import { ColsControl, makeMasonryLayout } from './utils';

// describe('makeMasonryLayout', () => {
//   it('должен вернуть пустой массив, если элементы не предоставлены', () => {
//     expect(makeMasonryLayout([], 2)).toEqual([[], []]);
//   });

//   it('должен равномерно распределять элементы по колонкам', () => {
//     const items = [1, 2, 3, 4, 5];
//     const result = makeMasonryLayout(items, 2);
//     expect(result.length).toBe(2);
//     expect(result[0].length).toBe(3);
//     expect(result[1].length).toBe(2);
//   });

//   it('должен обрабатывать случай с одной колонкой', () => {
//     const items = [1, 2, 3, 4, 5];
//     const result = makeMasonryLayout(items, 1);
//     expect(result.length).toBe(1);
//     expect(result[0]).toEqual(items);
//   });

//   it('должен обрабатывать случай с нулевым количеством колонок, используя одну колонку по умолчанию', () => {
//     const items = [1, 2, 3];
//     const result = makeMasonryLayout(items, 0);
//     expect(result.length).toBe(1);
//     expect(result[0]).toEqual(items);
//   });
// });

// describe('ColsControl', () => {
//   it('должен инициализироваться со значениями по умолчанию', () => {
//     const control = new ColsControl();
//     expect(control.cols).toBe(DEFAULT_COLS);
//     expect(control['_elementMinWidth']).toBe(DEFAULT_ELEMENT_MIN_WIDTH);
//     expect(control['_gap']).toBe(DEFAULT_GAP);
//   });

//   it('должен инициализироваться с предоставленными опциями', () => {
//     const options = {
//       elementMinWidth: 200,
//       gap: 10,
//       itemsCount: 5,
//     };
//     const control = new ColsControl(options);
//     expect(control['_elementMinWidth']).toBe(200);
//     expect(control['_gap']).toBe(10);
//     expect(control['_itemsCount']).toBe(5);
//   });

//   it('должен корректно обновлять количество колонок в зависимости от ширины', () => {
//     const control = new ColsControl({ elementMinWidth: 420, gap: 64, itemsCount: 10 });

//     control.update(500);
//     expect(control.cols).toBe(1);

//     control.update(1000);
//     expect(control.cols).toBe(2);

//     control.update(1500);
//     expect(control.cols).toBe(3);
//   });

//   it('должен корректно устанавливать количество колонок через setter', () => {
//     const control = new ColsControl();
//     control.cols = 5;
//     expect(control.cols).toBe(5);
//   });
// });
