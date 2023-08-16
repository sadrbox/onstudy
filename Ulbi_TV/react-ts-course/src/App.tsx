import React from "react";

import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./components/types/types";

// const getDataUsers = async () =>
// 	await fetch("https://jsonplaceholder.typicode.com/users")
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));

const App = () => {
	const users: string[] = [];
	return (
		<div>
			<Card variant={CardVariant.outline} width="200px" height="200px">
				<button>Кнопка</button>
			</Card>
			<UserList users={users} />
		</div>
	);
};

export default App;
