import React, { FC, useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { useContextTodo } from 'src/objects/Todos/Context';
import { TColumn, TDataItem } from 'src/objects/Todos';
import { ITodo } from 'src/objects/Todos/types';
import { getAlignByColType, getViewValue } from '../../../utils/functions';
import { translateWord } from 'src/i18';

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
  }, [contextData]);

  return (
    <tr>
      {columns.map((col: TColumn, keyID: number) => {
        const value = getViewValue(dataRow[col.id], col.id)

        return (
          <td key={keyID}>
            <div
              className={styles.tabCell}>
              <span style={getAlignByColType(col)}>{value}</span>
            </div>
          </td>)
      })
      }
    </tr>
  )
}

export default DataGridBodyRow;