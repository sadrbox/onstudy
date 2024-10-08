import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";
// import { IResponseData } from "./types";
// import { TColumn, TDataItem } from "./index";
import React from "react";
import { TColumn, TDataItem, TGridStates, TSorting } from "./types";
// import { TSorting } from ".";
// import { TColumn, TDataItem } from "src/objects/Todos";

export type TContextData = {
  dataGrid: TDataItem[];
  columns?: TColumn[];
  IDs: number[];
  actions: {
    loadDataGrid?: () => void;
  }
  states: TGridStates
};

type TProps = {
  contextGridData: TContextData | undefined;
}

type TContextInstance = {
  context: TContextData | undefined;
  setContext: Dispatch<SetStateAction<TContextData | undefined>>;
};

export const ContextInstance = createContext<TContextInstance>({
  context: undefined,
  setContext: () => {
    throw new Error("setContext must be used within a ContextWrapper");
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useContextGridData = () => {
  const context = useContext(ContextInstance);
  if (context === undefined) {
    throw new Error("setContext must be used within a ContextWrapper");
  }
  return context;
}



export default function ContextWrapper<T extends PropsWithChildren<TProps>>({ children, contextGridData }: T): JSX.Element {

  const [context, setContext] = useState<TContextData | undefined>(contextGridData);

  const contextValue: TContextInstance = useMemo(() => ({
    context, setContext
  }), [context]);

  useEffect(() => {
    if (contextGridData !== undefined) {
      setContext(contextGridData)
    }
  }, [contextGridData])
  return (
    <ContextInstance.Provider value={contextValue}>
      {children}
    </ContextInstance.Provider>
  )
}

