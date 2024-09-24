import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";
// import { IResponseData } from "./types";
// import { TColumn, TDataItem } from "./index";
import React from "react";
import { TColumn, TDataItem } from "src/objects/Todos";

export type TDataGrid = {
  dataRows: TDataItem[];
  columns: TColumn[];
  loadDataGrid: () => void;
};

type TDataGridProps = {
  dataGrid: TDataGrid | undefined;
}

type TContextInstance = {

  contextDataGrid: TDataGrid | undefined;
  setContextDataGrid: Dispatch<SetStateAction<TDataGrid | undefined>>;
};

export const ContextInstance = createContext<TContextInstance>({
  contextDataGrid: undefined,
  setContextDataGrid: () => { },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useContextDataGrid = () => useContext(ContextInstance);

export default function ContextWrapper<T extends PropsWithChildren<TDataGridProps>>({ children, dataGrid }: T): JSX.Element {

  const [contextDataGrid, setContextDataGrid] = useState<TDataGrid | undefined>(dataGrid);

  const contextValue: TContextInstance = useMemo(() => ({
    contextDataGrid, setContextDataGrid
  }), [contextDataGrid]);

  useEffect(() => {
    if (dataGrid !== undefined) {
      setContextDataGrid(dataGrid)
    }
  }, [dataGrid])
  return (
    <ContextInstance.Provider value={contextValue}>
      {children}
    </ContextInstance.Provider>
  )
}

