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
var styles_module_scss_1 = require("./styles.module.scss");
// import { useContextTodo } from 'src/objects/Todos/Context';
var DataGridHead_1 = require("./DataGridHead");
var DataGridBody_1 = require("./DataGridBody");
var DataGridContext_1 = require("./DataGridContext");
var services_1 = require("./services");
var DataGrid = function (_a) {
    var dataGridRows = _a.dataGridRows, loadDataGrid = _a.actions.loadDataGrid;
    var _b = react_1.useState(undefined), contextData = _b[0], setContextData = _b[1];
    var _c = react_1.useState(undefined), sortedDataGrid = _c[0], setSortedDataGrid = _c[1];
    var _d = react_1.useState([]), checkedRows = _d[0], setCheckedRows = _d[1];
    var _e = react_1.useState(false), isAllChecked = _e[0], setIsAllChecked = _e[1];
    var _f = react_1.useState({
        id: 'id',
        order: 'asc'
    }), currentSorting = _f[0], setCurrentSorting = _f[1];
    function sortMixedArray(arr, columnID, order, locale) {
        if (locale === void 0) { locale = 'default'; }
        return arr.sort(function (a, b) {
            var aValue = order === "asc" ? a[columnID] : b[columnID];
            var bValue = order === "asc" ? b[columnID] : a[columnID];
            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return aValue - bValue;
            }
            else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return aValue.toString().localeCompare(bValue.toString(), locale, { numeric: true });
            }
            return (aValue ? -1 : bValue ? +1 : 0);
            // return -1;
        });
    }
    react_1.useEffect(function () {
        if (sortedDataGrid === null || sortedDataGrid === void 0 ? void 0 : sortedDataGrid.length) {
            var DataItem1 = sortedDataGrid[0];
            var columns = services_1.createDataGridColumns(DataItem1);
            var dataGrid = sortMixedArray(sortedDataGrid, currentSorting.id, currentSorting.order) || [];
            var IDs = sortedDataGrid.map(function (row) { return row.id; }) || [];
            setContextData({
                dataGrid: dataGrid,
                columns: columns,
                IDs: IDs,
                actions: {
                    loadDataGrid: loadDataGrid
                },
                states: {
                    currentSorting: currentSorting, setCurrentSorting: setCurrentSorting,
                    checkedRows: checkedRows, setCheckedRows: setCheckedRows,
                    isAllChecked: isAllChecked, setIsAllChecked: setIsAllChecked
                }
            });
        }
        else {
            setContextData(undefined);
        }
    }, [sortedDataGrid, currentSorting, checkedRows, isAllChecked]);
    /////////////////////////////////////////////////////////
    react_1.useEffect(function () {
        if (sortedDataGrid) {
            var IDs = sortedDataGrid.map(function (row) { return row.id; }) || [];
            if (isAllChecked) {
                setCheckedRows(IDs);
            }
            else {
                if (checkedRows.length < IDs.length) {
                    setCheckedRows(function (prev) { return __spreadArrays(prev); });
                }
                else {
                    setCheckedRows([]);
                }
            }
        }
    }, [isAllChecked]);
    /////////////////////////////////////////////////////////
    react_1.useEffect(function () {
        if (sortedDataGrid) {
            var IDs = sortedDataGrid.map(function (row) { return row.id; }) || [];
            if (checkedRows.length === IDs.length) {
                // console.log({ checkedRows, IDs })
                setIsAllChecked(true);
                // setCheckedRows((prev) => [...prev])
            }
            else {
                setIsAllChecked(false);
            }
        }
    }, [checkedRows]);
    /////////////////////////////////////////////////////////
    react_1.useEffect(function () {
        if (dataGridRows.length) {
            setSortedDataGrid(dataGridRows);
        }
    }, [dataGridRows]);
    return (react_1["default"].createElement(DataGridContext_1["default"], { contextData: contextData },
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].tab },
            react_1["default"].createElement("div", { className: styles_module_scss_1["default"].tabPanel },
                react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: '5px' } },
                    react_1["default"].createElement("button", { className: styles_module_scss_1["default"].Button },
                        react_1["default"].createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                    react_1["default"].createElement("button", { className: styles_module_scss_1["default"].Button },
                        react_1["default"].createElement("span", null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))),
                react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'right', gap: '5px' } },
                    react_1["default"].createElement("button", { onClick: function () { return loadDataGrid(); }, className: [styles_module_scss_1["default"].Button, styles_module_scss_1["default"].ButtonImg].join(' ') },
                        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].ImgReload })),
                    react_1["default"].createElement("button", { className: [styles_module_scss_1["default"].Button, styles_module_scss_1["default"].ButtonImg].join(' ') },
                        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].ImgSetting })))),
            react_1["default"].createElement("div", { className: styles_module_scss_1["default"].tabWrapper },
                react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "Loading...") },
                    react_1["default"].createElement("table", null,
                        react_1["default"].createElement(DataGridHead_1["default"], null),
                        react_1["default"].createElement(DataGridBody_1["default"], null)))))));
};
exports["default"] = DataGrid;
