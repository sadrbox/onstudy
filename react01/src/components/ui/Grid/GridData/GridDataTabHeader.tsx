import React, { FC, useEffect, useState } from 'react'
// import { translateWord } from 'src/i18'
// import settings from "./settings.json" assert { type: "json" };
// import { TColumn } from 'src/objects/Todos'
import { TColumn, TGridStates } from '../types';
import { useContextGridData } from './GridDataContext';
// import styles from "./styles.module.scss";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import _ from 'lodash';
// import { columns } from '../../../objects/Products/config';
// import DataGridCheckbox from './UI/UICheckbox';
import GridDataTabHeaderCheckbox from './GridDataTabHeaderCheckbox';
import { getColumnWidthById } from './services';
import { getTranslateColumn } from 'src/i18';


type TProps = {
  columns: TColumn[]
}
///////////////////////////////////////////////////////////////////////////
const GridDataTabHeader: FC<TProps> = ({ columns }) => {
  // const [columns, setColumns] = useState<TColumn[]>()
  const { context } = useContextGridData()
  // const { states } = context;
  // console.log(contextDataGrid)
  ///////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   const dataGridColumns = contextDataGrid?.columns;
  //   if (!_.isEqual(dataGridColumns, columns)) {
  //     setColumns(dataGridColumns)
  //   }
  // }, [contextDataGrid?.columns, columns])

  function handleSorting(columnID: string) {
    if (context?.states?.setSortingRows)
      return context?.states?.setSortingRows((prev) => ({
        id: columnID,
        order: prev.id === columnID && prev.order === 'asc' ? 'desc' : 'asc'
      }));
  }

  const { id: orderID, order: orderType } = { ...context?.states.sortingRows };
  return (
    <thead>
      <tr>
        {columns && columns.map((column: TColumn, keyID: number) => {
          if (column.type === 'string' || column.type === "number" || column.type === 'boolean') {
            if (column.identifier === 'switcher') {
              return (
                <th key={keyID} style={{ width: column?.width, minWidth: column?.width, maxWidth: column?.width }}>
                  <div style={{ justifyItems: 'center' }}>
                    <span style={{ display: 'grid' }}><GridDataTabHeaderCheckbox /></span>
                  </div>
                </th>
              )
            } else {
              return (
                <th key={keyID} style={{ width: column?.width, minWidth: column?.width, maxWidth: column?.width }} onClick={() => handleSorting(column.identifier)}>
                  <div>
                    <span>{getTranslateColumn(column)}</span>
                    {orderID === column.identifier && orderType === 'asc' ? <FaSortAmountDownAlt size={16} style={{ justifySelf: 'end', marginLeft: '10px', color: (orderID === column.identifier ? '#333' : 'transparent') }} /> : <FaSortAmountDown size={16} style={{ justifySelf: 'end', marginLeft: '10px', color: (orderID === column.identifier ? '#333' : 'transparent') }} />}
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
export default GridDataTabHeader;




