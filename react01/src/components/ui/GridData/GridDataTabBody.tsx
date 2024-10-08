import React, { FC, useEffect, useState } from 'react'
// import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
// import DataGridBodyRow from './GridDataBodyRow';
// import { useContextDataGrid } from './GridContextData';
import { TColumn, TDataItem } from './types';
// import { TDataItem } from './services';
// import { columns } from '../../../objects/Products/config';
import GridDataTabBodyRow from './GridDataTabBodyRow';

type TProps = {
  columns: TColumn[]
  rows: TDataItem[]
}

const GridDataTabBody: FC<TProps> = ({ columns, rows }) => {
  // const [activeRow, setActiveRow] = useState<number | null>(null)
  // const states = {
  //   activeRow, setActiveRow
  // }

  // console.log(rows)
  console.log(columns)
  const result = columns.find(column => column.identifier === 'switcher')
  return (
    <tbody>
      {rows && rows.map((row: TDataItem, key: number) =>
        // if(columns.includes())

        <GridDataTabBodyRow key={key} rowID={row.id} columns={columns} row={row} />)}
      <tr style={{ height: "100%", visibility: 'hidden' }}></tr>
    </tbody>
  )
}

export default GridDataTabBody;