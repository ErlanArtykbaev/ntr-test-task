"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/data/store.ts":
/*!*********************************!*\
  !*** ./src/store/data/store.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.es.js\");\n/* harmony import */ var utils_createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/createReducer */ \"./src/utils/createReducer.ts\");\n/* harmony import */ var utils_requestState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/requestState */ \"./src/utils/requestState.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/store/data/actions.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\n\n\n\nvar initialState = (0,immutable__WEBPACK_IMPORTED_MODULE_0__.fromJS)({\n    data: (0,utils_requestState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    detailData: (0,utils_requestState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    showDrawer: false\n});\nvar resetDataState = function(state) {\n    return state;\n};\nvar setDataLoading = function(value) {\n    return function(state) {\n        return state.setIn([\n            \"data\",\n            \"fetching\"\n        ], value);\n    };\n};\nvar setDataResponse = function(state, action) {\n    return state.setIn([\n        \"data\",\n        \"data\"\n    ], (0,immutable__WEBPACK_IMPORTED_MODULE_0__.fromJS)(action.payload));\n};\nvar setDataError = function(state, action) {\n    return state.setIn([\n        \"data\",\n        \"error\"\n    ], action.payload);\n};\nvar setDataDetailLoading = function(value) {\n    return function(state) {\n        return state.setIn([\n            \"detailData\",\n            \"fetching\"\n        ], value);\n    };\n};\nvar setDataDetailResponse = function(state, action) {\n    return state.setIn([\n        \"detailData\",\n        \"data\"\n    ], (0,immutable__WEBPACK_IMPORTED_MODULE_0__.fromJS)(action.payload));\n};\nvar setDataDetailError = function(state, action) {\n    return state.setIn([\n        \"detailData\",\n        \"error\"\n    ], action.payload);\n};\nvar setDrawer = function(state, action) {\n    return state.set(\"showDrawer\", action.payload);\n};\nvar _obj;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,utils_createReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initialState, (_obj = {}, _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.RESET_DATA_STATE, resetDataState), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.SET_DRAWER, setDrawer), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_REQUEST, setDataLoading(true)), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_SUCCESS, [\n    setDataLoading(false),\n    setDataResponse\n]), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_FAILURE, [\n    setDataLoading(false),\n    setDataError\n]), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_DETAIL_REQUEST, setDataDetailLoading(true)), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_DETAIL_SUCCESS, [\n    setDataDetailLoading(false),\n    setDataDetailResponse\n]), _defineProperty(_obj, _actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_DETAIL_FAILURE, [\n    setDataDetailLoading(false),\n    setDataDetailError\n]), _obj)));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZGF0YS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FBQW1DO0FBR2E7QUFDQztBQU85QjtBQVFuQixJQUFNVyxZQUFZLEdBQXFCWCxpREFBTSxDQUFDO0lBQzVDWSxJQUFJLEVBQUVWLDhEQUFlLEVBQWlCO0lBQ3RDVyxVQUFVLEVBQUVYLDhEQUFlLEVBQXlCO0lBQ3BEWSxVQUFVLEVBQUUsS0FBSztDQUNsQixDQUFDO0FBRUYsSUFBTUMsY0FBYyxHQUFpQkMsU0FBQUEsS0FBSztXQUFJQSxLQUFLO0NBQUE7QUFFbkQsSUFBTUMsY0FBYyxHQUFHLFNBQUNDLEtBQWM7V0FDcENGLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDRyxLQUFLLENBQUM7WUFBQyxNQUFNO1lBQUUsVUFBVTtTQUFDLEVBQUVELEtBQUssQ0FBQztLQUFBO0NBQUE7QUFDbkQsSUFBTUUsZUFBZSxHQUFnQyxTQUFDSixLQUFLLEVBQUVLLE1BQU07V0FDakVMLEtBQUssQ0FBQ0csS0FBSyxDQUFDO1FBQUMsTUFBTTtRQUFFLE1BQU07S0FBQyxFQUFFbkIsaURBQU0sQ0FBQ3FCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Q0FBQTtBQUN2RCxJQUFNQyxZQUFZLEdBQTZCLFNBQUNQLEtBQUssRUFBRUssTUFBTTtXQUMzREwsS0FBSyxDQUFDRyxLQUFLLENBQUM7UUFBQyxNQUFNO1FBQUUsT0FBTztLQUFDLEVBQUVFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO0NBQUE7QUFFaEQsSUFBTUUsb0JBQW9CLEdBQUcsU0FBQ04sS0FBYztXQUMxQ0YsU0FBQUEsS0FBSztlQUFJQSxLQUFLLENBQUNHLEtBQUssQ0FBQztZQUFDLFlBQVk7WUFBRSxVQUFVO1NBQUMsRUFBRUQsS0FBSyxDQUFDO0tBQUE7Q0FBQTtBQUN6RCxJQUFNTyxxQkFBcUIsR0FBd0MsU0FBQ1QsS0FBSyxFQUFFSyxNQUFNO1dBQy9FTCxLQUFLLENBQUNHLEtBQUssQ0FBQztRQUFDLFlBQVk7UUFBRSxNQUFNO0tBQUMsRUFBRW5CLGlEQUFNLENBQUNxQixNQUFNLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0NBQUE7QUFDN0QsSUFBTUksa0JBQWtCLEdBQTZCLFNBQUNWLEtBQUssRUFBRUssTUFBTTtXQUNqRUwsS0FBSyxDQUFDRyxLQUFLLENBQUM7UUFBQyxZQUFZO1FBQUUsT0FBTztLQUFDLEVBQUVFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO0NBQUE7QUFFdEQsSUFBTUssU0FBUyxHQUF5QixTQUFDWCxLQUFLLEVBQUVLLE1BQU07V0FDcERMLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLFlBQVksRUFBRVAsTUFBTSxDQUFDQyxPQUFPLENBQUM7Q0FBQTtJQUlvQixJQWM1RDtBQWRELCtEQUFlckIsK0RBQWEsQ0FBbUJVLFlBQVksR0FBRSxJQWM1RCxPQWJDLGdCQUQyRCxJQWM1RCxFQWJFUixzREFBZ0IsRUFBR1ksY0FBYyxHQUVsQyxnQkFIMkQsSUFjNUQsRUFYRUwsZ0RBQVUsRUFBR2lCLFNBQVMsR0FFdkIsZ0JBTDJELElBYzVELEVBVEV2QixzREFBZ0IsRUFBR2EsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUN4QyxnQkFOMkQsSUFjNUQsRUFSRVgsc0RBQWdCLEVBQUc7SUFBQ1csY0FBYyxDQUFDLEtBQUssQ0FBQztJQUFFRyxlQUFlO0NBQUMsR0FDNUQsZ0JBUDJELElBYzVELEVBUEVmLHNEQUFnQixFQUFHO0lBQUNZLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFBRU0sWUFBWTtDQUFDLEdBRXpELGdCQVQyRCxJQWM1RCxFQUxFaEIsNkRBQXVCLEVBQUdpQixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FDckQsZ0JBVjJELElBYzVELEVBSkVmLDZEQUF1QixFQUFHO0lBQUNlLG9CQUFvQixDQUFDLEtBQUssQ0FBQztJQUFFQyxxQkFBcUI7Q0FBQyxHQUMvRSxnQkFYMkQsSUFjNUQsRUFIRWpCLDZEQUF1QixFQUFHO0lBQUNnQixvQkFBb0IsQ0FBQyxLQUFLLENBQUM7SUFBRUUsa0JBQWtCO0NBQUMsR0FYakIsSUFjNUQsRUFBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9kYXRhL3N0b3JlLnRzPzY0YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJ3V0aWxzL2NyZWF0ZVJlZHVjZXInO1xuaW1wb3J0IGdldFJlcXVlc3RTdGF0ZSBmcm9tICd1dGlscy9yZXF1ZXN0U3RhdGUnO1xuXG5pbXBvcnQge1xuICBSRVNFVF9EQVRBX1NUQVRFLFxuICBHRVRfREFUQV9SRVFVRVNULFxuICBHRVRfREFUQV9GQUlMVVJFLFxuICBHRVRfREFUQV9TVUNDRVNTLCBHRVRfREFUQV9ERVRBSUxfUkVRVUVTVCwgR0VUX0RBVEFfREVUQUlMX0ZBSUxVUkUsIEdFVF9EQVRBX0RFVEFJTF9TVUNDRVNTLCBTRVRfRFJBV0VSLFxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtcbiAgVERhdGFTdG9yZVJlY29yZCxcbiAgVERhdGFIYW5kbGVyLFxuICBURGF0YVJlc3BvbnNlLCBUVHJhbnNhY3Rpb25zUmVzcG9uc2UsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVERhdGFTdG9yZVJlY29yZCA9IGZyb21KUyh7XG4gIGRhdGE6IGdldFJlcXVlc3RTdGF0ZTxURGF0YVJlc3BvbnNlPigpLFxuICBkZXRhaWxEYXRhOiBnZXRSZXF1ZXN0U3RhdGU8VFRyYW5zYWN0aW9uc1Jlc3BvbnNlPigpLFxuICBzaG93RHJhd2VyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCByZXNldERhdGFTdGF0ZTogVERhdGFIYW5kbGVyID0gc3RhdGUgPT4gc3RhdGU7XG5cbmNvbnN0IHNldERhdGFMb2FkaW5nID0gKHZhbHVlOiBib29sZWFuKTogVERhdGFIYW5kbGVyID0+XG4gIHN0YXRlID0+IHN0YXRlLnNldEluKFsnZGF0YScsICdmZXRjaGluZyddLCB2YWx1ZSk7XG5jb25zdCBzZXREYXRhUmVzcG9uc2U6IFREYXRhSGFuZGxlcjxURGF0YVJlc3BvbnNlPiA9IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBzdGF0ZS5zZXRJbihbJ2RhdGEnLCAnZGF0YSddLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQpKTtcbmNvbnN0IHNldERhdGFFcnJvcjogVERhdGFIYW5kbGVyPEF4aW9zRXJyb3I+ID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLnNldEluKFsnZGF0YScsICdlcnJvciddLCBhY3Rpb24ucGF5bG9hZCk7XG5cbmNvbnN0IHNldERhdGFEZXRhaWxMb2FkaW5nID0gKHZhbHVlOiBib29sZWFuKTogVERhdGFIYW5kbGVyID0+XG4gIHN0YXRlID0+IHN0YXRlLnNldEluKFsnZGV0YWlsRGF0YScsICdmZXRjaGluZyddLCB2YWx1ZSk7XG5jb25zdCBzZXREYXRhRGV0YWlsUmVzcG9uc2U6IFREYXRhSGFuZGxlcjxUVHJhbnNhY3Rpb25zUmVzcG9uc2U+ID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLnNldEluKFsnZGV0YWlsRGF0YScsICdkYXRhJ10sIGZyb21KUyhhY3Rpb24ucGF5bG9hZCkpO1xuY29uc3Qgc2V0RGF0YURldGFpbEVycm9yOiBURGF0YUhhbmRsZXI8QXhpb3NFcnJvcj4gPSAoc3RhdGUsIGFjdGlvbikgPT5cbiAgc3RhdGUuc2V0SW4oWydkZXRhaWxEYXRhJywgJ2Vycm9yJ10sIGFjdGlvbi5wYXlsb2FkKTtcblxuY29uc3Qgc2V0RHJhd2VyOlREYXRhSGFuZGxlcjxib29sZWFuPiA9IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBzdGF0ZS5zZXQoJ3Nob3dEcmF3ZXInLCBhY3Rpb24ucGF5bG9hZCk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyPFREYXRhU3RvcmVSZWNvcmQ+KGluaXRpYWxTdGF0ZSwge1xuICBbUkVTRVRfREFUQV9TVEFURV06IHJlc2V0RGF0YVN0YXRlLFxuXG4gIFtTRVRfRFJBV0VSXTogc2V0RHJhd2VyLFxuXG4gIFtHRVRfREFUQV9SRVFVRVNUXTogc2V0RGF0YUxvYWRpbmcodHJ1ZSksXG4gIFtHRVRfREFUQV9TVUNDRVNTXTogW3NldERhdGFMb2FkaW5nKGZhbHNlKSwgc2V0RGF0YVJlc3BvbnNlXSxcbiAgW0dFVF9EQVRBX0ZBSUxVUkVdOiBbc2V0RGF0YUxvYWRpbmcoZmFsc2UpLCBzZXREYXRhRXJyb3JdLFxuXG4gIFtHRVRfREFUQV9ERVRBSUxfUkVRVUVTVF06IHNldERhdGFEZXRhaWxMb2FkaW5nKHRydWUpLFxuICBbR0VUX0RBVEFfREVUQUlMX1NVQ0NFU1NdOiBbc2V0RGF0YURldGFpbExvYWRpbmcoZmFsc2UpLCBzZXREYXRhRGV0YWlsUmVzcG9uc2VdLFxuICBbR0VUX0RBVEFfREVUQUlMX0ZBSUxVUkVdOiBbc2V0RGF0YURldGFpbExvYWRpbmcoZmFsc2UpLCBzZXREYXRhRGV0YWlsRXJyb3JdLFxuXG5cbn0pO1xuIl0sIm5hbWVzIjpbImZyb21KUyIsImNyZWF0ZVJlZHVjZXIiLCJnZXRSZXF1ZXN0U3RhdGUiLCJSRVNFVF9EQVRBX1NUQVRFIiwiR0VUX0RBVEFfUkVRVUVTVCIsIkdFVF9EQVRBX0ZBSUxVUkUiLCJHRVRfREFUQV9TVUNDRVNTIiwiR0VUX0RBVEFfREVUQUlMX1JFUVVFU1QiLCJHRVRfREFUQV9ERVRBSUxfRkFJTFVSRSIsIkdFVF9EQVRBX0RFVEFJTF9TVUNDRVNTIiwiU0VUX0RSQVdFUiIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJkZXRhaWxEYXRhIiwic2hvd0RyYXdlciIsInJlc2V0RGF0YVN0YXRlIiwic3RhdGUiLCJzZXREYXRhTG9hZGluZyIsInZhbHVlIiwic2V0SW4iLCJzZXREYXRhUmVzcG9uc2UiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0RGF0YUVycm9yIiwic2V0RGF0YURldGFpbExvYWRpbmciLCJzZXREYXRhRGV0YWlsUmVzcG9uc2UiLCJzZXREYXRhRGV0YWlsRXJyb3IiLCJzZXREcmF3ZXIiLCJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/data/store.ts\n");

/***/ })

});