import React, { useState, useEffect, ReactNode, FC } from 'react';
import styles from "../styles.module.scss"
import GridHeadColumnsSetting from './GridHeadColumnsSetting';
import GridBodyColumnsSetting from './GridBodyColumnsSetting';


interface TColumnsGridSettingProps {
  // children: ReactNode
}

const GridColumnsSetting: FC<TColumnsGridSettingProps> = () => {

  return (
    <>
      <div className={styles.TabWrapper}>
        <table>
          <GridHeadColumnsSetting />
          {/* <GridBodyColumnsSetting /> */}
        </table>
      </div>
    </>
  );
};

export default GridColumnsSetting;