import { createContext, useContext } from "react";

// export type TContextInstance = {
// 	columns: IColumns;
// 	dataRows: [];
// 	ordering: {
// 		columnID: string;
// 		orderBy: "ASC" | "DESC";
// 	};
// };

export const HeaderRowContextProviderInit = {};

export const HeaderRowContextInstance = createContext(
	HeaderRowContextProviderInit,
);
export const useContextInstance = () => {
	const context = useContext(HeaderRowContextInstance);
	if (context === null) {
		throw new Error("useContextInstance, context = null!");
	}
	return context;
};
