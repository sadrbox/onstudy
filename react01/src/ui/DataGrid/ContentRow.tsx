import React, { useState } from "react";

const ContentRow = ({ props: { columns, element, contentRowIdx } }) => {
	return (
		<div data-row={contentRowIdx} className="content-row">
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
