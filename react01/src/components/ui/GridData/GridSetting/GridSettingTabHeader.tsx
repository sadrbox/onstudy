import React, { useState, useEffect, ReactNode, FC } from 'react';
import { getColumnSettings, getColumnWidthById, getColumnWidthSetting } from '../services';
// import { useContextDataGrid } from '../GridContextData';
import settings from "./settings.json"
import UICheckboxAll from '../GridDataTabHeaderCheckbox';
import _ from 'lodash';

// import { TColumnsHeader } from '../services';
import UICheckbox from '../GridDataTabBodyRowCheckbox';
import { getTranslateColumn } from 'src/i18';
import { TColumn } from '../types';


const GridSettingHeader: FC = () => {
  const [columns, setColumns] = useState<TColumn[]>([])

  useEffect(() => {
    if (columns) {
      const sortedColumns = settings.columns.sort((a, b) => b.position - a.position);
      setColumns(sortedColumns)
    }
  }, [])


  return (
    <thead>
      <tr>
        {columns && columns.map((column, keyID: number) => {
          return (
            <th key={keyID} style={{ width: column?.width, minWidth: column?.width }}>
              <div title={column?.hint}>
                <span>{getTranslateColumn(column)}</span>
              </div>
            </th>)
        })}
      </tr>
    </thead >
  );
};

export default GridSettingHeader;