import Image from "next/image";
import { TProducts, getDataProducts } from "@/src/queries/";
import ProductsTable from "../components/ProductsTable";
// import { IProducts } from "@/src/queries";

export default async function Page() {
  const products = (await getDataProducts()) || [];
  return (
    <>
      <div className="bg-slate-500">
        <ProductsTable products={products} />
      </div>
    </>
  );
}
