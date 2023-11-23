"use client";
import { IProduct, IProductCategory } from "@/src/queries";

interface IListItem {
  dataItem: IProduct;
}
const Item = ({ dataItem }: IListItem) => {
  // console.log(typeof item);
  // const dataItem = JSON.parse(item);
  const datas = Object.entries(dataItem);

  // console.log(IProduct);
  return (
    <div>
      {datas.map((item, idx) => {
        if (typeof item[1] !== "object") {
          return (
            <div key={idx}>
              <h2>{item[0]}</h2>
              <span>{item[1]}</span>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Item;
