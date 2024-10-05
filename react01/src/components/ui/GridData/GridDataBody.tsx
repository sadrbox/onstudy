import React, { FC, useEffect, useState } from 'react'
// import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
import DataGridBodyRow from './GridDataBodyRow';
import { useContextDataGrid } from './GridDataContext';
import { TColumn, TDataItem } from './types';
// import { TDataItem } from './services';
import { columns } from '../../../objects/Products/config';

type TProps = {
  columns: TColumn[]
  rows: TDataItem[]
}

const GridDataBody: FC<TProps> = ({ columns, rows }) => {

  // const [dataRows, setDataRows] = useState<TDataItem[] | []>([])
  const [activeRow, setActiveRow] = useState<number | null>(null)
  // const { contextDataGrid } = useContextDataGrid()

  const actions = {
    activeRow, setActiveRow
  }

  // useEffect(() => {
  //   if (contextDataGrid?.dataGrid) {
  //     setDataRows(contextDataGrid?.dataGrid)
  //   }
  // }, [contextDataGrid]);

  const render = (
    <tbody>
      {rows && rows.map((row: TDataItem, keyID: number) =>
        <DataGridBodyRow key={keyID} columns={columns} row={row} actions={{ ...actions }} />)}
      <tr style={{ height: "100%", visibility: 'hidden' }}></tr>
    </tbody>
  )
  return render;
}

export default GridDataBody;