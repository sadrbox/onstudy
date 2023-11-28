"use client";
import { TProducts } from "@/src/queries";
import React, { useEffect, useState } from "react";
import styles from "./ProductsTable.module.scss";

type TTableParams = {
  // wrapperAreaTop: number;
  scrollAreaHeight: number;
  tableHeaderTop: number;
  tableHeaderCellId: number;
  tableHeaderCellTitle: number;
};

export default function ProductsTable({ products }: { products: TProducts }) {
  const [params, setParams] = useState<TTableParams>({
    // wrapperAreaTop: 0,
    scrollAreaHeight: 0,
    tableHeaderTop: 0,
    tableHeaderCellId: 0,
    tableHeaderCellTitle: 0,
  });

  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const wrapperArea = document.querySelector(
        "#wrapperArea"
      ) as HTMLDivElement,
      scrollArea = document.querySelector("#scrollArea") as HTMLDivElement;

    const tableHeader = document.querySelector(
      "#DataTable table thead"
    ) as HTMLTableElement;

    const tableHeaderCellId = document.querySelector(
      '[data-title="id"]'
    ) as HTMLTableCellElement;

    const tableHeaderCellTitle = document.querySelector(
      '[data-title="title"]'
    ) as HTMLTableCellElement;

    // console.log(tableHeaderCellTitle.offsetWidth);

    // console.log(tableHeader?.offsetTop);
    // console.log(html.clientHeight, table?.offsetTop);
    const scrollAreaHeight = html.clientHeight - 100;
    setParams({
      scrollAreaHeight,
      tableHeaderTop: wrapperArea?.offsetTop,
      tableHeaderCellId: tableHeaderCellId.offsetWidth,
      tableHeaderCellTitle: tableHeaderCellTitle.offsetWidth,
    });
    // console.log(html?.clientHeight);
  }, [products]);

  // console.log(params.scrollAreaHeight);
  return (
    <div id="wrapperArea" className={styles.wrapperArea}>
      <table>
        <thead>
          <tr>
            <th style={{ width: params.tableHeaderCellId }} align="right">
              ID
            </th>
            <th style={{ width: params.tableHeaderCellTitle }} align="left">
              Title
            </th>
            <th style={{ top: params.tableHeaderTop }} align="right">
              Price
            </th>
            <th style={{ top: params.tableHeaderTop }} align="right">
              Rating
            </th>
            <th style={{ top: params.tableHeaderTop }} align="left">
              Category
            </th>
          </tr>
        </thead>
      </table>
      <div
        id="scrollArea"
        className={styles.scrollArea}
        style={{ maxHeight: params.scrollAreaHeight }}
      >
        <table>
          {/* <thead style={{ backgroundColor: "red" }}>
            <tr>
              <th style={{ top: params.tableHeaderTop }} align="right">
                ID
              </th>
              <th style={{ top: params.tableHeaderTop }} align="left">
                Title
              </th>
              <th style={{ top: params.tableHeaderTop }} align="right">
                Price
              </th>
              <th style={{ top: params.tableHeaderTop }} align="right">
                Rating
              </th>
              <th style={{ top: params.tableHeaderTop }} align="left">
                Category
              </th>
            </tr>
          </thead> */}
          <tbody>
            {products &&
              products.map((item) => {
                return (
                  <tr key={item.id}>
                    <td data-title="id" align="right">
                      <span>{item.id}</span>
                    </td>
                    <td data-title="title" align="left">
                      <span>{item.title}</span>
                    </td>
                    <td data-title="price" align="right">
                      <span>{item.price}</span>
                    </td>
                    <td data-title="rating" align="right">
                      <span>{item.rating?.rate}</span>
                    </td>
                    <td data-title="category" align="left">
                      <span>{item.category}</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
