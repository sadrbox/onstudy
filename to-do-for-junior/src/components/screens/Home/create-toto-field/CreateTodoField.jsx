import React, { useState } from "react";

const CreateTodoField = ({ addTodo }) => {
	const [title, setTitle] = useState("");

	return (
		<div className="flex items-center justify-between mb-4 rounded-md bg-gray-800 py-4 px-4 w-full border-2 border-gray-700">
			<input
				className="bg-transparent outline-none rounded-sm border-none w-full"
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				onKeyDown={(e) => e.key === "Enter" && addTodo(title, setTitle)}
				placeholder="Add task"
			/>
		</div>
	);
};

export default CreateTodoField;
