import exec from "exec-sh";

const run = async () => {
	const execPromise = exec.promise;
	let out;
	try {
		out = await execPromise("node ./test2.js", true);
		// console.log(out);
		const { stderr, stdout } = out;
		console.log(stdout);
	} catch (e) {
		console.log(e);
		return e;
	}
};

run();

// let out = exec("node ./test2.js");
// console.log(out);
// const infobases = run();
// console.log(infobases);
// infobases.map((base) => {
// 	console.log(base.name);
// });
// infobases.then((jsonString) => {
// 	const jsonObject = JSON.parse(jsonString);
// 	console.log(jsonObject, jsonString);
// });
// // Считываем содержимое директории
// fs.readdir(directoryPath, (err, files) => {
// 	if (err) {
// 		console.error("Ошибка чтения директории:", err);
// 		return;
// 	}

// 	// Перебираем файлы в директории
// 	files.forEach((file) => {
// 		// Получаем полный путь к файлу
// 		const filePath = path.join(directoryPath, file);

// 		// Проверяем, является ли текущий элемент файлом (а не директорией)
// 		fs.stat(filePath, (err, stats) => {
// 			if (err) {
// 				console.error("Ошибка при получении информации о файле:", err);
// 				return;
// 			}

// 			if (stats.isFile()) {
// 				// Ваш код для работы с файлом
// 				console.log("Найден файл:", file);
// 				// Например, считываем содержимое файла
// 				// fs.readFile(filePath, "utf8", (err, data) => {
// 				// 	if (err) {
// 				// 		console.error("Ошибка при чтении файла:", err);
// 				// 		return;
// 				// 	}
// 				// 	console.log("Содержимое файла:", data);
// 				// });
// 			}
// 		});
// 	});
// });
