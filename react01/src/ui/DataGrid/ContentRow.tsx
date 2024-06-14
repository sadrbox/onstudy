import React, {
	useState,
	useRef,
	useEffect,
	FC,
	MouseEvent,
	HTMLAttributes,
} from "react";
import styles from "./DataGrid.module.scss";
import { getFormatValue, getTextAlignByColType } from "@/utils/functions";
import { IColumns, IProduct, ICol } from "./types";
// import { Checkbox } from "antd";
// import UICheckbox from "../UICheckbox/index";
import UICheckbox from "@/ui/UICheckbox/index";

interface IContentRowProps {
	props: {
		columns: IColumns;
		elementRow: IProduct;
		rowID: number;
		clickRow: (event: React.MouseEvent, rowID: number) => void;
		toggleCheckbox: (rowID: number) => void;
		isCheckedRow: (rowID: number) => boolean;
	};
}

const ContentRow: FC<IContentRowProps> = ({
	props: { columns, elementRow, rowID, clickRow, toggleCheckbox, isCheckedRow },
}) => {
	// useEffect(() => {
	// 	(() => {
	// 		console.log(checkedRows);
	// 	})();
	// }, [checkedRows]);
	// const parentId = `div[data-row="${idx}"]`;
	// console.log(item);
	return (
		<div
			data-row={rowID}
			className={styles.content_row}
			style={{ gridTemplateColumns: columns.properties.width }}
			// onDoubleClick={(e) => selectTextInCell(e)}
		>
			{columns.cols.map((column, colIdx) => (
				<div
					key={colIdx}
					data-cell={colIdx}
					// style={column.cssCell}
					className={styles.content_cell}
				>
					{column?.type === "checkbox" ? (
						<div className={styles.field} style={getTextAlignByColType(column)}>
							<UICheckbox
								onChange={() => toggleCheckbox(rowID)}
								checked={isCheckedRow(rowID)}
							/>
						</div>
					) : (
						<div
							className={styles.field}
							style={getTextAlignByColType(column)}
							onClick={(e) => clickRow(e, rowID)}
						>
							{getFormatValue(elementRow, column)}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ContentRow;
