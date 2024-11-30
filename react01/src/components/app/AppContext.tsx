import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";
import React from "react";
import { TTabs } from "../ui/Tabs/types"


export type TContextParams = {
  tabs: TTabs[]
} | null;

type TProps = {
  state: TContextInstance;
}

export type TContextInstance = {
  context: TContextParams;
  setContext: Dispatch<SetStateAction<TContextParams>>;
};

const ContextInstance = createContext<TContextInstance>({
  context: null,
  setContext: () => {
    throw new Error("setContext must be used within a ContextWrapper");
  },
});


// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(ContextInstance);
  if (context === undefined) {
    throw new Error("setContext must be used within a ContextWrapper");
  }
  return context;
}


export default function AppContext({ children, state }: PropsWithChildren<TProps>): JSX.Element {
  return (
    <ContextInstance.Provider value={state}>
      {children}
    </ContextInstance.Provider>
  )
}

