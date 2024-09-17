import React, { useEffect, useState, FC, useMemo, useCallback, useContext, createContext, Dispatch, SetStateAction } from "react";
import DataGrid from "src/components/ui/GridData";
import _, { reject } from "lodash";
// import { ContextInstance, ContextProvider } from "src/components/ui/GridData/ContextProvider";
import { IColumns, IProduct, IRootProduct } from "src/components/ui/GridData/types";
import ContextProvider, { contextDataInit, TContextData, TOrdering } from "src/components/ui/GridData/ContextProvider";
import { createColumnsConfigFromResponse, initialCols, initialConfig, TColumn, TConfig } from "src/components/ui/GridData/DataGrid.module";
import { Testing } from "src/components/Testing";
// import { ProductType } from './index';
// import { TContextData } from 'src/ui/GridDataTable/ContextProvider';
// import { contextDataInit } from '../../components/ui/GridData/ContextProvider';




// const columns = {
//   properties: {
//     width: "27px 80px 1fr 100px",
//   },
//   cols: [
//     {
//       id: "checkbox",
//       type: "checkbox",
//       // field: {
//       // 	style: { textAlign: "center" } as React.CSSProperties,
//       // },
//     },
//     {
//       id: "id",
//       title: "№",
//       type: "id",
//     },
//     {
//       id: "title",
//       title: "Наименование",
//       type: "string",
//     },
//     {
//       id: "price",
//       title: "Цена",
//       type: "number",
//     },
//   ],
// };





const Products: FC = () => {


  const getHttpResponse = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    const validatedData = httpDataValidator(data);
    if (validatedData !== null) {
      setResponseData(validatedData);
    }
  }


  type TDataType = Awaited<ReturnType<typeof getHttpResponse>>;

  const [responseData, setResponseData] = useState<IRootProduct | null>(null)
  // const [dataRows, setDataRows] = useState<unknown[]>([]);
  // const [columns, setColumns] = useState<TGridItem[]>([])
  // const [config, setConfig] = useState<TConfig>(initialConfig)
  const [contextInit, setContextInit] = useState<TContextData>(contextDataInit);
  const [gridDataOrdering, setGridDataOrdering] = useState<TOrdering>({
    columnID: "id",
    orderBy: "asc",
    setGridDataOrdering: () => { }
  });




  function httpDataValidator<T>(data: T): T | null {
    if (data !== null && typeof data === 'object') {
      return data;
    }
    return null; // Возвращаем null, если данные не валидны
  }

  interface TGridItem {
    [key: string]: unknown; // Замена на более конкретные свойства, если известны
  }

  interface Column {
    id: string;
    type: string; // Тип поля, например, "string", "number", "date" и т.д.
  }

  interface GridColumns {
    [key: string]: Column;
  }







  useEffect(() => {
    getHttpResponse();
  }, [])





  // useEffect(() => {




  //   if (responseData) {
  //     const products = responseData.products;
  //     if (Array.isArray(products)) {
  //       const { columnID, orderBy } = gridDataOrdering;
  //       const dataRows: unknown[] = _.orderBy(products, [columnID], orderBy);
  // setDataRows(sortedDataRows)

  // const gridItem = products[0] as TGridItem;
  // const columns = createGridColumns(gridItem)
  // console.log(columns)
  // setColumns(columns)

  // if (dataRows && columns) {


  //   setContextInit({
  //     gridConfig: {
  //       properties: {
  //         width: "27px 80px 1fr 100px"
  //       }
  //     },
  //     columns,
  //     dataRows,
  //     ordering: {
  //       columnID,
  //       orderBy,
  //       setGridDataOrdering
  //     }
  //   })
  // }
  // }
  // }


  // }, [responseData]);





  if (responseData)
    return (
      <ContextProvider responseData={responseData}>
        {/* {responseData && <h1>Loading...</h1>} */}
        {/* {dataRows && <DataGrid />} */}
        {responseData && <Testing />}
      </ContextProvider>
    );

};

export default Products;

