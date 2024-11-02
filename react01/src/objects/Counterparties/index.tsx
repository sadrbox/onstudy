import React, { useState, useEffect, ReactNode, FC } from 'react';
import { TColumn, TDataItem } from 'src/components/ui/Grid/types';
import columns from "./columns.json"
import Grid from 'src/components/ui/Grid';

type TResponseData = { counterparties: TDataItem[] } & {
  [key: string]: string | number | boolean
};

type TParams = {
  tabName: string;
  rows: TDataItem[]
  columns: TColumn[];
}

const Counterparties: FC = () => {

  const [responseData, setResponseData] = useState<TResponseData | undefined>(undefined);
  const [params, setParams] = useState<TParams | undefined>(undefined)
  const [sortedColumns, setSortedColumns] = useState<TColumn[]>([])


  function buildColumns(columns: TColumn[], tabName: string) {
    const cols = columns.map((col, keyID) => {
      col.position = keyID + 1
      return col;
    }).sort((a, b) => a.position - b.position);
    const getStorageOfSettings = localStorage.getItem("username_gridSetting_" + tabName);
    let storageOfSettings = [];
    storageOfSettings = getStorageOfSettings && JSON.parse(getStorageOfSettings)

    if (storageOfSettings) {
      setSortedColumns(storageOfSettings);
    } else {
      setSortedColumns(cols);
    }
  }

  useEffect(() => {
    if (params)
      buildColumns(columns, params?.tabName)
  }, [params])

  useEffect(() => {
    buildColumns(columns, 'counterparties')
    loadDataGrid();
  }, [])

  useEffect(() => {
    // console.log(sortedColumns)
    if (responseData?.counterparties) {
      const rows = responseData?.counterparties;

      setParams({ tabName: 'counterparties', rows, columns: sortedColumns })
    } else {
      setParams(undefined)
    }
  }, [responseData])

  const loadDataGrid = async () => {
    buildColumns(columns, 'counterparties');
    setParams(undefined)
    await fetch('http://localhost:3000/counterparties')
      .then(response => response.json())
      .then(data => setResponseData(data))
  }

  return (
    <>
      {params ? (<Grid params={params} actions={{ loadDataGrid }} />) : (<h1>Loading...</h1>)}
    </>
  )
};

export default Counterparties;