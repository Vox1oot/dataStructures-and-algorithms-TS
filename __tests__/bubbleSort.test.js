import bubbleSort from '../src/sortings/bubbleSort.ts';

test('bubbleSort', () => {
  expect(bubbleSort([10, -1, 2, 5])).toEqual([-1, 2, 5, 10]);
  expect(bubbleSort([])).toEqual([]);
});
