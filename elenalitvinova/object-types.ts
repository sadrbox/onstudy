// Объектные типы
/**
 * Object Types
 * 1.function
 *
 */

const obj: object = {
	user: 1,
};

// obj.user; //
obj.valueOf;
obj.toString;

const user2: {
	name: string;
	surname: string;
	height: number;
} = {
	name: "Testing text",
	surname: "Strelkov",
	height: 100,
};

user2.surname = "Testing text";
let tParam: string = user2.surname;

console.log(user2);
