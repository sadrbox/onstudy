"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./DataTable.module.scss";
import { getFormatValue } from "@/utils/functions";

const ContentRow = ({
	props: { columns, element, rowId, clickRow, selectTextInCell },
}) => {
	const parentId = `div[data-row="${rowId}"]`;
	return (
		<div
			data-row={rowId}
			className={style.content_row}
			// onDoubleClick={(e) => selectTextInCell(e)}
		>
			{columns.map((column, countCell) => (
				<div
					key={countCell}
					data-cell={countCell}
					style={column.cssCell}
					className={style.content_cell}
				>
					<div
						className={style.field}
						style={column.cssField}
						onClick={(e) => clickRow(e, parentId)}
					>
						{getFormatValue(element, column)}
						{/* {"test"} */}
					</div>
				</div>
			))}
		</div>
	);
};

export default ContentRow;
