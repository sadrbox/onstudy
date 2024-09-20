import React, { useEffect, useState } from 'react'
import { IResponseData, ITodo } from './types';
import DataGrid from 'src/components/ui/DataGrid';
import { ContextInstance } from './Context';
// import { useContextInstance } from 'src/components/ui/GridData/ContextProvider';
import { TContextData } from 'src/objects/Todos/Context';


export type TDataItem = { [key: string]: string }
export type TColumn = {
  field: string;
  type: TFieldType;
}
type TFieldType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

///////////////////////////////////////////////////////////////////////////
const getResponseData = () => {
  return fetch('https://dummyjson.com/todos')
    .then(response => response.json())
}
///////////////////////////////////////////////////////////////////////////
const createDataGridColumns = <T extends TDataItem>(DataItem1: T): TColumn[] => {
  const columns: TColumn[] = [];
  const fields = Object.keys(DataItem1)
  for (const field of fields) {
    const col = {
      field: field,
      type: typeof DataItem1[field]
    }
    columns.push(col)
  }
  return columns;
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




const Todos = () => {

  const [responseData, setResponseData] = useState<IResponseData | undefined>(undefined);
  const [context, setContext] = useState<TContextData | undefined>(undefined);


  useEffect(() => {
    getResponseData().then(response => setResponseData(response))
  }, [])

  useEffect(() => {
    if (responseData?.todos) {
      const dataRows = responseData?.todos;
      const DataItem1 = responseData?.todos[0];
      const columns = createDataGridColumns(DataItem1);

      setContext({
        dataRows,
        columns
      })

    }
  }, [responseData])

  const ContextWrapper = ContextInstance.Provider;

  return (
    <>
      <ContextWrapper value={{ context, setContext }}>
        {context ? (
          <DataGrid />) : (<h1>Loading...</h1>)}
      </ContextWrapper>
    </>
  )
}


export default Todos