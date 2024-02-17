import axios from "axios";
import DataTable from "@/components/_global/DataTable/index";
// import "./style.scss";
import { getInfobases } from "@/services/cluster";
import Infobases from "@/components/cluster/Infobases";
import { getClusterInfobases } from "@/utils/v83Com";
// import Products from "@/components/objects/Products/Products";

// export interface IProduct {
// 	id: number;
// 	title: string;
// 	price: number;
// 	description: string;
// 	category: string;
// 	image: string;
// 	rating: IProductRating;
// }

// export interface IProductRating {
// 	rate: number;
// 	count: number;
// }
// const columns = [
// 	{
// 		name: "id",
// 		header: "№",
// 		cssprops: { flex: "0 0 80px" },
// 	},
// 	{
// 		name: "title",
async function getData() {
	//  Загружаем данные с сервера
	const res = getClusterInfobases();
	// const data = await res.
	const dataset = res
		.then((data) => {
			return data;
		})
		.catch((e) => {
			throw new Error(e);
		});

	return dataset;
}
export default async function Page() {
	const columns = [
		{
			field: "id",
			header: "№",
			cssprops: { flex: "0 0 80px" },
		},
		{
			field: "name",
			header: "Идентификатор",
			cssprops: { flex: 1 },
		},
		{ field: "desc", header: "Описание", cssprops: { flex: 3 } },
	];

	const data = await getData().then((res) => {
		return res;
	});
	// console.log(response);
	// const response = await getInfobases();
	// console.log(data);

	// const { data } = response;
	// const data = await getInfobases();
	return (
		<div style={{ height: "100%" }}>
			{/* <Infobase /> */}
			{/* <Products data={data} /> */}
			{/* <DataTable */}
			<DataTable columns={columns} data={data} />
			{/* <div className="table-container">
				<div className="flex-table">
					<div className="flex-row header">
						<div style={{ flex: 0 }} className="flex-cell min-w-min">
							№
						</div>
						<div style={{ flex: 1 }} className="flex-cell">
							Идентификатор
						</div>
						<div style={{ flex: 1 }} className="flex-cell">
							Описание
						</div>
					</div>
					{data &&
						data.map((product: IProduct) => (
							<div key={product.id} className="flex-row">
								<div style={{ flex: 0 }} className="flex-cell min-w-min">
									{product.id}
								</div>
								<div style={{ flex: 1 }} className="flex-cell">
									{product.title}
								</div>
								<div style={{ flex: 1 }} className="flex-cell">
									{product.description}
								</div>
							</div>
						))}
				</div>
			</div> */}
			{/* <table>
				<thead>
					<tr>
						<th>№</th>
						<th>Идентификатор</th>
						<th>Описание</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((product: IProduct, idx: number) => (
							<tr key={product.id}>
								<td>
									<div>{product.id}</div>
								</td>
								<td className="">
									<div>{product.title}</div>
								</td>
								<td>
									<div>{product.description}</div>
								</td>
							</tr>
						))}
				</tbody>
			</table> */}
		</div>
	);
}
