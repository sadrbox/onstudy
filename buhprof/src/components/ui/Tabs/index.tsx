"use client";
import { useEffect, useState } from "react";
import React from "react";
import { v4 as uuid } from "uuid";
import TabElement from "./TabElement";
import style from "./Tabs.module.scss";

import { ITab } from "@/types";

const Tabs = () => {
	const [tabs, setTabs] = useState<ITab[]>([]);
	useEffect(() => {
		const tabs = [
			{ uid: uuid(), title: "Панель управления" },
			{ uid: uuid(), title: "Номенклатура" },
			{ uid: uuid(), title: "Реализация товара и услуг" },
		];
		setTabs(tabs);
	}, []);

	return (
		<div className={style.tabs}>
			{tabs.map((tab) => (
				<TabElement key={tab.uid} tab={tab} />
			))}
		</div>
	);
};

export default Tabs;
