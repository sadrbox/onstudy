import React, { useEffect, useState } from 'react'
// import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
import DataGridBodyRow from './DataGridBodyRow';
import { useContextDataGrid } from './DataGridContext';



const DataGridBody = () => {

  // const [columns, setColumns] = useState<TColumn[] | []>([])
  const [dataRows, setDataRows] = useState<TDataItem[] | []>([])
  const dataGrid = useContextDataGrid()

  useEffect(() => {
    // if (dataGrid?.contextDataGrid?.columns) {
    //   setColumns(dataGrid?.contextDataGrid?.columns)
    // }
    if (dataGrid?.contextDataGrid?.dataRows) {

      setDataRows(dataGrid?.contextDataGrid?.dataRows)
    }


  }, [dataGrid])

  return (
    <tbody>
      {dataRows && dataRows.map((dataRow: TDataItem, keyID: number) =>
        <DataGridBodyRow key={keyID} dataRow={dataRow} />)}
    </tbody >
  )
}

export default DataGridBody