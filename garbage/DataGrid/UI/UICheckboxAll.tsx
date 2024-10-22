import React, { BaseSyntheticEvent, ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useContextDataGrid } from '../DataGridContext';


const UICheckboxAll = () => {
  const { contextDataGrid } = useContextDataGrid();
  // const [checked, setChecked] = useState<boolean>(false)

  // useEffect(() => {
  //   const IDs = contextDataGrid?.IDs || []

  //   if (contextDataGrid?.states) {
  //     const setCheckedRows = contextDataGrid?.states.setCheckedRows;
  //     // const checkedAll = e.target.checked;
  //     if (contextDataGrid?.states?.isAllChecked) {
  //       setCheckedRows(IDs)
  //     } else {
  //       setCheckedRows([])
  //     }
  //   }
  // }, [contextDataGrid?.states?.isAllChecked]);

  function setCheckedAllRows() {
    if (contextDataGrid?.states?.setIsAllChecked) {
      const setIsAllChecked = contextDataGrid?.states?.setIsAllChecked;
      setIsAllChecked((prev) => !prev)
    }
  }

  return (
    <>
      <input type="checkbox" name={`selectOption_All`} checked={contextDataGrid?.states?.isAllChecked} onChange={() => setCheckedAllRows()} />
    </>
  );
};

export default UICheckboxAll;