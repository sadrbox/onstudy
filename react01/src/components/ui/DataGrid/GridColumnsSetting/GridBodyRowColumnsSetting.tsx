import React, { useState, useEffect, ReactNode, FC } from 'react';
import { TColumnsHeader } from '../services';
import styles from "../styles.module.scss"
import UICheckbox from '../UI/UICheckbox';

type TGridBodyRowColumnsSetting = {
  column: TColumnsHeader
  rowID: number
}

const GridBodyRowColumnsSetting: FC<TGridBodyRowColumnsSetting> = ({ column, rowID }) => {
  const [columns, setColumns] = useState<string[]>([])
  // console.log({ column })
  useEffect(() => {
    setColumns(Object.keys(column))
  }, [])

  return (
    <tr data-row-id={rowID}>
      {columns.map((column, keyID: number) => {
        if (column === 'selectOption') {
          // const isCheckedRow = isCheckedRow
          return (
            <td key={keyID}>
              <div style={{ justifyItems: 'center' }} className={styles.TabField}>
                {/* <UICheckbox tabIndex={keyID} rowID={rowID}   /> */}
              </div>
            </td>)
        } else {
          // const value = getViewValue(dataRow[col.id], col.id)

          return (
            <td key={keyID}>
              <div className={styles.TabField}>
                <span>{'sdf'}</span>
              </div>
            </td>)
        }
      })}
    </tr >
  )
};

export default GridBodyRowColumnsSetting;