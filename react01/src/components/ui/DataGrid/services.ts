// import settings from "./settings.json" assert { type: "json" };

import { translateWord } from "src/i18";

export type TColumnsHeader = {
	id: string;
	type: string | TFieldType;
	visible: boolean;
	label?: string | undefined;
	width?: string | undefined;
	alignment?: string;
	sortable?: boolean;

	hint?: string | undefined;
	format?: string | undefined;
};

// Определение интерфейса для колонки
interface Column {
	id: string;
	label: string;
	width: string;
	type: string;
	sortable: boolean;
	visible: boolean;
	format?: string; // Формат, если он есть
}

// Определение интерфейса для параметров таблицы
interface TableParameters {
	columns: Column[];
}

// Функция для поиска ширины колонки по id
export function getColumnWidthById(
	tableParams: TableParameters,
	columnId: string,
): string | undefined {
	// console.log(tableParams);
	const column = tableParams.columns.find((col) => col.id === columnId);
	return column ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
}

// Функция для поиска ширины колонки по id модификация
export function getColumnWidthSetting(
	columns: TColumnsHeader[],
	columnID: string,
): string | undefined {
	const column = columns.find((col) => col.id === columnID);
	return column ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
}

export function getColumnSettings<T extends TColumnsHeader>(
	columns: T[],
	columnID: string,
): T | undefined {
	return columns.find((column) => {
		if (column.id === columnID) {
			return column;
		}
	});
}

export function getColumnWidth<T extends TColumnsHeader>(
	columns: T[],
	columnID: keyof T | string,
): T | undefined {
	return columns.find((column) => {
		if (column.id === columnID) {
			return column;
		}
	});
}

export type TDataItem = { [key: string | number]: string | number | boolean };
export type TColumn = {
	id: string;
	type: TFieldType;
	name?: string;
	width?: string;
	hint?: string;
};
type TFieldType =
	| "string"
	| "number"
	| "bigint"
	| "boolean"
	| "symbol"
	| "undefined"
	| "object"
	| "function";

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

export const createDataGridColumns = <T extends TDataItem>(
	DataItem1: T,
): TColumn[] => {
	const columns: TColumn[] = [
		{
			id: "selectOption",
			type: "boolean",
		},
	];

	Object.entries(DataItem1).forEach(([key, value]) => {
		if (typeof value === "object") {
			return;
		}

		const fieldName = translateWord(key);
		const col = {
			id: key,
			type: typeof DataItem1[key],
			name: fieldName.charAt(0).toUpperCase() + fieldName.slice(1), // Делаем name с заглавной буквы
			width: "",
			hint: "", // Пример статического описания для hint
		};
		columns.push(col);
	});
	// console.log(columns);
	return columns;
};
