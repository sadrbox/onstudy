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
  const [sortableRows, setSortableRows] = useState<number[]>([])
  const [visibleIdentifiers, setVisibleIdentifiers] = useState<(keyof TColumn)[]>([]);
  // const [gridSettings, setGridSettings] = useState({})

  useEffect(() => {
    const getStoreSetting = localStorage.getItem("username_gridSetting_products")
    if (!getStoreSetting) {
      const identifiers = columns.filter(column => column.visible).map(col => col.identifier) as (keyof TColumn)[];
      // console.log(identifiers)
      setVisibleIdentifiers(identifiers)
      // setGridSettings(columns)
      // console.log(columns.filter(column => column.visible === true && column.identifier))
      // console.log(columns.filter(column => column.visible === true && column.identifier))
      // .map(item => item.position);
      // setVisibleRows(visibleIDs)
      // const sortableIDs = columns.filter(item => item.sortable === true)
      //   .map(item => item.position);
      // setVisibleRows(sortableIDs)
    } else {
      const storeSettings = JSON.parse(getStoreSetting)
      setVisibleIdentifiers(storeSettings?.visibleIdentifiers)
      // setVisibleRows(storeSettings?.visibleRows)
      setSortableRows(storeSettings?.sortableRows)
    }
  }, []);

  useEffect(() => {

    const IDs = columns.map(row => row?.position) || [];
    // console.log(columns)
    setContextGridSetting({
      IDs,
      actions: {
      },
      states: {
        activeRow, setActiveRow,
        visibleIdentifiers, setVisibleIdentifiers,
        sortableRows, setSortableRows
      }
    })
  }, [visibleIdentifiers, activeRow, sortableRows]);

  useEffect(() => {
    const setting = {
      visibleIdentifiers,
      columns
    }
    localStorage.setItem("username_gridSetting_products", JSON.stringify(setting))
  }, [visibleIdentifiers, columns])

  function onClickButtonTabSetting(e: React.UIEvent<HTMLButtonElement>) {
    e.preventDefault();
    loadDataGrid();
    setShowTabSetting((prev) => !prev)
  }

  return (
    <ContextWrapper contextGridSetting={contextGridSetting}>
      <div className={styles.TabPanel}>
        <div className={styles.rowGroup} style={{ justifyContent: 'left', gap: '5px' }}>
          <button onClick={() => loadDataGrid()} className={[styles.Button, styles.ButtonImg].join(' ')}>
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
          <GridBodySetting columns={columns} />
        </table>
      </div>
    </ContextWrapper>
  );
};

export default GridSetting;