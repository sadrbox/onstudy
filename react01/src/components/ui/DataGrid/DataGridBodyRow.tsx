import React, { Dispatch, FC, MouseEventHandler, SyntheticEvent, useEffect, useState } from 'react'
import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
import { TColumn, TDataItem } from 'src/objects/Todos';
import { ITodo } from 'src/objects/Todos/types';
import { getAlignByColType, getViewValue } from '../../../utils/functions';
import { translateWord } from 'src/i18';
import { useContextDataGrid } from './DataGridContext';
import { SetStateAction } from 'react';
import DataGridCheckbox from './DataGridCheckbox';

type TProps = {
  dataRow: TDataItem;
  rowID: number;
  actions: {
    activeRow: number | null;
    setActiveRow: (rowID: number) => void;
  }
}

const DataGridBodyRow: FC<TProps> = ({ dataRow, rowID, actions }) => {
  const [columns, setColumns] = useState<TColumn[] | []>([]);
  const dataGrid = useContextDataGrid();

  useEffect(() => {
    if (dataGrid?.contextDataGrid?.columns) {
      setColumns(dataGrid?.contextDataGrid?.columns)
    }
  }, [dataGrid]);

  return (
    <tr data-row-id={rowID}>
      {columns.map((col: TColumn, keyID: number) => {
        if (col.id === 'selectOption') {
          return (
            <td key={keyID} onClick={() => actions.setActiveRow(rowID)}>
              <div style={{ justifyContent: 'center' }} className={(actions?.activeRow === rowID) ? styles.TabFieldActive : styles.TabField}>
                <span><DataGridCheckbox rowID={rowID} /></span>
              </div>
            </td>)
        } else {
          const value = getViewValue(dataRow[col.id], col.id)

          return (
            <td key={keyID} onClick={() => actions.setActiveRow(rowID)}>
              <div style={getAlignByColType(col)} className={(actions?.activeRow === rowID) ? styles.TabFieldActive : styles.TabField}>
                <span>{value}</span>
              </div>
            </td>)
        }
      })}
    </tr >
  )
}

export default DataGridBodyRow;