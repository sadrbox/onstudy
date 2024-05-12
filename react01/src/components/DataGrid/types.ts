type TGridColumns = {
	id: string;
	title: string;
	width: string | number;
};

type TJsonData = {
	id: string | number;
	[key: string]: string | number;
};

export type TDataGridProps = {
	columns: TGridColumns;
	data: TJsonData;
};
