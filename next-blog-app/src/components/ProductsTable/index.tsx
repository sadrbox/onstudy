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
import Image from "next/image";
import { Box } from "@mui/material";

const columns = [
  // { id: "image", name: "", width: "10%" },
  { id: "id", name: "ID", width: 50 },
  { id: "title", name: "Title", width: 100 },
  { id: "price", name: "Price", width: "10%" },
  // { id: "description", name: "Description", width: "20%" },
  { id: "category", name: "Category", width: "20%" },
  { id: "rating", name: "Rating", width: "10%" },
];
export default function ProductsTable({ products }: { products: TProducts }) {
  return (
    <Box sx={{ p: "2px", bgcolor: "#ddd", borderRadius: "2px" }}>
      <TableContainer
        sx={{
          overflow: "scroll",
          maxHeight: 400,
          backgroundColor: "#fff",
        }}
      >
        <Table
          stickyHeader
          size="small"
          className={styles.DataTable}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {columns &&
                columns.map((column) => {
                  return (
                    <TableCell sx={{}} key={column.id}>
                      {column.name}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((item) => {
                return (
                  <TableRow key={item.id}>
                    {/* {columns.map((column) => {
                    const tableCellWidth = columns.find(
                      (fndCol) => fndCol.id === column.id
                    )?.width;
                    return (
                      <TableCell key={column.id} sx={{ width: tableCellWidth }}>
                        {item[column.id]}
                      </TableCell>
                    );
                  })} */}{" "}
                    {/* <TableCell
                    sx={{ maxWidth: 30, maxHeight: 28, overflow: "hidden" }}
                  >
                    <Image
                      // style={{ maxHeight: "50px", width: "auto" }}
                      src={item.image}
                      width={28}
                      height={28}
                      alt="Picture of the author"
                    />
                  </TableCell> */}
                    <TableCell sx={{ minWidth: 20, maxWidth: 100 }}>
                      {item.id}
                    </TableCell>
                    <TableCell sx={{ minWidth: 100, maxWidth: 200 }}>
                      {item.title}
                    </TableCell>
                    <TableCell sx={{ minWidth: 50, maxWidth: 100 }}>
                      {item.price}
                    </TableCell>
                    <TableCell sx={{ minWidth: 50, maxWidth: 100 }}>
                      {item.category}
                    </TableCell>
                    <TableCell sx={{ minWidth: 50, maxWidth: 100 }}>
                      {item.rating?.rate}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

// export default ProductsTable;
