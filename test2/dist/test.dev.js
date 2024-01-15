"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connector = _interopRequireDefault(require("./src/connector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // import Connect from "./src/connector.js";


var _Connection = (0, _connector["default"])(),
    comObject = _Connection.comObject,
    connection = _Connection.connection;

var products = connection.Catalogs.Номенклатура.Select();

while (products.Next()) {
  var Code = products.Code,
      Description = products.Description,
      isFolder = products.isFolder;
  console.log(Code, Description, isFolder);
} // comObject.Disconnect(proc);
// console.log(connection);
// function getProducts(Connect) {
// console.log(Connect);
// if (Connect) {
// const catalogProducts = Connect.Catalogs.Номенклатура.Select();
// // const products = catalogProducts.Select();
// // const catalogProducts = Connect.Catalogs.Номенклатура.Select();
// // console.log(Connect);
// while (catalogProducts.Next()) {
// 	const { Code, Description, isFolder } = catalogProducts;
// 	console.log(Code, Description, isFolder);
// }
// }
// }
// getProducts(Connection);