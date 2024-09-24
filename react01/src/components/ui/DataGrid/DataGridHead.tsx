
import React, { useEffect, useState } from 'react'
// import { translateWord } from 'src/i18'
import settings from "./settings.json" assert { type: "json" };
import { TColumn } from 'src/objects/Todos'
import { useContextTodo } from 'src/objects/Todos/Context'
import { getColumnWidthById } from './services';
// import styles from "./styles.module.scss";




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
          <th key={keyID} style={{ width: getColumnWidthById(settings, col.id) }}>
            <div>
              <span>{col.name}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>

  )
}
export default DataGridHead;


