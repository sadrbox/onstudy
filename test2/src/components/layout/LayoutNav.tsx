import React from "react";
import style from "./Layout.module.scss";
import { BsJournalText } from "react-icons/bs";
import { FaSolarPanel } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

type Props = {};

const LayoutNav = () => {
	return (
		<div className={style.nav}>
			<ul>
				<li>
					<FaSolarPanel size={30} />
				</li>
				<li>
					<IoCalendarOutline size={30} />
				</li>
				<li>
					<BsJournalText size={30} />
				</li>
				<li>
					<FaSolarPanel size={30} />
				</li>
				<li>
					<IoCalendarOutline size={30} />
				</li>
				<li>
					<BsJournalText size={30} />
				</li>
			</ul>
		</div>
	);
};

export default LayoutNav;
