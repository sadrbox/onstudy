import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { useContextTodo } from 'src/objects/Todos/Context';
import DataGridHead from './DataGridHead';
import DataGridBody from './DataGridBody';



const DataGrid = () => {
  // const [isDataLoaded, setIsDataLoaded] = useState(false);
  // const contextData = useContextTodo()

  // useEffect(() => {
  //   setIsDataLoaded(Array.isArray(contextData?.context?.dataRows))
  // }, [contextData])


  return (
    <div className={styles.tab}>
      <div className={styles.tabPanel}>
        <button style={{ textAlign: 'left' }}><PiDotsThreeCircleLight size={26} /></button>
        <button style={{ textAlign: 'left' }}><PiDotsThreeCircleLight size={26} /></button>
        <button style={{ textAlign: 'right' }}><PiDotsThreeCircleLight size={26} /></button>
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