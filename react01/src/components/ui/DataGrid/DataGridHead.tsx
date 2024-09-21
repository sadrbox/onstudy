
import React, { useEffect, useState } from 'react'
import { TColumn } from 'src/objects/Todos'
import { useContextTodo } from 'src/objects/Todos/Context'
import styles from "./styles.module.scss";
import { getTranslateWord } from 'src/utils/functions';



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
    getTranslateWord('work')
  }, [columns])


  return (

    <thead>
      <tr>
        {columns && columns.map((col: TColumn, keyID: number) => (
          <th key={keyID}>
            <div>
              <span>{col.id}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>

  )
}
export default DataGridHead;