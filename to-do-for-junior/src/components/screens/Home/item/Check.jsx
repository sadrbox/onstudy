import React from "react";
import { BsCheck } from "react-icons/bs";
import cn from "classnames";

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				"flex items-center justify-center border-2 rounded-full  w-6 h-6 mr-3 border-pink-400",
				{ "bg-pink-400": isCompleted }
			)}
		>
			{isCompleted && <BsCheck size={24} className="text-gray-900" />}
		</div>
	);
};

export default Check;
