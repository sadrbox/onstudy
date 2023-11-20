import { IProduct } from "@/src/queries";
import TableUI_Item from "./TableUI_Item";

interface ITableUI {
  products: IProduct[];
}
const TableUI = (props: ITableUI) => {
  const productsData = props.products;
  return (
    <div>
      {productsData &&
        productsData.map((product, idx) => {
          // console.log(elem);
          return <TableUI_Item key={idx} product={product} />;
        })}
    </div>
  );
};

export default TableUI;
