"use client";
import { TProducts } from "@/src/queries";
import React from "react";
import styles from "./ProductsTable.module.scss";

export default function ProductsTable({ products }: { products: TProducts }) {
  return (
    <>
      <table className={styles.DataTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td align="center">{item.price}</td>
                  <td align="center">{item.rating?.rate}</td>
                  <td>{item.category}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
