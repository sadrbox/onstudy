"use client";
import React, { useEffect, useState, useRef } from "react";
import style from "./DataTable.module.scss";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "@/components/_global/DataTable/ContentRow";
import HeaderRow from "./HeaderRow";

const DataTable = ({ columns, data }) => {
	const [isLoaded, setIsLoaded] = useState(true);
	const [cellSelectedText, setCellSelectedText] = useState(null);
	const [onFocusing, setOnFocusing] = useState(null);

	const [scrollTimeout, setScrollTimeout] = useState(null);
	const [elementOfHeader, setElementOfHeader] = useState(null);
	// const tableRef = useRef(null);
	// const contentRowRef = useRef(null);

	const [isScrolling, setIsScrolling] = useState(false);

	function clickRow(event) {
		// if (!focusRow) {
		// 	// event.target.row.target.contains("content_row");
		// }
		const row = event.target.parentNode;
		const cell = event.target;

		if (!onFocusing) {
			setOnFocusing({ row, cell });
		}
		// console.log(row, cellParentRow);
		if (row === cellParentRow) {
			row.style.userSelect = "none";

			row.style.backgroundColor = "#daf0ff";

			cell.style.boxShadow = "inset 0px 0px 1px 1px #47B5FF";
			cell.style.backgroundColor = "#b5e1ff";

			if (onFocusing) {
				onFocusing.cell.style.boxShadow = "none";
				onFocusing.cell.style.backgroundColor = "transparent";

				const prevRow = onFocusing.row;

				if (row === prevRow) {
					console.log(row, prevRow);
					row.style.backgroundColor = "#daf0ff";
				} else {
					// prevRow.style.backgroundColor = "transparent";
					console.log(prevRow);
				}
			}
		}
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

	function scrollingTable(event) {
		// const table = tableRef.current;
		if (!isScrolling) {
			setIsScrolling(true);
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
			}
			setScrollTimeout(
				setTimeout(() => {
					setIsScrolling(false);
				}, 1500)
			);
		}
	}

	return (
		<div
			className={style.table_container}
			onScroll={scrollingTable}
			// ref={tableRef}
		>
			<HeaderRow props={{ columns, isScrolling }} />
			<div className={style.flex_table}>
				{isLoaded &&
					data.map((element, contentRowIdx) => {
						const countRow = contentRowIdx + 1;
						return (
							<ContentRow
								useRef={contentRowRef}
								key={countRow}
								props={{
									columns,
									element,
									countRow,
									clickRow,
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
