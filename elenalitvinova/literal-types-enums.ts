// interfaces

interface UserInfo {
	phone?: string;
	email?: string;
}

interface User extends UserInfo {
	name: string;
	age?: string | number | "position";
	fullname: {
		firstname: string;
		readonly lastname: string;
		height?: number;
	};
}

type Customer = {
	user: User;
	bill: number;
};

const customer: Customer = {
	user: {
		phone: "1238172937",
		email: "mail@mail.ru",
		name: "Elena",
		fullname: {
			firstname: "Max",
			lastname: "Strelkov",
		},
	},
	bill: 1234,
};

interface FromServer {
	[name: number]: number | string;
}

const obj12: FromServer = {
	1: "ssdfsdf",
	2: 5678,
};

customer.user.fullname.firstname = "tewt";
