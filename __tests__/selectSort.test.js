import selectSort from '../src/sortings/selectSort.ts';

test('selectSort', () => {
  expect(selectSort([10, -1, 2, 5])).toEqual([-1, 2, 5, 10]);
  expect(selectSort([])).toEqual([]);
  expect(selectSort([-1, -100, -1000, 0])).toEqual([-1000, -100, -1, 0]);
});