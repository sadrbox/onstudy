import React, { useState, useRef, useEffect, FC, MouseEvent } from "react";
import styles from "./DataGrid.module.scss";
import { getFormatValue, getTextAlignByColType } from "@/utils/functions";
import { IColumns, IProduct, ICol } from "./types";

interface IContentRowProps {
	props: {
		columns: IColumns;
		elementRow: IProduct;
		idx: number;
		clickRow: (event: React.MouseEvent, idx: number) => void;
	};
}

const ContentRow: FC<IContentRowProps> = ({
	props: { columns, elementRow, idx, clickRow },
}) => {
	// const parentId = `div[data-row="${idx}"]`;
	// console.log(item);
	return (
		<div
			data-row={idx}
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
					<div
						className={styles.field}
						style={getTextAlignByColType(column)}
						onClick={(e) => clickRow(e, idx)}
					>
						{/* {tcva(column)} */}
						{getFormatValue(elementRow, column)}
					</div>
				</div>
			))}
		</div>
	);
};

export default ContentRow;
