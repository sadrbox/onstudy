// import React, { useEffect } from "react";
import Checkbox from "../Checkbox";
// import { FaSortAmountDown } from "react-icons/fa";
// import Checkbox from "antd/es/checkbox/Checkbox";
// import { TiArrowSortedUp } from "react-icons/ti";
// import { TiArrowSortedDown } from "react-icons/ti";
import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";

import styles from "../DataGrid.module.scss";

import {
  ICol,
  IColumns,
  IProduct,
  TJsonData,
  TGridSorting,
} from "../types";
import { FC, useState } from "react";
// import { useAtom } from "jotai";
// import { storeGridData, storeGridSorting } from "src/utils/store";

import React, { useContext } from "react";
import { getAlignByColType } from "src/utils/functions";
import { useContextInstance } from "../ContextProvider";
// import { sortUserPlugins } from "vite";
// import { ContextInstance } from "./old/ContextProvider";
// import { ContextProvider, IContextData } from "./ContextProvider";
// import { ContextProvider } from "src/objects/Products";
import { typeMapping } from '../DataGrid.module';

type THeaderRowProps = {
  props: {
    // columns: IColumns;
    // isScrolling: boolean;
    // onChangeAllCheckbox: () => void;
    // isAllChecked: boolean;
    // sorting: TGridSorting;
    handleGridDataOrder: (columnID: string) => void;
  };
}


// {
//   props: {
//     // columns,
//     isScrolling,
//     onChangeAllCheckbox,
//     isAllChecked,
//     // handleGridDataOrder,
//   },
// }

const HeaderRow: FC = () => {

  const { config, ordering } = useContextInstance();
  const cols = config.cols;

  // console.log(config)

  const handleGridDataOrder = ordering.setGridDataOrdering;


  // const { columns } = context;

  // const context = useContext(ContextProvider);
  // if (context) {
  //   //   const { contextData, setContextData } = context;
  //   console.log(context)
  // }

  const isScrolling = false;

  // const [sorting] = useState<TGridSorting>({
  //   columnID: 'id',
  //   orderBy: 'ASC',
  // });
  const scrollingStyle = isScrolling
    ? [styles.header_row__scrolling, styles.header_row].join(" ")
    : styles.header_row;

  // const handleGridSort = () => {};

  // const context = React.useContext(ContextProvider);

  // if (!context || !context.contextData) {
  //   return <p>Loading...</p>; // Показываем загрузку, пока данные не установлены
  // }

  const context = useContextInstance();
  if (context.contextData.columns) {
    const cols = context.contextData
  }

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
      style={{ gridTemplateColumns: config.properties.width }}
    >
      {cols.map((column, headerRowIdx) => (
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
              // onChangeAllCheckbox={() => onChangeAllCheckbox()}
              // checked={isAllChecked}
              />
            ) : ['string', 'number'].includes(column.type) ? (
              <span onClick={() => handleGridDataOrder({ columnID: column.id, orderBy: ordering.columnID === column.id ? ordering.orderBy === 'asc' ? 'desc' : 'asc' : 'asc' })}>
                {column.title}
                {ordering.columnID === column.id ? (
                  ordering.orderBy === "asc" ? (
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
            ) : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderRow;
