import React, { useState, useEffect, ReactNode, FC } from 'react';
import { useContextDataGrid } from '../DataGridContext';
import { columns } from "./settings.json"
import UICheckboxAll from '../UI/UICheckboxAll';
import _ from 'lodash';

// import { TColumnsHeader } from '../services';
// import { translateColumnLable, translateWord } from '../../../../i18/index';
import UICheckbox from '../UI/UICheckbox';
import { translateColumnLable } from 'src/i18';
import { TColumn } from 'src/components/ui/GridData/types';


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
        {columns && columns.map((column, keyID: number) => {
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