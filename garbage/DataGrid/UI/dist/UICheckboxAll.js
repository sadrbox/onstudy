"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DataGridContext_1 = require("../DataGridContext");
var UICheckboxAll = function () {
    var _a;
    var contextDataGrid = DataGridContext_1.useContextDataGrid().contextDataGrid;
    // const [checked, setChecked] = useState<boolean>(false)
    // useEffect(() => {
    //   const IDs = contextDataGrid?.IDs || []
    //   if (contextDataGrid?.states) {
    //     const setCheckedRows = contextDataGrid?.states.setCheckedRows;
    //     // const checkedAll = e.target.checked;
    //     if (contextDataGrid?.states?.isAllChecked) {
    //       setCheckedRows(IDs)
    //     } else {
    //       setCheckedRows([])
    //     }
    //   }
    // }, [contextDataGrid?.states?.isAllChecked]);
    function setCheckedAllRows() {
        var _a, _b;
        if ((_a = contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states) === null || _a === void 0 ? void 0 : _a.setIsAllChecked) {
            var setIsAllChecked = (_b = contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states) === null || _b === void 0 ? void 0 : _b.setIsAllChecked;
            setIsAllChecked(function (prev) { return !prev; });
        }
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "checkbox", name: "selectOption_All", checked: (_a = contextDataGrid === null || contextDataGrid === void 0 ? void 0 : contextDataGrid.states) === null || _a === void 0 ? void 0 : _a.isAllChecked, onChange: function () { return setCheckedAllRows(); } })));
};
exports["default"] = UICheckboxAll;
