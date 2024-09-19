
import React, { useEffect, useState } from 'react'
import { TColumn } from 'src/objects/Todos'
import { useContextTodo } from 'src/objects/Todos/Context'
import styles from "./styles.module.scss";


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
const DataGridHeader = () => {
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
    <div
      id="header_row"
      className={styles.header_row}
      style={{ gridTemplateColumns: "27px 80px 1fr 100px" }}>
      {columns && columns.map((col: TColumn, keyID: number) => (
        <div
          key={keyID}
          className={styles.header_cell}>
          <div
            className={styles.field}>{col.field}</div>

        </div>
      ))}
    </div>
  )
}
export default DataGridHeader;