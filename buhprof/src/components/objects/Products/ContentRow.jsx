"use client";
import React, { useState } from "react";

const ContentRow = ({
	props: { columns, element, contentRowIdx, focusOnCell, selectTextInCell },
}) => {
	return (
		<div
			data-row={contentRowIdx}
			className="content-row"
			onClick={(e) => focusOnCell(e)}
			onDoubleClick={(e) => selectTextInCell(e)}
		>
			{columns.map((column, cellIdx) => (
				<div key={cellIdx} style={column.cssprops} className="content-cell">
					{column.name === "id"
						? element[column.name].toString().padStart(6, "0")
						: element[column.name]}
				</div>
			))}
		</div>
	);
};

export default ContentRow;
