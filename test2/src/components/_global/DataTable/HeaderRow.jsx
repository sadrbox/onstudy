"use client";
import React, { useEffect } from "react";
import style from "./DataTable.module.scss";
const HeaderRow = ({ props: { columns, isScrolling } }) => {
	return (
		<div
			id="header_row"
			className={
				isScrolling
					? [style.header_row, style.header_row__scrolling].join(" ")
					: style.header_row
			}
		>
			{columns.map((column, headerRowIdx) => (
				<div
					key={headerRowIdx}
					className={style.header_cell}
					style={column.cssprops}
				>
					{column.header}
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
