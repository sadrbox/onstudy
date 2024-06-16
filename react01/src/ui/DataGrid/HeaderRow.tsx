// import React, { useEffect } from "react";

import Checkbox from "antd/es/checkbox/Checkbox";
import styles from "./DataGrid.module.scss";
import UICheckbox from "../UICheckbox";
// const { header_row__scrolling, header_row, header_cell, field } = styles;

const HeaderRow = ({
	props: { columns, isScrolling, toggleParentCheckbox },
}) => {
	// const cls = isScrolling ? [header_row__scrolling] : [];
	// cls.push(header_row);
	// styles.push(columns.things);

	// const clss = true
	// 	? `${styles.header_row__scrolling} ${styles.header_row}`
	// 	: "";
	// const t = true;
	return (
		<div
			id="header_row"
			className={isScrolling ? styles.header_row__scrolling : styles.header_row}
			style={{ gridTemplateColumns: columns.properties.width }}
		>
			{columns.cols.map((column, headerRowIdx) => (
				<div key={headerRowIdx} className={styles.header_cell}>
					<div style={column?.field?.style} className={styles.field}>
						{column.type === "checkbox" ? (
							<UICheckbox onChange={() => toggleParentCheckbox()} />
						) : (
							column.title
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
