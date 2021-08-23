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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/information.js");
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

/***/ "./components/Information.js":
/*!***********************************!*\
  !*** ./components/Information.js ***!
  \***********************************/
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
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\components\\Information.js";






class Information extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modalTiltle: "",
      modalBody: "",
      active: 1,
      data: []
    };
    this.getFireData();
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.getFireData = this.getFireData.bind(this);
  } // モーダル非表示


  handleClose() {
    this.setState({
      show: false
    });
  } // モーダル表示


  handleShow(e) {
    // クリックされたNo取得
    let titleNo = e.target.value; // data内からNoと合致するメッセージ取得

    let modalStr = this.state.data[titleNo].title; // 改行処理

    let modalMsg = modalStr.split('\n').map(t => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [t, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 64
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 55
    }, this));
    this.setState({
      show: true,
      modalTiltle: e.target.textContent,
      // モーダル内のタイトル
      modalBody: modalMsg // モーダル内のメッセージ

    });
  } // ページネーション内のクリックされたNo取得


  handleActive(e) {
    this.setState({
      active: Number(e.target.text)
    });
  } // firebaseからお知らせ情報取得


  getFireData() {
    let db = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.database();
    let ref = db.ref('t_information/');
    let self = this;
    ref.on('value', snapshot => {
      self.setState({
        data: snapshot.val()
      });
    });
  }

  render() {
    let items = [];
    let listgroup = [];
    let startNo; // お知らせ件数に応じたページネーション設定

    for (let number = 1; number <= Math.ceil(this.state.data.length / 5); number++) {
      items.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, {
        active: number === this.state.active,
        onClick: this.handleActive,
        children: number
      }, number, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this));
    }

    const paginationBasic = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "pagination-items",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
        children: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this); // 選択されたページネーションによるお知らせ内容変更


    if (this.state.active === 1) {
      startNo = this.state.active;
    } else {
      startNo = (this.state.active - 1) * 5 + 1;
    }

    for (let number = startNo; number <= this.state.active * 5; number++) {
      if (this.state.data[number] !== undefined) {
        listgroup.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "list-color",
          onClick: this.handleShow,
          value: number,
          children: this.state.data[number].message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this));
      } else {
        listgroup.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "list-color",
          children: "-"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this));
      }
    }

    const listBasic = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "listgroup-color",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "modal-group",
          children: listgroup
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "list-items",
        children: paginationBasic
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, this);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "index-box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        class: "box-title",
        children: "\u4F1A\u793E\u304B\u3089\u306E\u9023\u7D61"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 14
      }, this), listBasic, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        centered: true,
        show: this.state.show,
        onHide: this.handleClose,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
          closeButton: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
            children: this.state.modalTiltle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
          children: this.state.modalBody
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "secondary",
            onClick: this.handleClose,
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 10
    }, this);
  }

}

Information = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state)(Information);
/* harmony default export */ __webpack_exports__["default"] = (Information);

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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/information.js":
/*!******************************!*\
  !*** ./pages/information.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Information */ "./components/Information.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\NagatsuYuhei\\next_app\\pages\\information.js";



/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "Top page.",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Information__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
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

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJmb290ZXIiLCJIZWFkZXIiLCJjb25zdHJ1Y3RvciIsImxvZ291dCIsImJpbmQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidmFsdWUiLCJsb2dpbiIsInVzZXJuYW1lIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwidGl0bGUiLCJjb25uZWN0Iiwic3RhdGUiLCJJbmZvcm1hdGlvbiIsInNob3ciLCJtb2RhbFRpbHRsZSIsIm1vZGFsQm9keSIsImFjdGl2ZSIsImRhdGEiLCJnZXRGaXJlRGF0YSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImhhbmRsZUFjdGl2ZSIsInNldFN0YXRlIiwiZSIsInRpdGxlTm8iLCJ0YXJnZXQiLCJtb2RhbFN0ciIsIm1vZGFsTXNnIiwic3BsaXQiLCJtYXAiLCJ0IiwidGV4dENvbnRlbnQiLCJOdW1iZXIiLCJ0ZXh0IiwiZGIiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvbiIsInNuYXBzaG90IiwidmFsIiwiaXRlbXMiLCJsaXN0Z3JvdXAiLCJzdGFydE5vIiwibnVtYmVyIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdpbmF0aW9uQmFzaWMiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwibGlzdEJhc2ljIiwiTGF5b3V0Iiwic3R5bGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsK0NBQXJC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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFBQSxhQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxRZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZixFOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmZvcm1hdGlvbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybig8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmZvb3Rlcn08L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXYsIE5hdkRyb3Bkb3duLCBDb250YWluZXIsICBSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6J1VQREFURV9VU0VSJyxcclxuICAgICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICAgICAgbG9naW46ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJ+ODreOCsOOCpOODsycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvaW5kZXgnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoPGhlYWRlcj5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0b3AtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtc2l6ZVwiPiAte3RoaXMucHJvcHMudGl0bGV9LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJ0b3AtbmF2XCIgYWN0aXZlS2V5PVwiL2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Yip55So6ICF77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXsgdGhpcy5wcm9wcy51c2VybmFtZSB9IGlkPVwibmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCIxXCIgaHJlZj1cIi9zZXR0aW5nXCI+5YCL5Lq66Kit5a6aPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGV2ZW50S2V5PVwiMlwiIG9uQ2xpY2s9eyB0aGlzLmxvZ291dCB9PuODreOCsOOCouOCpuODiDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxOYXYganVzdGlmeSBjbGFzc05hbWU9XCJiYXNlLW5hdlwiIHZhcmlhbnQ9XCJ0YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmZvcm1hdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgPuODiOODg+ODlzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0xXCIgaHJlZj1cIi9tb250aGx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7mnIjliKXlhaXlips8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMlwiIGhyZWY9XCIvdHJhZmZpY2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7npL7lhoXkuqTpgJrosrs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstM1wiIGhyZWY9XCIvdHJhZmZpY291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2hpdGVcIiA+56S+5aSW5Lqk6YCa6LK7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJsaW5rLTRcIiAgaHJlZj1cIi9hdHRlbmRhbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZVwiID7li6TmgKDlsYo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstNVwiIGhyZWY9XCIvc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2hpdGVcIiA+6Kqy5Lya5oOF5aCxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5IZWFkZXIgPSBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUpKEhlYWRlcik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jbGFzcyBJbmZvcm1hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZGFsVGlsdGxlOlwiXCIsXHJcbiAgICAgICAgICAgIG1vZGFsQm9keTpcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmU6MSxcclxuICAgICAgICAgICAgZGF0YTpbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRGaXJlRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvdyA9IHRoaXMuaGFuZGxlU2hvdy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWN0aXZlID0gdGhpcy5oYW5kbGVBY3RpdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldEZpcmVEYXRhID0gdGhpcy5nZXRGaXJlRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODouODvOODgOODq+mdnuihqOekulxyXG4gICAgaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3c6ZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6Ljg7zjg4Djg6vooajnpLpcclxuICAgIGhhbmRsZVNob3coZSkge1xyXG4gICAgICAgIC8vIOOCr+ODquODg+OCr+OBleOCjOOBn05v5Y+W5b6XXHJcbiAgICAgICAgbGV0IHRpdGxlTm8gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAvLyBkYXRh5YaF44GL44KJTm/jgajlkIjoh7TjgZnjgovjg6Hjg4Pjgrvjg7zjgrjlj5blvpdcclxuICAgICAgICBsZXQgbW9kYWxTdHIgPSB0aGlzLnN0YXRlLmRhdGFbIHRpdGxlTm8gXS50aXRsZVxyXG4gICAgICAgIC8vIOaUueihjOWHpueQhlxyXG4gICAgICAgIGxldCBtb2RhbE1zZyA9IG1vZGFsU3RyLnNwbGl0KCdcXG4nKS5tYXAodCA9PiAoPHNwYW4+e3R9PGJyIC8+PC9zcGFuPikpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93OnRydWUsXHJcbiAgICAgICAgICAgIG1vZGFsVGlsdGxlOiBlLnRhcmdldC50ZXh0Q29udGVudCzjgIAvLyDjg6Ljg7zjg4Djg6vlhoXjga7jgr/jgqTjg4jjg6tcclxuICAgICAgICAgICAgbW9kYWxCb2R5OiBtb2RhbE1zZyAgICAgICAgICAgICAgICAgLy8g44Oi44O844OA44Or5YaF44Gu44Oh44OD44K744O844K4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oa44O844K444ON44O844K344On44Oz5YaF44Gu44Kv44Oq44OD44Kv44GV44KM44GfTm/lj5blvpdcclxuICAgIGhhbmRsZUFjdGl2ZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTpOdW1iZXIoZS50YXJnZXQudGV4dClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJlYmFzZeOBi+OCieOBiuefpeOCieOBm+aDheWgseWPluW+l1xyXG4gICAgZ2V0RmlyZURhdGEoKSB7XHJcblxyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZigndF9pbmZvcm1hdGlvbi8nKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJlZi5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6c25hcHNob3QudmFsKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IGxpc3Rncm91cCA9IFtdO1xyXG4gICAgICAgIGxldCBzdGFydE5vO1xyXG4gICAgICAgIC8vIOOBiuefpeOCieOBm+S7tuaVsOOBq+W/nOOBmOOBn+ODmuODvOOCuOODjeODvOOCt+ODp+ODs+ioreWumlxyXG4gICAgICAgIGZvciAobGV0IG51bWJlciA9IDE7IG51bWJlciA8PSAoTWF0aC5jZWlsKHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggLyA1KSk7IG51bWJlcisrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtIGtleT17bnVtYmVyfSBhY3RpdmU9e251bWJlciA9PT0gdGhpcy5zdGF0ZS5hY3RpdmV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWN0aXZlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAge251bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25CYXNpYyA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24taXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8g6YG45oqe44GV44KM44Gf44Oa44O844K444ON44O844K344On44Oz44Gr44KI44KL44GK55+l44KJ44Gb5YaF5a655aSJ5pu0XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0Tm8gPSB0aGlzLnN0YXRlLmFjdGl2ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydE5vID0gKHRoaXMuc3RhdGUuYWN0aXZlLTEpICogNSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBudW1iZXIgPSBzdGFydE5vOyBudW1iZXIgPD0gKCB0aGlzLnN0YXRlLmFjdGl2ZSAqIDUgKTsgbnVtYmVyKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5zdGF0ZS5kYXRhW251bWJlcl0gIT09IHVuZGVmaW5lZCApe1xyXG4gICAgICAgICAgICAgICAgbGlzdGdyb3VwLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtY29sb3JcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHZhbHVlPXtudW1iZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRhdGFbbnVtYmVyXS5tZXNzYWdlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTsgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0Z3JvdXAucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgIGNsYXNzTmFtZT1cImxpc3QtY29sb3JcIj4tPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RCYXNpYyA9IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0Z3JvdXAtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW9kYWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3Rncm91cH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbkJhc2ljfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiaW5kZXgtYm94XCI+XHJcbiAgICAgICAgICAgIFx0PHNwYW4gY2xhc3M9XCJib3gtdGl0bGVcIj7kvJrnpL7jgYvjgonjga7pgKPntaE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7bGlzdEJhc2ljfVxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNlbnRlcmVkIHNob3c9e3RoaXMuc3RhdGUuc2hvd30gb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICBcdCAgICAgICAgPE1vZGFsLlRpdGxlPnsgdGhpcy5zdGF0ZS5tb2RhbFRpbHRsZX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgXHQ8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgXHQgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgIFx0ICAgICAgICB7IHRoaXMuc3RhdGUubW9kYWxCb2R5IH1cclxuICAgICAgICAgICAgICAgXHQgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgXHQgICAgPC9Nb2RhbD5cclxuICAgICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuSW5mb3JtYXRpb24gPSBjb25uZWN0KChzdGF0ZSk9PnN0YXRlKShJbmZvcm1hdGlvbik7XHJcbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5sb2dpbikge1xyXG4gICAgXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICB7c3R5bGV9XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyPVwiY29weXJpZ2h0IFRFU1QtVGFyby5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuTGF5b3V0ID0gY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShMYXlvdXQpO1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0luZm9ybWF0aW9uJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJUb3AgcGFnZS5cIiA+XHJcbiAgICAgICAgPEluZm9ybWF0aW9uIC8+XHJcbiAgICA8L0xheW91dD5cclxuKTsiLCJleHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcclxuXHJcbiAgICAvKuODreOCsOOCpOODsyovXHJcbiAgICAubG9naW4tZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIH1cclxuICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB0O1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgLyrjg5jjg4Pjg4Djg7zjga7jgr/jgqTjg4jjg6sqL1xyXG4gICAgLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweDtcclxuICAgIH1cclxuICAgIC50aXRsZS1zaXplIHtcclxuICAgICAgICBmb250LXNpemU6MThwdDtcclxuICAgIH1cclxuICAgIC50b3AtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiM0QUJEQUM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcclxuICAgIH1cclxuICAgIC8q44OY44OD44OA44O844Gu5YCL5Lq65oOF5aCx44Go44Ot44Kw44Ki44Km44OIKi9cclxuICAgIC50b3AtbmF2IHtcclxuICAgICAgICBmb250LXNpemU6MTRwdDtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgbWFyZ2luOjVweDtcclxuICAgIH1cclxuICAgIC8q44OY44OD44OA44O844Gu44OK44OT44Ky44O844K344On44Oz44OQ44O8Ki9cclxuICAgIC5kaXYtbmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc4NzMzO1xyXG4gICAgfVxyXG4gICAgLmJhc2UtbmF2IHtcclxuICAgICAgICBtYXJnaW46MHB4IDQwMHB4IDEwMHB4IDQwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB0O1xyXG4gICAgfVxyXG4gICAgLmRpdi1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5MDQyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE2QzA5O1xyXG4gICAgfVxyXG4gICAgLyrjg4jjg4Pjg5fnlLvpnaIqL1xyXG4gICAgLmluZGV4LWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCAjNEFCREFDO1xyXG4gICAgfVxyXG4gICAgLmluZGV4LWJveCBwIHtcclxuICAgICAgICBtYXJnaW46MTBweCA0MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmluZGV4LWJveCAuYm94LXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdG9wOiAtMjdweDtcclxuICAgICAgICBsZWZ0OiAtM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRBQkRBQztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIH1cclxuICAgIC5tb2RhbC1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luOjBweCA0MDBweCAwcHggMzU3cHg7XHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbi1pdGVtcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmxpc3QtaXRlbXMge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjNEFCREFDO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3Rncm91cC1jb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjlGQTsvKuiDjOaZr+iJsiovICAgICAgICBcclxuICAgIH1cclxuICAgIC5saXN0LWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOUZBOy8q6IOM5pmv6ImyKi9cclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWdyb3VwIGxpICsgbGkge1xyXG4gICAgICAgIGJvcmRlci10b3A6MXB4IGRvdHRlZCAjNjY2O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWdyb3VwIGxpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUFFREYwOy8q6IOM5pmv6ImyKi9cclxuICAgIH1cclxuICAgIC8q5YWl5Yqb44OV44Kp44O844Og44Gu6IOM5pmv6ImyKi9cclxuICAgIC5jaGlsZHJlbi1ib3gge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxLjVlbSAyZW07XHJcbiAgICAgICAgbWFyZ2luOjEwMHB4IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGZjZmY7Lyrog4zmma/oibIqL1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDZweCAjNEFCREFDO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzIpOy8q5b2xKi9cclxuICAgIH1cclxuICAgIC8q5L+d5a2Y44Oc44K/44OzKi9cclxuICAgIGEuYnRuLS1vcmFuZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMTZDMDk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDsgXHJcbiAgICAgICAgcmlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi0tb3JhbmdlOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjE2QzA5O1xyXG4gICAgfVxyXG4gICAgYS5idG4tLXNoYWRvdyB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi0tY2lyY2xlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8q5pyI5Yil5YWl5Yqb55S76Z2iKi9cclxuICAgIC5tb250aGx5LWlucHV0IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWFsbCB0ciB0ZDpudGgtY2hpbGQoLW4rMikge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGODkwNDI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIgdHIgdGg6bnRoLWNoaWxkKC1uKzIpIHtcclxuICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWhlYWRlciB0ciB0aDpudGgtY2hpbGQobiszKTpudGgtY2hpbGQoLW4rNykge1xyXG4gICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1kYXl7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIH1cclxuICAgIC5ob2xpZGF5LWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMENCO1xyXG4gICAgfVxyXG4gICAgLmhvbGlkYXktY29sb3IgdGQ6bnRoLWNoaWxkKC1uKzIpIHtcclxuICAgICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIH1cclxuICAgIC5zZXR0aW5nLWZvcm0ge1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgIH1cclxuICAgIC8q56S+5YaF5Lqk6YCa6LK755S76Z2iKi9cclxuICAgIC50cmFmZmljLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTA0MjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRyYWZmaWMtZGF5IHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAudHJhZmZpYy10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgfVxyXG4gICAgLnRyYWZmaWMtbW9uZXkge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcbiAgICAuYXRkLXRhYmxlIHRke1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHggNXB4IDtcclxuICAgIH1cclxuICAgIC8q5Yuk5oCgKi9cclxuICAgIC5hbGVydC1mb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMEY1O1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIH1cclxuICAgIC8q6Kqy5Lya5pel56iLKi9cclxuICAgIC50YWJsZS1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXNlY3Rpb24gdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgfVxyXG4gICAgLyroqrLkvJrlh7rmrKAqL1xyXG4gICAgLnNlY3Rpb25hZGUtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5MDQyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uYWRlLXRyIHtcclxuXHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS1rZXl3aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25hZGUtbmFtZXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbmFkZS1zZWxlY3R3aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGZvb3RlciB7XHJcbiAgICAgIGNvbG9yOiM5OWM7XHJcbiAgICAgIGZvbnQtc2l6ZToxMnB0O1xyXG4gICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTljO1xyXG4gICAgICBtYXJnaW46MTAwcHggNDAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbmB9IDwvc3R5bGU+IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9