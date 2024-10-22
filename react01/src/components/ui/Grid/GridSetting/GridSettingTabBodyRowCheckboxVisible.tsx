import React, { FC, Dispatch, ForwardedRef, forwardRef, ForwardRefExoticComponent, MutableRefObject, ReactNode, RefAttributes, SetStateAction, useEffect, useImperativeHandle } from 'react';
import styles from "../styles.module.scss";
import { useContextGridSetting } from './GridSettingContext';
import { TColumn } from '../types';
// import { TColumn, TGridStates } from '../types';
// import { TColumn } from '../../../../objects/Todos/index';


type TProps = {
  columnKEY: keyof TColumn;
  // checked: boolean;
  rowID: number;
}

const GridSettingTabBodyRowCheckboxVisible: FC<TProps> = ({ columnKEY, rowID }) => {
  const { context } = useContextGridSetting();

  function isCheckedRow(columnKEY: keyof TColumn): boolean {
    if (context?.states?.visibleIdentifiers) {
      return context?.states?.visibleIdentifiers.includes(columnKEY) || false;
    }
    return false;
  }

  function onToggle(columnKEY: keyof TColumn) {
    if (context?.states?.setVisibleIdentifiers) {
      context?.states?.setVisibleIdentifiers((prev) => {

        // console.log(prev)
        if (prev !== null) {
          // console.log(prev)
          if ([...prev].includes(columnKEY)) {
            return prev.filter(identifier => identifier !== columnKEY);
          } else {
            return [...prev, columnKEY];
          }
        }
        else {
          return [];
        }
      })
    }
  }

  function onFocus(rowID: number) {
    if (context?.states?.setActiveRow)
      return context?.states?.setActiveRow(rowID)
  }
  return (
    <label className={styles.LabelForCheckbox} htmlFor={`visible_${rowID}`}>
      <input type="checkbox" onFocus={() => onFocus(rowID)} id={`visible_${rowID}`} checked={isCheckedRow(columnKEY)} onChange={() => onToggle(columnKEY)} />
    </label>
  );
};

export default GridSettingTabBodyRowCheckboxVisible;