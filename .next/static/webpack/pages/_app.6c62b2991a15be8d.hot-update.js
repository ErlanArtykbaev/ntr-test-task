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

/***/ "./src/store/data/effects.ts":
/*!***********************************!*\
  !*** ./src/store/data/effects.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var store_data_enpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/data/enpoints */ \"./src/store/data/enpoints.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/store/data/actions.ts\");\n\nvar _marked = _Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(Saga);\nvar _marked1 = _Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(getData);\n\n\n\nvar fakeRequest = new Promise(function(res) {\n    res(store_data_enpoints__WEBPACK_IMPORTED_MODULE_2__.categoryResponse);\n});\nfunction getData() {\n    var response, data;\n    return _Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getData$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.prev = 0;\n                _ctx.next = 3;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(fakeRequest);\n            case 3:\n                response = _ctx.sent;\n                data = response.data;\n                _ctx.next = 7;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_3__.getDataSuccess)(data));\n            case 7:\n                _ctx.next = 13;\n                break;\n            case 9:\n                _ctx.prev = 9;\n                _ctx.t0 = _ctx[\"catch\"](0);\n                _ctx.next = 13;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_3__.getDataFailure)(_ctx.t0));\n            case 13:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked1, null, [\n        [\n            0,\n            9\n        ]\n    ]);\n}\nfunction Saga() {\n    return _Users_macbookpro_Documents_workdir_Avengers_test_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function Saga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([\n                    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_actions__WEBPACK_IMPORTED_MODULE_3__.GET_DATA_REQUEST, getData), \n                ]);\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Saga);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZGF0YS9lZmZlY3RzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2lMQWdDVUEsSUFBSTtrTEFkSkMsT0FBTztBQWxCaUQ7QUFNWDtBQUlwQztBQUluQixJQUFNUyxXQUFXLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7SUFDckNBLEdBQUcsQ0FBQ04saUVBQWdCLENBQUMsQ0FBQztDQUN2QixDQUFDO0FBRUYsU0FBVUwsT0FBTyxHQUFjO1FBS3JCWSxRQUFRLEVBQ05DLElBQUk7dUxBTk5iLFFBQU87Ozs7O3VCQUtVRyx3REFBSSxDQUFDTSxXQUFXLENBQUM7O2dCQUFsQ0csUUFBUSxZQUEwQjtnQkFDbEMsSUFBTSxHQUFLQSxRQUFRLENBQWpCQyxJQUFJLENBQWdEOzt1QkFDdERULHVEQUFHLENBQUNHLHdEQUFjLENBQUNNLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozt1QkFHekJULHVEQUFHLENBQUNJLHdEQUFjLFNBQXFCLENBQUM7Ozs7Ozs7Ozs7O0NBRWpEO0FBRUQsU0FBVVQsSUFBSSxHQUFjO3VMQUFsQkEsS0FBSTs7Ozt1QkFDTkUsdURBQUcsQ0FBQztvQkFDUkMsOERBQVUsQ0FBQ0ksc0RBQWdCLEVBQUVOLE9BQU8sQ0FBQztpQkFDdEMsQ0FBQzs7Ozs7O0NBQ0g7QUFFRCwrREFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9kYXRhL2VmZmVjdHMudHM/ODQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gJ2FwaS9pbmRleCc7XG5pbXBvcnQgeyBBcGlVcmxzIH0gZnJvbSAnYXBpL2FwaVVybHMnO1xuXG5pbXBvcnQgeyBjYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnc3RvcmUvZGF0YS9lbnBvaW50cyc7XG5cbmltcG9ydCB7XG4gIEdFVF9EQVRBX1JFUVVFU1QsIGdldERhdGFTdWNjZXNzLCBnZXREYXRhRmFpbHVyZSxcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IFREYXRhUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzJztcblxuXG5jb25zdCBmYWtlUmVxdWVzdCA9IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gIHJlcyhjYXRlZ29yeVJlc3BvbnNlKTtcbn0pO1xuXG5mdW5jdGlvbiogZ2V0RGF0YSgpOiBHZW5lcmF0b3Ige1xuICB0cnkge1xuICAgIC8vIHJlYWwgcmVxdWVzdCBzaG91bGQgYmUgbGlrZSB0aGlzXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHJlcXVlc3QuZ2V0LCBBcGlVcmxzLmRhdGEpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGZha2VSZXF1ZXN0KTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlIGFzIEF4aW9zUmVzcG9uc2U8VERhdGFSZXNwb25zZVtdPjtcbiAgICB5aWVsZCBwdXQoZ2V0RGF0YVN1Y2Nlc3MoZGF0YSkpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGdldERhdGFGYWlsdXJlKGVycm9yIGFzIEF4aW9zRXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogU2FnYSgpOiBHZW5lcmF0b3Ige1xuICB5aWVsZCBhbGwoW1xuICAgIHRha2VMYXRlc3QoR0VUX0RBVEFfUkVRVUVTVCwgZ2V0RGF0YSksXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTYWdhO1xuIl0sIm5hbWVzIjpbIlNhZ2EiLCJnZXREYXRhIiwiYWxsIiwidGFrZUxhdGVzdCIsImNhbGwiLCJwdXQiLCJjYXRlZ29yeVJlc3BvbnNlIiwiR0VUX0RBVEFfUkVRVUVTVCIsImdldERhdGFTdWNjZXNzIiwiZ2V0RGF0YUZhaWx1cmUiLCJmYWtlUmVxdWVzdCIsIlByb21pc2UiLCJyZXMiLCJyZXNwb25zZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/data/effects.ts\n");

/***/ })

});