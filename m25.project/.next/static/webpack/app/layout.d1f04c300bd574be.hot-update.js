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

/***/ "(app-pages-browser)/./stores/reducers/cartReducer.ts":
/*!****************************************!*\
  !*** ./stores/reducers/cartReducer.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/cart.service */ \"(app-pages-browser)/./services/cart.service.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n\nconst cartState = [];\nconst cartReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"carts\",\n    initialState: {\n        cart: cartState\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.getCartPrdouctById.fulfilled, (state, action)=>{\n            state.cart = action.payload;\n        }).addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.addToCart.fulfilled, (state, action)=>{\n            state.cart.push(action.payload);\n        }).addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.updateCart.fulfilled, (state, action)=>{\n            const cartIndex = state.cart.findIndex((item)=>item.id === action.payload.id);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartReducer.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3Jlcy9yZWR1Y2Vycy9jYXJ0UmVkdWNlci50cyIsIm1hcHBpbmdzIjoiOzs7QUFDb0Y7QUFDckM7QUFFL0MsTUFBTUksWUFBb0IsRUFBRTtBQUU1QixNQUFNQyxjQUFjRiw2REFBV0EsQ0FBQztJQUM1QkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLE1BQU1KO0lBQ1Y7SUFDQUssVUFBVSxDQUFDO0lBQ1hDLGVBQWUsQ0FBQ0M7UUFDWkEsUUFBUUMsT0FBTyxDQUFDWCxzRUFBa0JBLENBQUNZLFNBQVMsRUFBRSxDQUFDQyxPQUFPQztZQUNsREQsTUFBTU4sSUFBSSxHQUFHTyxPQUFPQyxPQUFPO1FBQy9CLEdBQ0NKLE9BQU8sQ0FBQ1osNkRBQVNBLENBQUNhLFNBQVMsRUFBRSxDQUFDQyxPQUFPQztZQUNsQ0QsTUFBTU4sSUFBSSxDQUFDUyxJQUFJLENBQUNGLE9BQU9DLE9BQU87UUFDbEMsR0FDQ0osT0FBTyxDQUFDViw4REFBVUEsQ0FBQ1csU0FBUyxFQUFFLENBQUNDLE9BQU9DO1lBQ25DLE1BQU1HLFlBQVlKLE1BQU1OLElBQUksQ0FBQ1csU0FBUyxDQUFDLENBQUNDLE9BQWVBLEtBQUtDLEVBQUUsS0FBS04sT0FBT0MsT0FBTyxDQUFDSyxFQUFFO1FBQ3hGO0lBQ0o7QUFDSjtBQUVBLCtEQUFlaEIsWUFBWWlCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLnRzPzlkNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gXCJAL2ludGVyZmFjZS9wcm9kdWN0XCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQsIGdldENhcnRQcmRvdWN0QnlJZCwgdXBkYXRlQ2FydCB9IGZyb20gXCJAL3NlcnZpY2VzL2NhcnQuc2VydmljZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBjYXJ0U3RhdGU6IENhcnRbXSA9IFtdO1xuXG5jb25zdCBjYXJ0UmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcImNhcnRzXCIsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIGNhcnQ6IGNhcnRTdGF0ZSxcbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7fSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyLmFkZENhc2UoZ2V0Q2FydFByZG91Y3RCeUlkLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZShhZGRUb0NhcnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuY2FydC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZSh1cGRhdGVDYXJ0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRJbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KChpdGVtOiBDYXJ0KSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0UmVkdWNlci5yZWR1Y2VyIl0sIm5hbWVzIjpbImFkZFRvQ2FydCIsImdldENhcnRQcmRvdWN0QnlJZCIsInVwZGF0ZUNhcnQiLCJjcmVhdGVTbGljZSIsImNhcnRTdGF0ZSIsImNhcnRSZWR1Y2VyIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImZ1bGZpbGxlZCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInB1c2giLCJjYXJ0SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./stores/reducers/cartReducer.ts\n"));

/***/ })

});