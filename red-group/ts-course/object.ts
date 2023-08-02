type TypeUser = {
	name: string;
	age: number;
	address: string;
};

type TypeAddress = {
	city: string;
	country: string;
};

const user: TypeUser = {
	age: 24,
	name: "Max",
	address: "",
};

const address: TypeAddress = {
	city: "SPB",
	country: "Russia",
};

let common: TypeUser & TypeAddress;

common = {
	...user,
	...address,
};
