"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DataGridCheckbox = function (_a) {
    var rowID = _a.rowID;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "checkbox", name: "selectOption_" + rowID })));
};
var DataGridCheckboxAll = function (_a) {
    var checked = _a.checked;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "checkbox", name: "selectOptionAll" })));
};
exports["default"] = { DataGridCheckbox: DataGridCheckbox, DataGridCheckboxAll: DataGridCheckboxAll };
