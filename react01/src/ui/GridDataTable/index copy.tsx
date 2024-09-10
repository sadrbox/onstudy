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
import { useAtom } from "jotai";
import { storeGridData } from "src/utils/store";
import ContentRow from "./ContentRow";
import HeaderRow from "./HeaderRow";
import ContextMenu from "./ContextMenu/index";
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

interface IDataGridProps {
  columns: IColumns;
  dataRows: IProduct[];
}

type TContextProvider = {
  theme: string;
  toggleTheme: () => void;
};

export interface IContextMenuPosition {
  x: number;
  y: number;
}

export interface IContextMenuValue {
  value: string;
}

// Создаем контекст за пределами компонента
export const ContextProvider = createContext<TContextProvider | undefined>(
  undefined,
);

const DataGrid: FC<IDataGridProps> = ({ columns, dataRows }) => {
  const [theme, setTheme] = useState("dark");
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (dataRows?.length) {
      setCheckedRows(() => {
        return isAllChecked
          ? []
          : dataRows.length === checkedRows.length
            ? []
            : [...checkedRows];
      });
    }
  }, [dataRows, isAllChecked, checkedRows.length]);

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
    if (isAllChecked) {
      setIsAllChecked(false);
    }

    setCheckedRows((prev: number[]) => {
      const currentIDs = prev.includes(rowID)
        ? prev.filter((i) => i !== rowID)
        : [...prev, rowID];
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
    setIsAllChecked((prev) => !prev);
  }

  function isCheckedRow(rowID: number): boolean {
    return checkedRows.includes(rowID);
  }

  function contextMenuPositionHandle(
    position: IContextMenuPosition,
    value: string,
  ): void {
    setContextMenuPosition(position);
    setContextMenuValue(value);
    setContextMenuVisible(true);
  }

  return (
    <ContextProvider.Provider value={{ theme, toggleTheme }}>
      <div className={styles.table}>
        <div className={styles.table_command_panel}></div>
        <div className={styles.table_wrapper}>
          <div ref={gridContainerRef} className={styles.table_container}>
            <HeaderRow
              props={{
                columns,
                isScrolling,
                onChangeAllCheckbox,
                isAllChecked,
              }}
            />
            {!dataRows ? (
              <h1>Loading</h1>
            ) : (
              <div className={styles.flex_table}>
                {dataRows.map((elementRow, keyID: number) => {
                  const tabIndex = ++keyID;
                  return (
                    <ContentRow
                      key={tabIndex}
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
          </div>
        </div>
        {contextMenuPosition && (
          <ContextMenu
            position={contextMenuPosition}
            value={contextMenuValue}
            visible={{ contextMenuVisible, setContextMenuVisible }}
          />
        )}
      </div>
    </ContextProvider.Provider>
  );
};

export default DataGrid;
