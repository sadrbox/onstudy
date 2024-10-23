import React, { useState, useEffect, ReactNode, FC, Dispatch, SetStateAction } from 'react';
// import GridHeadColumnsSetting from './GridHeadSetting';
// import GridBodyColumnsSetting from './GridBodySetting';
// import ContextWrapper, { TContextData } from './GridColumnsSettingContext';
import { TColumn, TDataItem, TGridStates, TSorting } from '../types';
import GridHeadSetting from './GridSettingTabHeader';
import GridBodySetting from './GridSettingTabBody';
import ContextWrapper, { TContextGridSetting, useContextGridSetting } from './GridSettingContext';
import styles from "../styles.module.scss"
// import { sortGridRows } from '../services';
// import { columns } from "./settings.json"
// import { columns } from '../../../../objects/Products/config';
import { LiaChevronUpSolid, LiaChevronDownSolid } from "react-icons/lia";

type TProps = {
  params: {
    columns: TColumn[]
    rows?: TDataItem[]
  }
  actions: {
    loadDataGrid: () => void;
    setShowTabSetting: Dispatch<SetStateAction<boolean>>
  }
}
const GridSetting: FC<TProps> = ({ params: { columns }, actions: { loadDataGrid, setShowTabSetting } }) => {


  const [contextGridSetting, setContextGridSetting] = useState<TContextGridSetting | undefined>(undefined);
  const [activeRow, setActiveRow] = useState<number | null>(null)
  // const [visibleRows, setVisibleRows] = useState<number[]>([])
  // const [sortableRows, setSortableRows] = useState<number[]>([])
  // const [visibleIdentifiers, setVisibleIdentifiers] = useState<(keyof TColumn)[]>([]);
  const [gridColumns, setGridColumns] = useState<TColumn[]>([])

  useEffect(() => {
    const getStorageOfSettings = localStorage.getItem("username_gridSetting_products");
    let storageOfSettings: TColumn[] = [];
    try {
      storageOfSettings = getStorageOfSettings && JSON.parse(getStorageOfSettings)
    } catch (e) {
      // storageOfSettings = {}
    }
    if (!storageOfSettings) {
      setGridColumns(columns)

    } else {

      setGridColumns(storageOfSettings)
    }
  }, []);

  useEffect(() => {
    setContextGridSetting({
      actions: {
      },
      states: {
        activeRow, setActiveRow,
        gridColumns, setGridColumns,
      }
    })
  }, [activeRow, gridColumns]);

  useEffect(() => {
    const json = JSON.stringify(gridColumns)
    localStorage.setItem("username_gridSetting_products", json)
    // loadDataGrid();
  }, [gridColumns])

  function onClickButtonTabSetting(e: React.UIEvent<HTMLButtonElement>) {
    e.preventDefault();
    loadDataGrid();
    setShowTabSetting((prev) => !prev)
  }
  function PositionLevelUp() {
    const arr = gridColumns.map((column, keyID) => {
      const numberID = ++keyID;
      const nextPosition = (activeRow !== null ? activeRow > 0 ? activeRow - 1 : 0 : 0);

      if (nextPosition === column.position) {
        column.position = nextPosition + 1;
      }
      // console.log("---------------", nextPosition)

      // console.log({ next: nextPosition, active: activeRow, position: column.position })
      // console.log(column.position, numberID)
      else if (activeRow === column.position) {
        // console.log({ next: nextPosition, active: activeRow, position: column.position })
        // console.log(activeRow, column.position)
        column.position = nextPosition;
        setActiveRow(nextPosition)
        // console.log(column.position)
      } else {
        column.position = numberID;
      }
      return column;
    })
    const cols = arr.sort((a, b) => a.position - b.position)
    // console.log(cols)
    setGridColumns(cols)
  }

  return (
    <ContextWrapper contextGridSetting={contextGridSetting}>
      <div className={styles.TabPanel}>
        <div className={styles.rowGroup} style={{ justifyContent: 'left', gap: '5px' }}>
          <button onClick={() => PositionLevelUp()} className={[styles.Button, styles.ButtonImg].join(' ')}>
            <LiaChevronUpSolid size={16} />
          </button>
          <button onClick={() => loadDataGrid()} className={[styles.Button, styles.ButtonImg].join(' ')}>
            <LiaChevronDownSolid size={16} />
          </button>
        </div>
        <div className={styles.rowGroup} style={{ justifyContent: 'right', gap: '5px' }}>
          <button className={[styles.Button, styles.ButtonImg].join(' ')} onClick={(e) => onClickButtonTabSetting(e)}>
            <div className={styles.ImgSetting}></div>
          </button>
        </div>
      </div>
      <div className={styles.TabWrapper}>
        <table>
          <GridHeadSetting />
          <GridBodySetting columns={gridColumns} />
        </table>
      </div>
    </ContextWrapper>
  );
};

export default GridSetting;