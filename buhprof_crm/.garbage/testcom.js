// require("./config");

const getCOMConnectionInstance = () => {
	const winax = require("winax");
	try {
		const connector = new winax.Object("V83.COMConnector.1");
		const agent = connector.ConnectAgent("tcp://server:1540");
		agent.AuthenticateAgent("admin", "Qwe123");
		const clusters = agent.GetClusters();
		// console.log(clusters[0].GetSessions);

		for (cluster of clusters) {
			agent.Authenticate(cluster, "admin", "Qwe123");
			const workingProcesses = agent.GetWorkingProcesses(cluster);

			for (WP of workingProcesses) {
				const port = WP.MainPort;
				// console.log(WP.GetSessions);
				const currentWorkingProcess = connector.ConnectWorkingProcess(
					`tcp://server:${port}`
				);
				currentWorkingProcess.AuthenticateAdmin("admin", "Qwe123");
				// console.log(currentWorkingProcess);
				// console.log(currentWorkingProcess.HostName, "+++===", WP.HostName);
				const sessions = agent.GetSessions(cluster);
				for (session of sessions) {
					console.log(session.sessionid);
				}
			}
			// workingProcess.AuthenticateAdmin("admin", "Qwe123");
			// const port = workingProcess.MainPort;
			// console.log(workingProcess[0].MainPort);

			// const workingProcess =
			// console.log(cluster.GetSessions());
			// const sessions = agent.(clusteOr);
		}
		// 	// const sessions = agent.GetSessions(cluster);
		// 	// console.log(connections[0].Host);
		// 	for (session of sessions) {
		// 		console.log({
		// 			infobase: session.InfoBase.Name,
		// 			username: session.UserName,
		// 			host: session.Process.HostName,
		// 		});
		// 	}
		// }
	} catch (e) {
		console.log("Не удалось подлючить COM-объект. Ошибка : ", e);
		return null;
	}
};

getCOMConnectionInstance();
console.log(
	"=========================================================================="
);
