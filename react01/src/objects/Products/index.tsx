import React, { useEffect, useState, FC, useMemo, useCallback, useContext, createContext, Dispatch, SetStateAction } from "react";
import DataGrid from "src/components/ui/GridData";
import _, { reject } from "lodash";
// import { ContextInstance, ContextProvider } from "src/components/ui/GridData/ContextProvider";
import { IColumns, IProduct, IRootProduct } from "src/components/ui/GridData/types";
import { ContextInstance, ContextInstanceInit, TContextInstance } from "src/components/ui/GridData/ContextProvider";
import { createColumnsConfigFromResponse, initialCols, initialConfig, TColumn, TConfig } from "src/components/ui/GridData/DataGrid.module";
import { Testing } from "src/components/Testing";
// import { ProductType } from './index';
// import { TContextData } from 'src/ui/GridDataTable/ContextProvider';

type TOrdering = {
  columnID: string; orderBy: 'asc' | 'desc'
}


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
    return data;
  }

  type TDataType = Awaited<ReturnType<typeof getHttpResponse>>;
  // const fetchDataAndDetermineType = async () => {
  //   const data = await getType();

  //   // Определяем тип данных с помощью typeof
  //   type ResponseType = typeof data;

  //   // Теперь ResponseType можно использовать для типизации
  //   const typedData: ResponseType = data;

  //   console.log(typedData);
  // };

  // fetchDataAndDetermineType();

  const [responseData, setResponseData] = useState<IRootProduct | undefined>(undefined)
  const [dataRows, setDataRows] = useState<IProduct[] | undefined>(undefined);
  const [config, setConfig] = useState<TConfig>(initialConfig)
  const [contextData, setContextData] = useState<TContextInstance>(ContextInstanceInit);
  const [gridDataOrdering, setGridDataOrdering] = useState<TOrdering>({
    columnID: "id",
    orderBy: "asc",
  });






  useEffect(() => {
    const { columnID, orderBy } = gridDataOrdering;

    getHttpResponse().then(data => {
      const ProductItem1 = data?.products[0];
      if (data) {
        setResponseData(data);
      }
      return ProductItem1;
    })
      .then((ProductItem1) => {


        async function gridConfig() {
          return await createColumnsConfigFromResponse(ProductItem1);
        }
        gridConfig().then(data => {
          // console.log(data)
          setConfig(data);
        })
        // console.log(gridConfig)


      })
      .then(() => {
        if (responseData) {
          const sortedDataRows = _.orderBy(responseData.products, [columnID], orderBy);
          setDataRows(sortedDataRows);
          // return sortedDataRows;
        }
      })
      .then(() => {
        // console.log(data)
        // if (dataRows && config) {

        setContextData({
          config,
          dataRows,
          ordering: {
            columnID,
            orderBy,
            setGridDataOrdering
          }
        });
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }, [gridDataOrdering]);


  const Provider = ContextInstance.Provider;

  if (config.cols) {
    // console.log(dataRows)
    return (
      <Provider value={contextData}>
        {/* {responseData && <h1>Loading...</h1>} */}
        {/* {dataRows && <DataGrid />} */}
        <Testing />
      </Provider>
    );
  }
};

export default Products;

