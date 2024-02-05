import React from "react";

const HeaderRow = ({ props: { columns } }) => {
	return (
		<div className="header-row">
			{columns.map((column, headerRowIdx) => (
				<div key={headerRowIdx} className="header-cell" style={column.cssprops}>
					{column.header}
				</div>
			))}
		</div>
	);
};

export default HeaderRow;
