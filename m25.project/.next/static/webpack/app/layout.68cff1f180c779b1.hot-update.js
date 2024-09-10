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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/product.service */ \"(app-pages-browser)/./services/product.service.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n\n// sap xep \nconst productState = [];\nconst productReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"product\",\n    initialState: {\n        product: productState\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.sortProduct.fulfilled, (state, action)=>{\n            state.product = action.payload;\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.getAllProduct.fulfilled, (state, action)=>{\n            state.product = action.payload;\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.addProduct.fulfilled, (state, action)=>{\n            state.product.push(action.payload);\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.deleteProduct.fulfilled, (state, action)=>{\n            state.product = state.product.filter((items)=>items.id !== action.payload);\n        }).addCase(_services_product_service__WEBPACK_IMPORTED_MODULE_0__.updateProduct.fulfilled, (state, action)=>{\n            let index = state.product.findIndex((product)=>{\n                return product.id === action.payload.id;\n            });\n            if (index !== -1) {}\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productReducer.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3Jlcy9yZWR1Y2Vycy9wcm9kdWN0UmVkdWNlci50cyIsIm1hcHBpbmdzIjoiOzs7QUFDa0g7QUFDbkU7QUFHL0MsV0FBVztBQUNYLE1BQU1NLGVBQXdCLEVBQUU7QUFFaEMsTUFBTUMsaUJBQWdCRiw2REFBV0EsQ0FBQztJQUM5QkcsTUFBSztJQUNMQyxjQUFhO1FBQ1RDLFNBQVFKO0lBQ1o7SUFDQUssVUFBUyxDQUFDO0lBQ1ZDLGVBQWMsQ0FBQ0M7UUFDWEEsUUFBUUMsT0FBTyxDQUFDWCxrRUFBV0EsQ0FBQ1ksU0FBUyxFQUFDLENBQUNDLE9BQU1DO1lBQ3pDRCxNQUFNTixPQUFPLEdBQUNPLE9BQU9DLE9BQU87UUFDaEMsR0FDQ0osT0FBTyxDQUFDWixvRUFBYUEsQ0FBQ2EsU0FBUyxFQUFDLENBQUNDLE9BQU1DO1lBQ3BDRCxNQUFNTixPQUFPLEdBQUNPLE9BQU9DLE9BQU87UUFDaEMsR0FDQ0osT0FBTyxDQUFDZCxpRUFBVUEsQ0FBQ2UsU0FBUyxFQUFDLENBQUNDLE9BQU1DO1lBQ2pDRCxNQUFNTixPQUFPLENBQUNTLElBQUksQ0FBQ0YsT0FBT0MsT0FBTztRQUNyQyxHQUNDSixPQUFPLENBQUNiLG9FQUFhQSxDQUFDYyxTQUFTLEVBQUMsQ0FBQ0MsT0FBTUM7WUFDcENELE1BQU1OLE9BQU8sR0FBQ00sTUFBTU4sT0FBTyxDQUFDVSxNQUFNLENBQUMsQ0FBQ0MsUUFBWUEsTUFBTUMsRUFBRSxLQUFLTCxPQUFPQyxPQUFPO1FBQy9FLEdBQ0NKLE9BQU8sQ0FBQ1Ysb0VBQWFBLENBQUNXLFNBQVMsRUFBQyxDQUFDQyxPQUFNQztZQUN2QyxJQUFJTSxRQUFPUCxNQUFNTixPQUFPLENBQUNjLFNBQVMsQ0FBQyxDQUFDZDtnQkFBZSxPQUFPQSxRQUFRWSxFQUFFLEtBQUdMLE9BQU9DLE9BQU8sQ0FBQ0ksRUFBRTtZQUFBO1lBQ3hGLElBQUlDLFVBQVUsQ0FBQyxHQUFFLENBQUM7UUFDbkI7SUFDSjtBQUNKO0FBQ0EsK0RBQWVoQixlQUFla0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZXMvcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXIudHM/MmU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvaW50ZXJmYWNlL3Byb2R1Y3RcIjtcbmltcG9ydCB7IGFkZFByb2R1Y3QsIGRlbGV0ZVByb2R1Y3QsIGdldEFsbFByb2R1Y3QsIHNvcnRQcm9kdWN0LCB1cGRhdGVQcm9kdWN0IH0gZnJvbSBcIkAvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cblxuLy8gc2FwIHhlcCBcbmNvbnN0IHByb2R1Y3RTdGF0ZTpQcm9kdWN0W10gPVtdXG5cbmNvbnN0IHByb2R1Y3RSZWR1Y2VyID1jcmVhdGVTbGljZSh7XG4gICAgbmFtZTpcInByb2R1Y3RcIixcbiAgICBpbml0aWFsU3RhdGU6e1xuICAgICAgICBwcm9kdWN0OnByb2R1Y3RTdGF0ZSxcbiAgICB9LFxuICAgIHJlZHVjZXJzOnt9LFxuICAgIGV4dHJhUmVkdWNlcnM6KGJ1aWxkZXIpPT57XG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShzb3J0UHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3Q9YWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZ2V0QWxsUHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3Q9YWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoYWRkUHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3QucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZGVsZXRlUHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3Q9c3RhdGUucHJvZHVjdC5maWx0ZXIoKGl0ZW1zOmFueSk9Pml0ZW1zLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UodXBkYXRlUHJvZHVjdC5mdWxmaWxsZWQsKHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgIGxldCBpbmRleCA9c3RhdGUucHJvZHVjdC5maW5kSW5kZXgoKHByb2R1Y3Q6YW55KT0+e3JldHVybiBwcm9kdWN0LmlkPT09YWN0aW9uLnBheWxvYWQuaWR9KVxuICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7fVxuICAgICAgICB9KVxuICAgIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0UmVkdWNlci5yZWR1Y2VyIl0sIm5hbWVzIjpbImFkZFByb2R1Y3QiLCJkZWxldGVQcm9kdWN0IiwiZ2V0QWxsUHJvZHVjdCIsInNvcnRQcm9kdWN0IiwidXBkYXRlUHJvZHVjdCIsImNyZWF0ZVNsaWNlIiwicHJvZHVjdFN0YXRlIiwicHJvZHVjdFJlZHVjZXIiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdCIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicHVzaCIsImZpbHRlciIsIml0ZW1zIiwiaWQiLCJpbmRleCIsImZpbmRJbmRleCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./stores/reducers/productReducer.ts\n"));

/***/ })

});