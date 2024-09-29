import React, { memo, useCallback, useEffect, useState } from 'react'
// import { translateWord } from 'src/i18'
import settings from "./settings.json" assert { type: "json" };
// import { TColumn } from 'src/objects/Todos'
import { getColumnWidthById, TColumn } from './services';
import { useContextDataGrid } from './DataGridContext';
// import styles from "./styles.module.scss";
import _ from 'lodash';
import { columns } from '../../../objects/Products/config';



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
const DataGridHead = () => {
  const [columns, setColumns] = useState<TColumn[]>()
  const { contextDataGrid } = useContextDataGrid()

  // console.log(contextDataGrid)
  ///////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const dataGridColumns = contextDataGrid?.columns;
    if (!_.isEqual(dataGridColumns, columns)) {
      setColumns(dataGridColumns)
    }
  }, [contextDataGrid?.columns, columns])

  // onClick={() => setSorting(col.id)
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
    </thead >
  )
}
export default DataGridHead;




