import React, { useState } from "react";
import axios from "axios";
import { IProduct } from "../models";
import ErrorMessage from "./ErrorMessage";

const productData: IProduct = {
	id: Date.now(),
	title: "",
	price: 109.95,
	description:
		"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	category: "men's clothing",
	image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	rating: { rate: 3.9, count: 120 },
};

interface CreateProductProps {
	onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	// submitHandler
	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		if (value.trim().length === 0) {
			setError("Please enter valid title.");
			return;
		}

		productData.title = value;

		const response = await axios.post<IProduct>(
			"https://fakestoreapi.com/products/",
			productData
		);

		onCreate(response.data);
	};

	//changeHandler
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product title..."
				value={value}
				// onChange={(event) => setValue(event.target.value)}
				onChange={changeHandler}
			/>

			{error && <ErrorMessage error={error} />}

			<button
				type="submit"
				className="py-2 px-4 border bg-yellow-400 hover:text-white"
			>
				Create
			</button>
		</form>
	);
};

export default CreateProduct;
