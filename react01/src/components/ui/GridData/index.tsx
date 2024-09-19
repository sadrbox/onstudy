import React, {
  FC,
  useEffect,
  useState,
  useRef,
  RefObject,
  useContext,
  createContext,
} from "react";
import styles from "./DataGrid.module.scss";
// import { ContextProvider, TContextData } from "./ContextProvider";

// import { useAtom, Provider } from "jotai";
// import { storeGridData } from "src/utils/store";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import HeaderRow from "src/components/objects/Products/HeaderRow";
import ContentRow from "./ContentRow";
import HeaderRow from "./HeaderRow";
// import FooterRow from "./FooterRow";
import ContextMenu from "./ContextMenu/index";

import {
  IColumns,
  IProduct,
} from "./types";
import { ContextInstance, useContextInstance } from "./ContextProvider";
// import { ContextInstance } from "./old/ContextProvider";

interface ISelectRow {
  row: HTMLElement;
  cell: HTMLElement | undefined;
}

// type TSortFn = (columnID: string, rderBy?: string) => void;

interface IDataGridProps {
  columns: unknown[];
  dataRows: unknown[];
  // actions: {
  //   handleGridSort: (columnID: string) => void;
  // };
}

export interface IContextMenuPosition {
  x: number;
  y: number;
}
export interface IContextMenuValue {
  value: string;
}

const DataGrid: FC = () => {


  const context = useContextInstance();
  const { dataRows } = context.contextData;
  // console.log(context)
  // return (<>sdf</>)
  // const cols = config.cols;

  // if (ContextProvider) {

  //   // type typeRows = typeof contextData;

  // }
  // const context = useContext(ContextProvider);
  // if (context) {
  // const dataRows = context?.contextData.dataRows;
  // const columns = context?.contextData.columns;
  // }

  // console.log(conts)
  // const [gridData, setGridData] = useAtom<TStoreGridData>(storeGridData);
  // const [gridData, setGridData] = useState<TGridDataRows>(undefined);

  // const [reciveData, setReciveData] = useState<IProduct[] | undefined>(
  // 	gridData?.rows
  // );
  // const [sorting, setSorting] = useState<TGridSorting>({
  //   columnID: "id",
  //   orderBy: "ASC",
  // });

  // const ContextProvider = createContext<TContextProvider | undefined>(
  //   undefined,
  // );
  // const [contextData, setContextData] = useState<TContextInit>("light");
  // const contextProviderValues = useContext<TContextInit>(ContextProvider);
  // console.log(ContextProvider);
  // const [contextState, setContextState] = useState<TContextProvider>({
  //   theme: "dark",
  //   SetterContext: () => {},
  // });

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);

  const [selectRow, setSelectRow] = useState<ISelectRow | null>(null);

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [contextMenuValue, setContextMenuValue] = useState<string>("");
  const [contextMenuPosition, setContextMenuPosition] =
    useState<IContextMenuPosition | null>(null);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    // grid scroll effect
    const handleScroll = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        setIsScrolling(false);
      }

      setIsScrolling(true);
      timeoutIdRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const gridContainer = gridContainerRef.current;

    if (gridContainer) {
      gridContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (gridContainer) {
        gridContainer.removeEventListener("scroll", handleScroll);
      }
    };
  });



  // useEffect(() => {
  //   if (contextProviderValues) {
  //     const { theme, toggleTheme } = contextProviderValues;
  //     setContextState({ theme, toggleTheme });
  //   }
  // });

  // useEffect(() => {
  //   if (dataRows?.length) {
  //     setCheckedRows(() => {
  //       // if (isAllChecked) {
  //       //   return dataRows?.map((e) => e.id);
  //       // } else {
  //       //   return [];
  //       // }
  //       return isAllChecked
  //         ? // ? dataRows?.map((e) => e.id)
  //         []
  //         : dataRows.length === checkedRows.length
  //           ? []
  //           : [...checkedRows];
  //     });
  //   }
  //   // const countIDs: number[] = dataRows.map((e) => e.id);
  // }, [dataRows, isAllChecked]);

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
    if (dataRows) {
      // const rows = dataRows.map((e) => e.id);
      if (isAllChecked) {
        setIsAllChecked(false);
      }
      // setCheckedRows(checkedRows.filter((i) => i !== rowID));
      // }
      // if (dataRows.length > checkedRows.length) {
      //   setIsAllChecked(false);
      // }
    }
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
  function contextMenuPositionHandle(
    position: IContextMenuPosition,
    value: string,
  ): void {
    // const { x, y } = position;
    // console.log(value);
    setContextMenuPosition(position);
    setContextMenuValue(value);
    setContextMenuVisible(true);
  }

  // function handleGridDataOrder(columnID: string = "id") 
  // console.log(columnID)
  // ordering.setGridDataOrdering({ columnID: columnID, orderBy: 'desc' })
  // setSorting((prev) => {
  //   // console.log(columnID, { ...prev });run dev

  //   return {
  //     columnID,
  //     orderBy:
  //       prev.columnID === columnID
  //         ? prev.orderBy === "ASC"
  //           ? "DESC"
  //           : "ASC"
  //         : "ASC",
  //   };
  // });
  // 

  // const [contextData, setContextData] = useState<TContextData>({
  //   columns,
  //   dataRows,
  //   sortByColumn: 'id',
  //   orderBy: 'DESC'
  // });





  // const { columns, dataRows } = context;
  // { console.log(dataRows) }

  return (
    // <Context dataRows={dataRows} columns={columns}>
    <div
      // onContextMenu={(event) => event.preventDefault()}
      className={styles.table}
    >
      <div className={styles.table_command_panel}></div>
      <div className={styles.table_wrapper}>
        <div
          ref={gridContainerRef}
          className={styles.table_container}
        // onScroll={() => setIsScrolling(true)}
        // onContextMenu={(event) => event.preventDefault()}
        >

          {
            <HeaderRow
            // props={{
            //   //   isScrolling,
            //   //   // onChangeAllCheckbox,
            //   //   // isAllChecked,
            //   //   // sorting,
            //   handleGridDataOrder,
            // }}
            />
          }

          {/* {!dataRows ? (
            <h1>Loading</h1>
          ) : (
            <div className={styles.flex_table}>
              {dataRows &&
                dataRows.map((elementRow, keyID: number) => {

                  const tabIndex = ++keyID;
                  return (
                    <ContentRow
                      // key={elementRow.id}
                      key={tabIndex}
                      tabIndex={tabIndex}
                      props={{
                        // columns: cols,
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
          )} */}
          {/* <FooterRow props={{ columns, data }} /> */}
        </div>
      </div>
      {contextMenuPosition && (
        <ContextMenu
          // onMouseLeave={() => setContextMenuVisible(false)}
          position={contextMenuPosition}
          value={contextMenuValue}
          visible={{ contextMenuVisible, setContextMenuVisible }}
        />
      )}
    </div>
    // </Context>
  );
};

export default DataGrid;
