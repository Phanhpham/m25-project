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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/cart.service */ \"(app-pages-browser)/./services/cart.service.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n\nconst cartState = [];\nconst cartReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"carts\",\n    initialState: {\n        cart: cartState,\n        totalPrice: 0\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.getCartPrdouctById.fulfilled, (state, action)=>{\n            state.cart = action.payload;\n        }).addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.addToCart.fulfilled, (state, action)=>{\n            state.cart.push(action.payload);\n        }).addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.updateCart.fulfilled, (state, action)=>{\n            const cartIndex = state.cart.findIndex((item)=>item.id === action.payload.id);\n            if (cartIndex !== -1) {\n                state.cart[cartIndex].product.stock = action.payload.product.stock;\n            }\n        }).addCase(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.updateProductStock.fulfilled, (state, action)=>{\n            const { id, stock } = action.payload;\n            const productUpdate = state.cart.find((cart)=>cart.id = id);\n            if (productUpdate) {\n                state.totalPrice -= productUpdate.product.price * productUpdate.product.stock;\n                productUpdate.product.stock;\n            }\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartReducer.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3Jlcy9yZWR1Y2Vycy9jYXJ0UmVkdWNlci50cyIsIm1hcHBpbmdzIjoiOzs7QUFDd0c7QUFDekQ7QUFFL0MsTUFBTUssWUFBb0IsRUFBRTtBQUU1QixNQUFNQyxjQUFjRiw2REFBV0EsQ0FBQztJQUM1QkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLE1BQU1KO1FBQ05LLFlBQVk7SUFDaEI7SUFDQUMsVUFBVSxDQUFDO0lBQ1hDLGVBQWUsQ0FBQ0M7UUFDWkEsUUFBUUMsT0FBTyxDQUFDYixzRUFBa0JBLENBQUNjLFNBQVMsRUFBRSxDQUFDQyxPQUFPQztZQUNsREQsTUFBTVAsSUFBSSxHQUFHUSxPQUFPQyxPQUFPO1FBQy9CLEdBQ0NKLE9BQU8sQ0FBQ2QsNkRBQVNBLENBQUNlLFNBQVMsRUFBRSxDQUFDQyxPQUFPQztZQUNsQ0QsTUFBTVAsSUFBSSxDQUFDVSxJQUFJLENBQUNGLE9BQU9DLE9BQU87UUFDbEMsR0FDQ0osT0FBTyxDQUFDWiw4REFBVUEsQ0FBQ2EsU0FBUyxFQUFFLENBQUNDLE9BQU9DO1lBQ25DLE1BQU1HLFlBQVlKLE1BQU1QLElBQUksQ0FBQ1ksU0FBUyxDQUFDLENBQUNDLE9BQWVBLEtBQUtDLEVBQUUsS0FBS04sT0FBT0MsT0FBTyxDQUFDSyxFQUFFO1lBQ3BGLElBQUdILGNBQWMsQ0FBQyxHQUFFO2dCQUNoQkosTUFBTVAsSUFBSSxDQUFDVyxVQUFVLENBQUNJLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHUixPQUFPQyxPQUFPLENBQUNNLE9BQU8sQ0FBQ0MsS0FBSztZQUN0RTtRQUNKLEdBQ0NYLE9BQU8sQ0FBQ1gsc0VBQWtCQSxDQUFDWSxTQUFTLEVBQUUsQ0FBQ0MsT0FBT0M7WUFDM0MsTUFBTSxFQUFDTSxFQUFFLEVBQUVFLEtBQUssRUFBQyxHQUFHUixPQUFPQyxPQUFPO1lBQ2xDLE1BQU1RLGdCQUFnQlYsTUFBTVAsSUFBSSxDQUFDa0IsSUFBSSxDQUFDLENBQUNsQixPQUFlQSxLQUFLYyxFQUFFLEdBQUdBO1lBQ2hFLElBQUdHLGVBQWM7Z0JBQ2JWLE1BQU1OLFVBQVUsSUFBSWdCLGNBQWNGLE9BQU8sQ0FBQ0ksS0FBSyxHQUFHRixjQUFjRixPQUFPLENBQUNDLEtBQUs7Z0JBQzdFQyxjQUFjRixPQUFPLENBQUNDLEtBQUs7WUFDL0I7UUFDSjtJQUNKO0FBQ0o7QUFFQSwrREFBZW5CLFlBQVl1QixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3Jlcy9yZWR1Y2Vycy9jYXJ0UmVkdWNlci50cz85ZDVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQgfSBmcm9tIFwiQC9pbnRlcmZhY2UvcHJvZHVjdFwiO1xuaW1wb3J0IHsgYWRkVG9DYXJ0LCBnZXRDYXJ0UHJkb3VjdEJ5SWQsIHVwZGF0ZUNhcnQsIHVwZGF0ZVByb2R1Y3RTdG9jayB9IGZyb20gXCJAL3NlcnZpY2VzL2NhcnQuc2VydmljZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBjYXJ0U3RhdGU6IENhcnRbXSA9IFtdO1xuXG5jb25zdCBjYXJ0UmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcImNhcnRzXCIsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIGNhcnQ6IGNhcnRTdGF0ZSxcbiAgICAgICAgdG90YWxQcmljZTogMFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRDYXJ0UHJkb3VjdEJ5SWQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFkZFRvQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5jYXJ0LnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKHVwZGF0ZUNhcnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FydEluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoKGl0ZW06IENhcnQpID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbiAgICAgICAgICAgIGlmKGNhcnRJbmRleCAhPT0gLTEpe1xuICAgICAgICAgICAgICAgIHN0YXRlLmNhcnRbY2FydEluZGV4XS5wcm9kdWN0LnN0b2NrID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zdG9ja1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZSh1cGRhdGVQcm9kdWN0U3RvY2suZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2lkLCBzdG9ja30gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RVcGRhdGUgPSBzdGF0ZS5jYXJ0LmZpbmQoKGNhcnQ6IENhcnQpID0+IGNhcnQuaWQgPSBpZCk7XG4gICAgICAgICAgICBpZihwcm9kdWN0VXBkYXRlKXtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3RhbFByaWNlIC09IHByb2R1Y3RVcGRhdGUucHJvZHVjdC5wcmljZSAqIHByb2R1Y3RVcGRhdGUucHJvZHVjdC5zdG9jaztcbiAgICAgICAgICAgICAgICBwcm9kdWN0VXBkYXRlLnByb2R1Y3Quc3RvY2sgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2FydFJlZHVjZXIucmVkdWNlciJdLCJuYW1lcyI6WyJhZGRUb0NhcnQiLCJnZXRDYXJ0UHJkb3VjdEJ5SWQiLCJ1cGRhdGVDYXJ0IiwidXBkYXRlUHJvZHVjdFN0b2NrIiwiY3JlYXRlU2xpY2UiLCJjYXJ0U3RhdGUiLCJjYXJ0UmVkdWNlciIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwidG90YWxQcmljZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicHVzaCIsImNhcnRJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsInByb2R1Y3QiLCJzdG9jayIsInByb2R1Y3RVcGRhdGUiLCJmaW5kIiwicHJpY2UiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./stores/reducers/cartReducer.ts\n"));

/***/ })

});