import React, { useEffect, useState, FC } from 'react'
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

type TDataGridProps = {
  dataGridRows: TDataItem[],
  actions: {
    loadDataGrid: () => void
  }
}

export type TSorting = {
  id: string;
  sortBy: string;
}


const DataGrid: FC<TDataGridProps> = ({ dataGridRows, actions: { loadDataGrid } }) => {


  const [currentSorting, setCurrentSorting] = useState<TSorting>({
    id: 'id',
    sortBy: 'asc'
  });


  const [contextData, setContextData] = useState<TContextData | undefined>(undefined);



  useEffect(() => {
    if (dataGridRows.length) {
      const DataItem1 = dataGridRows[0];
      // type TDataItem = typeof DataItem1;
      const columns = createDataGridColumns(DataItem1);
      setContextData({
        dataGridRows,
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


