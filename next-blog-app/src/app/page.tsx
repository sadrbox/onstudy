import Image from "next/image";
import { TProducts, getDataProducts } from "@/src/queries/";
import ProductsTable from "../components/ProductsTable";
import { Box } from "@mui/material";
// import { IProducts } from "@/src/queries";

export default async function Page() {
  const products = (await getDataProducts()) || [];
  return (
    <>
      <div className="">
        <Box m={5}>
          <ProductsTable products={products} />
        </Box>
      </div>
    </>
  );
}
