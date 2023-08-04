// TypeScript
// Types

// Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number, Interger
const int: number = 123;
const float: number = 4.2;
const num: number = 3e10;

// String
const message: string = "Hello TypeScript";

// Array
const numberArray1: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const words: string[] = ["Hello", "TypeScript"];

// Tuple
const contact: [string, number] = ["Vladilen", 1234567];

// Any
let variable: any = 42;
variable = "New string";

// Functions
function sayMyName(name: string): void {
	console.log(name);
}
//sayMyName("Хайзенберг");

// Never
function throwError(message: string): never {
	throw new Error(message);
}

function infinite(): never {
	while (true) {}
}

// Types
type Login = string;
let login: Login = "adimn";
login = "guest";

type ID = string | number | [];
const id1: ID = 1234;
const id2: ID = "1234";
const id3: ID = [];

type SomeType = string | null | undefined;
