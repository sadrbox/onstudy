import React, { useEffect, useState, useRef, createElement } from "react";
import styles from "./DataGrid.module.scss";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "./ContentRow";
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
		<div className={styles.table}>
			<div className={styles.table_command_panel}>
				<button type="button" className={styles.btn}>
					{/* <FaRegSquarePlus style={{ fontSize: "1rem" }} /> */}
					<div style={{ marginLeft: "4px" }}>Добавить</div>
				</button>
			</div>
			<div className={styles.table_wrapper}>
				<div
					className={styles.table_container}
					// onScroll={scrollingTable}
				>
					<HeaderRow props={{ columns, isScrolling }} />
					<div className={styles.flex_table}>
						{data.map((element, idx) => {
							const rowId = idx + 1;
							return (
								<ContentRow
									// useRef={contentRowRef}
									key={rowId}
									props={{
										columns,
										element,
										rowId,
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
