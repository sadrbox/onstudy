import React from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./components/types/types";

const getDataUsers: IUser = async () =>
	await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
		res.json()
	);

const App = () => {
	console.log(getDataUser);
	return (
		<div>
			<Card
				onClick={(num) => console.log(num)}
				variant={CardVariant.outline}
				width="200px"
				height="200px"
			>
				<button>Кнопка</button>
			</Card>
			<UserList users={getDataUsers} />
		</div>
	);
};

export default App;
