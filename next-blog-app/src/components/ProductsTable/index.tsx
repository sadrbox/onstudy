// "use client";

import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { TProducts, TProduct } from "@/src/queries";
import styles from "./ProductsTable.module.scss";

const columns = [
  { id: "id", name: "ID" },
  { id: "title", name: "Title" },
  { id: "price", name: "Price" },
  { id: "description", name: "Description" },
  { id: "category", name: "Category" },
  { id: "image", name: "Image" },
  { id: "rating", name: "Rating" },
];
export default function ProductsTable({ products }: { products: TProducts }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 600 }}
        className={styles.DataTable}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {columns &&
              columns.map((column) => {
                return <TableCell key={column.id}>{column.name}</TableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.image}</TableCell>
                  <TableCell>{item.rating?.rate}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export default ProductsTable;
