import React, { useEffect, useState, useRef, createElement } from "react";
import style from "./DataGrid.module.scss";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
// import ContentRow from "./ContentRow";
// import HeaderRow from "./HeaderRow";
// import FooterRow from "./FooterRow";
import { TDataGridProps } from "./types";

const DataGrid = ({ columns, data }: TDataGridProps) => {
	// {
	// 	columns, element, rowId, clickRow, selectTextInCell;
	// }
	const [isLoaded, setIsLoaded] = useState(true);
	const [cellSelectedText, setCellSelectedText] = useState(null);
	const [onFocusing, setOnFocusing] = useState({});

	const [scrollTimeout, setScrollTimeout] = useState(null);
	const [elementOfHeader, setElementOfHeader] = useState(null);

	const [isScrolling, setIsScrolling] = useState(false);

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

	function clickRow(event, parentId) {
		const row = event.target.closest(parentId);
		const rowId = +row.dataset.row;
		const prevRowId = !!onFocusing?.row
			? +onFocusing.row.dataset.row
			: undefined;
		row.style.userSelect = "none";

		// console.log(row);
		const cell = event.target;
		const cellId = +cell.dataset.cell;
		const prevCellId = !!onFocusing?.cell
			? +onFocusing.cell.dataset.cell
			: undefined;

		if (prevRowId) {
			onFocusing.row.style.backgroundColor = "transparent";
			onFocusing.cell.style.backgroundColor = "transparent";
		}
		row.style.backgroundColor = "#daf0ff";
		cell.style.backgroundColor = "#b5e1ff";

		if (!!rowId || !!cellId) {
			setOnFocusing({ row, cell });
		}
	}
	///////////////////////
	// function selectTextInCell(event) {
	// 	if (cellSelectedText) {
	// 		cellSelectedText.style.userSelect = "none";
	// 	}
	// 	const cell = event.target;
	// 	cell.style.userSelect = "all";

	// 	const range = document.createRange();
	// 	range.selectNodeContents(cell);

	// 	const selection = window.getSelection();
	// 	selection.removeAllRanges();
	// 	selection.addRange(range);
	// 	setCellSelectedText(cell);
	// }

	// function scrollingTable(event) {
	// 	// const table = tableRef.current;
	// 	if (!isScrolling) {
	// 		setIsScrolling(true);
	// 		if (scrollTimeout) {
	// 			clearTimeout(scrollTimeout);
	// 		}
	// 		setScrollTimeout(
	// 			setTimeout(() => {
	// 				setIsScrolling(false);
	// 			}, 1500)
	// 		);
	// 	}
	// }
	return (
		<div className={style.table}>
			<div className={style.table_command_panel}>
				<button type="button" className={style.btn}>
					<FaRegSquarePlus style={{ fontSize: "1rem" }} />
					<div style={{ marginLeft: "4px" }}>Добавить</div>
				</button>
			</div>
			<div className={style.table_wrapper}>
				<div
					className={style.table_container}
					onScroll={scrollingTable}
					// onContextMenu={contextMenu}
				>
					<HeaderRow props={{ columns, isScrolling }} />
					<div className={style.flex_table}>
						{isLoaded &&
							data.map((element, idx) => {
								const rowId = idx + 1;
								return (
									<ContentRow
										// useRef={contentRowRef}
										key={rowId}
										props={{
											columns,
											element,
											rowId,
											clickRow,
											selectTextInCell,
										}}
									/>
								);
							})}
					</div>
					{/* <FooterRow props={{ columns, data }} /> */}
				</div>
			</div>
		</div>
	);
};

export default DataGrid;
