import { useEffect, useState, FC, HTMLAttributes } from "react";
import DataGrid from "../../ui/DataGrid";
import axios from "axios";
import { Checkbox } from "antd";
import { IColumns, IProducts } from "@/ui/DataGrid/types";

const columns = {
	properties: {
		width: "30px 80px 1fr 100px",
	},
	cols: [
		{
			id: "checkbox",
			type: "checkbox",
			field: {
				style: { textAlign: "center", display: "block" } as React.CSSProperties,
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
	data: IProducts | undefined;
	isLoading: boolean;
}
const Products: FC = () => {
	const [props, setProps] = useState<IProductsProps>({
		columns,
		data: undefined,
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
				setProps({ columns, data: undefined, isLoading: false });
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
