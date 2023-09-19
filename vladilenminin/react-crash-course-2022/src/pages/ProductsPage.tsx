import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../models";
import { useProducts } from "../hooks/products";
import Product from "../components/Product";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import CreateProduct from "../components/CreateProduct";
import Modal from "../components/Modal";

const ProductsPage = () => {
	const { loading, error, products, addProduct } = useProducts();
	// const [modal, setModal] = useState(true);
	const { modal, open, close } = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		addProduct(product);
		close();
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5 grid h-screen place-items-center">
			{!loading ? (
				products.map((product, index) => (
					<Product key={product.id} product={product} />
				))
			) : (
				<Loader />
			)}
			{error && <ErrorMessage error={error} />}
			{modal && (
				<Modal title="Create New Product" onClose={() => close()}>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}
			<button
				onClick={() => open()}
				className="absolute bottom-5 right-5 rounded-full bg-red-700 text-white txt-2xl px-4 py-2"
			>
				+
			</button>
		</div>
	);
};

export default ProductsPage;
