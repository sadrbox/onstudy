"use client";
import React, { useEffect, useState, useRef, createElement } from "react";
import style from "./DataTable.module.scss";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "@/components/_global/DataTable/ContentRow";
import HeaderRow from "./HeaderRow";

const DataTable = ({ columns, data }) => {
	const [isLoaded, setIsLoaded] = useState(true);
	const [cellSelectedText, setCellSelectedText] = useState(null);
	const [onFocusing, setOnFocusing] = useState({});

	const [scrollTimeout, setScrollTimeout] = useState(null);
	const [elementOfHeader, setElementOfHeader] = useState(null);

	const [isScrolling, setIsScrolling] = useState(false);
	// const tableRef = useRef(null);

	// useEffect(() => {
	// 	const table = tableRef.current;

	// 	table.addEventListener("contextmenu", (event) => {
	// 		contextMenu(event);
	// 	});

	// 	// console.log(tableRef.current);
	// }, []);

	function contextMenu(event) {
		event.preventDefault();
		clickRow(event);
		let x = event.clientX;
		let y = event.clientY;
		console.log({ x, y });

		const el = document.createElement("div");
		el.style.left = event.clientX + "px";
		el.style.top = event.clientY + "px";
		el.style.position = "absolute";
		el.style.height = "150px";
		el.style.width = "80px";
		el.style.backgroundColor = "#ccc";
		el.textContent = "test";
		el.classList.add("context_menu");
		document.body.appendChild(el);
	}

	function clickRow(event) {
		const row = event.target.parentNode;
		const cell = event.target;

		const rowId = +row.dataset.row;
		const cellId = +cell.dataset.cell;

		if (!!rowId || !!cellId) {
			row.style.userSelect = "none";

			// console.log({ rowId, cellId });
			row.style.backgroundColor = "#daf0ff";
			cell.style.boxShadow = "inset 0px 0px 1px 1px #47B5FF";
			cell.style.backgroundColor = "#b5e1ff";

			// console.log(onFocusing?.row);
			if (onFocusing?.row) {
				const prevRowId = onFocusing.row.dataset.row;
				const prevCellId = onFocusing.cell.dataset.cell;
				// console.log({ rowId, prevRowId });
				if (+rowId !== +prevRowId) {
					onFocusing.row.style.backgroundColor = "transparent";
					onFocusing.cell.style.boxShadow = "none";
					onFocusing.cell.style.backgroundColor = "transparent";
				}
				if (+rowId !== prevRowId && +cellId !== +prevCellId) {
					onFocusing.cell.style.boxShadow = "none";
					onFocusing.cell.style.backgroundColor = "transparent";
				}
			}
			// console.log({ row, cell });
			setOnFocusing({ row, cell });
			// console.log(onFocusing);
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
			onContextMenu={contextMenu}
		>
			<HeaderRow props={{ columns, isScrolling }} />
			<div className={style.flex_table}>
				{isLoaded &&
					data.map((element, contentRowIdx) => {
						const countRow = contentRowIdx + 1;
						return (
							<ContentRow
								// useRef={contentRowRef}
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
