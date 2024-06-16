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
	data: IProducts | undefined;
	isLoading: boolean;
	gridIDs: number[] | undefined;
}
const Products: FC = () => {
	const [props, setProps] = useState<IProductsProps>({
		columns,
		data: undefined,
		isLoading: true,
		gridIDs: undefined,
	});

	useEffect(() => {
		(async () => {
			let gridIDs;
			try {
				const response = await axios.get<IProducts>(
					"https://dummyjson.com/products?limit=100"
				);
				if (response?.data) {
					const gridIDs: number[] = response.data?.products.map((e) => e.id);
					setProps({ columns, data: response.data, isLoading: false, gridIDs });
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
				setProps({
					columns,
					data: undefined,
					isLoading: false,
					gridIDs: undefined,
				});
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
