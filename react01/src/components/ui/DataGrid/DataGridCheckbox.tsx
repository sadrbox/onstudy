import React, { useState, useEffect, ReactNode, FC } from 'react';

interface TDataGridCheckboxProps {
  rowID: number;
}
type TArgState = {
  arg1: string
  arg2: string
}

const DataGridCheckbox: FC<TDataGridCheckboxProps> = ({ rowID }) => {
  const [argState, setArgState] = useState<TArgState | undefined>(undefined)



  return (
    <>
      <input type="checkbox" name={`selectOption_${rowID}`} />
    </>
  );
};

export default DataGridCheckbox;