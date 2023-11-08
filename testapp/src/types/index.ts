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
	images?: string[] | null;
}

export const CProduct = {
	id: { type: "number", width: "min-content" },
	title: { type: "string", width: "40%" },
	description: { type: "string", width: "40%" },
	price: { type: "string", width: "40%" },
	discountPercentage: { type: "string", width: "40%" },
	rating: { type: "string", width: "40%" },
	stock: { type: "string", width: "40%" },
	brand: { type: "string", width: "40%" },
	category: { type: "string", width: "40%" },
	thumbnail: { type: "string", width: "40%" },
	images: { type: "string", width: "40%" },
};

// export type TableFields<T> = {
// 	T: {
// 		type: number | string;
// 		width: string;
// 	};
// };
