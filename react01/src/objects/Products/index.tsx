import React, { useEffect, useState, FC, useMemo, useCallback, useContext, createContext, Dispatch, SetStateAction } from "react";
import _, { reject } from "lodash";
// import { ContextInstance, ContextProvider } from "src/components/ui/GridData/ContextProvider";
// import { IColumns, IProduct, IRootProduct } from "src/components/ui/GridData/types";
// import ContextProvider, { contextDataInit, TContextData, TOrdering } from "src/components/ui/GridData/ContextProvider";
// import { createColumnsConfigFromResponse, initialCols, initialConfig, TColumn, TConfig } from "src/components/ui/GridData/DataGrid.module";
// import { Testing } from "src/components/Testing";
import { TDataItem } from "src/components/ui/DataGrid/services";
import DataGrid from "src/components/ui/DataGrid";
// import { ProductType } from './index';
// import { TContextData } from 'src/ui/GridDataTable/ContextProvider';
// import { contextDataInit } from '../../components/ui/GridData/ContextProvider';





type TResponseData = { products: TDataItem[] } & {
  [key: string]: string | number | boolean
};


const Products: FC = () => {


  const [responseData, setResponseData] = useState<TResponseData | undefined>(undefined);
  const [dataGridRows, setDataGridRows] = useState<TDataItem[] | undefined>(undefined);

  useEffect(() => {
    loadDataGrid();
  }, [])

  useEffect(() => {
    if (responseData?.products) {
      const dataRows = responseData?.products;
      // console.log(dataRows)
      // const DataItem1 = responseData?.todos[0];
      // const columns = createDataGridColumns(DataItem1);
      setDataGridRows(dataRows)
    } else {
      setDataGridRows(undefined)
    }
  }, [responseData])

  const loadDataGrid = async () => {
    setDataGridRows(undefined)
    return await fetch('https://dummyjson.com/products?limit=25')
      .then(response => response.json())
      .then(data => setResponseData(data))
  }

  return (
    <>
      {dataGridRows ? (<DataGrid dataGridRows={dataGridRows} actions={{ loadDataGrid }} />) : (<h1>Loading...</h1>)}
    </>
  )

};

export default Products;

