"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _winax = _interopRequireDefault(require("winax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

// require("dotenv").config();
// const winax = require("winax");
// import winax from "winax";
var Connection = function Connection() {
  var comObject = new _winax["default"].Object("V83.COMConnector");
  var connectionString = process.env.DATABASE_URL;
  var connection = comObject.Connect(connectionString);
  return {
    comObject: comObject,
    connection: connection
  };
}; // Connect();
// const Connection = Connect();
// module.exports = { Connection };


var _default = Connection;
exports["default"] = _default;