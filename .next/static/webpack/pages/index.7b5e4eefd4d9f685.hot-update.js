"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table/Row/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Table/Row/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Row\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Table_SubRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Table/SubRow */ \"./src/components/Table/SubRow/index.tsx\");\n/* harmony import */ var components_Table_Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Table/Cell */ \"./src/components/Table/Cell/index.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Row = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDropdownShown = ref[0], setIsDropdownShown = ref[1];\n    var isSubCategories = !!(data === null || data === void 0 ? void 0 : data.subCategories.length);\n    var shouldShowSubRow = isSubCategories && isDropdownShown;\n    var handleDropdownShow = function() {\n        if (!isSubCategories) return;\n        setIsDropdownShown(function(prev) {\n            return !prev;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleDropdownShow,\n                className: \"title\",\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.reports.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Table_Cell__WEBPACK_IMPORTED_MODULE_3__.Cell, {\n                        data: item\n                    }, item.id, false, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            shouldShowSubRow && data.subCategories.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Table_SubRow__WEBPACK_IMPORTED_MODULE_2__.SubRow, {\n                    data: item\n                }, item.id, false, {\n                    fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Row, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Sb3cvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFHUztBQUNKOztBQUV0QyxJQUFNSSxHQUFHLEdBQUcsZ0JBQXNDO1FBQW5DQyxJQUFJLFNBQUpBLElBQUk7OztJQUN4QixJQUE2Q0osR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVA5RCxlQU93QixHQUF1QkEsR0FBZSxHQUF0QyxFQVB4QixrQkFPNEMsR0FBR0EsR0FBZSxHQUFsQjtJQUUxQyxJQUFNTyxlQUFlLEdBQUcsQ0FBQyxFQUFDSCxJQUFJLGFBQUpBLElBQUksV0FBZSxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLElBQUksQ0FBRUksYUFBYSxDQUFDQyxNQUFNO0lBQ3BELElBQU1DLGdCQUFnQixHQUFHSCxlQUFlLElBQUlGLGVBQWU7SUFFM0QsSUFBTU0sa0JBQWtCLEdBQUcsV0FBTTtRQUMvQixJQUFJLENBQUNKLGVBQWUsRUFBRSxPQUFPO1FBQzdCRCxrQkFBa0IsQ0FBQ00sU0FBQUEsSUFBSTttQkFBSSxDQUFDQSxJQUFJO1NBQUEsQ0FBQyxDQUFDO0tBQ25DO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7OzBCQUNsQiw4REFBQ0QsS0FBRztnQkFBQ0UsT0FBTyxFQUFFSixrQkFBa0I7Z0JBQUVHLFNBQVMsRUFBQyxPQUFPOzBCQUFFVixJQUFJLENBQUNZLElBQUk7Ozs7O3FCQUFPOzBCQUNyRSw4REFBQ0gsS0FBRzswQkFDRFQsSUFBSSxDQUFDYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTt5Q0FDcEIsOERBQUNqQix1REFBSTt3QkFBQ0UsSUFBSSxFQUFFZSxJQUFJO3VCQUFPQSxJQUFJLENBQUNDLEVBQUU7Ozs7OEJBQUk7aUJBQ25DLENBQUM7Ozs7O3FCQUNFO1lBQ0xWLGdCQUFnQixJQUFJTixJQUFJLENBQUNJLGFBQWEsQ0FBQ1UsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3FDQUM5Qyw4REFBQ2xCLDJEQUFNO29CQUFDRyxJQUFJLEVBQUVlLElBQUk7bUJBQU9BLElBQUksQ0FBQ0MsRUFBRTs7OzswQkFBSTthQUNyQyxDQUFDOzs7Ozs7YUFDRSxDQUNOO0NBQ0gsQ0FBQztHQXhCV2pCLEdBQUc7QUFBSEEsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Sb3cvaW5kZXgudHN4P2Q3N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJUm93UHJvcHMgfSBmcm9tICdjb21wb25lbnRzL1RhYmxlL3R5cGVzJztcbmltcG9ydCB7IFN1YlJvdyB9IGZyb20gJ2NvbXBvbmVudHMvVGFibGUvU3ViUm93JztcbmltcG9ydCB7IENlbGwgfSBmcm9tICdjb21wb25lbnRzL1RhYmxlL0NlbGwnO1xuXG5leHBvcnQgY29uc3QgUm93ID0gKHsgZGF0YSB9OiBJUm93UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtpc0Ryb3Bkb3duU2hvd24sIHNldElzRHJvcGRvd25TaG93bl09IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpc1N1YkNhdGVnb3JpZXMgPSAhIWRhdGE/LnN1YkNhdGVnb3JpZXMubGVuZ3RoO1xuICBjb25zdCBzaG91bGRTaG93U3ViUm93ID0gaXNTdWJDYXRlZ29yaWVzICYmIGlzRHJvcGRvd25TaG93bjtcblxuICBjb25zdCBoYW5kbGVEcm9wZG93blNob3cgPSAoKSA9PiB7XG4gICAgaWYgKCFpc1N1YkNhdGVnb3JpZXMpIHJldHVybjtcbiAgICBzZXRJc0Ryb3Bkb3duU2hvd24ocHJldiA9PiAhcHJldik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVEcm9wZG93blNob3d9IGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEubmFtZX08L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtkYXRhLnJlcG9ydHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxDZWxsIGRhdGE9e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG91bGRTaG93U3ViUm93ICYmIGRhdGEuc3ViQ2F0ZWdvcmllcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxTdWJSb3cgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdWJSb3ciLCJDZWxsIiwiUm93IiwiZGF0YSIsImlzRHJvcGRvd25TaG93biIsInNldElzRHJvcGRvd25TaG93biIsImlzU3ViQ2F0ZWdvcmllcyIsInN1YkNhdGVnb3JpZXMiLCJsZW5ndGgiLCJzaG91bGRTaG93U3ViUm93IiwiaGFuZGxlRHJvcGRvd25TaG93IiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJuYW1lIiwicmVwb3J0cyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table/Row/index.tsx\n");

/***/ })

});