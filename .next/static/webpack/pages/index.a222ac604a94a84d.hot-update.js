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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Drawer\": function() { return /* binding */ Drawer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_data_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/data/selectors */ \"./src/store/data/selectors.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Drawer = function() {\n    var _this1 = _this;\n    _s();\n    var isDrawerShown = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(store_data_selectors__WEBPACK_IMPORTED_MODULE_4__.makeSelectIsDrawerShown);\n    var detailInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(store_data_selectors__WEBPACK_IMPORTED_MODULE_4__.makeSelectDataDetailInfo);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"drawer\", {\n            \"shown\": isDrawerShown\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Office Supplies \"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content_header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"reports\",\n                        children: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.transactionsList.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"report\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"titles\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"date\",\n                                                children: item.date\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"company\",\n                                                children: item.companyName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"transaction\",\n                                                children: item.transactionType\n                                            }, void 0, false, {\n                                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"value\",\n                                        children: item.value\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/workdir/Avengers/test-front/src/components/Drawer/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Drawer, \"EY1UW6QcH61QJaenpQXM0r4roEY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Drawer;\nvar _c;\n$RefreshReg$(_c, \"Drawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EcmF3ZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUM2QjtBQUMzQjtBQUU2RDs7QUFFbEYsSUFBTU0sTUFBTSxHQUFHLFdBQW1COzs7SUFDdkMsSUFBTUMsYUFBYSxHQUFHTCx3REFBVyxDQUFDRyx5RUFBdUIsQ0FBQztJQUMxRCxJQUFNRyxVQUFVLEdBQUdOLHdEQUFXLENBQUNFLDBFQUF3QixDQUFDO0lBRXhELElBQU1LLFFBQVEsR0FBR1Isd0RBQVcsRUFBRTtJQUU5QixxQkFDRSw4REFBQ1MsS0FBRztRQUNGQyxTQUFTLEVBQUVSLGlEQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sRUFBRUksYUFBYTtTQUN2QixDQUFDOzswQkFFRiw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFFBQVE7MEJBQ3JCLDRFQUFDRCxLQUFHOzhCQUFDLGtCQUFnQjs7Ozs7eUJBQU07Ozs7O3FCQUN2QjswQkFDTiw4REFBQ0EsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFNBQVM7O2tDQUN0Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjs7MENBQzdCLDhEQUFDQyxNQUFJOzs7O3FDQUFROzBDQUNiLDhEQUFDQSxNQUFJOzs7O3FDQUFROzs7Ozs7NkJBQ1Q7a0NBQ04sOERBQUNGLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxTQUFTO2tDQUNyQkgsVUFBVSxhQUFWQSxVQUFVLFdBQWtCLEdBQTVCQSxLQUFBQSxDQUE0QixHQUE1QkEsVUFBVSxDQUFFSyxnQkFBZ0IsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO2lEQUNwQyw4REFBQ0wsS0FBRztnQ0FBZUMsU0FBUyxFQUFDLFFBQVE7O2tEQUNuQyw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLFFBQVE7OzBEQUNyQiw4REFBQ0QsS0FBRztnREFBQ0MsU0FBUyxFQUFDLE1BQU07MERBQUVJLElBQUksQ0FBQ0MsSUFBSTs7Ozs7c0RBQU87MERBQ3ZDLDhEQUFDTixLQUFHO2dEQUFDQyxTQUFTLEVBQUMsU0FBUzswREFBRUksSUFBSSxDQUFDRSxXQUFXOzs7OztzREFBTzswREFDakQsOERBQUNQLEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxhQUFhOzBEQUFFSSxJQUFJLENBQUNHLGVBQWU7Ozs7O3NEQUFPOzs7Ozs7OENBQ3JEO2tEQUNOLDhEQUFDUixLQUFHO3dDQUFDQyxTQUFTLEVBQUMsT0FBTztrREFBRUksSUFBSSxDQUFDSSxLQUFLOzs7Ozs4Q0FBTzs7K0JBTmpDSixJQUFJLENBQUNLLEVBQUU7Ozs7c0NBT1g7eUJBQ1AsQ0FBQzs7Ozs7NkJBQ0U7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNILENBQUM7R0FuQ1dkLE1BQU07O1FBQ0tKLG9EQUFXO1FBQ2RBLG9EQUFXO1FBRWJELG9EQUFXOzs7QUFKakJLLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJhd2VyL2luZGV4LnRzeD82MTBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB7IG1ha2VTZWxlY3REYXRhRGV0YWlsSW5mbywgbWFrZVNlbGVjdElzRHJhd2VyU2hvd24gfSBmcm9tICdzdG9yZS9kYXRhL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBEcmF3ZXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBpc0RyYXdlclNob3duID0gdXNlU2VsZWN0b3IobWFrZVNlbGVjdElzRHJhd2VyU2hvd24pO1xuICBjb25zdCBkZXRhaWxJbmZvID0gdXNlU2VsZWN0b3IobWFrZVNlbGVjdERhdGFEZXRhaWxJbmZvKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NuKCdkcmF3ZXInLCB7XG4gICAgICAgICdzaG93bic6IGlzRHJhd2VyU2hvd25cbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXY+T2ZmaWNlIFN1cHBsaWVzIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2hlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydHNcIj5cbiAgICAgICAgICB7ZGV0YWlsSW5mbz8udHJhbnNhY3Rpb25zTGlzdC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwicmVwb3J0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+e2l0ZW0uZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj57aXRlbS5jb21wYW55TmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zYWN0aW9uXCI+e2l0ZW0udHJhbnNhY3Rpb25UeXBlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpdGVtLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNuIiwibWFrZVNlbGVjdERhdGFEZXRhaWxJbmZvIiwibWFrZVNlbGVjdElzRHJhd2VyU2hvd24iLCJEcmF3ZXIiLCJpc0RyYXdlclNob3duIiwiZGV0YWlsSW5mbyIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInRyYW5zYWN0aW9uc0xpc3QiLCJtYXAiLCJpdGVtIiwiZGF0ZSIsImNvbXBhbnlOYW1lIiwidHJhbnNhY3Rpb25UeXBlIiwidmFsdWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Drawer/index.tsx\n");

/***/ })

});