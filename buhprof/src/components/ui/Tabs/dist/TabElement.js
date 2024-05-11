"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Tabs_module_scss_1 = require("./Tabs.module.scss");
var TabElement = function (_a) {
    var tab = _a.tab;
    return (react_1["default"].createElement("div", { "data-tabid": tab.uid, className: Tabs_module_scss_1["default"].element },
        react_1["default"].createElement("div", { className: Tabs_module_scss_1["default"].title }, tab.title)));
};
exports["default"] = TabElement;
