import axios from "axios";
// import "./style.scss";
import Products from "@/components/objects/Products/Products";
import DataTable from "@/components/_global/DataTable";

export interface RootInterfaceOfProducts {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}

export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

async function getData() {
	try {
		const response = await axios.get(
			"https://dummyjson.com/products?limit=100"
		);
		const data = response.data;
		// const data = await getInfobases();	}
		return data.products;
	} catch (e) {
		return null;
	}
}
export default async function Page() {
	const columns = [
		{
			field: "id",
			header: "№",
			cssCell: { flex: "0 0 80px" },
			// format: "id",
			type: "id",
		},
		{
			field: "title",
			header: "Наименование",
			cssCell: { flex: 3 },
			type: "string",
		},
		{
			field: "price",
			header: "Цена",
			type: "number",
			cssCell: { flex: "0 0 100px" },
			cssField: { textAlign: "right" },
			css: {
				header: {},
				content: {},
				footer: { textAlign: "right", fontWeight: "bold" },
			},
		},
	];

	const data = await getData();

	return (
		<div>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
