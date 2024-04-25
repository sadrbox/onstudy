import React from "react";
import style from "./Layout.module.scss";
const LayoutContent = ({ children }: { children: React.ReactNode }) => {
	return <div className={style.content}>{children}</div>;
};

export default LayoutContent;
