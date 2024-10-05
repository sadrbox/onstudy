import React, { useState, useEffect, ReactNode, FC } from 'react';
// import { TColumn, TColumnsHeader, TDataItem } from '../services';
// import columns from "../columns.json"
// import settings from "./settings.json"
import GridBodyRowColumnsSetting from './GridBodyRowColumnsSetting';
import { useContextDataGrid } from '../GridDataContext';
import { TColumn } from '../types';



const GridBodyColumnsSetting: FC = () => {
  const { contextDataGrid } = useContextDataGrid()
  const [columns, setColumns] = useState<TColumn[]>([])

  useEffect(() => {
    if (contextDataGrid?.columns) {
      setColumns(contextDataGrid?.columns)
    }
  }, [])

  return (
    <tbody>
      {columns && columns.map((column, keyID: number) =>
        <GridBodyRowColumnsSetting key={keyID} rowID={keyID} column={column} />)}
      <tr style={{ height: "100%", visibility: 'hidden' }}></tr>
    </tbody>
  );
};

export default GridBodyColumnsSetting;