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
  cell: HTMLElement | undefined;
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
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    // grid scroll effect
    const handleScroll = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      setIsScrolling(true);
      timeoutIdRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    const gridContainer = gridContainerRef.current;

    if (gridContainer) {
      gridContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (gridContainer) {
        gridContainer.removeEventListener("scroll", handleScroll);
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  });

  useEffect(() => {}, [selectRow]);

  useEffect(() => {
    if (dataRows?.length) {
      setCheckedRows(() => {
        return isAllChecked ? dataRows?.map((e) => e.id) : [];
      });
    }
    // const countIDs: number[] = dataRows.map((e) => e.id);
  }, [dataRows, isAllChecked]);

  const gridSelectRow = (
    rowRef: RefObject<HTMLDivElement>,
    checkboxRef: RefObject<HTMLInputElement>,
    event?: React.MouseEvent,
  ) => {
    if (!rowRef.current || !checkboxRef.current) return;
    const currentRow: HTMLDivElement = rowRef.current;
    let currentCell = undefined;

    if (selectRow && selectRow?.row !== currentRow) {
      selectRow.row.style.backgroundColor = "transparent";
    }

    if (selectRow && selectRow.cell && !event) {
      selectRow.cell.style.backgroundColor = "transparent";
    }

    if (event) {
      const cellTarget = event.target as HTMLElement;
      if (cellTarget && "closest" in cellTarget) {
        currentCell = cellTarget?.closest(
          `div[data-field='true']`,
        ) as HTMLElement;
        if (currentCell) {
          currentCell.style.backgroundColor = "#b6e1ff";
        }

        if (selectRow?.cell && selectRow?.cell !== currentCell) {
          selectRow.cell.style.backgroundColor = "transparent";
        }
      }
    }

    if (selectRow?.row !== currentRow) {
      currentRow.style.backgroundColor = "#daf1ff";
      currentRow
        .querySelector<HTMLInputElement>("input[type='checkbox']")
        ?.focus();
    }
    if (!!currentRow || !!currentCell) {
      setSelectRow({ row: currentRow, cell: currentCell });
    }
  };

  function onChangeCheckbox(rowID: number): void {
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

  function onFocusCheckbox(
    checkboxRef: RefObject<HTMLInputElement>,
    rowRef: RefObject<HTMLInputElement>,
  ): void {
    gridSelectRow(rowRef, checkboxRef);
  }
  function onChangeAllCheckbox(): void {
    // console.log("dfsd");
    setIsAllChecked((prev) => !prev);

    // setCheckedRows(gridIDs);
  }
  function isCheckedRow(rowID: number): boolean {
    return checkedRows.includes(rowID);
  }
  function contextMenuPositionHandle(position: { x: number; y: number }): void {
    const { x, y } = position;
    setContextMenuPosition({ x, y });
  }

  return (
    <div className={styles.table}>
      <div className={styles.table_command_panel}></div>
      <div className={styles.table_wrapper}>
        <div
          ref={gridContainerRef}
          className={styles.table_container}
          // onScroll={() => setIsScrolling(true)}
          onContextMenu={(event) => event.preventDefault()}
        >
          <HeaderRow
            props={{
              columns,
              isScrolling,
              onChangeAllCheckbox,
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
                dataRows.map((elementRow, keyID: number) => {
                  const tabIndex = ++keyID;
                  return (
                    <ContentRow
                      key={elementRow.id}
                      tabIndex={tabIndex}
                      props={{
                        columns,
                        elementRow,
                        gridSelectRow,
                        onChangeCheckbox,
                        onFocusCheckbox,
                        isCheckedRow,
                        contextMenuPositionHandle,
                      }}
                    />
                  );
                })}
            </div>
          )}
          {/* <FooterRow props={{ columns, data }} /> */}
        </div>
      </div>
      {contextMenuPosition && (
        <div
          style={{
            position: "absolute",
            top: contextMenuPosition.y,
            left: contextMenuPosition.x,
            backgroundColor: "white",
            border: "1px solid black",
            padding: "10px",
            // boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
          }}
        />
      )}
    </div>
  );
};

export default DataGrid;
