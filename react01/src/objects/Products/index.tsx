import React, { useEffect, useState, FC, useMemo, useCallback, useContext, createContext, Dispatch, SetStateAction } from "react";
import _, { reject } from "lodash";
// import { ContextInstance, ContextProvider } from "src/components/ui/GridData/ContextProvider";
// import { IColumns, IProduct, IRootProduct } from "src/components/ui/GridData/types";
// import ContextProvider, { contextDataInit, TContextData, TOrdering } from "src/components/ui/GridData/ContextProvider";
// import { createColumnsConfigFromResponse, initialCols, initialConfig, TColumn, TConfig } from "src/components/ui/GridData/DataGrid.module";
// import { Testing } from "src/components/Testing";
// import { TColumn, TDataItem } from "src/components/ui/GridData/services";
// import DataGrid from "src/components/ui/DataGrid";
// import { ProductType } from './index';
// import { TContextData } from 'src/ui/GridDataTable/ContextProvider';
// import { contextDataInit } from '../../components/ui/GridData/ContextProvider';

import columns from "./columns.json"
import GridData from "src/components/ui/GridData";
import { TColumn, TDataItem } from "src/components/ui/GridData/types";
// import { TProduct } from "./types";

// type TColum = typeof columns;


type TResponseData = { products: TDataItem[] } & {
  [key: string]: string | number | boolean
};

type TParams = {
  rows: TDataItem[]
  columns: TColumn[];
}

const Products: FC = () => {


  const [responseData, setResponseData] = useState<TResponseData | undefined>(undefined);
  // const [dataGridRows, setDataGridRows] = useState<TProduct[] | undefined>(undefined);
  const [params, setParams] = useState<TParams | undefined>(undefined)

  useEffect(() => {
    loadDataGrid();
  }, [])

  useEffect(() => {
    if (responseData?.products) {
      const rows = responseData?.products;
      // console.log(dataRows)
      // const DataItem1 = responseData?.todos[0];
      // const columns = createDataGridColumns(DataItem1);
      setParams({ rows, columns })

      // setDataGridRows(dataRows)
    } else {
      setParams(undefined)
    }
  }, [responseData])

  const loadDataGrid = async () => {
    setParams(undefined)
    await fetch('https://dummyjson.com/products?limit=25')
      .then(response => response.json())
      .then(data => setResponseData(data))
  }

  return (
    <>
      {params ? (<GridData params={params} actions={{ loadDataGrid }} />) : (<h1>Loading...</h1>)}
    </>
  )

};

export default Products;

