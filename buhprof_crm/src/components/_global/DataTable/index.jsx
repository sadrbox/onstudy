"use client";
import React, { useEffect, useState } from "react";
import style from "./DataTable.module.scss";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "@/components/_global/DataTable/ContentRow";
import HeaderRow from "./HeaderRow";

const DataTable = ({ columns, data }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [cellSelectedText, setCellSelectedText] = useState(null);
	const [cellOnFocus, setCellOnFocus] = useState(null);

	useEffect(() => {
		// console.log(columnConfig.id.cssprops);
		// Object.entries(columnConfig).map((column, index) => {
		// 	console.log(column[1].cssprops);
		// });
		// console.log(columnConfig.id.cssprops);
	}, []);

	function focusOnCell(event) {
		if (event.target.className === "content-row") return;

		if (cellSelectedText) {
			cellSelectedText.style.userSelect = "none";
		}

		const row = event.target.parentNode;
		const cell = event.target;
		setCellOnFocus({ row, cell });

		if (cellOnFocus !== null) {
			const prevRowId = cellOnFocus.row.dataset.row;
			const currRowId = row.dataset.row;
			cellOnFocus.cell.style.boxShadow = "none";
			cellOnFocus.cell.style.backgroundColor = "transparent";

			if (prevRowId !== currRowId) {
				cellOnFocus.row.style.backgroundColor = "transparent";
			} else {
				row.style.backgroundColor = "#daf0ff";
			}
		}

		row.style.backgroundColor = "#daf0ff";

		cell.style.boxShadow = "inset 0px 0px 1px 1px #47B5FF";
		cell.style.backgroundColor = "#b5e1ff";
	}

	function selectTextInCell(event) {
		if (cellSelectedText) {
			cellSelectedText.style.userSelect = "none";
		}
		const cell = event.target;
		cell.style.userSelect = "all";

		const range = document.createRange();
		range.selectNodeContents(cell);

		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		setCellSelectedText(cell);
	}

	return (
		<div className={style.table_container}>
			<div className={style.flex_table}>
				<HeaderRow props={{ columns }} />

				{isLoading &&
					data.map((element, contentRowIdx) => (
						<ContentRow
							key={contentRowIdx}
							props={{
								columns,
								element,
								contentRowIdx,
								focusOnCell,
								selectTextInCell,
							}}
						/>
					))}
			</div>
		</div>
	);
};

export default DataTable;
