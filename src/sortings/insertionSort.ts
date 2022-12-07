const numbers = [3, 20, 5, 1, 0, -1];

const insertionSort = (coll: Array<number>) => {
    for (let i = 1; i < coll.length; i += 1) {
        const current = coll[i];
        let j = i;

        /* пока j > 0 и предыдущее значение больше текущего */
        while (j > 0 && coll[j - 1] > current) {
            coll[j] = coll[j - 1];
            j -= 1;
        }
        coll[j] = current;
    }
    return coll;
};

export default insertionSort;