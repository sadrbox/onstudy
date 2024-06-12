import { useEffect, useState, FC, HTMLAttributes } from "react";
import DataGrid from "../../ui/DataGrid";
import axios from "axios";
import { IColumns, IProducts } from "@/ui/DataGrid/types";

const columns = {
	properties: {
		width: "80px 1fr 100px",
	},
	cols: [
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

interface IProductsProps extends HTMLAttributes<HTMLDivElement> {
	columns: IColumns;
	data: IProducts | null;
	isLoading: boolean;
}
const Products: FC = () => {
	const [props, setProps] = useState<IProductsProps>({
		columns,
		data: null,
		isLoading: true,
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get<IProducts>(
					"https://dummyjson.com/products?limit=100"
				);
				if (response?.data) {
					setProps({ columns, data: response.data, isLoading: false });
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
				setProps({ columns, data: null, isLoading: false });
			}
		})();
	}, []);

	return (
		<>
			<DataGrid {...props} />
		</>
	);
};

export default Products;
