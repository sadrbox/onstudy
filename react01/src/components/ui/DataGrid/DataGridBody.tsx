import React, { useEffect, useState } from 'react'
// import styles from "./styles.module.scss";
import { useContextTodo } from 'src/objects/Todos/Context';
import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
import DataGridBodyRow from './DataGridBodyRow';



const DataGridBody = () => {

  const [columns, setColumns] = useState<TColumn[] | []>([])
  const [dataRows, setDataRows] = useState<TDataItem[] | []>([])
  const contextData = useContextTodo()

  useEffect(() => {
    if (contextData?.context?.columns) {
      setColumns(contextData?.context?.columns)
    }
    if (contextData?.context?.dataRows) {
      setDataRows(contextData?.context?.dataRows)
    }


  }, [contextData])

  return (
    <tbody>
      {dataRows && dataRows.map((dataRow: TDataItem, keyID: number) =>
        <DataGridBodyRow key={keyID} dataRow={dataRow} />)}
    </tbody >
  )
}

export default DataGridBody