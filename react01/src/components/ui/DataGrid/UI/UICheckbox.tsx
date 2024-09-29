import React, { Dispatch, ForwardedRef, forwardRef, ForwardRefExoticComponent, MutableRefObject, ReactNode, RefAttributes, SetStateAction, useEffect } from 'react';
import { useContextDataGrid } from '../DataGridContext';

interface TUICheckboxProps {
  rowID: number;
  checked: boolean;
  actions: {
    activeRow: number | null, setActiveRow: Dispatch<SetStateAction<number | null>>
  }
}

const UICheckbox = forwardRef<HTMLInputElement, TUICheckboxProps>(({ rowID, checked, actions }, ref) => {
  const { contextDataGrid } = useContextDataGrid();


  function setCheckedRows(rowID: number) {
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

  function onfocuscheckbox(rowID: number) {
    return actions.setActiveRow(rowID)
  }

  return (
    <>
      <input type="checkbox" onFocus={() => onfocuscheckbox(rowID)} name={`selectOption_${rowID}`} ref={ref} checked={checked} onChange={() => setCheckedRows(rowID)} tabIndex={rowID} />
    </>
  );
});

export default UICheckbox;