"use client";
import React, { useEffect, useState } from "react";
import style from "./DataTable.module.scss";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "@/components/_global/DataTable/ContentRow";
import HeaderRow from "./HeaderRow";

const DataTable = ({ columns, data }) => {
	const [isLoaded, setIsLoaded] = useState(true);
	const [cellSelectedText, setCellSelectedText] = useState(null);
	const [cellOnFocus, setCellOnFocus] = useState(null);
	const [isScrolling, setIsScrolling] = useState(false);
	const [scrollTimeout, setScrollTimeout] = useState(null);
	const [elementOfHeader, setElementOfHeader] = useState(null);

	useEffect(() => {
		// console.log(columnConfig.id.cssprops);
		// Object.entries(columnConfig).map((column, index) => {
		// 	console.log(column[1].cssprops);
		// });
		// console.log(columnConfig.id.cssprops);
	}, []);

	function focusOnCell(event) {
		if (event.target.className === "content_row") return;

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

	///////////////////////
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

	///////////
	// useEffect(() => {
	// 	const headerRow = document.querySelector(".header_row");
	// 	console.log(headerRow);
	// 	setElementOfHeader(headerRow);
	// }, []);

	function scrollingTable(event) {
		const headerRow = document.querySelector("#header_row");
		// const headerRow = elementOfHeader;
		// console.log(elementOfHeader);
		if (headerRow) {
			setIsScrolling(true);
			// console.log(headerRow);
			// headerRow.classList.add("header_row__scrolling");
			if (scrollTimeout !== null) {
				clearTimeout(scrollTimeout);
			}

			// const currentScrollTop = event.target.scrollTop;
			setScrollTimeout(
				setTimeout(() => {
					setIsScrolling(false);
					// console.log("Scrolling stoped");
					// headerRow.classList.remove("header_row__scrolling");
				}, 1000)
			);
		}
	}

	return (
		<div className={style.table_container} onScroll={scrollingTable}>
			<HeaderRow props={{ columns, isScrolling }} />
			<div className={style.flex_table}>
				{isLoaded &&
					data.map((element, contentRowIdx) => {
						const countRow = contentRowIdx + 1;
						return (
							<ContentRow
								key={countRow}
								props={{
									columns,
									element,
									countRow,
									focusOnCell,
									selectTextInCell,
								}}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default DataTable;
