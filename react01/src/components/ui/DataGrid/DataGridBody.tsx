import React, { useEffect, useState } from 'react'
// import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
import DataGridBodyRow from './DataGridBodyRow';
import ContextWrapper, { useContextDataGrid } from './DataGridContext';
import { TDataItem } from './services';



const DataGridBody = () => {

  // const [columns, setColumns] = useState<TColumn[] | []>([])
  const [dataRows, setDataRows] = useState<TDataItem[] | []>([])
  const [activeRow, setActiveRow] = useState<number | null>(null)

  const actions = {
    activeRow,
    setActiveRow
  }
  const { contextDataGrid } = useContextDataGrid()

  useEffect(() => {
    // if (dataGrid?.contextDataGrid?.columns) {
    //   setColumns(dataGrid?.contextDataGrid?.columns)
    // }
    if (contextDataGrid?.dataGrid) {
      // contextDataGrid.states.currentSorting
      setDataRows(contextDataGrid?.dataGrid)
    }
  }, [contextDataGrid]);

  return (
    <tbody>
      {dataRows && dataRows.map((dataRow: TDataItem, keyID: number) =>
        <DataGridBodyRow key={keyID} rowID={keyID} dataRow={dataRow} actions={{ ...actions }} />)}
    </tbody>
  )
}

export default DataGridBody;