import React, {
	FC,
	useEffect,
	useState,
	useRef,
	createElement,
	ReactNode,
	ReactElement,
	MouseEventHandler,
} from "react";
import styles from "./DataGrid.module.scss";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import HeaderRow from "@/components/objects/Products/HeaderRow";
import ContentRow from "./ContentRow";
import HeaderRow from "./HeaderRow";
// import FooterRow from "./FooterRow";
import {
	ContentRowProps,
	IColumns,
	IContentRowProps,
	IElementData,
	IProducts,
	TDataGridProps,
	TJsonData,
} from "./types";

interface IDataGridProps {
	columns: IColumns;
	data: IProducts | null;
	isLoading: boolean;
}
interface IFocusRow {
	row: HTMLElement | null;
	cell: HTMLElement | null;
}

const DataGrid: FC<IDataGridProps> = ({ columns, data, isLoading }) => {
	// console.log(data);
	const [checkedRows, setCheckedRows] = useState([]);
	const [onFocusRow, setFocusRow] = useState<IFocusRow>({
		row: null,
		cell: null,
	});
	// const contentRowRef = useRef();

	const [isScrolling, setIsScrolling] = useState(false);

	function clickRow(event: React.MouseEvent, idx: number): void {
		console.log(idx);
		const parentId = `div[data-row="${idx}"]`;
		const rowTarget = event.target as HTMLElement;
		const row = rowTarget.closest<HTMLElement>(parentId);
		const rowDataset = row.dataset;
		const rowId = +rowDataset.row;
		const prevRowId = onFocusRow?.row ? +onFocusRow.row.dataset.row : undefined;
		// row.style.userSelect = "none";

		// console.log(row);
		const cell = event.target as HTMLElement;
		const cellId = +cell.dataset.cell;
		// const prevCellId = onFocusRow?.cell
		// 	? +onFocusRow.cell.dataset.cell
		// 	: undefined;

		if (prevRowId) {
			onFocusRow.row.style.backgroundColor = "transparent";
			onFocusRow.cell.style.backgroundColor = "transparent";
		}
		row.style.backgroundColor = "#daf0ff";
		cell.style.backgroundColor = "#b5e1ff";

		if (!!rowId || !!cellId) {
			setFocusRow({ row, cell });
		}
	}

	function clickOnCheckbox(event: React.MouseEvent, rowID: number): void {
		// console.log(event.target.attributes.rowid.value);

		// console.log(rowID);
		setCheckedRows((prev: number[]) => {
			let currentIDs: number[];
			const present: boolean = prev.includes(rowID);
			if (present) {
				currentIDs = prev.filter((i) => i !== rowID);
			} else {
				currentIDs = [...prev, rowID];
			}
			return currentIDs;
		});
	}

	function clickOnParentCheckbox(event: React.MouseEvent, checkedRows): void {}
	// console.log(isLoading);
	return (
		<div className={styles.table}>
			<div className={styles.table_command_panel}></div>
			<div className={styles.table_wrapper}>
				<div
					className={styles.table_container}
					// onScroll={scrollingTable}
					// onContextMenu={contextMenu}
				>
					<HeaderRow props={{ columns, isScrolling, clickOnParentCheckbox }} />
					{isLoading ? (
						<h1>Loading</h1>
					) : (
						<div className={styles.flex_table}>
							{data &&
								data?.products.map((elementRow, idx) => {
									const rowID: number = ++idx;
									return (
										<ContentRow
											// useRef={contentRowRef}
											key={rowID}
											props={{
												columns,
												elementRow,
												rowID,
												clickRow,
												clickOnCheckbox,
												// selectTextInCell,
											}}
										/>
									);
								})}
						</div>
					)}
					{/* <FooterRow props={{ columns, data }} /> */}
				</div>
			</div>
		</div>
	);
};

export default DataGrid;
