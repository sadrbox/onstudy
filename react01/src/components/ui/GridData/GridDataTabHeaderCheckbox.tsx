import React, { useEffect } from 'react';
import { useContextGridData } from './GridDataContext';


const GridDataTabHeaderCheckbox = () => {
  const { context } = useContextGridData();

  function isCheckedAllRows() {
    return context?.states?.isAllChecked ?? false;
  }
  function setCheckedAllRows() {
    if (context?.states?.setIsAllChecked) {
      const setIsAllChecked = context?.states?.setIsAllChecked;
      setIsAllChecked((prev) => !prev)
    }
  }

  return (
    <>
      <input type="checkbox" name={`selectOption_All`} checked={isCheckedAllRows()} onChange={() => setCheckedAllRows()} />
    </>
  );
};

export default GridDataTabHeaderCheckbox;