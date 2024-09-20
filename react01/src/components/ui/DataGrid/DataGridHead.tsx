
import React, { useEffect, useState } from 'react'
import { TColumn } from 'src/objects/Todos'
import { useContextTodo } from 'src/objects/Todos/Context'
import styles from "./styles.module.scss";



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
const DataGridHead = () => {
  const [columns, setColumns] = useState<TColumn[]>()
  const contextData = useContextTodo()

  ///////////////////////////////////////////////////////////////////////////
  const createHeaderColumns = () => {
    if (contextData?.context?.columns) {
      // contextData.context
      setColumns(contextData?.context.columns)
      // console.log(contextData)
    }
  }
  ///////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    createHeaderColumns();
  }, [columns])


  return (

    <thead>
      <tr>
        {columns && columns.map((col: TColumn, keyID: number) => (
          <th key={keyID}>
            <div>{col.field}</div>
          </th>
        ))}
      </tr>
    </thead>

  )
}
export default DataGridHead;