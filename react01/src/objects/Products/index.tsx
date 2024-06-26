import { useEffect, useState, FC, HTMLAttributes, createContext } from "react";
import DataGrid from "../../ui/DataGrid";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { storeGridData } from "@/utils/store.ts";
import { Checkbox } from "antd";
import {
	IColumns,
	IProduct,
	IProducts,
	IStoreGridData,
	TStoreGridData,
} from "@/ui/DataGrid/types";

const columns = {
	properties: {
		width: "30px 80px 1fr 100px",
	},
	cols: [
		{
			id: "checkbox",
			type: "checkbox",
			// field: {
			// 	style: { textAlign: "center" } as React.CSSProperties,
			// },
		},
		{
			id: "id",
			title: "№",
			type: "id",
		},
		{
			id: "title",
			title: "Наименование",
			type: "string",
		},
		{
			id: "price",
			title: "Цена",
			type: "number",
		},
	],
};

type TSortingState = {
	columnID: keyof IProduct;
	sortBy: "ASC" | "DESC";
};
type IProductKey = keyof IProduct;
type TProductValue<K extends IProductKey> = IProduct[K];
type TSortingGridDataRows = <K extends IProductKey>(
	gridDataRows: IProduct[],
	columnID: K,
	orderBy: "ASC" | "DESC"
) => IProduct[];
// interface IProductsProps extends HTMLAttributes<HTMLElement> {
// 	// columns: IColumns;
// 	data?: {
// 		gridRows: IProduct[] | undefined;
// 		gridIDs: number[] | undefined;
// 		// sortFn: (columnID: string, orderBy?: string) => void;
// 		// sortDirection: "ASC" | "DESC";
// 	};
// 	isLoading: boolean;
// }
const Products: FC = () => {
	// const [props, setProps] = useState<IProductsProps>({
	// 	// columns,
	// 	isLoading: true,
	// });

	const [gridData, setGridData] = useAtom<TStoreGridData>(storeGridData);
	// const GridContext = createContext()
	const [sorting, setSorting] = useState<TSortingState>({
		columnID: "id",
		sortBy: "ASC",
	});

	const sortGridDataRows: TSortingGridDataRows = (
		gridDataRows,
		columnID,
		orderBy
	) => {
		return gridDataRows.sort((a, b): number => {
			const aValue: TProductValue<typeof columnID> = a[columnID];
			const bValue: TProductValue<typeof columnID> = b[columnID];

			if (typeof aValue === "string" && typeof bValue === "string") {
				return orderBy === "ASC"
					? aValue.localeCompare(bValue)
					: bValue.localeCompare(aValue);
			} else if (typeof aValue === "number" && typeof bValue === "number") {
				if (aValue < bValue) {
					return orderBy === "ASC" ? -1 : 1;
				}
				if (aValue > bValue) {
					return orderBy === "ASC" ? 1 : -1;
				}
			}
			return 0;
		});
	};

	function actionOrder(
		columnID: keyof IProduct = "id",
		sortBy: string = "ASC"
	) {
		// console.log({ columnID, orderBy });
		// const previosGridData = { ...gridData };
		// setGridData(previosGridData);
		setSorting((prev) => {
			return {
				columnID,
				sortBy:
					prev.columnID === columnID
						? sortBy === "ASC"
							? "DESC"
							: "ASC"
						: "ASC",
			};
		});
	}
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get<IProducts>(
					"https://dummyjson.com/products"
				);
				// console.log("test");
				if (response?.data) {
					const sortedGridDataRows = sortGridDataRows(
						response.data?.products,
						sorting?.columnID,
						sorting?.sortBy
					);
					setGridData({
						columns: columns,
						IDs: response.data?.products.map((e) => e.id),
						rows: sortedGridDataRows,
						order: {
							action: actionOrder,
							...sorting,
						},
					});
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
			}
		})();
	}, [sorting]);

	return <>{gridData?.rows && <DataGrid />}</>;
};

export default Products;
