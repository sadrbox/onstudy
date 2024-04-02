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
			cssprops: { flex: "0 0 80px" },
		},
		{
			field: "title",
			header: "Наименование",
			cssprops: { flex: 3 },
		},
		{
			field: "price",
			header: "Цена",
			cssprops: { flex: 1 },
		},
	];

	const data = await getData();

	return (
		<div style={{ height: "100%" }}>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
