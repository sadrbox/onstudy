"use client";
import { TProducts } from "@/src/queries";
import React, { useEffect, useState } from "react";
import styles from "./ProductsTable.module.scss";

type TTableParams = {
  scrollAreaHeight: number | string;
  // IdWidth: number | string;
  // TitleWidth: number | string;
  // PriceWidth: number | string;
  // RatingWidth: number | string;
  // CategoryWidth?: number | string;
};

export default function ProductsTable({ products }: { products: TProducts }) {
  const [params, setParams] = useState<TTableParams>({
    scrollAreaHeight: 200 || 300,
    // IdWidth: 60,
    // TitleWidth: 180,
    // PriceWidth: 80,
    // RatingWidth: 80,
    // CategoryWidth: "auto",
  });

  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const wrapperArea = document.querySelector(
        "#wrapperArea"
      ) as HTMLDivElement,
      scrollArea = document.querySelector("#scrollArea") as HTMLDivElement;

    // const IdWidth =
    //   document.querySelector<HTMLTableCellElement>(
    //     '[data-title="id"]'
    //   )?.clientWidth;
    // const TitleWidth = document.querySelector<HTMLTableCellElement>(
    //   '[data-title="title"]'
    // )?.clientWidth;
    // const PriceWidth = document.querySelector<HTMLTableCellElement>(
    //   '[data-title="price"]'
    // )?.clientWidth;
    // const RatingWidth = document.querySelector<HTMLTableCellElement>(
    //   '[data-title="rating"]'
    // )?.clientWidth;
    // const CategoryWidth = document.querySelector<HTMLTableCellElement>(
    //   '[data-title="category"]'
    // )?.clientWidth;

    // console.log(html.clientHeight, table?.offsetTop);
    const scrollAreaHeight = html.clientHeight - 100;
    setParams({
      scrollAreaHeight: scrollAreaHeight || 300,
      // IdWidth: IdWidth || 60,
      // TitleWidth: TitleWidth || 100,
      // PriceWidth: PriceWidth || 80,
      // RatingWidth: RatingWidth || 80,
      // CategoryWidth: CategoryWidth || "auto",
    });
    // console.log(IdWidth?.clientWidth);
  }, [products]);

  // console.log(params.scrollAreaHeight);
  return (
    <div id="wrapperArea" className={styles.wrapperArea}>
      <div
        id="scrollArea"
        className={styles.scrollArea}
        style={{ maxHeight: params.scrollAreaHeight }}
      >
        <table>
          <thead>
            <tr>
              <th align="right">ID</th>
              <th align="left">Title</th>
              <th align="right">Price</th>
              <th align="right">Rating</th>
              <th align="left">Category</th>
            </tr>
          </thead>{" "}
          <tbody>
            {params &&
              products &&
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
        </table>
      </div>
    </div>
  );
}
