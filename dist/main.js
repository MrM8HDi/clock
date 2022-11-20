/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/winter-landscape.jpg */ \"./src/images/winter-landscape.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/stars.jpg */ \"./src/images/stars.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    --marker-small: 3px;\\r\\n    --marker-large: 11px;\\r\\n    --primary-light: #8abdff;\\r\\n    --primary: #6d5dfc;\\r\\n    --primary-dark: #5b0eeb;\\r\\n    --white: #FFFFFF;\\r\\n    --greyLight-1: #E4EBF5;\\r\\n    --greyLight-2: #c8d0e7;\\r\\n    --greyLight-3: #bec8e4;\\r\\n    --greyDark: #9baacf;\\r\\n    --stopwatch-hand-color: #95bd12;\\r\\n\\r\\n    --cd-lighter: #f9fbfd;\\r\\n    --cd-light: #dfe6f6;\\r\\n    --cd-bg: #C4D2EF;\\r\\n    --cd-dark: #a9bee8;\\r\\n    --cd-primary: #3e6ccb;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background: linear-gradient(to right, #bbb, #999);\\r\\n    background-size: cover;\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    background: #00000020;\\r\\n    backdrop-filter: blur(100px);\\r\\n    height: 500px;\\r\\n    position: absolute;\\r\\n    left: 50%;\\r\\n    top: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    padding: 10px;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.pages {\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.page {\\r\\n    height: 100%;\\r\\n    width: 600px;\\r\\n    background: #00000050;\\r\\n    margin: 0 10px 0 10px;\\r\\n    border-radius: 20px;\\r\\n    transition: width 0.5s ease;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n/* fix buttons avoiding activating page bug */\\r\\n.page:not(.active) * {\\r\\n    pointer-events: none;\\r\\n}\\r\\n\\r\\n.page:not(.active) {\\r\\n    cursor: pointer;\\r\\n    width: 70px;\\r\\n}\\r\\n\\r\\n.page:not(.active) .wrapper {\\r\\n    transform: scale(0.75);\\r\\n}\\r\\n\\r\\n.page:not(.active)#clock-page {\\r\\n    background-size: auto 80%;\\r\\n    background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    width: 600px;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    padding: 15px;\\r\\n    box-sizing: border-box;\\r\\n    transition: transform 1.5s;\\r\\n}\\r\\n\\r\\n#clock-page {\\r\\n    background-size: auto 100%;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-position: center center;\\r\\n    background-blend-mode: lighten;\\r\\n    background-color: #e4ebf5;\\r\\n    box-sizing: border-box;\\r\\n    transition: background-size 1.5s, width 0.5s;\\r\\n}\\r\\n\\r\\n/*  CLOCK  */\\r\\n.clock {\\r\\n    margin: auto;\\r\\n    width: 12rem;\\r\\n    height: 12rem;\\r\\n    justify-self: center;\\r\\n    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\\r\\n    border-radius: 50%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.clock .hand {\\r\\n    position: absolute;\\r\\n    transform-origin: bottom;\\r\\n    bottom: 6rem;\\r\\n    border-radius: 0.2rem;\\r\\n    z-index: 200;\\r\\n}\\r\\n\\r\\n.clock .hours {\\r\\n    width: 0.4rem;\\r\\n    height: 3.2rem;\\r\\n    background: var(--greyLight-3);\\r\\n}\\r\\n\\r\\n.clock .minutes {\\r\\n    width: 0.4rem;\\r\\n    height: 4.6rem;\\r\\n    background: var(--greyDark);\\r\\n}\\r\\n\\r\\n.clock .seconds {\\r\\n    width: 0.2rem;\\r\\n    height: 5.2rem;\\r\\n    background: var(--primary);\\r\\n}\\r\\n\\r\\n.clock .point {\\r\\n    position: absolute;\\r\\n    width: 0.8rem;\\r\\n    height: 0.8rem;\\r\\n    border-radius: 50%;\\r\\n    background: var(--primary);\\r\\n    z-index: 300;\\r\\n}\\r\\n\\r\\n.clock .marker {\\r\\n    width: 95%;\\r\\n    height: 95%;\\r\\n    border-radius: 50%;\\r\\n    position: relative;\\r\\n    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2), inset -0.2rem -0.2rem 0.5rem var(--white);\\r\\n}\\r\\n\\r\\n.clock .marker::after {\\r\\n    content: \\\"\\\";\\r\\n    width: 60%;\\r\\n    height: 60%;\\r\\n    position: absolute;\\r\\n    box-shadow: inset 1px 1px 1px var(--greyLight-2), inset -1px -1px 1px var(--white);\\r\\n    border-radius: 50%;\\r\\n    top: 20%;\\r\\n    left: 20%;\\r\\n    filter: blur(1px);\\r\\n}\\r\\n\\r\\n.clock .marker__1,\\r\\n.clock .marker__2,\\r\\n.clock .marker__3,\\r\\n.clock .marker__4 {\\r\\n    position: absolute;\\r\\n    border-radius: 0.1rem;\\r\\n    box-shadow: inset 1px 1px 1px var(--greyLight-2), inset -1px -1px 1px var(--white);\\r\\n}\\r\\n\\r\\n.clock .marker__1,\\r\\n.clock .marker__2 {\\r\\n    width: 0.2rem;\\r\\n    height: 0.6rem;\\r\\n    left: 5.6rem;\\r\\n}\\r\\n\\r\\n.clock .marker__3,\\r\\n.clock .marker__4 {\\r\\n    width: 0.6rem;\\r\\n    height: 0.2rem;\\r\\n    top: 5.6rem;\\r\\n}\\r\\n\\r\\n.clock .marker__1 {\\r\\n    top: 2%;\\r\\n}\\r\\n\\r\\n.clock .marker__2 {\\r\\n    top: 98%;\\r\\n    transform: translateY(-0.6rem);\\r\\n}\\r\\n\\r\\n.clock .marker__3 {\\r\\n    left: 2%;\\r\\n}\\r\\n\\r\\n.clock .marker__4 {\\r\\n    left: 98%;\\r\\n    transform: translateX(-0.6rem);\\r\\n}\\r\\n\\r\\n.months {\\r\\n    margin-top: 25px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.clock-text {\\r\\n    color: var(--primary);\\r\\n    font-size: 1.5rem;\\r\\n    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\\r\\n    padding: 10px 20px;\\r\\n    border-radius: 15px;\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n.clock-date {\\r\\n    margin: auto;\\r\\n    margin-top: 25px;\\r\\n    width: fit-content;\\r\\n}\\r\\n\\r\\n.clock-hour-text {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-top: 25px;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.ampm {\\r\\n    color: var(--primary);\\r\\n    font-size: 1.5rem;\\r\\n    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\\r\\n    padding: 10px 7px;\\r\\n    border-radius: 50%;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    box-sizing: border-box;\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n.timezone {\\r\\n    margin: auto;\\r\\n    margin-top: 40px;\\r\\n    width: fit-content;\\r\\n    opacity: 0.5;\\r\\n}\\r\\n\\r\\n.weekdays {\\r\\n    margin-top: 25px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    gap: 15px;\\r\\n}\\r\\n\\r\\n#clock-page .button {\\r\\n    box-shadow: inset 1px 1px 1px var(--greyLight-2), inset -1px -1px 1px var(--white);\\r\\n    padding: 5px 15px;\\r\\n    color: var(--greyDark);\\r\\n    font-family: sans-serif;\\r\\n    border-radius: 10px;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#clock-page .button.active {\\r\\n    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\\r\\n    padding: 5px 15px;\\r\\n    color: var(--primary-dark);\\r\\n    font-family: sans-serif;\\r\\n    border-radius: 10px;\\r\\n    cursor: pointer;\\r\\n    background: #ffffff;\\r\\n}\\r\\n\\r\\n#clock-page .button.active:active {\\r\\n    box-shadow: inset 1px 1px 1px var(--greyLight-2), inset -1px -1px 1px var(--white);\\r\\n    padding: 5px 15px;\\r\\n    color: var(--primary-dark);\\r\\n    font-family: sans-serif;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n#stopwatch-page {\\r\\n    background-color: #2e3c49;\\r\\n    background-image: linear-gradient(to bottom, rgba(61, 79, 95, 0.85) 0%, rgba(27, 36, 45, 0.85) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-position: center center;\\r\\n    background-size: auto 120%;\\r\\n    position: relative;\\r\\n    transition: background-size 1.5s, width 0.5s;\\r\\n    background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.page:not(.active)#stopwatch-page {\\r\\n    background-size: auto 100%;\\r\\n}\\r\\n\\r\\n.stopwatch {\\r\\n    width: 220px;\\r\\n    height: 220px;\\r\\n    background: white;\\r\\n    border: 15px solid #283441;\\r\\n    position: absolute;\\r\\n    left: 50%;\\r\\n    top: 50%;\\r\\n    transform: translate(-50%, -80%);\\r\\n    border-radius: 50%;\\r\\n    transition: transform 0.4s;\\r\\n}\\r\\n\\r\\n.stopwatch:active {\\r\\n    transform: translate(-50%, -80%) scale(0.9);\\r\\n}\\r\\n\\r\\n.stopwatch .half-sec {\\r\\n    width: 1px;\\r\\n    height: 10px;\\r\\n    background: #7e7e7e;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n.stopwatch-hand {\\r\\n    width: 45px;\\r\\n    height: 145px;\\r\\n    clip-path: polygon(60% 92%, 50% 95%, 40% 92%, 47% 8%, 53% 8%);\\r\\n    background: var(--stopwatch-hand-color);\\r\\n    position: absolute;\\r\\n    left: 40%;\\r\\n    top: -3.1%;\\r\\n    transform-origin: 50% 81%;\\r\\n    transform: rotate(0deg);\\r\\n    z-index: 2;\\r\\n}\\r\\n\\r\\n.stopwatch-center {\\r\\n    width: 15px;\\r\\n    height: 15px;\\r\\n    border-radius: 50%;\\r\\n    border: 2px solid var(--stopwatch-hand-color);\\r\\n    position: absolute;\\r\\n    background: white;\\r\\n    left: 50%;\\r\\n    top: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    z-index: 3;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers {\\r\\n    color: #7e7e7e;\\r\\n    position: absolute;\\r\\n    font-size: 0.7rem;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.five {\\r\\n    left: 64%;\\r\\n    top: 19%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.ten {\\r\\n    left: 73%;\\r\\n    top: 30%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.fifteen {\\r\\n    left: 78%;\\r\\n    top: 46%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.twenty {\\r\\n    left: 73%;\\r\\n    top: 62%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.twenty-five {\\r\\n    left: 64%;\\r\\n    top: 74%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.thirty {\\r\\n    left: 47%;\\r\\n    top: 80%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.thirty-five {\\r\\n    left: 30%;\\r\\n    top: 74%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.fourty {\\r\\n    left: 21%;\\r\\n    top: 62%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.fourty-five {\\r\\n    left: 16%;\\r\\n    top: 46%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.fifty {\\r\\n    left: 21%;\\r\\n    top: 30%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.fifty-five {\\r\\n    left: 30%;\\r\\n    top: 19%;\\r\\n}\\r\\n\\r\\n.stopwatch-numbers.sixty {\\r\\n    left: 47%;\\r\\n    top: 15%;\\r\\n}\\r\\n\\r\\n.stopwatch-bottom {\\r\\n    position: absolute;\\r\\n    top: 65%;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.stopwatch-timer {\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n    font-size: 2.5rem;\\r\\n    font-weight: 100;\\r\\n    font-family: 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\n.stopwatch-controls {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    gap: 20px;\\r\\n    font-size: 1.8rem;\\r\\n    color: white;\\r\\n    position: relative;\\r\\n    width: 120px;\\r\\n    margin: auto;\\r\\n    margin-top: 30px;\\r\\n    transition: 0.15s;\\r\\n    background: #00000050;\\r\\n    padding: 10px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.stopwatch-controls[data-need-reset=\\\"false\\\"] .fa-rotate-right {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n.stopwatch-controls[data-need-reset=\\\"false\\\"] {\\r\\n    width: 20px;\\r\\n}\\r\\n\\r\\n.stopwatch-controls i {\\r\\n    cursor: pointer;\\r\\n    transition: transform 0.1s ease-out;\\r\\n}\\r\\n\\r\\n.stopwatch-controls i:active {\\r\\n    transform: scale(0.9);\\r\\n}\\r\\n\\r\\n.stopwatch-controls[data-status=\\\"paused\\\"] .fa-pause {\\r\\n    opacity: 0;\\r\\n    pointer-events: none;\\r\\n}\\r\\n\\r\\n.stopwatch-controls[data-status=\\\"started\\\"] .fa-play {\\r\\n    opacity: 0;\\r\\n    pointer-events: none;\\r\\n}\\r\\n\\r\\n.playpause {\\r\\n    position: absolute;\\r\\n    left: 10px;\\r\\n    transition: transform 0.3s ease, opacity 0.3s ease !important;\\r\\n}\\r\\n\\r\\n.reset-animation {\\r\\n    transform: rotate(0deg);\\r\\n    transition: 0.3s cubic-bezier(0.71, 2, 0.71, 0.63);\\r\\n}\\r\\n\\r\\n#countdown-page {\\r\\n    background: linear-gradient(-45deg, #c4d2ef, #dfe6f6);\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.cd-columns {\\r\\n    position: absolute;\\r\\n    left: 50%;\\r\\n    top: 105%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.cd-columns .hour,\\r\\n.cd-columns .minute,\\r\\n.cd-columns .second {\\r\\n    display: flex;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\n.cd-columns .col {\\r\\n    margin: 0 15px;\\r\\n    background-color: var(--cd-light);\\r\\n    width: 50px;\\r\\n    box-shadow: -5px -5px 20px #f9fbfd, 5px 5px 10px #a9bee8;\\r\\n    height: fit-content;\\r\\n    border-radius: 10px;\\r\\n    flex-direction: column-reverse;\\r\\n    transform: translateY(0px);\\r\\n    cursor: pointer;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.cd-columns .col .number {\\r\\n    display: inline-block;\\r\\n    color: var(--cd-lighter);\\r\\n    width: 70px;\\r\\n    height: 60px;\\r\\n    line-height: 60px;\\r\\n    text-align: center;\\r\\n    font-size: 2rem;\\r\\n    border-radius: 50%;\\r\\n    position: relative;\\r\\n    left: -10px;\\r\\n    pointer-events: none;\\r\\n}\\r\\n\\r\\n.cd-main-numbers {\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform:Translate(-50%, -50%);\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.cd-main-numbers .minute-tens {\\r\\n    margin-left: 40px;\\r\\n}\\r\\n\\r\\n.cd-main-numbers .minute-ones {\\r\\n    margin-right: 40px;\\r\\n}\\r\\n\\r\\n.cd-main-numbers .number {\\r\\n    background: #00000030;\\r\\n    background-color: var(--cd-light);\\r\\n    box-shadow: -5px -5px 20px #f9fbfd, 5px 5px 10px #a9bee8;\\r\\n    color: var(--cd-primary);\\r\\n    font-weight: bold;\\r\\n    font-size: 2.3rem;\\r\\n    width: 70px;\\r\\n    height: 70px;\\r\\n    line-height: 70px;\\r\\n    text-align: center;\\r\\n    border-radius: 50%;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.cd-controls {\\r\\n    position: absolute;\\r\\n    left: 50%;\\r\\n    top: 10%;\\r\\n    transform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n.cd-controls div {\\r\\n    background: #00000050;\\r\\n    padding: 10px 15px;\\r\\n    border-radius: 20px;\\r\\n    width: fit-content;\\r\\n    margin: auto;\\r\\n    cursor: pointer;\\r\\n    background-color: var(--cd-light);\\r\\n    box-shadow: -5px -5px 20px #f9fbfd, 5px 5px 10px #a9bee8;\\r\\n    display: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.cd-controls div:active {\\r\\n    transform: scale(0.95);\\r\\n}\\r\\n\\r\\n.cd-controls .cd-start {\\r\\n    border: 2px solid rgb(23, 201, 23);\\r\\n}\\r\\n\\r\\n.cd-controls .cd-stop {\\r\\n    border: 2px solid rgb(201, 23, 23);\\r\\n}\\r\\n\\r\\n.cd-controls[data-status=\\\"started\\\"] .cd-stop {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.cd-controls[data-status=\\\"paused\\\"] .cd-start {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.cd-mid-columns {\\r\\n    font-size: 70px;\\r\\n    font-weight: bold;\\r\\n    font-family: 'Courier New', Courier, monospace;\\r\\n    color: var(--cd-primary);\\r\\n}\\r\\n\\r\\n.cd-mid-columns .column-1 {\\r\\n    position: absolute;\\r\\n    left: 180px;\\r\\n    top:210px;\\r\\n}\\r\\n\\r\\n.cd-mid-columns .column-2 {\\r\\n    position: absolute;\\r\\n    left: 380px;\\r\\n    top:210px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clockmanager.js":
/*!*****************************!*\
  !*** ./src/clockmanager.js ***!
  \*****************************/
/***/ (() => {

eval("class ClockManager {\r\n    hours;\r\n    minutes;\r\n    seconds;\r\n    dateNode;\r\n    timeNode;\r\n    ampmNode;\r\n    timezoneNode;\r\n    currentDate;\r\n    constructor() {\r\n        this.hours = document.querySelector('.hours');\r\n        this.minutes = document.querySelector('.minutes');\r\n        this.seconds = document.querySelector('.seconds');\r\n        this.dateNode = document.querySelector(\".clock-text.clock-date\");\r\n        this.weekNodes = document.querySelectorAll(\".weekdays .weekday\");\r\n        this.timeNode = document.querySelector(\".clock-text.clock-hour\");\r\n        this.ampmNode = document.querySelector(\".clock-hour-text .ampm\");\r\n        this.timezoneNode = document.querySelector(\".clock-texts .timezone\");\r\n        this.currentDate = new Date();\r\n    }\r\n\r\n    clock = () => {\r\n        this.currentDate = new Date();\r\n        let h = (this.currentDate.getHours() % 12) + this.currentDate.getMinutes() / 59; // 22 % 12 = 10pm\r\n        let m = this.currentDate.getMinutes(); // 0 - 59\r\n        let s = this.currentDate.getSeconds(); // 0 - 59\r\n\r\n        h *= 30; // 12 * 30 = 360deg\r\n        m *= 6;\r\n        s *= 6; // 60 * 6 = 360deg\r\n\r\n        this.rotation(this.hours, h);\r\n        this.rotation(this.minutes, m);\r\n        this.rotation(this.seconds, s);\r\n\r\n        this.updateTexts();\r\n\r\n        // call every second\r\n        setTimeout(this.clock, 1000);\r\n    }\r\n\r\n    rotation(target, val) {\r\n        target.style.transform = `rotate(${val}deg)`;\r\n    }\r\n\r\n    updateTexts() {\r\n        this.updateDate();\r\n        this.updateWeek();\r\n        this.updateHour();\r\n        this.updateTimezone();\r\n    }\r\n\r\n    updateDate() {\r\n        const monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\r\n            \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"\r\n        ];\r\n        const monthName = monthNames[this.currentDate.getMonth()];\r\n        const monthDay = this.currentDate.getDate();\r\n        const year = this.currentDate.getFullYear();\r\n        const dateStr = `${monthDay} ${monthName}, ${year}`;\r\n\r\n        this.dateNode.innerHTML = dateStr;\r\n    }\r\n\r\n    updateWeek() {\r\n        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n        const dayName = days[this.currentDate.getDay()];\r\n\r\n        this.weekNodes.forEach(weekNode => {\r\n            if(weekNode.classList.contains(dayName.toLowerCase())) {\r\n                weekNode.classList.add(\"active\");\r\n            }\r\n        })\r\n    }\r\n\r\n    updateHour() {\r\n        let hour = this.currentDate.getHours().toLocaleString(\"en-US\", {\r\n            minimumIntegerDigits: 2,\r\n            useGrouping: false\r\n        });\r\n        const minute = this.currentDate.getMinutes().toLocaleString(\"en-US\", {\r\n            minimumIntegerDigits: 2,\r\n            useGrouping: false\r\n        });\r\n        const second = this.currentDate.getSeconds().toLocaleString(\"en-US\", {\r\n            minimumIntegerDigits: 2,\r\n            useGrouping: false\r\n        });\r\n        const ampm = hour >= 12 ? \"PM\" : \"AM\";\r\n        hour = hour > 12 ? hour - 12 : hour;\r\n\r\n        const timeStr = `${hour}:${minute}:${second}`;\r\n\r\n        this.timeNode.innerHTML = timeStr;\r\n        this.ampmNode.innerHTML = ampm;\r\n    }\r\n\r\n    updateTimezone() {\r\n        const str = this.currentDate.toString().split(\" \").splice(5, 4).join(\" \").replace(\"(\", \"\").replace(\")\", \"\");\r\n        this.timezoneNode.innerHTML = str;\r\n    }\r\n}\r\n\r\nlet clockManager = new ClockManager();\r\nclockManager.clock();\n\n//# sourceURL=webpack://my-webpack-project/./src/clockmanager.js?");

/***/ }),

/***/ "./src/countdownmanager.js":
/*!*********************************!*\
  !*** ./src/countdownmanager.js ***!
  \*********************************/
/***/ (() => {

eval("class CountdownManager {\r\n    constructor() {\r\n        this._dragging = false;\r\n        this.clickPoint;\r\n        this.defaultTranslate = 0;\r\n        this.draggingNode;\r\n        this._numbersHeight = 60;\r\n        this._extraGap = -5;\r\n        this._interval;\r\n        this._initNodes();\r\n        this._initListeners();\r\n    }\r\n\r\n    _initNodes() {\r\n        this._mainNumbers = document.querySelectorAll(\".cd-main-numbers .number\");\r\n        this._cdCols = document.querySelectorAll(\".cd-columns .col\");\r\n        this._hourTensCol = document.querySelector(\".cd-columns .hour .col:nth-child(1)\");\r\n        this._hourOnesCol = document.querySelector(\".cd-columns .hour .col:nth-child(2)\");\r\n        this._minuteTensCol = document.querySelector(\".cd-columns .minute .col:nth-child(1)\");\r\n        this._minuteOnesCol = document.querySelector(\".cd-columns .minute .col:nth-child(2)\");\r\n        this._secondTensCol = document.querySelector(\".cd-columns .second .col:nth-child(1)\");\r\n        this._secondOnesCol = document.querySelector(\".cd-columns .second .col:nth-child(2)\");\r\n        this.cdControls = document.querySelector(\".cd-controls\");\r\n    }\r\n\r\n    _initListeners() { \r\n        this._cdCols.forEach(column => {\r\n            column.addEventListener(\"mousedown\", e => {\r\n                if (e.target === column)\r\n                    this._mouseDownHandler(e);\r\n            })\r\n        });\r\n\r\n        document.addEventListener(\"mouseup\", e => {\r\n            if (!this._dragging) return;\r\n            this._mouseUpHandler(e);\r\n        })\r\n\r\n        document.addEventListener(\"mousemove\", e => {\r\n            this._mouseMoveHandler(e);\r\n        })\r\n\r\n        document.querySelector(\".cd-controls .cd-start\").addEventListener(\"click\", e => {\r\n            this.start();\r\n        });\r\n\r\n        document.querySelector(\".cd-controls .cd-stop\").addEventListener(\"click\", e => {\r\n            this.stop();\r\n        });\r\n    }\r\n\r\n    _mouseDownHandler(e) {\r\n        this.clickPoint = {\r\n            x: e.screenX,\r\n            y: e.screenY,\r\n        }\r\n        this._dragging = true;\r\n        this.draggingNode = e.target;\r\n\r\n        if (this.draggingNode.style.transform === \"\") {\r\n            this.defaultTranslate = 0;\r\n        } else {\r\n            this.defaultTranslate = this._convertNumToTranslate(this._getNumberFromColumn(this.draggingNode));\r\n        }\r\n    }\r\n\r\n    _mouseMoveHandler(e) {\r\n        // only handle if Dragging is enabled\r\n        if (!this._dragging) return;\r\n\r\n        // calculate drag amounts\r\n        const dragAmount = e.screenY - this.clickPoint.y;\r\n        let finalTranslate = this.defaultTranslate + dragAmount;\r\n\r\n        // lock at 0\r\n        if (finalTranslate > 0) finalTranslate = 0;\r\n\r\n        // lock at maximum number\r\n        const amountOfNumbers = this.draggingNode.children.length - 1;\r\n        const maximumTranslate = -amountOfNumbers * this._numbersHeight - this._extraGap;\r\n        if (finalTranslate < maximumTranslate) finalTranslate = maximumTranslate;\r\n\r\n        this.draggingNode.style.transform = `translateY(${finalTranslate}px)`;\r\n        this._updateNumberOnDraggingNode(false);\r\n    }\r\n\r\n    _mouseUpHandler(e) {\r\n        // disable dragging\r\n        this._dragging = false;\r\n        // amount of numbers on each column (hour-tens = 3, hour-ones = 10 etc)\r\n        this._updateNumberOnDraggingNode(true);\r\n        this._getCurrentTime();\r\n        if(this._timeData.hour > 23)\r\n            this._goToTimeFast(23, this._timeData.minute, this._timeData.second);\r\n    }\r\n\r\n    _updateNumberOnDraggingNode(updateCol = true) {\r\n        const number = this._getNumberFromColumn(this.draggingNode);\r\n\r\n        // change transform to closest with transition\r\n        if (updateCol)\r\n            this._translateToNumber(number);\r\n\r\n        // change main number\r\n        this._changeNumber(this.draggingNode, number);\r\n    }\r\n\r\n    _translateToNumber(number) {\r\n        this._translateColumnToNumber(this.draggingNode, number)\r\n    }\r\n\r\n    _translateColumnToNumber(col, number) {\r\n        const translate = this._convertNumToTranslate(number);\r\n        col.style.transition = `0.3s`;\r\n        col.style.transform = `translateY(${translate}px)`;\r\n        setTimeout(() => {\r\n            col.style.transition = `none`;\r\n        }, 350);\r\n    }\r\n\r\n    _changeNumber(column, number) {\r\n        const alternateMainNumber = document.querySelector(`.cd-main-numbers .${column.classList[1].replace(\"col-\", \"\")}`);\r\n        alternateMainNumber.innerHTML = number;\r\n    }\r\n\r\n    _getNumberFromTranslateString(string) {\r\n        return string.replace(\"translateY(\", \"\").replace(\"px)\", \"\");\r\n    }\r\n\r\n    _getClosest(number, array) {\r\n        let closest = array[0];\r\n        let diff = 1000000000000;\r\n        array.forEach(el => {\r\n            if (Math.abs(el - number) < diff) {\r\n                closest = el;\r\n                diff = Math.abs(el - number);\r\n            }\r\n        })\r\n        return closest;\r\n    }\r\n\r\n    _convertNumToTranslate(num) {\r\n        return -num * this._numbersHeight + this._extraGap;\r\n    }\r\n\r\n    _convertTranslateToNum(translate) {\r\n        return (translate - this._extraGap) / -60;\r\n    }\r\n\r\n    _getNumberFromColumn(col) {\r\n        const translate = this._getNumberFromTranslateString(col.style.transform);\r\n        const amountOfNumbers = col.children.length;\r\n        let arrayOfTranslates = [];\r\n        for (let i = 0; i < amountOfNumbers; i++) {\r\n            arrayOfTranslates.push(this._numbersHeight * -i - this._extraGap);\r\n        }\r\n\r\n        // get closest translate after mouse up\r\n        const closestTranslate = this._getClosest(translate, arrayOfTranslates);\r\n\r\n        return ((closestTranslate + this._extraGap) / -60);\r\n    }\r\n\r\n    _getCurrentTime() {\r\n        const hourTen = parseInt(this._mainNumbers[0].innerHTML);\r\n        const hourOne = parseInt(this._mainNumbers[1].innerHTML);\r\n        const minuteTen = parseInt(this._mainNumbers[2].innerHTML);\r\n        const minuteOne = parseInt(this._mainNumbers[3].innerHTML);\r\n        const secondTen = parseInt(this._mainNumbers[4].innerHTML);\r\n        const secondOne = parseInt(this._mainNumbers[5].innerHTML);\r\n\r\n        const hour = hourTen * 10 + hourOne;\r\n        const minute = minuteTen * 10 + minuteOne;\r\n        const second = secondTen * 10 + secondOne;\r\n\r\n        this._timeData = {\r\n            hourTen, hourOne, hour,\r\n            minuteTen, minuteOne, minute,\r\n            secondTen, secondOne, second,\r\n        }\r\n\r\n        return this._timeData;\r\n    }\r\n\r\n    _translateToColumnAndChangeNumber(col, number) {\r\n        this._translateColumnToNumber(col, number);\r\n        setTimeout(() => {\r\n            this._changeNumber(col, number);\r\n        }, 100);\r\n    }\r\n\r\n    _goToTimeFast(hour, minute, second) {\r\n        const hourTen = Math.floor(hour / 10);\r\n        const hourOne = Math.round((hour / 10 - Math.floor(hour / 10)) * 10);\r\n\r\n        const minuteTen = Math.floor(minute / 10);\r\n        const minuteOne = Math.round((minute / 10 - Math.floor(minute / 10)) * 10);\r\n\r\n        const secondTen = Math.floor(second / 10);\r\n        const secondOne = Math.round((second / 10 - Math.floor(second / 10)) * 10);\r\n        this._goToTime(hourTen, hourOne, minuteTen, minuteOne, secondTen, secondOne);\r\n    }\r\n\r\n    _goToTime(hourTen, hourOne, minuteTen, minuteOne, secondTen, secondOne) {\r\n        this._translateToColumnAndChangeNumber(this._hourTensCol, hourTen);\r\n        this._translateToColumnAndChangeNumber(this._hourOnesCol, hourOne);\r\n        this._translateToColumnAndChangeNumber(this._minuteTensCol, minuteTen);\r\n        this._translateToColumnAndChangeNumber(this._minuteOnesCol, minuteOne);\r\n        this._translateToColumnAndChangeNumber(this._secondTensCol, secondTen);\r\n        this._translateToColumnAndChangeNumber(this._secondOnesCol, secondOne);\r\n    }\r\n\r\n    _getTotalSeconds() {\r\n        let hour = this._timeData.hour;\r\n        let minute = this._timeData.minute;\r\n        let second = this._timeData.second;\r\n\r\n        return (hour * 60 * 60) + (minute * 60) + (second);\r\n    }\r\n\r\n    start() {\r\n        this._getCurrentTime();\r\n        if(this._getTotalSeconds() === 0) return;\r\n        this.cdControls.dataset.status = \"started\";\r\n\r\n        this._interval = setInterval(() => {\r\n            this._getCurrentTime();\r\n            let totalSecond = this._getTotalSeconds();\r\n            if (totalSecond > 0) {\r\n                totalSecond--;\r\n            } else {\r\n                this._cdFinished();\r\n            }\r\n\r\n            \r\n            let date = new Date(null);\r\n            date.setSeconds(totalSecond);\r\n            let hhmmssFormat = date.toISOString().substring(11, 19);\r\n\r\n            let hour = hhmmssFormat.split(\":\")[0];\r\n            let minute = hhmmssFormat.split(\":\")[1];\r\n            let second = hhmmssFormat.split(\":\")[2];\r\n            const hourTen = Math.floor(hour / 10);\r\n            const hourOne = Math.round((hour / 10 - Math.floor(hour / 10)) * 10);\r\n            const minuteTen = Math.floor(minute / 10);\r\n            const minuteOne = Math.round((minute / 10 - Math.floor(minute / 10)) * 10);\r\n            const secondTen = Math.floor(second / 10);\r\n            const secondOne = Math.round((second / 10 - Math.floor(second / 10)) * 10);\r\n\r\n            this._timeData = {\r\n                hourTen, hourOne, hour,\r\n                minuteTen, minuteOne, minute,\r\n                secondTen, secondOne, second,\r\n            }\r\n\r\n            this._goToTimeFast(this._timeData.hour, this._timeData.minute, this._timeData.second);\r\n\r\n        }, 1000);\r\n    }\r\n\r\n    stop() {\r\n        clearInterval(this._interval);\r\n        this.cdControls.dataset.status = \"paused\";\r\n    }\r\n\r\n    _cdFinished() {\r\n        clearInterval(this._interval);\r\n        this.cdControls.dataset.status = \"paused\";\r\n    }\r\n}\r\n\r\nconst countdownManager = new CountdownManager();\n\n//# sourceURL=webpack://my-webpack-project/./src/countdownmanager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pagemanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagemanager */ \"./src/pagemanager.js\");\n/* harmony import */ var _pagemanager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pagemanager__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clockmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clockmanager */ \"./src/clockmanager.js\");\n/* harmony import */ var _clockmanager__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clockmanager__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stopwatchmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwatchmanager */ \"./src/stopwatchmanager.js\");\n/* harmony import */ var _stopwatchmanager__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stopwatchmanager__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _countdownmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countdownmanager */ \"./src/countdownmanager.js\");\n/* harmony import */ var _countdownmanager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_countdownmanager__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/pagemanager.js":
/*!****************************!*\
  !*** ./src/pagemanager.js ***!
  \****************************/
/***/ (() => {

eval("class PageManager {\r\n    _pages;\r\n    activePage;\r\n    constructor() {\r\n        this._pages = Array.from(document.getElementsByClassName(\"page\"));\r\n        this._activePage = document.getElementsByClassName(\"page active\")[0];\r\n        this._addListeners();\r\n    }\r\n\r\n    activate(page) {\r\n        if(page.classList.contains(\"active\")) return;\r\n\r\n        this._activePage.classList.remove(\"active\");\r\n        page.classList.add(\"active\");\r\n        this._activePage = page;\r\n    }\r\n\r\n    _addListeners() {\r\n        this._pages.forEach(page => {\r\n            page.addEventListener(\"click\", e => {this._clickHandler(e)})\r\n        })\r\n    }\r\n\r\n    _clickHandler(e) {\r\n        if(e.target.classList.contains(\"page\") === false) return;\r\n        this.activate(e.target);\r\n    }\r\n}\r\n\r\nconst pageManager = new PageManager();\n\n//# sourceURL=webpack://my-webpack-project/./src/pagemanager.js?");

/***/ }),

/***/ "./src/stopwatchmanager.js":
/*!*********************************!*\
  !*** ./src/stopwatchmanager.js ***!
  \*********************************/
/***/ (() => {

eval("class StopWatchManager {\r\n    constructor() {\r\n        this.stopwatchNode = document.querySelector(\"#stopwatch-page .stopwatch\");\r\n        this.stopwatchRadius = 95;\r\n        this.stopwatchHandNode = document.querySelector(\"#stopwatch-page .stopwatch-hand\");\r\n        this.timerNode = document.querySelector(\"#stopwatch-page .stopwatch-timer\");\r\n        this.secondNodes = [];\r\n        this.startDate = undefined;\r\n        this._stopDate = undefined;\r\n        this._timer = {\r\n            hours: 0,\r\n            minutes: 0,\r\n            seconds: 0,\r\n            millis: 0,\r\n            totalMillis: 0,\r\n            formatted: \"00:00:00:00\",\r\n        };\r\n        this._interval;\r\n        this._initSecondNodes();\r\n        this._initListeners();\r\n    }\r\n\r\n    _initSecondNodes() {\r\n\r\n        for (let i = 0; i < 120; i++) {\r\n            const node = document.createElement(\"span\");\r\n            node.classList.add(\"half-sec\");\r\n            const posX = Math.cos(3 * (Math.PI/180) * i) * this.stopwatchRadius + this.stopwatchRadius;\r\n            const posY = Math.sin(3 * (Math.PI/180) * i) * this.stopwatchRadius + this.stopwatchRadius;\r\n            const angle = 360 / 120 * i + 90;\r\n            node.style.left = posX + 15 + \"px\";\r\n            node.style.top = posY + 10 + \"px\";\r\n            if(i % 5 == 0) {\r\n                node.style.transform = `rotate(${angle}deg) scale(1.5, 1.8)`;\r\n            } else {\r\n                node.style.transform = `rotate(${angle}deg)`;\r\n            }\r\n            this.stopwatchNode.append(node);\r\n            this.secondNodes.push(node);\r\n        }\r\n    }\r\n\r\n    _pointHandTo(secondToPoint) {\r\n        const angle = 360 / 60 * secondToPoint;\r\n        this.stopwatchHandNode.style.transform = `rotate(${angle}deg)`;\r\n    }\r\n\r\n    _pointHand() {\r\n        const angle = 360 / 60 * this._timer.totalMillis / 1000;\r\n        this.stopwatchHandNode.style.transform = `rotate(${angle}deg)`;\r\n    }\r\n\r\n    _runInterval() {\r\n        this._interval = setInterval(() => {\r\n            this._parseTimer();\r\n        }, 10);\r\n        this._runShapeInterval();\r\n        this._runTextInterval();\r\n    }\r\n\r\n    _runShapeInterval() {\r\n        this._shapeInterval = setInterval(() => {\r\n            this._pointHand();\r\n        }, 125);\r\n    }\r\n\r\n    _runTextInterval() {\r\n        this._textInterval = setInterval(() => {\r\n            this.timerNode.innerHTML = this._timer.formatted;\r\n        }, 10);\r\n    }\r\n\r\n    _parseTimer() {\r\n        const totalSeconds = new Date() - this.startDate;\r\n        // console.log(this.startDate);\r\n        // return;\r\n        const dt = new Date(null);\r\n        dt.setTime(totalSeconds);\r\n        const isoString = dt.toISOString().substring(11, 22);\r\n        const infos = isoString.split(\":\");\r\n        this._timer = {\r\n            hours: infos[0],\r\n            minutes: infos[1],\r\n            seconds: infos[2].split(\".\")[0],\r\n            millis: infos[2].split(\".\")[1],\r\n            totalMillis: totalSeconds,\r\n            formatted: isoString,\r\n        }\r\n    }\r\n\r\n    _stopInterval() {\r\n        clearInterval(this._interval);\r\n        clearInterval(this._shapeInterval);\r\n        clearInterval(this._textInterval);\r\n    }\r\n\r\n    play() {\r\n        console.log(this._stopDate);\r\n        if(this._stopDate !== undefined) {\r\n            const currentTime = new Date();\r\n            const pausedTime = currentTime.getTime() - this._stopDate.getTime();\r\n            this.startDate = new Date(pausedTime + this.startDate.getTime());\r\n            console.log(\"continue\");  \r\n        } else {\r\n            this.startDate = new Date();\r\n        }\r\n        this._runInterval();\r\n        document.querySelector(\".stopwatch-controls\").dataset.status = \"started\";\r\n        document.querySelector(\".stopwatch-controls\").dataset.needReset = true;\r\n    }\r\n\r\n    pause() {\r\n        this._stopInterval();\r\n        this._stopDate = new Date();\r\n        document.querySelector(\".stopwatch-controls\").dataset.status = \"paused\";\r\n    }\r\n\r\n    reset() {\r\n        this.pause();\r\n\r\n        this.startDate = undefined;\r\n        this._stopDate = undefined;\r\n        this._timer = {\r\n            hours: 0,\r\n            minutes: 0,\r\n            seconds: 0,\r\n            millis: 0,\r\n            totalMillis: 0,\r\n            formatted: \"00:00:00:00\",\r\n        };\r\n\r\n        document.querySelector(\".stopwatch-controls\").dataset.needReset = \"false\";\r\n        this.timerNode.innerHTML = this._timer.formatted;\r\n        this.stopwatchHandNode.classList.add(\"reset-animation\");\r\n        setTimeout(() => {\r\n            this.stopwatchHandNode.classList.remove(\"reset-animation\");\r\n        }, 1000);\r\n        this._pointHandTo(0);\r\n    }\r\n\r\n    _initListeners() {\r\n        document.querySelector(\".stopwatch-controls .fa-play\").addEventListener(\"click\", e => {\r\n            this.play();\r\n        });\r\n        document.querySelector(\".stopwatch-controls .fa-pause\").addEventListener(\"click\", e => {\r\n            this.pause();\r\n        });\r\n        document.querySelector(\".stopwatch-controls .fa-rotate-right\").addEventListener(\"click\", e => {\r\n            this.reset();\r\n        });\r\n    }\r\n}\r\n\r\nconst stopWatchManager = new StopWatchManager();\n\n//# sourceURL=webpack://my-webpack-project/./src/stopwatchmanager.js?");

/***/ }),

/***/ "./src/images/stars.jpg":
/*!******************************!*\
  !*** ./src/images/stars.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"507d201378d61d77f4d9.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/stars.jpg?");

/***/ }),

/***/ "./src/images/winter-landscape.jpg":
/*!*****************************************!*\
  !*** ./src/images/winter-landscape.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"eab478ed10083197a826.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/winter-landscape.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.css");
/******/ 	
/******/ })()
;