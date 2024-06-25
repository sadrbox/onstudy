// import React, { useEffect } from "react";
import { FaSortAmountDown } from "react-icons/fa";

import Checkbox from "antd/es/checkbox/Checkbox";
import styles from "./DataGrid.module.scss";
import UICheckbox from "../UICheckbox";
import { ICol, IColumns, TJsonData, TStoreGridData } from "./types";
import { FC } from "react";
import { useAtom } from "jotai";
import { storeGridData } from "@/utils/store";
// const { header_row__scrolling, header_row, header_cell, field } = styles;

// interface HeaderProps {
// 	props: {
// 		columns: IColumns;
// 		isScrolling: boolean;
// 		toggleParentCheckbox: () => void;
// 		parentChecked: boolean;
// 	};
// 	sortActions: TSortFn;
// }
// type TSortFn = (columnID: string, orderBy?: string) => void;
// {
// 	props: { columns, isScrolling, toggleParentCheckbox, parentChecked },
// 	sortActions,
// }
const HeaderRow: FC = () => {
	const [gridData, setGridData] = useAtom<TStoreGridData>(storeGridData);
	const isScrolling = false;
	// const
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
			style={{ gridTemplateColumns: gridData?.columns.properties.width }}
		>
			{gridData?.columns.cols.map((column, headerRowIdx) => (
				<div key={headerRowIdx} className={styles.header_cell}>
					<div className={styles.field}>
						{column.type === "checkbox" ? (
							<UICheckbox
								onChange={() => console.log("onChange")}
								checked={false}
							/>
						) : (
							<>
								<>{column.title}</>
								<FaSortAmountDown
									style={{ marginLeft: 5 }}
									onClick={() =>
										gridData.order.action(column.id, gridData?.order.sortBy)
									}
								/>
							</>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
