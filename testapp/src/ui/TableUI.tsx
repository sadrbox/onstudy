import React, { useEffect, useLayoutEffect, useState } from "react";
import { IProduct, CProduct } from "../types";
import axios from "axios";
// import { IProducts, CProduct } from '../types/index';

type Props = {};

const TableUI = (props: Props) => {
	useLayoutEffect(() => {
		// setWidthRow();
	});

	const [products, setProducts] = useState<IProduct[] | []>([]);

	// console.log(keysOfProps);

	useEffect(() => {
		fetchData();
		console.log(CProduct);
	}, []);

	const fetchData = async () => {
		await axios
			.get("https://dummyjson.com/products")
			.then((res) => {
				setProducts(res.data.products);
				// console.log(typeof res.data.products);
				console.log(products);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<table className="bg-green-300">
				<thead>
					<tr>
						{Object.keys(CProduct).map((elm, idx) => (
							<th key={idx}>{elm}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{products.map((elm) => (
						<tr key={elm.id}>
							<td>{elm.id}</td>
							<td>{elm.title}</td>
							<td>{elm.description}</td>
							<td>{elm.price}</td>
							<td>{elm.discountPercentage}</td>
							<td>{elm.rating}</td>
							<td>{elm.stock}</td>
							<td>{elm.brand}</td>
							<td>{elm.category}</td>
							<td>{elm.thumbnail}</td>
							<td>{elm.images}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableUI;
