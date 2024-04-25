"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./DataTable.module.scss";

const ContentRow = ({
	props: { columns, element, countRow, clickRow, selectTextInCell },
}) => {
	const parentId = `div[data-row="${countRow}"]`;
	return (
		<div
			data-row={countRow}
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
						{column.field === "id"
							? countRow.toString().padStart(6, "0")
							: element[column.field]}
					</div>
				</div>
			))}
		</div>
	);
};

export default ContentRow;
