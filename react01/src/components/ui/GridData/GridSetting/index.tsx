import React, { useState, useEffect, ReactNode, FC } from 'react';
// import GridHeadColumnsSetting from './GridHeadSetting';
// import GridBodyColumnsSetting from './GridBodySetting';
// import ContextWrapper, { TContextData } from './GridColumnsSettingContext';
import { TColumn, TDataItem, TGridStates, TSorting } from '../types';
import GridHeadSetting from './GridSettingTabHeader';
import GridBodySetting from './GridSettingTabBody';
import ContextWrapper, { TContextGridSetting, useContextGridSetting } from './GridSettingContext';
// import { sortGridRows } from '../services';
// import { columns } from "./settings.json"
// import { columns } from '../../../../objects/Products/config';

type TProps = {
  rows: TColumn[]
}
const GridSetting: FC<TProps> = ({ rows }) => {


  const [contextGridSetting, setContextGridSetting] = useState<TContextGridSetting | undefined>(undefined);
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const [visibleRows, setVisibleRows] = useState<number[]>([])
  const [sortableRows, setSortableRows] = useState<number[]>([])


  useEffect(() => {
    // if (sortedDataGrid?.length) {
    // const DataItem1 = sortedDataGrid[0];
    // const columns = createDataGridColumns(DataItem1)
    // const gridRows = sortGridRows(sortedDataGrid, currentSorting.id, currentSorting.order) || [];
    const IDs = rows.map(row => row?.position) || [];
    // console.log(columns)
    setContextGridSetting({
      IDs,
      actions: {
      },
      states: {
        activeRow, setActiveRow,
        visibleRows, setVisibleRows,
        sortableRows, setSortableRows
      }
    })
  }, [visibleRows, activeRow, sortableRows]);


  return (
    <ContextWrapper contextGridSetting={contextGridSetting}>
      <table>
        <GridHeadSetting />
        <GridBodySetting rows={rows} />
      </table>
    </ContextWrapper>
  );
};

export default GridSetting;