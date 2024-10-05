import React, { useState, useEffect, ReactNode, FC } from 'react';
import { getColumnSettings, getColumnWidthById, getColumnWidthSetting } from '../services';
import { useContextDataGrid } from '../GridDataContext';
import settings from "./settings.json"
import UICheckboxAll from '../UI/UICheckboxAll';
import _ from 'lodash';

// import { TColumnsHeader } from '../services';
import { translateColumnLable } from '../../../../i18/index';
import UICheckbox from '../UI/UICheckbox';


const GridHeadColumnsSetting: FC = () => {
  // const [columns, setColumns] = useState<TColumnsHeader[]>([])

  // useEffect(() => {
  //   if (settings) {
  //     setColumns(Object.values(settings.columns))
  //   }
  // }, [])


  return (
    <thead>
      <tr>
        {settings.columns && settings.columns.map((column, keyID: number) => {
          return (
            <th key={keyID} style={{ width: column?.width, minWidth: column?.width, maxWidth: column?.width }}>
              <div title={column?.hint} style={{ justifyItems: column?.alignment }}>
                <span>{translateColumnLable(column)}</span>
              </div>
            </th>)
        }
        )}
      </tr>
    </thead >
  );
};

export default GridHeadColumnsSetting;