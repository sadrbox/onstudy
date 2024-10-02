import React, { useEffect, useState } from 'react'
// import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
import DataGridBodyRow from './DataGridBodyRow';
import { useContextDataGrid } from './DataGridContext';
import { TDataItem } from './services';



const DataGridBody = () => {

  const [dataRows, setDataRows] = useState<TDataItem[] | []>([])
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const { contextDataGrid } = useContextDataGrid()

  const actions = {
    activeRow, setActiveRow
  }

  useEffect(() => {
    if (contextDataGrid?.dataGrid) {
      setDataRows(contextDataGrid?.dataGrid)
    }
  }, [contextDataGrid]);

  const render = (
    <tbody>
      {dataRows && dataRows.map((dataRow: TDataItem, keyID: number) =>
        <DataGridBodyRow key={keyID} dataRow={dataRow} actions={{ ...actions }} />)}
      <tr style={{ height: "100%", visibility: 'hidden' }}>5</tr>
    </tbody>
  )
  return render;
}

export default DataGridBody;