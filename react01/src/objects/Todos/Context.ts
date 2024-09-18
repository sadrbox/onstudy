import { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";
import { IResponseData } from "./types";

type TContextInstance = {
	context: IResponseData | undefined;
	setContext: Dispatch<SetStateAction<IResponseData | undefined>>;
};

export const ContextInstance = createContext<TContextInstance>({
	context: undefined,
	setContext: () => {},
});

export const useContextTodo = () => useContext(ContextInstance);
