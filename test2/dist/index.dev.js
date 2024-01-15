"use strict";

var winax = require("winax"); // const comConnectorPath = "V83COMConnector";


var con = new winax.Object("V83.COMConnector"); // Создание экземпляра COM-объекта
// const comConnector = winax.Variant(comConnectorPath);

var connectString = "Srvr=192.168.1.111;Ref=templatedb;Usr=support;Pwd=MasterPass123;"; // Вызов методов COM-объекта

var access = con.Connect(connectString); // console.log(access);

var products = access.Catalogs.Номенклатура.Select();
console.log(products); // const newProducts = products.Select();
// newProducts.Description = "Новый товар созданный через NodeJS 21234123";
// newProducts.Артикул = "7777";
// newProducts.НаименованиеПолное = "Полное нового товара  через NodeJS12341234";
// try {
// 	newProducts.Write();
// 	console.log(newProducts.Code);
// } catch (e) {
// 	console.log(e);
// }
// while (products.Next()) {
// 	const { Code, Description, isFolder } = products;
// 	console.log(Code, Description, isFolder);
// }
// console.log(products);
// if (access) {
// 	const query = access.NewObject("Запрос");
// 	query.Текст =
// 		"ВЫБРАТЬ Пользователи.Наименование КАК Наименование, Пользователи.ИдентификаторПользователяСервиса КАК ИдентификаторПользователяСервиса ИЗ Справочник.Пользователи КАК Пользователи";
// 	const TZ = query.Выполнить().Выгрузить();
// 	// console.log(TZ.Count());
// 	let count = 0;
// 	while (TZ.Count() > count) {
// 		const item = TZ.Get(count);
// 		const { Наименование, ИдентификаторПользователяСервиса } = item;
// 		console.log(Наименование);
// 		count = count + 1;
// 	}
// for (i = 0; TZ.Количество() > i; i++) {
// 	console.log(TZ.Получить(i));
// }
// TZ.map((item) => {
// 	console.log(item);
// });
// console.log(typeof TZ);
// for (const i = 0; TZ.length < 2; i++) {
// console.log(TZ.Количество());
// }
// const query = access.NewObject("Query");
// const test = (query.text = "tst");
// console.log(TZ);
// }
// const result = accessConnection.("Select * from v8users");
// console.log(access);
// Освобождение ресурсов (важно, чтобы избежать утечек памяти)