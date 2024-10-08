import React, { FC, Dispatch, ForwardedRef, forwardRef, ForwardRefExoticComponent, MutableRefObject, ReactNode, RefAttributes, SetStateAction, useEffect, useImperativeHandle } from 'react';
import styles from "../styles.module.scss";
import { useContextGridSetting } from './GridSettingContext';
import { TColumn, TGridStates } from '../types';


type TProps = {
  rowID: number;
}

const GridSettingTabBodyRowCheckboxVisible: FC<TProps> = ({ rowID }) => {
  const { context } = useContextGridSetting();

  function isCheckedRow(rowID: number): boolean {
    return context?.states?.visibleRows.includes(rowID) || false;
  }

  function onToggle(rowID: number) {
    context?.states?.setVisibleRows((prev) => {
      if (prev.includes(rowID)) {
        return prev.filter(id => id !== rowID);
      } else {
        return [...prev, rowID];
      }
    });
  }

  function onFocus(rowID: number) {
    if (context?.states?.setActiveRow)
      return context?.states?.setActiveRow(rowID)
  }
  return (
    <label className={styles.LabelForCheckbox} htmlFor={`visible_${rowID}`}>
      <input type="checkbox" onFocus={() => onFocus(rowID)} id={`visible_${rowID}`} checked={isCheckedRow(rowID)} onChange={() => onToggle(rowID)} />
    </label>
  );
};

export default GridSettingTabBodyRowCheckboxVisible;