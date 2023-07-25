import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-toto-field/CreateTodoField";

const data = [
	{
		_id: "sdkfjw34",
		title: "Finish the essay collaboration",
		isCompleted: false,
	},
	{
		_id: "kjf9283",
		title: "Read next chapter of the book",
		isCompleted: false,
	},
	{
		_id: "kf9193f90",
		title: "Send the finished assignment",
		isCompleted: false,
	},
];

const Home = () => {
	const [todos, setTodos] = useState(data);

	const changeTodo = (id) => {
		const copy = [...todos];
		const current = copy.find((t) => t._id === id);
		current.isCompleted = !current.isCompleted;
		setTodos(copy);
	};

	const removeTodo = (id) => {
		setTodos([...todos].filter((t) => t._id !== id));
	};

	const addTodo = (title, setTitle) => {
		setTodos([
			{
				_id: new Date(),
				title,
				isCompleted: false,
			},
			...todos,
		]);
		setTitle("");
	};

	return (
		<div className="text-white w-4/5 mx-auto">
			<h1 className="text-2xl font-bold text-center mb-10">
				Todo for junior
			</h1>
			<CreateTodoField addTodo={addTodo} />
			<hr className="border-gray-600 mb-4" />
			{todos.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
		</div>
	);
};

export default Home;
