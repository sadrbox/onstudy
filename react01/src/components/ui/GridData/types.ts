import { Dispatch, SetStateAction } from "react";

export type TFieldType =
	| "string"
	| "number"
	| "bigint"
	| "boolean"
	| "symbol"
	| "undefined"
	| "object"
	| "function"
	| unknown[];

export type TSorting = {
	id: string;
	order: string;
};

export type TDataRow = { [key: string | number]: string | number | boolean };
export type TDataItem = {
	id: number;
	[key: string | number]: string | number | boolean;
};
export type TColumn = {
	position: number;
	identifier: string;
	type: string;
	column?: string;
	width?: string;
	hint?: string;
	alignment?: string;
	sortable?: boolean;
	visible: boolean;
};
export type TColumnSetting = {
	position: number;
	identifier: string;
	type: string;
	column?: string;
	width?: string;
	hint?: string;
	alignment?: string;
	sortable?: boolean;
	visible: boolean;
};
export type TGridStates = {
	activeRow?: number | null;
	setActiveRow?: Dispatch<SetStateAction<number | null>>;
	checkedRows: number[];
	setCheckedRows: Dispatch<SetStateAction<number[]>>;
	sortingRows?: TSorting;
	setSortingRows?: Dispatch<SetStateAction<TSorting>>;
	isAllChecked?: boolean;
	setIsAllChecked?: Dispatch<SetStateAction<boolean>>;
};
