import React, { useState, useEffect, ReactNode, FC } from 'react';
import { TColumnsHeader } from '../services';
import styles from "../styles.module.scss"
import UICheckbox from '../UI/UICheckbox';

type TGridBodyRowColumnsSetting = {
  column: TColumnsHeader
  rowID: number
}

const GridBodyRowColumnsSetting: FC<TGridBodyRowColumnsSetting> = ({ column, rowID }) => {
  const [columns, setColumns] = useState<[string, string | boolean | number][]>([])
  // console.log({ column })
  useEffect(() => {
    // setColumns(Object.keys(column))
    setColumns(Object.entries(column))

  }, [])

  return (
    <tr data-row-id={rowID}>
      {columns.map(([key, value], keyID) => {
        console.log({ key, value })
        if (typeof key === 'boolean') {
          // const isCheckedRow = value?.visible;
          return (
            <td key={keyID}>
              <div style={{ justifyItems: 'center' }} className={styles.TabField}>
                {/* <UICheckbox tabIndex={keyID} rowID={rowID} checked={false} /> */}
                <input type="checkbox" />
              </div>
            </td>)
        } else {
          // const value = getViewValue(dataRow[col.id], col.id)

          return (
            <td key={keyID}>
              <div className={styles.TabField}>
                <span>{value}</span>
              </div>
            </td>)
        }
      })}
    </tr >
  )
};

export default GridBodyRowColumnsSetting;