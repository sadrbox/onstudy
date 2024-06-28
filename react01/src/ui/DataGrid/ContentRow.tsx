import React, {
  useState,
  useRef,
  useEffect,
  FC,
  MouseEvent,
  HTMLAttributes,
  RefObject,
} from "react";
import styles from "./DataGrid.module.scss";
import { getFormatValue, getAlignByColType } from "@/utils/functions";
import { IColumns, IProduct, ICol } from "./types";
// import { Checkbox } from "antd";
// import UICheckbox from "../UICheckbox/index";
import UICheckbox from "@/ui/UICheckbox/index";

interface IContentRowProps {
  props: {
    columns: IColumns;
    elementRow: IProduct;
    clickRow: (
      event: React.MouseEvent,
      rowRef: RefObject<HTMLDivElement>,
    ) => void;
    toggleCheckbox: (rowID: number) => void;
    isCheckedRow: (rowID: number) => boolean;
  };
}

const ContentRow: FC<IContentRowProps> = ({
  props: { columns, elementRow, clickRow, toggleCheckbox, isCheckedRow },
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  // const cellRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={rowRef}
      data-row={elementRow.id}
      className={styles.content_row}
      style={{ gridTemplateColumns: columns.properties.width }}
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
            onClick={(e) => clickRow(e, rowRef)}
            style={getAlignByColType(column)}
          >
            {column?.type === "checkbox" ? (
              <UICheckbox
                onChange={() => toggleCheckbox(elementRow.id)}
                checked={isCheckedRow(elementRow.id)}
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
