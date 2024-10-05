import React, { FC, useEffect, useState } from 'react'
// import { translateWord } from 'src/i18'
// import settings from "./settings.json" assert { type: "json" };
// import { TColumn } from 'src/objects/Todos'
import { TColumn } from './types';
import { useContextDataGrid } from './GridDataContext';
// import styles from "./styles.module.scss";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import _ from 'lodash';
// import { columns } from '../../../objects/Products/config';
// import DataGridCheckbox from './UI/UICheckbox';
import UICheckboxAll from './UI/UICheckboxAll';
import { translateColumnLable } from '../../../i18/index';
import { getColumnWidthById } from './services';


type TProps = {
  columns: TColumn[]
}
///////////////////////////////////////////////////////////////////////////
const GridDataHead: FC<TProps> = ({ columns }) => {
  // const [columns, setColumns] = useState<TColumn[]>()
  const { contextDataGrid } = useContextDataGrid()

  // console.log(contextDataGrid)
  ///////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   const dataGridColumns = contextDataGrid?.columns;
  //   if (!_.isEqual(dataGridColumns, columns)) {
  //     setColumns(dataGridColumns)
  //   }
  // }, [contextDataGrid?.columns, columns])

  function handleSorting(columnID: string) {
    return contextDataGrid?.states.setCurrentSorting((prev) => ({
      id: columnID,
      order: prev.id === columnID && prev.order === 'asc' ? 'desc' : 'asc'
    }));
  }
  const { id: orderID, order: orderType } = { ...contextDataGrid?.states.currentSorting };
  return (
    <thead>
      <tr>
        {columns && columns.map((col: TColumn, keyID: number) => {
          if (col.type === 'string' || col.type === "number" || col.type === 'boolean') {
            const colWidth = getColumnWidthById(columns, col.identifier);
            if (col.identifier === 'switcher') {
              return (
                <th key={keyID} style={{ width: colWidth, minWidth: colWidth }}>
                  <div style={{ justifyItems: 'center' }}>
                    <span style={{ display: 'grid' }}><UICheckboxAll /></span>
                  </div>
                </th>
              )
            } else {
              return (
                <th key={keyID} style={{ width: colWidth, minWidth: colWidth }} onClick={() => handleSorting(col.identifier)}>
                  <div>
                    <span>{translateColumnLable(col)}</span>
                    {orderID === col.identifier && orderType === 'asc' ? <FaSortAmountDownAlt size={16} style={{ justifySelf: 'end', marginLeft: '10px', color: (orderID === col.identifier ? '#333' : 'transparent') }} /> : <FaSortAmountDown size={16} style={{ justifySelf: 'end', marginLeft: '10px', color: (orderID === col.identifier ? '#333' : 'transparent') }} />}
                  </div>
                </th>
              )
            }
          }
        }
        )}
      </tr>
    </thead >
  )
}
export default GridDataHead;




