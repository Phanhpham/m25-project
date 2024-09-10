"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./stores/reducers/productReducer.ts":
/*!*******************************************!*\
  !*** ./stores/reducers/productReducer.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/product.service */ \"(app-pages-browser)/./services/product.service.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n\n// sap xep \nconst productState = [];\nconst productReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"product\",\n    initialState: {\n        product: productState\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.sortProduct.fulfilled, (state, action)=>{\n            state.product = action.payload;\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.getAllProduct.fulfilled, (state, action)=>{\n            state.product = action.payload;\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.addProduct.fulfilled, (state, action)=>{\n            state.product.push(action.payload);\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.deleteProduct.fulfilled, (state, action)=>{\n            state.product = state.product.filter((items)=>items.id);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productReducer.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3Jlcy9yZWR1Y2Vycy9wcm9kdWN0UmVkdWNlci50cyIsIm1hcHBpbmdzIjoiOzs7QUFDbUc7QUFDcEQ7QUFHL0MsV0FBVztBQUNYLE1BQU1LLGVBQXdCLEVBQUU7QUFFaEMsTUFBTUMsaUJBQWdCRiw2REFBV0EsQ0FBQztJQUM5QkcsTUFBSztJQUNMQyxjQUFhO1FBQ1RDLFNBQVFKO0lBQ1o7SUFDQUssVUFBUyxDQUFDO0lBQ1ZDLGVBQWMsQ0FBQ0M7UUFDWEEsUUFBUUMsT0FBTyxDQUFDVixrRUFBV0EsQ0FBQ1csU0FBUyxFQUFDLENBQUNDLE9BQU1DO1lBQ3pDRCxNQUFNTixPQUFPLEdBQUNPLE9BQU9DLE9BQU87UUFDaEMsR0FDQ0osT0FBTyxDQUFDWCxvRUFBYUEsQ0FBQ1ksU0FBUyxFQUFDLENBQUNDLE9BQU1DO1lBQ3BDRCxNQUFNTixPQUFPLEdBQUNPLE9BQU9DLE9BQU87UUFDaEMsR0FDQ0osT0FBTyxDQUFDYixpRUFBVUEsQ0FBQ2MsU0FBUyxFQUFDLENBQUNDLE9BQU1DO1lBQ2pDRCxNQUFNTixPQUFPLENBQUNTLElBQUksQ0FBQ0YsT0FBT0MsT0FBTztRQUNyQyxHQUNDSixPQUFPLENBQUNaLG9FQUFhQSxDQUFDYSxTQUFTLEVBQUMsQ0FBQ0MsT0FBTUM7WUFDcENELE1BQU1OLE9BQU8sR0FBQ00sTUFBTU4sT0FBTyxDQUFDVSxNQUFNLENBQUMsQ0FBQ0MsUUFBWUEsTUFBTUMsRUFBRTtRQUM1RDtJQUNKO0FBQ0o7QUFDQSwrREFBZWYsZUFBZWdCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3JlZHVjZXJzL3Byb2R1Y3RSZWR1Y2VyLnRzPzJlNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL2ludGVyZmFjZS9wcm9kdWN0XCI7XG5pbXBvcnQgeyBhZGRQcm9kdWN0LCBkZWxldGVQcm9kdWN0LCBnZXRBbGxQcm9kdWN0LCBzb3J0UHJvZHVjdCB9IGZyb20gXCJAL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5cbi8vIHNhcCB4ZXAgXG5jb25zdCBwcm9kdWN0U3RhdGU6UHJvZHVjdFtdID1bXVxuXG5jb25zdCBwcm9kdWN0UmVkdWNlciA9Y3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6XCJwcm9kdWN0XCIsXG4gICAgaW5pdGlhbFN0YXRlOntcbiAgICAgICAgcHJvZHVjdDpwcm9kdWN0U3RhdGUsXG4gICAgfSxcbiAgICByZWR1Y2Vyczp7fSxcbiAgICBleHRyYVJlZHVjZXJzOihidWlsZGVyKT0+e1xuICAgICAgICBidWlsZGVyLmFkZENhc2Uoc29ydFByb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0PWFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGdldEFsbFByb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0PWFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFkZFByb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0LnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGRlbGV0ZVByb2R1Y3QuZnVsZmlsbGVkLChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0PXN0YXRlLnByb2R1Y3QuZmlsdGVyKChpdGVtczphbnkpPT5pdGVtcy5pZCApXG4gICAgICAgIH0pXG4gICAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyLnJlZHVjZXIiXSwibmFtZXMiOlsiYWRkUHJvZHVjdCIsImRlbGV0ZVByb2R1Y3QiLCJnZXRBbGxQcm9kdWN0Iiwic29ydFByb2R1Y3QiLCJjcmVhdGVTbGljZSIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3RSZWR1Y2VyIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3QiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImZ1bGZpbGxlZCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInB1c2giLCJmaWx0ZXIiLCJpdGVtcyIsImlkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./stores/reducers/productReducer.ts\n"));

/***/ })

});