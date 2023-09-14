import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./components/Product";
// import { products } from "./data/products";
import axios from "axios";
import { IProduct } from "./models";
import Loading from "./components/Loading";

function App() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);

	async function fetchProducts() {
		setLoading(true);
		const response = await axios.get<IProduct[]>(
			"https://fakestoreapi.com/products?limit=5"
		);

		setTimeout(() => {
			setProducts(response.data);
			setLoading(false);
		}, 2000);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="container mx-auto max-w-2xl pt-5 grid h-screen place-items-center">
			{products.length > 0 ? (
				products.map((product, index) => (
					<Product key={product.id} product={product} />
				))
			) : (
				<Loading />
			)}
		</div>
	);
}

export default App;
