import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { IColumns, IProduct } from "./types";
import { TConfig } from "./DataGrid.module";
import Products from "../../../objects/Products/index";

type TOrdering = {
	columnID: string;
	orderBy: "asc" | "desc";
};

export type TContextInstance = {
	config: TConfig;
	dataRows: IProduct[];
	ordering: {
		columnID: string;
		orderBy: "asc" | "desc";
		setGridDataOrdering: Dispatch<SetStateAction<TOrdering>>;
	};
};

export const ContextInstanceInit: TContextInstance = {
	config: {
		properties: {
			width: "auto",
		},
		cols: [],
	},
	dataRows: [],
	ordering: {
		columnID: "id",
		orderBy: "asc",
		setGridDataOrdering: () => {},
	},
};

export const ContextInstance =
	createContext<TContextInstance>(ContextInstanceInit);

export const useContextInstance = (): TContextInstance => {
	const context = useContext(ContextInstance);

	if (context === null) {
		throw new Error("useContextInstance, context = null!");
	}

	return context;
};
