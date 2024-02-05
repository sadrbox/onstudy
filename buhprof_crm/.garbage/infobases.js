const winax = require("winax");
// import winax from "winax";

function GetInfoBases() {
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
		// console.dir(arr);
		return arr;
		// res.status(200).json(arr);
		// return JSON.stringify(arr);
	} catch (e) {
		console.log("Error string: ", e);
		return null;
	}
}

module.exports = { GetInfoBases };

// const res = GetInfoBases();
// JSON.stringify(res);
// const infobases = ();
// module.exports = { infobases };
// console.log(infobases);
