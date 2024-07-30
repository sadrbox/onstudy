import React, {
  useState,
  useRef,
  useEffect,
  FC,
  MouseEvent,
  HTMLAttributes,
  RefObject,
  DetailedHTMLProps,
  KeyboardEvent,
  MutableRefObject,
} from "react";
import styles from "./DataGrid.module.scss";
import { getFormatValue, getAlignByColType } from "src/utils/functions";
import { IColumns, IProduct, ICol } from "./types";
// import { Checkbox } from "antd";
// import Checkbox from "../Checkbox/index";
import Checkbox, { ICheckboxHandle } from "./Checkbox/index";
import { IContextMenuPosition, IContextMenuValue } from ".";

interface IContentRowProps {
  // onContextMenu: () => void;
  tabIndex: number;
  props: {
    columns: IColumns;
    elementRow: IProduct;
    gridSelectRow: (
      rowRef: RefObject<HTMLDivElement>,
      checkboxRef: RefObject<HTMLInputElement>,
      event: React.MouseEvent,
    ) => void;
    onChangeCheckbox: (rowID: number) => void;
    onFocusCheckbox: (
      localRef: RefObject<HTMLInputElement>,
      rowRef: RefObject<HTMLInputElement>,
    ) => void;
    isCheckedRow: (rowID: number) => boolean;
    contextMenuPositionHandle: (
      position: IContextMenuPosition,
      value: string,
    ) => void;
  };
}

const ContentRow: FC<IContentRowProps> = ({
  tabIndex,
  props: {
    columns,
    elementRow,
    gridSelectRow,
    onChangeCheckbox,
    onFocusCheckbox,
    isCheckedRow,
    contextMenuPositionHandle,
  },
}) => {
  const rowRef = useRef<HTMLDivElement & HTMLInputElement>(null);
  const uicheckboxRef = useRef<ICheckboxHandle | null>(null);

  // const checkboxRef = useRef<HTMLInputElement | null>(null);
  // const cellRef = useRef<HTMLDivElement>(null);
  const onclickcell = (
    rowRef: RefObject<HTMLInputElement>,
    uicheckboxRef: RefObject<ICheckboxHandle>,
    event: React.MouseEvent,
  ): void => {
    if (!uicheckboxRef.current) return;
    const instanceOfCheckboxRef =
      uicheckboxRef?.current.getInstanceOfCheckboxRef();
    gridSelectRow(rowRef, instanceOfCheckboxRef, event);
  };

  const contextMenuHandle = (
    rowRef: RefObject<HTMLInputElement>,
    uicheckboxRef: RefObject<ICheckboxHandle>,
    event: React.MouseEvent,
    column: ICol,
    value: string,
  ): void => {
    event.preventDefault();
    onclickcell(rowRef, uicheckboxRef, event);
    // console.log(value);
    if (column?.type !== "checkbox") {
      if (rowRef.current) {
        const gridWidth = rowRef.current?.clientWidth - event.clientX;
        let clientX = event.clientX;
        // let clientY = 0;
        if (gridWidth <= 150) {
          clientX = event.clientX - 140;
        }
        console.log(clientX, gridWidth, {
          x: event.clientX,
          y: event.clientY,
        });
        contextMenuPositionHandle(
          { x: clientX - 5, y: event.clientY - 5 },
          value,
        );
      }
    }
  };

  return (
    <div
      // tabIndex={tabIndex}
      onContextMenu={(event) => event.preventDefault()}
      ref={rowRef}
      data-row={elementRow.id}
      className={styles.content_row}
      style={{ gridTemplateColumns: columns.properties.width }}
      // onKeyDown={(e) => handleKeySpace(e)}
    >
      {columns.cols.map((column, colIdx) => {
        const value: string = getFormatValue(elementRow, column) as string;
        return (
          <div
            // ref={cellRef}
            key={colIdx}
            data-cell={colIdx}
            data-field={column.type !== "checkbox" ? true : false}
            className={styles.content_cell}
          >
            <div
              className={styles.field}
              onClick={(event) => onclickcell(rowRef, uicheckboxRef, event)}
              onContextMenu={(event) =>
                contextMenuHandle(rowRef, uicheckboxRef, event, column, value)
              }
              style={getAlignByColType(column)}
            >
              {column?.type === "checkbox" ? (
                <Checkbox
                  ref={uicheckboxRef}
                  tabIndex={tabIndex}
                  checked={isCheckedRow(elementRow.id)}
                  onFocusCheckbox={(checkboxRef) =>
                    onFocusCheckbox(checkboxRef, rowRef)
                  }
                  onChangeCheckbox={() => onChangeCheckbox(elementRow.id)}
                />
              ) : (
                <span style={getAlignByColType(column)}>{value}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentRow;
