// // import { ProductType } from "../../../objects/Products/index";
// import { IProduct } from "./types";
// // Предположим, что ProductsType содержит тип данных продукта
// // type ProductsType = {
// //   id: number;
// //   title: string;
// //   description: string;
// //   price: number;
// //   discountPercentage: number;
// //   rating: number;
// //   stock: number;
// //   brand: string;
// //   category: string;
// //   thumbnail: string;
// //   images: string[];
// // };

// export type TColumn = {
// 	id: string;
// 	title?: string;
// 	type: string;
// 	field?: {
// 		style?: React.CSSProperties;
// 	};
// };

// // Определяем тип для структуры колонок
// export type TConfig = {
// 	properties: {
// 		width: string;
// 	};
// 	cols: TColumn[];
// };

// export const initialCols: TColumn[] = [
// 	{
// 		id: "0",
// 		type: "0",
// 	},
// ];

// export const initialConfig: TConfig = {
// 	properties: {
// 		width: "auto",
// 	},
// 	cols: [],
// };

// // Определяем типы свойств для колонок
// export const typeMapping: Record<string, string> = {
// 	number: "number",
// 	string: "string",
// 	boolean: "boolean",
// 	object: "array", // для массивов
// };

// // Функция для динамического создания колонок на основе типа продукта
// export const createColumnsConfigFromResponse = <T>(item: T): TConfig => {
// 	const cols: TColumn[] = [
// 		{
// 			id: "checkbox",
// 			type: "checkbox",
// 			field: {
// 				style: { textAlign: "center" } as React.CSSProperties,
// 			},
// 		},
// 	];

// 	const widthArray: string[] = ["27px"]; // начальная ширина для чекбокса

// 	// Проходим по ключам объекта продукта
// 	for (const key in item) {
// 		if (Object.prototype.hasOwnProperty.call(item, key)) {
// 			const fieldType = typeof item[key];
// 			const columnType = typeMapping[fieldType] || "unknown"; // Маппим типы

// 			// Добавляем колонку
// 			cols.push({
// 				id: key,
// 				title: key.charAt(0).toUpperCase() + key.slice(1), // Заглавная буква для заголовка
// 				type: columnType,
// 			});

// 			// Определяем ширину колонки (можно настроить правила ширины)
// 			// if (columnType === "number") {
// 			// 	widthArray.push("100px");
// 			// } else if (columnType === "checkbox") {
// 			// 	widthArray.push("27px");
// 			// } else {
// 			// 	widthArray.push("auto");
// 			// }
// 		}
// 	}

// 	return {
// 		properties: {
// 			width: "100px 150px 1fr 40px", //widthArray.join(" "), // Преобразуем массив ширин в строку
// 		},
// 		cols,
// 	};
// };

// // // Пример вызова функции для формирования структуры колонок
// // const exampleProduct: ProductsType = {
// //   id: 1,
// //   title: "Product 1",
// //   description: "A great product",
// //   price: 100,
// //   discountPercentage: 10,
// //   rating: 4.5,
// //   stock: 30,
// //   brand: "Brand X",
// //   category: "Electronics",
// //   thumbnail: "url-to-image",
// //   images: ["image1", "image2"],
// // };

// // const cols = createColumnsFromProduct(exampleProduct);

// // console.log(cols);

// export type TGridItem = {
// 	id: string;
// 	headerName: string;
// 	type: string;
// };

// type TCol = TGridItem[];

// export const createGridColumns = (GridItem: IProduct): TCol => {
// 	const columns = [
// 		{
// 			id: "00234",
// 			headerName: "asdfasdf",
// 			type: "number",
// 		},
// 	];

// 	for (const [key, value] of Object.entries(GridItem)) {
// 		columns.push({
// 			id: key,
// 			headerName: key.charAt(0).toUpperCase() + key.slice(1),
// 			type: typeof value, // Определение типа значения
// 		});
// 	}
// 	// console.log(columns)
// 	return columns;
// };
