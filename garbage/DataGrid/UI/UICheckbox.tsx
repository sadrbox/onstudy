import React, { FC, Dispatch, ForwardedRef, forwardRef, ForwardRefExoticComponent, MutableRefObject, ReactNode, RefAttributes, SetStateAction, useEffect, useImperativeHandle } from 'react';
import { useContextDataGrid } from '../DataGridContext';
import styles from "../styles.module.scss"


interface TUICheckboxProps {
  tabIndex: number;
  rowID: number;
  checked: boolean;
  actions: {
    activeRow: number | null, setActiveRow: Dispatch<SetStateAction<number | null>>
  }
}

const UICheckbox: FC<TUICheckboxProps> = ({ tabIndex, rowID, checked, actions }) => {
  const { contextDataGrid } = useContextDataGrid();



  function OnChangeCheckbox(rowID: number) {
    if (contextDataGrid?.states) {
      const setCheckedRows = contextDataGrid?.states.setCheckedRows;
      setCheckedRows((prev) => {
        if (prev.includes(rowID)) {
          return prev.filter(id => id !== rowID);
        } else {
          return [...prev, rowID];
        }
      });
    }
  }

  function OnFocusCheckbox(rowID: number) {
    return actions.setActiveRow(rowID)
  }
  return (
    <label className={styles.LabelForCheckbox} htmlFor={`selectOption_${rowID}`}>
      <input type="checkbox" onFocus={() => OnFocusCheckbox(rowID)} id={`selectOption_${rowID}`} checked={checked} onChange={() => OnChangeCheckbox(rowID)} tabIndex={tabIndex} />
    </label>
  );
};

export default UICheckbox;