// import React, { useState, useContext } from "react";
// import "./App.css";
// import Product from "./components/Product";
// import Loader from "./components/Loader";
// import { useProducts } from "./hooks/products";
// import ErrorMessage from "./components/ErrorMessage";
// import Modal from "./components/Modal";
// import CreateProduct from "./components/CreateProduct";
// import { IProduct } from "./models";
// import { ModalContext } from "./context/ModalContext";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<ProductsPage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</>
	);
}

export default App;
