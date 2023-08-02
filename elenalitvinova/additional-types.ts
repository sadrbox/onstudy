// Дополнительные типы

// Any
let test: any = 123;
test = "14123";
test.game = "room";
test.fun = () => {
	console.log(test.game);
};

// Unknown
let test2: unknown = 1234;
let strt2: string = test;

// void
function f(arg: string, next: string): void {
	// return 1;
}

const f2 = (arg: string, next: string): void => {
	// return 1;
};
