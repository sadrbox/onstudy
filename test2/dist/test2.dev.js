"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _winax = _interopRequireDefault(require("winax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

// Создаем объект COM-соединения с ConnectWorkingProcess
var connector = new _winax["default"].Object("V83.COMConnector");
var connectWorkingProcess = connector.ConnectAgent("tcp://server:1540");
var clusters = connectWorkingProcess.GetClusters();
connectWorkingProcess.Authenticate(clusters[0], "admin", "Qwe123"); // connectWorkingProcess.AuthenticateAgent("admin", "Qwe123");
// const admins = connectWorkingProcess.GetAgentAdmins();

var infobases = connectWorkingProcess.GetInfoBases(clusters[0]);
infobases.map(function (base) {
  console.log(base.Descr);
}); // const clusterServices = connectWorkingProcess.GetClusterManagers(clusters[0]);
// console.log(cluster);
// const auth = connectWorkingProcess.Authenticate(cluster, "admin", "Qwe123");
// while (clusters) {
// const [...arr] = clusters;
// }
// console.log(infobases.);