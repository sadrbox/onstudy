import React, { useEffect, useState, FC, useMemo, useCallback } from "react";
import DataGrid from "../../ui/GridDataTable";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { storeGridData, storeGridSorting } from "@/utils/store.ts";
// import { Checkbox } from "antd";
import {
  IColumns,
  IProduct,
  IProducts,
  TGridDataRows,
  TGridSorting,
  TStoreGridData,
} from "@/ui/GridDataTable/types";

const columns = {
  properties: {
    width: "27px 80px 1fr 100px",
  },
  cols: [
    {
      id: "checkbox",
      type: "checkbox",
      // field: {
      // 	style: { textAlign: "center" } as React.CSSProperties,
      // },
    },
    {
      id: "id",
      title: "№",
      type: "id",
    },
    {
      id: "title",
      title: "Наименование",
      type: "string",
    },
    {
      id: "price",
      title: "Цена",
      type: "number",
    },
  ],
};

type TResponseData = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};
// type TSortingState = {
//   columnID: keyof IProduct;
//   orderBy: "ASC" | "DESC";
// };

type IProductKey = keyof IProduct;
type TProductValue<K extends IProductKey> = IProduct[K];
type TSortingGridDataRows = <K extends IProductKey>(
  gridDataRows: IProduct[],
  columnID: K,
  orderBy: "ASC" | "DESC",
) => IProduct[];
// interface IProductsProps extends HTMLAttributes<HTMLElement> {
// 	// columns: IColumns;
// 	data?: {
// 		gridRows: IProduct[] | undefined;
// 		gridIDs: number[] | undefined;
// 		// sortFn: (columnID: string, orderBy?: string) => void;
// 		// sortDirection: "ASC" | "DESC";
// 	};
// 	isLoading: boolean;
// }
const Products: FC = () => {
  const initHttpResponse: TResponseData = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  const [httpResponse, setHttpResponse] =
    useState<TResponseData>(initHttpResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [sorting, setSorting] = useAtom<TGridSorting>(storeGridSorting);
  // const [gridDataRows, setGridDataRows] = useState<TGridDataRows>(undefined);

  const handleGridSort = (columnID: keyof IProduct = "id") => {
    setSorting((prev) => {
      // console.log(columnID, { ...prev });
      return {
        columnID,
        orderBy:
          prev.columnID === columnID
            ? prev.orderBy === "ASC"
              ? "DESC"
              : "ASC"
            : "ASC",
      };
    });
  };

  useEffect(() => {
    const getHttpResponse = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<TResponseData>(
          "https://dummyjson.com/products?limit=100",
        );
        if (response?.data) {
          // console.log(1);
          setHttpResponse(response?.data);
        }
      } catch (e) {
        setError("Ошибка запроса данных JSON");
      } finally {
        setLoading(false);
      }
    };
    // console.log("sts");
    getHttpResponse();
  }, []);

  const sortedDataRows = useMemo(() => {
    return [...httpResponse.products].sort((a, b): number => {
      const aValue = a[sorting.columnID];
      const bValue = b[sorting.columnID];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sorting.orderBy === "ASC"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        // return sorting.orderBy === 'ASC' ? aValue > bValue : bValue < aValue;
        if (sorting.orderBy === "ASC") {
          return aValue - bValue;
        } else if (sorting.orderBy === "DESC") {
          return bValue - aValue;
        }
      }
      return 0;
    });
  }, [httpResponse, sorting]);

  // useEffect(() => {}, []);

  return (
    <>
      {httpResponse?.products && (
        <>
          <DataGrid
            columns={columns}
            dataRows={sortedDataRows}
            actions={{ handleGridSort }}
          />
        </>
      )}
    </>
  );
};

export default Products;
