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
import { Checkbox } from "antd";

interface IContentRowProps {
	props: {
		columns: IColumns;
		elementRow: IProduct;
		rowID: number;
		clickRow: (event: React.MouseEvent, rowID: number) => void;
		clickOnCheckbox: (event: React.MouseEvent, rowID: number) => void;
	};
}

const ContentRow: FC<IContentRowProps> = ({
	props: { columns, elementRow, rowID, clickRow, clickOnCheckbox },
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
							<Checkbox
								// ref={checkboxRef}
								onClick={(event) => clickOnCheckbox(event, rowID)}
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