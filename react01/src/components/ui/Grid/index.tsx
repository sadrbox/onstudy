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

  const [showTabSetting, setShowTabSetting] = useState<boolean>(false)

  return (
    <>
      <div className={styles.Tab}>
        {!showTabSetting ? <GridData params={params} actions={{ loadDataGrid, setShowTabSetting }} /> : <GridSetting params={params} actions={{ loadDataGrid, setShowTabSetting }} />}
      </div>
    </>
  );
};

export default Grid;


