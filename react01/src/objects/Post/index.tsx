import React, { useEffect, useMemo, useState } from "react";
// import DataGrid from "src/ui/GridDataTable";
import DataGrid from "src/ui/GridDataTable";

import axios from "axios";
import { atom, useAtom } from "jotai";
import { storeGridData, storeGridSorting } from "@/utils/store";
import {
  IColumns,
  IProduct,
  IProducts,
  TGridSorting,
  TStoreGridData,
} from "src/ui/GridDataTable/types";

const columns = {
  properties: {
    width: "27px 80px 1fr 100px",
  },
  cols: [
    {
      id: "checkbox",
      type: "checkbox",
    },
    {
      id: "id",
      title: "№",
      type: "id",
    },
    { id: "title", title: "Заголовок", type: "string" },
    { id: "comments", title: "Коментарии", type: "string" },
  ],
};
type Post = {
  id: number;
  title: string;
  comments: number;
};
type TResponseData = {
  posts: Post[];
};

const Post = () => {
  const initHttpResponse: TResponseData = {
    posts: [],
  };
  const [httpResponse, setHttpResponse] =
    useState<TResponseData>(initHttpResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [sorting, setSorting] = useAtom<TGridSorting>(storeGridSorting);

  useEffect(() => {
    const getHttpResponse = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<TResponseData>(
          "https://dummyjson.com/posts?limit=100",
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
    return [...httpResponse.posts].sort((a, b): number => {
      const aValue = a[sorting.columnID as keyof Post];
      const bValue = b[sorting.columnID as keyof Post];

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

  const handleGridSort = (columnID: string = "id") => {
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
  // console.log(sortedDataRows);

  return (
    <>
      {httpResponse?.posts && (
        <>
          <DataGrid
            columns={columns}
            dataRows={sortedDataRows}
            // typeOfRows={typeof sortedDataRows}
            actions={{ handleGridSort }}
          />
        </>
      )}
    </>
  );
};

export default Post;
