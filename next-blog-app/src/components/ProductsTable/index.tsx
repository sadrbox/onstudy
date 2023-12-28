"use client";
import { TProducts } from "@/src/queries";
import React, {
  MouseEventHandler,
  useEffect,
  useState,
  useRef,
  EventHandler,
} from "react";
import styles from "./ProductsTable.module.scss";

type TTableParams = {
  scrollAreaHeight: number | string;
};

export default function ProductsTable({ products }: { products: TProducts }) {
  const [params, setParams] = useState<TTableParams>({
    scrollAreaHeight: 200 || 300,
  });

  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const wrapperArea = document.querySelector(
        "#wrapperArea"
      ) as HTMLDivElement,
      scrollArea = document.querySelector("#scrollArea") as HTMLDivElement;

    const scrollAreaHeight = html.clientHeight - 100;
    setParams({
      scrollAreaHeight: scrollAreaHeight || 300,
    });
  }, [products]);

  const selectRowTable = (event: HTMLTableRowElement): void => {
    // event.preventDefault();
    console.log(event);
    // const row = event.target;
    // const row = document.querySelector(`[data-rowid="${rowId}"]`);
    // row?.classList.add("bg-gray-900");
    // row?.attributes.set()
  };

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
          </thead>
          <tbody>
            {params &&
              products &&
              products.map((item) => {
                return (
                  <tr
                    key={item.id}
                    data-rowid={item.id}
                    data-row-selected={false}
                    onClick={(event) => selectRowTable(event)}
                  >
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
              <th></th>
              <th></th>
              <th align="right">49.34</th>
              <th align="right">38.23</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
