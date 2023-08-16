//Functions

const createPassword = (name: string = "Max", age: number | string = 20) =>
	`${name}${age}`;

const createSkills = (name, ...skills) =>
	`${name}, my skills are ${skills.join()}`;
