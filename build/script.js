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

  const _present = Object(_components_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])([{
    "historyNumber": 230,
    "firstName": "jtrescgb",
    "lastName": "mgvnyjve",
    "patrName": "jfzirkwh",
    "birthDate": "1952-02-11",
    "diagnosis": "rpzcolmd",
    "bedNumber": 119
  }, {
    "historyNumber": 168,
    "firstName": "oiwkilgw",
    "lastName": "pmpmqtuv",
    "patrName": "uksilguj",
    "birthDate": "1960-04-02",
    "diagnosis": "mfpkfuii",
    "bedNumber": 219
  }, {
    "historyNumber": 110,
    "firstName": "jqdtmzot",
    "lastName": "gxwofiyw",
    "patrName": "pfizabcl",
    "birthDate": "1957-03-16",
    "diagnosis": "uupnukqy",
    "bedNumber": 289
  }, {
    "historyNumber": 436,
    "firstName": "jgcskson",
    "lastName": "wyevtgyd",
    "patrName": "qudgteoi",
    "birthDate": "1957-01-11",
    "diagnosis": "ytynsaxp",
    "bedNumber": 125
  }, {
    "historyNumber": 461,
    "firstName": "dwcuumcy",
    "lastName": "ntfteoiw",
    "patrName": "lqubuxhm",
    "birthDate": "1961-05-21",
    "diagnosis": "sbcijvei",
    "bedNumber": 104
  }, {
    "historyNumber": 176,
    "firstName": "wvoivjes",
    "lastName": "chfcuvul",
    "patrName": "wcurzxpg",
    "birthDate": "1985-01-22",
    "diagnosis": "molmejin",
    "bedNumber": 224
  }, {
    "historyNumber": 321,
    "firstName": "wvmwxbkx",
    "lastName": "ljlceogp",
    "patrName": "fgpivhty",
    "birthDate": "1969-01-10",
    "diagnosis": "ovoivjfy",
    "bedNumber": 126
  }, {
    "historyNumber": 427,
    "firstName": "rayrqfzk",
    "lastName": "avgpisqz",
    "patrName": "dppfgpgm",
    "birthDate": "1953-09-25",
    "diagnosis": "rwlmbwhu",
    "bedNumber": 128
  }, {
    "historyNumber": 213,
    "firstName": "zdqvfmvt",
    "lastName": "jldgvnam",
    "patrName": "mxecxhrn",
    "birthDate": "1966-12-05",
    "diagnosis": "ndarjsor",
    "bedNumber": 234
  }, {
    "historyNumber": 234,
    "firstName": "riovnehu",
    "lastName": "gtbxmrxo",
    "patrName": "bmgvknlq",
    "birthDate": "1938-07-24",
    "diagnosis": "xocuryue",
    "bedNumber": 163
  }, {
    "historyNumber": 161,
    "firstName": "uolmarjs",
    "lastName": "opjcfwru",
    "patrName": "aqfzkbxo",
    "birthDate": "1952-03-23",
    "diagnosis": "akxlmddf",
    "bedNumber": 236
  }, {
    "historyNumber": 423,
    "firstName": "zmmbqbkw",
    "lastName": "goalcdjn",
    "patrName": "lqywlnkk",
    "birthDate": "1973-12-04",
    "diagnosis": "skxjbdmy",
    "bedNumber": 196
  }, {
    "historyNumber": 298,
    "firstName": "bqcnhxtb",
    "lastName": "xnvpnuls",
    "patrName": "kskvcwef",
    "birthDate": "1971-07-29",
    "diagnosis": "mshfflom",
    "bedNumber": 231
  }, {
    "historyNumber": 458,
    "firstName": "mungrovm",
    "lastName": "xdxgkjpu",
    "patrName": "igdxhqjw",
    "birthDate": "1970-11-08",
    "diagnosis": "jfwtfqoy",
    "bedNumber": 133
  }, {
    "historyNumber": 468,
    "firstName": "csgeylfs",
    "lastName": "ysqcngsw",
    "patrName": "hsskxkhf",
    "birthDate": "1960-10-27",
    "diagnosis": "cvanogoz",
    "bedNumber": 166
  }, {
    "historyNumber": 369,
    "firstName": "jvapbinq",
    "lastName": "pbkzsorr",
    "patrName": "mgvlradl",
    "birthDate": "1974-07-22",
    "diagnosis": "yjzviyvh",
    "bedNumber": 294
  }, {
    "historyNumber": 500,
    "firstName": "cjqdpqml",
    "lastName": "shhnujkx",
    "patrName": "izxqkdlv",
    "birthDate": "1978-02-01",
    "diagnosis": "xcopiude",
    "bedNumber": 171
  }, {
    "historyNumber": 242,
    "firstName": "sldifcvv",
    "lastName": "tifctnje",
    "patrName": "vqrkcgwr",
    "birthDate": "1967-06-27",
    "diagnosis": "tsjqdqxr",
    "bedNumber": 218
  }, {
    "historyNumber": 475,
    "firstName": "xsyntfrw",
    "lastName": "khhowruy",
    "patrName": "lijrkbwg",
    "birthDate": "1967-04-04",
    "diagnosis": "qnsyqjvf",
    "bedNumber": 199
  }, {
    "historyNumber": 439,
    "firstName": "sembuvse",
    "lastName": "nhtwhphn",
    "patrName": "sdjoplii",
    "birthDate": "1955-06-16",
    "diagnosis": "paghobno",
    "bedNumber": 119
  }, {
    "historyNumber": 441,
    "firstName": "yhoxxugt",
    "lastName": "frvflptw",
    "patrName": "glonwxwo",
    "birthDate": "1950-02-07",
    "diagnosis": "hqkcgwqr",
    "bedNumber": 176
  }, {
    "historyNumber": 464,
    "firstName": "kgcopiwj",
    "lastName": "fvsyqjvf",
    "patrName": "mvtfrubu",
    "birthDate": "1965-08-30",
    "diagnosis": "uonydurx",
    "bedNumber": 210
  }, {
    "historyNumber": 105,
    "firstName": "lccdjmie",
    "lastName": "uppgkhgh",
    "patrName": "sushgiwj",
    "birthDate": "1974-09-06",
    "diagnosis": "hgkhdusf",
    "bedNumber": 269
  }, {
    "historyNumber": 346,
    "firstName": "nuiipblc",
    "lastName": "dhzfzirj",
    "patrName": "uzmltmcy",
    "birthDate": "1986-01-24",
    "diagnosis": "nvnehuhy",
    "bedNumber": 274
  }, {
    "historyNumber": 320,
    "firstName": "dznsyqjv",
    "lastName": "ddguidry",
    "patrName": "wnwvqpbn",
    "birthDate": "1969-03-31",
    "diagnosis": "knlolnjg",
    "bedNumber": 111
  }, {
    "historyNumber": 335,
    "firstName": "tceoiuej",
    "lastName": "ioscdmxf",
    "patrName": "hvkkwdyn",
    "birthDate": "1976-10-09",
    "diagnosis": "rvgpfizz",
    "bedNumber": 288
  }, {
    "historyNumber": 407,
    "firstName": "zrmjiotd",
    "lastName": "hexfdarl",
    "patrName": "fpkgaiqf",
    "birthDate": "1988-05-24",
    "diagnosis": "cskvyiux",
    "bedNumber": 148
  }]);

  const _quitting = Object(_components_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])([{
    "historyNumber": 278,
    "firstName": "nejhispw",
    "lastName": "odxgnvqs",
    "patrName": "qckvzlfq",
    "birthDate": "1952-02-11",
    "diagnosis": "oxvpjyvh",
    "cause": "ufqp"
  }, {
    "historyNumber": 151,
    "firstName": "uprmkona",
    "lastName": "lgvlqwof",
    "patrName": "htxivgrq",
    "birthDate": "1960-04-02",
    "diagnosis": "dreqstqv",
    "cause": "gtdi"
  }, {
    "historyNumber": 156,
    "firstName": "uokjqdqx",
    "lastName": "qkcepoyf",
    "patrName": "dweeidpr",
    "birthDate": "1957-03-16",
    "diagnosis": "nohqlfsa",
    "cause": "wizz"
  }, {
    "historyNumber": 500,
    "firstName": "acikyqjv",
    "lastName": "datvwwtf",
    "patrName": "tcepmpnt",
    "birthDate": "1957-01-11",
    "diagnosis": "iipaggnv",
    "cause": "okfw"
  }, {
    "historyNumber": 404,
    "firstName": "eojchhkh",
    "lastName": "fefmupob",
    "patrName": "orttonww",
    "birthDate": "1961-05-21",
    "diagnosis": "rtuqwlok",
    "cause": "lxgm"
  }, {
    "historyNumber": 348,
    "firstName": "rqcomvqs",
    "lastName": "qbimjmfr",
    "patrName": "uwbpufrv",
    "birthDate": "1985-01-22",
    "diagnosis": "brjtrcjo",
    "cause": "telu"
  }, {
    "historyNumber": 344,
    "firstName": "rnpllvup",
    "lastName": "qhpcqzad",
    "patrName": "mddgtfqo",
    "birthDate": "1969-01-10",
    "diagnosis": "zfboqoxu",
    "cause": "kmic"
  }, {
    "historyNumber": 262,
    "firstName": "vxboqowt",
    "lastName": "djkweflr",
    "patrName": "besbdlvy",
    "birthDate": "1953-09-25",
    "diagnosis": "hlikzsqc",
    "cause": "kuup"
  }, {
    "historyNumber": 316,
    "firstName": "xcophrot",
    "lastName": "eofibgct",
    "patrName": "lynqqjwj",
    "birthDate": "1966-12-05",
    "diagnosis": "eryrpxvj",
    "cause": "ilig"
  }, {
    "historyNumber": 206,
    "firstName": "pffkktrb",
    "lastName": "gcretjkc",
    "patrName": "bchfdzqd",
    "birthDate": "1938-07-24",
    "diagnosis": "sfundccd",
    "cause": "jkwg"
  }, {
    "historyNumber": 329,
    "firstName": "dyivdfnc",
    "lastName": "xfibfwvm",
    "patrName": "vwxvkood",
    "birthDate": "1952-03-23",
    "diagnosis": "xffmsdne",
    "cause": "idol"
  }, {
    "historyNumber": 293,
    "firstName": "egwofgsw",
    "lastName": "fkinnefo",
    "patrName": "fhuccdkq",
    "birthDate": "1973-12-04",
    "diagnosis": "bfyfctps",
    "cause": "vzmk"
  }, {
    "historyNumber": 341,
    "firstName": "ucelrdpo",
    "lastName": "cskvxcqz",
    "patrName": "bhfgpiss",
    "birthDate": "1971-07-29",
    "diagnosis": "kuuryude",
    "cause": "lrbh"
  }, {
    "historyNumber": 172,
    "firstName": "dympowui",
    "lastName": "evukopit",
    "patrName": "wdbsnlps",
    "birthDate": "1970-11-08",
    "diagnosis": "snjgdyke",
    "cause": "pnuj"
  }, {
    "historyNumber": 255,
    "firstName": "wixrpage",
    "lastName": "cxhtymne",
    "patrName": "huhzdpst",
    "birthDate": "1960-10-27",
    "diagnosis": "rdmcxlma",
    "cause": "qewy"
  }, {
    "historyNumber": 158,
    "firstName": "vujnlsga",
    "lastName": "kwiwjhjv",
    "patrName": "dbwixqjy",
    "birthDate": "1974-07-22",
    "diagnosis": "rpvmuppf",
    "cause": "gphn"
  }, {
    "historyNumber": 453,
    "firstName": "ujjuxfgn",
    "lastName": "wwtdlsks",
    "patrName": "nidprqeu",
    "birthDate": "1978-02-01",
    "diagnosis": "pobmhxvk",
    "cause": "mgtd"
  }, {
    "historyNumber": 236,
    "firstName": "hlkrfvsc",
    "lastName": "epnwuhbk",
    "patrName": "uwxzewyd",
    "birthDate": "1967-06-27",
    "diagnosis": "tikcdjnl",
    "cause": "tjno"
  }, {
    "historyNumber": 201,
    "firstName": "ocsjouji",
    "lastName": "pafcrese",
    "patrName": "rwjgboqo",
    "birthDate": "1967-04-04",
    "diagnosis": "xvjlbxje",
    "cause": "thex"
  }]);

  Object(_components_loadList__WEBPACK_IMPORTED_MODULE_1__["default"])(_present, 'present');
  Object(_components_loadList__WEBPACK_IMPORTED_MODULE_1__["default"])(_quitting, 'quit');
  Object(_components_showInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(_present, 'present');
  Object(_components_showInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(_quitting, 'quit');
  Object(_components_showList__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map