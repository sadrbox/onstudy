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
	IProduct,
	TDataGridProps,
	TJsonData,
} from "./types";

interface IDataGridProps {
	columns: IColumns;
	data?: {
		gridRows: IProduct[] | undefined;
		gridIDs: number[] | undefined;
		// sortFn: (columnID: string, orderBy?: string) => void;
		// sortDirection: "ASC" | "DESC";
	};
	isLoading: boolean;
}
interface IFocusRow {
	row: HTMLElement | null;
	cell: HTMLElement | null;
}

type TSortFn = (columnID: string, orderBy?: string) => void;

const DataGrid: FC<IDataGridProps> = ({ columns, data, isLoading }) => {
	const [reciveData, setReciveData] = useState<IProduct[] | undefined>(
		data?.gridRows
	);
	const [sorting, setSorting] = useState({ columnID: "id", orderBy: "ASC" });
	const [parentChecked, setParentChecked] = useState<boolean>(false);
	const [checkedRows, setCheckedRows] = useState<number[]>([]);
	const [onFocusRow, setFocusRow] = useState<IFocusRow>({
		row: null,
		cell: null,
	});

	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		setReciveData(data?.gridRows);
	});
	// console.log(data?.gridIDs);
	useEffect(() => {
		const gridRows = reciveData ? reciveData : [];
		// setReciveData(gridRows);
		console.log(sorting);
		setReciveData(
			gridRows.sort((a, b) => {
				const aV = a[sorting.columnID];
				const bV = b[sorting.columnID];
				const gridOrder = {
					"ASC": aV - bV,
					"DESC": bV - aV,
				};
				// console.log(sorting.orderBy);
				return gridOrder[sorting.orderBy];
			})
		);
	}, [sorting]);

	useEffect(() => {
		// console.log(data?.sortFn);
		// console.log(data?.dataRows);
		// const countIDs: number[] = data?.products.map((e) => e.id);
		setCheckedRows(parentChecked && data?.gridIDs ? data.gridIDs : []);
	}, [parentChecked]);

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

	console.log("index");
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
						props={{
							columns,
							isScrolling,
							toggleParentCheckbox,
							parentChecked,
						}}
						sortActions={sortFnByColumn}
					/>
					{isLoading ? (
						<h1>Loading</h1>
					) : (
						<div className={styles.flex_table}>
							{reciveData &&
								reciveData.map((elementRow, idx) => {
									const rowID: number = ++idx;
									// setGridIDs([3, 5, 7]);
									return (
										<ContentRow
											// useRef={contentRowRef}
											key={rowID}
											props={{
												columns,
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
