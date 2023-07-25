import React from "react";
import Check from "./Check";

import { BsTrash } from "react-icons/bs";
import cn from "classnames";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className="flex items-center justify-between mb-4 rounded-md bg-gray-800 py-4 px-4 w-full">
			<button
				onClick={() => changeTodo(todo._id)}
				className="flex items-center"
			>
				<Check isCompleted={todo.isCompleted} />
				<span className={cn({ "line-through": todo.isCompleted })}>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash
					size={22}
					className="text-gray-500 hover:text-pink-500 transition-colors ease-in-out duration-300"
				/>
			</button>
		</div>
	);
};

export default TodoItem;
