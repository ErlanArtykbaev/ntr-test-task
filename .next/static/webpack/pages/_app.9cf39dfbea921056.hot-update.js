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

/***/ "./src/store/data/actions.ts":
/*!***********************************!*\
  !*** ./src/store/data/actions.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_DATA\": function() { return /* binding */ SET_DATA; },\n/* harmony export */   \"RESET_DATA_STATE\": function() { return /* binding */ RESET_DATA_STATE; },\n/* harmony export */   \"GET_DATA_REQUEST\": function() { return /* binding */ GET_DATA_REQUEST; },\n/* harmony export */   \"GET_DATA_SUCCESS\": function() { return /* binding */ GET_DATA_SUCCESS; },\n/* harmony export */   \"GET_DATA_FAILURE\": function() { return /* binding */ GET_DATA_FAILURE; },\n/* harmony export */   \"GET_DATA_DETAIL_REQUEST\": function() { return /* binding */ GET_DATA_DETAIL_REQUEST; },\n/* harmony export */   \"GET_DATA_DETAIL_SUCCESS\": function() { return /* binding */ GET_DATA_DETAIL_SUCCESS; },\n/* harmony export */   \"GET_DATA_DETAIL_FAILURE\": function() { return /* binding */ GET_DATA_DETAIL_FAILURE; },\n/* harmony export */   \"resetMusicState\": function() { return /* binding */ resetMusicState; },\n/* harmony export */   \"getDataRequest\": function() { return /* binding */ getDataRequest; },\n/* harmony export */   \"getDataSuccess\": function() { return /* binding */ getDataSuccess; },\n/* harmony export */   \"getDataFailure\": function() { return /* binding */ getDataFailure; },\n/* harmony export */   \"getDataDetailRequest\": function() { return /* binding */ getDataDetailRequest; },\n/* harmony export */   \"getDataDetailSuccess\": function() { return /* binding */ getDataDetailSuccess; },\n/* harmony export */   \"getDataDetailFailure\": function() { return /* binding */ getDataDetailFailure; }\n/* harmony export */ });\n/* harmony import */ var utils_createAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/createAction */ \"./src/utils/createAction.ts\");\n\nvar STATE_KEY = \"@data\";\nvar SET_DATA = \"\".concat(STATE_KEY, \"_SET_DATA\");\nvar RESET_DATA_STATE = \"\".concat(STATE_KEY, \"_RESET_DATA_STATE\");\nvar GET_DATA_REQUEST = \"\".concat(STATE_KEY, \"_GET_DATA_REQUEST\");\nvar GET_DATA_SUCCESS = \"\".concat(STATE_KEY, \"_GET_DATA_SUCCESS\");\nvar GET_DATA_FAILURE = \"\".concat(STATE_KEY, \"_GET_DATA_FAILURE\");\nvar GET_DATA_DETAIL_REQUEST = \"\".concat(STATE_KEY, \"_GET_DATA_DETAIL_REQUEST\");\nvar GET_DATA_DETAIL_SUCCESS = \"\".concat(STATE_KEY, \"_GET_DATA_DETAIL_SUCCESS\");\nvar GET_DATA_DETAIL_FAILURE = \"\".concat(STATE_KEY, \"_GET_DATA_DETAIL_FAILURE\");\nvar resetMusicState = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(RESET_DATA_STATE);\nvar getDataRequest = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GET_DATA_REQUEST);\nvar getDataSuccess = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GET_DATA_SUCCESS);\nvar getDataFailure = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GET_DATA_FAILURE);\nvar getDataDetailRequest = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GET_DATA_DETAIL_REQUEST);\nvar getDataDetailSuccess = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GET_DATA_DETAIL_SUCCESS);\nvar getDataDetailFailure = (0,utils_createAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GET_DATA_DETAIL_FAILURE);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZGF0YS9hY3Rpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFJOUMsSUFBTUMsU0FBUyxHQUFHLE9BQU87QUFFbEIsSUFBTUMsUUFBUSxHQUFHLEVBQUMsQ0FBWSxNQUFTLENBQW5CRCxTQUFTLEVBQUMsV0FBUyxDQUFDLENBQUM7QUFDekMsSUFBTUUsZ0JBQWdCLEdBQUcsRUFBQyxDQUFZLE1BQWlCLENBQTNCRixTQUFTLEVBQUMsbUJBQWlCLENBQUMsQ0FBQztBQUV6RCxJQUFNRyxnQkFBZ0IsR0FBRyxFQUFDLENBQVksTUFBaUIsQ0FBM0JILFNBQVMsRUFBQyxtQkFBaUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1JLGdCQUFnQixHQUFHLEVBQUMsQ0FBWSxNQUFpQixDQUEzQkosU0FBUyxFQUFDLG1CQUFpQixDQUFDLENBQUM7QUFDekQsSUFBTUssZ0JBQWdCLEdBQUcsRUFBQyxDQUFZLE1BQWlCLENBQTNCTCxTQUFTLEVBQUMsbUJBQWlCLENBQUMsQ0FBQztBQUV6RCxJQUFNTSx1QkFBdUIsR0FBRyxFQUFDLENBQVksTUFBd0IsQ0FBbENOLFNBQVMsRUFBQywwQkFBd0IsQ0FBQyxDQUFDO0FBQ3ZFLElBQU1PLHVCQUF1QixHQUFHLEVBQUMsQ0FBWSxNQUF3QixDQUFsQ1AsU0FBUyxFQUFDLDBCQUF3QixDQUFDLENBQUM7QUFDdkUsSUFBTVEsdUJBQXVCLEdBQUcsRUFBQyxDQUFZLE1BQXdCLENBQWxDUixTQUFTLEVBQUMsMEJBQXdCLENBQUMsQ0FBQztBQUV2RSxJQUFNUyxlQUFlLEdBQUdWLDhEQUFZLENBQUNHLGdCQUFnQixDQUFDLENBQUM7QUFFdkQsSUFBTVEsY0FBYyxHQUFHWCw4REFBWSxDQUFlSSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BFLElBQU1RLGNBQWMsR0FBR1osOERBQVksQ0FBa0JLLGdCQUFnQixDQUFDLENBQUM7QUFDdkUsSUFBTVEsY0FBYyxHQUFHYiw4REFBWSxDQUFhTSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWxFLElBQU1RLG9CQUFvQixHQUFHZCw4REFBWSxDQUFHTyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JFLElBQU1RLG9CQUFvQixHQUFHZiw4REFBWSxDQUF3QlEsdUJBQXVCLENBQUMsQ0FBQztBQUMxRixJQUFNUSxvQkFBb0IsR0FBR2hCLDhEQUFZLENBQWFTLHVCQUF1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2RhdGEvYWN0aW9ucy50cz81YmE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBjcmVhdGVBY3Rpb24gZnJvbSAndXRpbHMvY3JlYXRlQWN0aW9uJztcblxuaW1wb3J0IHsgSURhdGFSZXF1ZXN0LCBURGF0YVJlc3BvbnNlLCBUVHJhbnNhY3Rpb25zUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgU1RBVEVfS0VZID0gJ0BkYXRhJztcblxuZXhwb3J0IGNvbnN0IFNFVF9EQVRBID0gYCR7U1RBVEVfS0VZfV9TRVRfREFUQWA7XG5leHBvcnQgY29uc3QgUkVTRVRfREFUQV9TVEFURSA9IGAke1NUQVRFX0tFWX1fUkVTRVRfREFUQV9TVEFURWA7XG5cbmV4cG9ydCBjb25zdCBHRVRfREFUQV9SRVFVRVNUID0gYCR7U1RBVEVfS0VZfV9HRVRfREFUQV9SRVFVRVNUYDtcbmV4cG9ydCBjb25zdCBHRVRfREFUQV9TVUNDRVNTID0gYCR7U1RBVEVfS0VZfV9HRVRfREFUQV9TVUNDRVNTYDtcbmV4cG9ydCBjb25zdCBHRVRfREFUQV9GQUlMVVJFID0gYCR7U1RBVEVfS0VZfV9HRVRfREFUQV9GQUlMVVJFYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9EQVRBX0RFVEFJTF9SRVFVRVNUID0gYCR7U1RBVEVfS0VZfV9HRVRfREFUQV9ERVRBSUxfUkVRVUVTVGA7XG5leHBvcnQgY29uc3QgR0VUX0RBVEFfREVUQUlMX1NVQ0NFU1MgPSBgJHtTVEFURV9LRVl9X0dFVF9EQVRBX0RFVEFJTF9TVUNDRVNTYDtcbmV4cG9ydCBjb25zdCBHRVRfREFUQV9ERVRBSUxfRkFJTFVSRSA9IGAke1NUQVRFX0tFWX1fR0VUX0RBVEFfREVUQUlMX0ZBSUxVUkVgO1xuXG5leHBvcnQgY29uc3QgcmVzZXRNdXNpY1N0YXRlID0gY3JlYXRlQWN0aW9uKFJFU0VUX0RBVEFfU1RBVEUpO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVJlcXVlc3QgPSBjcmVhdGVBY3Rpb248SURhdGFSZXF1ZXN0PihHRVRfREFUQV9SRVFVRVNUKTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbjxURGF0YVJlc3BvbnNlW10+KEdFVF9EQVRBX1NVQ0NFU1MpO1xuZXhwb3J0IGNvbnN0IGdldERhdGFGYWlsdXJlID0gY3JlYXRlQWN0aW9uPEF4aW9zRXJyb3I+KEdFVF9EQVRBX0ZBSUxVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YURldGFpbFJlcXVlc3QgPSBjcmVhdGVBY3Rpb248PihHRVRfREFUQV9ERVRBSUxfUkVRVUVTVCk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YURldGFpbFN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb248VFRyYW5zYWN0aW9uc1Jlc3BvbnNlPihHRVRfREFUQV9ERVRBSUxfU1VDQ0VTUyk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YURldGFpbEZhaWx1cmUgPSBjcmVhdGVBY3Rpb248QXhpb3NFcnJvcj4oR0VUX0RBVEFfREVUQUlMX0ZBSUxVUkUpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsIlNUQVRFX0tFWSIsIlNFVF9EQVRBIiwiUkVTRVRfREFUQV9TVEFURSIsIkdFVF9EQVRBX1JFUVVFU1QiLCJHRVRfREFUQV9TVUNDRVNTIiwiR0VUX0RBVEFfRkFJTFVSRSIsIkdFVF9EQVRBX0RFVEFJTF9SRVFVRVNUIiwiR0VUX0RBVEFfREVUQUlMX1NVQ0NFU1MiLCJHRVRfREFUQV9ERVRBSUxfRkFJTFVSRSIsInJlc2V0TXVzaWNTdGF0ZSIsImdldERhdGFSZXF1ZXN0IiwiZ2V0RGF0YVN1Y2Nlc3MiLCJnZXREYXRhRmFpbHVyZSIsImdldERhdGFEZXRhaWxSZXF1ZXN0IiwiZ2V0RGF0YURldGFpbFN1Y2Nlc3MiLCJnZXREYXRhRGV0YWlsRmFpbHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/data/actions.ts\n");

/***/ })

});