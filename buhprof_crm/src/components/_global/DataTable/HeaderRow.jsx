import React from "react";
import style from "./DataTable.module.scss";
const HeaderRow = ({ props: { columns } }) => {
	return (
		<div className={style.header_row}>
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
