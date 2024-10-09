import React, { useState, useEffect, ReactNode, FC, Dispatch, SetStateAction } from 'react';
// import { TColumn, TColumnsHeader } from '../services';
import styles from "../styles.module.scss";
// import UICheckbox from '../GridDataTabBodyRowCheckbox';
// import { useContextDataGrid } from '../GridContextData';
import settings from "./settings.json"
// import { columns } from "./settings.json"
import { TColumn, TGridStates } from '../types';
import { getColumnSettingValue, getColumnWidthById, getFormatColumnValue, getTextAlignByColumnType } from '../GridData/services';
import { getTranslateColumn, getTranslation } from 'src/i18';
import { useContextGridSetting } from './GridSettingContext';
import GridSettingTabBodyRowCheckboxVisible from './GridSettingTabBodyRowCheckboxVisible';
import GridSettingTabBodyRowCheckboxSortable from './GridSettingTabBodyRowCheckboxSortable';

type TProps = {
  row: TColumn;
  // states: {
  //   activeRow: number | null, setActiveRow: Dispatch<SetStateAction<number | null>>
  // }
}

const GridSettingTabBodyRow: FC<TProps> = ({ row }) => {
  const [columns, setColumns] = useState<TColumn[]>([])

  const { context } = useContextGridSetting();

  function setActiveRow(rowID: number) {
    if (context?.states?.setActiveRow)
      context?.states?.setActiveRow(rowID)
  }

  function isActiveRow(rowID: number): boolean {
    return (context?.states?.activeRow === rowID) || false;
  }

  useEffect(() => {
    if (columns) {
      const sortedColumns = settings.columns.sort((a, b) => a.position - b.position);
      setColumns(sortedColumns)
    }
  }, [])

  const rowID = +row?.position

  return (
    <tr data-row-id={rowID}>
      {columns && columns.map((column, keyID) => {

        const value = getColumnSettingValue(row, column);
        if (column.type === 'boolean' && column.identifier === 'visible') {
          return (
            <td key={keyID}>
              <div style={{ justifyItems: column.alignment }} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                <GridSettingTabBodyRowCheckboxVisible rowID={rowID} />
              </div>
            </td>)
        } else if (column.identifier === 'column' || column.identifier === 'alignment') {
          // const colValue: string = (column.type === 'string') ? (row[column.identifier as keyof TColumn]?.toString() ?? "") : "";
          return (
            <td key={keyID} onClick={() => setActiveRow(rowID)}>
              <div style={getTextAlignByColumnType(column)} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                <span>{getTranslation(value)}</span>
              </div>
            </td>)
        } else if (column.type === 'boolean' && column.identifier === 'sortable') {
          return (
            <td key={keyID}>
              <div style={{ justifyItems: column.alignment }} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                <GridSettingTabBodyRowCheckboxSortable rowID={rowID} />
              </div>
            </td>)
        } else {
          return (
            <td key={keyID} onClick={() => setActiveRow(rowID)}>
              <div style={getTextAlignByColumnType(column)} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                <span>{value}</span>
              </div>
            </td>)
        }
      })}
    </tr >
  )
};

export default GridSettingTabBodyRow;