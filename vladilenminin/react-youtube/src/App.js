import React from "react";
import TodoList from "./Todo/TodoList";
import TodoItem from "./Todo/TodoItem";

function App() {
	return (
		<div className="wrapper">
			<h1>React Tutorial</h1>
			<TodoList />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</div>
	);
}

export default App;
