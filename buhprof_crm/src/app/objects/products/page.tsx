import axios from "axios";
import "./style.scss";
import Products from "@/components/objects/Products/Products";

export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: IProductRating;
}

export interface IProductRating {
	rate: number;
	count: number;
}

export default async function Page() {
	const response = await axios.get("https://fakestoreapi.com/products");

	const data = response.data;
	// const data = await getInfobases();
	return (
		<div style={{ height: "100%" }}>
			<Products data={data} />

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
