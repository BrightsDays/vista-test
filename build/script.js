/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/loadData.js":
/*!***************************************!*\
  !*** ./src/js/components/loadData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const loadData = data => {
  return data;
};

/* harmony default export */ __webpack_exports__["default"] = (loadData);

/***/ }),

/***/ "./src/js/components/loadList.js":
/*!***************************************!*\
  !*** ./src/js/components/loadList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const loadList = (listName, listType) => {
  const list = document.querySelector(`.${listType}list table tbody`);
  const count = document.querySelector(`.${listType}count`);

  for (let i = 0; i < listName.length; i++) {
    let row = `<tr id="${listType}-${i}"><td>${listName[i].historyNumber}</td>
                    <td>${listName[i].lastName} ${listName[i].firstName} ${listName[i].patrName}</td>
                    <td>${listName[i].historyNumber}</td></tr>`;
    list.innerHTML += row;
  }

  count.textContent = `(${listName.length})`;
};

/* harmony default export */ __webpack_exports__["default"] = (loadList);

/***/ }),

/***/ "./src/js/components/showInfo.js":
/*!***************************************!*\
  !*** ./src/js/components/showInfo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showInfo = (listName, listType) => {
  const name = document.querySelector('.name');
  const age = document.querySelector('.age');
  const diagnosis = document.querySelector('.diagnosis');
  const patientsList = document.querySelectorAll(`.${listType}list table tbody tr`);

  for (let i = 1; i < patientsList.length; i++) {
    const date = new Date();
    let year = date.getFullYear();
    patientsList[i].addEventListener('click', () => {
      name.textContent = `${listName[i - 1].lastName} ${listName[i - 1].firstName} ${listName[i - 1].patrName}`;
      age.textContent = year - listName[i - 1].birthDate.slice(0, -6);
      diagnosis.textContent = listName[i - 1].diagnosis;
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showInfo);

/***/ }),

/***/ "./src/js/components/showList.js":
/*!***************************************!*\
  !*** ./src/js/components/showList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showList = () => {
  const patientsNav = document.querySelectorAll('.list__nav-item');
  const patientsList = document.querySelectorAll('.list__item');

  const hideList = () => {
    patientsNav.forEach(element => {
      element.classList.remove('list__nav-item_active');
    });
    patientsList.forEach(element => {
      element.style.display = 'none';
    });
  };

  hideList();
  patientsNav[0].classList.add('list__nav-item_active');
  patientsList[0].style.display = 'block';

  for (let i = 0; i < patientsNav.length; i++) {
    patientsNav[i].addEventListener('click', () => {
      hideList();
      patientsNav[i].classList.add('list__nav-item_active');
      patientsList[i].style.display = 'block';
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showList);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loadData */ "./src/js/components/loadData.js");
/* harmony import */ var _components_loadList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadList */ "./src/js/components/loadList.js");
/* harmony import */ var _components_showList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/showList */ "./src/js/components/showList.js");
/* harmony import */ var _components_showInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/showInfo */ "./src/js/components/showInfo.js");




window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  const _present = Object(_components_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const _quitting = Object(_components_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])();

  Object(_components_loadList__WEBPACK_IMPORTED_MODULE_1__["default"])(_present, 'present');
  Object(_components_loadList__WEBPACK_IMPORTED_MODULE_1__["default"])(_quitting, 'quit');
  Object(_components_showInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(_present, 'present');
  Object(_components_showInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(_quitting, 'quit');
  Object(_components_showList__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map