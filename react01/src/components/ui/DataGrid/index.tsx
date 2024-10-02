import React, { useEffect, useState, FC, Suspense, useRef, MutableRefObject, RefObject } from 'react'
import styles from "./styles.module.scss"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { IoReloadCircleOutline } from "react-icons/io5";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
// import { useContextTodo } from 'src/objects/Todos/Context';
import DataGridHead from './DataGridHead';
import DataGridBody from './DataGridBody';
import ContextWrapper, { TContextData, } from './DataGridContext';
import { createDataGridColumns, TDataItem } from './services';
// import { TDataItem } from '../../../objects/Todos/index';
// import { TDataItem } from 'src/components/ui/DataGrid/services';

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
  const [checkedRows, setCheckedRows] = useState<number[]>([])
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  let timeoutInstance: NodeJS.Timeout = setTimeout(() => { }, 0);
  const [currentSorting, setCurrentSorting] = useState<TSorting>({
    id: 'id',
    order: 'asc'
  });

  function sortMixedArray(arr: TDataItem[], columnID: string, order: string, locale = 'default') {
    return arr.sort((a, b) => {
      const aValue = order === "asc" ? a[columnID] : b[columnID];
      const bValue = order === "asc" ? b[columnID] : a[columnID];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      } else if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.toString().localeCompare(bValue.toString(), locale, { numeric: true });
      }
      return (aValue ? -1 : bValue ? +1 : 0)
      // return -1;
    })
  }



  useEffect(() => {
    if (sortedDataGrid?.length) {
      const DataItem1 = sortedDataGrid[0];
      const columns = createDataGridColumns(DataItem1)
      const dataGrid = sortMixedArray(sortedDataGrid, currentSorting.id, currentSorting.order) || [];
      const IDs = sortedDataGrid.map(row => row.id as number) || [];




      setContextData({
        dataGrid,
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


  /////////////////////////////////////////////////////////

  useEffect(() => {
    if (sortedDataGrid) {
      const IDs = sortedDataGrid.map(row => row.id as number) || []
      if (isAllChecked) {
        setCheckedRows(IDs)
      } else {

        if (checkedRows.length < IDs.length) {
          setCheckedRows((prev) => [...prev])
        } else {
          setCheckedRows([])
        }
      }
    }
  }, [isAllChecked])

  /////////////////////////////////////////////////////////

  useEffect(() => {
    if (sortedDataGrid) {
      const IDs = sortedDataGrid.map(row => row.id as number) || []

      if (checkedRows.length === IDs.length) {
        // console.log({ checkedRows, IDs })
        setIsAllChecked(true)
        // setCheckedRows((prev) => [...prev])
      } else {
        setIsAllChecked(false)
      }
    }
  }, [checkedRows])

  /////////////////////////////////////////////////////////

  useEffect(() => {
    if (dataGridRows.length) {
      setSortedDataGrid(dataGridRows)
    }
  }, [dataGridRows])




  function onScrollTab(e: React.UIEvent<HTMLDivElement>) {
    const tabWrapper = e.currentTarget;
    const theadTr: HTMLTableRowElement | null = tabWrapper.querySelector('thead tr');
    if (theadTr !== null) {
      theadTr?.classList.add(styles.onScrollTab)
      clearTimeout(timeoutInstance)
      timeoutInstance = setTimeout(() => {
        // console.log(styles.onScrollTab)
        if (theadTr.classList.contains(styles.onScrollTab)) {
          theadTr?.classList.remove(styles.onScrollTab)
        }
      }, 500);

    }
  }



  return (
    <ContextWrapper contextData={contextData}>
      <div className={styles.Tab}>
        <div className={styles.TabPanel}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: '5px' }}>
            <button className={styles.Button}><span>Добавить</span></button>
            <button className={styles.Button}><span>Удалить</span></button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', gap: '5px' }}>
            <button onClick={() => loadDataGrid()} className={[styles.Button, styles.ButtonImg].join(' ')}>
              <div className={styles.ImgReload} ></div>
            </button>
            <button className={[styles.Button, styles.ButtonImg].join(' ')}>
              <div className={styles.ImgSetting} ></div>
            </button>
          </div>
        </div>
        <div className={styles.TabWrapper} onScrollCapture={(e) => onScrollTab(e)}>
          <Suspense fallback={<div>Loading...</div>}>
            <table>
              <DataGridHead />
              <DataGridBody />
            </table>
          </Suspense>
        </div>
      </div>
    </ContextWrapper >
  )
}
export default DataGrid;
