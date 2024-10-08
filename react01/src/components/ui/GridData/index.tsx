import React, { useEffect, useState, FC, Suspense, useRef, MutableRefObject, RefObject } from 'react'
import styles from "./styles.module.scss"
// import { PiDotsThreeCircleLight } from "react-icons/pi";
// import { IoReloadCircleOutline } from "react-icons/io5";
// import { IoEllipsisHorizontalCircle } from "react-icons/io5";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import GridDataHead from './GridDataHead';
// import GridDataHead from './GridDataBody';
import ContextWrapper, { TContextData, } from './GridDataContext';
import { TColumn, TDataItem } from './types';
// import GridColumnsSetting from './GridSetting';
import GridDataTabHeader from './GridDataTabHeader';
import GridDataTabBody from './GridDataTabBody';
import { TSorting } from './types';
import { sortGridRows } from './services';
// import { columns } from '../../../objects/Products/config';
import GridSetting from './GridSetting';

type TProps = {
  params: {
    columns: TColumn[]
    rows: TDataItem[]
  }
  actions: {
    loadDataGrid: () => void
  }
}


const GridData: FC<TProps> = ({ params: { columns, rows }, actions: { loadDataGrid } }) => {

  const [contextGridData, setContextGridData] = useState<TContextData | undefined>(undefined);
  const [sortedDataGrid, setSortedDataGrid] = useState<TDataItem[] | undefined>(undefined);
  const [checkedRows, setCheckedRows] = useState<number[]>([])
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const [openTabSetting, setOpenTabSetting] = useState<boolean>(false)
  let timeoutInstance: NodeJS.Timeout = setTimeout(() => { }, 0);
  const [sortingRows, setSortingRows] = useState<TSorting>({
    id: 'id',
    order: 'asc'
  });



  useEffect(() => {
    if (sortedDataGrid?.length) {
      const dataGrid = sortGridRows(sortedDataGrid, sortingRows.id, sortingRows.order) || [];
      const IDs = sortedDataGrid.map(row => row.id as number) || [];
      setContextGridData({
        dataGrid,
        columns,
        IDs,
        actions: {
          loadDataGrid,
        },
        states: {
          activeRow, setActiveRow,
          sortingRows, setSortingRows,
          checkedRows, setCheckedRows,
          isAllChecked, setIsAllChecked
        }
      })
    } else {
      setContextGridData(undefined)
    }
  }, [sortedDataGrid, sortingRows, checkedRows, activeRow, isAllChecked]);

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
    if (rows.length) {
      setSortedDataGrid(rows)
    }
  }, [rows])

  function onScrollTab(e: React.UIEvent<HTMLDivElement>) {
    const tabWrapper = e.currentTarget;
    const theadTr: HTMLTableRowElement | null = tabWrapper.querySelector('thead tr');
    if (theadTr !== null) {
      theadTr?.classList.add(styles.onScrollTab)
      clearTimeout(timeoutInstance)
      timeoutInstance = setTimeout(() => {
        if (theadTr.classList.contains(styles.onScrollTab)) {
          theadTr?.classList.remove(styles.onScrollTab)
        }
      }, 3000);
    }
  }
  function onClickButtonTabSetting(e: React.UIEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOpenTabSetting((prev) => !prev)
  }

  return (
    <ContextWrapper contextGridData={contextGridData}>
      <div className={styles.Tab}>
        <div className={styles.TabPanel}>
          {!openTabSetting &&
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: '5px' }}>
              <button className={styles.Button}><span>Добавить</span></button>
              <button className={styles.Button}><span>Удалить</span></button>
            </div>
          }
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', gap: '5px' }}>
            <button onClick={() => loadDataGrid()} className={[styles.Button, styles.ButtonImg].join(' ')}>
              <div className={styles.ImgReload} ></div>
            </button>
            <button className={[styles.Button, styles.ButtonImg].join(' ')} onClick={(e) => onClickButtonTabSetting(e)}>
              <div className={styles.ImgSetting}></div>
            </button>
          </div>
        </div>
        <div className={styles.TabWrapper} onScroll={(e) => onScrollTab(e)}>
          {openTabSetting ? (<GridSetting rows={columns} />) :
            (<table>
              <GridDataTabHeader columns={columns} />
              <GridDataTabBody columns={columns} rows={rows} />
            </table>)}
        </div>
      </div>
    </ContextWrapper >
  )
}
export default GridData;
