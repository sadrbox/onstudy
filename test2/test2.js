import dotenv from "dotenv";
dotenv.config();
import winax from "winax";

function getData() {
	try {
		const connector = new winax.Object("V83.COMConnector");
		const connectWorkingProcess = connector.ConnectAgent("tcp://server:1540");
		const clusters = connectWorkingProcess.GetClusters();
		connectWorkingProcess.Authenticate(clusters[0], "admin", "Qwe123");
		// connectWorkingProcess.AuthenticateAgent("admin", "Qwe123");
		// const admins = connectWorkingProcess.GetAgentAdmins();
		const infobases = connectWorkingProcess.GetInfoBases(clusters[0]);

		// return infobases;
		let arr = [];
		infobases.map((base) => {
			arr.push(base.name);
		});
		return arr;
	} catch (e) {
		return e;
	}
}
const infobases = getData();
console.log(JSON.stringify(infobases));

// const clusterServices = connectWorkingProcess.GetClusterManagers(clusters[0]);
// console.log(cluster);
// const auth = connectWorkingProcess.Authenticate(cluster, "admin", "Qwe123");
// while (clusters) {
// const [...arr] = clusters;
// }

// console.log(infobases.);
