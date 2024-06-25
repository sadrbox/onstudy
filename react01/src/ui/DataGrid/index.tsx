import React, {
	FC,
	useEffect,
	useState,
	useRef,
	createElement,
	ReactNode,
	ReactElement,
	MouseEventHandler,
	memo,
	HTMLAttributes,
} from "react";
import styles from "./DataGrid.module.scss";

import { useAtom } from "jotai";
import { storeGridData } from "@/utils/store";
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
	IProduct,
	TDataGridProps,
	TJsonData,
	IStoreGridData,
	TStoreGridData,
} from "./types";

// interface IDataGridProps {
// 	columns: IColumns;
// 	data?: {
// 		gridRows: IProduct[] | undefined;
// 		gridIDs: number[] | undefined;
// 		// sortFn: (columnID: string, orderBy?: string) => void;
// 		// sortDirection: "ASC" | "DESC";
// 	};
// 	isLoading: boolean;
// }
interface ISelectRow {
	row: HTMLElement;
	cell: HTMLElement;
}

// type TSortFn = (columnID: string, orderBy?: string) => void;

const DataGrid: FC = () => {
	const [gridData, setGridData] = useAtom<TStoreGridData>(storeGridData);

	// const [reciveData, setReciveData] = useState<IProduct[] | undefined>(
	// 	gridData?.rows
	// );
	const [sorting, setSorting] = useState({ columnID: "id", orderBy: "ASC" });
	const [parentChecked, setParentChecked] = useState<boolean>(false);
	const [checkedRows, setCheckedRows] = useState<number[]>([]);

	const [selectRow, setSelectRow] = useState<ISelectRow | null>(null);

	const [isScrolling, setIsScrolling] = useState(false);
	// const [gridData, setGridData] = useAtom(storeGridData);

	useEffect(() => {
		// setReciveData(gridData?.gridRows);
	});
	// console.log(data?.gridIDs);
	// useEffect(() => {
	// 	const gridRows = gridData?.gridRows ? gridData?.gridRows : [];
	// 	// setReciveData(gridRows);
	// 	console.log(sorting);
	// 	setReciveData(
	// 		gridRows.sort((a, b) => {
	// 			const aV = a[gridData?.gridOrder.id];
	// 			const bV = b[sorting.columnID];
	// 			const gridOrder = {
	// 				"ASC": aV - bV,
	// 				"DESC": bV - aV,
	// 			};
	// 			// console.log(sorting.orderBy);
	// 			return gridOrder[sorting.orderBy];
	// 		})
	// 	);
	// }, [sorting]);

	// useEffect(() => {
	// 	// console.log(data?.sortFn);
	// 	// console.log(data?.dataRows);
	// 	// const countIDs: number[] = data?.products.map((e) => e.id);
	// 	// setCheckedRows(parentChecked && data?.gridIDs ? data.gridIDs : []);
	// }, [parentChecked]);

	function clickRow(event: React.MouseEvent, currentRowId: number): void {
		if (typeof currentRowId !== "number") return;

		const parentRow = `div[data-row="${currentRowId}"]`;
		const currentCell = event.target as HTMLElement;
		const currentRow: HTMLElement | null =
			currentCell.closest<HTMLElement>(parentRow);
		if (currentRow === null) return;
		// const currentRowDataset = currentRow.dataset as DOMStringMap;
		// if (currentRowDataset.row !== undefined) {
		// const currentRowId: number = currentRowDataset.row
		// 	? parseInt(currentRowDataset.row)
		// 	: 0;

		// previos values
		// const previosRowDataset = selectRow?.row.dataset as DOMStringMap;
		// const previosRowId: number = previosRowDataset?.row
		// ? parseInt(previosRowDataset?.row)
		// : 0;
		// const previosCellDataset = selectRow?.cell.dataset as DOMStringMap;

		// current cell
		const currentCellDataset = currentCell.dataset as DOMStringMap;
		const currentCellId = currentCellDataset.cell
			? parseInt(currentCellDataset.cell)
			: 0;

		if (selectRow) {
			selectRow.row.style.backgroundColor = "transparent";
			selectRow.cell.style.backgroundColor = "transparent";
		}
		currentRow.style.backgroundColor = "#daf0ff";
		currentCell.style.backgroundColor = "#b5e1ff";

		if (!!currentRowId || !!currentCellId) {
			setSelectRow({ row: currentRow, cell: currentCell });
		}
		// }
		// }
	}

	function toggleCheckbox(rowID: number): void {
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
			// console.log(currentIDs);
			return currentIDs;
		});
	}

	function toggleParentCheckbox(): void {
		setParentChecked((prev) => !prev);
		// setCheckedRows(gridIDs);
	}

	function isCheckedRow(rowID: number): boolean {
		return checkedRows.includes(rowID);
	}

	function sortFnByColumn(columnID = "id", orderBy = "ASC"): void {
		if (sorting.columnID === columnID && sorting.orderBy === "ASC") {
			setSorting({
				columnID,
				orderBy: "DESC",
			});
		} else {
			// console.log("first");
			setSorting({
				columnID,
				orderBy,
			});
		}
	}
	// console.log(gridData?.columns);
	// console.log("index");
	return (
		<div className={styles.table}>
			<div className={styles.table_command_panel}></div>
			<div className={styles.table_wrapper}>
				<div
					className={styles.table_container}
					// onScroll={scrollingTable}
					// onContextMenu={contextMenu}
				>
					<HeaderRow
					// props={{
					// 	columns: gridData?.columns,
					// 	isScrolling,
					// 	toggleParentCheckbox,
					// 	parentChecked,
					// }}
					// sortActions={sortFnByColumn}
					/>
					{!gridData?.rows ? (
						<h1>Loading</h1>
					) : (
						<div className={styles.flex_table}>
							{gridData?.rows &&
								gridData?.rows.map((elementRow, idx) => {
									const rowID: number = ++idx;
									// setGridIDs([3, 5, 7]);
									return (
										<ContentRow
											// useRef={contentRowRef}
											key={rowID}
											props={{
												columns: gridData.columns,
												elementRow,
												rowID,
												clickRow,
												toggleCheckbox,
												isCheckedRow,
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
