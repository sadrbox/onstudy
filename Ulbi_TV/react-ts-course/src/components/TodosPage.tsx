import React, { useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>(
				"https://jsonplaceholder.typicode.com/todos"
			);
			setTodos(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<List
				items={todos}
				renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	);
};

export default TodosPage;
