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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Row\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_images_NotesIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/NotesIcon */ \"./src/assets/images/NotesIcon.tsx\");\n/* harmony import */ var components_Table_SubRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Table/SubRow */ \"./src/components/Table/SubRow/index.tsx\");\n/* harmony import */ var components_Table_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Table/Cell */ \"./src/components/Table/Cell/index.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Row = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDropdownShown = ref[0], setIsDropdownShown = ref[1];\n    var isSubCategories = !!(data === null || data === void 0 ? void 0 : data.subCategories.length);\n    var shouldShowSubRow = isSubCategories && isDropdownShown;\n    var handleDropdownShow = function() {\n        if (!isSubCategories) return;\n        setIsDropdownShown(function(prev) {\n            return !prev;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleDropdownShow,\n                        className: \"title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(assets_images_NotesIcon__WEBPACK_IMPORTED_MODULE_2__.NotesIcon, {}, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: data.name\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cells\",\n                        children: data.reports.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Table_Cell__WEBPACK_IMPORTED_MODULE_4__.Cell, {\n                                data: item\n                            }, item.id, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            shouldShowSubRow && data.subCategories.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Table_SubRow__WEBPACK_IMPORTED_MODULE_3__.SubRow, {\n                    data: item\n                }, item.id, false, {\n                    fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Table/Row/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true);\n};\n_s(Row, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Sb3cvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1k7QUFHSDtBQUNKOztBQUV0QyxJQUFNSyxHQUFHLEdBQUcsZ0JBQXNDO1FBQW5DQyxJQUFJLFNBQUpBLElBQUk7OztJQUN4QixJQUE2Q0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVI5RCxlQVF3QixHQUF1QkEsR0FBZSxHQUF0QyxFQVJ4QixrQkFRNEMsR0FBR0EsR0FBZSxHQUFsQjtJQUUxQyxJQUFNUSxlQUFlLEdBQUcsQ0FBQyxFQUFDSCxJQUFJLGFBQUpBLElBQUksV0FBZSxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLElBQUksQ0FBRUksYUFBYSxDQUFDQyxNQUFNO0lBQ3BELElBQU1DLGdCQUFnQixHQUFHSCxlQUFlLElBQUlGLGVBQWU7SUFFM0QsSUFBTU0sa0JBQWtCLEdBQUcsV0FBTTtRQUMvQixJQUFJLENBQUNKLGVBQWUsRUFBRSxPQUFPO1FBQzdCRCxrQkFBa0IsQ0FBQ00sU0FBQUEsSUFBSTttQkFBSSxDQUFDQSxJQUFJO1NBQUEsQ0FBQyxDQUFDO0tBQ25DO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsS0FBSzs7a0NBQ2xCLDhEQUFDRCxLQUFHO3dCQUFDRSxPQUFPLEVBQUVKLGtCQUFrQjt3QkFBRUcsU0FBUyxFQUFDLE9BQU87OzBDQUNqRCw4REFBQ2QsOERBQVM7Ozs7cUNBQUc7MENBQ2IsOERBQUNnQixNQUFJOzBDQUNGWixJQUFJLENBQUNhLElBQUk7Ozs7O3FDQUNMOzs7Ozs7NkJBQ0g7a0NBQ04sOERBQUNKLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxPQUFPO2tDQUNuQlYsSUFBSSxDQUFDYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtpREFDcEIsOERBQUNsQix1REFBSTtnQ0FBQ0UsSUFBSSxFQUFFZ0IsSUFBSTsrQkFBT0EsSUFBSSxDQUFDQyxFQUFFOzs7O3NDQUFJO3lCQUNuQyxDQUFDOzs7Ozs2QkFDRTs7Ozs7O3FCQUNGO1lBQ0xYLGdCQUFnQixJQUFJTixJQUFJLENBQUNJLGFBQWEsQ0FBQ1csR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3FDQUM5Qyw4REFBQ25CLDJEQUFNO29CQUFDRyxJQUFJLEVBQUVnQixJQUFJO21CQUFPQSxJQUFJLENBQUNDLEVBQUU7Ozs7MEJBQUk7YUFDckMsQ0FBQzs7b0JBQ0QsQ0FDSDtDQUNILENBQUM7R0EvQldsQixHQUFHO0FBQUhBLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvUm93L2luZGV4LnRzeD9kNzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5vdGVzSWNvbiB9IGZyb20gJ2Fzc2V0cy9pbWFnZXMvTm90ZXNJY29uJztcblxuaW1wb3J0IHsgSVJvd1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9UYWJsZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJSb3cgfSBmcm9tICdjb21wb25lbnRzL1RhYmxlL1N1YlJvdyc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnY29tcG9uZW50cy9UYWJsZS9DZWxsJztcblxuZXhwb3J0IGNvbnN0IFJvdyA9ICh7IGRhdGEgfTogSVJvd1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbaXNEcm9wZG93blNob3duLCBzZXRJc0Ryb3Bkb3duU2hvd25dPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaXNTdWJDYXRlZ29yaWVzID0gISFkYXRhPy5zdWJDYXRlZ29yaWVzLmxlbmd0aDtcbiAgY29uc3Qgc2hvdWxkU2hvd1N1YlJvdyA9IGlzU3ViQ2F0ZWdvcmllcyAmJiBpc0Ryb3Bkb3duU2hvd247XG5cbiAgY29uc3QgaGFuZGxlRHJvcGRvd25TaG93ID0gKCkgPT4ge1xuICAgIGlmICghaXNTdWJDYXRlZ29yaWVzKSByZXR1cm47XG4gICAgc2V0SXNEcm9wZG93blNob3duKHByZXYgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlRHJvcGRvd25TaG93fSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxOb3Rlc0ljb24gLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsc1wiPlxuICAgICAgICAgIHtkYXRhLnJlcG9ydHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPENlbGwgZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3VsZFNob3dTdWJSb3cgJiYgZGF0YS5zdWJDYXRlZ29yaWVzLm1hcChpdGVtID0+IChcbiAgICAgICAgPFN1YlJvdyBkYXRhPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5vdGVzSWNvbiIsIlN1YlJvdyIsIkNlbGwiLCJSb3ciLCJkYXRhIiwiaXNEcm9wZG93blNob3duIiwic2V0SXNEcm9wZG93blNob3duIiwiaXNTdWJDYXRlZ29yaWVzIiwic3ViQ2F0ZWdvcmllcyIsImxlbmd0aCIsInNob3VsZFNob3dTdWJSb3ciLCJoYW5kbGVEcm9wZG93blNob3ciLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iLCJuYW1lIiwicmVwb3J0cyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table/Row/index.tsx\n");

/***/ })

});