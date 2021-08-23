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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/section.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\Footer.js";


class Footer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: this.props.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 16
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\Header.js";






class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  } // ログアウト処理


  logout() {
    firebase__WEBPACK_IMPORTED_MODULE_3___default.a.auth().signOut();
    this.props.dispatch({
      type: 'UPDATE_USER',
      value: {
        login: false,
        username: 'ログイン',
        email: ''
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/index');
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "container-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: 8,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "top-title",
              children: ["AMS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "title-size",
                children: [" -", this.props.title, "-"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              className: "top-nav",
              activeKey: "/home",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u5229\u7528\u8005\uFF1A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 28
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
                title: this.props.username,
                id: "nav-dropdown",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
                  eventKey: "1",
                  href: "/setting",
                  children: "\u500B\u4EBA\u8A2D\u5B9A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
                  eventKey: "2",
                  onClick: this.logout,
                  children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "div-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          justify: true,
          className: "base-nav",
          variant: "tabs",
          defaultActiveKey: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              href: "/information",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "text-white",
                children: "\u30C8\u30C3\u30D7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              eventKey: "link-1",
              href: "/monthly",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "text-white",
                children: "\u6708\u5225\u5165\u529B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              eventKey: "link-2",
              href: "/trafficin",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "text-white",
                children: "\u793E\u5185\u4EA4\u901A\u8CBB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              eventKey: "link-3",
              href: "/trafficout",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "text-white",
                children: "\u793E\u5916\u4EA4\u901A\u8CBB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              eventKey: "link-4",
              href: "/attendance",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "text-white",
                children: "\u52E4\u6020\u5C4A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              eventKey: "link-5",
              href: "/section",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "text-white",
                children: "\u8AB2\u4F1A\u60C5\u5831"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this);
  }

}

Header = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => state)(Header);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\Layout.js";








class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.login) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: this.props.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), _static_Style__WEBPACK_IMPORTED_MODULE_6__["default"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: this.props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          footer: "copyright TEST-Taro."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, this);
    }
  }

}

Layout = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(Layout);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\Section.js";






class Section extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    let today = new Date();
    let year = today.getFullYear();
    let day = today.getMonth() + 1;
    this.state = {
      year: year,
      month: day,
      show: false,
      modalMsg: ""
    };
    this.getFireData();
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onClickDivision = this.onClickDivision.bind(this);
    this.getFireData = this.getFireData.bind(this);
    this.targetSave = this.targetSave.bind(this);
  } // モーダル非表示


  handleClose() {
    this.setState({
      show: false
    });
  } // モーダル表示


  handleShow() {
    this.setState({
      show: true
    });
  } // 年変更時の処理 


  onChangeYear(e) {
    // firebaseにアクセス 
    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref = db.ref('t_section_date/' + e.target.value + '/' + this.state.month + '/');
    let self = this; // 抽出

    ref.on('value', snapshot => {
      // 対象年月の情報で処理分岐
      if (snapshot.val() === null) {
        self.setState({
          year: e.target.value,
          data: []
        });
      } else {
        self.setState({
          year: e.target.value,
          data: snapshot.val()
        });
      }
    });
  } // 月変更時の処理 


  onChangeMonth(e) {
    // firebaseにアクセス 
    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref = db.ref('t_section_date/' + this.state.year + '/' + e.target.value + '/');
    let self = this; // 抽出

    ref.on('value', snapshot => {
      // 対象年月の情報で処理分岐
      if (snapshot.val() === null) {
        self.setState({
          month: e.target.value,
          data: []
        });
      } else {
        self.setState({
          month: e.target.value,
          data: snapshot.val()
        });
      }
    });
  } // 課名リンク押下時の処理


  onClickDivision(e) {
    // 開始日取得
    let id = "date" + e.target.text;
    let inputCheck = document.getElementById(id).value; // 情報の有無で分岐

    if (inputCheck === "") {
      // 未入力メッセージ表示
      this.setState({
        modalMsg: "開始日を入力してください。"
      });
      this.handleShow();
      e.preventDefault();
    } else {
      // storeにディスパッチ
      return this.props.dispatch({
        type: 'DIVISION',
        value: {
          division: e.target.text,
          division_day: inputCheck
        }
      });
    }
  } // firebaseから情報を取得


  getFireData() {
    // firebaseにアクセス 
    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref = db.ref('t_section_date/' + this.state.year + '/' + this.state.month + '/');
    let self = this; // 抽出

    ref.on('value', snapshot => {
      if (snapshot.val() !== null) {
        self.setState({
          data: snapshot.val()
        });
      }
    });
  } // 入力情報を登録


  targetSave() {
    let year = this.state.year;
    let month = this.state.month; // firebaseにアクセス 

    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref = db.ref('t_section_date/' + year + '/' + month);

    let byId = function (id) {
      return document.getElementById(id).value;
    };

    ref.set({
      DA1_date: byId("dateDA1"),
      // DA1
      DA2_date: byId("dateDA2"),
      // DA2
      DB1_date: byId("dateDB1"),
      // DB1
      DB2_date: byId("dateDB2"),
      // DB2
      DB3_date: byId("dateDB3") // DB3

    });
  }

  render() {
    // 年に表示する情報を取得
    let today = new Date();
    let yearAgo = today.getFullYear() - 1;
    let yearThis = today.getFullYear();
    let yearLater = today.getFullYear() + 1; // 開始日の情報を表示

    let {
      DA1_date,
      DA2_date,
      DB1_date,
      DB2_date,
      DB3_date
    } = this.state.data !== undefined ? this.state.data : "";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "children-box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          className: "monthly-input",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: "auto",
            children: "\u5BFE\u8C61\u5E74\u6708"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: "auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
              as: "select",
              defaultValue: yearThis,
              onChange: this.onChangeYear,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: yearAgo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: yearThis
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: yearLater
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: "auto",
            children: "\u5E74"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: "auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
              as: "select",
              defaultValue: this.state.month,
              onChange: this.onChangeMonth,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "1",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "2",
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "3",
                children: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "4",
                children: "4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "5",
                children: "5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "6",
                children: "6"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "7",
                children: "7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "8",
                children: "8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "9",
                children: "9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "10",
                children: "10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "11",
                children: "11"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "12",
                children: "12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: "auto",
            children: "\u6708"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
            className: "monthly-input",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/sectionade",
                onClick: this.onClickDivision,
                children: "DA1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: "\u958B\u59CB\u65E5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                size: "sm",
                id: "dateDA1",
                type: "date",
                defaultValue: DA1_date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
            className: "monthly-input",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/sectionade",
                onClick: this.onClickDivision,
                children: "DA2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: "\u958B\u59CB\u65E5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                size: "sm",
                id: "dateDA2",
                type: "date",
                defaultValue: DA2_date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
            className: "monthly-input",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/sectionade",
                onClick: this.onClickDivision,
                children: "DB1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: "\u958B\u59CB\u65E5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                size: "sm",
                id: "dateDB1",
                type: "date",
                defaultValue: DB1_date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
            className: "monthly-input",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/sectionade",
                onClick: this.onClickDivision,
                children: "DB2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: "\u958B\u59CB\u65E5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                size: "sm",
                id: "dateDB2",
                type: "date",
                defaultValue: DB2_date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
            className: "monthly-input",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/sectionade",
                onClick: this.onClickDivision,
                children: "DB3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 1,
              children: "\u958B\u59CB\u65E5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              sm: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                size: "sm",
                id: "dateDB3",
                type: "date",
                defaultValue: DB3_date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "javascript:void(0)",
        class: "btn btn--orange btn--circle btn--circle-a btn--shadow",
        onClick: this.targetSave,
        children: "\u4FDD\u5B58"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        centered: true,
        show: this.state.show,
        onHide: this.handleClose,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
          children: this.state.modalMsg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Footer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            variant: "secondary",
            onClick: this.handleClose,
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }, this);
  }

}

Section = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(Section);
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/section.js":
/*!**************************!*\
  !*** ./pages/section.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\pages\\section.js";



/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "Section Schedule page.",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
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

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL1N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZGF0YWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImZvb3RlciIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwibG9nb3V0IiwiYmluZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsImxvZ2luIiwidXNlcm5hbWUiLCJlbWFpbCIsIlJvdXRlciIsInB1c2giLCJ0aXRsZSIsImNvbm5lY3QiLCJzdGF0ZSIsIkxheW91dCIsInN0eWxlIiwiY2hpbGRyZW4iLCJTZWN0aW9uIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5IiwiZ2V0TW9udGgiLCJtb250aCIsInNob3ciLCJtb2RhbE1zZyIsImdldEZpcmVEYXRhIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwib25DaGFuZ2VZZWFyIiwib25DaGFuZ2VNb250aCIsIm9uQ2xpY2tEaXZpc2lvbiIsInRhcmdldFNhdmUiLCJzZXRTdGF0ZSIsImUiLCJkYiIsImRhdGFiYXNlIiwicmVmIiwidGFyZ2V0Iiwic2VsZiIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJkYXRhIiwiaWQiLCJ0ZXh0IiwiaW5wdXRDaGVjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdmlzaW9uIiwiZGl2aXNpb25fZGF5IiwiYnlJZCIsInNldCIsIkRBMV9kYXRlIiwiREEyX2RhdGUiLCJEQjFfZGF0ZSIsIkRCMl9kYXRlIiwiREIzX2RhdGUiLCJ5ZWFyQWdvIiwieWVhclRoaXMiLCJ5ZWFyTGF0ZXIiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbFFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2VjdGlvbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybig8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmZvb3Rlcn08L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXYsIE5hdkRyb3Bkb3duLCBDb250YWluZXIsICBSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6J1VQREFURV9VU0VSJyxcclxuICAgICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICAgICAgbG9naW46ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJ+ODreOCsOOCpOODsycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvaW5kZXgnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoPGhlYWRlcj5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0b3AtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtc2l6ZVwiPiAte3RoaXMucHJvcHMudGl0bGV9LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJ0b3AtbmF2XCIgYWN0aXZlS2V5PVwiL2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Yip55So6ICF77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXsgdGhpcy5wcm9wcy51c2VybmFtZSB9IGlkPVwibmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCIxXCIgaHJlZj1cIi9zZXR0aW5nXCI+5YCL5Lq66Kit5a6aPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGV2ZW50S2V5PVwiMlwiIG9uQ2xpY2s9eyB0aGlzLmxvZ291dCB9PuODreOCsOOCouOCpuODiDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxOYXYganVzdGlmeSBjbGFzc05hbWU9XCJiYXNlLW5hdlwiIHZhcmlhbnQ9XCJ0YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmZvcm1hdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgPuODiOODg+ODlzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0xXCIgaHJlZj1cIi9tb250aGx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7mnIjliKXlhaXlips8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMlwiIGhyZWY9XCIvdHJhZmZpY2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7npL7lhoXkuqTpgJrosrs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstM1wiIGhyZWY9XCIvdHJhZmZpY291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2hpdGVcIiA+56S+5aSW5Lqk6YCa6LK7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJsaW5rLTRcIiAgaHJlZj1cIi9hdHRlbmRhbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7li6TmgKDlsYo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstNVwiIGhyZWY9XCIvc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2hpdGVcIiA+6Kqy5Lya5oOF5aCxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5IZWFkZXIgPSBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUpKEhlYWRlcik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIgKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMubG9naW4pIHtcclxuICAgIFxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAge3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3Rlcj1cImNvcHlyaWdodCBURVNULVRhcm8uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkxheW91dCA9IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZSkoTGF5b3V0KTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0sIE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuXHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgZGF5ID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgIG1vbnRoOiBkYXksXHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RhbE1zZzogXCJcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RmlyZURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSAgICAgPSB0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93ICAgICAgPSB0aGlzLmhhbmRsZVNob3cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlWWVhciAgICA9IHRoaXMub25DaGFuZ2VZZWFyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZU1vbnRoICAgPSB0aGlzLm9uQ2hhbmdlTW9udGguYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tEaXZpc2lvbiA9IHRoaXMub25DbGlja0RpdmlzaW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRGaXJlRGF0YSAgICAgPSB0aGlzLmdldEZpcmVEYXRhLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTYXZlICAgICAgPSB0aGlzLnRhcmdldFNhdmUuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oi44O844OA44Or6Z2e6KGo56S6XHJcbiAgICBoYW5kbGVDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvdzpmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODouODvOODgOODq+ihqOekulxyXG4gICAgaGFuZGxlU2hvdygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bm05aSJ5pu05pmC44Gu5Yem55CGIFxyXG4gICAgb25DaGFuZ2VZZWFyIChlKSB7XHJcblxyXG4gICAgICAgIC8vIGZpcmViYXNl44Gr44Ki44Kv44K744K5IFxyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZigndF9zZWN0aW9uX2RhdGUvJyArIGUudGFyZ2V0LnZhbHVlICsgJy8nICsgdGhpcy5zdGF0ZS5tb250aCArICcvJyAgKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8g5oq95Ye6XHJcbiAgICAgICAgcmVmLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDlr77osaHlubTmnIjjga7mg4XloLHjgaflh6bnkIbliIblspBcclxuICAgICAgICAgICAgaWYgKHNuYXBzaG90LnZhbCgpID09PSBudWxsKXtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogZS50YXJnZXQudmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzbmFwc2hvdC52YWwoKSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaciOWkieabtOaZguOBruWHpueQhiBcclxuICAgIG9uQ2hhbmdlTW9udGggKGUpIHtcclxuXHJcbiAgICAgICAgLy8gZmlyZWJhc2XjgavjgqLjgq/jgrvjgrkgXHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmID0gZGIucmVmKCd0X3NlY3Rpb25fZGF0ZS8nICsgdGhpcy5zdGF0ZS55ZWFyICsgICcvJyArIGUudGFyZ2V0LnZhbHVlICsgJy8nICApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyDmir3lh7pcclxuICAgICAgICByZWYub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOWvvuixoeW5tOaciOOBruaDheWgseOBp+WHpueQhuWIhuWykFxyXG4gICAgICAgICAgICBpZiAoc25hcHNob3QudmFsKCkgPT09IG51bGwpe1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW10gXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzbmFwc2hvdC52YWwoKSBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiqsuWQjeODquODs+OCr+aKvOS4i+aZguOBruWHpueQhlxyXG4gICAgb25DbGlja0RpdmlzaW9uIChlKSB7XHJcbiAgICAgICAgLy8g6ZaL5aeL5pel5Y+W5b6XXHJcbiAgICAgICAgbGV0IGlkID0gXCJkYXRlXCIgKyBlLnRhcmdldC50ZXh0O1xyXG4gICAgICAgIGxldCBpbnB1dENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICkudmFsdWU7XHJcbiAgICAgICAgLy8g5oOF5aCx44Gu5pyJ54Sh44Gn5YiG5bKQXHJcbiAgICAgICAgaWYgKCBpbnB1dENoZWNrID09PVwiXCIgKXtcclxuICAgICAgICAgICAgLy8g5pyq5YWl5Yqb44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe+OAgG1vZGFsTXNnOiBcIumWi+Wni+aXpeOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwi44CAfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2hvdygpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzdG9yZeOBq+ODh+OCo+OCueODkeODg+ODgVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRElWSVNJT04nICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb246IGUudGFyZ2V0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbl9kYXk6aW5wdXRDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJlYmFzZeOBi+OCieaDheWgseOCkuWPluW+l1xyXG4gICAgZ2V0RmlyZURhdGEgKCkge1xyXG4gICAgICAgIC8vIGZpcmViYXNl44Gr44Ki44Kv44K744K5IFxyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZigndF9zZWN0aW9uX2RhdGUvJyArIHRoaXMuc3RhdGUueWVhciArICcvJyArIHRoaXMuc3RhdGUubW9udGggKyAnLycgICk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIOaKveWHulxyXG4gICAgICAgIHJlZi5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNuYXBzaG90LnZhbCgpICE9PSBudWxsKXtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHsgZGF0YTogc25hcHNob3QudmFsKCkgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhaXlipvmg4XloLHjgpLnmbvpjLJcclxuICAgIHRhcmdldFNhdmUgKCkge1xyXG5cclxuICAgICAgICBsZXQgeWVhciA9IHRoaXMuc3RhdGUueWVhcjtcclxuICAgICAgICBsZXQgbW9udGggPSB0aGlzLnN0YXRlLm1vbnRoO1xyXG5cclxuICAgICAgICAvLyBmaXJlYmFzZeOBq+OCouOCr+OCu+OCuSBcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoICd0X3NlY3Rpb25fZGF0ZS8nICArIHllYXIgKyAnLycgKyBtb250aCApO1xyXG5cclxuICAgICAgICBsZXQgYnlJZCA9IGZ1bmN0aW9uKCBpZCApIHsgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApLnZhbHVlIH07XHJcblxyXG4gICAgICAgIHJlZi5zZXQoe1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIERBMV9kYXRlICAgOiBieUlkKFwiZGF0ZURBMVwiKSwgICAgLy8gREExXHJcbiAgICAgICAgICAgIERBMl9kYXRlICAgOiBieUlkKFwiZGF0ZURBMlwiKSwgICAgLy8gREEyXHJcbiAgICAgICAgICAgIERCMV9kYXRlICAgOiBieUlkKFwiZGF0ZURCMVwiKSwgICAgLy8gREIxXHJcbiAgICAgICAgICAgIERCMl9kYXRlICAgOiBieUlkKFwiZGF0ZURCMlwiKSwgICAgLy8gREIyXHJcbiAgICAgICAgICAgIERCM19kYXRlICAgOiBieUlkKFwiZGF0ZURCM1wiKSwgICAgLy8gREIzXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIC8vIOW5tOOBq+ihqOekuuOBmeOCi+aDheWgseOCkuWPluW+l1xyXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHllYXJBZ28gPSB0b2RheS5nZXRGdWxsWWVhcigpLTE7XHJcbiAgICAgICAgbGV0IHllYXJUaGlzID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgeWVhckxhdGVyID0gdG9kYXkuZ2V0RnVsbFllYXIoKSsxO1xyXG4gICAgICAgIC8vIOmWi+Wni+aXpeOBruaDheWgseOCkuihqOekulxyXG4gICAgICAgIGxldCB7ICAgREExX2RhdGVcclxuICAgICAgICAgICAgICAsIERBMl9kYXRlXHJcbiAgICAgICAgICAgICAgLCBEQjFfZGF0ZVxyXG4gICAgICAgICAgICAgICwgREIyX2RhdGVcclxuICAgICAgICAgICAgICAsIERCM19kYXRlXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLnN0YXRlLmRhdGEgIT09IHVuZGVmaW5lZCA/IHRoaXMuc3RhdGUuZGF0YSA6IFwiXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzcz1cImNoaWxkcmVuLWJveFwiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtb250aGx5LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD1cImF1dG9cIj7lr77osaHlubTmnIg8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCIgZGVmYXVsdFZhbHVlPXsgeWVhclRoaXMgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VZZWFyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPnsgeWVhckFnbyB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPnsgeWVhclRoaXMgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57IHllYXJMYXRlciB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCJhdXRvXCI+5bm0PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInNlbGVjdFwiIGRlZmF1bHRWYWx1ZT17IHRoaXMuc3RhdGUubW9udGggfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNb250aCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPVwiYXV0b1wiPuaciDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IGNsYXNzTmFtZT1cIm1vbnRobHktaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlY3Rpb25hZGVcIiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrRGl2aXNpb24gfSA+REExPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MX0+6ZaL5aeL5pelPC9Db2w+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgaWQ9XCJkYXRlREExXCIgdHlwZT1cImRhdGVcIiBkZWZhdWx0VmFsdWU9e0RBMV9kYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBjbGFzc05hbWU9XCJtb250aGx5LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlY3Rpb25hZGVcIiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrRGl2aXNpb24gfSA+REEyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MX0+6ZaL5aeL5pelPC9Db2w+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgaWQ9XCJkYXRlREEyXCIgdHlwZT1cImRhdGVcIiBkZWZhdWx0VmFsdWU9e0RBMl9kYXRlfeOAgC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IGNsYXNzTmFtZT1cIm1vbnRobHktaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2VjdGlvbmFkZVwiIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2tEaXZpc2lvbiB9ID5EQjE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxfT7plovlp4vml6U8L0NvbD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBzaXplPVwic21cIiBpZD1cImRhdGVEQjFcIiB0eXBlPVwiZGF0ZVwiIGRlZmF1bHRWYWx1ZT17REIxX2RhdGV944CALz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3cgY2xhc3NOYW1lPVwibW9udGhseS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zZWN0aW9uYWRlXCIgb25DbGljaz17IHRoaXMub25DbGlja0RpdmlzaW9uIH0gPkRCMjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezF9PumWi+Wni+aXpTwvQ29sPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHNpemU9XCJzbVwiIGlkPVwiZGF0ZURCMlwiIHR5cGU9XCJkYXRlXCIgZGVmYXVsdFZhbHVlPXtEQjJfZGF0ZX3jgIAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBjbGFzc05hbWU9XCJtb250aGx5LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlY3Rpb25hZGVcIiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrRGl2aXNpb24gfSA+REIzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MX0+6ZaL5aeL5pelPC9Db2w+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgaWQ9XCJkYXRlREIzXCIgdHlwZT1cImRhdGVcIiBkZWZhdWx0VmFsdWU9e0RCM19kYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiYnRuIGJ0bi0tb3JhbmdlIGJ0bi0tY2lyY2xlIGJ0bi0tY2lyY2xlLWEgYnRuLS1zaGFkb3dcIiBvbkNsaWNrPXt0aGlzLnRhcmdldFNhdmV9PuS/neWtmDwvYT5cclxuICAgICAgICAgICAgPE1vZGFsIGNlbnRlcmVkIHNob3c9e3RoaXMuc3RhdGUuc2hvd30gb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgXHQ8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgXHQgICAge3RoaXMuc3RhdGUubW9kYWxNc2d9XHJcbiAgICAgICAgICAgICAgIFx0PC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgIFx0PC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5TZWN0aW9uID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoU2VjdGlvbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJTZWN0aW9uIFNjaGVkdWxlIHBhZ2UuXCIgPlxyXG4gICAgICAgIDxTZWN0aW9uIC8+XHJcbiAgICA8L0xheW91dD5cclxuKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgPHN0eWxlPntgXHJcblxyXG4gICAgLyrjg63jgrDjgqTjg7MqL1xyXG4gICAgLmxvZ2luLWRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB9XHJcbiAgICAubG9naW4tYnRuIHtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBmb250LXNpemU6MzBwdDtcclxuICAgIH1cclxuICAgICAgXHJcbiAgIC8q44OY44OD44OA44O844Gu44K/44Kk44OI44OrKi9cclxuICAgIC5jb250YWluZXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjowcHggNDAwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtc2l6ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHQ7XHJcbiAgICB9XHJcbiAgICAudG9wLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjojNEFCREFDO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XHJcbiAgICB9XHJcbiAgICAvKuODmOODg+ODgOODvOOBruWAi+S6uuaDheWgseOBqOODreOCsOOCouOCpuODiCovXHJcbiAgICAudG9wLW5hdiB7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgIG1hcmdpbjo1cHg7XHJcbiAgICB9XHJcbiAgICAvKuODmOODg+ODgOODvOOBruODiuODk+OCsuODvOOCt+ODp+ODs+ODkOODvCovXHJcbiAgICAuZGl2LW5hdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3ODczMztcclxuICAgIH1cclxuICAgIC5iYXNlLW5hdiB7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweCAxMDBweCA0MDBweDtcclxuICAgICAgICBmb250LXNpemU6MTRwdDtcclxuICAgIH1cclxuICAgIC5kaXYtbmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTA0MjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxNkMwOTtcclxuICAgIH1cclxuICAgIC8q44OI44OD44OX55S76Z2iKi9cclxuICAgIC5pbmRleC1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAzcHggIzRBQkRBQztcclxuICAgIH1cclxuICAgIC5pbmRleC1ib3ggcCB7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggNDAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5pbmRleC1ib3ggLmJveC10aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjowcHggNDAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRvcDogLTI3cHg7XHJcbiAgICAgICAgbGVmdDogLTNweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDlweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0QUJEQUM7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZ3JvdXAge1xyXG4gICAgICAgIG1hcmdpbjowcHggNDAwcHggMHB4IDM1N3B4O1xyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24taXRlbXMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5saXN0LWl0ZW1zIHtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAycHggIzRBQkRBQztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5saXN0Z3JvdXAtY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY5RkE7Lyrog4zmma/oibIqLyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubGlzdC1jb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjlGQTsvKuiDjOaZr+iJsiovXHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIH1cclxuICAgIC5tb2RhbC1ncm91cCBsaSArIGxpIHtcclxuICAgICAgICBib3JkZXItdG9wOjFweCBkb3R0ZWQgIzY2NjtcclxuICAgIH1cclxuICAgIC5tb2RhbC1ncm91cCBsaTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VBRURGMDsvKuiDjOaZr+iJsiovXHJcbiAgICB9XHJcbiAgICAvKuWFpeWKm+ODleOCqeODvOODoOOBruiDjOaZr+iJsiovXHJcbiAgICAuY2hpbGRyZW4tYm94IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMS41ZW0gMmVtO1xyXG4gICAgICAgIG1hcmdpbjoxMDBweCA0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRmY2ZmOy8q6IOM5pmv6ImyKi9cclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCA2cHggIzRBQkRBQztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMyKTsvKuW9sSovXHJcbiAgICB9XHJcbiAgICAvKuS/neWtmOODnOOCv+ODsyovXHJcbiAgICBhLmJ0bi0tb3JhbmdlIHtcclxuICAgICAgICBmb250LXNpemU6MThwdDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE2QzA5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDUwcHg7IFxyXG4gICAgICAgIHJpZ2h0OiA0NTBweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNDBweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgYS5idG4tLW9yYW5nZTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YxNkMwOTtcclxuICAgIH1cclxuICAgIGEuYnRuLS1zaGFkb3cge1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgfVxyXG4gICAgYS5idG4tLWNpcmNsZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKuaciOWIpeWFpeWKm+eUu+mdoiovXHJcbiAgICAubW9udGhseS1pbnB1dCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZS1hbGwgdHIgdGQ6bnRoLWNoaWxkKC1uKzIpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5MDQyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVyIHRyIHRoOm50aC1jaGlsZCgtbisyKSB7XHJcbiAgICAgICAgd2lkdGg6NDBweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIgdHIgdGg6bnRoLWNoaWxkKG4rMyk6bnRoLWNoaWxkKC1uKzcpIHtcclxuICAgICAgICB3aWR0aDoxMjBweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1mcm9tIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtZGF5e1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICB9XHJcbiAgICAuaG9saWRheS1jb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzBDQjtcclxuICAgIH1cclxuICAgIC5ob2xpZGF5LWNvbG9yIHRkOm50aC1jaGlsZCgtbisyKSB7XHJcbiAgICAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZy1mb3JtIHtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICB9XHJcbiAgICAvKuekvuWGheS6pOmAmuiyu+eUu+mdoiovXHJcbiAgICAudHJhZmZpYy1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGODkwNDI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50cmFmZmljLWRheSB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgfVxyXG4gICAgLnRyYWZmaWMtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxuICAgIC50cmFmZmljLW1vbmV5IHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgfVxyXG4gICAgLmF0ZC10YWJsZSB0ZHtcclxuICAgICAgICBwYWRkaW5nOjBweCAxMHB4IDVweCA7XHJcbiAgICB9XHJcbiAgICAvKuWLpOaAoCovXHJcbiAgICAuYWxlcnQtZm9ybSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjBGNTtcclxuICAgICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgICAvKuiqsuS8muaXpeeoiyovXHJcbiAgICAudGFibGUtc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZS1zZWN0aW9uIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIH1cclxuICAgIC8q6Kqy5Lya5Ye65qygKi9cclxuICAgIC5zZWN0aW9uYWRlLWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uYWRlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTA0MjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS10ciB7XHJcblxyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUta2V5d2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uYWRlLW5hbWV3aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUtc2VsZWN0d2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBmb290ZXIge1xyXG4gICAgICBjb2xvcjojOTljO1xyXG4gICAgICBmb250LXNpemU6MTJwdDtcclxuICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzk5YztcclxuICAgICAgbWFyZ2luOjEwMHB4IDQwMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG5gfSA8L3N0eWxlPiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=