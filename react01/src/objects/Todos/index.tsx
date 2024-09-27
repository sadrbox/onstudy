import React, { useEffect, useState } from 'react'
import { IResponseData, ITodo } from './types';
import DataGrid from 'src/components/ui/DataGrid';
// import co

// import { ContextInstance } from './Context';
// import { useContextInstance } from 'src/components/ui/GridData/ContextProvider';
// import { TContextData } from 'src/objects/Todos/Context';
import { translateWord } from 'src/i18';
import ContextWrapper, { TDataGrid } from 'src/components/ui/DataGrid/DataGridContext';


export type TDataItem = { [key: string]: string }
export type TColumn = {
  id: string;
  type: TFieldType;
  name?: string;
  width?: string;
  hint?: string;
}
type TFieldType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

const createDataGridColumns = <T extends TDataItem>(DataItem1: T): TColumn[] => {
  const columns: TColumn[] = [{
    id: 'selectOption',
    type: 'boolean'
  }];
  const fields = Object.keys(DataItem1);

  for (const id of fields) {
    const fieldName = translateWord(id)
    const col = {
      id,
      type: typeof DataItem1[id],
      name: fieldName.charAt(0).toUpperCase() + fieldName.slice(1), // Делаем name с заглавной буквы
      width: '',
      hint: '' // Пример статического описания для hint
    };
    columns.push(col);
  }

  return columns;
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




const Todos = () => {

  const [responseData, setResponseData] = useState<IResponseData | undefined>(undefined);
  const [dataGrid, setDataGrid] = useState<TDataGrid | undefined>(undefined);

  useEffect(() => {
    loadDataGrid();
  }, [])

  useEffect(() => {
    if (responseData?.todos) {
      const dataRows = responseData?.todos;
      const DataItem1 = responseData?.todos[0];
      const columns = createDataGridColumns(DataItem1);
      setDataGrid({
        dataRows,
        columns,
        loadDataGrid
      })
    } else {
      setDataGrid(undefined)
    }
  }, [responseData])

  const loadDataGrid = async () => {
    setDataGrid(undefined)
    return await fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => setResponseData(data))
  }

  return (
    <>
      <ContextWrapper dataGrid={dataGrid}>
        {dataGrid ? (
          <DataGrid />) : (<h1>Loading...</h1>)}
      </ContextWrapper>
    </>
  )
}


export default Todos