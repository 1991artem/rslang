/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/HomeBtn.ts":
/*!*******************************!*\
  !*** ./components/HomeBtn.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBtn": () => (/* binding */ HomeBtn)
/* harmony export */ });
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startPageListener */ "./components/startPageListener.ts");


var HomeBtn =
/** @class */
function () {
  function HomeBtn() {}

  HomeBtn.prototype.active = function () {
    var _a;

    var onClick = function onClick(e) {
      var _a, _b, _c, _d, _e, _f, _g;

      if (e.target.className === 'logo-icon' || e.target.innerHTML === 'RSLang' || e.target.innerHTML === 'Home' || e.target.innerHTML === 'About Us') {
        if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
          (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.TEXTBOOK_CONTAINER) === null || _a === void 0 ? void 0 : _a.classList.add("display_none");
          (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.DICTIONARY_CONTAINER) === null || _b === void 0 ? void 0 : _b.classList.add("display_none");
          (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC) === null || _c === void 0 ? void 0 : _c.classList.add("display_none");
          (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_PAGE_WRAPPER) === null || _d === void 0 ? void 0 : _d.classList.add("display_none");
          (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.HERO_PAGE) === null || _e === void 0 ? void 0 : _e.classList.remove("display_none");
          (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.ADVANTAGES_PAGE) === null || _f === void 0 ? void 0 : _f.classList.remove("display_none");
          (_g = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.ABOUT_PAGE) === null || _g === void 0 ? void 0 : _g.classList.remove("display_none");
        }
      }
    };

    if (document.querySelector('#pageHeader')) {
      (_a = document.querySelector('#pageHeader')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onClick);
    }
  };

  return HomeBtn;
}();



/***/ }),

/***/ "./components/api.ts":
/*!***************************!*\
  !*** ./components/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API)
/* harmony export */ });
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autorisation/autorisation-form */ "./components/autorisation/autorisation-form.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




var API =
/** @class */
function () {
  function API(url) {
    API.url = url;
  }

  API.errorHandler = function (res) {
    if (!res.ok) {
      if (res.status > 404) console.log("Sorry, but there is ".concat(res.status, " error: ").concat(res.statusText));
      throw Error(res.statusText);
    }

    return res;
  }; // ================================== USERS ===========================================================


  API.signinUsersFromServer = function (data) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/signin"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: data
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData = data;
              console.log(data);

              if (!localStorage.getItem("user")) {
                localStorage.setItem("user", JSON.stringify(data));
              } else {
                API.checkToken();
              }

              _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__.AutorisationForm.closeModalWindow();
              return _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__.AutorisationForm.checkAutorisation();
            })["catch"](function (err) {
              console.log("Не удалось найти такого пользователя!!! Повторите попытку");
            })];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  API.createUsersOnServer = function (data) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
              },
              body: data
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (data) {
              _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__.AutorisationForm.closeModalWindow();
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.getUserFromServer = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(id), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.getUsers = data;
            })["catch"](function (err) {
              console.log("GET USER Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.updateUserOnServer = function (id, data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/"), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: data
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.deleteUserOnServer = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/"), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            })["catch"](function (err) {
              return console.log("delete User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.getNewUserTokenFromServer = function (id) {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(id, "/tokens"), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat((_a = _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData) === null || _a === void 0 ? void 0 : _a.refreshToken)
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.newToken = data;
            })["catch"](function (err) {
              return console.log("GET USER Error", err);
            })];

          case 1:
            _b.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // ================================== Users/Words ===========================================================


  API.getUserWordsFromServer = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(id, "/words"), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userWords = data;
            })["catch"](function (err) {
              return console.log("GET USER WORDS Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.createUsersWordsOnServer = function (userId, wordId, difficulty, cardData) {
    return __awaiter(this, void 0, void 0, function () {
      var data;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            data = {
              difficulty: difficulty,
              optional: __assign({}, cardData)
            };
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/words/").concat(wordId), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: JSON.stringify(data)
            }).then(function (response) {
              return _this.errorHandler(response);
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.getUserWordsByIdFromServer = function (userId, wordId) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/words/").concat(wordId), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {})["catch"](function (err) {
              return console.log("GET USER WORDS Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.updateUserWordsOnServer = function (userId, wordId, data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/words/").concat(wordId), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: data
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.deleteUserWordsOnServer = function (userId, wordId) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/words/").concat(wordId), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // ================================== Users/AggregatedWords ===========================================================


  API.getAllUserAgregatedWordsFromServer = function (userId, group, page) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/aggregatedWords?group=").concat(group, "&page=2&wordsPerPage=").concat(page), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.allAgregatedWords = data;
            })["catch"](function (err) {
              return console.log("load agregated word Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.getAllUserAgregatedWordsByIdFromServer = function (userId, wordId) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/aggregatedWords/").concat(wordId), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.allAgregatedByIdWords = data;
            })["catch"](function (err) {
              return console.log("load agregated word Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // ================================== Users/Statistic ===========================================================


  API.getUserStatisticFromServer = function (userId) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/statistics"), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return data;
            })["catch"](function (err) {
              return console.log("load agregated word Error", err);
            })];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  API.updateUserStatisticFromServer = function (userId, data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/statistics"), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: data
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // ================================== Users/Setting ===========================================================


  API.getUserSettingsFromServer = function (userId) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/settings"), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userSettings = data;
            })["catch"](function (err) {
              return console.log("load agregated word Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.updateUserSettingsFromServer = function (userId, data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/settings"), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: data
            })["catch"](function (err) {
              return console.log("create User Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // ================================== GET WORDS ===========================================================


  API.loadWordsFromServer = function (group, page) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/words?group=").concat(group, "&page=").concat(page), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.allWordsStorage = data;
              return data;
            })["catch"](function (err) {
              return console.log("Add User Error", err);
            })];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  API.loadWordToIdFromServer = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/words/").concat(id), {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              }
            }).then(function (response) {
              return _this.errorHandler(response);
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.wordId = data;
            })["catch"](function (err) {
              return console.log("load word Error", err);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  API.checkToken = function () {
    var _a, _b;

    if ((_a = _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData) === null || _a === void 0 ? void 0 : _a.userId) {
      API.getNewUserTokenFromServer((_b = _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData) === null || _b === void 0 ? void 0 : _b.userId);

      if (_dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.newToken) {
        API.saveToken();
      }
    }
  };

  API.saveToken = function () {
    var _a, _b;

    if (_dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData) {
      _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData.refreshToken = (_a = _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.newToken) === null || _a === void 0 ? void 0 : _a.refreshToken;
      _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData.token = (_b = _dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.newToken) === null || _b === void 0 ? void 0 : _b.token;
      localStorage.setItem("user", JSON.stringify(_dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData));
    }
  };

  API.getToken = function () {
    if (_dataStorage__WEBPACK_IMPORTED_MODULE_0__.DataStorage.userData) {
      var user = localStorage.getItem('user');

      if (user) {
        return JSON.parse(user).token;
      }
    }
  };

  return API;
}();



/***/ }),

/***/ "./components/autorisation/autorisation-form.ts":
/*!******************************************************!*\
  !*** ./components/autorisation/autorisation-form.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutorisationForm": () => (/* binding */ AutorisationForm)
/* harmony export */ });
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./components/api.ts");
/* harmony import */ var _styles_sass_pages_authorization_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/sass/pages/_authorization.scss */ "./styles/sass/pages/_authorization.scss");
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataStorage */ "./components/dataStorage.ts");





var AutorisationForm =
/** @class */
function () {
  function AutorisationForm() {}

  AutorisationForm.prototype.buttonAutorisationForm = function () {
    var _this = this;

    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();
    AutorisationForm.checkAutorisation();
    this.singinClick();

    var singIn = function singIn(event) {
      event.preventDefault();
      var singinUser = {
        name: _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_INPUT_EMAIL.value,
        email: _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_INPUT_EMAIL.value,
        password: _this.verificationLengthPassword(_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_INPUT_PASSWORD.value)
      };

      if (singinUser.password) {
        AutorisationForm.isAutorized = _api__WEBPACK_IMPORTED_MODULE_1__.API.signinUsersFromServer(JSON.stringify(singinUser));
      }
    };

    var singUp = function singUp(event) {
      event.preventDefault();
      var singUpUser = {
        name: _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGUP_FORM_NAME.value,
        email: _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGUP_FORM_EMAIL.value,
        password: _this.verificationLengthPassword(_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGUP_FORM_PASSWORD.value)
      };

      if (singUpUser.password) {
        _api__WEBPACK_IMPORTED_MODULE_1__.API.createUsersOnServer(JSON.stringify(singUpUser));
      }
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGIN) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGIN.addEventListener('click', singIn);
    }

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGUP) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SINGUP.addEventListener('click', singUp);
    }
  };

  AutorisationForm.prototype.verificationLengthPassword = function (string) {
    if (string.length < 8) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_INPUT_PASSWORD.classList.add('wrongPassword');
      setTimeout(function () {
        return _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_INPUT_PASSWORD.classList.remove('wrongPassword');
      }, 1000);
      return '';
    } else {
      return string;
    }
  };

  AutorisationForm.closeModalWindow = function () {
    var _a;

    (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MODAL_WINDOW) === null || _a === void 0 ? void 0 : _a.classList.add('closeModal');
  };

  AutorisationForm.prototype.singinClick = function () {
    var _this = this;

    var onClick = function onClick(e) {
      var _a;

      if (e.target.innerHTML === 'LOG OUT') {
        _this.logOut();
      } else {
        (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MODAL_WINDOW) === null || _a === void 0 ? void 0 : _a.classList.remove('closeModal');
      }
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.addEventListener('click', onClick);
    }
  };

  AutorisationForm.checkAutorisation = function () {
    var userInfo = localStorage.getItem('user');

    if (userInfo) {
      _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.userData = JSON.parse(userInfo);

      if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.innerHTML = 'LOG OUT';
        _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.classList.add('true');
      }
    }

    return Boolean(userInfo);
  };

  AutorisationForm.prototype.logOut = function () {
    localStorage.clear();

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.innerHTML = 'SIGN IN';
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.classList.remove('true');
    }

    AutorisationForm.isAutorized = new Promise(function (res) {
      res(false);
    });
  };

  AutorisationForm.isAutorized = Promise.resolve(false);
  return AutorisationForm;
}();



/***/ }),

/***/ "./components/dataStorage.ts":
/*!***********************************!*\
  !*** ./components/dataStorage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStorage": () => (/* binding */ DataStorage)
/* harmony export */ });
var DataStorage =
/** @class */
function () {
  function DataStorage() {}

  DataStorage.allWordsStorage = [];
  DataStorage.isUserAutorized = false;
  DataStorage.userData = null;
  DataStorage.newToken = null;
  DataStorage.wordId = null;
  DataStorage.allAgregatedWords = null;
  DataStorage.allAgregatedByIdWords = null;
  DataStorage.getUsers = null;
  DataStorage.userWords = null;
  DataStorage.userStatistics = null;
  DataStorage.userSettings = null;
  DataStorage.wordForGame = null;
  return DataStorage;
}();



/***/ }),

/***/ "./components/dictionary/dictionary.ts":
/*!*********************************************!*\
  !*** ./components/dictionary/dictionary.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": () => (/* binding */ Dictionary)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./components/api.ts");
/* harmony import */ var _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../autorisation/autorisation-form */ "./components/autorisation/autorisation-form.ts");
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "./components/interfaces.ts");
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _textbook_textbook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../textbook/textbook */ "./components/textbook/textbook.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};








var Dictionary =
/** @class */
function () {
  function Dictionary() {
    this.quantityPages = 30;
    this.btnNumber = 1;
    this.btnGroupNumber = 1;
    this.visiblePages = 6;
    this.quantityGroups = 6;
    this.englishLevel = ["Easy - A1", "Easy - A2", "Medium - B1", "Medium - B2", "Hard - C1", "Hard - C2"];
  }

  Dictionary.prototype.build = function () {
    var _this = this;

    var _a, _b, _c, _d, _e;

    var DICTIONARY = document.createElement("ul");
    var PAGINATION_DICTIONARY = document.createElement("ul");
    var GROUPS_DICTIONARY = document.createElement("div");
    var btnNext = document.createElement("li");
    var btnPrev = document.createElement("li");
    DICTIONARY.id = "dictionary";
    GROUPS_DICTIONARY.id = "groups-dictionary";
    PAGINATION_DICTIONARY.id = "pagination-dictionary";
    DICTIONARY.className = "dictionary-list";
    GROUPS_DICTIONARY.className = "groups";
    btnNext.innerHTML = "Next &rsaquo;";
    btnPrev.innerHTML = "&lsaquo; Previous";
    btnNext.className = "next-btn";
    btnPrev.className = "prev-btn";

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.MAIN) {
      (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.DICTIONARY_CONTAINER) === null || _a === void 0 ? void 0 : _a.append(GROUPS_DICTIONARY);
      (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.DICTIONARY_CONTAINER) === null || _b === void 0 ? void 0 : _b.append(PAGINATION_DICTIONARY);
      (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.DICTIONARY_CONTAINER) === null || _c === void 0 ? void 0 : _c.append(DICTIONARY);
      (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.DICTIONARY_CONTAINER) === null || _d === void 0 ? void 0 : _d.classList.add("display_none");
      (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.SINGIN) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        return __awaiter(_this, void 0, void 0, function () {
          var _this = this;

          var _a;

          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , this.checkAutorization()];

              case 1:
                _b.sent();

                if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized) {
                  this.getUsersWord();
                }

                (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.AUTORISATION_SINGIN) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                  return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , this.checkAutorization()];

                        case 1:
                          _a.sent();

                          if (!_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized) {
                            DICTIONARY.innerHTML = "<span>Requires login with an account</span>";
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                });
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    }

    _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.listen();
    PAGINATION_DICTIONARY.prepend(btnPrev);
    this.dynamicList(this.quantityGroups, "button", "groups_list__item", "active-group", _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.GROUPS_DICTIONARY, this.englishLevel, "id");
    this.dynamicList(this.visiblePages, "li", "pagination_number", "active-page", _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.PAGINATION_DICTIONARY);
    PAGINATION_DICTIONARY.append(btnNext);
    this.buttonClick();
  };

  Dictionary.prototype.buttonClick = function () {
    var _this = this;

    var _a;

    var onClick = function onClick(e) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              if (!(e.target.textContent === "Dictionary")) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.checkAutorization()];

            case 1:
              _h.sent();

              if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized) {
                this.getUsersWord();
              }

              if (_startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.MAIN) {
                (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.DICTIONARY_CONTAINER) === null || _a === void 0 ? void 0 : _a.classList.remove("display_none");
                (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.TEXTBOOK_CONTAINER) === null || _b === void 0 ? void 0 : _b.classList.add("display_none");
                (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.STATISTIC) === null || _c === void 0 ? void 0 : _c.classList.add("display_none");
                (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.GAME_PAGE_WRAPPER) === null || _d === void 0 ? void 0 : _d.classList.add("display_none");
                (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.HERO_PAGE) === null || _e === void 0 ? void 0 : _e.classList.add("display_none");
                (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.ADVANTAGES_PAGE) === null || _f === void 0 ? void 0 : _f.classList.add("display_none");
                (_g = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.ABOUT_PAGE) === null || _g === void 0 ? void 0 : _g.classList.add("display_none");
              }

              _h.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.NAV) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.NAV.addEventListener("click", onClick);
    }

    (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.GROUPS_DICTIONARY) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
      return __awaiter(_this, void 0, void 0, function () {
        var btn, groupNumber_1, userWords, dictionaryWords;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.checkAutorization()];

            case 1:
              _a.sent();

              if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized) {
                btn = event.target;

                if (btn.classList.contains('groups_list__item')) {
                  groupNumber_1 = _interfaces__WEBPACK_IMPORTED_MODULE_3__.Groups[btn.textContent];
                  console.log('Index group: ', groupNumber_1);

                  if (groupNumber_1 >= 0) {
                    userWords = _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userWords;
                    dictionaryWords = userWords === null || userWords === void 0 ? void 0 : userWords.map(function (el) {
                      return el.optional;
                    }).filter(function (el) {
                      return el.group === groupNumber_1;
                    });
                    this.renderCards(dictionaryWords);
                  }
                }
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    });
  };

  Dictionary.prototype.getUsersWord = function () {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var userId, userWords, dictionaryWords;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            userId = (_a = _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) === null || _a === void 0 ? void 0 : _a.userId;
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_0__.API.getUserWordsFromServer(userId)];

          case 1:
            _b.sent();

            userWords = _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userWords;
            dictionaryWords = userWords === null || userWords === void 0 ? void 0 : userWords.map(function (el) {
              return el.optional;
            });
            this.renderCards(dictionaryWords);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Dictionary.prototype.renderCards = function (cards) {
    var ulElement = _startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.DICTIONARY;
    var result = cards.reduce(function (prevValue, currValue) {
      var card = new _textbook_textbook__WEBPACK_IMPORTED_MODULE_5__.Card(ulElement, currValue);
      var template = card.createCardTemplate();
      return prevValue + template;
    }, "");

    if (ulElement) {
      ulElement.innerHTML = result;
    }
  };

  Dictionary.prototype.dynamicList = function (maxValue, elementName, className, activeClass, containerForElement, groupsLevel, attribute, id) {
    for (var i = 1; i <= maxValue; i++) {
      var element = document.createElement(elementName);
      element.classList.add(className);
      if (i === 1) element.classList.add(activeClass);

      if (groupsLevel) {
        element.innerText = groupsLevel[i - 1];
        if (attribute) element.setAttribute(attribute, String(i));
      } else {
        element.innerText = String(i);
      }

      containerForElement.insertAdjacentElement("beforeend", element);
    }
  };

  Dictionary.prototype.handleNextClick = function (renderCardsFn) {
    return __awaiter(this, void 0, void 0, function () {
      var allPages, lastPage, firstPage, nextPage, active, i, nextPageData, nextPageData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            allPages = document.querySelectorAll("li.pagination_number");
            lastPage = allPages[5];
            firstPage = allPages[0];
            nextPage = document.getElementsByClassName("active-page")[0].nextElementSibling;
            active = document.querySelector(".active-page");
            if (!(active.innerHTML === lastPage.innerHTML && +active.innerHTML !== this.quantityPages)) return [3
            /*break*/
            , 3];
            this.btnNumber += 1;

            for (i = 0; i < allPages.length && i + this.btnNumber <= this.quantityPages; i++) {
              allPages[i].innerHTML = String(this.btnNumber + i);
            }

            if (active != null) {
              active.classList.remove("active-page");
            }

            firstPage.classList.add("active-page");
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 1:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 2:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            return [3
            /*break*/
            , 6];

          case 3:
            this.btnNumber = +nextPage.innerText;

            if (active != null && active.innerHTML !== String(this.quantityPages)) {
              active.classList.remove("active-page");
              nextPage.classList.add("active-page");
            }

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 4:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 5:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            _a.label = 6;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Dictionary.prototype.handlePrevClick = function (renderCardsFn) {
    return __awaiter(this, void 0, void 0, function () {
      var allPages, lastPage, firstPage, prevPage, active, i, nextPageData, nextPageData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            allPages = document.querySelectorAll("li.pagination_number");
            lastPage = allPages[5];
            firstPage = allPages[0];
            prevPage = document.getElementsByClassName("active-page")[0].previousElementSibling;
            active = document.querySelector(".active-page");
            if (!(active.innerHTML === firstPage.innerHTML && +active.innerHTML !== 1)) return [3
            /*break*/
            , 3];
            this.btnNumber -= 1;

            for (i = 0; i < allPages.length && this.btnNumber - i >= 1; i++) {
              allPages[allPages.length - i - 1].innerHTML = String(this.btnNumber - i);
            }

            if (active != null) {
              active.classList.remove("active-page");
            }

            lastPage.classList.add("active-page");
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 1:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 2:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            return [3
            /*break*/
            , 6];

          case 3:
            this.btnNumber = +prevPage.innerText;

            if (active != null && +active.innerHTML !== 1) {
              active.classList.remove("active-page");
              prevPage.classList.add("active-page");
            }

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 4:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 5:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            _a.label = 6;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Dictionary.prototype.checkAutorization = function () {
    return __awaiter(this, void 0, void 0, function () {
      var token, promiseToken;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            token = _api__WEBPACK_IMPORTED_MODULE_0__.API.getToken();
            promiseToken = Promise.resolve(Boolean(token));
            return [4
            /*yield*/
            , Promise.all([promiseToken, _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__.AutorisationForm.isAutorized]).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized = data.some(function (item) {
                return item === true;
              });
              console.log(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.isUserAutorized);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Dictionary.prototype.addButtonsForAuthUsers = function (isAutorized) {
    if (!isAutorized) return;
    var additionalButtons = "\n        <button data-btn=\"difficultWord\" class=\"btn-basic btn_authorization_block btn-dif-word\">Difficult word</button>\n        <button data-btn=\"deleteWord\" class=\"btn-basic btn_authorization_block\">Delete word</button>\n      ";
    Array.from(_startPageListener__WEBPACK_IMPORTED_MODULE_4__.StartPageListener.BUTTONS_CONTAINER).forEach(function (element) {
      element.insertAdjacentHTML("afterbegin", additionalButtons);
    });
  };

  return Dictionary;
}();



/***/ }),

/***/ "./components/games/audio/audioGame.ts":
/*!*********************************************!*\
  !*** ./components/games/audio/audioGame.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioGame": () => (/* binding */ AudioGame)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./components/api.ts");
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _selectGamePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectGamePage */ "./components/games/selectGamePage.ts");
/* harmony import */ var _statistic_staticticPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../statistic/staticticPage */ "./components/statistic/staticticPage.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};






var AudioGame =
/** @class */
function () {
  function AudioGame() {
    var _a;

    this.wordArray = [];
    this.resultArray = [];
    this.position = 0;
    (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.SPRINT_WINDOW) === null || _a === void 0 ? void 0 : _a.remove();
  }

  AudioGame.prototype.btnClick = function () {
    var _this = this;

    var onClick = function onClick() {
      _this.startGame();
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.AUDIO_START_BTN) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.AUDIO_START_BTN.addEventListener('click', onClick);
    }
  };

  AudioGame.prototype.startGame = function () {
    var _this = this;

    var selected = document.querySelector('.select-level-audio');

    if (selected) {
      var level_1 = Number(selected.value.split('-')[1]);
      var page_1 = Math.floor(Math.random() * 10);

      (function () {
        return __awaiter(_this, void 0, void 0, function () {
          var _a;

          var _b, _c;

          return __generator(this, function (_d) {
            switch (_d.label) {
              case 0:
                _a = this;
                return [4
                /*yield*/
                , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(level_1 - 1, page_1)];

              case 1:
                _a.wordArray = _d.sent();
                (_b = document.querySelector('.sprintGameInfo')) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
                (_c = document.querySelector('.audioGameInfo')) === null || _c === void 0 ? void 0 : _c.classList.add('display_none');
                this.buildAudioGamePage();
                _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.listen();
                this.choiseWords();
                return [2
                /*return*/
                ];
            }
          });
        });
      })();

      if (document.querySelector('.audio-game-wrapper')) {
        document.querySelector('.audio-game-wrapper').classList.remove('display_none');
      }
    }
  };

  AudioGame.prototype.buildAudioGamePage = function () {
    var _a;

    var game = document.createElement('div');
    game.id = 'audio-game-window';
    game.innerHTML = "\n        <div class=\"audio-game-wrapper\">\n        <div class=\"audio-game-window-active\">\n            <div class=\"audio-progress\"></div>\n            <div class=\"main-audio\">\n            <div class=\"audio-place\">\n            <img src=\"../../assets/svg/audio.png\" class=\"audio-game-icon\">\n            </div>\n            <div class=\"btn-audio\">\n\n            </div>\n            </div>\n        </div>\n        </div>\n        ";
    (_a = document.querySelector('.audioGameInfo')) === null || _a === void 0 ? void 0 : _a.after(game);
  };

  AudioGame.prototype.choiseWords = function () {
    var _this = this;

    var audioPlace = document.querySelector('.audio-place');
    var btnPlace = document.querySelector('.btn-audio');
    this.showWord();

    var onClick = function onClick(e) {
      if (_this.position === 9) _this.showResult();

      _this.correctAnswer(e.target);
    };

    var audioHandler = function audioHandler() {
      var playAudio = new Audio("https://rs-lang-react.herokuapp.com/".concat(_this.wordArray[_this.position].audio));
      playAudio.play();
      playAudio.played;
    };

    var buttonClick = function buttonClick(element) {
      element.classList.add('btn-click');
      setTimeout(function () {
        element.classList.remove('btn-click');

        _this.correctAnswer(element);
      }, 300);
    };

    var keyboardHehdler = function keyboardHehdler(e) {
      e.preventDefault();

      if (_this.position === 9) {
        _this.showResult();

        document.removeEventListener('keydown', keyboardHehdler);
      }

      ;

      if (e.code === 'Space') {
        audioHandler();
      } else {
        var answerArray = document.querySelector('.btn-audio');

        if (answerArray) {
          switch (e.code) {
            case 'Digit1' || 0:
              buttonClick(answerArray.children[0]);
              break;

            case 'Digit2' || 0:
              buttonClick(answerArray.children[1]);
              break;

            case 'Digit3' || 0:
              buttonClick(answerArray.children[2]);
              break;

            case 'Digit4' || 0:
              buttonClick(answerArray.children[3]);
              break;

            case 'Digit5' || 0:
              buttonClick(answerArray.children[4]);
              break;

            case 'Escape':
              _selectGamePage__WEBPACK_IMPORTED_MODULE_2__.SelectGamePage.showGamePage();
              document.removeEventListener('keydown', keyboardHehdler);
              break;
          }
        }
      }
    };

    if (btnPlace) {
      btnPlace.addEventListener('click', onClick);
    }

    if (audioPlace) {
      audioPlace.addEventListener('click', audioHandler);
    }

    document.addEventListener('keydown', keyboardHehdler);
  };

  AudioGame.prototype.showWord = function () {
    var btnPlace = document.querySelector('.btn-audio');
    var wordAnswearArray = [];

    for (var i = 0; i < 20; i++) {
      if (wordAnswearArray.length === 5) break;
      var index = Math.floor(Math.random() * 20);
      wordAnswearArray.push(this.wordArray[index].wordTranslate);
    }

    if (wordAnswearArray.indexOf(this.wordArray[this.position].wordTranslate) === -1) wordAnswearArray[Math.floor(Math.random() * 5)] = this.wordArray[this.position].wordTranslate;

    if (btnPlace) {
      btnPlace.innerHTML = '';

      for (var i = 0; i < wordAnswearArray.length; i++) {
        btnPlace.innerHTML += "<p>".concat(i + 1, " ").concat(wordAnswearArray[i], " </p>");
      }
    }
  };

  AudioGame.prototype.correctAnswer = function (element) {
    var _this = this;

    if (element.innerHTML.split(' ')[1] === this.wordArray[this.position].wordTranslate) {
      this.resultArray.push({
        word: this.wordArray[this.position].word,
        wordTranslate: this.wordArray[this.position].wordTranslate,
        answer: element.innerHTML,
        result: true
      });
      this.position++;
      this.showWord();
    } else {
      this.resultArray.push({
        word: this.wordArray[this.position].word,
        wordTranslate: this.wordArray[this.position].wordTranslate,
        answer: element.innerHTML,
        result: false
      });

      if (element.parentElement) {
        var _loop_1 = function _loop_1(i) {
          if (element.parentElement.children[i].innerHTML.split(' ')[1] === this_1.wordArray[this_1.position].wordTranslate) {
            element.parentElement.children[i].classList.add('true-answear');
            setTimeout(function () {
              var _a;

              (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.children[i].classList.remove('true-answear');
              _this.position++;

              _this.showWord();
            }, 1000);
          }
        };

        var this_1 = this;

        for (var i = 0; i < element.parentElement.children.length; i++) {
          _loop_1(i);
        }

        ;
      }
    }
  };

  AudioGame.prototype.showResult = function () {
    var _this = this;

    if (document.querySelector('#audio-game-window')) {
      document.querySelector('#audio-game-window').classList.add('display_none');
    }

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE) {
      var dataResult = function dataResult() {
        var result = '';

        _this.resultArray.forEach(function (element) {
          result += "\n                    <div class=\"gameResult\">\n                    <div class=\"result-left-side\">\n                    <div class=\"point-result ".concat(element.result, "\">\n                    </div>\n                    <div class=\"result-word-left\"><span class=\"result-word-span\">Word:</span><span> ").concat(element.word, "</span></div>\n                    </div>\n                    <div class=\"result-word\"><span class=\"result-word-span\">Correct:</span><span> ").concat(element.wordTranslate, "</span></div>\n                    </div>\n                    ");
        });

        return result;
      };

      if (this.resultArray.length === 0 && this.calculateResult().percent === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"result-window\">\n              <img src=\"../../../assets/svg/gamer.png\" alt=\"sad boy icon\" class=\"sad-boy-icon\">\n              </div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else if (this.resultArray.length === 1 && this.calculateResult().percent === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/no.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Mistakes: ").concat(this.calculateResult().mistakes, " </p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else if (this.resultArray.length > 1 && this.calculateResult().percent === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/no.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Mistakes: ").concat(this.calculateResult().mistakes, " </p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else if (this.resultArray.length === 1 && this.calculateResult().percent > 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Mistakes: ").concat(this.calculateResult().mistakes, " </p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      }
    }

    _statistic_staticticPage__WEBPACK_IMPORTED_MODULE_3__.StatisticPage.workWithStatistic(this.resultArray, 'audio');
    _selectGamePage__WEBPACK_IMPORTED_MODULE_2__.SelectGamePage.playAgain();
  };

  AudioGame.prototype.calculateResult = function () {
    var result = 0;
    this.resultArray.forEach(function (element) {
      if (element.result) {
        result++;
      }
    });
    if (result === 0) return {
      percent: 0,
      mistakes: this.resultArray.length - result
    };
    return {
      percent: Math.floor(result / this.resultArray.length * 100),
      mistakes: this.resultArray.length - result
    };
  };

  return AudioGame;
}();



/***/ }),

/***/ "./components/games/selectGamePage.ts":
/*!********************************************!*\
  !*** ./components/games/selectGamePage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectGamePage": () => (/* binding */ SelectGamePage)
/* harmony export */ });
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _audio_audioGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/audioGame */ "./components/games/audio/audioGame.ts");
/* harmony import */ var _sprint_sprintGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprint/sprintGame */ "./components/games/sprint/sprintGame.ts");




var SelectGamePage =
/** @class */
function () {
  function SelectGamePage() {}

  SelectGamePage.build = function () {
    var _a;

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
      var WRAPPER_GAME = document.createElement('div');
      var GAMES = document.createElement('div');
      WRAPPER_GAME.classList.add('display_none');
      GAMES.id = 'game-page';
      WRAPPER_GAME.id = 'game-page-wrapper';
      GAMES.innerHTML = SelectGamePage.buildSprintGame() + SelectGamePage.buildAudioGame();
      (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.TEXTBOOK_CONTAINER) === null || _a === void 0 ? void 0 : _a.after(WRAPPER_GAME);
      WRAPPER_GAME.append(GAMES);
    }

    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();
    SelectGamePage.buttonClick();
  };

  SelectGamePage.buildSprintGame = function () {
    return "\n        <div class=\"sprintGameInfo\">\n        <div class=\"game-title-frame\">\n        <div class=\"game-icon-box\">\n        <img class=\"sprint-title-icon\" src=\"./assets/svg/sprint.png\" alt=\"game icon\">\n        </div>\n        <p class=\"game-title\">Sprint</p>\n        </div>\n        <p class=\"paragraph-text game-description\">Sprint is a practice for repeating the learned words from your vocabulary. Check how much words you can identify by correct meaning in one minute. To give an answer, click on yes/no buttons with the mouse or press the arrow keys. Enjoy!</p>\n        <p class=\"paragraph-text game-description keyboard-control\"><span class=\"keys-control-title\">Keyboard control:</span><br> &#x2022; press Y key to select \"right\", N key to select \"wrong\"<br> &#x2022;  left/right arrows to move between words<br> &#x2022;  esc to exit the game</p>\n        <p class=\"game-level-select\">Select the Level</p>\n        <div class=\"game-level-box\">\n        <select class=\"select-level-sprint\" name=\"level-english\">\n            <option class=\"level-option\" value=\"level-1\" selected=\"selected\">A1</option>\n            <option class=\"level-option\" value=\"level-2\" selected=\"selected\">A2</option>\n            <option class=\"level-option\" value=\"level-3\" selected=\"selected\">B1</option>\n            <option class=\"level-option\" value=\"level-4\" selected=\"selected\">B2</option>\n            <option class=\"level-option\" value=\"level-5\" selected=\"selected\">C1</option>\n            <option class=\"level-option\" value=\"level-6\" selected=\"selected\">C2</option>\n        </select>\n        <button class=\"sprint-game-btn btn-basic cta-btn\">Let's go!</button>\n        </div>\n        </div>\n        ";
  };

  SelectGamePage.buildAudioGame = function () {
    return "\n        <div class=\"audioGameInfo\">\n        <div class=\"game-title-frame\">\n        <div class=\"game-icon-box\">\n        <img class=\"sprint-title-icon\" src=\"./assets/svg/listen.png\" alt=\"game icon\">\n        </div>\n        <p class=\"game-title\">Audio Challenge</p>\n        </div>\n        <p class=\"paragraph-text game-description\">Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess. Click on the sound icon, listen to the word, then select the appropriate word from the list and click on it. Enjoy!</p>\n        <p class=\"paragraph-text game-description keyboard-control\"><span class=\"keys-control-title\">Keyboard control:</span><br> &#x2022; press the space bar to play the word<br> &#x2022; keys 1 - 5 to select the answer<br> &#x2022; esc to exit the game</p>\n        <p class=\"game-level-select\">Select the Level</p>\n        <div class=\"game-level-box\">\n        <select class=\"select-level-audio\" name=\"level-english\">\n            <option class=\"level-option\" value=\"level-1\" selected=\"selected\">A1</option>\n            <option class=\"level-option\" value=\"level-2\" selected=\"selected\">A2</option>\n            <option class=\"level-option\" value=\"level-3\" selected=\"selected\">B1</option>\n            <option class=\"level-option\" value=\"level-4\" selected=\"selected\">B2</option>\n            <option class=\"level-option\" value=\"level-5\" selected=\"selected\">C1</option>\n            <option class=\"level-option\" value=\"level-6\" selected=\"selected\">C2</option>\n        </select>\n        <button class=\"audio-game-btn btn-basic cta-btn\">Let's go!</button>\n        </div>\n        </div>\n        ";
  };

  SelectGamePage.buttonClick = function () {
    var onClick = function onClick(e) {
      var _a;

      if (e.target.innerHTML == 'Games') {
        SelectGamePage.showGamePage();
      } else {
        (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_PAGE) === null || _a === void 0 ? void 0 : _a.classList.add('display_none');
      }
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.NAV) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.NAV.addEventListener('click', onClick);
    }

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_ICON) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_ICON.addEventListener('click', SelectGamePage.showGamePage);
    }
  };

  SelectGamePage.showGamePage = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    (_a = document.querySelector('#game-page-wrapper')) === null || _a === void 0 ? void 0 : _a.remove();
    SelectGamePage.build();

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
      (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.HERO_PAGE) === null || _b === void 0 ? void 0 : _b.classList.add("display_none");
      (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.ADVANTAGES_PAGE) === null || _c === void 0 ? void 0 : _c.classList.add("display_none");
      (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.ABOUT_PAGE) === null || _d === void 0 ? void 0 : _d.classList.add("display_none");
      (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_PAGE_WRAPPER) === null || _e === void 0 ? void 0 : _e.classList.remove('display_none');
      (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC) === null || _f === void 0 ? void 0 : _f.classList.add('display_none');
      (_g = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.TEXTBOOK_CONTAINER) === null || _g === void 0 ? void 0 : _g.classList.add('display_none');
      (_h = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.DICTIONARY_CONTAINER) === null || _h === void 0 ? void 0 : _h.classList.add("display_none");
    }

    var sprintGame = new _sprint_sprintGame__WEBPACK_IMPORTED_MODULE_2__.SprintGame();
    sprintGame.btnClick();
    var audioGame = new _audio_audioGame__WEBPACK_IMPORTED_MODULE_1__.AudioGame();
    audioGame.btnClick();
  };

  SelectGamePage.playAgain = function () {
    var _a;

    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AGAIN_BTN) {
      (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AGAIN_BTN) === null || _a === void 0 ? void 0 : _a.addEventListener('click', SelectGamePage.showGamePage);
    }
  };

  return SelectGamePage;
}();



/***/ }),

/***/ "./components/games/sprint/sprintGame.ts":
/*!***********************************************!*\
  !*** ./components/games/sprint/sprintGame.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SprintGame": () => (/* binding */ SprintGame)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./components/api.ts");
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _selectGamePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectGamePage */ "./components/games/selectGamePage.ts");
/* harmony import */ var _statistic_staticticPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../statistic/staticticPage */ "./components/statistic/staticticPage.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};






var SprintGame =
/** @class */
function () {
  function SprintGame() {
    this.wordArray = [];
    this.resultArray = [];
  }

  SprintGame.prototype.btnClick = function () {
    var _this = this;

    var _a;

    _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.listen();

    var onClick = function onClick() {
      _this.startGame();
    };

    if (document.querySelector('.sprint-game-btn')) {
      (_a = document.querySelector('.sprint-game-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onClick);
    }
  };

  SprintGame.prototype.startGame = function () {
    var _this = this;

    var selected = document.querySelector('.select-level-sprint');

    if (selected) {
      var level_1 = Number(selected.value.split('-')[1]);
      var page_1 = Math.floor(Math.random() * 10);

      (function () {
        return __awaiter(_this, void 0, void 0, function () {
          var _a;

          var _b, _c;

          return __generator(this, function (_d) {
            switch (_d.label) {
              case 0:
                _a = this;
                return [4
                /*yield*/
                , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(level_1 - 1, page_1)];

              case 1:
                _a.wordArray = _d.sent();
                (_b = document.querySelector('.sprintGameInfo')) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
                (_c = document.querySelector('.audioGameInfo')) === null || _c === void 0 ? void 0 : _c.classList.add('display_none');
                this.buildSprintGamePage();
                _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.listen();
                this.setTimer();
                this.choiseWords();
                return [2
                /*return*/
                ];
            }
          });
        });
      })();
    }
  };

  SprintGame.prototype.buildSprintGamePage = function () {
    var _a;

    var game = document.createElement('div');
    game.id = 'sprint-game-window';
    game.innerHTML = "\n        <div class=\"sprint-flex-wrapper wrapper\">\n        <div class=\"sprint-game-timer\"><p></p></div>\n        <div class=\"sprint-game-window-active\">\n            <div class=\"sprint-progress\"></div>\n            <div class=\"main-sprint\">\n            <p class=\"english-word\"></p>\n            <p class=\"translate-word\"></p>\n            </div>\n            <div class=\"btn-sprint\">\n            <button id=\"game-btn\" class=\"btn-prev\">&#8592;</button>\n            <button id=\"game-btn\" class=\"btn-no\">Wrong</button>\n            <button id=\"game-btn\" class=\"btn-yes\">Right</button>\n            <button id=\"game-btn\" class=\"btn-next\">&#8594;</button>\n            </div>\n        </div>\n        </div>\n        ";
    (_a = document.querySelector('.sprintGameInfo')) === null || _a === void 0 ? void 0 : _a.after(game);
  };

  SprintGame.prototype.setTimer = function () {
    var _this = this;

    var _a;

    var timer = 60;
    var gameTimer = (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TIMER) === null || _a === void 0 ? void 0 : _a.children[0];
    var myInterval = setInterval(function () {
      timer--;

      if (gameTimer != undefined) {
        gameTimer.innerHTML = "".concat(timer);

        if (timer === 0) {
          clearInterval(myInterval);

          _this.showResult();
        }
      }
    }, 1000);
  };

  SprintGame.prototype.choiseWords = function () {
    var _this = this;

    var englishWord = document.querySelector('.english-word');
    var translateWord = document.querySelector('.translate-word');
    var btnPlace = document.querySelector('.btn-sprint');
    var position = 0;

    if (this.wordArray) {
      if (englishWord) englishWord.innerHTML = this.wordArray[position].word;
      if (translateWord) translateWord.innerHTML = this.wordArray[position].wordTranslate;
    }

    var onClick = function onClick(e) {
      var _a, _b;

      try {
        if (_this.wordArray) {
          if (e.target.innerHTML === '>' && position < ((_a = _this.wordArray) === null || _a === void 0 ? void 0 : _a.length)) position++;
          if (e.target.innerHTML === '<' && position > 0) position--;

          if (e.target.innerHTML === 'Right' && position < ((_b = _this.wordArray) === null || _b === void 0 ? void 0 : _b.length)) {
            _this.userAnswerYes(translateWord === null || translateWord === void 0 ? void 0 : translateWord.innerHTML, position);

            position++;

            if (_this.wordArray.length - position < 2) {
              (function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var _a, _b;

                  return __generator(this, function (_c) {
                    switch (_c.label) {
                      case 0:
                        _a = this;
                        _b = [__spreadArray([], this.wordArray, true)];
                        return [4
                        /*yield*/
                        , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(Math.floor(Math.random() * 5), Math.floor(Math.random() * 10))];

                      case 1:
                        return [4
                        /*yield*/
                        , __spreadArray.apply(void 0, _b.concat([_c.sent(), true]))];

                      case 2:
                        _a.wordArray = _c.sent();
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })();
            }
          }

          ;

          if (e.target.innerHTML === 'Wrong' && position >= 0) {
            _this.userAnswerNo(translateWord === null || translateWord === void 0 ? void 0 : translateWord.innerHTML, position);

            position++;

            if (_this.wordArray.length - position < 2) {
              (function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var _a, _b;

                  return __generator(this, function (_c) {
                    switch (_c.label) {
                      case 0:
                        _a = this;
                        _b = [__spreadArray([], this.wordArray, true)];
                        return [4
                        /*yield*/
                        , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(Math.floor(Math.random() * 5), Math.floor(Math.random() * 10))];

                      case 1:
                        return [4
                        /*yield*/
                        , __spreadArray.apply(void 0, _b.concat([_c.sent(), true]))];

                      case 2:
                        _a.wordArray = _c.sent();
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })();
            }
          }

          ;
          if (englishWord) englishWord.innerHTML = _this.wordArray[position].word;
          if (translateWord) translateWord.innerHTML = _this.wordArray[position + Math.floor(Math.random() * 2)].wordTranslate;
        }
      } catch (e) {
        console.log('Error', e);
      }
    };

    if (btnPlace) {
      btnPlace.addEventListener('click', onClick);
    }

    var buttonClick = function buttonClick(translateWord, answer) {
      var element = null;

      if (answer) {
        element = document.querySelector('.btn-yes');
      } else {
        element = document.querySelector('.btn-no');
      }

      element === null || element === void 0 ? void 0 : element.classList.add('btn-click');
      setTimeout(function () {
        element === null || element === void 0 ? void 0 : element.classList.remove('btn-click');
      }, 300);

      _this.userAnswerYes(translateWord === null || translateWord === void 0 ? void 0 : translateWord.innerHTML, position);

      position++;

      if (_this.wordArray.length - position < 2) {
        (function () {
          return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;

            return __generator(this, function (_c) {
              switch (_c.label) {
                case 0:
                  _a = this;
                  _b = [__spreadArray([], this.wordArray, true)];
                  return [4
                  /*yield*/
                  , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(Math.floor(Math.random() * 5), Math.floor(Math.random() * 10))];

                case 1:
                  return [4
                  /*yield*/
                  , __spreadArray.apply(void 0, _b.concat([_c.sent(), true]))];

                case 2:
                  _a.wordArray = _c.sent();
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        })();
      }
    };

    var keyboardHehdler = function keyboardHehdler(e) {
      var _a;

      if (position === 19) _this.showResult();

      if (translateWord) {
        switch (e.code) {
          case 'KeyY':
            buttonClick(translateWord, true);
            break;

          case 'KeyN':
            buttonClick(translateWord, false);
            break;

          case 'ArrowLeft':
            if (position > 0) position--;
            break;

          case 'ArrowRight':
            if (position < ((_a = _this.wordArray) === null || _a === void 0 ? void 0 : _a.length)) position++;
            break;

          case 'Escape':
            _selectGamePage__WEBPACK_IMPORTED_MODULE_2__.SelectGamePage.showGamePage();
            document.removeEventListener('keydown', keyboardHehdler);
            break;
        }
      }

      if (englishWord) englishWord.innerHTML = _this.wordArray[position].word;
      if (translateWord) translateWord.innerHTML = _this.wordArray[position + Math.floor(Math.random() * 2)].wordTranslate;
    };

    document.addEventListener('keydown', keyboardHehdler);
  };

  SprintGame.prototype.userAnswerYes = function (translateWord, position) {
    if (this.wordArray) {
      if (this.wordArray[position].wordTranslate === translateWord) {
        this.resultArray.push({
          word: this.wordArray[position].word,
          wordTranslate: this.wordArray[position].wordTranslate,
          answer: translateWord,
          result: true
        });
        this.addProgress(true);
      } else {
        this.resultArray.push({
          word: this.wordArray[position].word,
          wordTranslate: this.wordArray[position].wordTranslate,
          answer: translateWord,
          result: false
        });
        this.addProgress(false);
      }
    }
  };

  SprintGame.prototype.userAnswerNo = function (translateWord, position) {
    if (this.wordArray) {
      if (this.wordArray[position].wordTranslate === translateWord) {
        this.resultArray.push({
          word: this.wordArray[position].word,
          wordTranslate: this.wordArray[position].wordTranslate,
          answer: translateWord,
          result: false
        });
        this.addProgress(false);
      } else {
        this.resultArray.push({
          word: this.wordArray[position].word,
          wordTranslate: this.wordArray[position].wordTranslate,
          answer: translateWord,
          result: true
        });
        this.addProgress(true);
      }
    }
  };

  SprintGame.prototype.addProgress = function (res) {
    var progress = document.querySelector('.sprint-progress');
    var className = res ? 'true progress' : 'false progress';

    if (progress) {
      progress.innerHTML += "<div class=\"".concat(className, "\"></div>");
    }
  };

  SprintGame.prototype.showResult = function () {
    var _this = this;

    if (document.querySelector('#sprint-game-window')) {
      document.querySelector('#sprint-game-window').classList.add('display_none');
    }

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE) {
      var dataResult = function dataResult() {
        var result = '';

        _this.resultArray.forEach(function (element) {
          result += "\n                    <div class=\"gameResult\">\n                    <div class=\"result-left-side\">\n                    <div class=\"point-result ".concat(element.result, "\">\n                    </div>\n                    <div class=\"result-word-left\"><span class=\"result-word-span\">Word:</span><span> ").concat(element.word, "</span></div>\n                    </div>\n                    <div class=\"result-word\"><span class=\"result-word-span-right\">Correct:</span><span> ").concat(element.wordTranslate, "</span></div>\n                    </div>\n                    ");
        });

        return result;
      };

      if (this.resultArray.length === 0 && this.calculateResult().percent === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"result-window\">\n              <img src=\"../../../assets/svg/gamer.png\" alt=\"sad boy icon\" class=\"sad-boy-icon\">\n              </div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else if (this.resultArray.length === 1 && this.calculateResult().percent === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/no.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Mistakes: ").concat(this.calculateResult().mistakes, " </p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else if (this.resultArray.length > 1 && this.calculateResult().percent === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/no.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Mistakes: ").concat(this.calculateResult().mistakes, " </p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else if (this.resultArray.length === 1 && this.calculateResult().percent > 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      } else {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML += "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult().percent, " %</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Mistakes: ").concat(this.calculateResult().mistakes, " </p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              <button class=\"sprint-game-btn btn-basic cta-btn play-again\">Play again</button>\n              </div>");
      }
    }

    _statistic_staticticPage__WEBPACK_IMPORTED_MODULE_3__.StatisticPage.workWithStatistic(this.resultArray, 'sprint');
    _selectGamePage__WEBPACK_IMPORTED_MODULE_2__.SelectGamePage.playAgain();
  };

  SprintGame.prototype.calculateResult = function () {
    var result = 0;
    this.resultArray.forEach(function (element) {
      if (element.result) {
        result++;
      }
    });
    if (result === 0) return {
      percent: 0,
      mistakes: this.resultArray.length - result
    };
    return {
      percent: Math.floor(result / this.resultArray.length * 100),
      mistakes: this.resultArray.length - result
    };
  };

  return SprintGame;
}();



/***/ }),

/***/ "./components/interfaces.ts":
/*!**********************************!*\
  !*** ./components/interfaces.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Groups": () => (/* binding */ Groups)
/* harmony export */ });
var Groups;

(function (Groups) {
  Groups[Groups["Easy - A1"] = 0] = "Easy - A1";
  Groups[Groups["Easy - A2"] = 1] = "Easy - A2";
  Groups[Groups["Medium - B1"] = 2] = "Medium - B1";
  Groups[Groups["Medium - B2"] = 3] = "Medium - B2";
  Groups[Groups["Hard - C1"] = 4] = "Hard - C1";
  Groups[Groups["Hard - C2"] = 5] = "Hard - C2";
})(Groups || (Groups = {}));

/***/ }),

/***/ "./components/modal.ts":
/*!*****************************!*\
  !*** ./components/modal.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalWindow": () => (/* binding */ ModalWindow)
/* harmony export */ });
var ModalWindow =
/** @class */
function () {
  function ModalWindow() {
    this.singin = true;
  }

  ModalWindow.prototype.active = function () {
    var _this = this;

    var _a;

    var login = function login(e) {
      if (e.target.id === 'sing-up') {
        document.querySelector(".login-form-container").style.cssText = "display: none;";
        document.querySelector(".signup-form-container").style.cssText = "display: block;";
        _this.singin = false;
      }

      if (e.target.id === 'sing-in') {
        document.querySelector(".signup-form-container").style.cssText = "display: none;";
        document.querySelector(".login-form-container").style.cssText = "display: block;";
        _this.singin = true;
      }
    };

    (_a = document.querySelector('.modal-content')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', login);
  };

  return ModalWindow;
}();

 // Hamburger Menu

var hamIcon = document.querySelector('.hamburger');
var navMenu = document.querySelector('.nav__container');
var navList = document.querySelector('.nav');
var menuFilter = document.querySelector('.menu-filter');
var signInBtn = document.querySelector('.signIn-btn');
var navLink = document.querySelectorAll('.nav-link');
hamIcon === null || hamIcon === void 0 ? void 0 : hamIcon.addEventListener('click', openMenu);
menuFilter === null || menuFilter === void 0 ? void 0 : menuFilter.addEventListener('click', openMenu);
navList === null || navList === void 0 ? void 0 : navList.addEventListener('click', checkOpenMenu);

function checkOpenMenu() {
  if (hamIcon === null || hamIcon === void 0 ? void 0 : hamIcon.classList.contains('open')) {
    navList === null || navList === void 0 ? void 0 : navList.addEventListener('click', function (event) {
      navLink.forEach(function (el) {
        if (el === event.target) {
          openMenu();
        }
      });
    });
  } else {
    navList === null || navList === void 0 ? void 0 : navList.removeEventListener('click', openMenu);
  }
}

function openMenu() {
  navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle('open');
  hamIcon === null || hamIcon === void 0 ? void 0 : hamIcon.classList.toggle('open');
  document.body.classList.toggle('lock');
  menuFilter === null || menuFilter === void 0 ? void 0 : menuFilter.classList.toggle('menu-filter_open');
  signInBtn === null || signInBtn === void 0 ? void 0 : signInBtn.classList.toggle('signIn-btn_open');
}

/***/ }),

/***/ "./components/startPageListener.ts":
/*!*****************************************!*\
  !*** ./components/startPageListener.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageListener": () => (/* binding */ StartPageListener)
/* harmony export */ });
var StartPageListener =
/** @class */
function () {
  function StartPageListener() {}

  StartPageListener.listen = function () {
    StartPageListener.AUTORISATION_SINGIN = document.getElementById('autorisation-button');
    StartPageListener.SINGUP = document.getElementById('btn-singup');
    StartPageListener.SINGIN = document.getElementById('btn-singin');
    StartPageListener.AUTORISATION_INPUT_EMAIL = document.getElementById('autorisation-form_mail');
    StartPageListener.AUTORISATION_INPUT_PASSWORD = document.getElementById('autorisation-form_password');
    StartPageListener.SINGUP_FORM_NAME = document.getElementById('singup-form-name');
    StartPageListener.SINGUP_FORM_EMAIL = document.getElementById('singup-form-email');
    StartPageListener.SINGUP_FORM_PASSWORD = document.getElementById('singup-form-password');
    StartPageListener.MODAL_WINDOW = document.getElementById('openModal');
    StartPageListener.MAIN = document.querySelector('.main');
    StartPageListener.HERO_PAGE = document.querySelector('.hero-page');
    StartPageListener.ADVANTAGES_PAGE = document.querySelector('.advantages-page');
    StartPageListener.ABOUT_PAGE = document.querySelector('.about-page');
    StartPageListener.STATISTIC = document.getElementById('statistic');
    StartPageListener.TEXTBOOK_CONTAINER = document.getElementById('textbook-wrapper');
    StartPageListener.GROUPS = document.getElementById('groups');
    StartPageListener.GROUPS_DICTIONARY = document.getElementById('groups-dictionary');
    StartPageListener.PAGINATION = document.getElementById('pagination');
    StartPageListener.PAGINATION_DICTIONARY = document.getElementById('pagination-dictionary');
    StartPageListener.TEXTBOOK = document.getElementById('textbook');
    StartPageListener.DICTIONARY_CONTAINER = document.getElementById('dictionary-wrapper');
    StartPageListener.DICTIONARY = document.getElementById('dictionary');
    StartPageListener.BUTTONS_CONTAINER = document.getElementsByClassName('authorization_block');
    StartPageListener.NAV = document.querySelector('.nav');
    StartPageListener.GAME_PAGE = document.getElementById('game-page');
    StartPageListener.GAME_PAGE_WRAPPER = document.getElementById('game-page-wrapper');
    StartPageListener.TIMER = document.querySelector('.sprint-game-timer');
    StartPageListener.SPRINT_WINDOW = document.querySelector('#sprint-game-window');
    StartPageListener.AUDIO_WINDOW = document.querySelector('#audio-game-window');
    StartPageListener.GAME_ICON = document.querySelector('#game-main-card');
    StartPageListener.AUDIO_START_BTN = document.querySelector('.audio-game-btn');
    StartPageListener.GAME_RESULT = document.querySelector('.game-result-wrapper');
    StartPageListener.AGAIN_BTN = document.querySelector('.play-again');
  };

  StartPageListener.BODY = document.body;
  return StartPageListener;
}();



/***/ }),

/***/ "./components/statistic/staticticPage.ts":
/*!***********************************************!*\
  !*** ./components/statistic/staticticPage.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticPage": () => (/* binding */ StatisticPage)
/* harmony export */ });
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./components/api.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var StatisticPage =
/** @class */
function () {
  function StatisticPage() {}

  StatisticPage.prototype.build = function () {
    var _a;

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
      var STATISTIC = document.createElement('div');
      STATISTIC.id = 'statistic';
      STATISTIC.innerHTML = "\n            <div class=\"wrapper statistic-wrapper\">\n            <h2 class=\"section-title\">Statistics</h2>\n            <button class=\"get-statistic\">Today's stats</button>\n            <div class=\"statistic-result\"></div>\n            </div>\n            ";
      (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.TEXTBOOK_CONTAINER) === null || _a === void 0 ? void 0 : _a.after(STATISTIC);
      STATISTIC.classList.add('display_none');
    }

    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();
    this.buttonClick();
  };

  StatisticPage.prototype.buttonClick = function () {
    var _this = this;

    var _a;

    var onClick = function onClick(e) {
      var _a, _b, _c, _d, _e, _f, _g;

      if (e.target.innerHTML == 'Statistics' || e.target.id == 'statistic-main-card') {
        if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
          (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC) === null || _a === void 0 ? void 0 : _a.classList.remove('display_none');
          (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.HERO_PAGE) === null || _b === void 0 ? void 0 : _b.classList.add("display_none");
          (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.ADVANTAGES_PAGE) === null || _c === void 0 ? void 0 : _c.classList.add("display_none");
          (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.ABOUT_PAGE) === null || _d === void 0 ? void 0 : _d.classList.add("display_none");
          (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.TEXTBOOK_CONTAINER) === null || _e === void 0 ? void 0 : _e.classList.add('display_none');
          (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_PAGE_WRAPPER) === null || _f === void 0 ? void 0 : _f.classList.add('display_none');
          (_g = document.querySelector('.get-statistic')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', getDataCtatistic);
        }
      }
    };

    var getDataCtatistic = function getDataCtatistic() {
      return __awaiter(_this, void 0, void 0, function () {
        var statistic, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 4]);

              if (!_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData) return [3
              /*break*/
              , 2];
              if (!_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , _api__WEBPACK_IMPORTED_MODULE_2__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData.userId)];

            case 1:
              statistic = _a.sent();

              if (statistic) {
                _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC.children[0].children[2].innerHTML = "\n                            <p class=\"card-title stat-title stat-grid-item1\">Words learned: ".concat(statistic.learnedWords, "</p>\n                            <p class=\"card-title stat-title sprint-grid-padding\">Sprint: ").concat(this.sprintStatictic(statistic), "</p>\n                            <p class=\"card-title stat-title audio-grid-padding\">Audio Challenge: ").concat(this.audiotStatictic(statistic), "</p>\n                            ");
              } else {
                _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC.children[0].children[2].innerHTML = "\n                            <p class=\"card-title stat-title stat-grid-item1\"> there are no statistics </p>\n                            ";
              }

              _a.label = 2;

            case 2:
              return [3
              /*break*/
              , 4];

            case 3:
              e_1 = _a.sent();
              console.log('Error', e_1);
              return [3
              /*break*/
              , 4];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.NAV) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.NAV.addEventListener('click', onClick);
    }

    if (document.querySelector('#statistic-main-card')) {
      (_a = document.querySelector('#statistic-main-card')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onClick);
    }
  };

  StatisticPage.workWithStatistic = function (array, game) {
    var _a, _b, _c, _d;

    return __awaiter(this, void 0, void 0, function () {
      var newTrueArray, newFalseArray, resultArray, statistic, date, wordArrayFromServer, data, dataGame, filterArray, filterArray, data_1, data_2, e_2;
      return __generator(this, function (_e) {
        switch (_e.label) {
          case 0:
            newTrueArray = [];
            newFalseArray = [];
            resultArray = [];
            array.forEach(function (element) {
              if (element.result) {
                newTrueArray.push(element.word);
              } else {
                newFalseArray.push(element.word);
              }
            });
            _e.label = 1;

          case 1:
            _e.trys.push([1, 16,, 17]);

            if (!_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData) return [3
            /*break*/
            , 15];
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData.userId)];

          case 2:
            statistic = _e.sent();
            date = "".concat(new Date().getDate(), ".").concat(new Date().getMonth(), ".").concat(new Date().getFullYear());
            wordArrayFromServer = [];
            data = {};
            dataGame = {
              miniRes: {
                date: "".concat(new Date().getDate(), ".").concat(new Date().getMonth(), ".").concat(new Date().getFullYear()),
                "true": newTrueArray.length,
                "false": newFalseArray.length,
                longseries: 0,
                truePercent: 0
              }
            };
            if (!!statistic) return [3
            /*break*/
            , 3];
            resultArray = wordArrayFromServer.concat(newTrueArray);
            filterArray = Array.from(new Set(resultArray));
            data = {
              learnedWords: filterArray.length,
              optional: {
                learnedWords: filterArray.join(';'),
                audio: {},
                sprint: {}
              }
            };

            if (game === 'sprint') {
              dataGame.miniRes.longseries = newTrueArray.length;
              dataGame.miniRes.truePercent = Math.floor(newTrueArray.length / array.length * 100);
              data.optional.sprint = dataGame;
            }

            if (game === 'audio') {
              dataGame.miniRes.longseries = newTrueArray.length;
              dataGame.miniRes.truePercent = Math.floor(newTrueArray.length / array.length * 100);
              data.optional.audio = dataGame;
            }

            return [3
            /*break*/
            , 13];

          case 3:
            wordArrayFromServer = statistic.optional.learnedWords ? statistic.optional.learnedWords.split(';') : [];
            resultArray = statistic.optional.learnedWords ? wordArrayFromServer.concat(newTrueArray) : newTrueArray;
            filterArray = Array.from(new Set(resultArray));
            if (!statistic) return [3
            /*break*/
            , 12];
            if (!(statistic.optional.audio && statistic.optional.sprint && statistic.optional.audio.miniRes.date != date && statistic.optional.sprint.miniRes.date != date)) return [3
            /*break*/
            , 6];
            data = {
              learnedWords: 0,
              optional: {
                learnedWords: " ",
                audio: {},
                sprint: {}
              }
            };
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.updateUserStatisticFromServer((_a = _dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData) === null || _a === void 0 ? void 0 : _a.userId, JSON.stringify(data))];

          case 4:
            _e.sent();

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData.userId)];

          case 5:
            statistic = _e.sent();
            _e.label = 6;

          case 6:
            if (!(!statistic.optional.audio || statistic.optional.audio.miniRes.date != date)) return [3
            /*break*/
            , 9];
            data_1 = {
              learnedWords: filterArray.length,
              optional: {
                learnedWords: filterArray.join(';'),
                audio: {},
                sprint: statistic.optional ? statistic.optional.sprint : {}
              }
            };
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.updateUserStatisticFromServer((_b = _dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData) === null || _b === void 0 ? void 0 : _b.userId, JSON.stringify(data_1))];

          case 7:
            _e.sent();

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData.userId)];

          case 8:
            statistic = _e.sent();
            _e.label = 9;

          case 9:
            if (!(!statistic.optional.sprint || statistic.optional.sprint.miniRes.date != date)) return [3
            /*break*/
            , 12];
            data_2 = {
              learnedWords: filterArray.length,
              optional: {
                learnedWords: filterArray.join(';'),
                audio: statistic.optional ? statistic.optional.audio : {},
                sprint: {}
              }
            };
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.updateUserStatisticFromServer((_c = _dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData) === null || _c === void 0 ? void 0 : _c.userId, JSON.stringify(data_2))];

          case 10:
            _e.sent();

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData.userId)];

          case 11:
            statistic = _e.sent();
            _e.label = 12;

          case 12:
            data = {
              learnedWords: filterArray.length,
              optional: {
                learnedWords: filterArray.join(';'),
                audio: statistic.optional ? statistic.optional.audio : {},
                sprint: statistic.optional ? statistic.optional.sprint : {}
              }
            };

            if (game === 'sprint') {
              if (statistic.optional.sprint) {
                dataGame.miniRes.longseries = statistic.optional.sprint.miniRes.longseries ? newTrueArray.length >= statistic.optional.sprint.miniRes.longseries ? newTrueArray.length : statistic.optional.sprint.miniRes.longseries : newTrueArray.length;
                dataGame.miniRes.truePercent = statistic.optional.sprint.miniRes.truePercent ? (statistic.optional.sprint.miniRes.truePercent + Math.floor(newTrueArray.length / array.length * 100)) / 2 : Math.floor(newTrueArray.length / array.length * 100);
              } else {
                dataGame.miniRes.longseries = newTrueArray.length;
                dataGame.miniRes.truePercent = Math.floor(newTrueArray.length / array.length * 100);
              }

              data.optional.sprint = dataGame;
            }

            if (game === 'audio') {
              if (statistic.optional.audio) {
                dataGame.miniRes.longseries = statistic.optional.audio.miniRes.longseries ? newTrueArray.length >= statistic.optional.audio.miniRes.longseries ? newTrueArray.length : statistic.optional.audio.miniRes.longseries : newTrueArray.length;
                dataGame.miniRes.truePercent = statistic.optional.audio.miniRes.truePercent ? (statistic.optional.audio.miniRes.truePercent + Math.floor(newTrueArray.length / array.length * 100)) / 2 : Math.floor(newTrueArray.length / array.length * 100);
              } else {
                dataGame.miniRes.longseries = newTrueArray.length;
                dataGame.miniRes.truePercent = Math.floor(newTrueArray.length / array.length * 100);
              }

              data.optional.audio = dataGame;
            }

            _e.label = 13;

          case 13:
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.updateUserStatisticFromServer((_d = _dataStorage__WEBPACK_IMPORTED_MODULE_1__.DataStorage.userData) === null || _d === void 0 ? void 0 : _d.userId, JSON.stringify(data))];

          case 14:
            _e.sent();

            _e.label = 15;

          case 15:
            ;
            return [3
            /*break*/
            , 17];

          case 16:
            e_2 = _e.sent();
            console.log('Error', e_2);
            return [3
            /*break*/
            , 17];

          case 17:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  StatisticPage.prototype.sprintStatictic = function (stat) {
    if (JSON.stringify(stat.optional.sprint) && stat.optional.sprint.miniRes) {
      return "\n            <div class=\"statistic-info_sprint\">\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Date:</span> ".concat(stat.optional.sprint.miniRes.date, "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Done:</span> ").concat(stat.optional.sprint.miniRes["true"], "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Mistakes:</span> ").concat(stat.optional.sprint.miniRes["false"], "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">In a row:</span> ").concat(stat.optional.sprint.miniRes.longseries, "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Accuracy:</span> ").concat(Math.floor(stat.optional.sprint.miniRes.truePercent), " %</p>\n            </div>\n            ");
    } else return "\n            <div class=\"statistic-info_sprint\">\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Date:</span> Not result</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Done:</span> 0 </p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Mistakes:</span> 0 </p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">In a row:</span> 0 </p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Accuracy:</span> 0 %</p>\n            </div>\n            ";
  };

  StatisticPage.prototype.audiotStatictic = function (stat) {
    if (JSON.stringify(stat.optional.audio) && stat.optional.audio.miniRes) {
      return "\n            <div class=\"statistic-info_audio\">\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Date:</span> ".concat(stat.optional.audio.miniRes.date, "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Done:</span> ").concat(stat.optional.audio.miniRes["true"], "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Mistakes:</span> ").concat(stat.optional.audio.miniRes["false"], "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">In a row:</span> ").concat(stat.optional.audio.miniRes.longseries, "</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Accuracy:</span> ").concat(Math.floor(stat.optional.audio.miniRes.truePercent), " %</p>\n            </div>\n            ");
    } else return "\n            <div class=\"statistic-info_sprint\">\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Date:</span> Not result</p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Done:</span> 0 </p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Mistakes:</span> 0 </p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">In a row:</span> 0 </p>\n            <p class=\"paragraph-text\"><span class=\"stat-span\">Accuracy:</span> 0 %</p>\n            </div>\n            ";
  };

  return StatisticPage;
}();



/***/ }),

/***/ "./components/textbook/textbook.ts":
/*!*****************************************!*\
  !*** ./components/textbook/textbook.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card),
/* harmony export */   "TextbookPage": () => (/* binding */ TextbookPage)
/* harmony export */ });
/* harmony import */ var _styles_sass_pages_textbook_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sass/pages/_textbook.scss */ "./styles/sass/pages/_textbook.scss");
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./components/api.ts");
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autorisation/autorisation-form */ "./components/autorisation/autorisation-form.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};







var Card =
/** @class */
function () {
  function Card(container, wordData) {
    this.wordData = wordData;
    container.onclick = this.onClick.bind(this);
  }

  Card.prototype.playAudio = function (audioElement) {
    audioElement.play();
  };

  Card.prototype.onClick = function (event) {
    var _a, _b, _c, _d, _e, _f;

    var targetElement = event.target;

    if (targetElement.dataset.audio === "audioBtn") {
      this.playAudio(targetElement.firstElementChild);
    }

    if (targetElement.dataset.btn === "difficultWord") {
      var wordId_1 = (_b = (_a = targetElement.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
      var userId = (_c = _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.userData) === null || _c === void 0 ? void 0 : _c.userId;
      var difficult = "difficult";
      var searchWordById = _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.allWordsStorage.find(function (word) {
        return word.id === wordId_1;
      });
      _api__WEBPACK_IMPORTED_MODULE_2__.API.createUsersWordsOnServer(userId, wordId_1, difficult, searchWordById);
    }

    if (targetElement.dataset.btn === "deleteWord") {
      var wordId = (_e = (_d = targetElement.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.id;
      var userId = (_f = _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.userData) === null || _f === void 0 ? void 0 : _f.userId;
      _api__WEBPACK_IMPORTED_MODULE_2__.API.deleteUserWordsOnServer(userId, wordId);
    }
  };

  Card.prototype.createCardTemplate = function () {
    return "<li id=\"".concat(this.wordData.id, "\" data-group=\"").concat(this.wordData.group, "\" class=\"textbook-list_item\">\n                  <img src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.image, "\" alt=\"").concat(this.wordData.word, "\" class=\"textbook-card-img\">\n\n                  <div class=\"textbook-list_item__wrapper\">\n                  <div class=\"upper_card-row\">\n                   <div class=\"upper_card-box\">\n                      <div class=\"word-wrapper\">\n                        <h2 class=\"word\">").concat(this.wordData.word, " <p class=\"transcription\">").concat(this.wordData.transcription, "</p></h2>\n                      </div>\n                      <div class=\"translate\">").concat(this.wordData.wordTranslate, "</div>\n                    </div>\n                    <button data-audio=\"audioBtn\" class=\"btn-basic bnt-textbook\">&#128264; Word\n                    <audio id=\"sound\">\n                    <source type=\"audio/mp3\" src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.audio, "\">\n                    </audio>\n                   </button>\n                  </div>\n                  <div class=\"upper_card-row\">\n                    <div class=\"lower_card-box\">\n                      <p class=\"description\">").concat(this.wordData.textMeaning, "</p>\n                      <p class=\"description-translate\">").concat(this.wordData.textMeaningTranslate, "</p>\n                    </div>\n                    <button data-audio=\"audioBtn\" class=\"btn-basic bnt-bell\">&#128264;\n                      <audio id=\"sound\">\n                      <source type=\"audio/mp3\" src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.audioMeaning, "\">\n                      </audio>\n                    </button>\n                  </div>\n                  <div class=\"upper_card-row\">\n                    <div class=\"lower_card-box\">\n                      <p class=\"example\">").concat(this.wordData.textExample, "</p>\n                      <p class=\"example-translate\">").concat(this.wordData.textExampleTranslate, "</p>\n                      </div>\n                      <button data-audio=\"audioBtn\" class=\"btn-basic bnt-bell\">&#128264;\n                        <audio id=\"sound\">\n                        <source type=\"audio/mp3\" src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.audioExample, "\">\n                        </audio>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"authorization_block\"></div>\n                </li>\n              </ul>");
  };

  return Card;
}();



var TextbookPage =
/** @class */
function () {
  function TextbookPage() {
    this.quantityPages = 30;
    this.btnNumber = 1;
    this.btnGroupNumber = 1;
    this.visiblePages = 6;
    this.quantityGroups = 6;
    this.englishLevel = ["Easy - A1", "Easy - A2", "Medium - B1", "Medium - B2", "Hard - C1", "Hard - C2"];
  }

  TextbookPage.prototype.build = function () {
    var _this = this;

    var _a, _b, _c, _d, _e, _f, _g;

    var GROUPS = document.createElement("div");
    var PAGINATION = document.createElement("ul");
    var TEXTBOOK = document.createElement("ul");
    var btnNext = document.createElement("li");
    var btnPrev = document.createElement("li");
    var topBtn = document.createElement("div");
    var topLink = document.createElement("a");
    GROUPS.id = "groups";
    PAGINATION.id = "pagination";
    TEXTBOOK.id = "textbook";
    GROUPS.className = "groups";
    TEXTBOOK.className = "wrapper textbook-list";
    btnNext.className = "next-btn";
    btnPrev.className = "prev-btn";
    topBtn.className = "back-to-top-wrapper";
    topLink.className = "back-to-top-link";
    btnNext.innerHTML = "Next &rsaquo;";
    btnPrev.innerHTML = "&lsaquo; Previous";
    topLink.innerHTML = "Scroll to top";
    topLink.href = "#pageHeader";
    topBtn.insertAdjacentElement("afterbegin", topLink);

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.MAIN) {
      (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) === null || _a === void 0 ? void 0 : _a.append(GROUPS);
      (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) === null || _b === void 0 ? void 0 : _b.append(PAGINATION);
      (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) === null || _c === void 0 ? void 0 : _c.append(TEXTBOOK);
      (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) === null || _d === void 0 ? void 0 : _d.append(topBtn);
      (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) === null || _e === void 0 ? void 0 : _e.classList.add("display_none");
      (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.SINGIN) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                console.log("SINGIN");
                console.log("s 1");
                return [4
                /*yield*/
                , this.checkAutorization()];

              case 1:
                _a.sent();

                console.log("s 2");

                if (_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized) {
                  console.log("add brns");
                  this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      });
      (_g = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.AUTORISATION_SINGIN) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                console.log("AUTORISATION_SINGIN");
                console.log("a 1");
                return [4
                /*yield*/
                , this.checkAutorization()];

              case 1:
                _a.sent();

                if (!_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized) {
                  console.log("rerender");
                  this.renderCards(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.allWordsStorage);
                }

                console.log("a 2");
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    }

    _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.listen();
    PAGINATION.prepend(btnPrev);
    this.dynamicList(this.quantityGroups, "button", "groups_list__item", "active-group", _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GROUPS, this.englishLevel, "id");
    this.dynamicList(this.visiblePages, "li", "pagination_number", "active-page", _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.PAGINATION);
    PAGINATION.append(btnNext);
    this.checkAutorization();
    this.buttonClick();
    this.getWordsData();
    btnNext.addEventListener("click", function () {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.checkAutorization()];

            case 1:
              _a.sent();

              this.handleNextClick(this.renderCards);
              return [2
              /*return*/
              ];
          }
        });
      });
    });
    btnPrev.addEventListener("click", function () {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.checkAutorization()];

            case 1:
              _a.sent();

              this.handlePrevClick(this.renderCards);
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  };

  TextbookPage.prototype.buttonClick = function () {
    var _this = this;

    var _a, _b;

    var onClick = function onClick(e) {
      return __awaiter(_this, void 0, void 0, function () {
        var _this = this;

        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

        return __generator(this, function (_m) {
          switch (_m.label) {
            case 0:
              if (!(e.target.textContent === "Textbook" || e.target.id === "lets-start" || e.target.id === "textbook-main-card")) return [3
              /*break*/
              , 3];
              if (!!((_b = (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.BUTTONS_CONTAINER) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.children.length)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.checkAutorization()];

            case 1:
              _m.sent();

              this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
              _m.label = 2;

            case 2:
              if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.MAIN) {
                (_c = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) === null || _c === void 0 ? void 0 : _c.classList.remove("display_none");
                (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.DICTIONARY_CONTAINER) === null || _d === void 0 ? void 0 : _d.classList.add("display_none");
                (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.STATISTIC) === null || _e === void 0 ? void 0 : _e.classList.add("display_none");
                (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE_WRAPPER) === null || _f === void 0 ? void 0 : _f.classList.add("display_none");
                (_g = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.HERO_PAGE) === null || _g === void 0 ? void 0 : _g.classList.add("display_none");
                (_h = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.ADVANTAGES_PAGE) === null || _h === void 0 ? void 0 : _h.classList.add("display_none");
                (_j = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.ABOUT_PAGE) === null || _j === void 0 ? void 0 : _j.classList.add("display_none");
              }

              (_k = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.PAGINATION) === null || _k === void 0 ? void 0 : _k.addEventListener("click", function (event) {
                return __awaiter(_this, void 0, void 0, function () {
                  var btn, active, nextPageData;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        btn = event === null || event === void 0 ? void 0 : event.target;
                        if (!btn.classList.contains("pagination_number")) return [3
                        /*break*/
                        , 3];
                        this.btnNumber = +btn.innerText;
                        active = document.querySelector(".active-page");

                        if (active != null) {
                          active.classList.remove("active-page");
                        }

                        btn.classList.add("active-page");
                        return [4
                        /*yield*/
                        , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

                      case 1:
                        nextPageData = _a.sent();
                        return [4
                        /*yield*/
                        , this.checkAutorization()];

                      case 2:
                        _a.sent();

                        this.renderCards(nextPageData);
                        this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
                        _a.label = 3;

                      case 3:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              });
              (_l = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GROUPS) === null || _l === void 0 ? void 0 : _l.addEventListener("click", function (event) {
                return __awaiter(_this, void 0, void 0, function () {
                  var btnGroup, allPages, firstPage, activeBtn, i, active, nextGroupData;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        btnGroup = event === null || event === void 0 ? void 0 : event.target;
                        if (!btnGroup.classList.contains("groups_list__item")) return [3
                        /*break*/
                        , 3];
                        allPages = document.querySelectorAll("li.pagination_number");
                        firstPage = allPages[0];
                        activeBtn = document.querySelector(".active-page");

                        if (+activeBtn.innerHTML !== 1) {
                          this.btnNumber = 1;

                          for (i = 0; i < allPages.length; i++) {
                            allPages[i].innerHTML = String(this.btnNumber + i);
                          }

                          activeBtn.classList.remove("active-page");
                          firstPage.classList.add("active-page");
                        }

                        this.btnGroupNumber = +btnGroup.id;
                        active = document.querySelector(".active-group");

                        if (active != null) {
                          active.classList.remove("active-group");
                        }

                        btnGroup.classList.add("active-group");
                        return [4
                        /*yield*/
                        , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

                      case 1:
                        nextGroupData = _a.sent();
                        this.renderCards(nextGroupData);
                        return [4
                        /*yield*/
                        , this.checkAutorization()];

                      case 2:
                        _a.sent();

                        this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
                        _a.label = 3;

                      case 3:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              });
              _m.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.NAV) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.NAV.addEventListener("click", onClick);
    }

    if (document.querySelector("#lets-start")) {
      (_a = document.querySelector("#lets-start")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", onClick);
    }

    if (document.querySelector("#textbook-main-card")) {
      (_b = document.querySelector("#textbook-main-card")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", onClick);
    }
  };

  TextbookPage.prototype.addButtonsForAuthUsers = function (isAutorized) {
    if (!isAutorized) return;
    var additionalButtons = "\n    <buttom data-btn=\"difficultWord\" class=\"btn-basic btn_authorization_block btn-dif-word\">Difficult word</buttom>\n    <buttom data-btn=\"deleteWord\" class=\"btn-basic btn_authorization_block\">Delete word</buttom>\n  ";
    Array.from(_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.BUTTONS_CONTAINER).forEach(function (element) {
      element.insertAdjacentHTML("afterbegin", additionalButtons);
    });
  };

  TextbookPage.prototype.getWordsData = function () {
    return __awaiter(this, void 0, void 0, function () {
      var allWords;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK_CONTAINER) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(0, 0)];

          case 1:
            allWords = _a.sent();
            this.renderCards(allWords);
            _a.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  TextbookPage.prototype.dynamicList = function (maxValue, elementName, className, activeClass, containerForElement, groupsLevel, attribute, id) {
    for (var i = 1; i <= maxValue; i++) {
      var element = document.createElement(elementName);
      element.classList.add(className);
      if (i === 1) element.classList.add(activeClass);

      if (groupsLevel) {
        element.innerText = groupsLevel[i - 1];
        if (attribute) element.setAttribute(attribute, String(i));
      } else {
        element.innerText = String(i);
      }

      containerForElement.insertAdjacentElement("beforeend", element);
    }
  };

  TextbookPage.prototype.handleNextClick = function (renderCardsFn) {
    return __awaiter(this, void 0, void 0, function () {
      var allPages, lastPage, firstPage, nextPage, active, i, nextPageData, nextPageData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            allPages = document.querySelectorAll("li.pagination_number");
            lastPage = allPages[5];
            firstPage = allPages[0];
            nextPage = document.getElementsByClassName("active-page")[0].nextElementSibling;
            active = document.querySelector(".active-page");
            if (!(active.innerHTML === lastPage.innerHTML && +active.innerHTML !== this.quantityPages)) return [3
            /*break*/
            , 3];
            this.btnNumber += 1;

            for (i = 0; i < allPages.length && i + this.btnNumber <= this.quantityPages; i++) {
              allPages[i].innerHTML = String(this.btnNumber + i);
            }

            if (active != null) {
              active.classList.remove("active-page");
            }

            firstPage.classList.add("active-page");
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 1:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 2:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            return [3
            /*break*/
            , 6];

          case 3:
            this.btnNumber = +nextPage.innerText;

            if (active != null && active.innerHTML !== String(this.quantityPages)) {
              active.classList.remove("active-page");
              nextPage.classList.add("active-page");
            }

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 4:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 5:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            _a.label = 6;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  TextbookPage.prototype.handlePrevClick = function (renderCardsFn) {
    return __awaiter(this, void 0, void 0, function () {
      var allPages, lastPage, firstPage, prevPage, active, i, nextPageData, nextPageData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            allPages = document.querySelectorAll("li.pagination_number");
            lastPage = allPages[5];
            firstPage = allPages[0];
            prevPage = document.getElementsByClassName("active-page")[0].previousElementSibling;
            active = document.querySelector(".active-page");
            if (!(active.innerHTML === firstPage.innerHTML && +active.innerHTML !== 1)) return [3
            /*break*/
            , 3];
            this.btnNumber -= 1;

            for (i = 0; i < allPages.length && this.btnNumber - i >= 1; i++) {
              allPages[allPages.length - i - 1].innerHTML = String(this.btnNumber - i);
            }

            if (active != null) {
              active.classList.remove("active-page");
            }

            lastPage.classList.add("active-page");
            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 1:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 2:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            return [3
            /*break*/
            , 6];

          case 3:
            this.btnNumber = +prevPage.innerText;

            if (active != null && +active.innerHTML !== 1) {
              active.classList.remove("active-page");
              prevPage.classList.add("active-page");
            }

            return [4
            /*yield*/
            , _api__WEBPACK_IMPORTED_MODULE_2__.API.loadWordsFromServer(this.btnGroupNumber - 1, this.btnNumber - 1)];

          case 4:
            nextPageData = _a.sent();
            renderCardsFn(nextPageData, _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            return [4
            /*yield*/
            , this.checkAutorization()];

          case 5:
            _a.sent();

            this.addButtonsForAuthUsers(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            _a.label = 6;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  TextbookPage.prototype.renderCards = function (cards) {
    var ulElement = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.TEXTBOOK;
    var result = cards.reduce(function (prevValue, currValue) {
      var card = new Card(ulElement, currValue);
      var template = card.createCardTemplate();
      return prevValue + template;
    }, "");

    if (ulElement) {
      ulElement.innerHTML = result;
    }
  };

  TextbookPage.prototype.checkAutorization = function () {
    return __awaiter(this, void 0, void 0, function () {
      var token, promiseToken;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            token = _api__WEBPACK_IMPORTED_MODULE_2__.API.getToken();
            promiseToken = Promise.resolve(Boolean(token));
            return [4
            /*yield*/
            , Promise.all([promiseToken, _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_4__.AutorisationForm.isAutorized]).then(function (data) {
              _dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized = data.some(function (item) {
                return item === true;
              });
              console.log(_dataStorage__WEBPACK_IMPORTED_MODULE_3__.DataStorage.isUserAutorized);
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return TextbookPage;
}();



/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/autorisation/autorisation-form */ "./components/autorisation/autorisation-form.ts");
/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/api */ "./components/api.ts");
/* harmony import */ var _components_dataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _components_startPageListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/startPageListener */ "./components/startPageListener.ts");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _components_statistic_staticticPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/statistic/staticticPage */ "./components/statistic/staticticPage.ts");
/* harmony import */ var _components_games_selectGamePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/games/selectGamePage */ "./components/games/selectGamePage.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./components/modal.ts");
/* harmony import */ var _components_textbook_textbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/textbook/textbook */ "./components/textbook/textbook.ts");
/* harmony import */ var _components_dictionary_dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dictionary/dictionary */ "./components/dictionary/dictionary.ts");
/* harmony import */ var _components_HomeBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/HomeBtn */ "./components/HomeBtn.ts");











var server = "https://rs-lang-final-project.herokuapp.com";
var modalWindow = new _components_modal__WEBPACK_IMPORTED_MODULE_7__.ModalWindow();
modalWindow.active();
var autorisationForm = new _components_autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_0__.AutorisationForm();
var dataStorage = new _components_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage();
var startPageListener = new _components_startPageListener__WEBPACK_IMPORTED_MODULE_3__.StartPageListener();
var api = new _components_api__WEBPACK_IMPORTED_MODULE_1__.API(server);
autorisationForm.buttonAutorisationForm();
var textbook = new _components_textbook_textbook__WEBPACK_IMPORTED_MODULE_8__.TextbookPage();
textbook.build();
var dictionary = new _components_dictionary_dictionary__WEBPACK_IMPORTED_MODULE_9__.Dictionary();
dictionary.build();
var statistic = new _components_statistic_staticticPage__WEBPACK_IMPORTED_MODULE_5__.StatisticPage();
statistic.build();
var selectGame = new _components_games_selectGamePage__WEBPACK_IMPORTED_MODULE_6__.SelectGamePage();
_components_games_selectGamePage__WEBPACK_IMPORTED_MODULE_6__.SelectGamePage.build();
var home = new _components_HomeBtn__WEBPACK_IMPORTED_MODULE_10__.HomeBtn();
home.active(); // const nav = document.querySelector(".nav");
// const groups = document.querySelector(".groups") as HTMLElement;
// const pagination = document.querySelector("#pagination") as HTMLElement;
// nav?.addEventListener("click", async (event) => {
//   const btn = event.target as HTMLElement;
//   const item = btn.parentElement as HTMLElement;
//   const selectedNavItem = item.getAttribute("data-nav");
//   //TODO: add initial loading for nav items
//   switch (selectedNavItem) {
//     case "home":
//       console.log('Home: ', DataStorage.isUserAutorized);
//       break;
//     case "textbook":
//       const dataCards = await API.loadWordsFromServer(0, 0);
//       renderCards(dataCards as IWordsData[], DataStorage.isUserAutorized);
//       dynamicList(quantityGroups, "button", "groups_list__item", groups, englishLevel, "id");
//       dynamicList(visiblePages, "li", "pagination_number", pagination);
//       item.classList.add("active");
//       btn.classList.add("active");
//       const firstPaginationElement = pagination.querySelector(".pagination_number") as HTMLElement;
//       const firstGroupsElement = groups?.querySelector(".groups_list__item") as HTMLElement;
//       firstPaginationElement.classList.add("active-page");
//       firstGroupsElement.classList.add("active-group");
//       break;
//   }
// });

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/app.scss":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/app.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://weloveiconfonts.com/api/?family=fontawesome);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://weloveiconfonts.com/api/?family=fontawesome);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-basic {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: #3F5069;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s ease-out;\n}\n\n.btn-basic:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.button-panel .button-sign-in {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-panel .button-sign-up {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-sign-in:hover,\n.button-sign-up:hover {\n  background-color: #ffb108;\n  box-shadow: 0 8px 22px 0 rgba(37, 44, 97, 0.15), 0 4px 6px 0 rgba(93, 100, 148, 0.2);\n}\n\n.cta-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin-top: 24px;\n  background-color: #fa6930;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: background-color 0.5s ease 0s;\n  text-transform: none;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease-in;\n  -moz-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n  transition: all 0.8s ease 0s;\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n}\n\n.modal:target {\n  opacity: 1;\n  pointer-events: auto;\n  overflow-y: auto;\n  transform: translate(0px, 0px);\n}\n\n.modal:target .form-wrapper {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n\n.modal-dialog {\n  width: 45vw;\n  display: inline-block;\n  vertical-align: middle;\n}\n@media (max-width: 560px) {\n  .modal-dialog {\n    width: 55vw;\n  }\n}\n@media (max-width: 470px) {\n  .modal-dialog {\n    width: 65vw;\n  }\n}\n@media (max-width: 410px) {\n  .modal-dialog {\n    width: 70vw;\n  }\n}\n@media (max-width: 375px) {\n  .modal-dialog {\n    width: 75vw;\n  }\n}\n@media (max-width: 365px) {\n  .modal-dialog {\n    width: 80vw;\n  }\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n  }\n}\n.overlay__modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.overlay__modal::after {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 100%;\n  content: \"\";\n}\n\n.modal-out-area {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n/* Fonts */\n/* fontawesome */\n[class*=fontawesome-]:before {\n  font-family: \"FontAwesome\", sans-serif;\n}\n\n/* body */\nbody {\n  background: #e9e9e9;\n  color: #5e5e5e;\n}\n\n/* Form Layout */\n.form-wrapper {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(0px, -100%);\n}\n\nh1 {\n  text-align: center;\n  padding: 1em 0;\n}\n\nform {\n  padding: 0 1.5em;\n}\n\n.form-item {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n.form-item input {\n  background: #fafafa;\n  border: none;\n  border-bottom: 2px solid #e9e9e9;\n  color: #666;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1em;\n  height: 50px;\n  transition: border-color 0.3s;\n  width: 100%;\n}\n\n.form-item input:focus {\n  border-bottom: 2px solid #c0c0c0;\n  outline: none;\n}\n\n.button-panel {\n  margin: 2em 0 0;\n  width: 100%;\n}\n\n.form-footer {\n  font-size: 1em;\n  padding: 2em 0;\n  text-align: center;\n}\n\n.form-footer a {\n  color: #8c8c8c;\n  text-decoration: none;\n  transition: border-color 0.3s;\n}\n\n.form-footer a:hover {\n  border-bottom: 1px dotted #8c8c8c;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  padding: 15px;\n}\n\n.close:focus, .close:hover {\n  cursor: pointer;\n  opacity: 0.75;\n}\n\n.signup-link {\n  cursor: pointer;\n}\n\n.signup-link a:focus {\n  color: #2c3849;\n}\n\n.signup-form-container {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(-50%, -60%);\n  display: none;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/* Remove outline on the forms and links */\n:active, :hover, :focus {\n  outline: 0;\n  outline-offset: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.section-title {\n  font-size: 3rem;\n  color: #3F5069;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n}\n\n.card-title {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 24px;\n  color: #000;\n  font-weight: 400;\n}\n\n.paragraph-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.header {\n  background-color: #f4efe7;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  height: 120px;\n}\n@media (max-width: 768px) {\n  .header-container {\n    height: 100px;\n  }\n}\n@media (max-width: 375px) {\n  .header-container {\n    height: 85px;\n  }\n}\n\n.header-left-wrapper {\n  display: flex;\n  align-items: center;\n  width: 83vw;\n  justify-content: space-between;\n}\n@media (max-width: 1270px) {\n  .header-left-wrapper {\n    width: 80vw;\n  }\n}\n\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  height: 40px;\n}\n\n.logo {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 2rem;\n  color: #3F5069;\n  padding-left: 10px;\n  margin-left: 10px;\n  border-left: 2px solid #3F5069;\n  cursor: pointer;\n}\n@media (max-width: 375px) {\n  .logo {\n    font-size: 1.2rem;\n  }\n}\n\n.logo:hover {\n  color: #2c3849;\n  transition: all 0.3s ease-in-out;\n}\n\n.nav__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  position: relative;\n}\n\n.header-left::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #3F5069;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s ease-out 0.3s;\n}\n\n.nav-item::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s;\n}\n\n.header-left:hover::after,\n.nav-item:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.nav-link {\n  color: #000;\n}\n\n.active {\n  color: red;\n  pointer-events: none;\n}\n\n.act::after {\n  content: none;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.sticky + .main {\n  padding-top: 80px;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hamburger.open {\n  transform: rotate(-90deg);\n}\n\n@media (max-width: 980px) and (min-width: 320px) {\n  .hamburger {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 35px;\n    height: 30px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.7s ease-in-out;\n    z-index: 10;\n  }\n  .line {\n    width: 100%;\n    height: 3px;\n    background: #2c3849;\n  }\n}\n@media (max-width: 980px) {\n  .nav__container {\n    width: 320px;\n    height: 100%;\n    overflow-x: hidden;\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: #f4efe7;\n    z-index: 5;\n    transform: translateX(100%);\n    transition: all 0.6s ease-in-out;\n  }\n}\n@media (max-width: 980px) {\n  .nav__container.open {\n    transform: translateX(0%);\n    box-shadow: 0 0 0 9999px rgba(41, 41, 41, 0.6);\n  }\n}\n@media (max-width: 320px) {\n  .nav__container.open {\n    transform: translateX(0%);\n  }\n}\n.right-elems-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 10vw;\n}\n\n@media (max-width: 980px) {\n  .nav {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 2rem;\n    margin: 0 auto;\n    margin-top: 4rem;\n    font-size: 22px;\n  }\n  .right-elems-wrapper {\n    justify-content: space-between;\n    width: 10rem;\n  }\n}\n@media (max-width: 980px) and (max-width: 460px) {\n  .right-elems-wrapper {\n    width: 8rem;\n  }\n}\n@media (max-width: 980px) {\n  .signIn-btn {\n    display: none;\n  }\n}\n\n.signIn-btn_open {\n  display: block;\n  position: fixed;\n  top: 2.4rem;\n  right: 18rem;\n  z-index: 5;\n  transform: translateX(100%);\n  transition: all 0.6s ease-in-out;\n}\n@media (max-width: 387px) {\n  .signIn-btn_open {\n    width: 33px;\n    height: 25px;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n@media (max-width: 375px) {\n  .signIn-btn_open {\n    top: 1.9rem;\n    right: 18.6rem;\n  }\n}\n\n.wrapper {\n  width: 90vw;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  height: 100vh;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n  background-color: #f4efe7;\n}\n\nbody.lock {\n  overflow-y: hidden;\n  height: 100vh;\n}\n\n.menu-filter {\n  display: none;\n}\n\n.menu-filter_open {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 4;\n  box-shadow: 0 0 0 9999px rgba(41, 41, 41, 0.6);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.footer {\n  background-color: #2c3849;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n@media (max-width: 605px) {\n  .footer-container {\n    justify-content: center;\n  }\n}\n\n.year-box {\n  max-height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.github-box {\n  width: 60vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (max-width: 605px) {\n  .github-box {\n    width: 55vw;\n  }\n}\n@media (max-width: 480px) {\n  .github-box {\n    width: 45vw;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n  }\n}\n@media (max-width: 370px) {\n  .github-box {\n    width: 38vw;\n  }\n}\n\n.github-link {\n  font-family: \"Roboto\", sans-serif;\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  margin-left: 1rem;\n}\n@media (max-width: 480px) {\n  .github-link {\n    margin: 0;\n  }\n}\n\n.github-link::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.8s;\n}\n\n.github-link:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.rss-logo {\n  width: 7rem;\n  height: auto;\n}\n\n.rss-logo:hover {\n  filter: invert(29%) sepia(32%) saturate(582%) hue-rotate(354deg) brightness(107%) contrast(101%);\n  transition: 0.4s;\n}\n\n.wrongPassword {\n  background-color: aqua;\n}\n\n.closeModal {\n  display: none;\n}\n\n#autorisation-button.true {\n  background-color: #fa6930;\n}\n\n.textbook_container {\n  padding-top: 6rem;\n}\n@media (max-width: 425px) {\n  .textbook_container {\n    padding-top: 3rem;\n  }\n}\n\n#textbook-wrapper {\n  position: relative;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n}\n@media (max-width: 990px) {\n  #pagination {\n    margin-top: 8rem;\n  }\n}\n@media (max-width: 580px) {\n  #pagination {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 460px) {\n  #pagination {\n    margin-top: 4rem;\n    column-gap: 0.3rem;\n  }\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  color: #000;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  border-radius: 50%;\n  user-select: none;\n  transition: color 0.5s ease 0s;\n  outline: none;\n  cursor: pointer;\n  align-content: center;\n}\n\n@media (max-width: 580px) {\n  .pagination_number {\n    font-size: 16px;\n  }\n}\n@media (max-width: 580px) {\n  .pagination_number {\n    width: 32px;\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .pagination_number {\n    width: 28px;\n    height: 28px;\n  }\n}\n@media (max-width: 370px) {\n  .pagination_number {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.prev-btn:hover,\n.next-btn:hover,\n.pagination_number:hover {\n  background-color: rgb(242, 166, 99);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  color: #fff;\n}\n\n.active-page {\n  background: rgb(242, 166, 99);\n  color: #fff;\n}\n\n.next-btn {\n  border-radius: 0 25px 25px 0;\n  width: 125px;\n}\n@media (max-width: 580px) {\n  .next-btn {\n    width: 92px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 580px) {\n  .next-btn {\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .next-btn {\n    width: 75px;\n    height: 28px;\n  }\n}\n@media (max-width: 375px) {\n  .next-btn {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.prev-btn {\n  border-radius: 25px 0 0 25px;\n  width: 125px;\n}\n@media (max-width: 580px) {\n  .prev-btn {\n    width: 92px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 580px) {\n  .prev-btn {\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .prev-btn {\n    width: 75px;\n    height: 28px;\n  }\n}\n@media (max-width: 375px) {\n  .prev-btn {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n@media (max-width: 1250px) {\n  .textbook-list {\n    margin-bottom: 3.5rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list {\n    gap: 4rem;\n  }\n}\n\n.textbook-list_item {\n  width: 67rem;\n  height: 24rem;\n  display: flex;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n@media (max-width: 1120px) {\n  .textbook-list_item {\n    width: 55rem;\n    height: 20rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list_item {\n    width: 28rem;\n    height: 52rem;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 475px) {\n  .textbook-list_item {\n    width: 24rem;\n  }\n}\n@media (max-width: 440px) {\n  .textbook-list_item {\n    width: 20rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-list_item {\n    width: 16rem;\n    height: 46rem;\n  }\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 32rem;\n  height: 100%;\n  border-radius: 10px;\n}\n@media (max-width: 1120px) {\n  .textbook-card-img {\n    width: 28rem;\n  }\n}\n@media (max-width: 475px) {\n  .textbook-card-img {\n    width: 24rem;\n  }\n}\n@media (max-width: 440px) {\n  .textbook-card-img {\n    width: 20rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-card-img {\n    width: 16rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-card-img {\n    height: 25%;\n  }\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  padding-right: 0;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.7rem;\n}\n@media (max-width: 1120px) {\n  .textbook-list_item__wrapper {\n    line-height: 1.3rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list_item__wrapper {\n    padding: 2rem;\n    padding-bottom: 0;\n    font-size: 1rem;\n    line-height: 2;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-list_item__wrapper {\n    padding: 1rem;\n    padding-bottom: 0;\n    width: inherit;\n    font-size: 0.8rem;\n  }\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  width: 12rem;\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n@media (max-width: 370px) {\n  .upper_card-box {\n    width: 10rem;\n    padding-left: 10px;\n  }\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n@media (max-width: 370px) {\n  h2.word {\n    font-size: 1.4rem;\n  }\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  background-color: rgb(96, 164, 191);\n  height: 2rem;\n  margin: 0.2rem;\n}\n@media (max-width: 370px) {\n  .bnt-textbook {\n    height: 1.2rem;\n    width: 0.7rem;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n\n.bnt-bell {\n  background-color: rgb(96, 164, 191);\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 6rem;\n  column-gap: 1rem;\n}\n@media (max-width: 990px) {\n  .groups {\n    width: 60vw;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n    margin: 0 auto;\n  }\n}\n\n.groups_list__item {\n  height: 60px;\n  width: 147px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  padding: 0 16px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.2rem;\n  overflow: hidden;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all easy 0.5s;\n}\n.groups_list__item:nth-child(1) {\n  background-color: rgb(242, 105, 92);\n}\n.groups_list__item:nth-child(1):hover {\n  background-color: rgba(242, 105, 92, 0.9);\n}\n.groups_list__item:nth-child(2) {\n  background-color: rgb(242, 166, 99);\n}\n.groups_list__item:nth-child(2):hover {\n  background-color: rgba(242, 166, 99, 0.9);\n}\n.groups_list__item:nth-child(3) {\n  background-color: rgb(250, 170, 186);\n}\n.groups_list__item:nth-child(3):hover {\n  background-color: rgba(250, 170, 186, 0.9);\n}\n.groups_list__item:nth-child(4) {\n  background-color: rgb(136, 191, 176);\n}\n.groups_list__item:nth-child(4):hover {\n  background-color: rgba(136, 191, 176, 0.9);\n}\n.groups_list__item:nth-child(5) {\n  background-color: rgb(96, 164, 191);\n}\n.groups_list__item:nth-child(5):hover {\n  background-color: rgba(96, 164, 191, 0.9);\n}\n.groups_list__item:nth-child(6) {\n  background-color: rgb(89, 72, 77);\n}\n.groups_list__item:nth-child(6):hover {\n  background-color: rgba(89, 72, 77, 0.9);\n}\n\n.groups_list__item:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\nbutton.groups_list__item.active-group {\n  box-shadow: 4px 4px 5px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.authorization_block {\n  width: 16%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 90px;\n  padding: 10px;\n  padding-bottom: 2rem;\n}\n@media (max-width: 1120px) {\n  .authorization_block {\n    width: 10%;\n  }\n}\n@media (max-width: 920px) {\n  .authorization_block {\n    justify-content: center;\n    flex-direction: row;\n    align-items: flex-end;\n    width: 100%;\n  }\n}\n@media (max-width: 460px) {\n  .authorization_block {\n    flex-wrap: wrap;\n    height: 17%;\n    gap: 1rem;\n  }\n}\n\n.btn_authorization_block {\n  display: flex;\n  width: 140px;\n  height: 50px;\n  font-size: 18px;\n  text-transform: none;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(241, 105, 91);\n}\n@media (max-width: 1120px) {\n  .btn_authorization_block {\n    width: 64px;\n    height: 32px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 920px) {\n  .btn_authorization_block {\n    width: 140px;\n    height: 36px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 475px) {\n  .btn_authorization_block {\n    width: 115px;\n    height: 26px;\n    font-size: 14px;\n  }\n}\n\n.btn-dif-word {\n  background-color: rgb(242, 166, 99);\n}\n\n.back-to-top-wrapper {\n  position: absolute;\n  top: 100vh;\n  right: 7rem;\n  bottom: 0em;\n  width: 3em;\n  pointer-events: none;\n}\n@media (max-width: 1410px) {\n  .back-to-top-wrapper {\n    right: 4rem;\n  }\n}\n@media (max-width: 1310px) {\n  .back-to-top-wrapper {\n    right: 2rem;\n  }\n}\n@media (max-width: 1250px) {\n  .back-to-top-wrapper {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n@media (max-width: 920px) {\n  .back-to-top-wrapper {\n    bottom: 0;\n    right: 10rem;\n  }\n}\n@media (max-width: 885px) {\n  .back-to-top-wrapper {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n\n.back-to-top-link {\n  position: sticky;\n  pointer-events: all;\n  top: calc(100vh - 5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  text-align: center;\n  width: 100px;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  background-color: #ffcc5e;\n  user-select: none;\n  transition: color 1s ease-in-out 0s;\n}\n@media (max-width: 1320px) {\n  .back-to-top-link {\n    width: 60px;\n  }\n}\n@media (max-width: 1250px) {\n  .back-to-top-link {\n    width: 100px;\n  }\n}\n.back-to-top-link:hover {\n  background-color: #ffb108;\n}\n.back-to-top-link:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}\n\n.advantages-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.advantages-content {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6rem;\n  margin-bottom: 7rem;\n}\n@media (max-width: 1180px) {\n  .advantages-content {\n    justify-content: center;\n    row-gap: 6rem;\n  }\n}\n@media (max-width: 768px) {\n  .advantages-content {\n    gap: 4rem;\n  }\n}\n@media (max-width: 460px) {\n  .advantages-content {\n    gap: 2rem;\n    margin-bottom: 2rem;\n  }\n}\n\n.adv-card-icon {\n  display: inline-block;\n  margin-bottom: 2rem;\n}\n\n.advantages-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 290px;\n  padding: 40px 20px;\n  flex-wrap: wrap;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  cursor: pointer;\n}\n.advantages-card:hover {\n  box-shadow: 0px 2px 35px 14px rgba(20, 20, 20, 0.04);\n  background-color: #fff;\n}\n.advantages-card:hover .adv-card-title {\n  color: #ffb108;\n}\n\n.adv-card-title {\n  margin-bottom: 1.5rem;\n}\n\n.adv-card-desc {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.about-photo {\n  width: 273px;\n  height: auto;\n  margin: 0px;\n}\n\n.about-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  row-gap: 3rem;\n  padding: 32px 0px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 7rem;\n}\n\n.about-card {\n  max-width: 67rem;\n  max-height: 16.6rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1.5;\n  background-color: #3F5069;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  filter: brightness(0.9);\n}\n@media (max-width: 768px) {\n  .about-card {\n    max-height: 265px;\n  }\n}\n@media (max-width: 767px) {\n  .about-card {\n    max-height: 60rem;\n    max-width: 290px;\n    flex-direction: column;\n  }\n  .about-card .about-photo {\n    border-radius: 10px;\n    width: 290px;\n  }\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2.5rem;\n}\n@media (max-width: 767px) {\n  .about-content {\n    align-items: center;\n    padding: 1rem;\n  }\n}\n\n.about-name {\n  margin: 0;\n}\n\n.about-subtitle {\n  font-size: \"Roboto\", sans-serif;\n  color: #8d8d8d;\n}\n\n.about-desc {\n  margin: 14px 0px 0px;\n  color: #fff;\n}\n\n.github-icon {\n  max-width: 2.5rem;\n  height: auto;\n  margin: 14px 0 0;\n}\n\n.github-icon:hover {\n  filter: invert(29%) sepia(32%) saturate(582%) hue-rotate(354deg) brightness(107%) contrast(101%);\n  transition: 0.4s;\n}\n\n.about-name {\n  color: #fff;\n}\n\n#game-page-wrapper {\n  height: 100%;\n  margin-top: 6rem;\n}\n\n#game-page {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  max-width: 1440px;\n  height: auto;\n  margin: 0 auto;\n  column-gap: 2rem;\n}\n@media (max-width: 768) {\n  #game-page {\n    column-gap: 0;\n  }\n}\n#game-page #sprint-game-window {\n  width: 100%;\n  height: 100%;\n}\n#game-page #sprint-game-window .sprint-flex-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5rem;\n  height: 100vh;\n  margin-top: 4rem;\n}\n#game-page #sprint-game-window .sprint-game-timer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #2c3849;\n}\n#game-page #sprint-game-window .sprint-game-timer p {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  font-size: 4rem;\n  color: #f4efe7;\n}\n#game-page #sprint-game-window .sprint-game-window-active {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 50vw;\n  height: 45vh;\n  margin: 0 auto;\n  padding: 2px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n@media (max-width: 768px) {\n  #game-page #sprint-game-window .sprint-game-window-active {\n    width: 80vw;\n  }\n}\n@media (max-width: 380px) {\n  #game-page #sprint-game-window .sprint-game-window-active {\n    width: 90vw;\n  }\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-shrink: 1;\n  padding: 0;\n  margin: 0;\n  flex-direction: row;\n  overflow-x: scroll;\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress .progress {\n  min-width: 35px;\n  height: 35px;\n  padding: 0;\n  border: solid 1px white;\n  border-radius: 5px;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .english-word {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .translate-word {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n  height: 10vh;\n  max-height: 40px;\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  margin-bottom: 3rem;\n  column-gap: 1rem;\n}\n@media (max-width: 560px) {\n  #game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 460px) {\n  #game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n    column-gap: 0.4rem;\n  }\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint #game-btn {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 0 16px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #fa6930;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.2s ease-out !important;\n}\n\n#game-btn:hover {\n  background: #ffb108 radial-gradient(circle, transparent 1%, #ffb108 1%) center/15000% !important;\n}\n\n#game-btn:active {\n  background-color: #f8c963 !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-no:hover {\n  background: red radial-gradient(circle, transparent 1%, red 1%) center/15000% !important;\n}\n\n#game-btn.btn-no:active {\n  background-color: rgb(247, 160, 160) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-no:focus,\n#game-btn.btn-yes:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}\n\n#game-btn.btn-yes:hover {\n  background: greenyellow radial-gradient(circle, transparent 1%, greenyellow 1%) center/15000% !important;\n}\n\n#game-btn.btn-yes:active {\n  background-color: rgb(255, 255, 255) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n#game-btn.btn-yes:active:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}\n\n.game-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n  margin-bottom: 8rem;\n  margin-top: 10rem;\n  height: 100vh;\n}\n\n.result-window {\n  width: 80vw;\n  height: 68vh;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: #3F5069;\n  color: #fff;\n  overflow: scroll;\n  padding: 1.7rem;\n}\n@media (max-width: 1120px) {\n  .result-window {\n    width: 92vw;\n    padding: 1rem;\n    row-gap: 1rem;\n  }\n}\n.result-window .gameResult {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 80vw;\n  height: auto;\n  margin: 0.6rem 0 0 0;\n  padding: 0;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult {\n    width: 55vw;\n    justify-content: space-between;\n    column-gap: 2rem;\n  }\n}\n.result-window .gameResult .result-left-side {\n  display: flex;\n}\n.result-window .gameResult .point-result {\n  width: 15px;\n  height: 15px;\n  border-radius: 10px;\n  margin: 10px;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult .point-result {\n    width: 5px;\n    height: 5px;\n    margin: 5px;\n  }\n}\n.result-window .gameResult .result-word-left {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 26vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-align: start;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult .result-word-left {\n    column-gap: 0.5rem;\n    font-size: 12px;\n  }\n}\n.result-window .gameResult .result-word-left .result-word-span {\n  color: #ffb108;\n}\n.result-window .gameResult .result-word {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 37vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  line-height: 4rem;\n  text-align: start;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult .result-word {\n    width: 28vw;\n    font-size: 12px;\n    line-height: 1rem;\n    align-items: center;\n  }\n}\n.result-window .gameResult .result-word .result-word-span-right {\n  color: greenyellow;\n}\n\n.correct-result-percent {\n  margin: 0 auto;\n  padding: 0;\n}\n.correct-result-percent p {\n  margin: 0;\n  padding: 0;\n}\n\n.true {\n  background-color: greenyellow;\n}\n\n.false {\n  background-color: red;\n}\n\n.sprintGameInfo {\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  padding: 4rem 0 4rem 0;\n}\n@media (max-width: 375px) {\n  .sprintGameInfo {\n    padding-top: 0;\n  }\n}\n\n.audioGameInfo {\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  padding: 4rem 0 4rem 0;\n}\n\n.game-title-frame {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n@media (max-width: 375px) {\n  .game-title-frame {\n    width: 290px;\n    height: 305px;\n  }\n}\n\nimg.sprint-title-icon {\n  width: 110px;\n  height: 110px;\n}\n\n.game-icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #fcedd9;\n}\n\n.game-title {\n  font-size: 2rem;\n  color: #2c3849;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n\n.game-description {\n  margin: 0 auto;\n  width: 570px;\n  height: 15vh;\n  text-align: justify;\n  line-height: 2.4rem;\n  letter-spacing: 0.7px;\n  margin-bottom: 3rem;\n}\n@media (max-width: 980px) {\n  .game-description {\n    height: 20vh;\n  }\n}\n@media (max-width: 800px) {\n  .game-description {\n    height: 25vh;\n    margin-bottom: 8rem;\n  }\n}\n@media (max-width: 767px) {\n  .game-description {\n    height: 25vh;\n    width: 340px;\n    margin-bottom: 4rem;\n  }\n}\n@media (max-width: 630px) {\n  .game-description {\n    height: 35vh;\n    margin-bottom: 2rem;\n  }\n}\n@media (max-width: 630px) {\n  .game-description {\n    width: 290px;\n    line-height: 2rem;\n  }\n}\n\n.game-level-select {\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #3d4f69;\n}\n\n.game-level-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n}\n\n.select-level-audio,\n.select-level-sprint {\n  cursor: pointer;\n  width: 90px;\n  border-radius: 15px;\n  background-color: rgb(250, 250, 250);\n  box-shadow: 2px 4px 8px #c5c5c5;\n  transition: all 300ms;\n  border: none;\n  padding: 1rem 0 1rem 1.2rem;\n  color: #ffb108;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 900;\n  font-size: 2rem;\n}\n\n.level-option {\n  color: #fff;\n  background-color: #3F5069;\n}\n\n.sad-boy-icon {\n  width: 16vw;\n  height: auto;\n  margin: 6rem auto;\n}\n\n.good-result-icon {\n  width: 10rem;\n  height: 10rem;\n}\n\n.audio-game-wrapper {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n}\n\n.audio-place {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 6rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background: #fffdfd;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n}\n@media (max-width: 425px) {\n  .audio-place {\n    margin-top: 10rem;\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 375px) {\n  .audio-place {\n    width: 255px;\n    height: 240px;\n    margin-bottom: 2rem;\n  }\n}\n.audio-place .audio-game-icon {\n  width: 180px;\n  height: 180px;\n}\n\n.audio-place:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: 0.3s;\n}\n\n.btn-audio {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 3rem;\n  justify-content: center;\n  margin: 0 1rem;\n}\n@media (max-width: 475px) {\n  .btn-audio {\n    width: 80vw;\n    height: 60vh;\n    display: flex;\n    column-gap: 1rem;\n    row-gap: 1rem;\n    margin: 0 auto;\n    align-content: center;\n  }\n}\n.btn-audio p {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 1rem 0.7rem;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #3F5069;\n  font-size: 16px;\n  height: 50px;\n  letter-spacing: 0.0892857143em;\n  text-transform: uppercase;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.1s ease-out !important;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n@media (max-width: 475px) {\n  .btn-audio p {\n    font-size: 14px;\n    height: 30px;\n  }\n}\n.btn-audio :hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  background: rgba(112, 224, 37, 0.713) radial-gradient(circle, transparent 35%, rgba(112, 224, 37, 0.713) 1%) center/15000% !important;\n}\n.btn-audio :active {\n  background-color: rgba(213, 255, 44, 0.695) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n.sprint-game-timer {\n  animation: mymove 5s infinite alternate;\n}\n\n@keyframes mymove {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  25% {\n    background-color: rgba(255, 206, 83, 0.604);\n  }\n  35% {\n    background-color: rgba(247, 126, 46, 0.562);\n  }\n  50% {\n    background-color: rgba(255, 0, 55, 0.451);\n  }\n  75% {\n    background-color: rgba(27, 181, 13, 0.381);\n  }\n  85% {\n    background-color: rgb(138, 187, 200);\n  }\n  100% {\n    background-color: rgba(194, 126, 231, 0.601);\n  }\n}\n.play-again {\n  width: 15vw;\n  height: 10vh;\n  font-size: 2rem;\n  letter-spacing: normal;\n}\n@media (max-width: 560px) {\n  .play-again {\n    width: 30vw;\n  }\n}\n\n.btn-click {\n  background-color: #ffb108 !important;\n  transition: background 0.5s !important;\n  transition: all 0.2s ease-out !important;\n  background: rgba(198, 238, 36, 0.695) radial-gradient(circle, transparent 55%, rgba(112, 224, 37, 0.713) 1%) center/15000% !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n  transform: scale(1.1);\n  outline: none;\n}\n\n.keyboard-control {\n  width: 370px;\n  height: 188px;\n  margin: 2rem auto 2rem auto;\n  font-weight: 300;\n  display: block;\n  color: #fff;\n  line-height: 1.9rem;\n  text-align: justify;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  background-color: #fa6930;\n  padding: 1rem;\n}\n@media (max-width: 980px) {\n  .keyboard-control {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 812px) {\n  .keyboard-control {\n    margin-top: 4rem;\n  }\n}\n@media (max-width: 425px) {\n  .keyboard-control {\n    width: 290px;\n    height: 210px;\n  }\n}\n\n.keys-control-title {\n  font-weight: 800;\n  color: #fff;\n}\n\n.sprint-game-btn,\n.audio-game-btn {\n  height: 55px;\n  font-size: 20px;\n}\n\n.true-answear {\n  background-color: greenyellow !important;\n}\n\n.display_none {\n  display: none;\n}\n\n#statistic {\n  width: 100vw;\n  height: 100vh;\n  margin-bottom: 8rem !important;\n}\n\n.statistic-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  margin-top: 4rem;\n}\n@media (max-width: 800px) {\n  .statistic-wrapper {\n    justify-content: space-around;\n    margin-top: 10rem;\n  }\n}\n\n.get-statistic {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: #3F5069;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s ease-out;\n  min-height: 44px;\n}\n.get-statistic:hover {\n  background-color: #ffb108;\n  box-shadow: 0 8px 22px 0 rgba(37, 44, 97, 0.15), 0 4px 6px 0 rgba(93, 100, 148, 0.2);\n}\n\n.statistic-result {\n  width: 50vw;\n  height: auto;\n  display: grid;\n  grid-template-columns: 17rem 15rem 15rem;\n  row-gap: 1.5rem;\n  justify-content: center;\n  margin: 4rem 0 8rem 0;\n}\n@media (max-width: 800px) {\n  .statistic-result {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.statistic-info_sprint {\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 5px 0px;\n  border-radius: 0 10px 10px 0;\n}\n.statistic-info_sprint p {\n  margin: 0;\n  font-size: 20px;\n  color: #ffb108;\n}\n@media (max-width: 800px) {\n  .statistic-info_sprint {\n    width: 20rem;\n    align-items: center;\n    border-radius: 0 0 10px 10px;\n    height: 50rem;\n    margin-top: -1.6rem;\n    justify-content: center;\n  }\n}\n@media (max-width: 375px) {\n  .statistic-info_sprint {\n    width: 15rem;\n  }\n}\n\n.statistic-info_audio {\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 5px 0px;\n  border-radius: 0 10px 10px 0;\n}\n.statistic-info_audio p {\n  margin: 0;\n  font-size: 20px;\n  color: #ffb108;\n}\n@media (max-width: 800px) {\n  .statistic-info_audio {\n    width: 20rem;\n    align-items: center;\n    border-radius: 0 0 10px 10px;\n    height: 50rem;\n    margin-top: -1.6rem;\n    justify-content: center;\n  }\n}\n@media (max-width: 375px) {\n  .statistic-info_audio {\n    width: 15rem;\n  }\n}\n\n.stat-title {\n  margin: 0;\n}\n\n.stat-grid-item1 {\n  width: 90%;\n  padding: 1rem;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 5px 0px;\n  color: #ffb108;\n  font-weight: 600;\n  border-radius: 10px;\n}\n@media (max-width: 800px) {\n  .stat-grid-item1 {\n    width: 20rem;\n    text-align: center;\n    height: 5rem;\n  }\n}\n@media (max-width: 375px) {\n  .stat-grid-item1 {\n    width: 15rem;\n  }\n}\n\n.sprint-grid-padding {\n  padding: 1rem 0 0 1rem;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 6px 4px 5px;\n  color: #ffb108;\n  font-weight: 600;\n  border-radius: 10px 0 0 10px;\n}\n@media (max-width: 800px) {\n  .sprint-grid-padding {\n    width: 20rem;\n    height: 9rem;\n    text-align: center;\n    border-radius: 10px 10px 0 0;\n    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 5px;\n  }\n}\n@media (max-width: 375px) {\n  .sprint-grid-padding {\n    width: 15rem;\n  }\n}\n\n.audio-grid-padding {\n  padding: 1rem 0 0 1rem;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 6px 4px 5px;\n  color: #ffb108;\n  font-weight: 600;\n  border-radius: 10px 0 0 10px;\n}\n@media (max-width: 800px) {\n  .audio-grid-padding {\n    width: 20rem;\n    height: 9rem;\n    text-align: center;\n    border-radius: 10px 10px 0 0;\n    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 5px;\n    margin-top: -3rem;\n  }\n}\n@media (max-width: 375px) {\n  .audio-grid-padding {\n    width: 15rem;\n  }\n}\n\n.stat-span {\n  color: #3F5069;\n  font-weight: 300;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 690px) {\n  .hero-container {\n    flex-direction: column;\n  }\n}\n\n.hero-content {\n  max-width: 424px;\n  margin: 6rem -10rem 38rem 0;\n}\n@media (max-width: 1150px) {\n  .hero-content {\n    margin: 6rem -15rem 30rem 0;\n  }\n}\n@media (max-width: 980px) {\n  .hero-content {\n    margin: 6rem -25rem 30rem 0;\n  }\n}\n@media (max-width: 768px) {\n  .hero-content {\n    margin: -16rem -38rem 30rem 0;\n  }\n}\n@media (max-width: 690px) {\n  .hero-content {\n    margin: 6rem 6rem 0 0;\n  }\n}\n@media (max-width: 615px) {\n  .hero-content {\n    margin: 6rem 0 0 0;\n  }\n}\n@media (max-width: 460px) {\n  .hero-content {\n    margin: 4rem 0 2rem 0;\n  }\n  .hero-content .cta-btn {\n    margin: 0 auto;\n  }\n}\n\n.hero-title {\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 3rem;\n  color: #2c3849;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n@media (max-width: 460px) {\n  .hero-title {\n    text-align: center;\n  }\n}\n\n.hero-subtitle {\n  font-family: \"Roboto\", sans-serif;\n  display: block;\n  margin-top: 8px;\n  color: #8d8d8d;\n}\n@media (max-width: 460px) {\n  .hero-subtitle {\n    text-align: center;\n  }\n}\n\n.hero-text,\n.hero-under-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  display: block;\n  margin: 16px 0px 0px;\n}\n@media (max-width: 460px) {\n  .hero-text,\n.hero-under-text {\n    text-align: center;\n    margin-bottom: 1rem;\n    font-size: 18px;\n  }\n}\n\n.hero-img-box {\n  width: 700px;\n  margin: 6rem 0rem 7rem 0rem;\n}\n@media (max-width: 980px) {\n  .hero-img-box {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 690px) {\n  .hero-img-box {\n    display: flex;\n    width: 100vw;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 0 2rem 0;\n  }\n}\n@media (max-width: 375px) {\n  .hero-img-box {\n    margin-bottom: 0;\n  }\n}\n\n.hero-img-girl {\n  width: 575px;\n  margin-left: 14rem;\n}\n@media (max-width: 1150px) {\n  .hero-img-girl {\n    margin-left: 10rem;\n  }\n}\n@media (max-width: 980px) {\n  .hero-img-girl {\n    width: 390px;\n    margin-left: 21rem;\n  }\n}\n@media (max-width: 768px) {\n  .hero-img-girl {\n    width: 500px;\n    margin-left: 17rem;\n    margin-top: 10rem;\n  }\n}\n@media (max-width: 690px) {\n  .hero-img-girl {\n    width: 455px;\n    margin: 0 0 0 10rem;\n  }\n}\n@media (max-width: 615px) {\n  .hero-img-girl {\n    margin: 0;\n  }\n}\n@media (max-width: 460px) {\n  .hero-img-girl {\n    width: 395px;\n  }\n}\n@media (max-width: 395px) {\n  .hero-img-girl {\n    width: 320px;\n  }\n}\n\n.hero-img-guy {\n  width: 575px;\n}\n@media (max-width: 980px) {\n  .hero-img-guy {\n    display: block;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 768px) {\n  .hero-img-guy {\n    margin-left: 6rem;\n  }\n}\n@media (max-width: 690px) {\n  .hero-img-guy {\n    width: 455px;\n    margin: 0 10rem 4rem 0;\n  }\n}\n@media (max-width: 615px) {\n  .hero-img-guy {\n    margin: 0;\n  }\n}\n@media (max-width: 460px) {\n  .hero-img-guy {\n    width: 395px;\n  }\n}\n@media (max-width: 395px) {\n  .hero-img-guy {\n    width: 320px;\n  }\n}\n\n#pagination-dictionary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n}\n\n.dictionary-list {\n  height: fit-content;\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n@media (max-width: 1250px) {\n  .dictionary-list {\n    margin-bottom: 3.5rem;\n  }\n}\n@media (max-width: 920px) {\n  .dictionary-list {\n    gap: 4rem;\n  }\n}\n\n#groups-dictionary {\n  margin-top: 12rem;\n  margin-bottom: 6rem;\n}", "",{"version":3,"sources":["webpack://./styles/sass/components/_buttons.scss","webpack://./styles/sass/abstracts/_mixins.scss","webpack://./styles/sass/abstracts/_variables.scss","webpack://./styles/app.scss","webpack://./styles/sass/components/_modal-window.scss","webpack://./styles/sass/core/_normalize.scss","webpack://./styles/sass/core/_typography.scss","webpack://./styles/sass/layout/_header.scss","webpack://./styles/sass/layout/_wrapper.scss","webpack://./styles/sass/layout/_footer.scss","webpack://./styles/sass/pages/_authorization.scss","webpack://./styles/sass/pages/_textbook.scss","webpack://./styles/sass/pages/_home.scss","webpack://./styles/sass/pages/_games.scss","webpack://./styles/sass/pages/_statistics.scss","webpack://./styles/sass/sections/_hero.scss","webpack://./styles/sass/pages/_dictionary.scss"],"names":[],"mappings":"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","sourcesContent":[".btn-basic {\n  @include btn-primary;\n}\n\n.btn-basic:hover {\n  background: $color-accent;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\n.button-panel .button-sign-in {\n  @include btn-signIn;\n}\n\n.button-panel .button-sign-up {\n  @include btn-signIn;\n}\n\n.button-sign-in:hover,\n.button-sign-up:hover {\n  background-color: $color-accent;\n  box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%);\n}\n\n.cta-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin-top: 24px;\n  background-color: $color-orange;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: background-color 0.5s ease 0s;\n  text-transform: none;\n}","@mixin btn-primary() {\n  font-family: 'Roboto', sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: $color-dark;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: .0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  transition: all .2s ease-out;\n}\n\n@mixin btn-signIn {\n  background: $color-dark;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);\n  transition: all .2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n@mixin section-title {\n  font-size: 3rem;\n  color: $color-dark;\n  font-family: $font-stack;\n  font-weight: 400;\n}\n\n@mixin card-title {\n  font-family: $font-stack;\n  font-size: 24px;\n  color: $font-color_primary;\n  font-weight: 400;\n}\n\n@mixin paragraph-txt {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: $font-stack;\n  color: $font-color_primary;\n}\n\n","$color-primary: #f4efe7;\n$color-paper: #fcedd9;\n$color-gray: #8d8d8d;\n$color-dark: #3F5069;\n$color-dark-m: #2c3849;\n$color-accent: #ffb108;\n$color-orange: #fa6930;\n$font-color_primary: #000;\n$font-color_light: #fff;","@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n.btn-basic {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: #3F5069;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s ease-out;\n}\n\n.btn-basic:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.button-panel .button-sign-in {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-panel .button-sign-up {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-sign-in:hover,\n.button-sign-up:hover {\n  background-color: #ffb108;\n  box-shadow: 0 8px 22px 0 rgba(37, 44, 97, 0.15), 0 4px 6px 0 rgba(93, 100, 148, 0.2);\n}\n\n.cta-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin-top: 24px;\n  background-color: #fa6930;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: background-color 0.5s ease 0s;\n  text-transform: none;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease-in;\n  -moz-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n  transition: all 0.8s ease 0s;\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n}\n\n.modal:target {\n  opacity: 1;\n  pointer-events: auto;\n  overflow-y: auto;\n  transform: translate(0px, 0px);\n}\n\n.modal:target .form-wrapper {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n\n.modal-dialog {\n  width: 45vw;\n  display: inline-block;\n  vertical-align: middle;\n}\n@media (max-width: 560px) {\n  .modal-dialog {\n    width: 55vw;\n  }\n}\n@media (max-width: 470px) {\n  .modal-dialog {\n    width: 65vw;\n  }\n}\n@media (max-width: 410px) {\n  .modal-dialog {\n    width: 70vw;\n  }\n}\n@media (max-width: 375px) {\n  .modal-dialog {\n    width: 75vw;\n  }\n}\n@media (max-width: 365px) {\n  .modal-dialog {\n    width: 80vw;\n  }\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n  }\n}\n.overlay__modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.overlay__modal::after {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 100%;\n  content: \"\";\n}\n\n.modal-out-area {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n/* Fonts */\n/* fontawesome */\n[class*=fontawesome-]:before {\n  font-family: \"FontAwesome\", sans-serif;\n}\n\n/* body */\nbody {\n  background: #e9e9e9;\n  color: #5e5e5e;\n}\n\n/* Form Layout */\n.form-wrapper {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(0px, -100%);\n}\n\nh1 {\n  text-align: center;\n  padding: 1em 0;\n}\n\nform {\n  padding: 0 1.5em;\n}\n\n.form-item {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n.form-item input {\n  background: #fafafa;\n  border: none;\n  border-bottom: 2px solid #e9e9e9;\n  color: #666;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1em;\n  height: 50px;\n  transition: border-color 0.3s;\n  width: 100%;\n}\n\n.form-item input:focus {\n  border-bottom: 2px solid #c0c0c0;\n  outline: none;\n}\n\n.button-panel {\n  margin: 2em 0 0;\n  width: 100%;\n}\n\n.form-footer {\n  font-size: 1em;\n  padding: 2em 0;\n  text-align: center;\n}\n\n.form-footer a {\n  color: #8c8c8c;\n  text-decoration: none;\n  transition: border-color 0.3s;\n}\n\n.form-footer a:hover {\n  border-bottom: 1px dotted #8c8c8c;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  padding: 15px;\n}\n\n.close:focus, .close:hover {\n  cursor: pointer;\n  opacity: 0.75;\n}\n\n.signup-link {\n  cursor: pointer;\n}\n\n.signup-link a:focus {\n  color: #2c3849;\n}\n\n.signup-form-container {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(-50%, -60%);\n  display: none;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/* Remove outline on the forms and links */\n:active, :hover, :focus {\n  outline: 0;\n  outline-offset: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.section-title {\n  font-size: 3rem;\n  color: #3F5069;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n}\n\n.card-title {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 24px;\n  color: #000;\n  font-weight: 400;\n}\n\n.paragraph-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.header {\n  background-color: #f4efe7;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  height: 120px;\n}\n@media (max-width: 768px) {\n  .header-container {\n    height: 100px;\n  }\n}\n@media (max-width: 375px) {\n  .header-container {\n    height: 85px;\n  }\n}\n\n.header-left-wrapper {\n  display: flex;\n  align-items: center;\n  width: 83vw;\n  justify-content: space-between;\n}\n@media (max-width: 1270px) {\n  .header-left-wrapper {\n    width: 80vw;\n  }\n}\n\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  height: 40px;\n}\n\n.logo {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 2rem;\n  color: #3F5069;\n  padding-left: 10px;\n  margin-left: 10px;\n  border-left: 2px solid #3F5069;\n  cursor: pointer;\n}\n@media (max-width: 375px) {\n  .logo {\n    font-size: 1.2rem;\n  }\n}\n\n.logo:hover {\n  color: #2c3849;\n  transition: all 0.3s ease-in-out;\n}\n\n.nav__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  position: relative;\n}\n\n.header-left::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #3F5069;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s ease-out 0.3s;\n}\n\n.nav-item::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s;\n}\n\n.header-left:hover::after,\n.nav-item:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.nav-link {\n  color: #000;\n}\n\n.active {\n  color: red;\n  pointer-events: none;\n}\n\n.act::after {\n  content: none;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.sticky + .main {\n  padding-top: 80px;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hamburger.open {\n  transform: rotate(-90deg);\n}\n\n@media (max-width: 980px) and (min-width: 320px) {\n  .hamburger {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 35px;\n    height: 30px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.7s ease-in-out;\n    z-index: 10;\n  }\n  .line {\n    width: 100%;\n    height: 3px;\n    background: #2c3849;\n  }\n}\n@media (max-width: 980px) {\n  .nav__container {\n    width: 320px;\n    height: 100%;\n    overflow-x: hidden;\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: #f4efe7;\n    z-index: 5;\n    transform: translateX(100%);\n    transition: all 0.6s ease-in-out;\n  }\n}\n@media (max-width: 980px) {\n  .nav__container.open {\n    transform: translateX(0%);\n    box-shadow: 0 0 0 9999px rgba(41, 41, 41, 0.6);\n  }\n}\n@media (max-width: 320px) {\n  .nav__container.open {\n    transform: translateX(0%);\n  }\n}\n.right-elems-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 10vw;\n}\n\n@media (max-width: 980px) {\n  .nav {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 2rem;\n    margin: 0 auto;\n    margin-top: 4rem;\n    font-size: 22px;\n  }\n  .right-elems-wrapper {\n    justify-content: space-between;\n    width: 10rem;\n  }\n}\n@media (max-width: 980px) and (max-width: 460px) {\n  .right-elems-wrapper {\n    width: 8rem;\n  }\n}\n@media (max-width: 980px) {\n  .signIn-btn {\n    display: none;\n  }\n}\n\n.signIn-btn_open {\n  display: block;\n  position: fixed;\n  top: 2.4rem;\n  right: 18rem;\n  z-index: 5;\n  transform: translateX(100%);\n  transition: all 0.6s ease-in-out;\n}\n@media (max-width: 387px) {\n  .signIn-btn_open {\n    width: 33px;\n    height: 25px;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n@media (max-width: 375px) {\n  .signIn-btn_open {\n    top: 1.9rem;\n    right: 18.6rem;\n  }\n}\n\n.wrapper {\n  width: 90vw;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  height: 100vh;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n  background-color: #f4efe7;\n}\n\nbody.lock {\n  overflow-y: hidden;\n  height: 100vh;\n}\n\n.menu-filter {\n  display: none;\n}\n\n.menu-filter_open {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 4;\n  box-shadow: 0 0 0 9999px rgba(41, 41, 41, 0.6);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.footer {\n  background-color: #2c3849;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n@media (max-width: 605px) {\n  .footer-container {\n    justify-content: center;\n  }\n}\n\n.year-box {\n  max-height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.github-box {\n  width: 60vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (max-width: 605px) {\n  .github-box {\n    width: 55vw;\n  }\n}\n@media (max-width: 480px) {\n  .github-box {\n    width: 45vw;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n  }\n}\n@media (max-width: 370px) {\n  .github-box {\n    width: 38vw;\n  }\n}\n\n.github-link {\n  font-family: \"Roboto\", sans-serif;\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  margin-left: 1rem;\n}\n@media (max-width: 480px) {\n  .github-link {\n    margin: 0;\n  }\n}\n\n.github-link::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.8s;\n}\n\n.github-link:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.rss-logo {\n  width: 7rem;\n  height: auto;\n}\n\n.rss-logo:hover {\n  filter: invert(29%) sepia(32%) saturate(582%) hue-rotate(354deg) brightness(107%) contrast(101%);\n  transition: 0.4s;\n}\n\n.wrongPassword {\n  background-color: aqua;\n}\n\n.closeModal {\n  display: none;\n}\n\n#autorisation-button.true {\n  background-color: #fa6930;\n}\n\n.textbook_container {\n  padding-top: 6rem;\n}\n@media (max-width: 425px) {\n  .textbook_container {\n    padding-top: 3rem;\n  }\n}\n\n#textbook-wrapper {\n  position: relative;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n}\n@media (max-width: 990px) {\n  #pagination {\n    margin-top: 8rem;\n  }\n}\n@media (max-width: 580px) {\n  #pagination {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 460px) {\n  #pagination {\n    margin-top: 4rem;\n    column-gap: 0.3rem;\n  }\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  color: #000;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  border-radius: 50%;\n  user-select: none;\n  transition: color 0.5s ease 0s;\n  outline: none;\n  cursor: pointer;\n  align-content: center;\n}\n\n@media (max-width: 580px) {\n  .pagination_number {\n    font-size: 16px;\n  }\n}\n@media (max-width: 580px) {\n  .pagination_number {\n    width: 32px;\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .pagination_number {\n    width: 28px;\n    height: 28px;\n  }\n}\n@media (max-width: 370px) {\n  .pagination_number {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.prev-btn:hover,\n.next-btn:hover,\n.pagination_number:hover {\n  background-color: rgb(242, 166, 99);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  color: #fff;\n}\n\n.active-page {\n  background: rgb(242, 166, 99);\n  color: #fff;\n}\n\n.next-btn {\n  border-radius: 0 25px 25px 0;\n  width: 125px;\n}\n@media (max-width: 580px) {\n  .next-btn {\n    width: 92px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 580px) {\n  .next-btn {\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .next-btn {\n    width: 75px;\n    height: 28px;\n  }\n}\n@media (max-width: 375px) {\n  .next-btn {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.prev-btn {\n  border-radius: 25px 0 0 25px;\n  width: 125px;\n}\n@media (max-width: 580px) {\n  .prev-btn {\n    width: 92px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 580px) {\n  .prev-btn {\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .prev-btn {\n    width: 75px;\n    height: 28px;\n  }\n}\n@media (max-width: 375px) {\n  .prev-btn {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n@media (max-width: 1250px) {\n  .textbook-list {\n    margin-bottom: 3.5rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list {\n    gap: 4rem;\n  }\n}\n\n.textbook-list_item {\n  width: 67rem;\n  height: 24rem;\n  display: flex;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n@media (max-width: 1120px) {\n  .textbook-list_item {\n    width: 55rem;\n    height: 20rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list_item {\n    width: 28rem;\n    height: 52rem;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 475px) {\n  .textbook-list_item {\n    width: 24rem;\n  }\n}\n@media (max-width: 440px) {\n  .textbook-list_item {\n    width: 20rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-list_item {\n    width: 16rem;\n    height: 46rem;\n  }\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 32rem;\n  height: 100%;\n  border-radius: 10px;\n}\n@media (max-width: 1120px) {\n  .textbook-card-img {\n    width: 28rem;\n  }\n}\n@media (max-width: 475px) {\n  .textbook-card-img {\n    width: 24rem;\n  }\n}\n@media (max-width: 440px) {\n  .textbook-card-img {\n    width: 20rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-card-img {\n    width: 16rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-card-img {\n    height: 25%;\n  }\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  padding-right: 0;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.7rem;\n}\n@media (max-width: 1120px) {\n  .textbook-list_item__wrapper {\n    line-height: 1.3rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list_item__wrapper {\n    padding: 2rem;\n    padding-bottom: 0;\n    font-size: 1rem;\n    line-height: 2;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-list_item__wrapper {\n    padding: 1rem;\n    padding-bottom: 0;\n    width: inherit;\n    font-size: 0.8rem;\n  }\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  width: 12rem;\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n@media (max-width: 370px) {\n  .upper_card-box {\n    width: 10rem;\n    padding-left: 10px;\n  }\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n@media (max-width: 370px) {\n  h2.word {\n    font-size: 1.4rem;\n  }\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  background-color: rgb(96, 164, 191);\n  height: 2rem;\n  margin: 0.2rem;\n}\n@media (max-width: 370px) {\n  .bnt-textbook {\n    height: 1.2rem;\n    width: 0.7rem;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n\n.bnt-bell {\n  background-color: rgb(96, 164, 191);\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 6rem;\n  column-gap: 1rem;\n}\n@media (max-width: 990px) {\n  .groups {\n    width: 60vw;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n    margin: 0 auto;\n  }\n}\n\n.groups_list__item {\n  height: 60px;\n  width: 147px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  padding: 0 16px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.2rem;\n  overflow: hidden;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all easy 0.5s;\n}\n.groups_list__item:nth-child(1) {\n  background-color: rgb(242, 105, 92);\n}\n.groups_list__item:nth-child(1):hover {\n  background-color: rgba(242, 105, 92, 0.9);\n}\n.groups_list__item:nth-child(2) {\n  background-color: rgb(242, 166, 99);\n}\n.groups_list__item:nth-child(2):hover {\n  background-color: rgba(242, 166, 99, 0.9);\n}\n.groups_list__item:nth-child(3) {\n  background-color: rgb(250, 170, 186);\n}\n.groups_list__item:nth-child(3):hover {\n  background-color: rgba(250, 170, 186, 0.9);\n}\n.groups_list__item:nth-child(4) {\n  background-color: rgb(136, 191, 176);\n}\n.groups_list__item:nth-child(4):hover {\n  background-color: rgba(136, 191, 176, 0.9);\n}\n.groups_list__item:nth-child(5) {\n  background-color: rgb(96, 164, 191);\n}\n.groups_list__item:nth-child(5):hover {\n  background-color: rgba(96, 164, 191, 0.9);\n}\n.groups_list__item:nth-child(6) {\n  background-color: rgb(89, 72, 77);\n}\n.groups_list__item:nth-child(6):hover {\n  background-color: rgba(89, 72, 77, 0.9);\n}\n\n.groups_list__item:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\nbutton.groups_list__item.active-group {\n  box-shadow: 4px 4px 5px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.authorization_block {\n  width: 16%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 90px;\n  padding: 10px;\n  padding-bottom: 2rem;\n}\n@media (max-width: 1120px) {\n  .authorization_block {\n    width: 10%;\n  }\n}\n@media (max-width: 920px) {\n  .authorization_block {\n    justify-content: center;\n    flex-direction: row;\n    align-items: flex-end;\n    width: 100%;\n  }\n}\n@media (max-width: 460px) {\n  .authorization_block {\n    flex-wrap: wrap;\n    height: 17%;\n    gap: 1rem;\n  }\n}\n\n.btn_authorization_block {\n  display: flex;\n  width: 140px;\n  height: 50px;\n  font-size: 18px;\n  text-transform: none;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(241, 105, 91);\n}\n@media (max-width: 1120px) {\n  .btn_authorization_block {\n    width: 64px;\n    height: 32px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 920px) {\n  .btn_authorization_block {\n    width: 140px;\n    height: 36px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 475px) {\n  .btn_authorization_block {\n    width: 115px;\n    height: 26px;\n    font-size: 14px;\n  }\n}\n\n.btn-dif-word {\n  background-color: rgb(242, 166, 99);\n}\n\n.back-to-top-wrapper {\n  position: absolute;\n  top: 100vh;\n  right: 7rem;\n  bottom: 0em;\n  width: 3em;\n  pointer-events: none;\n}\n@media (max-width: 1410px) {\n  .back-to-top-wrapper {\n    right: 4rem;\n  }\n}\n@media (max-width: 1310px) {\n  .back-to-top-wrapper {\n    right: 2rem;\n  }\n}\n@media (max-width: 1250px) {\n  .back-to-top-wrapper {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n@media (max-width: 920px) {\n  .back-to-top-wrapper {\n    bottom: 0;\n    right: 10rem;\n  }\n}\n@media (max-width: 885px) {\n  .back-to-top-wrapper {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n\n.back-to-top-link {\n  position: sticky;\n  pointer-events: all;\n  top: calc(100vh - 5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  text-align: center;\n  width: 100px;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  background-color: #ffcc5e;\n  user-select: none;\n  transition: color 1s ease-in-out 0s;\n}\n@media (max-width: 1320px) {\n  .back-to-top-link {\n    width: 60px;\n  }\n}\n@media (max-width: 1250px) {\n  .back-to-top-link {\n    width: 100px;\n  }\n}\n.back-to-top-link:hover {\n  background-color: #ffb108;\n}\n.back-to-top-link:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}\n\n.advantages-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.advantages-content {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6rem;\n  margin-bottom: 7rem;\n}\n@media (max-width: 1180px) {\n  .advantages-content {\n    justify-content: center;\n    row-gap: 6rem;\n  }\n}\n@media (max-width: 768px) {\n  .advantages-content {\n    gap: 4rem;\n  }\n}\n@media (max-width: 460px) {\n  .advantages-content {\n    gap: 2rem;\n    margin-bottom: 2rem;\n  }\n}\n\n.adv-card-icon {\n  display: inline-block;\n  margin-bottom: 2rem;\n}\n\n.advantages-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 290px;\n  padding: 40px 20px;\n  flex-wrap: wrap;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  cursor: pointer;\n}\n.advantages-card:hover {\n  box-shadow: 0px 2px 35px 14px rgba(20, 20, 20, 0.04);\n  background-color: #fff;\n}\n.advantages-card:hover .adv-card-title {\n  color: #ffb108;\n}\n\n.adv-card-title {\n  margin-bottom: 1.5rem;\n}\n\n.adv-card-desc {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.about-photo {\n  width: 273px;\n  height: auto;\n  margin: 0px;\n}\n\n.about-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  row-gap: 3rem;\n  padding: 32px 0px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 7rem;\n}\n\n.about-card {\n  max-width: 67rem;\n  max-height: 16.6rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1.5;\n  background-color: #3F5069;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  filter: brightness(0.9);\n}\n@media (max-width: 768px) {\n  .about-card {\n    max-height: 265px;\n  }\n}\n@media (max-width: 767px) {\n  .about-card {\n    max-height: 60rem;\n    max-width: 290px;\n    flex-direction: column;\n  }\n  .about-card .about-photo {\n    border-radius: 10px;\n    width: 290px;\n  }\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2.5rem;\n}\n@media (max-width: 767px) {\n  .about-content {\n    align-items: center;\n    padding: 1rem;\n  }\n}\n\n.about-name {\n  margin: 0;\n}\n\n.about-subtitle {\n  font-size: \"Roboto\", sans-serif;\n  color: #8d8d8d;\n}\n\n.about-desc {\n  margin: 14px 0px 0px;\n  color: #fff;\n}\n\n.github-icon {\n  max-width: 2.5rem;\n  height: auto;\n  margin: 14px 0 0;\n}\n\n.github-icon:hover {\n  filter: invert(29%) sepia(32%) saturate(582%) hue-rotate(354deg) brightness(107%) contrast(101%);\n  transition: 0.4s;\n}\n\n.about-name {\n  color: #fff;\n}\n\n#game-page-wrapper {\n  height: 100%;\n  margin-top: 6rem;\n}\n\n#game-page {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  max-width: 1440px;\n  height: auto;\n  margin: 0 auto;\n  column-gap: 2rem;\n}\n@media (max-width: 768) {\n  #game-page {\n    column-gap: 0;\n  }\n}\n#game-page #sprint-game-window {\n  width: 100%;\n  height: 100%;\n}\n#game-page #sprint-game-window .sprint-flex-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5rem;\n  height: 100vh;\n  margin-top: 4rem;\n}\n#game-page #sprint-game-window .sprint-game-timer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #2c3849;\n}\n#game-page #sprint-game-window .sprint-game-timer p {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  font-size: 4rem;\n  color: #f4efe7;\n}\n#game-page #sprint-game-window .sprint-game-window-active {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 50vw;\n  height: 45vh;\n  margin: 0 auto;\n  padding: 2px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n@media (max-width: 768px) {\n  #game-page #sprint-game-window .sprint-game-window-active {\n    width: 80vw;\n  }\n}\n@media (max-width: 380px) {\n  #game-page #sprint-game-window .sprint-game-window-active {\n    width: 90vw;\n  }\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-shrink: 1;\n  padding: 0;\n  margin: 0;\n  flex-direction: row;\n  overflow-x: scroll;\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress .progress {\n  min-width: 35px;\n  height: 35px;\n  padding: 0;\n  border: solid 1px white;\n  border-radius: 5px;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .english-word {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .translate-word {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n  height: 10vh;\n  max-height: 40px;\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  margin-bottom: 3rem;\n  column-gap: 1rem;\n}\n@media (max-width: 560px) {\n  #game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 460px) {\n  #game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n    column-gap: 0.4rem;\n  }\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint #game-btn {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 0 16px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #fa6930;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.2s ease-out !important;\n}\n\n#game-btn:hover {\n  background: #ffb108 radial-gradient(circle, transparent 1%, #ffb108 1%) center/15000% !important;\n}\n\n#game-btn:active {\n  background-color: #f8c963 !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-no:hover {\n  background: red radial-gradient(circle, transparent 1%, red 1%) center/15000% !important;\n}\n\n#game-btn.btn-no:active {\n  background-color: rgb(247, 160, 160) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-no:focus,\n#game-btn.btn-yes:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}\n\n#game-btn.btn-yes:hover {\n  background: greenyellow radial-gradient(circle, transparent 1%, greenyellow 1%) center/15000% !important;\n}\n\n#game-btn.btn-yes:active {\n  background-color: rgb(255, 255, 255) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n#game-btn.btn-yes:active:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}\n\n.game-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n  margin-bottom: 8rem;\n  margin-top: 10rem;\n  height: 100vh;\n}\n\n.result-window {\n  width: 80vw;\n  height: 68vh;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: #3F5069;\n  color: #fff;\n  overflow: scroll;\n  padding: 1.7rem;\n}\n@media (max-width: 1120px) {\n  .result-window {\n    width: 92vw;\n    padding: 1rem;\n    row-gap: 1rem;\n  }\n}\n.result-window .gameResult {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 80vw;\n  height: auto;\n  margin: 0.6rem 0 0 0;\n  padding: 0;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult {\n    width: 55vw;\n    justify-content: space-between;\n    column-gap: 2rem;\n  }\n}\n.result-window .gameResult .result-left-side {\n  display: flex;\n}\n.result-window .gameResult .point-result {\n  width: 15px;\n  height: 15px;\n  border-radius: 10px;\n  margin: 10px;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult .point-result {\n    width: 5px;\n    height: 5px;\n    margin: 5px;\n  }\n}\n.result-window .gameResult .result-word-left {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 26vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-align: start;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult .result-word-left {\n    column-gap: 0.5rem;\n    font-size: 12px;\n  }\n}\n.result-window .gameResult .result-word-left .result-word-span {\n  color: #ffb108;\n}\n.result-window .gameResult .result-word {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 37vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  line-height: 4rem;\n  text-align: start;\n}\n@media (max-width: 1120px) {\n  .result-window .gameResult .result-word {\n    width: 28vw;\n    font-size: 12px;\n    line-height: 1rem;\n    align-items: center;\n  }\n}\n.result-window .gameResult .result-word .result-word-span-right {\n  color: greenyellow;\n}\n\n.correct-result-percent {\n  margin: 0 auto;\n  padding: 0;\n}\n.correct-result-percent p {\n  margin: 0;\n  padding: 0;\n}\n\n.true {\n  background-color: greenyellow;\n}\n\n.false {\n  background-color: red;\n}\n\n.sprintGameInfo {\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  padding: 4rem 0 4rem 0;\n}\n@media (max-width: 375px) {\n  .sprintGameInfo {\n    padding-top: 0;\n  }\n}\n\n.audioGameInfo {\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  padding: 4rem 0 4rem 0;\n}\n\n.game-title-frame {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n@media (max-width: 375px) {\n  .game-title-frame {\n    width: 290px;\n    height: 305px;\n  }\n}\n\nimg.sprint-title-icon {\n  width: 110px;\n  height: 110px;\n}\n\n.game-icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #fcedd9;\n}\n\n.game-title {\n  font-size: 2rem;\n  color: #2c3849;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n\n.game-description {\n  margin: 0 auto;\n  width: 570px;\n  height: 15vh;\n  text-align: justify;\n  line-height: 2.4rem;\n  letter-spacing: 0.7px;\n  margin-bottom: 3rem;\n}\n@media (max-width: 980px) {\n  .game-description {\n    height: 20vh;\n  }\n}\n@media (max-width: 800px) {\n  .game-description {\n    height: 25vh;\n    margin-bottom: 8rem;\n  }\n}\n@media (max-width: 767px) {\n  .game-description {\n    height: 25vh;\n    width: 340px;\n    margin-bottom: 4rem;\n  }\n}\n@media (max-width: 630px) {\n  .game-description {\n    height: 35vh;\n    margin-bottom: 2rem;\n  }\n}\n@media (max-width: 630px) {\n  .game-description {\n    width: 290px;\n    line-height: 2rem;\n  }\n}\n\n.game-level-select {\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #3d4f69;\n}\n\n.game-level-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n}\n\n.select-level-audio,\n.select-level-sprint {\n  cursor: pointer;\n  width: 90px;\n  border-radius: 15px;\n  background-color: rgb(250, 250, 250);\n  box-shadow: 2px 4px 8px #c5c5c5;\n  transition: all 300ms;\n  border: none;\n  padding: 1rem 0 1rem 1.2rem;\n  color: #ffb108;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 900;\n  font-size: 2rem;\n}\n\n.level-option {\n  color: #fff;\n  background-color: #3F5069;\n}\n\n.sad-boy-icon {\n  width: 16vw;\n  height: auto;\n  margin: 6rem auto;\n}\n\n.good-result-icon {\n  width: 10rem;\n  height: 10rem;\n}\n\n.audio-game-wrapper {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n}\n\n.audio-place {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 6rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background: #fffdfd;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n}\n@media (max-width: 425px) {\n  .audio-place {\n    margin-top: 10rem;\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 375px) {\n  .audio-place {\n    width: 255px;\n    height: 240px;\n    margin-bottom: 2rem;\n  }\n}\n.audio-place .audio-game-icon {\n  width: 180px;\n  height: 180px;\n}\n\n.audio-place:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: 0.3s;\n}\n\n.btn-audio {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 3rem;\n  justify-content: center;\n  margin: 0 1rem;\n}\n@media (max-width: 475px) {\n  .btn-audio {\n    width: 80vw;\n    height: 60vh;\n    display: flex;\n    column-gap: 1rem;\n    row-gap: 1rem;\n    margin: 0 auto;\n    align-content: center;\n  }\n}\n.btn-audio p {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 1rem 0.7rem;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #3F5069;\n  font-size: 16px;\n  height: 50px;\n  letter-spacing: 0.0892857143em;\n  text-transform: uppercase;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.1s ease-out !important;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n@media (max-width: 475px) {\n  .btn-audio p {\n    font-size: 14px;\n    height: 30px;\n  }\n}\n.btn-audio :hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  background: rgba(112, 224, 37, 0.713) radial-gradient(circle, transparent 35%, rgba(112, 224, 37, 0.713) 1%) center/15000% !important;\n}\n.btn-audio :active {\n  background-color: rgba(213, 255, 44, 0.695) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n.sprint-game-timer {\n  animation: mymove 5s infinite alternate;\n}\n\n@keyframes mymove {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  25% {\n    background-color: rgba(255, 206, 83, 0.604);\n  }\n  35% {\n    background-color: rgba(247, 126, 46, 0.562);\n  }\n  50% {\n    background-color: rgba(255, 0, 55, 0.451);\n  }\n  75% {\n    background-color: rgba(27, 181, 13, 0.381);\n  }\n  85% {\n    background-color: rgb(138, 187, 200);\n  }\n  100% {\n    background-color: rgba(194, 126, 231, 0.601);\n  }\n}\n.play-again {\n  width: 15vw;\n  height: 10vh;\n  font-size: 2rem;\n  letter-spacing: normal;\n}\n@media (max-width: 560px) {\n  .play-again {\n    width: 30vw;\n  }\n}\n\n.btn-click {\n  background-color: #ffb108 !important;\n  transition: background 0.5s !important;\n  transition: all 0.2s ease-out !important;\n  background: rgba(198, 238, 36, 0.695) radial-gradient(circle, transparent 55%, rgba(112, 224, 37, 0.713) 1%) center/15000% !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n  transform: scale(1.1);\n  outline: none;\n}\n\n.keyboard-control {\n  width: 370px;\n  height: 188px;\n  margin: 2rem auto 2rem auto;\n  font-weight: 300;\n  display: block;\n  color: #fff;\n  line-height: 1.9rem;\n  text-align: justify;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  background-color: #fa6930;\n  padding: 1rem;\n}\n@media (max-width: 980px) {\n  .keyboard-control {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 812px) {\n  .keyboard-control {\n    margin-top: 4rem;\n  }\n}\n@media (max-width: 425px) {\n  .keyboard-control {\n    width: 290px;\n    height: 210px;\n  }\n}\n\n.keys-control-title {\n  font-weight: 800;\n  color: #fff;\n}\n\n.sprint-game-btn,\n.audio-game-btn {\n  height: 55px;\n  font-size: 20px;\n}\n\n.true-answear {\n  background-color: greenyellow !important;\n}\n\n.display_none {\n  display: none;\n}\n\n#statistic {\n  width: 100vw;\n  height: 100vh;\n  margin-bottom: 8rem !important;\n}\n\n.statistic-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  margin-top: 4rem;\n}\n@media (max-width: 800px) {\n  .statistic-wrapper {\n    justify-content: space-around;\n    margin-top: 10rem;\n  }\n}\n\n.get-statistic {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: #3F5069;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s ease-out;\n  min-height: 44px;\n}\n.get-statistic:hover {\n  background-color: #ffb108;\n  box-shadow: 0 8px 22px 0 rgba(37, 44, 97, 0.15), 0 4px 6px 0 rgba(93, 100, 148, 0.2);\n}\n\n.statistic-result {\n  width: 50vw;\n  height: auto;\n  display: grid;\n  grid-template-columns: 17rem 15rem 15rem;\n  row-gap: 1.5rem;\n  justify-content: center;\n  margin: 4rem 0 8rem 0;\n}\n@media (max-width: 800px) {\n  .statistic-result {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.statistic-info_sprint {\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 5px 0px;\n  border-radius: 0 10px 10px 0;\n}\n.statistic-info_sprint p {\n  margin: 0;\n  font-size: 20px;\n  color: #ffb108;\n}\n@media (max-width: 800px) {\n  .statistic-info_sprint {\n    width: 20rem;\n    align-items: center;\n    border-radius: 0 0 10px 10px;\n    height: 50rem;\n    margin-top: -1.6rem;\n    justify-content: center;\n  }\n}\n@media (max-width: 375px) {\n  .statistic-info_sprint {\n    width: 15rem;\n  }\n}\n\n.statistic-info_audio {\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 5px 0px;\n  border-radius: 0 10px 10px 0;\n}\n.statistic-info_audio p {\n  margin: 0;\n  font-size: 20px;\n  color: #ffb108;\n}\n@media (max-width: 800px) {\n  .statistic-info_audio {\n    width: 20rem;\n    align-items: center;\n    border-radius: 0 0 10px 10px;\n    height: 50rem;\n    margin-top: -1.6rem;\n    justify-content: center;\n  }\n}\n@media (max-width: 375px) {\n  .statistic-info_audio {\n    width: 15rem;\n  }\n}\n\n.stat-title {\n  margin: 0;\n}\n\n.stat-grid-item1 {\n  width: 90%;\n  padding: 1rem;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 5px 0px;\n  color: #ffb108;\n  font-weight: 600;\n  border-radius: 10px;\n}\n@media (max-width: 800px) {\n  .stat-grid-item1 {\n    width: 20rem;\n    text-align: center;\n    height: 5rem;\n  }\n}\n@media (max-width: 375px) {\n  .stat-grid-item1 {\n    width: 15rem;\n  }\n}\n\n.sprint-grid-padding {\n  padding: 1rem 0 0 1rem;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 6px 4px 5px;\n  color: #ffb108;\n  font-weight: 600;\n  border-radius: 10px 0 0 10px;\n}\n@media (max-width: 800px) {\n  .sprint-grid-padding {\n    width: 20rem;\n    height: 9rem;\n    text-align: center;\n    border-radius: 10px 10px 0 0;\n    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 5px;\n  }\n}\n@media (max-width: 375px) {\n  .sprint-grid-padding {\n    width: 15rem;\n  }\n}\n\n.audio-grid-padding {\n  padding: 1rem 0 0 1rem;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 6px 4px 5px;\n  color: #ffb108;\n  font-weight: 600;\n  border-radius: 10px 0 0 10px;\n}\n@media (max-width: 800px) {\n  .audio-grid-padding {\n    width: 20rem;\n    height: 9rem;\n    text-align: center;\n    border-radius: 10px 10px 0 0;\n    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 5px;\n    margin-top: -3rem;\n  }\n}\n@media (max-width: 375px) {\n  .audio-grid-padding {\n    width: 15rem;\n  }\n}\n\n.stat-span {\n  color: #3F5069;\n  font-weight: 300;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 690px) {\n  .hero-container {\n    flex-direction: column;\n  }\n}\n\n.hero-content {\n  max-width: 424px;\n  margin: 6rem -10rem 38rem 0;\n}\n@media (max-width: 1150px) {\n  .hero-content {\n    margin: 6rem -15rem 30rem 0;\n  }\n}\n@media (max-width: 980px) {\n  .hero-content {\n    margin: 6rem -25rem 30rem 0;\n  }\n}\n@media (max-width: 768px) {\n  .hero-content {\n    margin: -16rem -38rem 30rem 0;\n  }\n}\n@media (max-width: 690px) {\n  .hero-content {\n    margin: 6rem 6rem 0 0;\n  }\n}\n@media (max-width: 615px) {\n  .hero-content {\n    margin: 6rem 0 0 0;\n  }\n}\n@media (max-width: 460px) {\n  .hero-content {\n    margin: 4rem 0 2rem 0;\n  }\n  .hero-content .cta-btn {\n    margin: 0 auto;\n  }\n}\n\n.hero-title {\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 3rem;\n  color: #2c3849;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n@media (max-width: 460px) {\n  .hero-title {\n    text-align: center;\n  }\n}\n\n.hero-subtitle {\n  font-family: \"Roboto\", sans-serif;\n  display: block;\n  margin-top: 8px;\n  color: #8d8d8d;\n}\n@media (max-width: 460px) {\n  .hero-subtitle {\n    text-align: center;\n  }\n}\n\n.hero-text,\n.hero-under-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  display: block;\n  margin: 16px 0px 0px;\n}\n@media (max-width: 460px) {\n  .hero-text,\n.hero-under-text {\n    text-align: center;\n    margin-bottom: 1rem;\n    font-size: 18px;\n  }\n}\n\n.hero-img-box {\n  width: 700px;\n  margin: 6rem 0rem 7rem 0rem;\n}\n@media (max-width: 980px) {\n  .hero-img-box {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 690px) {\n  .hero-img-box {\n    display: flex;\n    width: 100vw;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 0 2rem 0;\n  }\n}\n@media (max-width: 375px) {\n  .hero-img-box {\n    margin-bottom: 0;\n  }\n}\n\n.hero-img-girl {\n  width: 575px;\n  margin-left: 14rem;\n}\n@media (max-width: 1150px) {\n  .hero-img-girl {\n    margin-left: 10rem;\n  }\n}\n@media (max-width: 980px) {\n  .hero-img-girl {\n    width: 390px;\n    margin-left: 21rem;\n  }\n}\n@media (max-width: 768px) {\n  .hero-img-girl {\n    width: 500px;\n    margin-left: 17rem;\n    margin-top: 10rem;\n  }\n}\n@media (max-width: 690px) {\n  .hero-img-girl {\n    width: 455px;\n    margin: 0 0 0 10rem;\n  }\n}\n@media (max-width: 615px) {\n  .hero-img-girl {\n    margin: 0;\n  }\n}\n@media (max-width: 460px) {\n  .hero-img-girl {\n    width: 395px;\n  }\n}\n@media (max-width: 395px) {\n  .hero-img-girl {\n    width: 320px;\n  }\n}\n\n.hero-img-guy {\n  width: 575px;\n}\n@media (max-width: 980px) {\n  .hero-img-guy {\n    display: block;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 768px) {\n  .hero-img-guy {\n    margin-left: 6rem;\n  }\n}\n@media (max-width: 690px) {\n  .hero-img-guy {\n    width: 455px;\n    margin: 0 10rem 4rem 0;\n  }\n}\n@media (max-width: 615px) {\n  .hero-img-guy {\n    margin: 0;\n  }\n}\n@media (max-width: 460px) {\n  .hero-img-guy {\n    width: 395px;\n  }\n}\n@media (max-width: 395px) {\n  .hero-img-guy {\n    width: 320px;\n  }\n}\n\n#pagination-dictionary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n}\n\n.dictionary-list {\n  height: fit-content;\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n@media (max-width: 1250px) {\n  .dictionary-list {\n    margin-bottom: 3.5rem;\n  }\n}\n@media (max-width: 920px) {\n  .dictionary-list {\n    gap: 4rem;\n  }\n}\n\n#groups-dictionary {\n  margin-top: 12rem;\n  margin-bottom: 6rem;\n}",".modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 1050;\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease-in; \n  -moz-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n  transition: all 0.8s ease 0s;\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n}\n\n.modal:target {\n  opacity: 1;\n  pointer-events: auto;\n  overflow-y: auto;\n  transform: translate(0px, 0px);\n}\n\n.modal:target .form-wrapper {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n\n.modal-dialog {\n  width: 45vw;\n  display: inline-block;\n  vertical-align: middle;\n  @media (max-width: 560px) {\n    width: 55vw;\n  }\n  @media (max-width: 470px) {\n    width: 65vw;\n  }\n  @media (max-width: 410px) {\n    width: 70vw;\n  }\n  @media (max-width: 375px) {\n    width: 75vw;\n  }\n  @media (max-width: 365px) {\n    width: 80vw;\n  }\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n      max-width: 500px;\n      margin: 30px auto;\n  }\n}\n\n.overlay__modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.overlay__modal::after {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 100%;\n  content: '';\n}\n\n.modal-out-area {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n} \n\n/* Fonts */\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n\n/* fontawesome */\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n[class*=\"fontawesome-\"]:before {\n  font-family: 'FontAwesome', sans-serif;\n}\n\n/* body */\nbody {\n  background: #e9e9e9;\n  color: #5e5e5e;\n}\n\n/* Form Layout */\n.form-wrapper {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em 'Open Sans', sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(0px, -100%);\n}\n\nh1 {\n  text-align: center;\n  padding: 1em 0;\n}\n\nform {\n  padding: 0 1.5em;\n}\n\n.form-item {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n.form-item input {\n  background: #fafafa;\n  border: none;\n  border-bottom: 2px solid #e9e9e9;\n  color: #666;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1em;\n  height: 50px;\n  transition: border-color 0.3s;\n  width: 100%;\n}\n\n.form-item input:focus {\n  border-bottom: 2px solid #c0c0c0;\n  outline: none;\n}\n\n.button-panel {\n  margin: 2em 0 0;\n  width: 100%;\n} \n\n.form-footer {\n  font-size: 1em;\n  padding: 2em 0;\n  text-align: center;\n}\n\n.form-footer a {\n  color: #8c8c8c;\n  text-decoration: none;\n  transition: border-color 0.3s;\n}\n\n.form-footer a:hover {\n  border-bottom: 1px dotted #8c8c8c;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  padding: 15px;\n}\n\n.close:focus, .close:hover {\n  cursor: pointer;\n  opacity: .75;\n}\n\n.signup-link {\ncursor: pointer;\n}\n\n.signup-link a:focus {\n  color: $color-dark-m;\n}\n\n.signup-form-container {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em 'Open Sans', sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(-50%,-60%);\n  display: none;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/* Remove outline on the forms and links */\n:active, :hover, :focus {\n  outline: 0;\n  outline-offset: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style: none;\n}\n\n* {\n  box-sizing: border-box;\n}","$font-stack: 'Roboto', sans-serif;\n\n.section-title {\n  @include section-title;\n}\n\n.card-title {\n  @include card-title;\n}\n\n.paragraph-text {\n  @include paragraph-txt;\n}",".header {\n  background-color: $color-primary;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  font-size: 1rem;\n  font-family: $font-stack;\n  height: 120px;\n  @media (max-width: 768px) {\n    height: 100px;\n  }\n  @media (max-width: 375px) {\n    height: 85px;\n  }\n}\n\n.header-left-wrapper {\n  display: flex;\n  align-items: center;\n  width: 83vw;\n  justify-content: space-between;\n  @media (max-width: 1270px) {\n    width: 80vw;\n  }\n}\n\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  height: 40px;\n}\n\n.logo {\n  font-family: $font-stack;\n  font-weight: 700;\n  font-size: 2rem;\n  color: $color-dark;\n  padding-left: 10px;\n  margin-left: 10px;\n  border-left: 2px solid $color-dark;\n  cursor: pointer;\n  @media (max-width: 375px) {\n    font-size: 1.2rem;\n  }\n}\n\n.logo:hover {\n  color: $color-dark-m;\n  transition: all 0.3s ease-in-out;\n}\n\n.nav__container{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  position: relative;\n}\n\n.header-left::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: $color-dark;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s ease-out 0.3s;\n}\n\n.nav-item::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: $color-accent;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s;\n}\n\n.header-left:hover::after,\n.nav-item:hover::after{\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n\n.nav-link {\n  color: $font-color_primary;\n}\n\n.active {\n  color: red;\n  pointer-events: none;\n}\n\n.act::after {\n  content: none;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%\n}\n\n.sticky + .main {\n  padding-top: 80px;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hamburger.open {\n  transform: rotate(-90deg);\n}\n\n@media (max-width: 980px) and (min-width: 320px) {\n  .hamburger {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 35px;\n    height: 30px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: all 0.7s ease-in-out;\n    z-index: 10;\n  }\n  .line {\n    width: 100%;\n    height: 3px;\n    background: $color-dark-m;\n  }\n}\n\n@media (max-width: 980px) {\n  .nav__container {\n    width: 320px;\n    height: 100%;\n    overflow-x: hidden;\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: $color-primary;\n    z-index: 5;\n    transform: translateX(100%);\n    transition: all 0.6s ease-in-out;\n  }\n}\n@media (max-width: 980px) {\n  .nav__container.open {\n    transform: translateX(0%);\n    box-shadow: 0 0 0 9999px rgba(41, 41, 41, 0.6);\n  }\n}\n@media (max-width: 320px) {\n  .nav__container.open {\n    transform: translateX(0%);\n  }\n}\n\n.right-elems-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 10vw;\n}\n\n@media (max-width: 980px) {\n  .nav {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 2rem;\n    margin: 0 auto;\n    margin-top: 4rem;\n    font-size: 22px;\n  }\n  .right-elems-wrapper {\n    justify-content: space-between;\n    width: 10rem;\n    @media (max-width: 460px) {\n      width: 8rem;\n    }\n  }\n}\n\n.signIn-btn {\n  @media (max-width: 980px) {\n    display: none;\n  }\n}\n.signIn-btn_open {\n  display: block;\n  position: fixed;\n  top: 2.4rem;\n  right: 18rem;\n  z-index: 5;\n  transform: translateX(100%);\n  transition: all 0.6s ease-in-out;\n  @media (max-width: 387px) {\n    width: 33px;\n    height: 25px;\n    padding: 0;\n    font-size: 10px;\n  }\n  @media (max-width: 375px) {\n    top: 1.9rem;\n    right: 18.6rem;\n  }\n}\n",".wrapper {\n  width: 90vw;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\nhtml {\n scroll-behavior: smooth;\n}\n\nbody {\n  height: 100vh;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n  background-color: $color-primary;\n}\n\nbody.lock {\n  overflow-y: hidden;\n  height: 100vh;\n}\n\n.menu-filter {\n  display: none;\n}\n\n.menu-filter_open {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 4;\n  box-shadow: 0 0 0 9999px rgb(41 41 41 / 60%);\n  transition: 0.3s;\n  cursor: pointer;\n}\n",".footer {\n  background-color: $color-dark-m;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: $font-color_light;\n  @media (max-width: 605px) {\n    justify-content: center;\n  }\n}\n\n.year-box {\n  max-height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: $font-stack;\n}\n\n.github-box {\n  width: 60vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media (max-width: 605px) {\n    width: 55vw;\n  }\n  @media (max-width: 480px) {\n    width: 45vw;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n  }\n  @media (max-width: 370px) {\n    width: 38vw;\n  }\n}\n\n.github-link {\n  font-family: $font-stack;\n  position: relative;\n  color: $font-color_light;\n  text-decoration: none;\n  margin-left: 1rem;\n  @media (max-width: 480px) {\n    margin: 0;\n  }\n}\n\n.github-link::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: $color-accent;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.8s;\n}\n\n.github-link:hover::after{\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.rss-logo {\n  width: 7rem;\n  height: auto;\n}\n\n.rss-logo:hover {\n  filter: invert(29%) sepia(32%) saturate(582%) hue-rotate(354deg) brightness(107%) contrast(101%);\n  transition: 0.4s;\n}",".wrongPassword {\n  background-color: aqua;\n}\n.closeModal {\n  display: none;\n}\n\n#autorisation-button.true {\n  background-color: #fa6930;\n}","@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n\n.textbook_container {\n  padding-top: 6rem;\n  @media (max-width: 425px) {\n    padding-top: 3rem;\n  }\n}\n\n#textbook-wrapper {\n  position: relative;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n  @media (max-width: 990px) {\n    margin-top: 8rem;\n  }\n  @media (max-width: 580px) {\n    margin-top: 6rem;\n  }\n  @media (max-width: 460px) {\n  margin-top: 4rem;\n  column-gap: 0.3rem;\n  }\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  color: #000;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  border-radius: 50%;\n  user-select: none;\n  transition: color 0.5s ease 0s;\n  outline: none;\n  cursor: pointer;\n  align-content: center;\n}\n\n.pagination_number {\n  @media (max-width: 580px) {\n    font-size: 16px;\n  }\n  @media (max-width: 580px) {\n    width: 32px;\n    height: 32px;\n  }\n  @media (max-width: 460px) {\n    width: 28px;\n    height: 28px;\n  }\n  @media (max-width: 370px) {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.prev-btn:hover,\n.next-btn:hover,\n.pagination_number:hover {\n  background-color: rgb(242, 166, 99);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #fff;\n}\n\n.active-page {\n  background: rgb(242, 166, 99);\n  color: #fff;\n}\n\n.next-btn {\n  border-radius: 0 25px 25px 0;\n  width: 125px;\n  @media (max-width: 580px) {\n    width: 92px;\n    font-size: 14px;\n  }\n  @media (max-width: 580px) {\n    height: 32px;\n  }\n  @media (max-width: 460px) {\n    width: 75px;\n    height: 28px;\n  }\n  @media (max-width: 375px) {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.prev-btn {\n  border-radius: 25px 0 0 25px;\n  width: 125px;\n  @media (max-width: 580px) {\n    width: 92px;\n    font-size: 14px;\n  }\n  @media (max-width: 580px) {\n    height: 32px;\n  }\n  @media (max-width: 460px) {\n    width: 75px;\n    height: 28px;\n  }\n  @media (max-width: 375px) {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  @media (max-width: 1250px) {\n    margin-bottom: 3.5rem;\n  }\n  @media (max-width: 920px) {\n    gap: 4rem;\n  }\n}\n\n.textbook-list_item {\n  width: 67rem;\n  height: 24rem;\n  display: flex;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n  @media (max-width: 1120px) {\n    width: 55rem;\n    height: 20rem;\n  }\n  @media (max-width: 920px) {\n    width: 28rem;\n    height: 52rem;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media (max-width: 475px) {\n    width: 24rem;\n  }\n  @media (max-width: 440px) {\n    width: 20rem;\n  }\n  @media (max-width: 460px) {\n    width: 16rem;\n    height: 46rem;\n  }\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 32rem;\n  height: 100%;\n  border-radius: 10px;\n  @media (max-width: 1120px) {\n    width: 28rem;\n  }\n  @media (max-width: 475px) {\n    width: 24rem;\n  }\n  @media (max-width: 440px) {\n    width: 20rem;\n  }\n  @media (max-width: 460px) {\n    width: 16rem;\n  }\n  @media (max-width: 460px) {\n    height: 25%;\n  }\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  padding-right: 0;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.7rem;\n  @media (max-width: 1120px) {\n  line-height: 1.3rem;\n  }\n  @media (max-width: 920px) {\n    padding: 2rem;\n    padding-bottom: 0;\n    font-size: 1rem;\n    line-height: 2;\n  }\n  @media (max-width: 460px) {\n    padding: 1rem;\n    padding-bottom: 0;\n    width: inherit;\n    font-size: 0.8rem;\n  }\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  width: 12rem;\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n  @media (max-width: 370px) {\n    width: 10rem;\n    padding-left: 10px;\n  }\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n  @media (max-width: 370px) {\n    font-size: 1.4rem;\n  }\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  background-color: rgb(96 164 191);\n  height: 2rem;\n  margin: 0.2rem;\n  @media (max-width: 370px) {\n    height: 1.2rem;\n    width: 0.7rem;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n\n.bnt-bell {\n  background-color: rgb(96 164 191);\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 6rem;\n  column-gap: 1rem;\n  @media (max-width: 990px) {\n    width: 60vw;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n    margin: 0 auto;\n  }\n}\n\n.groups_list__item {\n  height: 60px;\n  width: 147px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  padding: 0 16px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.2rem;\n  overflow: hidden;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  // box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  &:nth-child(1) {\n    background-color: rgb(242, 105, 92);\n    &:hover {\n      background-color: rgba(242, 105, 92, 0.9);\n    }\n  }\n  &:nth-child(2) {\n    background-color: rgb(242, 166, 99);\n    &:hover {\n      background-color: rgba(242, 166, 99, 0.9);\n    }\n  }\n  &:nth-child(3) {\n    background-color: rgb(250, 170, 186);\n    &:hover {\n      background-color: rgba(250, 170, 186, 0.9);\n    }\n  }\n  &:nth-child(4) {\n    background-color: rgb(136, 191, 176);\n    &:hover {\n      background-color: rgba(136, 191, 176, 0.9);\n    }\n  }\n  &:nth-child(5) {\n    background-color: rgb(96, 164, 191);\n    &:hover {\n      background-color: rgba(96, 164, 191, 0.9);\n    }\n  }\n  &:nth-child(6) {\n    background-color: rgb(89, 72, 77);\n    &:hover {\n      background-color: rgba(89, 72, 77, 0.9);\n    }\n  }\n}\n\n.groups_list__item:hover {\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\nbutton.groups_list__item.active-group  {\n  box-shadow: 4px 4px 5px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\n.authorization_block {\n  width: 16%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 90px;\n  padding: 10px;\n  padding-bottom: 2rem;\n  @media (max-width: 1120px) {\n  width: 10%\n  }\n  @media (max-width: 920px) {\n    justify-content: center;\n    flex-direction: row;\n    align-items: flex-end;\n    width: 100%;\n  }\n  @media (max-width: 460px) {\n    flex-wrap: wrap;\n    height: 17%;\n    gap: 1rem;\n  }\n}\n\n.btn_authorization_block {\n  display: flex;\n  width: 140px;\n  height: 50px;\n  font-size: 18px;\n  text-transform: none;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(241 105 91);\n  @media (max-width: 1120px) {\n    width: 64px;\n    height: 32px;\n    font-size: 12px;\n  }\n  @media (max-width: 920px) {\n    width: 140px;\n    height: 36px;\n    font-size: 16px;\n  }\n  @media (max-width: 475px) {\n    width: 115px;\n    height: 26px;\n    font-size: 14px;\n  }\n}\n\n.btn-dif-word {\n  background-color: rgb(242, 166, 99);\n}\n\n\n.back-to-top-wrapper {\n  position: absolute;\n  top: 100vh;\n  right: 7rem;\n  bottom: 0em;\n  width: 3em;\n  pointer-events: none;\n  @media (max-width: 1410px) {\n  right: 4rem;\n  }\n  @media (max-width: 1310px) {\n    right: 2rem;\n  }\n  @media (max-width: 1250px) {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n  @media (max-width: 920px) {\n    bottom: 0;\n    right: 10rem;\n  }\n  @media (max-width: 885px) {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n\n.back-to-top-link {\n  position: sticky;\n  pointer-events: all;\n  top: calc(100vh - 5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  text-align: center;\n  width: 100px;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  background-color: #ffcc5e;\n  user-select: none;\n  transition: color 1s ease-in-out 0s;\n  @media (max-width: 1320px) {\n    width: 60px;\n  }\n  @media (max-width: 1250px) {\n    width: 100px;\n  }\n\n  &:hover {\n    background-color: #ffb108;\n  }\n\n  &:focus {\n    transform: scale(1.1);\n    outline: none;\n    box-shadow: 0 0 9px 5px scale-color(#fab32f, $lightness: 15%);\n  }\n}","// advantages section\n.advantages-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.advantages-content {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6rem;\n  margin-bottom: 7rem;\n  @media (max-width: 1180px) {\n    justify-content: center;\n    row-gap: 6rem;\n  }\n  @media (max-width: 768px) {\n    gap: 4rem;\n  }\n  @media (max-width: 460px) {\n    gap: 2rem;\n    margin-bottom: 2rem;\n  }\n}\n\n.adv-card-icon {\n  display: inline-block;\n  margin-bottom: 2rem;\n}\n\n.advantages-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 290px;\n  padding: 40px 20px;\n  flex-wrap: wrap;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  cursor: pointer;\n  &:hover {\n    box-shadow: 0px 2px 35px 14px rgba(20, 20, 20, 0.04);\n    background-color: #fff;\n    .adv-card-title {\n      color: $color-accent;\n    }\n  }\n}\n\n.adv-card-title {\n  margin-bottom: 1.5rem;\n}\n\n.adv-card-desc {\n  @include paragraph-txt;\n}\n\n// our team section\n\n.about-photo {\n  width: 273px;\n  height: auto;\n  margin: 0px;\n}\n\n.about-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  row-gap: 3rem;\n  padding: 32px 0px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 7rem;\n}\n\n.about-card {\n  max-width: 67rem;\n  max-height: 16.6rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1.5;\n  background-color: $color-dark;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  filter: brightness(0.9);\n  @media (max-width: 768px) {\n    max-height: 265px;\n  }\n  @media (max-width: 767px) {\n    max-height: 60rem;\n    max-width: 290px;\n    flex-direction: column;\n    .about-photo {\n      border-radius: 10px;\n      width: 290px;\n    }\n}\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2.5rem;\n  @media (max-width: 767px) {\n    align-items: center;\n    padding: 1rem;\n  }\n}\n\n.about-name {\n  margin: 0;\n}\n\n.about-subtitle {\n  font-size: $font-stack;\n  color: $color-gray;\n}\n\n.about-desc {\n  margin: 14px 0px 0px;\n  color: $font-color_light;\n}\n\n.github-icon {\n  max-width: 2.5rem;\n  height: auto;\n  margin: 14px 0 0;\n}\n\n.github-icon:hover {\n  filter: invert(29%) sepia(32%) saturate(582%) hue-rotate(354deg) brightness(107%) contrast(101%);\n  transition: 0.4s;\n}\n\n.about-name {\n  color: $font-color_light;\n}","#game-page-wrapper {\n  height: 100%;\n  margin-top: 6rem;\n}\n\n#game-page {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  max-width: 1440px;\n  height: auto;\n  margin: 0 auto;\n  column-gap: 2rem;\n  @media (max-width: 768) {\n    column-gap: 0;\n  }\n\n    #sprint-game-window {\n        width: 100%;\n        height: 100%;\n        .sprint-flex-wrapper {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          row-gap: 5rem;\n          height: 100vh;\n          margin-top: 4rem;\n        }\n        .sprint-game-timer {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          width: 180px;\n          height: 180px;\n          border-radius: 50%;\n          background-color: $color-dark-m;\n            p{\n              margin: 0;\n              padding: 0;\n              font-family: Roboto, sans-serif;\n              font-weight: 400;\n              font-size: 4rem;\n              color: $color-primary;\n            }\n        }\n        .sprint-game-window-active {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: space-between;\n          width: 50vw;\n          height: 45vh;\n          margin: 0 auto;\n          padding: 2px;\n          border-radius: 10px;\n          box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n          background-color: rgb(255, 255, 255);\n          @media (max-width: 768px) {\n            width: 80vw;\n          }\n          @media (max-width: 380px) {\n            width: 90vw;\n          }\n            .sprint-progress {\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-shrink: 1;\n                padding: 0;\n                margin: 0;\n                flex-direction: row;\n                overflow-x: scroll;\n                .progress {\n                  min-width: 35px;\n                  height: 35px;\n                  padding: 0;\n                  border: solid 1px white;\n                  border-radius: 5px;\n                }\n            }\n            .main-sprint {\n\n                .english-word {\n                  font-size: 2rem;\n                  font-weight: 400;\n                  line-height: 1.6;\n                  font-family: $font-stack;\n                  color: $font-color_primary;\n                }\n                \n                .translate-word {\n                  font-size: 1rem;\n                  font-weight: 400;\n                  line-height: 1.6;\n                  font-family: $font-stack;\n                  color: $font-color_primary;\n                }\n            }\n            .btn-sprint {\n                height: 10vh;\n                max-height: 40px;\n                display: flex;\n                flex-direction: row;\n                padding: 0;\n                margin-bottom: 3rem;\n                column-gap: 1rem;\n                @media (max-width: 560px) {\n                  margin-bottom: 1rem;\n                }\n                @media (max-width: 460px) {\n                  column-gap: 0.4rem;\n                }\n                #game-btn {\n                  font-family: 'Roboto', sans-serif;\n                  display: inline-block;\n                  outline: none;\n                  cursor: pointer;\n                  font-weight: 500;\n                  padding: 0 16px;\n                  border-radius: 4px;\n                  border: none;\n                  color: #fff;\n                  background: $color-orange;\n                  line-height: 1.15;\n                  font-size: 14px;\n                  height: 36px;\n                  word-spacing: 0px;\n                  letter-spacing: .0892857143em;\n                  text-decoration: none;\n                  text-transform: uppercase;\n                  text-align: center;\n                  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n                  background-position: center!important;\n                  transition: background 0.8s!important;\n                  transition: all .2s ease-out!important;\n                }\n            }\n        }\n    }\n}\n\n#game-btn:hover {\n  background: $color-accent radial-gradient(circle, transparent 1%, $color-accent 1%) center/15000%!important;\n}\n\n#game-btn:active {\n  background-color: #f8c963!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n}\n\n#game-btn.btn-no:hover {\n  background: red radial-gradient(circle, transparent 1%, red 1%) center/15000%!important;\n}\n\n#game-btn.btn-no:active {\n  background-color: rgb(247, 160, 160)!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n}\n\n#game-btn.btn-no:focus,\n#game-btn.btn-yes:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px scale-color(#fab32f, $lightness: 15%);\n}\n\n#game-btn.btn-yes:hover {\n  background: greenyellow radial-gradient(circle, transparent 1%, greenyellow 1%) center/15000%!important;\n}\n\n#game-btn.btn-yes:active {\n  background-color: rgb(255, 255, 255)!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n  &:focus {\n    transform: scale(1.1);\n    outline: none;\n    box-shadow: 0 0 9px 5px scale-color(#fab32f, $lightness: 15%);\n  }\n}\n\n\n.game-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n  margin-bottom: 8rem;\n  margin-top: 10rem;\n  height: 100vh;\n}\n.result-window{\n  width: 80vw;\n  height: 68vh;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  border-radius: 25px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background-color: #3F5069;\n  color: #fff;\n  overflow: scroll;\n  padding: 1.7rem;\n  @media (max-width: 1120px) {\n    width: 92vw;\n    padding: 1rem;\n    row-gap: 1rem;\n  }\n  \n    .gameResult {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-end;\n        align-items: center;\n        width: 80vw;\n        height: auto;\n        margin: 0.6rem 0 0 0;\n        padding: 0;\n        @media (max-width: 1120px) {\n          width: 55vw;\n          justify-content: space-between;\n          column-gap: 2rem;\n        }\n      \n        .result-left-side {\n          display: flex;\n        }\n        .point-result{\n          width: 15px;\n          height: 15px;\n          border-radius: 10px;\n          margin: 10px;\n          @media (max-width: 1120px) {\n            width: 5px;\n            height: 5px;\n            margin: 5px;\n          }\n        }\n        .result-word-left {\n          display: flex;\n          flex-direction: row;\n          column-gap: 1rem;\n          width: 26vw;\n          font-family: Roboto, sans-serif;\n          font-size: 2rem;\n          font-weight: 300;\n          text-align: start;\n          @media (max-width: 1120px) {\n            column-gap: 0.5rem;\n            font-size: 12px;\n          }\n          .result-word-span {\n            color: $color-accent;\n          }\n        }\n        .result-word{\n          display: flex;\n          flex-direction: row;\n          column-gap: 1rem;\n          width: 37vw;\n          font-family: Roboto, sans-serif;\n          font-size: 2rem;\n          font-weight: 300;\n          line-height: 4rem;\n          text-align: start;\n          @media (max-width: 1120px) {\n            width: 28vw;\n            font-size: 12px;\n            line-height: 1rem;\n            align-items: center;\n          }\n          .result-word-span-right {\n            color: greenyellow;\n          }\n        }\n    }\n}\n.correct-result-percent{\n    margin: 0 auto;\n    padding: 0;\n    p{\n        margin: 0;\n        padding: 0;\n    }\n}\n\n.true {\n  background-color: greenyellow;\n}\n\n.false {\n  background-color: red;\n}\n\n.sprintGameInfo {\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  padding: 4rem 0 4rem 0;\n  @media (max-width: 375px) {\n    padding-top: 0;\n  }\n}\n.audioGameInfo {\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  padding: 4rem 0 4rem 0;\n}\n\n.game-title-frame {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  @media (max-width: 375px) {\n    width: 290px;\n    height: 305px;\n  }\n}\n\nimg.sprint-title-icon {\n  width: 110px;\n  height: 110px;\n}\n\n.game-icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: $color-paper;\n}\n\n.game-title {\n  font-size: 2rem;\n  color: $color-dark-m;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n.game-description {\n  margin: 0 auto;\n  width: 570px;\n  height: 15vh;\n  text-align: justify;\n  line-height: 2.4rem;\n  letter-spacing: 0.7px;\n  margin-bottom: 3rem;\n  @media (max-width: 980px) {\n    height: 20vh;\n  }\n  @media (max-width: 800px) {\n    height: 25vh;\n    margin-bottom: 8rem;\n  }\n  @media (max-width: 767px) {\n    height: 25vh;\n    width: 340px;\n    margin-bottom: 4rem;\n  }\n  @media (max-width: 630px) {\n    height: 35vh;\n    margin-bottom: 2rem;\n  }\n  @media (max-width: 630px) {\n    width: 290px;\n    line-height: 2rem;\n  }\n}\n\n.game-level-select {\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #3d4f69;\n}\n\n.game-level-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n}\n\n.select-level-audio,\n.select-level-sprint {\n  cursor: pointer;\n    width: 90px;\n    border-radius: 15px;\n    background-color: rgb(250, 250, 250);\n    box-shadow: 2px 4px 8px #c5c5c5;\n    transition: all 300ms;\n    border: none;\n    padding: 1rem 0 1rem 1.2rem;\n    color: $color-accent;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 900;\n    font-size: 2rem;\n}\n\n.level-option {\n  color: $font-color_light;\n  background-color: $color-dark;\n}\n\n.sad-boy-icon {\n  width: 16vw;\n  height: auto;\n  margin: 6rem auto;\n}\n\n.good-result-icon {\n  width: 10rem;\n  height: 10rem;\n}\n\n.audio-game-wrapper {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n}\n\n.audio-place {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 6rem;\n  border-radius: 10%;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background: #fffdfd;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n  @media (max-width: 425px) {\n    margin-top: 10rem;\n    margin-bottom: 0;\n  }\n  @media (max-width: 375px) {\n    width: 255px;\n    height: 240px;\n    margin-bottom: 2rem;\n  }\n\n  .audio-game-icon {\n    width: 180px;\n    height: 180px;\n  }\n}\n\n.audio-place:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: $font-color_light;\n  transition: 0.3s;\n}\n\n.btn-audio {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 3rem;\n  justify-content: center;\n  margin: 0 1rem;\n  @media (max-width: 475px) {\n    width: 80vw;\n    height: 60vh;\n    display: flex;\n    column-gap: 1rem;\n    row-gap: 1rem;\n    margin: 0 auto;\n    align-content: center;\n  }\n  p {\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    outline: none;\n    cursor: pointer;\n    font-weight: 500;\n    padding: 1rem 0.7rem;\n    border-radius: 4px;\n    border: none;\n    color: #fff;\n    background: $color-dark;\n    font-size: 16px;\n    height: 50px;\n    letter-spacing: .0892857143em;\n    text-transform: uppercase;\n    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n    background-position: center!important;\n    transition: background 0.8s!important;\n    transition: all 0.1s ease-out!important;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    @media (max-width: 475px) {\n      font-size: 14px;\n      height: 30px;\n    }\n  }\n  :hover {\n    box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n    background-color: $font-color_light;\n    background: rgba(112, 224, 37, 0.713) radial-gradient(circle, transparent 35%, rgba(112, 224, 37, 0.713) 1%) center/15000%!important;\n    // transition: 0.7s;\n  }\n  \n  :active {\n    background-color: rgba(213, 255, 44, 0.695)!important;\n    background-size: 100%!important;\n    transition: background 0s!important;\n  }\n}\n\n.sprint-game-timer {\n  animation: mymove 5s infinite alternate;\n}\n@keyframes mymove {\n  0% { background-color: rgba(0, 0, 0, 0); }\n  25% { background-color: rgba(255, 206, 83, 0.604); }\n  35% { background-color: rgba(247, 126, 46, 0.562); }\n  50% { background-color: rgba(255, 0, 55, 0.451); }\n  75% { background-color: rgba(27, 181, 13, 0.381); }\n  85% { background-color: rgba(138, 187, 200); }\n  100% { background-color: rgba(194, 126, 231, 0.601); }\n}\n\n.play-again {\n  width: 15vw;\n  height: 10vh;\n  font-size: 2rem;\n  letter-spacing: normal;\n  @media (max-width: 560px) {\n    width: 30vw;\n  }\n}\n\n.btn-click {\n  background-color: $color-accent!important;\n  transition: background 0.5s!important;\n  transition: all .2s ease-out!important;\n  background: rgba(198, 238, 36, 0.695) radial-gradient(circle, transparent 55%, rgba(112, 224, 37, 0.713) 1%) center/15000%!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n  transform: scale(1.1);\n  outline: none;\n}\n\n.keyboard-control {\n  width: 370px;\n  height: 188px;\n  margin: 2rem auto 2rem auto;\n  font-weight: 300;\n  display: block;\n  color: $font-color_light;\n  line-height: 1.9rem;\n  text-align: justify;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n  background-color: $color-orange;\n  padding: 1rem;\n  @media (max-width: 980px) {\n    margin-top: 6rem;\n  }\n  @media (max-width: 812px) {\n    margin-top: 4rem;\n   }\n   @media (max-width: 425px) {\n    width: 290px;\n    height: 210px;\n   }\n}\n\n.keys-control-title {\n  font-weight: 800;\n  color: $font-color_light;\n}\n\n.sprint-game-btn,\n.audio-game-btn {\n  height: 55px;\n  font-size: 20px;\n}\n.true-answear {\n  background-color: greenyellow !important;\n}",".display_none {\n  display: none;\n}\n\n#statistic {\n  width: 100vw;\n  height: 100vh;\n  margin-bottom: 8rem!important;\n}\n\n.statistic-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  margin-top: 4rem;\n  @media (max-width: 800px) {\n    justify-content: space-around;\n    margin-top: 10rem;\n  }\n}\n\n.get-statistic {\n  @include btn-primary;\n  min-height: 44px;\n  &:hover {\n    background-color: $color-accent;\n    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%);\n  }\n}\n\n.statistic-result {\n  width: 50vw;\n  height: auto;\n  display: grid;\n  grid-template-columns: 17rem 15rem 15rem;\n  row-gap: 1.5rem;\n  justify-content: center;\n  margin: 4rem 0 8rem 0;\n  @media (max-width: 800px) {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.statistic-info_sprint{\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #fff;\n  box-shadow: rgb(0 0 0 / 15%) 3px 4px 5px 0px;\n  border-radius: 0 10px 10px 0;\n  p {\n    margin: 0;\n    font-size: 20px;\n    color: $color-accent;\n  }\n  @media (max-width: 800px) {\n    width: 20rem;\n    align-items: center;\n    border-radius: 0 0 10px 10px;\n    height: 50rem;\n    margin-top: -1.6rem;\n    justify-content: center;\n  }\n  @media (max-width: 375px) {\n    width: 15rem;\n  }\n}\n\n.statistic-info_audio {\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: #fff;\n  box-shadow: rgb(0 0 0 / 15%) 3px 4px 5px 0px;\n  border-radius: 0 10px 10px 0;\n  p {\n    margin: 0;\n    font-size: 20px;\n    color: $color-accent;\n  }\n  @media (max-width: 800px) {\n    width: 20rem;\n    align-items: center;\n    border-radius: 0 0 10px 10px;\n    height: 50rem;\n    margin-top: -1.6rem;\n    justify-content: center;\n  }\n  @media (max-width: 375px) {\n    width: 15rem;\n  }\n}\n\n.stat-title {\n  margin: 0;\n}\n\n.stat-grid-item1 {\n  width: 90%;\n  padding: 1rem;\n  background-color: #fff;\n  box-shadow: rgb(0 0 0 / 15%) 3px 4px 5px 0px;\n  color: $color-accent;\n  font-weight: 600;\n  border-radius: 10px;\n  @media (max-width: 800px) {\n    width: 20rem;\n    text-align: center;\n    height: 5rem;\n  }\n  @media (max-width: 375px) {\n    width: 15rem;\n  }\n}\n\n.sprint-grid-padding {\n  padding: 1rem 0 0 1rem;\n  background-color: #fff;\n  box-shadow: rgb(0 0 0 / 15%) 6px 4px 5px;\n  color: $color-accent;\n  font-weight: 600;\n  border-radius: 10px 0 0 10px;\n  @media (max-width: 800px) {\n    width: 20rem;\n    height: 9rem;\n    text-align: center;\n    border-radius: 10px 10px 0 0;\n    box-shadow: rgb(0 0 0 / 15%) 2px 2px 5px;\n  }\n  @media (max-width: 375px) {\n    width: 15rem;\n  }\n}\n\n.audio-grid-padding {\n  padding: 1rem 0 0 1rem;\n  background-color: #fff;\n  box-shadow: rgb(0 0 0 / 15%) 6px 4px 5px;\n  color: $color-accent;\n  font-weight: 600;\n  border-radius: 10px 0 0 10px;\n  @media (max-width: 800px) {\n    width: 20rem;\n    height: 9rem;\n    text-align: center;\n    border-radius: 10px 10px 0 0;\n    box-shadow: rgb(0 0 0 / 15%) 2px 2px 5px;\n    margin-top: -3rem;\n  }\n  @media (max-width: 375px) {\n    width: 15rem;\n  }\n}\n\n.stat-span {\n  color: $color-dark;\n  font-weight: 300;\n}",".hero-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 690px) {\n    flex-direction: column;\n  }\n}\n\n.hero-content {\n  max-width: 424px;\n  margin: 6rem -10rem 38rem 0;\n  @media (max-width: 1150px) {\n    margin: 6rem -15rem 30rem 0;\n  }\n  @media (max-width: 980px) {\n    margin: 6rem -25rem 30rem 0;\n  }\n  @media (max-width: 768px) {\n    margin: -16rem -38rem 30rem 0;\n  }  \n  @media (max-width: 690px) {\n    margin: 6rem 6rem 0 0;\n  }\n  @media (max-width: 615px) {\n    margin: 6rem 0 0 0;\n  }\n  @media (max-width: 460px) {\n    margin: 4rem 0 2rem 0;\n    .cta-btn {\n      margin: 0 auto;\n    }\n  }\n}\n\n.hero-title {\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 3rem;\n  color: $color-dark-m;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n  @media (max-width: 460px) {\n   text-align: center;\n  }\n}\n\n.hero-subtitle {\n  font-family: $font-stack;\n  display: block;\n  margin-top: 8px;\n  color: $color-gray;\n  @media (max-width: 460px) {\n    text-align: center;\n   }\n}\n\n.hero-text,\n.hero-under-text {\n  @include paragraph-txt;\n  display: block;\n  margin: 16px 0px 0px;\n  @media (max-width: 460px) {\n    text-align: center;\n    margin-bottom: 1rem;\n    font-size: 18px;\n   }\n}\n\n.hero-img-box {\n  width: 700px;\n  margin: 6rem 0rem 7rem 0rem;\n  @media (max-width: 980px) {\n    margin-bottom: 0;\n  }\n  @media (max-width: 690px) {\n    display: flex;\n    width: 100vw;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 0 2rem 0;\n  }\n  @media (max-width: 375px) {\n    margin-bottom: 0;\n  }\n}\n\n.hero-img-girl {\n  width: 575px;\n  margin-left: 14rem;\n  @media (max-width: 1150px) {\n    margin-left: 10rem;\n  }\n  @media (max-width: 980px) {\n    width: 390px;\n    margin-left: 21rem;\n  }\n  @media (max-width: 768px) {\n    width: 500px;\n    margin-left: 17rem;\n    margin-top: 10rem;\n  }\n  @media (max-width: 690px) {\n    width: 455px;\n    margin: 0 0 0 10rem;\n  }\n  @media (max-width: 615px) {\n    margin: 0;\n  }\n  @media (max-width: 460px) {\n    width: 395px;\n  }\n  @media (max-width: 395px) {\n    width: 320px;\n  }\n}\n\n.hero-img-guy {\n  width: 575px;\n  @media (max-width: 980px) {\n    display: block;\n    margin: 0 auto;\n  }\n  @media (max-width: 768px) {\n  margin-left: 6rem;\n  }\n  @media (max-width: 690px) {\n    width: 455px;\n    margin: 0 10rem 4rem 0;\n  }\n  @media (max-width: 615px) {\n    margin: 0;\n  }\n  @media (max-width: 460px) {\n    width: 395px;\n  }\n  @media (max-width: 395px) {\n    width: 320px;\n  }\n}","#pagination-dictionary {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 0;\n    list-style-type: none;\n    margin-bottom: 3rem;\n    column-gap: 0.6rem;\n}\n\n\n.dictionary-list {\n  height: fit-content;\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  @media (max-width: 1250px) {\n    margin-bottom: 3.5rem;\n  }\n  @media (max-width: 920px) {\n    gap: 4rem;\n  }\n}\n\n#groups-dictionary {\n  margin-top: 12rem;\n  margin-bottom: 6rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/sass/pages/_authorization.scss":
/*!******************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/sass/pages/_authorization.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrongPassword {\n  background-color: aqua;\n}\n\n.closeModal {\n  display: none;\n}\n\n#autorisation-button.true {\n  background-color: #fa6930;\n}", "",{"version":3,"sources":["webpack://./styles/sass/pages/_authorization.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,yBAAA;AAEF","sourcesContent":[".wrongPassword {\n  background-color: aqua;\n}\n.closeModal {\n  display: none;\n}\n\n#autorisation-button.true {\n  background-color: #fa6930;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/sass/pages/_textbook.scss":
/*!*************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/sass/pages/_textbook.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://weloveiconfonts.com/api/?family=fontawesome);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".textbook_container {\n  padding-top: 6rem;\n}\n@media (max-width: 425px) {\n  .textbook_container {\n    padding-top: 3rem;\n  }\n}\n\n#textbook-wrapper {\n  position: relative;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n}\n@media (max-width: 990px) {\n  #pagination {\n    margin-top: 8rem;\n  }\n}\n@media (max-width: 580px) {\n  #pagination {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 460px) {\n  #pagination {\n    margin-top: 4rem;\n    column-gap: 0.3rem;\n  }\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  color: #000;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  border-radius: 50%;\n  user-select: none;\n  transition: color 0.5s ease 0s;\n  outline: none;\n  cursor: pointer;\n  align-content: center;\n}\n\n@media (max-width: 580px) {\n  .pagination_number {\n    font-size: 16px;\n  }\n}\n@media (max-width: 580px) {\n  .pagination_number {\n    width: 32px;\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .pagination_number {\n    width: 28px;\n    height: 28px;\n  }\n}\n@media (max-width: 370px) {\n  .pagination_number {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.prev-btn:hover,\n.next-btn:hover,\n.pagination_number:hover {\n  background-color: rgb(242, 166, 99);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  color: #fff;\n}\n\n.active-page {\n  background: rgb(242, 166, 99);\n  color: #fff;\n}\n\n.next-btn {\n  border-radius: 0 25px 25px 0;\n  width: 125px;\n}\n@media (max-width: 580px) {\n  .next-btn {\n    width: 92px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 580px) {\n  .next-btn {\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .next-btn {\n    width: 75px;\n    height: 28px;\n  }\n}\n@media (max-width: 375px) {\n  .next-btn {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.prev-btn {\n  border-radius: 25px 0 0 25px;\n  width: 125px;\n}\n@media (max-width: 580px) {\n  .prev-btn {\n    width: 92px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 580px) {\n  .prev-btn {\n    height: 32px;\n  }\n}\n@media (max-width: 460px) {\n  .prev-btn {\n    width: 75px;\n    height: 28px;\n  }\n}\n@media (max-width: 375px) {\n  .prev-btn {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n@media (max-width: 1250px) {\n  .textbook-list {\n    margin-bottom: 3.5rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list {\n    gap: 4rem;\n  }\n}\n\n.textbook-list_item {\n  width: 67rem;\n  height: 24rem;\n  display: flex;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n@media (max-width: 1120px) {\n  .textbook-list_item {\n    width: 55rem;\n    height: 20rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list_item {\n    width: 28rem;\n    height: 52rem;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 475px) {\n  .textbook-list_item {\n    width: 24rem;\n  }\n}\n@media (max-width: 440px) {\n  .textbook-list_item {\n    width: 20rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-list_item {\n    width: 16rem;\n    height: 46rem;\n  }\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 32rem;\n  height: 100%;\n  border-radius: 10px;\n}\n@media (max-width: 1120px) {\n  .textbook-card-img {\n    width: 28rem;\n  }\n}\n@media (max-width: 475px) {\n  .textbook-card-img {\n    width: 24rem;\n  }\n}\n@media (max-width: 440px) {\n  .textbook-card-img {\n    width: 20rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-card-img {\n    width: 16rem;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-card-img {\n    height: 25%;\n  }\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  padding-right: 0;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.7rem;\n}\n@media (max-width: 1120px) {\n  .textbook-list_item__wrapper {\n    line-height: 1.3rem;\n  }\n}\n@media (max-width: 920px) {\n  .textbook-list_item__wrapper {\n    padding: 2rem;\n    padding-bottom: 0;\n    font-size: 1rem;\n    line-height: 2;\n  }\n}\n@media (max-width: 460px) {\n  .textbook-list_item__wrapper {\n    padding: 1rem;\n    padding-bottom: 0;\n    width: inherit;\n    font-size: 0.8rem;\n  }\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  width: 12rem;\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n@media (max-width: 370px) {\n  .upper_card-box {\n    width: 10rem;\n    padding-left: 10px;\n  }\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n@media (max-width: 370px) {\n  h2.word {\n    font-size: 1.4rem;\n  }\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  background-color: rgb(96, 164, 191);\n  height: 2rem;\n  margin: 0.2rem;\n}\n@media (max-width: 370px) {\n  .bnt-textbook {\n    height: 1.2rem;\n    width: 0.7rem;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n\n.bnt-bell {\n  background-color: rgb(96, 164, 191);\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 6rem;\n  column-gap: 1rem;\n}\n@media (max-width: 990px) {\n  .groups {\n    width: 60vw;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n    margin: 0 auto;\n  }\n}\n\n.groups_list__item {\n  height: 60px;\n  width: 147px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  padding: 0 16px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.2rem;\n  overflow: hidden;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all easy 0.5s;\n}\n.groups_list__item:nth-child(1) {\n  background-color: rgb(242, 105, 92);\n}\n.groups_list__item:nth-child(1):hover {\n  background-color: rgba(242, 105, 92, 0.9);\n}\n.groups_list__item:nth-child(2) {\n  background-color: rgb(242, 166, 99);\n}\n.groups_list__item:nth-child(2):hover {\n  background-color: rgba(242, 166, 99, 0.9);\n}\n.groups_list__item:nth-child(3) {\n  background-color: rgb(250, 170, 186);\n}\n.groups_list__item:nth-child(3):hover {\n  background-color: rgba(250, 170, 186, 0.9);\n}\n.groups_list__item:nth-child(4) {\n  background-color: rgb(136, 191, 176);\n}\n.groups_list__item:nth-child(4):hover {\n  background-color: rgba(136, 191, 176, 0.9);\n}\n.groups_list__item:nth-child(5) {\n  background-color: rgb(96, 164, 191);\n}\n.groups_list__item:nth-child(5):hover {\n  background-color: rgba(96, 164, 191, 0.9);\n}\n.groups_list__item:nth-child(6) {\n  background-color: rgb(89, 72, 77);\n}\n.groups_list__item:nth-child(6):hover {\n  background-color: rgba(89, 72, 77, 0.9);\n}\n\n.groups_list__item:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\nbutton.groups_list__item.active-group {\n  box-shadow: 4px 4px 5px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.authorization_block {\n  width: 16%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 90px;\n  padding: 10px;\n  padding-bottom: 2rem;\n}\n@media (max-width: 1120px) {\n  .authorization_block {\n    width: 10%;\n  }\n}\n@media (max-width: 920px) {\n  .authorization_block {\n    justify-content: center;\n    flex-direction: row;\n    align-items: flex-end;\n    width: 100%;\n  }\n}\n@media (max-width: 460px) {\n  .authorization_block {\n    flex-wrap: wrap;\n    height: 17%;\n    gap: 1rem;\n  }\n}\n\n.btn_authorization_block {\n  display: flex;\n  width: 140px;\n  height: 50px;\n  font-size: 18px;\n  text-transform: none;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(241, 105, 91);\n}\n@media (max-width: 1120px) {\n  .btn_authorization_block {\n    width: 64px;\n    height: 32px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 920px) {\n  .btn_authorization_block {\n    width: 140px;\n    height: 36px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 475px) {\n  .btn_authorization_block {\n    width: 115px;\n    height: 26px;\n    font-size: 14px;\n  }\n}\n\n.btn-dif-word {\n  background-color: rgb(242, 166, 99);\n}\n\n.back-to-top-wrapper {\n  position: absolute;\n  top: 100vh;\n  right: 7rem;\n  bottom: 0em;\n  width: 3em;\n  pointer-events: none;\n}\n@media (max-width: 1410px) {\n  .back-to-top-wrapper {\n    right: 4rem;\n  }\n}\n@media (max-width: 1310px) {\n  .back-to-top-wrapper {\n    right: 2rem;\n  }\n}\n@media (max-width: 1250px) {\n  .back-to-top-wrapper {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n@media (max-width: 920px) {\n  .back-to-top-wrapper {\n    bottom: 0;\n    right: 10rem;\n  }\n}\n@media (max-width: 885px) {\n  .back-to-top-wrapper {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n\n.back-to-top-link {\n  position: sticky;\n  pointer-events: all;\n  top: calc(100vh - 5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  text-align: center;\n  width: 100px;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  background-color: #ffcc5e;\n  user-select: none;\n  transition: color 1s ease-in-out 0s;\n}\n@media (max-width: 1320px) {\n  .back-to-top-link {\n    width: 60px;\n  }\n}\n@media (max-width: 1250px) {\n  .back-to-top-link {\n    width: 100px;\n  }\n}\n.back-to-top-link:hover {\n  background-color: #ffb108;\n}\n.back-to-top-link:focus {\n  transform: scale(1.1);\n  outline: none;\n  box-shadow: 0 0 9px 5px #fbbe4e;\n}", "",{"version":3,"sources":["webpack://./styles/sass/pages/_textbook.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n\n.textbook_container {\n  padding-top: 6rem;\n  @media (max-width: 425px) {\n    padding-top: 3rem;\n  }\n}\n\n#textbook-wrapper {\n  position: relative;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n  margin-bottom: 3rem;\n  column-gap: 0.6rem;\n  @media (max-width: 990px) {\n    margin-top: 8rem;\n  }\n  @media (max-width: 580px) {\n    margin-top: 6rem;\n  }\n  @media (max-width: 460px) {\n  margin-top: 4rem;\n  column-gap: 0.3rem;\n  }\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  color: #000;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  border-radius: 50%;\n  user-select: none;\n  transition: color 0.5s ease 0s;\n  outline: none;\n  cursor: pointer;\n  align-content: center;\n}\n\n.pagination_number {\n  @media (max-width: 580px) {\n    font-size: 16px;\n  }\n  @media (max-width: 580px) {\n    width: 32px;\n    height: 32px;\n  }\n  @media (max-width: 460px) {\n    width: 28px;\n    height: 28px;\n  }\n  @media (max-width: 370px) {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.prev-btn:hover,\n.next-btn:hover,\n.pagination_number:hover {\n  background-color: rgb(242, 166, 99);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #fff;\n}\n\n.active-page {\n  background: rgb(242, 166, 99);\n  color: #fff;\n}\n\n.next-btn {\n  border-radius: 0 25px 25px 0;\n  width: 125px;\n  @media (max-width: 580px) {\n    width: 92px;\n    font-size: 14px;\n  }\n  @media (max-width: 580px) {\n    height: 32px;\n  }\n  @media (max-width: 460px) {\n    width: 75px;\n    height: 28px;\n  }\n  @media (max-width: 375px) {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n.prev-btn {\n  border-radius: 25px 0 0 25px;\n  width: 125px;\n  @media (max-width: 580px) {\n    width: 92px;\n    font-size: 14px;\n  }\n  @media (max-width: 580px) {\n    height: 32px;\n  }\n  @media (max-width: 460px) {\n    width: 75px;\n    height: 28px;\n  }\n  @media (max-width: 375px) {\n    width: 65px;\n    height: 26px;\n  }\n}\n\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  @media (max-width: 1250px) {\n    margin-bottom: 3.5rem;\n  }\n  @media (max-width: 920px) {\n    gap: 4rem;\n  }\n}\n\n.textbook-list_item {\n  width: 67rem;\n  height: 24rem;\n  display: flex;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n  @media (max-width: 1120px) {\n    width: 55rem;\n    height: 20rem;\n  }\n  @media (max-width: 920px) {\n    width: 28rem;\n    height: 52rem;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media (max-width: 475px) {\n    width: 24rem;\n  }\n  @media (max-width: 440px) {\n    width: 20rem;\n  }\n  @media (max-width: 460px) {\n    width: 16rem;\n    height: 46rem;\n  }\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 32rem;\n  height: 100%;\n  border-radius: 10px;\n  @media (max-width: 1120px) {\n    width: 28rem;\n  }\n  @media (max-width: 475px) {\n    width: 24rem;\n  }\n  @media (max-width: 440px) {\n    width: 20rem;\n  }\n  @media (max-width: 460px) {\n    width: 16rem;\n  }\n  @media (max-width: 460px) {\n    height: 25%;\n  }\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  padding-right: 0;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.7rem;\n  @media (max-width: 1120px) {\n  line-height: 1.3rem;\n  }\n  @media (max-width: 920px) {\n    padding: 2rem;\n    padding-bottom: 0;\n    font-size: 1rem;\n    line-height: 2;\n  }\n  @media (max-width: 460px) {\n    padding: 1rem;\n    padding-bottom: 0;\n    width: inherit;\n    font-size: 0.8rem;\n  }\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  width: 12rem;\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n  @media (max-width: 370px) {\n    width: 10rem;\n    padding-left: 10px;\n  }\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n  @media (max-width: 370px) {\n    font-size: 1.4rem;\n  }\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  background-color: rgb(96 164 191);\n  height: 2rem;\n  margin: 0.2rem;\n  @media (max-width: 370px) {\n    height: 1.2rem;\n    width: 0.7rem;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n\n.bnt-bell {\n  background-color: rgb(96 164 191);\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 6rem;\n  column-gap: 1rem;\n  @media (max-width: 990px) {\n    width: 60vw;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n    margin: 0 auto;\n  }\n}\n\n.groups_list__item {\n  height: 60px;\n  width: 147px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  padding: 0 16px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.2rem;\n  overflow: hidden;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  // box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  &:nth-child(1) {\n    background-color: rgb(242, 105, 92);\n    &:hover {\n      background-color: rgba(242, 105, 92, 0.9);\n    }\n  }\n  &:nth-child(2) {\n    background-color: rgb(242, 166, 99);\n    &:hover {\n      background-color: rgba(242, 166, 99, 0.9);\n    }\n  }\n  &:nth-child(3) {\n    background-color: rgb(250, 170, 186);\n    &:hover {\n      background-color: rgba(250, 170, 186, 0.9);\n    }\n  }\n  &:nth-child(4) {\n    background-color: rgb(136, 191, 176);\n    &:hover {\n      background-color: rgba(136, 191, 176, 0.9);\n    }\n  }\n  &:nth-child(5) {\n    background-color: rgb(96, 164, 191);\n    &:hover {\n      background-color: rgba(96, 164, 191, 0.9);\n    }\n  }\n  &:nth-child(6) {\n    background-color: rgb(89, 72, 77);\n    &:hover {\n      background-color: rgba(89, 72, 77, 0.9);\n    }\n  }\n}\n\n.groups_list__item:hover {\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\nbutton.groups_list__item.active-group  {\n  box-shadow: 4px 4px 5px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\n.authorization_block {\n  width: 16%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 90px;\n  padding: 10px;\n  padding-bottom: 2rem;\n  @media (max-width: 1120px) {\n  width: 10%\n  }\n  @media (max-width: 920px) {\n    justify-content: center;\n    flex-direction: row;\n    align-items: flex-end;\n    width: 100%;\n  }\n  @media (max-width: 460px) {\n    flex-wrap: wrap;\n    height: 17%;\n    gap: 1rem;\n  }\n}\n\n.btn_authorization_block {\n  display: flex;\n  width: 140px;\n  height: 50px;\n  font-size: 18px;\n  text-transform: none;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(241 105 91);\n  @media (max-width: 1120px) {\n    width: 64px;\n    height: 32px;\n    font-size: 12px;\n  }\n  @media (max-width: 920px) {\n    width: 140px;\n    height: 36px;\n    font-size: 16px;\n  }\n  @media (max-width: 475px) {\n    width: 115px;\n    height: 26px;\n    font-size: 14px;\n  }\n}\n\n.btn-dif-word {\n  background-color: rgb(242, 166, 99);\n}\n\n\n.back-to-top-wrapper {\n  position: absolute;\n  top: 100vh;\n  right: 7rem;\n  bottom: 0em;\n  width: 3em;\n  pointer-events: none;\n  @media (max-width: 1410px) {\n  right: 4rem;\n  }\n  @media (max-width: 1310px) {\n    right: 2rem;\n  }\n  @media (max-width: 1250px) {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n  @media (max-width: 920px) {\n    bottom: 0;\n    right: 10rem;\n  }\n  @media (max-width: 885px) {\n    bottom: -2.8rem;\n    right: calc(100vw - 50%);\n  }\n}\n\n.back-to-top-link {\n  position: sticky;\n  pointer-events: all;\n  top: calc(100vh - 5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  text-align: center;\n  width: 100px;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  background-color: #ffcc5e;\n  user-select: none;\n  transition: color 1s ease-in-out 0s;\n  @media (max-width: 1320px) {\n    width: 60px;\n  }\n  @media (max-width: 1250px) {\n    width: 100px;\n  }\n\n  &:hover {\n    background-color: #ffb108;\n  }\n\n  &:focus {\n    transform: scale(1.1);\n    outline: none;\n    box-shadow: 0 0 9px 5px scale-color(#fab32f, $lightness: 15%);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/sass/pages/_authorization.scss":
/*!***********************************************!*\
  !*** ./styles/sass/pages/_authorization.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authorization_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./_authorization.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/sass/pages/_authorization.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authorization_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authorization_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authorization_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_authorization_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/sass/pages/_textbook.scss":
/*!******************************************!*\
  !*** ./styles/sass/pages/_textbook.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textbook_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./_textbook.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/sass/pages/_textbook.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textbook_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textbook_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textbook_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textbook_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--b3e1e9"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--b3e1e9"], () => (__webpack_require__("./main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map