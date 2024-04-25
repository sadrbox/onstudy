"use client";
import React, { useEffect } from "react";
import style from "./DataTable.module.scss";
const HeaderRow = ({ props: { columns, isScrolling } }) => {
	const classes = isScrolling ? [style.header_row__scrolling] : [];
	classes.push(style.header_row);
	// classes.push(columns.things);

	return (
		<div
			id="header_row"
			className={classes.join(" ")}
			style={{ gridTemplateColumns: columns.options.width }}
		>
			{columns.cols.map((column, headerRowIdx) => (
				<div
					key={headerRowIdx}
					className={style.header_cell}
					style={column.cssCell}
				>
					<div className={style.field}>{column.header}</div>
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
