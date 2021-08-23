module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Authentication.js":
/*!**************************************!*\
  !*** ./components/Authentication.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\Authentication.js";







class Authentication extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  } // ログイン処理


  login() {
    let provider = new firebase__WEBPACK_IMPORTED_MODULE_5___default.a.auth.GoogleAuthProvider();
    firebase__WEBPACK_IMPORTED_MODULE_5___default.a.auth().signInWithPopup(provider).then(result => {
      this.props.dispatch({
        type: 'UPDATE_USER',
        value: {
          login: true,
          username: result.user.displayName,
          email: result.user.email
        }
      });
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/information');
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login-div",
      children: [_static_Style__WEBPACK_IMPORTED_MODULE_3__["default"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "outline-info",
        className: "login-btn",
        onClick: this.login,
        children: "\u30ED\u30B0\u30A4\u30F3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this);
  }

}

Authentication = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(Authentication);
/* harmony default export */ __webpack_exports__["default"] = (Authentication);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Authentication */ "./components/Authentication.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\pages\\index.js";


/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Authentication__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 24
}, undefined));

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\static\\Style.js";
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
  children: [`

    /*ログイン*/
    .login-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 800px;
    }
    .login-btn {
        width: 500px;
        height: 100px;
        font-size:30pt;
    }
      
   /*ヘッダーのタイトル*/
    .container-title {
        margin:0px 400px;
    }
    .title-size {
        font-size:18pt;
    }
    .top-title {
        color:#4ABDAC;
        font-weight: bold;
        text-shadow: 1px 1px 2px silver;
    }
    /*ヘッダーの個人情報とログアウト*/
    .top-nav {
        font-size:14pt;
        align-items: baseline;
        margin:5px;
    }
    /*ヘッダーのナビゲーションバー*/
    .div-nav {
        background-color: #F78733;
    }
    .base-nav {
        margin:0px 400px 100px 400px;
        font-size:14pt;
    }
    .div-nav .nav-link:hover {
        background-color: #F89042;
        cursor: pointer;
    }
    .nav-tabs .nav-link.active {
        background-color: #F16C09;
    }
    /*トップ画面*/
    .index-box {
        position: relative;
        border-top: solid 3px #4ABDAC;
    }
    .index-box p {
        margin:10px 400px;
        padding: 0;
    }
    .index-box .box-title {
        position: absolute;
        margin:0px 400px;
        display: inline-block;
        top: -27px;
        left: -3px;
        padding: 0 9px;
        height: 25px;
        line-height: 25px;
        font-size: 17px;
        background: #4ABDAC;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px 5px 0 0;
    }
    .modal-group {
        margin:0px 400px 0px 357px;
    }
    .pagination-items {
        margin-left: auto;
        margin-right: auto;
    }
    .list-items {
        border-top: solid 2px #4ABDAC;
        display: flex;
        align-items: center;
        padding: 10px;
    }
    .listgroup-color {
        background: #F8F9FA;/*背景色*/        
    }
    .list-color {
        background: #F8F9FA;/*背景色*/
        list-style: none;
        padding: 0.8em;
    }
    .modal-group li + li {
        border-top:1px dotted #666;
    }
    .modal-group li:hover {
        background: #EAEDF0;/*背景色*/
    }
    /*入力フォームの背景色*/
    .children-box {
        font-size: 16px;
        padding: 1.5em 2em;
        margin:100px 400px;
        background: #e4fcff;/*背景色*/
        border-top: solid 6px #4ABDAC;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);/*影*/
    }
    /*保存ボタン*/
    a.btn--orange {
        font-size:18pt;
        color: #fff;
        background-color: #F16C09;
        position: fixed;
        bottom: 50px; 
        right: 450px;
        padding: 6px 40px;
        border: solid 1px #FFFFFF;
    }
    a.btn--orange:hover {
        color: #fff;
        background: #F16C09;
    }
    a.btn--shadow {
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }
    a.btn--circle {
        border-radius: 50%;
        line-height: 100px;
        width: 100px;
        height: 100px;
        padding: 0;
    }
    
    /*月別入力画面*/
    .monthly-input {
        align-items: center;
    }

    .table-all {
        font-size: 12pt;
        align-items: center;
    }
    .table-all tr td:nth-child(-n+2) {
        text-align: center;
    }
    .table-header {
        background-color: #F89042;
        color: #fff;
        font-size: 12pt;
        text-align: center;
    }
    .table-header tr th:nth-child(-n+2) {
        width:40px;
    }
    .table-header tr th:nth-child(n+3):nth-child(-n+7) {
        width:120px;
    }
    .table-from {
        width: 120px;
        height: 30px;
        font-size:13px;
    }
    .table-text {
        width: 300px;
        height: 30px;
        font-size:13px;
    }
    .table-day{
        padding: 3px 5px;
    }
    .holiday-color {
        background-color: #FFC0CB;
    }
    .holiday-color td:nth-child(-n+2) {
        color: #FF0000;
    }
    .setting-form {
        height: 32px;
        font-size:15px;
    }
    /*社内交通費画面*/
    .traffic-header {
        background-color: #F89042;
        color: #fff;
        font-size: 12pt;
        text-align: center;
    }
    .traffic-day {
        width: 50px;
        height: 30px;
        font-size:13px;
    }
    .traffic-text {
        width: 280px;
        height: 30px;
        font-size:13px;
    }
    .traffic-money {
        width: 120px;
        height: 30px;
        font-size:13px;
    }
    .atd-table td{
        padding:0px 10px 5px ;
    }
    /*勤怠*/
    .alert-form {
        background-color: #FFF0F5;
        color: #FF0000;
        margin-bottom:10px;
    }
    /*課会日程*/
    .table-section {
        width: 300px;
        text-align: center;
    }
    .table-section td {
        padding: 10px 5px;
    }
    /*課会出欠*/
    .sectionade-all {
        font-size: 12pt;
        width: 400px;
    }
    .sectionade-header {
        background-color: #F89042;
        color: #fff;
        text-align: center;
    }
    .sectionade-tr {

    }
    .sectionade-keywidth {
        width: 80px;
        text-align: center;
    }
    .sectionade-namewidth {
        width: 220px;
    }
    .sectionade-selectwidth {
        width: 100px;
        text-align: center;
    }
    footer {
      color:#99c;
      font-size:12pt;
      text-align:right;
      border-bottom:1px solid #99c;
      margin:100px 400px;
      position: relative;
      bottom: 10px;
      right: 10px;
      left: 10px;
    }

`, " "]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 1,
  columnNumber: 16
}, undefined));

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbiIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJsb2dpbiIsImJpbmQiLCJwcm92aWRlciIsImZpcmViYXNlIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInVzZXJuYW1lIiwidXNlciIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicmVuZGVyIiwic3R5bGUiLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbFFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuXHJcbmNsYXNzIEF1dGhlbnRpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg63jgrDjgqTjg7Plh6bnkIZcclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlciAgICBcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTonVVBEQVRFX1VTRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHJlc3VsdC51c2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVzdWx0LnVzZXIuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvaW5mb3JtYXRpb24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWRpdlwiID5cclxuICAgICAgICAgICAgICAgIHtzdHlsZX1cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIGNsYXNzTmFtZT1cImxvZ2luLWJ0blwiIG9uQ2xpY2s9eyB0aGlzLmxvZ2luIH0gPuODreOCsOOCpOODszwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BdXRoZW50aWNhdGlvbiA9IGNvbm5lY3QoKHN0YXRlKT0+c3RhdGUpKEF1dGhlbnRpY2F0aW9uKTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb247IiwiaW1wb3J0IEF1dGhlbnRpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoIDxBdXRoZW50aWNhdGlvbiAvPiApOyIsImV4cG9ydCBkZWZhdWx0IDxzdHlsZT57YFxyXG5cclxuICAgIC8q44Ot44Kw44Kk44OzKi9cclxuICAgIC5sb2dpbi1kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHQ7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAvKuODmOODg+ODgOODvOOBruOCv+OCpOODiOODqyovXHJcbiAgICAuY29udGFpbmVyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46MHB4IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLXNpemUge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB0O1xyXG4gICAgfVxyXG4gICAgLnRvcC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IzRBQkRBQztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xyXG4gICAgfVxyXG4gICAgLyrjg5jjg4Pjg4Djg7zjga7lgIvkurrmg4XloLHjgajjg63jgrDjgqLjgqbjg4gqL1xyXG4gICAgLnRvcC1uYXYge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBtYXJnaW46NXB4O1xyXG4gICAgfVxyXG4gICAgLyrjg5jjg4Pjg4Djg7zjga7jg4rjg5PjgrLjg7zjgrfjg6fjg7Pjg5Djg7wqL1xyXG4gICAgLmRpdi1uYXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzg3MzM7XHJcbiAgICB9XHJcbiAgICAuYmFzZS1uYXYge1xyXG4gICAgICAgIG1hcmdpbjowcHggNDAwcHggMTAwcHggNDAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHQ7XHJcbiAgICB9XHJcbiAgICAuZGl2LW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGODkwNDI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMTZDMDk7XHJcbiAgICB9XHJcbiAgICAvKuODiOODg+ODl+eUu+mdoiovXHJcbiAgICAuaW5kZXgtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgM3B4ICM0QUJEQUM7XHJcbiAgICB9XHJcbiAgICAuaW5kZXgtYm94IHAge1xyXG4gICAgICAgIG1hcmdpbjoxMHB4IDQwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuaW5kZXgtYm94IC5ib3gtdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46MHB4IDQwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0b3A6IC0yN3B4O1xyXG4gICAgICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNEFCREFDO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW46MHB4IDQwMHB4IDBweCAzNTdweDtcclxuICAgIH1cclxuICAgIC5wYWdpbmF0aW9uLWl0ZW1zIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubGlzdC1pdGVtcyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMnB4ICM0QUJEQUM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubGlzdGdyb3VwLWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOUZBOy8q6IOM5pmv6ImyKi8gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmxpc3QtY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY5RkE7Lyrog4zmma/oibIqL1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMC44ZW07XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZ3JvdXAgbGkgKyBsaSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDoxcHggZG90dGVkICM2NjY7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZ3JvdXAgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFQUVERjA7Lyrog4zmma/oibIqL1xyXG4gICAgfVxyXG4gICAgLyrlhaXlipvjg5Xjgqnjg7zjg6Djga7og4zmma/oibIqL1xyXG4gICAgLmNoaWxkcmVuLWJveCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNWVtIDJlbTtcclxuICAgICAgICBtYXJnaW46MTAwcHggNDAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U0ZmNmZjsvKuiDjOaZr+iJsiovXHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgNnB4ICM0QUJEQUM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zMik7LyrlvbEqL1xyXG4gICAgfVxyXG4gICAgLyrkv53lrZjjg5zjgr/jg7MqL1xyXG4gICAgYS5idG4tLW9yYW5nZSB7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxNkMwOTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiA1MHB4OyBcclxuICAgICAgICByaWdodDogNDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIGEuYnRuLS1vcmFuZ2U6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMTZDMDk7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi0tc2hhZG93IHtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIH1cclxuICAgIGEuYnRuLS1jaXJjbGUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyrmnIjliKXlhaXlipvnlLvpnaIqL1xyXG4gICAgLm1vbnRobHktaW5wdXQge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFibGUtYWxsIHRyIHRkOm50aC1jaGlsZCgtbisyKSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTA0MjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWhlYWRlciB0ciB0aDpudGgtY2hpbGQoLW4rMikge1xyXG4gICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVyIHRyIHRoOm50aC1jaGlsZChuKzMpOm50aC1jaGlsZCgtbis3KSB7XHJcbiAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxuICAgIC50YWJsZS10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWRheXtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgfVxyXG4gICAgLmhvbGlkYXktY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwQ0I7XHJcbiAgICB9XHJcbiAgICAuaG9saWRheS1jb2xvciB0ZDpudGgtY2hpbGQoLW4rMikge1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgfVxyXG4gICAgLnNldHRpbmctZm9ybSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgfVxyXG4gICAgLyrnpL7lhoXkuqTpgJrosrvnlLvpnaIqL1xyXG4gICAgLnRyYWZmaWMtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5MDQyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudHJhZmZpYy1kYXkge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxuICAgIC50cmFmZmljLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAudHJhZmZpYy1tb25leSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxuICAgIC5hdGQtdGFibGUgdGR7XHJcbiAgICAgICAgcGFkZGluZzowcHggMTBweCA1cHggO1xyXG4gICAgfVxyXG4gICAgLyrli6TmgKAqL1xyXG4gICAgLmFsZXJ0LWZvcm0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYwRjU7XHJcbiAgICAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gICAgLyroqrLkvJrml6XnqIsqL1xyXG4gICAgLnRhYmxlLXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFibGUtc2VjdGlvbiB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICB9XHJcbiAgICAvKuiqsuS8muWHuuasoCovXHJcbiAgICAuc2VjdGlvbmFkZS1hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGODkwNDI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUtdHIge1xyXG5cclxuICAgIH1cclxuICAgIC5zZWN0aW9uYWRlLWtleXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS1uYW1ld2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uYWRlLXNlbGVjdHdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgY29sb3I6Izk5YztcclxuICAgICAgZm9udC1zaXplOjEycHQ7XHJcbiAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM5OWM7XHJcbiAgICAgIG1hcmdpbjoxMDBweCA0MDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuYH0gPC9zdHlsZT4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=