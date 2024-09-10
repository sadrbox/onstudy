import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ICol, IColumns, IProduct } from './types';
import { columns } from "src/objects/Products";
import Products from '../../objects/Products/index';

type TContext = {
  children: ReactNode;
  dataRows: IProduct[],
  columns: IColumns
};

export type TContextData = {
  columns: IColumns;
  dataRows: IProduct[];
  sortByColumn?: string;
  orderBy?: string;
}


export interface IContextData {
  contextData: TContextData; // Замените 'any' на конкретный тип, который вы используете
  setContextData: Dispatch<SetStateAction<TContextData>>; // Замените 'any' на конкретный тип
}

export const ContextProvider = createContext<IContextData | undefined>(undefined)

// export const ContextProvider = createContext<IContextData>({
//   contextData: {
//     columns: columns, // Если у вас есть дефолтные значения для columns
//     dataRows: [], // Если у вас есть дефолтные значения для dataRows
//     sortByColumn: '',
//     orderBy: '',
//   },
//   setContextData: () => { throw new Error("setContextData не инициализирован"); }
// });

// const Context: FC<TContext> = ({
//   children, dataRows, columns
// }) => {

// console.log(dataRows)
// const contextInit = {
//   dataRows,
//   columns
// }


// useEffect(() => {
//   console.log("first")
//   setContextData(contextInit)
// }, [])
//   return (
//     <ContextProvider.Provider value={{ contextData, setContextData }}>
//       {children}
//     </ContextProvider.Provider>
//   );
// };

// const useDataContext = () => React.useContext(ContextProvider);

// eslint-disable-next-line react-refresh/only-export-components
// export { Context, useDataContext };