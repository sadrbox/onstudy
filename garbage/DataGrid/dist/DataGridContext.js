"use strict";
exports.__esModule = true;
exports.useContextDataGrid = exports.ContextInstance = void 0;
var react_1 = require("react");
var react_2 = require("react");
// import { IResponseData } from "./types";
// import { TColumn, TDataItem } from "./index";
var react_3 = require("react");
exports.ContextInstance = react_2.createContext({
    contextDataGrid: undefined,
    setContextDataGrid: function () { }
});
// eslint-disable-next-line react-refresh/only-export-components
exports.useContextDataGrid = function () { return react_2.useContext(exports.ContextInstance); };
function ContextWrapper(_a) {
    var children = _a.children, contextData = _a.contextData;
    var _b = react_1.useState(contextData), contextDataGrid = _b[0], setContextDataGrid = _b[1];
    var contextValue = react_1.useMemo(function () { return ({
        contextDataGrid: contextDataGrid, setContextDataGrid: setContextDataGrid
    }); }, [contextDataGrid]);
    react_1.useEffect(function () {
        if (contextData !== undefined) {
            setContextDataGrid(contextData);
        }
    }, [contextData]);
    return (react_3["default"].createElement(exports.ContextInstance.Provider, { value: contextValue }, children));
}
exports["default"] = ContextWrapper;
