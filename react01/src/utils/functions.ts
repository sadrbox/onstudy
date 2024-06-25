import { ICol, IProduct } from "@/ui/DataGrid/types";
import moment from "moment";
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

export function getDateFromISO(dateString: string): string {
	const date = moment(dateString);
	// const dateUTC = date.add(24, "hours").utc();
	return date.format("DD.MM.YYYY HH:mm:ss");
}
export function getDurationSession(seconds: number): string {
	// Рассчитываем часы
	const hours: number = Math.floor(seconds / 3600);
	// Оставшиеся секунды после вычета часов
	const remainingSeconds: number = seconds % 3600;
	// Рассчитываем минуты
	const minutes: number = Math.floor(remainingSeconds / 60);
	return `${hours}:${minutes}`;
}

export function getFormatValue(item: IProduct, column: ICol): string {
	// console.log(rowId);
	if (column.id === "id") {
		return item.id.toString().padStart(6, "0");
	} else if (column.type === "number") {
		const formater = new Intl.NumberFormat("ru-RU", {
			style: "decimal",
			minimumFractionDigits: 2,
		});
		return formater.format(item[column.id]);
	} else {
		return item[column.id];
	}
	// return item.id;
}

export function getTextAlignByColType(column: ICol): CSSProperties {
	// Table content value align css style
	// console.log(CSSProperties);
	switch (column.type) {
		case "number":
			return { justifyContent: "right" };
		case "string":
			return { justifyContent: "left" };
		case "tochange":
			return { justifyContent: "center" };
		default:
			return {};
	}
}

// export function getSumOfColumn(data, columnName) {
// 	let sum = 0;
// 	for (let i = 0; i < data.length; i++) {
// 		sum += +data[i][columnName];
// 	}
// 	const options = { style: "decimal", minimumFractionDigits: 2 };
// 	const formater = new Intl.NumberFormat("ru-RU", options);
// 	return formater.format(sum);
// }
// // Функция для загрузки данных из localStorage
// async function getDataFromLocalStorage(key) {
// 	return new Promise((resolve) => {
// 		const data = localStorage.getItem(key);
// 		resolve(data ? JSON.parse(data) : null);
// 	});
// }

// // функция для сохранения данных в localStorage
// async function saveDataToLocalStorage(key, data) {
// 	return new Promise((resolve) => {
// 		localStorage.setItem(key, JSON.stringify(data));
// 		resolve();
// 	});
// }

// // Асинхронная функция для получения данных с использыванием кэширования
// export async function fetchDataWitCache(key, fetchDataFunction) {
// 	try {
// 		// Пытаемся сначала загрузить данные из localStorage
// 		let cachedData = await getDataFromLocalStorage(key);
// 		if (!cachedData) {
// 			// Если данных нет в кеше, делаем асинхронных запрос к серверу
// 			cachedData = await fetchDataFunction();
// 			// Сохранаяем полученные данные в кеше localStorage
// 			await saveDataToLocalStorage(key, cachedData);
// 		}
// 		return cachedData;
// 	} catch (error) {
// 		console.error("Ошибка при загрузки данных:", error);
// 		throw error;
// 	}
// }
