<<<<<<< HEAD
import React, { useState } from "react";

const ContentRow = ({ props: { columns, element, contentRowIdx } }) => {
	return (
		<div data-row={contentRowIdx} className="content-row">
			{columns.map((column, cellIdx) => (
				<div key={cellIdx} style={column.cssprops} className="content-cell">
					{column.name === "id"
						? element[column.name].toString().padStart(6, "0")
						: element[column.name]}
=======
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
>>>>>>> 203a4c73bf3580f6e5e77177e182645d8670e225
				</div>
			))}
		</div>
	);
};

export default ContentRow;
