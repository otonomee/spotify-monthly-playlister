"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_Clock_Coffee_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Clock,Coffee!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/coffee.js\");\n/* harmony import */ var _barrel_optimize_names_Clock_Coffee_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Clock,Coffee!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clock.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [currentMonthTracks, setCurrentMonthTracks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleSpotifyLogin = ()=>{\n        window.location.href = \"http://localhost:3000/auth/login\";\n    };\n    const handleDonate = ()=>{\n        window.open(\"https://ko-fi.com/your-username\", \"_blank\");\n    };\n    const fetchCurrentMonthTracks = async ()=>{\n        try {\n            const response = await fetch(\"/api/current-month-tracks\");\n            if (response.ok) {\n                const data = await response.json();\n                setCurrentMonthTracks(data.tracks);\n            }\n        } catch (error) {\n            console.error(\"Error fetching tracks:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            fetchCurrentMonthTracks();\n        }\n    }[\"Page.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"border-b\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex h-16 items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl font-semibold\",\n                                children: \"Spotify Time Capsule\"\n                            }, void 0, false, {\n                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: handleDonate,\n                                        variant: \"outline\",\n                                        className: \"flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Clock_Coffee_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                className: \"w-4 h-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, this),\n                                            \"Support Project\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: handleSpotifyLogin,\n                                        className: \"bg-green-500 hover:bg-green-600 text-white\",\n                                        children: \"Connect Spotify\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4 py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-2xl mx-auto text-center mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold mb-4\",\n                                children: \"Your Monthly Music Time Capsule\"\n                            }, void 0, false, {\n                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-muted-foreground text-lg\",\n                                children: \"Automatically creates a playlist of every song you listen to each month. Never lose track of what you've discovered.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"max-w-3xl mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                                className: \"flex flex-row items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                                children: \"November 2024 Playlist\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm text-muted-foreground mt-1\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Clock_Coffee_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        className: \"w-4 h-4 inline mr-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    \"Updated in real-time as you listen\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        variant: \"secondary\",\n                                        className: \"ml-4\",\n                                        children: \"Open in Spotify\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"animate-pulse space-y-4\",\n                                    children: [\n                                        ...Array(5)\n                                    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-12 bg-muted rounded\"\n                                        }, i, false, {\n                                            fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this) : currentMonthTracks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-4\",\n                                    children: currentMonthTracks.map((track)=>{\n                                        var _track_album;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors\",\n                                            children: [\n                                                ((_track_album = track.album) === null || _track_album === void 0 ? void 0 : _track_album.images[2]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    src: track.album.images[2].url,\n                                                    alt: \"Album art\",\n                                                    width: 48,\n                                                    height: 48,\n                                                    className: \"rounded\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 48\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex-grow\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"font-medium\",\n                                                            children: track.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-sm text-muted-foreground\",\n                                                            children: track.artist\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 21\n                                                }, this),\n                                                track.played_at && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                                    className: \"text-xs text-muted-foreground\",\n                                                    children: new Date(track.played_at).toLocaleTimeString([], {\n                                                        hour: \"2-digit\",\n                                                        minute: \"2-digit\"\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, track.id, true, {\n                                            fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center py-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-muted-foreground mb-2\",\n                                            children: \"No tracks in this month's playlist yet\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-muted-foreground\",\n                                            children: \"Connect your Spotify account to start archiving your music\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/austin/Documents/Dev/spotify-time-capsule/client/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"/4pzhLSW3VQeJeBVFqIUZdlEtg8=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUk7b0RBQVlDLE9BQU87b0RBQUlDLFFBQVE7b0RBQUlwQixXQUFVOzs7Ozs7OERBQ25ILDhEQUFDRDtvREFBSUMsV0FBVTs7c0VBQ2IsOERBQUNPOzREQUFFUCxXQUFVO3NFQUFlYSxNQUFNUSxJQUFJOzs7Ozs7c0VBQ3RDLDhEQUFDZDs0REFBRVAsV0FBVTtzRUFBaUNhLE1BQU1TLE1BQU07Ozs7Ozs7Ozs7OztnREFFM0RULE1BQU1VLFNBQVMsa0JBQ2QsOERBQUNDO29EQUFLeEIsV0FBVTs4REFDYixJQUFJeUIsS0FBS1osTUFBTVUsU0FBUyxFQUFFRyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7d0RBQ2hEQyxNQUFNO3dEQUNOQyxRQUFRO29EQUNWOzs7Ozs7OzJDQVhJZixNQUFNZ0IsRUFBRTs7Ozs7Ozs7Ozt5REFrQnRCLDhEQUFDOUI7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FBRVAsV0FBVTtzREFBNkI7Ozs7OztzREFDMUMsOERBQUNPOzRDQUFFUCxXQUFVO3NEQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0Q7R0E1R3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdXN0aW4vRG9jdW1lbnRzL0Rldi9zcG90aWZ5LXRpbWUtY2Fwc3VsZS9jbGllbnQvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQ29mZmVlLCBDbG9jayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW50ZXJmYWNlIFRyYWNrIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhcnRpc3Q6IHN0cmluZztcbiAgcGxheWVkX2F0Pzogc3RyaW5nO1xuICBhbGJ1bT86IHtcbiAgICBpbWFnZXM6IHsgdXJsOiBzdHJpbmcgfVtdO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbY3VycmVudE1vbnRoVHJhY2tzLCBzZXRDdXJyZW50TW9udGhUcmFja3NdID0gdXNlU3RhdGU8VHJhY2tbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlU3BvdGlmeUxvZ2luID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9sb2dpblwiO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvbmF0ZSA9ICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8va28tZmkuY29tL3lvdXItdXNlcm5hbWVcIiwgXCJfYmxhbmtcIik7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hDdXJyZW50TW9udGhUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2N1cnJlbnQtbW9udGgtdHJhY2tzXCIpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldEN1cnJlbnRNb250aFRyYWNrcyhkYXRhLnRyYWNrcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0cmFja3M6XCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEN1cnJlbnRNb250aFRyYWNrcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5TcG90aWZ5IFRpbWUgQ2Fwc3VsZTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRG9uYXRlfSB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPENvZmZlZSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICBTdXBwb3J0IFByb2plY3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3BvdGlmeUxvZ2lufSBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICBDb25uZWN0IFNwb3RpZnlcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gdGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Zb3VyIE1vbnRobHkgTXVzaWMgVGltZSBDYXBzdWxlPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgQXV0b21hdGljYWxseSBjcmVhdGVzIGEgcGxheWxpc3Qgb2YgZXZlcnkgc29uZyB5b3UgbGlzdGVuIHRvIGVhY2ggbW9udGguIE5ldmVyIGxvc2UgdHJhY2sgb2Ygd2hhdCB5b3UndmUgZGlzY292ZXJlZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPk5vdmVtYmVyIDIwMjQgUGxheWxpc3Q8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMVwiPlxuICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTQgaC00IGlubGluZSBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICBVcGRhdGVkIGluIHJlYWwtdGltZSBhcyB5b3UgbGlzdGVuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgICBPcGVuIGluIFNwb3RpZnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2Ugc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAge1suLi5BcnJheSg1KV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaC0xMiBiZy1tdXRlZCByb3VuZGVkXCIgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogY3VycmVudE1vbnRoVHJhY2tzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRNb250aFRyYWNrcy5tYXAoKHRyYWNrKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dHJhY2suaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtMyByb3VuZGVkLWxnIGhvdmVyOmJnLW11dGVkLzUwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0cmFjay5hbGJ1bT8uaW1hZ2VzWzJdICYmIDxJbWFnZSBzcmM9e3RyYWNrLmFsYnVtLmltYWdlc1syXS51cmx9IGFsdD1cIkFsYnVtIGFydFwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gY2xhc3NOYW1lPVwicm91bmRlZFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3RyYWNrLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3RyYWNrLmFydGlzdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dHJhY2sucGxheWVkX2F0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHRyYWNrLnBsYXllZF9hdCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTJcIj5ObyB0cmFja3MgaW4gdGhpcyBtb250aCZhcG9zO3MgcGxheWxpc3QgeWV0PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+Q29ubmVjdCB5b3VyIFNwb3RpZnkgYWNjb3VudCB0byBzdGFydCBhcmNoaXZpbmcgeW91ciBtdXNpYzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkltYWdlIiwiQ29mZmVlIiwiQ2xvY2siLCJQYWdlIiwiY3VycmVudE1vbnRoVHJhY2tzIiwic2V0Q3VycmVudE1vbnRoVHJhY2tzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3BvdGlmeUxvZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlRG9uYXRlIiwib3BlbiIsImZldGNoQ3VycmVudE1vbnRoVHJhY2tzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJ0cmFja3MiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJoMSIsIm9uQ2xpY2siLCJ2YXJpYW50IiwibWFpbiIsImgyIiwicCIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJsZW5ndGgiLCJ0cmFjayIsImFsYnVtIiwiaW1hZ2VzIiwic3JjIiwidXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwiYXJ0aXN0IiwicGxheWVkX2F0IiwidGltZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});