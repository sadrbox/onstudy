import React from "react";
import style from "./Layout.module.scss";
const LayoutMain = ({ children }: { children: React.ReactNode }) => {
	return <div className={style.main}>{children}</div>;
};

export default LayoutMain;
