// import settings from "./settings.json" assert { type: "json" };

import { translateWord } from "src/i18";

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
	const column = tableParams.columns.find((col) => col.id === columnId);
	return column ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
}

export type TDataItem = { [key: string]: string };
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
	const fields = Object.keys(DataItem1);

	for (const id of fields) {
		const fieldName = translateWord(id);
		const col = {
			id,
			type: typeof DataItem1[id],
			name: fieldName.charAt(0).toUpperCase() + fieldName.slice(1), // Делаем name с заглавной буквы
			width: "",
			hint: "", // Пример статического описания для hint
		};
		columns.push(col);
	}

	return columns;
};
