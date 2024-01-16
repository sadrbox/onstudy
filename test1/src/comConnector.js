import { func } from "edge";
// Создаем функцию обратного вызова с помощью edge.js
const comConnector = func({
	assemblyFile: "C:\\Program Files\\1cv8\\8.3.19.1467\\bin\\comcntr.dll", // Укажите путь к V83.COMConnector.dll
	typeName: "V83.COMConnector", // Имя типа в COM-объекте
	methodName: "Connect", // Имя метода в COM-объекте
});

export default comConnector;
