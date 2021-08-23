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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/sectionade.js");
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

/***/ "./components/SectionAde.js":
/*!**********************************!*\
  !*** ./components/SectionAde.js ***!
  \**********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\SectionAde.js";






class SectionAde extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: []
    };
    this.getFireData();
    this.onClickCommit = this.onClickCommit.bind(this);
  } // firebaseから情報を取得


  getFireData() {
    // firebaseにアクセス 
    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref_m = db.ref('m_section/' + this.props.division + '/');
    let ref_t = db.ref('t_section_attendance/' + this.props.division + '/' + this.props.division_day + '/');
    let self = this; // 課員情報取得

    ref_m.on('value', snapshot => {
      if (snapshot.val() !== null) {
        self.setState({
          data: snapshot.val()
        });
      }
    }); // 対象年月日の課会出欠情報取得

    ref_t.on('value', snapshot => {
      if (snapshot.val() !== null) {
        self.setState({
          data1: snapshot.val()
        });
      }
    });
  } // 入力情報を登録


  onClickCommit() {
    let division = this.props.division;
    let division_day = this.props.division_day; // idでtableの要素を取得し、trタグのNodeListを取得

    let table = document.getElementById('sectionade-tbody');
    let tbl_tr = table.querySelectorAll('tr');

    let byId = function (id) {
      return document.getElementById(id).value;
    }; // firebaseにアクセス 


    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref = db.ref('t_section_attendance/' + division + '/' + division_day); // 開始時間と終了時間を登録

    ref.set({
      start_time: byId("start_time"),
      end_time: byId("end_time")
    }); // テーブルの1行(trタグ)毎に処理

    tbl_tr.forEach(function (tr) {
      // tdタグのNodeListを取得
      let cells = tr.querySelectorAll('td'); // firebaseの更新先設定 

      let userId = cells[0].firstElementChild.textContent; // 社員番号

      let selectValue = cells[2].firstElementChild.value; // 出欠
      // firebaseにアクセス 

      let ref = db.ref('t_section_attendance/' + division + '/' + division_day + '/' + userId); // 出欠情報を登録

      ref.set({
        select_value: selectValue
      });
    });
  }

  render() {
    // yyyy-mm-dd を yyyy年mm月dd に変換
    let str = this.props.division_day;
    let date = str.split('-');
    let strDate = date[0] + "年" + date[1] + "月" + date[2] + "日";
    let result = [];
    let selectDefault;

    for (let key in this.state.data) {
      if (this.state.data1.length !== 0) {
        selectDefault = this.state.data1[key]['select_value'];
      }

      result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        className: "sectionade-tr",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
            className: "sectionade-keywidth",
            children: key
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
            className: "sectionade-namewidth",
            children: this.state.data[key]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
            className: "sectionade-selectwidth",
            defaultValue: selectDefault,
            size: "sm",
            as: "select",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u25CB",
              children: "\u25CB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\xD7",
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }, this));
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "children-box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "monthly-input",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: 2,
            children: [" ", strDate, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: 1,
            children: this.props.division
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "monthly-input",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: "auto",
            children: "\u958B\u59CB\u6642\u523B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              id: "start_time",
              size: "sm",
              type: "time",
              defaultValue: this.state.data1.start_time
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: "auto",
            children: "\u7D42\u4E86\u6642\u523B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            sm: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              id: "end_time",
              size: "sm",
              type: "time",
              defaultValue: this.state.data1.end_time
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          className: "sectionade-all",
          bordered: true,
          size: "sm",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            className: "sectionade-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "\u793E\u54E1\u756A\u53F7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "\u8AB2\u54E1\u540D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "\u51FA\u6B20"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            id: "sectionade-tbody",
            children: result
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "javascript:void(0)",
        class: "btn btn--orange btn--circle btn--circle-a btn--shadow",
        onClick: this.onClickCommit,
        children: "\u4FDD\u5B58"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }, this);
  }

}

SectionAde = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state)(SectionAde);
/* harmony default export */ __webpack_exports__["default"] = (SectionAde);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/sectionade.js":
/*!*****************************!*\
  !*** ./pages/sectionade.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SectionAde__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionAde */ "./components/SectionAde.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\pages\\sectionade.js";



/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "Section Attendance page.",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionAde__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN0aW9uQWRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlY3Rpb25hZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL1N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZGF0YWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImZvb3RlciIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwibG9nb3V0IiwiYmluZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJkaXNwYXRjaCIsInR5cGUiLCJ2YWx1ZSIsImxvZ2luIiwidXNlcm5hbWUiLCJlbWFpbCIsIlJvdXRlciIsInB1c2giLCJ0aXRsZSIsImNvbm5lY3QiLCJzdGF0ZSIsIkxheW91dCIsInN0eWxlIiwiY2hpbGRyZW4iLCJTZWN0aW9uQWRlIiwiZGF0YSIsImRhdGExIiwiZ2V0RmlyZURhdGEiLCJvbkNsaWNrQ29tbWl0IiwiZGIiLCJkYXRhYmFzZSIsInJlZl9tIiwicmVmIiwiZGl2aXNpb24iLCJyZWZfdCIsImRpdmlzaW9uX2RheSIsInNlbGYiLCJvbiIsInNuYXBzaG90IiwidmFsIiwic2V0U3RhdGUiLCJ0YWJsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YmxfdHIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnlJZCIsImlkIiwic2V0Iiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwiZm9yRWFjaCIsInRyIiwiY2VsbHMiLCJ1c2VySWQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRleHRDb250ZW50Iiwic2VsZWN0VmFsdWUiLCJzZWxlY3RfdmFsdWUiLCJzdHIiLCJkYXRlIiwic3BsaXQiLCJzdHJEYXRlIiwicmVzdWx0Iiwic2VsZWN0RGVmYXVsdCIsImtleSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsUWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9zZWN0aW9uYWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZWN0aW9uYWRlLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdiwgTmF2RHJvcGRvd24sIENvbnRhaW5lciwgIFJvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIgKHByb3BzKTtcclxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICAvLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTonVVBEQVRFX1VTRVInLFxyXG4gICAgICAgICAgICB2YWx1ZTp7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAn44Ot44Kw44Kk44OzJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9pbmRleCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuICg8aGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRvcC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS1zaXplXCI+IC17dGhpcy5wcm9wcy50aXRsZX0tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cInRvcC1uYXZcIiBhY3RpdmVLZXk9XCIvaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7liKnnlKjogIXvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9eyB0aGlzLnByb3BzLnVzZXJuYW1lIH0gaWQ9XCJuYXYtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBldmVudEtleT1cIjFcIiBocmVmPVwiL3NldHRpbmdcIj7lgIvkurroqK3lrpo8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCIyXCIgb25DbGljaz17IHRoaXMubG9nb3V0IH0+44Ot44Kw44Ki44Km44OIPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdiBqdXN0aWZ5IGNsYXNzTmFtZT1cImJhc2UtbmF2XCIgdmFyaWFudD1cInRhYnNcIiBkZWZhdWx0QWN0aXZlS2V5PVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2luZm9ybWF0aW9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2hpdGVcIiA+44OI44OD44OXPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJsaW5rLTFcIiBocmVmPVwiL21vbnRobHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgPuaciOWIpeWFpeWKmzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0yXCIgaHJlZj1cIi90cmFmZmljaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgPuekvuWGheS6pOmAmuiyuzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0zXCIgaHJlZj1cIi90cmFmZmljb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7npL7lpJbkuqTpgJrosrs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstNFwiICBocmVmPVwiL2F0dGVuZGFuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgPuWLpOaAoOWxijwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay01XCIgaHJlZj1cIi9zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7oqrLkvJrmg4XloLE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkhlYWRlciA9IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZSkoSGVhZGVyKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5sb2dpbikge1xyXG4gICAgXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICB7c3R5bGV9XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyPVwiY29weXJpZ2h0IFRFU1QtVGFyby5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuTGF5b3V0ID0gY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShMYXlvdXQpO1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgRm9ybSwgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5jbGFzcyBTZWN0aW9uQWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuXHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOltdLFxyXG4gICAgICAgICAgICBkYXRhMTpbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRGaXJlRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2xpY2tDb21taXQgPSB0aGlzLm9uQ2xpY2tDb21taXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJlYmFzZeOBi+OCieaDheWgseOCkuWPluW+l1xyXG4gICAgZ2V0RmlyZURhdGEgKCkge1xyXG4gICAgICAgIC8vIGZpcmViYXNl44Gr44Ki44Kv44K744K5IFxyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZl9tID0gZGIucmVmKCdtX3NlY3Rpb24vJyArIHRoaXMucHJvcHMuZGl2aXNpb24gKyAnLycgKTtcclxuICAgICAgICBsZXQgcmVmX3QgPSBkYi5yZWYoJ3Rfc2VjdGlvbl9hdHRlbmRhbmNlLycgKyB0aGlzLnByb3BzLmRpdmlzaW9uICsgJy8nICsgdGhpcy5wcm9wcy5kaXZpc2lvbl9kYXkgKyAnLycgKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8g6Kqy5ZOh5oOF5aCx5Y+W5b6XXHJcbiAgICAgICAgcmVmX20ub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzbmFwc2hvdC52YWwoKSAhPT0gbnVsbCl7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IGRhdGE6IHNuYXBzaG90LnZhbCgpIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgLy8g5a++6LGh5bm05pyI5pel44Gu6Kqy5Lya5Ye65qyg5oOF5aCx5Y+W5b6XXHJcbiAgICAgICAgcmVmX3Qub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzbmFwc2hvdC52YWwoKSAhPT0gbnVsbCl7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IGRhdGExOiBzbmFwc2hvdC52YWwoKSB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyDlhaXlipvmg4XloLHjgpLnmbvpjLJcclxuICAgIG9uQ2xpY2tDb21taXQgKCkge1xyXG5cclxuICAgICAgICBsZXQgZGl2aXNpb24gPSB0aGlzLnByb3BzLmRpdmlzaW9uO1xyXG4gICAgICAgIGxldCBkaXZpc2lvbl9kYXkgPSB0aGlzLnByb3BzLmRpdmlzaW9uX2RheTtcclxuICAgICAgICAvLyBpZOOBp3RhYmxl44Gu6KaB57Sg44KS5Y+W5b6X44GX44CBdHLjgr/jgrDjga5Ob2RlTGlzdOOCkuWPluW+l1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uYWRlLXRib2R5Jyk7XHJcbiAgICAgICAgbGV0IHRibF90ciA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJyk7XHJcblxyXG4gICAgICAgIGxldCBieUlkID0gZnVuY3Rpb24oIGlkICkgeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICkudmFsdWUgfTtcclxuICAgICAgICAvLyBmaXJlYmFzZeOBq+OCouOCr+OCu+OCuSBcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ3Rfc2VjdGlvbl9hdHRlbmRhbmNlLycgKyBkaXZpc2lvbiArICcvJyArIGRpdmlzaW9uX2RheSApO1xyXG4gICAgICAgIC8vIOmWi+Wni+aZgumWk+OBqOe1guS6huaZgumWk+OCkueZu+mMslxyXG4gICAgICAgIHJlZi5zZXQoe1xyXG4gICAgICAgICAgICBzdGFydF90aW1lOiBieUlkKFwic3RhcnRfdGltZVwiKSxcclxuICAgICAgICAgICAgZW5kX3RpbWU6IGJ5SWQoXCJlbmRfdGltZVwiKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g44OG44O844OW44Or44GuMeihjCh0cuOCv+OCsCnmr47jgavlh6bnkIZcclxuICAgICAgICB0YmxfdHIuZm9yRWFjaChmdW5jdGlvbiAodHIpIHtcclxuICAgICAgICAgICAgLy8gdGTjgr/jgrDjga5Ob2RlTGlzdOOCkuWPluW+l1xyXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSB0ci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG4gICAgICAgICAgICAvLyBmaXJlYmFzZeOBruabtOaWsOWFiOioreWumiBcclxuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGNlbGxzWzBdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O+OAgC8vIOekvuWToeeVquWPt1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0VmFsdWUgPSBjZWxsc1syXS5maXJzdEVsZW1lbnRDaGlsZC52YWx1ZTsgICAvLyDlh7rmrKBcclxuICAgICAgICAgICAgLy8gZmlyZWJhc2XjgavjgqLjgq/jgrvjgrkgXHJcbiAgICAgICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ3Rfc2VjdGlvbl9hdHRlbmRhbmNlLycgKyBkaXZpc2lvbiArICcvJyArIGRpdmlzaW9uX2RheSArICcvJyArIHVzZXJJZCApO1xyXG4gICAgICAgICAgICAvLyDlh7rmrKDmg4XloLHjgpLnmbvpjLJcclxuICAgICAgICAgICAgcmVmLnNldCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RfdmFsdWU6IHNlbGVjdFZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgLy8geXl5eS1tbS1kZCDjgpIgeXl5eeW5tG1t5pyIZGQg44Gr5aSJ5o+bXHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucHJvcHMuZGl2aXNpb25fZGF5IDtcclxuICAgICAgICBsZXQgZGF0ZSA9IHN0ci5zcGxpdCggJy0nICk7XHJcbiAgICAgICAgbGV0IHN0ckRhdGUgPSBkYXRlWzBdICsgXCLlubRcIiArIGRhdGVbMV0gKyBcIuaciFwiICsgZGF0ZVsyXSArIFwi5pelXCI7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgc2VsZWN0RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGExLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3REZWZhdWx0ID0gdGhpcy5zdGF0ZS5kYXRhMVtrZXldWydzZWxlY3RfdmFsdWUnXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goPHRyIGtleT17a2V5fSBjbGFzc05hbWU9XCJzZWN0aW9uYWRlLXRyXCIgPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwic2VjdGlvbmFkZS1rZXl3aWR0aFwiPntrZXl9PC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwic2VjdGlvbmFkZS1uYW1ld2lkdGhcIj57IHRoaXMuc3RhdGUuZGF0YVtrZXldIH08L0Zvcm0uVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9XCJzZWN0aW9uYWRlLXNlbGVjdHdpZHRoXCIgZGVmYXVsdFZhbHVlPXtzZWxlY3REZWZhdWx0fSBzaXplPVwic21cIiBhcz1cInNlbGVjdFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuKXi1wiID7il4s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIsOXXCIgPsOXPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzPVwiY2hpbGRyZW4tYm94XCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1vbnRobHktaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT4ge3N0ckRhdGV9IDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezF9PnsgdGhpcy5wcm9wcy5kaXZpc2lvbiB9PC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1vbnRobHktaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiYXV0b1wiPumWi+Wni+aZguWIuzwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGlkPVwic3RhcnRfdGltZVwiIHNpemU9XCJzbVwiIHR5cGU9XCJ0aW1lXCIgZGVmYXVsdFZhbHVlPSB7dGhpcy5zdGF0ZS5kYXRhMS5zdGFydF90aW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCJhdXRvXCI+57WC5LqG5pmC5Yi7PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgaWQ9XCJlbmRfdGltZVwiIHNpemU9XCJzbVwiIHR5cGU9XCJ0aW1lXCIgZGVmYXVsdFZhbHVlPSB7dGhpcy5zdGF0ZS5kYXRhMS5lbmRfdGltZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJzZWN0aW9uYWRlLWFsbFwiIGJvcmRlcmVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInNlY3Rpb25hZGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+56S+5ZOh55Wq5Y+3PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiqsuWToeWQjTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lh7rmrKA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IGlkPVwic2VjdGlvbmFkZS10Ym9keVwiID57cmVzdWx0fTwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJidG4gYnRuLS1vcmFuZ2UgYnRuLS1jaXJjbGUgYnRuLS1jaXJjbGUtYSBidG4tLXNoYWRvd1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja0NvbW1pdH0gPuS/neWtmDwvYT5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5TZWN0aW9uQWRlID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoU2VjdGlvbkFkZSk7XHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25BZGU7IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBTZWN0aW9uQWRlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkFkZSc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJTZWN0aW9uIEF0dGVuZGFuY2UgcGFnZS5cIiA+XHJcbiAgICAgICAgPFNlY3Rpb25BZGUgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcclxuXHJcbiAgICAvKuODreOCsOOCpOODsyovXHJcbiAgICAubG9naW4tZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIH1cclxuICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB0O1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgLyrjg5jjg4Pjg4Djg7zjga7jgr/jgqTjg4jjg6sqL1xyXG4gICAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweDtcclxuICAgIH1cclxuICAgIC50aXRsZS1zaXplIHtcclxuICAgICAgICBmb250LXNpemU6MThwdDtcclxuICAgIH1cclxuICAgIC50b3AtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiM0QUJEQUM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcclxuICAgIH1cclxuICAgIC8q44OY44OD44OA44O844Gu5YCL5Lq65oOF5aCx44Go44Ot44Kw44Ki44Km44OIKi9cclxuICAgIC50b3AtbmF2IHtcclxuICAgICAgICBmb250LXNpemU6MTRwdDtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgbWFyZ2luOjVweDtcclxuICAgIH1cclxuICAgIC8q44OY44OD44OA44O844Gu44OK44OT44Ky44O844K344On44Oz44OQ44O8Ki9cclxuICAgIC5kaXYtbmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc4NzMzO1xyXG4gICAgfVxyXG4gICAgLmJhc2UtbmF2IHtcclxuICAgICAgICBtYXJnaW46MHB4IDQwMHB4IDEwMHB4IDQwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB0O1xyXG4gICAgfVxyXG4gICAgLmRpdi1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5MDQyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE2QzA5O1xyXG4gICAgfVxyXG4gICAgLyrjg4jjg4Pjg5fnlLvpnaIqL1xyXG4gICAgLmluZGV4LWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCAjNEFCREFDO1xyXG4gICAgfVxyXG4gICAgLmluZGV4LWJveCBwIHtcclxuICAgICAgICBtYXJnaW46MTBweCA0MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmluZGV4LWJveCAuYm94LXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdG9wOiAtMjdweDtcclxuICAgICAgICBsZWZ0OiAtM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRBQkRBQztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIH1cclxuICAgIC5tb2RhbC1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweCAwcHggMzU3cHg7XHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbi1pdGVtcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmxpc3QtaXRlbXMge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjNEFCREFDO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3Rncm91cC1jb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjlGQTsvKuiDjOaZr+iJsiovICAgICAgICBcclxuICAgIH1cclxuICAgIC5saXN0LWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOUZBOy8q6IOM5pmv6ImyKi9cclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWdyb3VwIGxpICsgbGkge1xyXG4gICAgICAgIGJvcmRlci10b3A6MXB4IGRvdHRlZCAjNjY2O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWdyb3VwIGxpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUFFREYwOy8q6IOM5pmv6ImyKi9cclxuICAgIH1cclxuICAgIC8q5YWl5Yqb44OV44Kp44O844Og44Gu6IOM5pmv6ImyKi9cclxuICAgIC5jaGlsZHJlbi1ib3gge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxLjVlbSAyZW07XHJcbiAgICAgICAgbWFyZ2luOjEwMHB4IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGZjZmY7Lyrog4zmma/oibIqL1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDZweCAjNEFCREFDO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzIpOy8q5b2xKi9cclxuICAgIH1cclxuICAgIC8q5L+d5a2Y44Oc44K/44OzKi9cclxuICAgIGEuYnRuLS1vcmFuZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMTZDMDk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDsgXHJcbiAgICAgICAgcmlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi0tb3JhbmdlOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjE2QzA5O1xyXG4gICAgfVxyXG4gICAgYS5idG4tLXNoYWRvdyB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi0tY2lyY2xlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8q5pyI5Yil5YWl5Yqb55S76Z2iKi9cclxuICAgIC5tb250aGx5LWlucHV0IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWFsbCB0ciB0ZDpudGgtY2hpbGQoLW4rMikge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGODkwNDI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIgdHIgdGg6bnRoLWNoaWxkKC1uKzIpIHtcclxuICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWhlYWRlciB0ciB0aDpudGgtY2hpbGQobiszKTpudGgtY2hpbGQoLW4rNykge1xyXG4gICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1kYXl7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIH1cclxuICAgIC5ob2xpZGF5LWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMENCO1xyXG4gICAgfVxyXG4gICAgLmhvbGlkYXktY29sb3IgdGQ6bnRoLWNoaWxkKC1uKzIpIHtcclxuICAgICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIH1cclxuICAgIC5zZXR0aW5nLWZvcm0ge1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgIH1cclxuICAgIC8q56S+5YaF5Lqk6YCa6LK755S76Z2iKi9cclxuICAgIC50cmFmZmljLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTA0MjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRyYWZmaWMtZGF5IHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAudHJhZmZpYy10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgfVxyXG4gICAgLnRyYWZmaWMtbW9uZXkge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAuYXRkLXRhYmxlIHRke1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHggNXB4IDtcclxuICAgIH1cclxuICAgIC8q5Yuk5oCgKi9cclxuICAgIC5hbGVydC1mb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMEY1O1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIH1cclxuICAgIC8q6Kqy5Lya5pel56iLKi9cclxuICAgIC50YWJsZS1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXNlY3Rpb24gdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgfVxyXG4gICAgLyroqrLkvJrlh7rmrKAqL1xyXG4gICAgLnNlY3Rpb25hZGUtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5MDQyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uYWRlLXRyIHtcclxuXHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS1rZXl3aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUtbmFtZXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS1zZWxlY3R3aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGZvb3RlciB7XHJcbiAgICAgIGNvbG9yOiM5OWM7XHJcbiAgICAgIGZvbnQtc2l6ZToxMnB0O1xyXG4gICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTljO1xyXG4gICAgICBtYXJnaW46MTAwcHggNDAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbmB9IDwvc3R5bGU+IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZGF0YWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==