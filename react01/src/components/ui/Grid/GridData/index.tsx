import React, { useEffect, useState, FC, Suspense, useRef, MutableRefObject, RefObject, Dispatch, SetStateAction } from 'react'
import styles from "../styles.module.scss"
// import { PiDotsThreeCircleLight } from "react-icons/pi";
// import { IoReloadCircleOutline } from "react-icons/io5";
// import { IoEllipsisHorizontalCircle } from "react-icons/io5";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import GridDataHead from './GridDataHead';
// import GridDataHead from './GridDataBody';
import ContextWrapper, { TContextData, } from './GridDataContext';
import { TColumn, TDataItem } from '../types';
// import GridColumnsSetting from './GridSetting';
import GridDataTabHeader from './GridDataTabHeader';
import GridDataTabBody from './GridDataTabBody';
import { TSorting } from '../types';
import { sortGridRows } from './services';
// import { columns } from '../../../objects/Products/config';
import GridSetting from '../GridSetting';
import { createPortal } from 'react-dom';
import { useAppContext } from 'src/components/app/AppContext';
import { TTabs } from '../../Tabs/types';

type TProps = {
  params: {
    columns: TColumn[]
    rows: TDataItem[]
  }
  actions: {
    loadDataGrid: () => void
    setShowTabSetting: Dispatch<SetStateAction<boolean>>
  }
}


const GridData: FC<TProps> = ({ params: { columns, rows }, actions: { loadDataGrid, setShowTabSetting } }) => {

  const appContext = useAppContext();
  const [contextGridData, setContextGridData] = useState<TContextData | undefined>(undefined);
  const [sortedDataGrid, setSortedDataGrid] = useState<TDataItem[] | undefined>(undefined);
  const [checkedRows, setCheckedRows] = useState<number[]>([])
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  const [activeRow, setActiveRow] = useState<number | null>(null)
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

  // useEffect(() => {
  //   const getStoreSetting = localStorage.getItem("username_gridColumnsVisible_products")
  //   if (!getStoreSetting) {
  //     const visibleIDs = columns.filter(item => item.visible === true)
  //       .map(item => item.position);
  //     setVisibleRows(visibleIDs)
  //     const sortableIDs = columns.filter(item => item.sortable === true)
  //       .map(item => item.position);
  //     setVisibleRows(sortableIDs)
  //   } else {
  //     const storeSettings = JSON.parse(getStoreSetting)
  //     setVisibleRows(storeSettings?.visibleRows)
  //     setSortableRows(storeSettings?.sortableRows)
  //   }
  // }, []);
  function onClickButtonTabSetting(e: React.UIEvent<HTMLButtonElement>) {
    e.preventDefault();
    setShowTabSetting((prev) => !prev)
  }

  function addTab() {
    const addNewTab = appContext?.setContext;
    addNewTab((prev) => {
      const prevTabs = prev?.tabs;
      return { tabs: [...prevTabs, { id: "293h48h8", label: "Контрагент", active: false, description: 'asdfasdf' }] }
    })
  }



  return (
    <ContextWrapper contextGridData={contextGridData}>
      <div className={styles.TabPanel}>
        <div className={styles.colGroup} style={{ justifyContent: 'left', gap: '5px' }}>
          <button className={styles.Button}><span>Добавить</span></button>
          <button className={styles.Button}><span>Удалить</span></button>
          <button onClick={() => addTab()} className={styles.Button}><span>Tab</span></button>
        </div>
        <div className={styles.colGroup} style={{ justifyContent: 'right', gap: '5px' }}>
          <button onClick={() => loadDataGrid()} className={[styles.Button, styles.ButtonImg].join(' ')}>
            <div className={styles.ImgReload} ></div>
          </button>
          <button className={[styles.Button, styles.ButtonImg].join(' ')} onClick={(e) => onClickButtonTabSetting(e)}>
            <div className={styles.ImgSetting}></div>
          </button>
        </div>
      </div>
      <div className={styles.TabWrapper}>
        <table>
          <GridDataTabHeader columns={columns} />
          <GridDataTabBody columns={columns} rows={rows} />
        </table>
      </div>
    </ContextWrapper >
  )
}
export default GridData;
