type TGridColumns = {
	id: string;
	title: string;
	width: string | number;
};

export type TJsonData = {
	id: string | number;
	[key: string]: string | number;
};

export type TDataGridProps = {
	columns: IColumns;
	data: TJsonData[] | null;
};

export interface IColumns {
	properties: IProperties;
	cols: ICol[];
}

export interface IProperties {
	width: string;
}

export interface ICol {
	id: string;
	title: string;
	type: string;
}

export interface IElementData {
	element: TJsonData;
	idx: string;
}
export interface ContentRowProps {
	props: {
		columns: IColumns;
		element: TJsonData;
		idx: number;
	};
}
export interface IContentRowProps {
	key: number;
	props: {
		columns: IColumns;
		element: TJsonData;
		idx: number;
	};
}

export interface IProducts {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}

export interface IProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand?: string;
	sku: string;
	weight: number;
	dimensions: Dimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: Review[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: Meta;
	images: string[];
	thumbnail: string;
}

export interface Dimensions {
	width: number;
	height: number;
	depth: number;
}

export interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}

export interface Meta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}
