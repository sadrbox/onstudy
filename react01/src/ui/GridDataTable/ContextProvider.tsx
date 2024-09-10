import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ICol, IColumns, IProduct } from './types';
// import { columns } from "src/objects/Products";
import Products, { columns } from '../../objects/Products/index';
import { Provider } from 'jotai';

type TContextProvider = {
  children: ReactNode;
};

export type TContextInstance = {
  columns: IColumns;
  dataRows: IProduct[] | null;
  sortByColumn?: string;
  orderBy?: string;
}



const ContextInstanceInit: TContextInstance = {
  columns: columns,
  dataRows: null
}

const ContextInstance = createContext<TContextInstance>(ContextInstanceInit);

const ContextProvider: React.FC<TContextProvider> = ({ children }) => {
  const [contextData, setContextData] = useState<TContextInstance>(ContextInstanceInit);

  const getHttpResponse = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setContextData((prevState) => ({
        ...prevState,
        dataRows: data.products
      }));

    } catch (e) {
      // setError("Ошибка запроса данных JSON");
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getHttpResponse();
    // console.log(contextData)
  }, [])

  const Provider = ContextInstance.Provider;
  return (
    <Provider value={contextData}>
      {children}
    </Provider>
  );
}

export { ContextProvider, ContextInstance }