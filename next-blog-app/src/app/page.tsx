import Image from "next/image";
<<<<<<< HEAD
import { TProducts, getDataProducts } from "@/src/queries/";
import ProductsTable from "../components/ProductsTable";
// import { IProducts } from "@/src/queries";

export default async function Page() {
  const products = (await getDataProducts()) || [];
  return (
    <>
      <div className="bg-slate-500">
        <ProductsTable products={products} />
=======
import TableUI from "../components/ListUI";
import { getData } from "@/src/queries/";

export default async function Home() {
  const data = await getData();
  // console.log(products);
  return (
    <>
      <div className="bg-slate-500">
        <TableUI data={data} />
>>>>>>> 49167ca96b6af5ddb86293365c7a0d8c548a0e40
      </div>
    </>
  );
}
