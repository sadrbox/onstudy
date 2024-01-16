var edge = require("edge-js");

// Укажите путь к вашему COM-объекту и имя метода
const comObject = edge.func({
	assemblyFile: "./comcntr.dll", // Укажите путь к V83.COMConnector.dll
	typeName: "V83.COMConnector", // Имя типа в COM-объекте
	methodName: "Connect", // Имя метода в COM-объекте
});

comObject((error, result) => {
	if (error) {
		console.error(error);
		return;
	}

	// Обрабатываем результат
	console.log(result);
});
