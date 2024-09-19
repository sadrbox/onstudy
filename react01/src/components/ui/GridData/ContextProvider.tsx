import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { createGridColumns } from "./DataGrid.module";
import { IProduct, IRootProduct } from "./types";


type UniversalData<T> = {
	[key: string]: T | T[]; // Значение может быть массивом T или одиночным элементом T
};

type TContextProvider = {
	contextData: TContextData,
	setContextData: Dispatch<SetStateAction<TContextData>>
}
type TContextProps = {
	children: ReactNode;
	responseData: IRootProduct;
}

export type TOrdering = {
	columnID: string;
	orderBy: 'asc' | 'desc';
	setGridDataOrdering: Dispatch<SetStateAction<TOrdering>>;
}

export type TContextData = {
	gridConfig: {
		properties: {
			width: string
		}
	},
	columns: unknown[];
	dataRows: unknown[];
	ordering: TOrdering;
};

export const contextDataInit: TContextData = {
	gridConfig: {
		properties: {
			width: "27px 80px 1fr 100px"
		}
	},
	columns: [],
	dataRows: [],
	ordering: {
		columnID: "id",
		orderBy: "asc",
		setGridDataOrdering: function (): void {
			throw new Error("Function not implemented.");
		}
	}
}

const contextInstanceInit: TContextProvider = {
	contextData: contextDataInit,
	setContextData: function (): void {
		throw new Error("Function not implemented.");
	}
}

export const ContextInstance = createContext<TContextProvider>(contextInstanceInit);

// eslint-disable-next-line react-refresh/only-export-components
export const useContextInstance = (): TContextProvider => {
	const context = useContext(ContextInstance);

	if (context === null) {
		throw new Error("useContextInstance, context = null!");
	}
	return context;
};


const ContextProvider: FC<TContextProps> = ({ children, responseData }) => {
	const [contextData, setContextData] = useState<TContextData>(contextDataInit);

	useEffect(() => {

		const products: IProduct[] = responseData?.products;
		if (products) {
			const GridItem: IProduct = products[0];
			const cols = createGridColumns(GridItem);
			// console.log(cols)
			setContextData({
				gridConfig: {
					properties: {
						width: "27px 80px 1fr 100px"
					}
				},
				columns: cols,
				dataRows: products,
				ordering: {
					columnID: "id",
					orderBy: "asc",
					setGridDataOrdering: function (): void {
						throw new Error("Function not implemented.");
					}
				}
			})
		}




	}, [responseData])



	const WrapperProvider = ContextInstance.Provider;
	return (
		<WrapperProvider value={{ contextData, setContextData }}>
			{children}
		</WrapperProvider>
	)
}


export default ContextProvider;