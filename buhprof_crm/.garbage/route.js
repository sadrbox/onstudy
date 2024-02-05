// import winax from "winax";
const winax = require("winax");
// const os = require("os");

// function fetchDataFromComObject() {
// const winax = require("../../../../../node_modules/winax/build/Release/node_activex.node");
try {
	const v83connector = new winax.Object("V83.COMConnector");
	const workingProcess = v83connector.ConnectAgent("tcp://server:1540"); // .env
	const clusters = workingProcess.GetClusters();
	workingProcess.Authenticate(clusters[0], "admin", "Qwe123"); // .env

	const infobases = workingProcess.GetInfoBases(clusters[0]);
	const arr = [];
	infobases.map((base) => {
		arr.push(base.Name);
	});
	console.log(JSON.stringify(arr, null, 2));
	// console.dir(arr);
	// return arr;
} catch (e) {
	console.log("Error string: ", e);
	// return null;
}
// export default fetchDataFromComObject;
// const infobases = fetchDataFromComObject();
// module.exports = { infobases };
// console.log(infobases);
