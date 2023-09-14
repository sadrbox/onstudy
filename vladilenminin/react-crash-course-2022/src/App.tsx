import React from "react";
import "./App.css";
import { Product } from "./components/Product";

function App() {
	return (
		<div className="container">
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
}

export default App;
