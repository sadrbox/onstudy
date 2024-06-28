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
  RefObject,
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
  IColumns,
  IProduct,
  TGridDataRows,
  TGridSorting,
  TStoreGridData,
} from "./types";

interface ISelectRow {
  row: HTMLElement;
  cell: HTMLElement;
}

// type TSortFn = (columnID: string, rderBy?: string) => void;

interface IDataGridProps {
  columns: IColumns;
  dataRows: TGridDataRows;
  actions: {
    handleGridSort: (columnID: keyof IProduct) => void;
  };
}
const DataGrid: FC<IDataGridProps> = ({ columns, dataRows, actions }) => {
  // const [gridData, setGridData] = useAtom<TStoreGridData>(storeGridData);
  // const [gridData, setGridData] = useState<TGridDataRows>(undefined);

  // const [reciveData, setReciveData] = useState<IProduct[] | undefined>(
  // 	gridData?.rows
  // );
  // const [sorting, setSorting] = useState<TGridSorting>({
  //   columnID: "id",
  //   orderBy: "ASC",
  // });
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);

  const [selectRow, setSelectRow] = useState<ISelectRow | null>(null);

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  // const [gridData, setGridData] = useAtom(storeGridData);

  // useEffect(() => {
  // 	setGridData(rows);
  // },[gridData, rows]);
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

  useEffect(() => {
    // console.log(data?.sortFn);
    // console.log(data?.dataRows);
    if (dataRows?.length) {
      setCheckedRows(isAllChecked ? dataRows?.map((e) => e.id) : []);
    }
    // const countIDs: number[] = dataRows.map((e) => e.id);
  }, [dataRows, isAllChecked]);

  function clickRow(
    event: React.MouseEvent,
    rowRef: RefObject<HTMLDivElement>,
  ): void {
    const target = event.target as HTMLElement | null;
    if (target?.closest(`div[data-field='false']`)) return;
    if (rowRef.current) {
      const currentRow: HTMLElement = rowRef.current;
      let currentCell: HTMLElement;
      if (selectRow && selectRow?.row !== currentRow) {
        selectRow.row.style.backgroundColor = "transparent";
      }

      if (target && "closest" in target) {
        currentCell = target.closest(`div[data-field='true']`) as HTMLElement;
        if (selectRow && selectRow?.cell !== currentCell) {
          selectRow.cell.style.backgroundColor = "transparent";
        }
        currentCell.style.backgroundColor = "#b5e1ff";

        if (selectRow?.row !== currentRow) {
          currentRow.style.backgroundColor = "#daf0ff";
        }

        if (!!currentRow || !!currentCell) {
          setSelectRow({ row: currentRow, cell: currentCell });
        }
      }
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
    console.log("dfsd");
    setIsAllChecked((prev) => !prev);
    // setCheckedRows(gridIDs);
  }

  function isCheckedRow(rowID: number): boolean {
    return checkedRows.includes(rowID);
  }

  // function sortFnByColumn(columnID = "id", orderBy = "ASC"): void {
  //   if (sorting.columnID === columnID && sorting.orderBy === "ASC") {
  //     setSorting({
  //       columnID,
  //       orderBy: "DESC",
  //     });
  //   } else {
  //     // console.log("first");
  //     setSorting({
  //       columnID,
  //       orderBy,
  //     });
  //   }
  // }
  // conso})le.log(gridData?.columns);
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
            props={{
              columns,
              isScrolling,
              toggleParentCheckbox,
              isAllChecked,
              // sorting,
              handleGridSort: actions.handleGridSort,
            }}
          />
          {!dataRows ? (
            <h1>Loading</h1>
          ) : (
            <div className={styles.flex_table}>
              {dataRows &&
                dataRows.map((elementRow) => {
                  return (
                    <ContentRow
                      key={elementRow.id}
                      props={{
                        columns,
                        elementRow,
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
