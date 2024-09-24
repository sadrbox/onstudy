// import settings from "./settings.json" assert { type: "json" };

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
