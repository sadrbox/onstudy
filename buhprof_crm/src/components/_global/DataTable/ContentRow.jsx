"use client";
import React, { useState } from "react";
import style from "./DataTable.module.scss";

const ContentRow = ({
	props: { columns, element, contentRowIdx, focusOnCell, selectTextInCell },
}) => {
	return (
		<div
			data-row={contentRowIdx}
			className={style.content_row}
			onClick={(e) => focusOnCell(e)}
			onDoubleClick={(e) => selectTextInCell(e)}
		>
			{columns.map((column, cellIdx) => (
				<div
					key={cellIdx}
					style={column.cssprops}
					className={style.content_cell}
				>
					{column.field === "id"
						? contentRowIdx.toString().padStart(6, "0")
						: element[column.field]}
				</div>
			))}
		</div>
	);
};

export default ContentRow;
