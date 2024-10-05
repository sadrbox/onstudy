import React, { useState, useEffect, ReactNode, FC } from 'react';
import GridHeadColumnsSetting from './GridHeadColumnsSetting';
import GridBodyColumnsSetting from './GridBodyColumnsSetting';
import ContextWrapper, { TContextData } from './GridColumnsSettingContext';
import { TDataItem, TSorting } from '../types';
import { sortGridRows } from '../services';
import { columns } from "./settings.json"

const GridColumnsSetting: FC = () => {


  const [contextData, setContextData] = useState<TContextData | undefined>(undefined);
  const [sortedDataGrid, setSortedDataGrid] = useState<TDataItem[] | undefined>(undefined);
  const [checkedRows, setCheckedRows] = useState<number[]>([])
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  // const [openTabSetting, setOpenTabSetting] = useState<boolean>(false)
  // let timeoutInstance: NodeJS.Timeout = setTimeout(() => { }, 0);
  const [currentSorting, setCurrentSorting] = useState<TSorting>({
    id: 'id',
    order: 'asc'
  });
  useEffect(() => {
    if (sortedDataGrid?.length) {
      // const DataItem1 = sortedDataGrid[0];
      // const columns = createDataGridColumns(DataItem1)
      const gridRows = sortGridRows(sortedDataGrid, currentSorting.id, currentSorting.order) || [];
      const IDs = sortedDataGrid.map(row => row.id as number) || [];
      // console.log(columns)



      setContextData({
        gridRows,
        columns,
        IDs,
        actions: {
          loadDataGrid,
        },
        states: {
          currentSorting, setCurrentSorting,
          checkedRows, setCheckedRows,
          isAllChecked, setIsAllChecked
        }
      })
    } else {
      setContextData(undefined)
    }
  }, [sortedDataGrid, currentSorting, checkedRows, isAllChecked]);


  return (
    <ContextWrapper contextData={contextData}>
      <table>
        <GridHeadColumnsSetting />
        <GridBodyColumnsSetting />
      </table>
    </ContextWrapper>
  );
};

export default GridColumnsSetting;