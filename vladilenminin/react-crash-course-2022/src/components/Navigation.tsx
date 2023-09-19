import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white">
			<span className="font-bold">React 2022</span>
			<span>
				<Link to="/">Products</Link>&nbsp;&nbsp;
				<Link to="/about">About</Link>
			</span>
		</nav>
	);
};

export default Navigation;
