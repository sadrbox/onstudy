import { useEffect, useState } from "react";
import DataGrid from "../../ui/DataGrid";
import axios from "axios";

const columns = {
	properties: {
		width: "40px 80px 1fr 100px",
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

async function getData() {
	try {
		const response = await axios.get(
			"https://dummyjson.com/products?limit=100"
		);
		const data = response.data;
		return data.products;
	} catch (e) {
		return null;
	}
}

const Products = () => {
	const [props, setProps] = useState({ columns, data: {} });

	useEffect(() => {
		const data = getData();
		setProps({ columns, data });
	}, []);

	return (
		<>
			<DataGrid {...props} />
		</>
	);
};

export default Products;
