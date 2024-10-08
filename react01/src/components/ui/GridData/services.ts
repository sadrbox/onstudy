import { TColumn, TDataItem } from "./types";
import { CSSProperties } from "react";

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
): string {
	// console.log(tableParams);
	const column = columns.find((col) => col.identifier === columnId);
	return column?.width ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
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

export function getTextAlignByColumnType(column: TColumn): CSSProperties {
	switch (column.type) {
		case "number":
			return { textAlign: "right" };
		case "string":
			return { textAlign: "left" };
		case "switcher":
			return { textAlign: "center" };
		default:
			return { textAlign: "left" };
	}
}
export function getColumnSettingValue(row: TColumn, column: TColumn): string {
	if (column.type === "string") {
		return row[column.identifier as keyof TColumn] + "";
	} else if (column.type === "number") {
		return row[column.identifier as keyof TColumn] + "";
	}
	return row[column.identifier as keyof TColumn] + "";
}

export function getFormatColumnValue(row: TDataItem, column: TColumn): string {
	if (column.identifier === "id" && column.type === "number") {
		return getFormatNumericalID(+row.id);
	} else if (
		column.identifier !== "id" &&
		column.identifier !== "position" &&
		column.type === "number"
	) {
		return getFormatNumerical(+row[column.identifier]);
	} else if (column.identifier === "position" && column.type === "position") {
		return row[column.identifier] + "";
	} else if (column.type === "string") {
		return row[column.identifier] + "";
	}
	return row[column.identifier] + "";
}

// Формат числовой идентификатор /////////////////////////////////////////////////////////////////////////
export function getFormatNumericalID(n: number | bigint): string {
	return n.toString().padStart(5, "0");
}

// Формат числа /////////////////////////////////////////////////////////////////////////
export function getFormatNumerical(n: number | bigint): string {
	const formater = new Intl.NumberFormat("ru-RU", {
		style: "decimal",
		minimumFractionDigits: 1,
	});
	return formater.format(n);
}
///////////////////////////////////////////////////////////////////////////
