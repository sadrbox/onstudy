// import React, { useEffect } from "react";
import Checkbox from "./Checkbox";
// import { FaSortAmountDown } from "react-icons/fa";
// import Checkbox from "antd/es/checkbox/Checkbox";
// import { TiArrowSortedUp } from "react-icons/ti";
// import { TiArrowSortedDown } from "react-icons/ti";
import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";

import styles from "./DataGrid.module.scss";

import {
  ICol,
  IColumns,
  IProduct,
  TJsonData,
  TStoreGridData,
  TGridSorting,
} from "./types";
import { FC, useState } from "react";
// import { useAtom } from "jotai";
// import { storeGridData, storeGridSorting } from "src/utils/store";

import React, { useContext } from "react";
import { getAlignByColType } from "src/utils/functions";
import { sortUserPlugins } from "vite";
import { ContextInstance } from "./ContextProvider";
// import { ContextProvider, IContextData } from "./ContextProvider";
// import { ContextProvider } from "src/objects/Products";

interface IHeaderDataGridProps {
  props: {
    // columns: IColumns;
    isScrolling: boolean;
    onChangeAllCheckbox: () => void;
    isAllChecked: boolean;
    // sorting: TGridSorting;
    // handleGridSort: (columnID: keyof IProduct) => void;
  };
}

const HeaderRow: FC<IHeaderDataGridProps> = ({
  props: {
    // columns,
    isScrolling,
    onChangeAllCheckbox,
    isAllChecked,
    // handleGridSort,
  },
}) => {

  const context = useContext(ContextInstance);
  const { columns } = context;

  // const context = useContext(ContextProvider);
  // if (context) {
  //   //   const { contextData, setContextData } = context;
  //   console.log(context)
  // }



  const [sorting] = useState<TGridSorting>({
    columnID: 'id',
    orderBy: 'ASC',
  });
  const scrollingStyle = isScrolling
    ? [styles.header_row__scrolling, styles.header_row].join(" ")
    : styles.header_row;

  // const handleGridSort = () => {};

  // const context = React.useContext(ContextProvider);

  // if (!context || !context.contextData) {
  //   return <p>Loading...</p>; // Показываем загрузку, пока данные не установлены
  // }

  // const { contextData, setContextData } = context;

  // console.log(contextData)

  // function changeTheme() {
  //   const { SetterContext } = inContext;
  //   SetterContext("green");
  // }
  return (
    <div
      // onClick={() => changeTheme()}
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
              <span onClick={() => { }}>
                {column.title}
                {sorting.columnID === column.id ? (
                  sorting.orderBy === "ASC" ? (
                    <PiCaretDownFill size={16} className={styles.sortIcon} />
                  ) : (
                    <PiCaretUpFill size={16} className={styles.sortIcon} />
                  )
                ) : (
                  <PiCaretDownFill
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
