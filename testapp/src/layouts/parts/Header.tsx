import React from "react";
import { SlLogin } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
type Props = {};

const Header = (props: Props) => {
	return (
		<header className="header grid grid-flow-col  items-center">
			<div className="header__nav flex items-center">
				<div className="header__logo p-3">
					<CgMenuGridO size={25} />
				</div>
				<ul className="header__nav_links flex">
					<li>Панель функций</li>
					<li>Документы</li>
					<li>Справочники</li>
					<li>Отчеты</li>
				</ul>
			</div>
			<ul className="header__user_links  flex">
				<li className="bg-zinc-400 p-1 rounded-sm">
					<SlLogin size={25} />
				</li>
			</ul>
		</header>
	);
};

export default Header;
