import React, { memo, useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { IoReloadCircleOutline } from "react-icons/io5";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
// import { useContextTodo } from 'src/objects/Todos/Context';
import DataGridHead from './DataGridHead';
import DataGridBody from './DataGridBody';
import { useContextDataGrid } from './DataGridContext';



const DataGrid = () => {


  // const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dataGrid = useContextDataGrid()

  // useEffect(() => {
  //   setIsDataLoaded(Array.isArray(contextData?.context?.dataRows))
  // }, [contextData])
  // const MemoizedHeader = memo(DataGridHead)

  return (
    <div className={styles.tab}>
      <div className={styles.tabPanel}>
        <button style={{ textAlign: 'left' }}><PiDotsThreeCircleLight size={26} /></button>
        <button style={{ textAlign: 'left' }}><IoEllipsisHorizontalCircle size={26} /></button>
        <button onClick={() => dataGrid?.contextDataGrid?.loadDataGrid()} style={{ textAlign: 'right' }}><IoReloadCircleOutline size={26} /></button>
      </div>
      <div className={styles.tabWrapper}>
        <table>
          <DataGridHead />
          <DataGridBody />
        </table>
      </div></div>
  )
}
export default DataGrid;