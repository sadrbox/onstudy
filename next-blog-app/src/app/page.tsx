import Image from "next/image";
import TableUI from "../components/ListUI";
import { getData } from "@/src/queries/";

export default async function Home() {
  const data = await getData();
  // console.log(products);
  return (
    <>
      <div className="bg-slate-500">
        <TableUI data={data} />
      </div>
    </>
  );
}
