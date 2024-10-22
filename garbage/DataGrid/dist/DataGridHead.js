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
// import { translateWord } from 'src/i18'
var settings_json_1 = require("./settings.json");
assert;
{
    type: "json";
}
;
// import { TColumn } from 'src/objects/Todos'
var services_1 = require("./services");
var DataGridContext_1 = require("./DataGridContext");
// import styles from "./styles.module.scss";
var fa_1 = require("react-icons/fa");
var lodash_1 = require("lodash");
// import { columns } from '../../../objects/Products/config';
// import DataGridCheckbox from './UI/UICheckbox';
var UICheckboxAll_1 = require("./UI/UICheckboxAll");
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var DataGridHead = function () {
    var _a = react_1.useState(), columns = _a[0], setColumns = _a[1];
    var contextDataGrid = DataGridContext_1.useContextDataGrid().contextDataGrid;
    // console.log(contextDataGrid)
    ///////////////////////////////////////////////////////////////////////////
    react_1.useEffect(function () {
        var dataGridColumns = contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.columns;
        if (!lodash_1["default"].isEqual(dataGridColumns, columns)) {
            setColumns(dataGridColumns);
        }
    }, [contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.columns, columns]);
    function handleSorting(columnID) {
        return contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states.setCurrentSorting(function (prev) { return ({
            id: columnID,
            order: prev.id === columnID && prev.order === 'asc' ? 'desc' : 'asc'
        }); });
    }
    // console.log(columns)
    var _b = __assign({}, contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states.currentSorting), orderID = _b.id, orderType = _b.order;
    return (react_1["default"].createElement("thead", null,
        react_1["default"].createElement("tr", null, columns && columns.map(function (col, keyID) {
            if (col.id === 'selectOption') {
                return (react_1["default"].createElement("th", { key: keyID, style: { width: services_1.getColumnWidthById(settings_json_1["default"], col.id) } },
                    react_1["default"].createElement("div", { style: { justifyItems: 'center' } },
                        react_1["default"].createElement("span", { style: { display: 'grid' } },
                            react_1["default"].createElement(UICheckboxAll_1["default"], null)))));
            }
            else {
                return (react_1["default"].createElement("th", { key: keyID, style: { width: services_1.getColumnWidthById(settings_json_1["default"], col.id) }, onClick: function () { return handleSorting(col.id); } },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, col.name),
                        orderID === col.id && orderType === 'asc' ? react_1["default"].createElement(fa_1.FaSortAmountDownAlt, { size: 16, style: { justifySelf: 'end', marginLeft: '10px', color: (orderID === col.id ? '#333' : 'transparent') } }) : react_1["default"].createElement(fa_1.FaSortAmountDown, { size: 16, style: { justifySelf: 'end', marginLeft: '10px', color: (orderID === col.id ? '#333' : 'transparent') } }))));
            }
        }))));
};
exports["default"] = DataGridHead;
