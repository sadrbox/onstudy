"use client";
import { TProducts } from "@/src/queries";
import React, { useEffect, useState } from "react";
import styles from "./ProductsTable.module.scss";

export default function ProductsTable({ products }: { products: TProducts }) {
  const [tableHeight, setTableHeight] = useState<string>("");

  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const table = document.querySelector("#DataTable") as HTMLDivElement;
    // const tableHeight = html.clientHeight - (table?.offsetTop).;
    // console.log(html.clientHeight, table?.offsetTop);
    const tableHeight = html.clientHeight - table?.offsetTop + "px";
    setTableHeight(tableHeight);
  }, [products]);

  // var screen = {
  //   scrollHeightBody: body.scrollHeight,
  //   offsetHeightBody: body.offsetHeight,
  //   clientHeightHtml: html.clientHeight + "px",
  //   scrollHeightHtml: html.scrollHeight,
  //   offsetHeightHtml: html.offsetHeight,
  // };
  // console.log(screen);

  return (
    <div
      className="overflow-scroll"
      style={{
        height: tableHeight,
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <table id="DataTable" className={styles.DataTable}>
        <thead>
          <tr>
            <th align="right">ID</th>
            <th align="left">Title</th>
            <th align="right">Price</th>
            <th align="right">Rating</th>
            <th align="left">Category</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => {
              return (
                <tr key={item.id}>
                  <td align="right">{item.id}</td>
                  <td align="left">{item.title}</td>
                  <td align="right">{item.price}</td>
                  <td align="right">{item.rating?.rate}</td>
                  <td align="left">{item.category}</td>
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
  );
}
