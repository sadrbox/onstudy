import React, { useEffect, useState, FC } from 'react'
import styles from "./styles.module.scss"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { IoReloadCircleOutline } from "react-icons/io5";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
// import { useContextTodo } from 'src/objects/Todos/Context';
import DataGridHead from './DataGridHead';
import DataGridBody from './DataGridBody';
import ContextWrapper, { TContextData, } from './DataGridContext';
import { createDataGridColumns, TColumn, TDataItem } from './services';
// import { TDataItem } from '../../../objects/Todos/index';

type TDataGridProps = {
  dataGridRows: TDataItem[],
  actions: {
    loadDataGrid: () => void
  }
}

export type TSorting = {
  id: string;
  order: string;
}


const DataGrid: FC<TDataGridProps> = ({ dataGridRows, actions: { loadDataGrid } }) => {

  const [contextData, setContextData] = useState<TContextData | undefined>(undefined);
  const [sortedDataGrid, setSortedDataGrid] = useState<TDataItem[] | undefined>(undefined);
  // const [columns, setColumns] = useState<TColumn[] | undefined>(undefined)
  const [currentSorting, setCurrentSorting] = useState<TSorting>({
    id: 'id',
    order: 'asc'
  });

  function sortMixedArray(arr: TDataItem[], columnID: string, order: string, locale = 'default') {
    return arr.sort((a, b) => {
      const aValue = order === "asc" ? a[columnID] : b[columnID];
      const bValue = order === "asc" ? b[columnID] : a[columnID];

      return typeof aValue === 'number' && typeof bValue === 'number'
        ? aValue - bValue
        : aValue.toString().localeCompare(bValue.toString(), locale, { numeric: true });
    });
  }


  useEffect(() => {
    if (sortedDataGrid?.length) {
      const DataItem1 = sortedDataGrid[0];
      const columns = createDataGridColumns(DataItem1)
      const dataGrid = sortMixedArray(sortedDataGrid, currentSorting.id, currentSorting.order) || [];
      setContextData({
        dataGrid,
        columns,
        actions: {
          loadDataGrid,
        },
        states: {
          currentSorting,
          setCurrentSorting
        }
      })
    } else {
      setContextData(undefined)
    }
  }, [sortedDataGrid, currentSorting.id, currentSorting.order]);


  useEffect(() => {
    if (dataGridRows.length) {
      setSortedDataGrid(dataGridRows)
    }
  }, [dataGridRows])



  return (
    <ContextWrapper contextData={contextData}>
      <div className={styles.tab}>
        <div className={styles.tabPanel}>
          <button style={{ textAlign: 'left' }}><PiDotsThreeCircleLight size={26} /></button>
          <button style={{ textAlign: 'left' }}><IoEllipsisHorizontalCircle size={26} /></button>
          <button onClick={() => loadDataGrid()} style={{ textAlign: 'right' }}><IoReloadCircleOutline size={26} /></button>
        </div>
        <div className={styles.tabWrapper}>
          <table>
            <DataGridHead />
            <DataGridBody />
          </table>
        </div>
      </div>
    </ContextWrapper>
  )
}
export default DataGrid;

