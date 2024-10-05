import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";
import React from "react";
import { TColumn, TDataItem, TSorting } from "../types";

export type TContextData = {
  gridRows: TDataItem[];
  columns?: TColumn[];
  IDs: number[];
  actions: {
    loadDataGrid?: () => void;
  }
  states: {
    currentSorting: TSorting, setCurrentSorting: Dispatch<SetStateAction<TSorting>>
    checkedRows: number[], setCheckedRows: Dispatch<SetStateAction<number[]>>
    isAllChecked: boolean, setIsAllChecked: Dispatch<SetStateAction<boolean>>
  }
};

type TProps = {
  contextData: TContextData | undefined;
}

type TContextInstance = {
  contextInstance: TContextData | undefined;
  setContextInstance: Dispatch<SetStateAction<TContextData | undefined>>;
};

export const ContextInstance = createContext<TContextInstance>({
  contextInstance: undefined,
  setContextInstance: () => { },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useContextInstance = () => useContext(ContextInstance);

export default function ContextWrapper<T extends PropsWithChildren<TProps>>({ children, contextData }: T): JSX.Element {

  const [contextInstance, setContextInstance] = useState<TContextData | undefined>(contextData);

  const contextValue: TContextInstance = useMemo(() => ({
    contextInstance, setContextInstance
  }), [contextInstance]);

  useEffect(() => {
    if (contextData !== undefined) {
      setContextInstance(contextData)
    }
  }, [contextData])

  return (
    <ContextInstance.Provider value={contextValue}>
      {children}
    </ContextInstance.Provider>
  )
}

