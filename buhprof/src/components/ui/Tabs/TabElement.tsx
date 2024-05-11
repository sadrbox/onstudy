import { ITab } from "@/types";
import React from "react";
import style from "./Tabs.module.scss";

type PropsType = {
	tab: ITab;
};

const TabElement = ({ tab }: PropsType) => {
	return (
		<div data-tabid={tab.uid} className={style.element}>
			<div className={style.title}>{tab.title}</div>
		</div>
	);
};
export default TabElement;
