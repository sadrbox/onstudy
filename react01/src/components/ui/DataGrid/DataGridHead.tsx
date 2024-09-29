import React, { memo, useCallback, useEffect, useState } from 'react'
// import { translateWord } from 'src/i18'
import settings from "./settings.json" assert { type: "json" };
// import { TColumn } from 'src/objects/Todos'
import { getColumnWidthById, TColumn } from './services';
import { useContextDataGrid } from './DataGridContext';
// import styles from "./styles.module.scss";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import _ from 'lodash';
import { columns } from '../../../objects/Products/config';
import DataGridCheckbox from './UI/UICheckbox';
import UICheckboxAll from './UI/UICheckboxAll';



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

  function handleSorting(columnID: string) {
    return contextDataGrid?.states.setCurrentSorting(prev => ({
      id: columnID,
      order: prev.id === columnID && prev.order === 'asc' ? 'desc' : 'asc'
    }));
  }

  const { id: orderID, order: orderType } = { ...contextDataGrid?.states.currentSorting };
  return (
    <thead>
      <tr>
        {columns && columns.map((col: TColumn, keyID: number) => {
          if (col.id === 'selectOption') {
            return (
              <th key={keyID} style={{ width: getColumnWidthById(settings, col.id) }}>
                <div style={{ justifyItems: 'center' }}>
                  <span style={{ display: 'grid' }}><UICheckboxAll /></span>
                </div>
              </th>
            )
          } else {
            return (
              <th key={keyID} style={{ width: getColumnWidthById(settings, col.id) }} onClick={() => handleSorting(col.id)}>
                <div>
                  <span>{col.name}</span>
                  {orderID === col.id && orderType === 'asc' ? <FaSortAmountDownAlt size={16} style={{ justifySelf: 'end', marginLeft: '10px', color: (orderID === col.id ? '#333' : 'transparent') }} /> : <FaSortAmountDown size={16} style={{ justifySelf: 'end', marginLeft: '10px', color: (orderID === col.id ? '#333' : 'transparent') }} />}
                </div>
              </th>
            )
          }
        }
        )}
      </tr>
    </thead >
  )
}
export default DataGridHead;




