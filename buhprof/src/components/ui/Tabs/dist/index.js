"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var uuid_1 = require("uuid");
var TabElement_1 = require("./TabElement");
var Tabs_module_scss_1 = require("./Tabs.module.scss");
var Tabs = function () {
    var _a = react_1.useState([]), tabs = _a[0], setTabs = _a[1];
    react_1.useEffect(function () {
        var tabs = [
            { uid: uuid_1.v4(), title: "Панель управления" },
            { uid: uuid_1.v4(), title: "Номенклатура" },
            { uid: uuid_1.v4(), title: "Реализация товара и услуг" },
        ];
        setTabs(tabs);
    }, []);
    return (react_2["default"].createElement("div", { className: Tabs_module_scss_1["default"].tabs }, tabs.map(function (tab) { return (react_2["default"].createElement(TabElement_1["default"], { key: tab.uid, tab: tab })); })));
};
exports["default"] = Tabs;
