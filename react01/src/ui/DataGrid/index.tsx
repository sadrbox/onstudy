import React, { useEffect, useState, useRef, createElement } from "react";
import classes from "./DataGrid.module.scss";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
// import ContentRow from "./ContentRow";
import HeaderRow from "./HeaderRow";
// import FooterRow from "./FooterRow";
// import { TDataGridProps } from "./types";

const DataGrid = ({ columns, data }) => {
	// {
	// 	columns, element, rowId, clickRow, selectTextInCell;
	// }
	// const [isLoaded, setIsLoaded] = useState(true);
	// const [cellSelectedText, setCellSelectedText] = useState(null);
	// const [onFocusing, setOnFocusing] = useState({});

	// const [scrollTimeout, setScrollTimeout] = useState(null);
	// const [elementOfHeader, setElementOfHeader] = useState(null);

	const [isScrolling, setIsScrolling] = useState(false);

	// function clickRow(event, parentId) {
	// 	const row = event.target.closest(parentId);
	// 	const rowId = +row.dataset.row;
	// 	const prevRowId = !!onFocusing?.row
	// 		? +onFocusing.row.dataset.row
	// 		: undefined;
	// 	row.style.userSelect = "none";

	// 	// console.log(row);
	// 	const cell = event.target;
	// 	const cellId = +cell.dataset.cell;
	// 	const prevCellId = !!onFocusing?.cell
	// 		? +onFocusing.cell.dataset.cell
	// 		: undefined;

	// 	if (prevRowId) {
	// 		onFocusing.row.style.backgroundColor = "transparent";
	// 		onFocusing.cell.style.backgroundColor = "transparent";
	// 	}
	// 	row.style.backgroundColor = "#daf0ff";
	// 	cell.style.backgroundColor = "#b5e1ff";

	// 	if (!!rowId || !!cellId) {
	// 		setOnFocusing({ row, cell });
	// 	}
	// }

	return (
		<div className={classes.table}>
			<div className={classes.table_command_panel}>
				<button type="button" className={classes.btn}>
					{/* <FaRegSquarePlus style={{ fontSize: "1rem" }} /> */}
					<div style={{ marginLeft: "4px" }}>Добавить</div>
				</button>
			</div>
			<div className={classes.table_wrapper}>
				<div
					className={classes.table_container}
					// onScroll={scrollingTable}
				>
					<HeaderRow props={{ columns, isScrolling }} />
					<div className={classes.flex_table}>
						{/* {isLoaded &&
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
							})} */}
					</div>
					{/* <FooterRow props={{ columns, data }} /> */}
				</div>
			</div>
		</div>
	);
};

export default DataGrid;
