"use strict";

var _execSh = _interopRequireDefault(require("exec-sh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var run = function run() {
  var execPromise, out, _out, stderr, stdout;

  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          execPromise = _execSh["default"].promise;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(execPromise("node ./test2.js", true));

        case 4:
          out = _context.sent;
          // console.log(out);
          _out = out, stderr = _out.stderr, stdout = _out.stdout;
          console.log(stdout);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          return _context.abrupt("return", _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

run(); // let out = exec("node ./test2.js");
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