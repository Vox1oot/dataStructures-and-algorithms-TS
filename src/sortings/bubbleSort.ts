/* Алгоритм выполняется за время O(n2) */

const bubbleSort = (coll: Array<number>) => {
  for (let i: number = coll.length - 1; i > 1; i -= 1 ) {
    for (let j: number = 0; j < i; j += 1) {
      if (coll[j] > coll[j + 1]) {
        const swap = coll[j + 1];
        coll[j + 1] = coll[j];
        coll[j] = swap;
      }
    }
  }
  return coll;
};

export default bubbleSort;