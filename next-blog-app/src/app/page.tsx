import Image from "next/image";
import TableUI from "../components/TableUI";
import { getData } from "@/src/queries/";

export default async function Home() {
  const products = await getData();
  // console.log(products);
  return (
    <>
      <div className="bg-slate-500">
        <TableUI products={products} />
      </div>
    </>
  );
}
