"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var DataGridContext_1 = require("../DataGridContext");
var styles_module_scss_1 = require("../styles.module.scss");
var UICheckbox = function (_a) {
    var tabIndex = _a.tabIndex, rowID = _a.rowID, checked = _a.checked, actions = _a.actions;
    var contextDataGrid = DataGridContext_1.useContextDataGrid().contextDataGrid;
    function OnChangeCheckbox(rowID) {
        if (contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states) {
            var setCheckedRows = contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states.setCheckedRows;
            setCheckedRows(function (prev) {
                if (prev.includes(rowID)) {
                    return prev.filter(function (id) { return id !== rowID; });
                }
                else {
                    return __spreadArrays(prev, [rowID]);
                }
            });
        }
    }
    function OnFocusCheckbox(rowID) {
        return actions.setActiveRow(rowID);
    }
    // console.log(__dirname)
    return (react_1["default"].createElement("label", { className: styles_module_scss_1["default"].LabelForCheckbox, htmlFor: "selectOption_" + rowID, onClick: function () { return console.log('sdfasd'); } },
        react_1["default"].createElement("input", { type: "checkbox", onFocus: function () { return OnFocusCheckbox(rowID); }, id: "selectOption_" + rowID, checked: checked, onChange: function () { return OnChangeCheckbox(rowID); }, tabIndex: tabIndex }),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].CustomCheckbox })));
};
exports["default"] = UICheckbox;
