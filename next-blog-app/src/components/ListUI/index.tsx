import { IProduct } from "@/src/queries";
// import TableUI_Item from "./Item";
import Item from "./Item";
// import TableUI_Item from "./TableUI_Item";

interface IListUI {
  data: IProduct[];
}
const ListUI = (props: IListUI) => {
  const data = props.data;
  return (
    <div>
      {data &&
        data.map((item, idx) => {
          // console.log(elem);
          // return <TableUI_Item key={idx} product={product} />;
          return <Item key={idx} dataItem={item} />;
        })}
    </div>
  );
};

export default ListUI;
