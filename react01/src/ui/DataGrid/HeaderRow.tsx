// import React, { useEffect } from "react";

import classes from "./DataGrid.module.scss";
const { header_row__scrolling, header_row, header_cell, field } = classes;

const HeaderRow = ({ props: { columns, isScrolling } }) => {
	// const cls = isScrolling ? [header_row__scrolling] : [];
	// cls.push(header_row);
	// classes.push(columns.things);

	// const clss = true
	// 	? `${classes.header_row__scrolling} ${classes.header_row}`
	// 	: "";
	// const t = true;
	return (
		<div
			id="header_row"
			className={
				isScrolling ? classes.header_row__scrolling : classes.header_row
			}
			style={{ gridTemplateColumns: columns.properties.width }}
		>
			{columns.cols.map((column, headerRowIdx) => (
				<div
					key={headerRowIdx}
					className={classes.header_cell}
					style={column?.cssCell}
				>
					<div className={classes.field}>{column.title}</div>
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
