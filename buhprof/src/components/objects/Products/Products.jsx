"use client";
import React, { useEffect, useState } from "react";
import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "@/components/objects/Products/ContentRow";

const DynamicTable = ({ data }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [cellSelectedText, setCellSelectedText] = useState(null);
	const [cellOnFocus, setCellOnFocus] = useState(null);
	const columns = [
		{
			name: "id",
			header: "№",
			cssprops: { flex: "0 0 80px" },
		},
		{
			name: "title",
			header: "Номенклатура",
			cssprops: { flex: 1 },
		},
		{
			name: "description",
			header: "Описание",
			cssprops: { flex: 2 },
		},
		// Добавьте данные для дополнительных колонок
	];

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
		<div className="table-container">
			<div className="flex-table">
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

export default DynamicTable;
