// Массив типы

const arr: number[] = [1, 2, 3, 4, 5];
const ar2: number[][] = [[23]];
const ar3: (number | string | any)[] = [123, "23423", null];

arr.map((item) => item + 1);

// tuples

const coordinates: [number, number, number] = [60.1234, 432.235234, 342.232134];
