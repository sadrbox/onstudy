import React, { Dispatch, FC, MouseEventHandler, MutableRefObject, Ref, SyntheticEvent, useEffect, useRef, useState } from 'react'
import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
import { getTextAlignByColumnType, getViewValue } from '../../../utils/functions';
// import { translateWord } from 'src/i18';
import { useContextDataGrid } from './DataGridContext';
import { SetStateAction } from 'react';
// import DataGridCheckbox from './UI/UICheckbox';
import { TColumn, TDataItem } from './services';
import UICheckbox from './UI/UICheckbox';

type TProps = {
  dataRow: TDataItem;
  // rowID: number;
  actions: {
    activeRow: number | null, setActiveRow: Dispatch<SetStateAction<number | null>>//(rowID: number) => void;,
    // checkedAll: boolean, setCheckedAll: Dispatch<SetStateAction<boolean>>
  }
}

const DataGridBodyRow: FC<TProps> = ({ dataRow, actions }) => {
  const [columns, setColumns] = useState<TColumn[] | []>([]);
  const { contextDataGrid } = useContextDataGrid();
  // const checkboxRef = useRef<HTMLInputElement | null>(null);

  function setActiveRow(rowID: number) {

    if (contextDataGrid?.states) {
      // const uicheckbox = checkboxRef.current;
      // uicheckbox.checked = !uicheckbox.checked;
      // uicheckbox.focus();
      // contextDataGrid?.states?.setCheckedRows((prev) => [...prev, rowID])
    }
    actions.setActiveRow(rowID)
  }

  function isCheckedRow(rowID: number) {
    return contextDataGrid?.states?.checkedRows.includes(rowID) || false;
  }

  useEffect(() => {
    if (contextDataGrid?.columns) {
      setColumns(contextDataGrid?.columns)
    }
  }, [contextDataGrid?.columns]);

  const rowID = +dataRow.id;

  return (
    <tr data-row-id={rowID}>
      {columns.map((col: TColumn, keyID: number) => {
        if (col.id === 'selectOption') {
          // const isCheckedRow = isCheckedRow
          return (
            <td key={keyID}>
              <div style={{ justifyItems: 'center' }} className={(actions?.activeRow === rowID) ? styles.TabFieldActive : styles.TabField}>
                <UICheckbox tabIndex={keyID} rowID={rowID} checked={isCheckedRow(rowID)} actions={{ ...actions }} />

              </div>
            </td>)
        } else {
          const value = getViewValue(dataRow[col.id], col.id)

          return (
            <td key={keyID} onClick={() => actions.setActiveRow(rowID)}>
              <div style={getTextAlignByColumnType(col)} className={(actions?.activeRow === rowID) ? styles.TabFieldActive : styles.TabField}>
                <span>{value}</span>
              </div>
            </td>)
        }
      })}
    </tr >
  )
}

export default DataGridBodyRow;