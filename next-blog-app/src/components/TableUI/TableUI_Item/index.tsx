"use client";
import { IProduct } from "@/src/queries";

interface ITableUI_Item {
  product: IProduct;
}
const TableUI_Item = (props: ITableUI_Item) => {
  // console.log(props.product);
  return (
    <div>
      <h1>{props.product.title}</h1>
    </div>
  );
};
export default TableUI_Item;
