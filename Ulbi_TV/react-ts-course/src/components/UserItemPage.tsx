import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IUserItemPageParams {
	id: string;
}

const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams();
	const navigate = useNavigate();

	// console.log(params);
	// console.log(user);
	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				"https://jsonplaceholder.typicode.com/users/" + params.id
			);
			setUser(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<button onClick={() => navigate("/users")}>Back</button>
			<h1>{user?.name}</h1>
			<h2>{user?.username}</h2>
		</div>
	);
};

export default UserItemPage;
