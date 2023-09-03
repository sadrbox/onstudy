import React, { FC, useState, useEffect } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";

interface ITodoItemPageParams {
	id: string;
}

const TodoItemPage: FC = () => {
	const [todo, setTodo] = useState<ITodo | null>(null);
	const params = useParams();

	console.log(params);
	console.log(todo);
	useEffect(() => {
		fetchTodo();
	}, []);

	async function fetchTodo() {
		try {
			const response = await axios.get<ITodo>(
				"https://jsonplaceholder.typicode.com/todos/" + params.id
			);
			setTodo(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<button>Back</button>
			<h1>{todo?.title}</h1>
		</div>
	);
};

export default TodoItemPage;
