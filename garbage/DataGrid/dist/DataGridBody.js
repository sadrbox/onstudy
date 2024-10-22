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
// import styles from "./styles.module.scss";
// import { useContextTodo } from 'src/objects/Todos/Context';
// import { TColumn, TDataItem } from 'src/objects/Todos';
// import { ITodo } from 'src/objects/Todos/types';
var DataGridBodyRow_1 = require("./DataGridBodyRow");
var DataGridContext_1 = require("./DataGridContext");
var DataGridBody = function () {
    var _a = react_1.useState([]), dataRows = _a[0], setDataRows = _a[1];
    var _b = react_1.useState(null), activeRow = _b[0], setActiveRow = _b[1];
    var contextDataGrid = DataGridContext_1.useContextDataGrid().contextDataGrid;
    var actions = {
        activeRow: activeRow, setActiveRow: setActiveRow
    };
    react_1.useEffect(function () {
        if (contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.dataGrid) {
            setDataRows(contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.dataGrid);
        }
    }, [contextDataGrid]);
    return (react_1["default"].createElement("tbody", null, dataRows && dataRows.map(function (dataRow, keyID) {
        return react_1["default"].createElement(DataGridBodyRow_1["default"], { key: keyID, dataRow: dataRow, actions: __assign({}, actions) });
    })));
};
exports["default"] = DataGridBody;
