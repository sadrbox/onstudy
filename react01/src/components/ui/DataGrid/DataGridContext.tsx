import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";
// import { IResponseData } from "./types";
// import { TColumn, TDataItem } from "./index";
import React from "react";
import { TColumn, TDataItem } from "./services";
import { TSorting } from ".";
// import { TColumn, TDataItem } from "src/objects/Todos";

export type TContextData = {
  dataGridRows: TDataItem[];
  columns?: TColumn[];
  actions: {
    loadDataGrid?: () => void;
  }
  states: {
    currentSorting: TSorting;
    setCurrentSorting: Dispatch<SetStateAction<TSorting>>;
  }

};

type TDataGridProps = {
  contextData: TContextData | undefined;
}

type TContextInstance = {

  contextDataGrid: TContextData | undefined;
  setContextDataGrid: Dispatch<SetStateAction<TContextData | undefined>>;
};

export const ContextInstance = createContext<TContextInstance>({
  contextDataGrid: undefined,
  setContextDataGrid: () => { },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useContextDataGrid = () => useContext(ContextInstance);

export default function ContextWrapper<T extends PropsWithChildren<TDataGridProps>>({ children, contextData }: T): JSX.Element {

  const [contextDataGrid, setContextDataGrid] = useState<TContextData | undefined>(contextData);

  const contextValue: TContextInstance = useMemo(() => ({
    contextDataGrid, setContextDataGrid
  }), [contextDataGrid]);

  useEffect(() => {
    if (contextData !== undefined) {
      setContextDataGrid(contextData)
    }
  }, [contextData])
  return (
    <ContextInstance.Provider value={contextValue}>
      {children}
    </ContextInstance.Provider>
  )
}

