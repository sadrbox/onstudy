import React, { useState, useEffect, ReactNode, FC } from 'react';
// import { TColumn, TColumnsHeader } from '../services';
import styles from "../styles.module.scss"
import UICheckbox from '../UI/UICheckbox';
import { useContextDataGrid } from '../GridDataContext';

import { columns } from "./settings.json"
import { TColumn } from '../types';
import { translateColumnLable } from 'src/i18';
import { getColumnWidthById } from '../services';

type TGridBodyRowColumnsSetting = {
  column: TColumn
  rowID: number
}

const GridBodyRowColumnsSetting: FC<TGridBodyRowColumnsSetting> = ({ column, rowID }) => {
  // const { contextDataGrid } = useContextDataGrid()
  // const [headers, setHeaders] = useState<[string, string | boolean][]>([])
  // console.log({ column })
  // useEffect(() => {
  //   // setColumns(Object.keys(column))
  //   if (column) {
  //     // setHeaders(Object.entries(column))
  //     // console.log(column)
  //   }

  // }, [])


  return (
    <tr data-row-id={rowID}>
      {columns && columns.map((col, keyID) => {
        const colWidth = getColumnWidthById(columns, col.identifier);
        if (col.type === 'boolean') {
          return (
            <td key={keyID} style={{ width: colWidth, minWidth: colWidth }}>
              <div style={{ justifyItems: col.alignment }} className={styles.TabField}>
                {/* <UICheckbox tabIndex={keyID} rowID={rowID} checked={isCheckedRow(rowID)} actions={{ ...actions }} /> */}
              </div>
            </td>)
        } else if (col.identifier === 'column') {
          return (
            <td key={keyID} style={{ width: colWidth, minWidth: colWidth }}>
              <div style={{ justifyItems: col.alignment }} className={styles.TabField}>
                <span>{translateColumnLable(column)}</span>
              </div>
            </td>)
        } else {
          return (
            <td key={keyID} style={{ width: colWidth, minWidth: colWidth }}>
              <div style={{ justifyItems: col.alignment }} className={styles.TabField}>
                <span>{column[col.identifier as keyof TColumn]}</span>
              </div>
            </td>)
        }
      })}
    </tr >
  )
};

export default GridBodyRowColumnsSetting;