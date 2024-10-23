import React, { useState, useEffect, ReactNode, FC } from 'react';
// import { TColumn, TColumnsHeader, TDataItem } from '../services';
// import columns from "../columns.json"
// import settings from "./settings.json"
// import GridBodyRowColumnsSetting from './GridBodyRowSetting';
// import { useContextDataGrid } from '../GridDataContext';
import { TColumn, TGridStates } from '../types';
import GridSettingTabBodyRow from './GridSettingTabBodyRow';
import { useContextGridSetting } from './GridSettingContext';
// import GridDataContext from '../GridData/GridDataContext';
// import GridSettingContext from './GridSettingContext';

type TProps = {
  columns: TColumn[]
}

const GridSettingTabBody: FC<TProps> = ({ columns }) => {

  return (
    <tbody>
      {columns && columns.map((column, key: number) =>
        <GridSettingTabBodyRow key={key} column={column} rowID={column.position} />)}
      <tr style={{ height: "100%", visibility: 'hidden' }}></tr>
    </tbody>
  );
};

export default GridSettingTabBody;