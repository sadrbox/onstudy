import React, { useEffect, useState } from 'react'
import { IResponseData, ITodo } from './types';
import DataGrid from 'src/components/ui/DataGrid';
import { ContextInstance } from './Context';
// import { useContextInstance } from 'src/components/ui/GridData/ContextProvider';



const getResponseData = () => {
  return fetch('https://dummyjson.com/todos')
    .then(response => response.json())
}



const Todos = () => {

  const [context, setContext] = useState<IResponseData | undefined>(undefined);

  useEffect(() => {
    getResponseData().then(response => setContext(response as IResponseData))
  }, [])

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