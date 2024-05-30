type TGridColumns = {
	id: string;
	title: string;
	width: string | number;
};

export type TJsonData = {
	id: string | number;
	[key: string]: string | number;
};

export type TDataGridProps = {
	columns: IColumns;
	data: TJsonData[];
};

export interface IColumns {
	properties: IProperties;
	cols: ICol[];
}

export interface IProperties {
	width: string;
}

export interface ICol {
	id: string;
	title: string;
	type: string;
}

export interface IElementData {
	element: TJsonData;
	idx: string;
}
