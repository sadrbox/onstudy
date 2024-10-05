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
export type TDataItem = { [key: string | number]: string | number | boolean };
export type TColumn = {
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
	identifier: string;
	type: string;
	column?: string;
	width?: string;
	hint?: string;
	alignment?: string;
	sortable?: boolean;
	visible: boolean;
};
