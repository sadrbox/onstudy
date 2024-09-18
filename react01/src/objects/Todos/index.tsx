import React, { useEffect, useState } from 'react'
import { IResponseData, ITodo } from './types';
import DataGrid from 'src/components/ui/DataGrid';
import { ContextInstance } from './Context';
// import { useContextInstance } from 'src/components/ui/GridData/ContextProvider';



const getResponseData = () => {
  return fetch('https://dummyjson.com/todos')
    .then(response => response.json())
}

const createDataGridColumns = (DataItem1) => {
  const columns = [];

  const fields = Object.keys(DataItem1)

  for (const field of fields) {
    const col = {
      field: field,
      type: typeof DataItem1[field]
    }
    columns.push(col)
    // console.log(field)

  }

  // console.log(DataItem1)
  console.log(columns)
}



const Todos = () => {

  const [responseData, setResponseData] = useState<IResponseData | undefined>(undefined);
  const [context, setContext] = useState<IResponseData | undefined>(undefined);


  useEffect(() => {
    getResponseData().then(response => setResponseData(response))

  }, [])

  useEffect(() => {
    if (responseData?.todos) {
      const DataItem1 = responseData?.todos[0];
      const columns = createDataGridColumns(DataItem1);
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