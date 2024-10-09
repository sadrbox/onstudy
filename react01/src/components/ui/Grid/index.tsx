import React, { useState, useEffect, ReactNode, FC } from 'react';
import { TColumn, TDataItem } from './types';
import GridData from './GridData';
import styles from "./styles.module.scss"
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
const Grid: FC<TProps> = ({ params, actions: { loadDataGrid } }) => {

  const [openTabSetting, setOpenTabSetting] = useState<boolean>(false)
  // let timeoutInstance: NodeJS.Timeout = setTimeout(() => { }, 0);


  function onClickButtonTabSetting(e: React.UIEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOpenTabSetting((prev) => !prev)
  }

  // function onScrollTab(e: React.UIEvent<HTMLDivElement>) {
  //   const tabWrapper = e.currentTarget;
  //   const theadTr: HTMLTableRowElement | null = tabWrapper.querySelector('thead tr');
  //   if (theadTr !== null) {
  //     theadTr?.classList.add(styles.onScrollTab)
  //     clearTimeout(timeoutInstance)
  //     timeoutInstance = setTimeout(() => {
  //       if (theadTr.classList.contains(styles.onScrollTab)) {
  //         theadTr?.classList.remove(styles.onScrollTab)
  //       }
  //     }, 3000);
  //   }
  // }

  return (
    <>
      <div className={styles.Tab}>
        <div className={styles.TabPanel}>
          {!openTabSetting ?
            <div className={styles.rowGroup} style={{ justifyContent: 'left', gap: '5px' }}>
              <button className={styles.Button}><span>Добавить</span></button>
              <button className={styles.Button}><span>Удалить</span></button>
            </div> : <h1></h1>
          }
          <div className={styles.rowGroup} style={{ justifyContent: 'right', gap: '5px' }}>
            <button onClick={() => loadDataGrid()} className={[styles.Button, styles.ButtonImg].join(' ')}>
              <div className={styles.ImgReload} ></div>
            </button>
            <button className={[styles.Button, styles.ButtonImg].join(' ')} onClick={(e) => onClickButtonTabSetting(e)}>
              <div className={styles.ImgSetting}></div>
            </button>
          </div>
        </div>
        {!openTabSetting ? <GridData params={params} actions={{ loadDataGrid }} /> : <GridSetting rows={params.columns} />}
      </div>
    </>
  );
};

export default Grid;


