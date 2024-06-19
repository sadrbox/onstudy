// import React, { useEffect } from "react";
import { FaSortAmountDown } from "react-icons/fa";

import Checkbox from "antd/es/checkbox/Checkbox";
import styles from "./DataGrid.module.scss";
import UICheckbox from "../UICheckbox";
import { ICol, IColumns, TJsonData } from "./types";
import { FC } from "react";
// const { header_row__scrolling, header_row, header_cell, field } = styles;

interface HeaderProps {
	props: {
		columns: IColumns;
		isScrolling: boolean;
		toggleParentCheckbox: () => void;
		parentChecked: boolean;
	};
	sortActions: TSortFn;
}
type TSortFn = (columnID: string, orderBy?: string) => void;

const HeaderRow: FC<HeaderProps> = ({
	props: { columns, isScrolling, toggleParentCheckbox, parentChecked },
	sortActions,
}) => {
	// const cls = isScrolling ? [header_row__scrolling] : [];
	// cls.push(header_row);
	// styles.push(columns.things);

	// const clss = true
	// 	? `${styles.header_row__scrolling} ${styles.header_row}`
	// 	: "";
	// const t = true;
	// console.log(sortActions);
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
							<UICheckbox
								onChange={() => toggleParentCheckbox()}
								checked={parentChecked}
							/>
						) : (
							<span
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								{column.title}{" "}
								<FaSortAmountDown
									style={{ marginLeft: 5 }}
									onClick={() => sortActions(column.id)}
								/>
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
