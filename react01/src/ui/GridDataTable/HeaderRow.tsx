// import React, { useEffect } from "react";
import { FaSortAmountDown } from "react-icons/fa";
// import Checkbox from "antd/es/checkbox/Checkbox";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./DataGrid.module.scss";
import Checkbox from "./Checkbox";
import {
  ICol,
  IColumns,
  IProduct,
  TJsonData,
  TStoreGridData,
  TGridSorting,
} from "./types";
import { FC } from "react";
import { useAtom } from "jotai";
import { storeGridData, storeGridSorting } from "@/utils/store";
import React from "react";
import { getAlignByColType } from "@/utils/functions";
import { sortUserPlugins } from "vite";

interface IHeaderDataGridProps {
  props: {
    columns: IColumns;
    isScrolling: boolean;
    onChangeAllCheckbox: () => void;
    isAllChecked: boolean;
    // sorting: TGridSorting;
    handleGridSort: (columnID: keyof IProduct) => void;
  };
}
const HeaderRow: FC<IHeaderDataGridProps> = ({
  props: {
    columns,
    isScrolling,
    onChangeAllCheckbox,
    isAllChecked,
    handleGridSort,
  },
}) => {
  const [sorting] = useAtom<TGridSorting>(storeGridSorting);
  // const isScrolling = false;
  // const
  // const cls = isScrolling ? [header_row__scrolling] : [];
  // cls.push(header_row);
  // styles.push(columns.things);

  // const clss = true
  // 	? `${styles.header_row__scrolling} ${styles.header_row}`
  // 	: "";
  // const t = true;
  // console.log(isScrolling);

  const scrollingStyle = isScrolling
    ? [styles.header_row__scrolling, styles.header_row].join(" ")
    : styles.header_row;
  return (
    <div
      id="header_row"
      // className={isScrolling ? styles.header_row__scrolling : styles.header_row}
      className={scrollingStyle}
      style={{ gridTemplateColumns: columns.properties.width }}
    >
      {columns.cols.map((column, headerRowIdx) => (
        <div key={headerRowIdx} className={styles.header_cell}>
          <div
            className={styles.field}
            style={
              column.type === "checkbox" ? { justifyContent: "center" } : {}
            }
          >
            {column.type === "checkbox" ? (
              <Checkbox
                tabIndex={0}
                onChangeAllCheckbox={() => onChangeAllCheckbox()}
                checked={isAllChecked}
              />
            ) : (
              <span onClick={() => handleGridSort(column.id as keyof IProduct)}>
                {column.title}
                {sorting.columnID === column.id ? (
                  sorting.orderBy === "ASC" ? (
                    <TiArrowSortedDown size={16} className={styles.sortIcon} />
                  ) : (
                    <TiArrowSortedUp size={16} className={styles.sortIcon} />
                  )
                ) : (
                  <TiArrowSortedDown
                    size={16}
                    className={styles.sortIcon_hover}
                  />
                )}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderRow;
