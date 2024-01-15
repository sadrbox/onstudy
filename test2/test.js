import dotenv from "dotenv";
dotenv.config(); // import Connect from "./src/connector.js";
import Connection from "./src/connector.js";

const { comObject, connection } = Connection();
const products = connection.Catalogs.Номенклатура.Select();
while (products.Next()) {
	const { Code, Description, isFolder } = products;
	console.log(Code, Description, isFolder);
}
// comObject.Disconnect(proc);
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
