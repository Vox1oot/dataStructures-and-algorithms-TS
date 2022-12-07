import insertionSort from '../src/sortings/insertionSort.ts';

test('insertionSort', () => {
    expect(insertionSort([10, -1, 2, 5])).toEqual([-1, 2, 5, 10]);
    expect(insertionSort([-100, 1000, 0, 5])).toEqual([-100, 0, 5, 1000]);
    expect(insertionSort([])).toEqual([]);
  });