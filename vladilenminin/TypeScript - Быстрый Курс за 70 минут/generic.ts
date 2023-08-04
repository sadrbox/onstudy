//TypeScript - Generics

const arrayOfNumbers: Array<number> = [1, 1, 3, 5, 8, 13];
const arrayOfString: Array<string> = ["Hello", "Max"];

function reverse<T>(array: T[]): T[] {
	return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfString));
