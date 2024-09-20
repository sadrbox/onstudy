import React, { FC, useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { useContextTodo } from 'src/objects/Todos/Context';
import { TColumn, TDataItem } from 'src/objects/Todos';
import { ITodo } from 'src/objects/Todos/types';

type TProps = {
  dataRow: TDataItem
}

const DataGridBodyRow: FC<TProps> = ({ dataRow }) => {
  const [columns, setColumns] = useState<TColumn[] | []>([])


  const contextData = useContextTodo()



  useEffect(() => {
    if (contextData?.context?.columns) {
      setColumns(contextData?.context?.columns)
    }


  }, [contextData])
  // console.log(dataRow)

  return (
    <tr
      className={styles.bodyRow}>
      {columns.map((col: TColumn, keyID: number) => {
        return (
          <td key={keyID}>
            <div
              className={styles.field}>
              <span>{dataRow[col.field]}</span>
            </div>
          </td>)
      })
      }
    </tr>
  )
}

export default DataGridBodyRow;