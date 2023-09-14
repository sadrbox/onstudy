import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./components/Product";
// import { products } from "./data/products";
// import axios from "axios";
import axios, { AxiosError } from "axios";
import { IProduct } from "./models";
import Loading from "./components/Loading";

function App() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	async function fetchProducts() {
		try {
			setError("");
			setLoading(true);
			const response = await axios.get<IProduct[]>(
				"https://fakestoreapi.com/products?limit=5"
			);

			setTimeout(() => {
				setProducts(response.data);
				setLoading(false);
			}, 2000);
		} catch (e) {
			const error = e as AxiosError;
			setLoading(false);
			setError(error.message);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="container mx-auto max-w-2xl pt-5 grid h-screen place-items-center">
			{!loading ? (
				products.map((product, index) => (
					<Product key={product.id} product={product} />
				))
			) : (
				<Loading />
			)}
			{error && <p className="text-center text-red-500">{error}</p>}
		</div>
	);
}

export default App;
