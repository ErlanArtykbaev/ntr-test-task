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

/***/ "./src/components/Drawer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Drawer/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drawer\": function() { return /* binding */ Drawer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_data_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/data/selectors */ \"./src/store/data/selectors.ts\");\n/* harmony import */ var store_data_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/data/actions */ \"./src/store/data/actions.ts\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Drawer = function() {\n    var _this1 = _this;\n    _s();\n    var isDrawerShown = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(store_data_selectors__WEBPACK_IMPORTED_MODULE_4__.makeSelectIsDrawerShown);\n    var detailInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(store_data_selectors__WEBPACK_IMPORTED_MODULE_4__.makeSelectDataDetailInfo);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var handleClose = function() {\n        dispatch((0,store_data_actions__WEBPACK_IMPORTED_MODULE_5__.setDrawer)(false));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"drawer\", {\n            \"shown\": isDrawerShown\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Office Supplies & Software\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content_header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"reports\",\n                        children: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.transactionsList.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"report\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"titles\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"date\",\n                                                children: item.date\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"company\",\n                                                children: item.companyName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"transaction\",\n                                                children: item.transactionType\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"value\",\n                                        children: item.value\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Drawer, \"EY1UW6QcH61QJaenpQXM0r4roEY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Drawer;\nvar _c;\n$RefreshReg$(_c, \"Drawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EcmF3ZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDNkI7QUFDM0I7QUFFNkQ7QUFDMUM7O0FBRXhDLElBQU1PLE1BQU0sR0FBRyxXQUFtQjs7O0lBQ3ZDLElBQU1DLGFBQWEsR0FBR04sd0RBQVcsQ0FBQ0cseUVBQXVCLENBQUM7SUFDMUQsSUFBTUksVUFBVSxHQUFHUCx3REFBVyxDQUFDRSwwRUFBd0IsQ0FBQztJQUV4RCxJQUFNTSxRQUFRLEdBQUdULHdEQUFXLEVBQUU7SUFFOUIsSUFBTVUsV0FBVyxHQUFHLFdBQU07UUFDeEJELFFBQVEsQ0FBQ0osNkRBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQscUJBQ0UsOERBQUNNLEtBQUc7UUFDRkMsU0FBUyxFQUFFVixpREFBRSxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLEVBQUVLLGFBQWE7U0FDdkIsQ0FBQzs7MEJBRUYsOERBQUNJLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROztrQ0FDckIsOERBQUNELEtBQUc7a0NBQUMsNEJBQTBCOzs7Ozs2QkFBTTtrQ0FDckMsOERBQUNBLEtBQUc7a0NBQ0YsNEVBQUNBLEtBQUc7Ozs7aUNBQU87Ozs7OzZCQUNQOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOztrQ0FDdEIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7OzBDQUM3Qiw4REFBQ0MsTUFBSTs7OztxQ0FBUTswQ0FDYiw4REFBQ0EsTUFBSTs7OztxQ0FBUTs7Ozs7OzZCQUNUO2tDQUNOLDhEQUFDRixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsU0FBUztrQ0FDckJKLFVBQVUsYUFBVkEsVUFBVSxXQUFrQixHQUE1QkEsS0FBQUEsQ0FBNEIsR0FBNUJBLFVBQVUsQ0FBRU0sZ0JBQWdCLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtpREFDcEMsOERBQUNMLEtBQUc7Z0NBQWVDLFNBQVMsRUFBQyxRQUFROztrREFDbkMsOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxRQUFROzswREFDckIsOERBQUNELEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxNQUFNOzBEQUFFSSxJQUFJLENBQUNDLElBQUk7Ozs7O3NEQUFPOzBEQUN2Qyw4REFBQ04sS0FBRztnREFBQ0MsU0FBUyxFQUFDLFNBQVM7MERBQUVJLElBQUksQ0FBQ0UsV0FBVzs7Ozs7c0RBQU87MERBQ2pELDhEQUFDUCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsYUFBYTswREFBRUksSUFBSSxDQUFDRyxlQUFlOzs7OztzREFBTzs7Ozs7OzhDQUNyRDtrREFDTiw4REFBQ1IsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLE9BQU87a0RBQUVJLElBQUksQ0FBQ0ksS0FBSzs7Ozs7OENBQU87OytCQU5qQ0osSUFBSSxDQUFDSyxFQUFFOzs7O3NDQU9YO3lCQUNQLENBQUM7Ozs7OzZCQUNFOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSCxDQUFDO0dBMUNXZixNQUFNOztRQUNLTCxvREFBVztRQUNkQSxvREFBVztRQUViRCxvREFBVzs7O0FBSmpCTSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYXdlci9pbmRleC50c3g/NjEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgeyBtYWtlU2VsZWN0RGF0YURldGFpbEluZm8sIG1ha2VTZWxlY3RJc0RyYXdlclNob3duIH0gZnJvbSAnc3RvcmUvZGF0YS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0RHJhd2VyIH0gZnJvbSAnc3RvcmUvZGF0YS9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IERyYXdlciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IGlzRHJhd2VyU2hvd24gPSB1c2VTZWxlY3RvcihtYWtlU2VsZWN0SXNEcmF3ZXJTaG93bik7XG4gIGNvbnN0IGRldGFpbEluZm8gPSB1c2VTZWxlY3RvcihtYWtlU2VsZWN0RGF0YURldGFpbEluZm8pO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXREcmF3ZXIoZmFsc2UpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oJ2RyYXdlcicsIHtcbiAgICAgICAgJ3Nob3duJzogaXNEcmF3ZXJTaG93blxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdj5PZmZpY2UgU3VwcGxpZXMgJiBTb2Z0d2FyZTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2hlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydHNcIj5cbiAgICAgICAgICB7ZGV0YWlsSW5mbz8udHJhbnNhY3Rpb25zTGlzdC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwicmVwb3J0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+e2l0ZW0uZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj57aXRlbS5jb21wYW55TmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zYWN0aW9uXCI+e2l0ZW0udHJhbnNhY3Rpb25UeXBlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpdGVtLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNuIiwibWFrZVNlbGVjdERhdGFEZXRhaWxJbmZvIiwibWFrZVNlbGVjdElzRHJhd2VyU2hvd24iLCJzZXREcmF3ZXIiLCJEcmF3ZXIiLCJpc0RyYXdlclNob3duIiwiZGV0YWlsSW5mbyIsImRpc3BhdGNoIiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidHJhbnNhY3Rpb25zTGlzdCIsIm1hcCIsIml0ZW0iLCJkYXRlIiwiY29tcGFueU5hbWUiLCJ0cmFuc2FjdGlvblR5cGUiLCJ2YWx1ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Drawer/index.tsx\n");

/***/ })

});