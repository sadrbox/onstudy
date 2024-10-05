// import settings from "./settings.json" assert { type: "json" };

import { getTranslation, translateColumnLable } from "src/i18";
import { TColumn, TDataItem, TFieldType } from "./types";

export function sortGridRows(
	arr: TDataItem[],
	columnID: string,
	order: string,
	locale = "default",
) {
	return arr.sort((a, b) => {
		const aValue = order === "asc" ? a[columnID] : b[columnID];
		const bValue = order === "asc" ? b[columnID] : a[columnID];

		if (typeof aValue === "number" && typeof bValue === "number") {
			return aValue - bValue;
		} else if (typeof aValue === "string" && typeof bValue === "string") {
			return aValue
				.toString()
				.localeCompare(bValue.toString(), locale, { numeric: true });
		}
		return aValue ? -1 : bValue ? +1 : 0;
		// return -1;
	});
}

// Функция для поиска ширины колонки по id
export function getColumnWidthById(
	columns: TColumn[],
	columnId: string,
): string | undefined {
	// console.log(tableParams);
	const column = columns.find((col) => col.identifier === columnId);
	return column ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
}

// Функция для поиска ширины колонки по id модификация
export function getColumnWidthSetting(
	columns: TColumn[],
	columnID: string,
): string | undefined {
	const column = columns.find((col) => col.identifier === columnID);
	return column ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
}

export function getColumnSettings<T extends TColumn>(
	columns: T[],
	columnID: string,
): T | undefined {
	return columns.find((column) => {
		if (column.identifier === columnID) {
			return column;
		}
	});
}

export function getColumnWidth<T extends TColumn>(
	columns: T[],
	columnID: keyof T | string,
): T | undefined {
	return columns.find((column) => {
		if (column.identifier === columnID) {
			return column;
		}
	});
}

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
