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
import GridData from "src/components/ui/Grid/GridData";
import { TColumn, TDataItem } from "src/components/ui/Grid/types";
import Grid from "src/components/ui/Grid";
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
  const [params, setParams] = useState<TParams | undefined>(undefined)
  const [sortedColumns, setSortedColumns] = useState<TColumn[]>([])

  // useEffect(() => {
  //   const getStoreSetting = localStorage.getItem("username_gridColumnsVisible_products")
  //   if (!getStoreSetting) {
  //     const visibleIDs = columns.filter(item => item.visible === true)
  //       .map(item => item.position);
  //     setVisibleRows(visibleIDs)
  //     const sortableIDs = columns.filter(item => item.sortable === true)
  //       .map(item => item.position);
  //     setVisibleRows(sortableIDs)
  //   } else {
  //     const storeSettings = JSON.parse(getStoreSetting)
  //     setVisibleRows(storeSettings?.visibleRows)
  //     setSortableRows(storeSettings?.sortableRows)
  //   }
  // }, []);

  function buildColumns(columns: TColumn[]) {
    const cols = columns.sort((a, b) => a.position - b.position);
    const getStoreSetting = localStorage.getItem("username_gridSetting_products")
    if (getStoreSetting) {
      const storeSettings = JSON.parse(getStoreSetting);
      const visibleIdentifiers = storeSettings?.visibleIdentifiers;
      if (_.isArray(visibleIdentifiers)) {
        const visibleColumns = cols.map(column => {
          // console.log(column.visible)
          if (visibleIdentifiers.includes(column?.identifier)) {
            column.visible = true;
            // console.log(column.visible)
          } else {
            column.visible = false;
          }
          // console.log(column.visible)
          return column;
        })
        // console.log(visibleColumns)
        setSortedColumns(visibleColumns);
      }
    } else {
      setSortedColumns(cols);
    }
  }

  useEffect(() => {
    if (params)
      buildColumns(columns)
  }, [params])

  useEffect(() => {
    buildColumns(columns)
    loadDataGrid();
  }, [])

  useEffect(() => {
    // console.log(sortedColumns)
    if (responseData?.products) {
      const rows = responseData?.products;
      setParams({ rows, columns: sortedColumns })
    } else {
      setParams(undefined)
    }
  }, [responseData])

  const loadDataGrid = async () => {
    setParams(undefined)
    await fetch('https://dummyjson.com/products?limit=30')
      .then(response => response.json())
      .then(data => setResponseData(data))
  }

  return (
    <>
      {params ? (<Grid params={params} actions={{ loadDataGrid }} />) : (<h1>Loading...</h1>)}
    </>
  )

};

export default Products;

