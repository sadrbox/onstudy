"use strict";
// import settings from "./settings.json" assert { type: "json" };
exports.__esModule = true;
exports.createDataGridColumns = exports.getColumnWidthById = void 0;
var i18_1 = require("src/i18");
// Функция для поиска ширины колонки по id
function getColumnWidthById(tableParams, columnId) {
    var column = tableParams.columns.find(function (col) { return col.id === columnId; });
    return column ? column.width : "auto"; // Возвращает ширину или undefined, если не найдено
}
exports.getColumnWidthById = getColumnWidthById;
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
exports.createDataGridColumns = function (DataItem1) {
    var columns = [
        {
            id: "selectOption",
            type: "boolean"
        },
    ];
    Object.entries(DataItem1).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (typeof value === "object") {
            return;
        }
        var fieldName = i18_1.translateWord(key);
        var col = {
            id: key,
            type: typeof DataItem1[key],
            name: fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
            width: "",
            hint: ""
        };
        columns.push(col);
    });
    // console.log(columns);
    return columns;
};
