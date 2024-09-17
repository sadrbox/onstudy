import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";




type TContextProvider = {
	contextData: TContextData,
	setContextData: Dispatch<SetStateAction<TContextData>>
}
type TContextProps = {
	children: ReactNode,
	contextDataInit: TContextData
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


const ContextProvider: FC<TContextProps> = ({ children, contextDataInit }) => {
	const [contextData, setContextData] = useState<TContextData>(contextDataInit);



	const WrapperProvider = ContextInstance.Provider;
	return (
		<WrapperProvider value={{ contextData, setContextData }}>
			{children}
		</WrapperProvider>
	)
}


export default ContextProvider;