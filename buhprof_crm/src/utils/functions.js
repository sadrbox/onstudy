import moment from "moment";

export function getDateFromISO(dateString) {
	const date = moment(dateString);
	const dateUTC = date.add(24, "hours").utc();
	return date.format("DD.MM.YYYY HH:mm:ss");
}
export function getDurationSession(seconds) {
	// Рассчитываем часы
	var hours = Math.floor(seconds / 3600);
	// Оставшиеся секунды после вычета часов
	var remainingSeconds = seconds % 3600;
	// Рассчитываем минуты
	var minutes = Math.floor(remainingSeconds / 60);
	return `${hours}:${minutes}`;
}
