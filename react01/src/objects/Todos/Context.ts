import { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";
import { IResponseData } from "./types";
import { TColumn, TDataItem } from "./index";

export type TContextData = {
	dataRows: TDataItem[];
	columns: TColumn[];
};

type TContextInstance = {
	context: TContextData | undefined;
	setContext: Dispatch<SetStateAction<TContextData | undefined>>;
};

export const ContextInstance = createContext<TContextInstance>({
	context: undefined,
	setContext: () => {},
});

export const useContextTodo = () => useContext(ContextInstance);
