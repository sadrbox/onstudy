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
import { getFormatValue, getAlignByColType } from "@/utils/functions";
import { IColumns, IProduct, ICol } from "./types";
// import { Checkbox } from "antd";
// import Checkbox from "../Checkbox/index";
import Checkbox, { ICheckboxHandle } from "./Checkbox/index";
import { AnyObject } from "antd/es/_util/type";

interface IContentRowProps {
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
    contextMenuPositionHandle: (position: { x: number; y: number }) => void;
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
  ): void => {
    event.preventDefault();
    onclickcell(rowRef, uicheckboxRef, event);
    if (column?.type !== "checkbox") {
      contextMenuPositionHandle({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div
      // tabIndex={tabIndex}
      ref={rowRef}
      data-row={elementRow.id}
      className={styles.content_row}
      style={{ gridTemplateColumns: columns.properties.width }}
      // onKeyDown={(e) => handleKeySpace(e)}
    >
      {columns.cols.map((column, colIdx) => (
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
              contextMenuHandle(rowRef, uicheckboxRef, event, column)
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
              <span style={getAlignByColType(column)}>
                {getFormatValue(elementRow, column)}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentRow;
