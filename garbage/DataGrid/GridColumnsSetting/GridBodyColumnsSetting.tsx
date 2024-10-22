import React, { useState, useEffect, ReactNode, FC } from 'react';
import { TColumnsHeader, TDataItem } from '../services';
// import columns from "../columns.json"
// import settings from "./settings.json"
import GridBodyRowColumnsSetting from './GridBodyRowColumnsSetting';



const GridBodyColumnsSetting: FC = () => {
  const [columns, setColumns] = useState<TColumnsHeader[]>([])

  useEffect(() => {
    if (settings) {
      setColumns(Object.values(settings.columns))
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