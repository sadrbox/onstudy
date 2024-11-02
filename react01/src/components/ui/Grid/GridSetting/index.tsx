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
import { useParams } from 'react-router-dom';

type TProps = {
  params: {
    tabName: string
    columns: TColumn[]
    rows?: TDataItem[]
  }
  actions: {
    loadDataGrid: () => void;
    setShowTabSetting: Dispatch<SetStateAction<boolean>>
  }
}
const GridSetting: FC<TProps> = ({ params: { columns, tabName }, actions: { loadDataGrid, setShowTabSetting } }) => {


  const [contextGridSetting, setContextGridSetting] = useState<TContextGridSetting | undefined>(undefined);
  const [activeRow, setActiveRow] = useState<number | null>(null)
  // const [visibleRows, setVisibleRows] = useState<number[]>([])
  // const [sortableRows, setSortableRows] = useState<number[]>([])
  // const [visibleIdentifiers, setVisibleIdentifiers] = useState<(keyof TColumn)[]>([]);
  const [gridColumns, setGridColumns] = useState<TColumn[]>([])

  useEffect(() => {

    const getStorageOfSettings = localStorage.getItem("username_gridSetting_" + tabName);
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
    localStorage.setItem("username_gridSetting_" + tabName, json)
    // loadDataGrid();
  }, [gridColumns])

  function onClickButtonTabSetting(e: React.UIEvent<HTMLButtonElement>) {
    e.preventDefault();
    loadDataGrid();
    setShowTabSetting((prev) => !prev)
  }

  function updatePosition(direction: string) {
    if (activeRow === null) return;

    const gridLength = gridColumns.length;
    const activePosition = activeRow;
    let nextPosition = direction === 'up' ? activePosition - 1 : activePosition + 1;

    if (nextPosition > gridLength) {
      nextPosition = 1;
    } else if (nextPosition < 1) {
      nextPosition = gridLength;
    }

    const updatedColumns = gridColumns.map((column, keyID) => {
      const updatedColumn = { ...column };
      const numberID = keyID + 1;

      if (column.position === activePosition) {
        updatedColumn.position = nextPosition;
      } else if (nextPosition >= 1 && nextPosition <= gridLength) {
        if (direction === 'up' && nextPosition === gridLength) {
          updatedColumn.position = numberID - 1;
        } else if (direction === 'down' && nextPosition === 1) {
          updatedColumn.position = numberID + 1;
        } else if (column.position === nextPosition) {
          updatedColumn.position = activePosition;
        } else {
          updatedColumn.position = numberID;
        }
      }

      return updatedColumn;
    });

    const sortedColumns = updatedColumns.sort((a, b) => a.position - b.position);
    setActiveRow(nextPosition);
    setGridColumns(sortedColumns);
  }

  function PositionLevelUp() {
    updatePosition('up');
  }

  function PositionLevelDown() {
    updatePosition('down');
  }

  return (
    <ContextWrapper contextGridSetting={contextGridSetting}>
      <div className={styles.TabPanel}>
        <div className={styles.rowGroup} style={{ justifyContent: 'left', gap: '5px' }}>
          <button onClick={() => PositionLevelUp()} className={[styles.Button, styles.ButtonImg].join(' ')}>
            <LiaChevronUpSolid size={16} />
          </button>
          <button onClick={() => PositionLevelDown()} className={[styles.Button, styles.ButtonImg].join(' ')}>
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