const selectSort = (coll: Array<number>) => {
  const result: Array<number> = [];

  for (let i: number = 0; i < coll.length; i += 1) {
    let min = coll[i];
    for (let j: number = i + 1; j < coll.length; j += 1) {
      let next = coll[j];

      if (next < min) {
        const temp = coll[j]; // сохраняем в temp минимум
        coll[j] = min;
        min = temp;
      }
    }
    result.push(min);
  }
  return result;
}

export default selectSort;