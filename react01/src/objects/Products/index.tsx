import { useEffect, useState, FC, HTMLAttributes, createContext } from "react";
import DataGrid from "../../ui/DataGrid";
import axios from "axios";
import { Checkbox } from "antd";
import { IColumns, IProduct, IProducts } from "@/ui/DataGrid/types";

const columns = {
	properties: {
		width: "30px 80px 1fr 100px",
	},
	cols: [
		{
			id: "checkbox",
			type: "checkbox",
			field: {
				style: { textAlign: "center" } as React.CSSProperties,
			},
		},
		{
			id: "id",
			title: "№",
			type: "id",
		},
		{
			id: "title",
			title: "Наименование",
			type: "string",
		},
		{
			id: "price",
			title: "Цена",
			type: "number",
		},
	],
};

interface IProductsProps extends HTMLAttributes<HTMLElement> {
	columns: IColumns;
	data?: {
		gridRows: IProduct[] | undefined;
		gridIDs: number[] | undefined;
		// sortFn: (columnID: string, orderBy?: string) => void;
		// sortDirection: "ASC" | "DESC";
	};
	isLoading: boolean;
}
const Products: FC = () => {
	const [props, setProps] = useState<IProductsProps>({
		columns,
		isLoading: true,
	});

	// const GridContext = createContext()
	// const [data, setData] = useState(undefined);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get<IProducts>(
					"https://dummyjson.com/products"
				);
				// console.log("test");
				if (response?.data) {
					setProps({
						columns,
						data: {
							gridRows: response?.data.products,
							gridIDs: response.data?.products.map((e) => e.id),
							// sortFn: sortFnByColumn,
							// sortDirection: "ASC",
						},
						isLoading: false,
					});
					// console.log("DataGrid setProps");
					// console.log(response.data.products);
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
				setProps({
					columns,
					isLoading: false,
				});
			}
		})();
	}, []);
	// console.log("DataGrid Component");
	// useEffect(()=> {

	// },[data])

	return (
		<>
			<DataGrid {...props} />
		</>
	);
};

export default Products;
