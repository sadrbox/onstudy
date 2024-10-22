"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
var functions_1 = require("../../../utils/functions");
// import { translateWord } from 'src/i18';
var DataGridContext_1 = require("./DataGridContext");
var UICheckbox_1 = require("./UI/UICheckbox");
var DataGridBodyRow = function (_a) {
    var dataRow = _a.dataRow, actions = _a.actions;
    var _b = react_1.useState([]), columns = _b[0], setColumns = _b[1];
    var contextDataGrid = DataGridContext_1.useContextDataGrid().contextDataGrid;
    // const checkboxRef = useRef<HTMLInputElement | null>(null);
    function setActiveRow(rowID) {
        if (contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states) {
            // const uicheckbox = checkboxRef.current;
            // uicheckbox.checked = !uicheckbox.checked;
            // uicheckbox.focus();
            // contextDataGrid?.states?.setCheckedRows((prev) => [...prev, rowID])
        }
        actions.setActiveRow(rowID);
    }
    function isCheckedRow(rowID) {
        var _a;
        return ((_a = contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states) === null || _a === void 0 ? void 0 : _a.checkedRows.includes(rowID)) || false;
    }
    react_1.useEffect(function () {
        if (contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.columns) {
            setColumns(contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.columns);
        }
    }, [contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.columns]);
    var rowID = +dataRow.id;
    return (react_1["default"].createElement("tr", { "data-row-id": rowID }, columns.map(function (col, keyID) {
        if (col.id === 'selectOption') {
            // const isCheckedRow = isCheckedRow
            return (react_1["default"].createElement("td", { key: keyID },
                react_1["default"].createElement("div", { style: { justifyItems: 'center' }, className: ((actions === null || actions === void 0 ? void 0 : actions.activeRow) === rowID) ? styles_module_scss_1["default"].TabFieldActive : styles_module_scss_1["default"].TabField },
                    react_1["default"].createElement(UICheckbox_1["default"], { tabIndex: keyID, rowID: rowID, checked: isCheckedRow(rowID), actions: __assign({}, actions) }))));
        }
        else {
            var value = functions_1.getViewValue(dataRow[col.id], col.id);
            return (react_1["default"].createElement("td", { key: keyID, onClick: function () { return actions.setActiveRow(rowID); } },
                react_1["default"].createElement("div", { style: functions_1.getTextAlignByColumnType(col), className: ((actions === null || actions === void 0 ? void 0 : actions.activeRow) === rowID) ? styles_module_scss_1["default"].TabFieldActive : styles_module_scss_1["default"].TabField },
                    react_1["default"].createElement("span", null, value))));
        }
    })));
};
exports["default"] = DataGridBodyRow;
