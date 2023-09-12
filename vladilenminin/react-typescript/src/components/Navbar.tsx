import React from "react";

export const Navbar: React.FC = () => (
	<nav>
		<div className="nav-wrapper purple darken-2 px1">
			<a href="/" className="brand-logo">
				React + TypeScript
			</a>
			<ul className="right hide-on-med-and-down">
				<li>
					<a href="/">Списко дел</a>
				</li>
				<li>
					<a href="/">Информация</a>
				</li>
			</ul>
		</div>
	</nav>
);
