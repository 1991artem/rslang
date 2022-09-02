/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

              if (!localStorage.getItem("user")) {
                localStorage.setItem("user", JSON.stringify(data));
              } else {
                API.checkToken();
              }

              _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__.AutorisationForm.closeModalWindow();
              _autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_1__.AutorisationForm.checkAutorisation();
            })["catch"](function (err) {
              console.log("Не удалось найти такого пользователя!!! Повторите попытку");
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

  API.createUsersWordsOnServer = function (userId, wordId, data) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/").concat(wordId), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                'Authorization': "Bearer ".concat(API.getToken())
              },
              body: data
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

  API.deleteUserWordsOnServer = function (userId, wordId, data) {
    return __awaiter(this, void 0, void 0, function () {
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
  }; // ================================== Users/AggregatedWords ===========================================================


  API.getAllUserAgregatedWordsFromServer = function (userId) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(this.url, "/users/").concat(userId, "/aggregatedWords"), {
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
            }).then(function (data) {})["catch"](function (err) {
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
        _api__WEBPACK_IMPORTED_MODULE_1__.API.signinUsersFromServer(JSON.stringify(singinUser));
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
  };

  AutorisationForm.prototype.logOut = function () {
    localStorage.clear();

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.innerHTML = 'SIGN IN';
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUTORISATION_SINGIN.classList.remove('true');
    }
  };

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
  DataStorage.userData = null;
  DataStorage.newToken = null;
  DataStorage.wordId = null;
  DataStorage.allAgregatedWords = null;
  DataStorage.getUsers = null;
  DataStorage.userWords = null;
  DataStorage.userStatistics = null;
  DataStorage.userSettings = null;
  DataStorage.wordForGame = null;
  return DataStorage;
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
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _selectGamePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectGamePage */ "./components/games/selectGamePage.ts");
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
    this.wordArray = [];
    this.resultArray = [];
  }

  AudioGame.prototype.btnClick = function () {
    var _this = this;

    var _a;

    var onClick = function onClick() {
      console.log('audioGAme');

      _this.startGame();
    };

    if (document.querySelector('.audio-game-btn')) {
      (_a = document.querySelector('.audio-game-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onClick);
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

          var _b, _c, _d;

          return __generator(this, function (_e) {
            switch (_e.label) {
              case 0:
                _a = this;
                return [4
                /*yield*/
                , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(level_1 - 1, page_1)];

              case 1:
                _a.wordArray = _e.sent();
                (_b = document.querySelector('.sprintGameInfo')) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
                (_c = document.querySelector('.audioGameInfo')) === null || _c === void 0 ? void 0 : _c.classList.add('display_none');
                (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.AUDIO_WINDOW) === null || _d === void 0 ? void 0 : _d.classList.remove('display_none');
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

  AudioGame.prototype.choiseWords = function () {
    var _this = this;

    var audioPlace = document.querySelector('.audio-place');
    var btnPlace = document.querySelector('.btn-audio');
    var position = 0;
    this.showWord(position);

    var onClick = function onClick(e) {
      if (position === 19) _this.showResult();
      position++;

      _this.correctAnswer(e.target.innerHTML, position);

      _this.showWord(position);
    };

    var audioHandler = function audioHandler() {
      var playAudio = new Audio("https://rs-lang-react.herokuapp.com/".concat(_this.wordArray[position].audio));
      playAudio.play();
      playAudio.played;
    };

    var buttonClick = function buttonClick(element, position) {
      element.classList.add('btn-click');
      setTimeout(function () {
        element.classList.remove('btn-click');
        position++;

        _this.correctAnswer(element.innerHTML, position);

        _this.showWord(position);
      }, 300);
    };

    var keyboardHehdler = function keyboardHehdler(e) {
      e.preventDefault();
      if (position === 19) _this.showResult();

      if (e.code === 'Space') {
        audioHandler();
      } else {
        var answerArray = document.querySelector('.btn-audio');

        if (answerArray) {
          switch (e.code) {
            case 'Digit1' || 0:
              buttonClick(answerArray.children[0], position);
              break;

            case 'Digit2' || 0:
              buttonClick(answerArray.children[1], position);
              break;

            case 'Digit3' || 0:
              buttonClick(answerArray.children[2], position);
              break;

            case 'Digit4' || 0:
              buttonClick(answerArray.children[3], position);
              break;

            case 'Digit5' || 0:
              buttonClick(answerArray.children[4], position);
              break;

            case 'Escape':
              _selectGamePage__WEBPACK_IMPORTED_MODULE_3__.SelectGamePage.showGamePage();
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

  AudioGame.prototype.showWord = function (pos) {
    var btnPlace = document.querySelector('.btn-audio');
    var wordAnswearArray = [];

    for (var i = 0; i < 20; i++) {
      if (wordAnswearArray.length === 5) break;
      var index = Math.floor(Math.random() * 20);
      wordAnswearArray.push(this.wordArray[index].wordTranslate);
    }

    if (wordAnswearArray.indexOf(this.wordArray[pos].wordTranslate) === -1) wordAnswearArray[Math.floor(Math.random() * 5)] = this.wordArray[pos].wordTranslate;

    if (btnPlace) {
      btnPlace.innerHTML = '';

      for (var i = 0; i < wordAnswearArray.length; i++) {
        btnPlace.innerHTML += "<p>".concat(i + 1, " ").concat(wordAnswearArray[i], " </p>");
      }
    }
  };

  AudioGame.prototype.correctAnswer = function (word, position) {
    if (word.split(' ')[1] === this.wordArray[position].wordTranslate) {
      this.resultArray.push({
        word: this.wordArray[position].word,
        wordTranslate: this.wordArray[position].wordTranslate,
        answer: word,
        result: true
      });
    } else {
      this.resultArray.push({
        word: this.wordArray[position].word,
        wordTranslate: this.wordArray[position].wordTranslate,
        answer: word,
        result: false
      });
    }
  };

  AudioGame.prototype.showResult = function () {
    var _this = this;

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE) {
      var dataResult = function dataResult() {
        var result = '';

        _this.resultArray.forEach(function (element) {
          result += "\n                    <div class=\"gameResult\">\n                    <div class=\"result-left-side\">\n                    <div class=\"point-result ".concat(element.result, "\">\n                    </div>\n                    <div class=\"result-word-left\"><span class=\"result-word-span\">Word:</span><span> ").concat(element.word, "</span></div>\n                    </div>\n                    <div class=\"result-word\"><span class=\"result-word-span\">Correct:</span><span> ").concat(element.wordTranslate, "</span></div>\n                    </div>\n                    ");
        });

        return result;
      }; // let stateIconBox = document.querySelectorAll(".point-result");
      // stateIconBox.forEach(function(elem) {
      //   if (elem?.classList.contains("true")) {
      //     const stateIcon = document.createElement("img") as HTMLElement;
      //     stateIcon.classList.add(".good-result-icon");
      //     elem.appendChild(stateIcon);
      //   } else if (elem?.classList.contains("false")) {
      //     const stateIcon = document.createElement("img") as HTMLElement;
      //     stateIcon.classList.add(".bad-result-icon");
      //     elem.appendChild(stateIcon);
      //   }
      // })


      if (this.resultArray.length === 0 || this.calculateResult() === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML = "\n              <div class=\"game-result-wrapper\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult(), " %</p></div>\n              <div class=\"result-window\">\n              <img src=\"../../../assets/svg/gamer.png\" alt=\"sad boy icon\" class=\"sad-boy-icon\">\n              </div>\n              </div>;");
      } else if (this.resultArray.length === 1) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML = "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult(), " %</p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              </div>;");
      } else {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML = "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult(), " %</p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              </div>;");
      }
    }
  };

  AudioGame.prototype.calculateResult = function () {
    var _this = this;

    var _a;

    var result = 0;
    var statistic = 0;

    if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) {
      (function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , _api__WEBPACK_IMPORTED_MODULE_0__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData.userId)];

              case 1:
                return [2
                /*return*/
                , statistic = _a.sent().learnedWords];
            }
          });
        });
      })();
    }

    this.resultArray.forEach(function (element) {
      if (element.result) {
        result++;
      }
    });

    if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) {
      var data = {
        learnedWords: this.resultArray.length + statistic,
        optional: {}
      };
      _api__WEBPACK_IMPORTED_MODULE_0__.API.updateUserStatisticFromServer((_a = _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) === null || _a === void 0 ? void 0 : _a.userId, JSON.stringify(data));
    }

    ;
    if (result === 0) return 0;
    return Math.floor(result / this.resultArray.length * 100);
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


var SelectGamePage =
/** @class */
function () {
  function SelectGamePage() {}

  SelectGamePage.prototype.build = function () {
    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
      var WRAPPER_GAME = document.createElement('div');
      var GAMES = document.createElement('div');
      WRAPPER_GAME.classList.add('display_none');
      GAMES.id = 'game-page';
      WRAPPER_GAME.id = 'game-page-wrapper';
      GAMES.innerHTML = this.buildSprintGame() + this.buildAudioGame();
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN.before(WRAPPER_GAME);
      WRAPPER_GAME.append(GAMES);
    }

    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();
    this.buildSprintGamePage();
    this.buildAudioGamePage();
    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();
    this.buttonClick();
  };

  SelectGamePage.prototype.buildSprintGame = function () {
    return "\n        <div class=\"sprintGameInfo\">\n        <div class=\"game-title-frame\">\n        <div class=\"game-icon-box\">\n        <img class=\"sprint-title-icon\" src=\"../../assets/svg/sprint.png\" alt=\"game icon\">\n        </div>\n        <p class=\"game-title\">Sprint</p>\n        </div>\n        <p class=\"paragraph-text game-description\">Sprint is a practice for repeating the learned words from your vocabulary. Check how much words you can identify by correct meaning in one minute. To give an answer, click on yes/no buttons with the mouse or press the arrow keys. Enjoy!</p>\n        <p class=\"game-level-select\">Select the Level</p>\n        <div class=\"game-level-box\">\n        <select class=\"select-level-sprint\" name=\"level-english\">\n            <option class=\"level-option\" value=\"level-1\" selected=\"selected\">A1</option>\n            <option class=\"level-option\" value=\"level-2\" selected=\"selected\">A2</option>\n            <option class=\"level-option\" value=\"level-3\" selected=\"selected\">B1</option>\n            <option class=\"level-option\" value=\"level-4\" selected=\"selected\">B2</option>\n            <option class=\"level-option\" value=\"level-5\" selected=\"selected\">C1</option>\n            <option class=\"level-option\" value=\"level-6\" selected=\"selected\">C2</option>\n        </select>\n        <button class=\"sprint-game-btn btn-basic cta-btn\">Let's go!</button>\n        </div>\n        </div>\n        ";
  };

  SelectGamePage.prototype.buildAudioGame = function () {
    return "\n        <div class=\"audioGameInfo\">\n        <div class=\"game-title-frame\">\n        <div class=\"game-icon-box\">\n        <img class=\"sprint-title-icon\" src=\"../../assets/svg/listen.png\" alt=\"game icon\">\n        </div>\n        <p class=\"game-title\">Audio Challenge</p>\n        </div>\n        <p class=\"paragraph-text game-description\">Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess. Click on the sound icon, listen to the word, then select the appropriate word from the list and click on it. Enjoy!</p>\n        <p class=\"game-level-select\">Select the Level</p>\n        <div class=\"game-level-box\">\n        <select class=\"select-level-audio\" name=\"level-english\">\n            <option class=\"level-option\" value=\"level-1\" selected=\"selected\">A1</option>\n            <option class=\"level-option\" value=\"level-2\" selected=\"selected\">A2</option>\n            <option class=\"level-option\" value=\"level-3\" selected=\"selected\">B1</option>\n            <option class=\"level-option\" value=\"level-4\" selected=\"selected\">B2</option>\n            <option class=\"level-option\" value=\"level-5\" selected=\"selected\">C1</option>\n            <option class=\"level-option\" value=\"level-6\" selected=\"selected\">C2</option>\n        </select>\n        <button class=\"audio-game-btn btn-basic cta-btn\">Let's go!</button>\n        </div>\n        </div>\n        ";
  };

  SelectGamePage.prototype.buildSprintGamePage = function () {
    var _a;

    var game = document.createElement('div');
    game.id = 'sprint-game-window';
    game.classList.add('display_none');
    game.innerHTML = "\n        <div class=\"sprint-flex-wrapper\">\n        <div class=\"sprint-game-timer\"><p></p></div>\n        <div class=\"sprint-game-window-active\">\n            <div class=\"sprint-progress\"></div>\n            <div class=\"main-sprint\">\n            <p class=\"english-word\"></p>\n            <p class=\"translate-word\"></p>\n            </div>\n            <div class=\"btn-sprint\">\n            <button id=\"game-btn\" class=\"btn-prev\">&#8592;</button>\n            <button id=\"game-btn\" class=\"btn-no\">Wrong</button>\n            <button id=\"game-btn\" class=\"btn-yes\">Right</button>\n            <button id=\"game-btn\" class=\"btn-next\">&#8594;</button>\n            </div>\n        </div>\n        </div>\n        ";
    (_a = document.querySelector('.sprintGameInfo')) === null || _a === void 0 ? void 0 : _a.after(game);
  };

  SelectGamePage.prototype.buildAudioGamePage = function () {
    var _a;

    var game = document.createElement('div');
    game.id = 'audio-game-window';
    game.innerHTML = "\n        <div class=\"audio-game-window-active\">\n            <div class=\"audio-progress\"></div>\n            <div class=\"main-audio\">\n            <div class=\"audio-place\">\n            <img src=\"../../assets/svg/audio.png\" class=\"audio-game-icon\">\n            </div>\n            <div class=\"btn-audio\">\n\n            </div>\n            </div>\n        </div>\n        ";
    (_a = document.querySelector('.audioGameInfo')) === null || _a === void 0 ? void 0 : _a.after(game);
  };

  SelectGamePage.prototype.buttonClick = function () {
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
    var _a, _b, _c, _d, _e, _f;

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN.classList.add('display_none');
      (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_PAGE_WRAPPER) === null || _a === void 0 ? void 0 : _a.classList.remove('display_none');
      (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
      (_c = document.querySelector('.sprintGameInfo')) === null || _c === void 0 ? void 0 : _c.classList.remove('display_none');
      (_d = document.querySelector('.audioGameInfo')) === null || _d === void 0 ? void 0 : _d.classList.remove('display_none');
      (_e = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.SPRINT_WINDOW) === null || _e === void 0 ? void 0 : _e.classList.add('display_none');
      (_f = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.AUDIO_WINDOW) === null || _f === void 0 ? void 0 : _f.classList.add('display_none');
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
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataStorage */ "./components/dataStorage.ts");
/* harmony import */ var _selectGamePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectGamePage */ "./components/games/selectGamePage.ts");
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

          var _b, _c, _d;

          return __generator(this, function (_e) {
            switch (_e.label) {
              case 0:
                _a = this;
                return [4
                /*yield*/
                , _api__WEBPACK_IMPORTED_MODULE_0__.API.loadWordsFromServer(level_1 - 1, page_1)];

              case 1:
                _a.wordArray = _e.sent();
                (_b = document.querySelector('.sprintGameInfo')) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
                (_c = document.querySelector('.audioGameInfo')) === null || _c === void 0 ? void 0 : _c.classList.add('display_none');
                (_d = _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.SPRINT_WINDOW) === null || _d === void 0 ? void 0 : _d.classList.remove('display_none');
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

  SprintGame.prototype.setTimer = function () {
    var _this = this;

    var _a;

    var timer = 6;
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

        if (e.target.innerHTML === 'Wrong' && position > 0) {
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
    };

    if (btnPlace) {
      btnPlace.addEventListener('click', onClick);
    }

    var buttonClick = function buttonClick(translateWord, answer) {
      console.log('click');
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

      e.preventDefault();
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
            _selectGamePage__WEBPACK_IMPORTED_MODULE_3__.SelectGamePage.showGamePage();
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

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE) {
      var dataResult = function dataResult() {
        var result = '';

        _this.resultArray.forEach(function (element) {
          result += "\n                    <div class=\"gameResult\">\n                    <div class=\"result-left-side\">\n                    <div class=\"point-result ".concat(element.result, "\">\n                    </div>\n                    <div class=\"result-word-left\"><span class=\"result-word-span\">Word:</span><span> ").concat(element.word, "</span></div>\n                    </div>\n                    <div class=\"result-word\"><span class=\"result-word-span-right\">Correct:</span><span> ").concat(element.wordTranslate, "</span></div>\n                    </div>\n                    ");
        });

        return result;
      }; // let stateIconBox = document.querySelectorAll(".point-result");
      // stateIconBox.forEach(function(elem) {
      //   if (elem?.classList.contains("true")) {
      //     const stateIcon = document.createElement("img") as HTMLElement;
      //     stateIcon.classList.add(".good-result-icon");
      //     elem.appendChild(stateIcon);
      //   } else if (elem?.classList.contains("false")) {
      //     const stateIcon = document.createElement("img") as HTMLElement;
      //     stateIcon.classList.add(".bad-result-icon");
      //     elem.appendChild(stateIcon);
      //   }
      // })


      if (this.resultArray.length === 0 || this.calculateResult() === 0) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML = "\n              <div class=\"game-result-wrapper\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult(), " %</p></div>\n              <div class=\"result-window\">\n              <img src=\"../../../assets/svg/gamer.png\" alt=\"sad boy icon\" class=\"sad-boy-icon\">\n              </div>\n              </div>;");
      } else if (this.resultArray.length === 1) {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML = "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " word</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult(), " %</p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              </div>;");
      } else {
        _startPageListener__WEBPACK_IMPORTED_MODULE_1__.StartPageListener.GAME_PAGE.innerHTML = "\n              <div class=\"game-result-wrapper\">\n              <img src=\"../../../assets/svg/yes.png\" alt=\"done icon\" class=\"good-result-icon\">\n              <div class=\"correct-result-percent\"><p id=\"done-words\" class=\"game-level-select\">Done: ".concat(this.resultArray.length, " words</p></div>\n              <div class=\"correct-result-percent\"><p class=\"game-level-select\">Correct result: ").concat(this.calculateResult(), " %</p></div>\n              <div class=\"result-window\">").concat(dataResult(), "</div>\n              </div>;");
      }
    }
  };

  SprintGame.prototype.calculateResult = function () {
    var _this = this;

    var _a;

    var result = 0;
    var statistic = 0;

    if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) {
      (function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , _api__WEBPACK_IMPORTED_MODULE_0__.API.getUserStatisticFromServer(_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData.userId)];

              case 1:
                return [2
                /*return*/
                , statistic = _a.sent().learnedWords];
            }
          });
        });
      })();
    }

    this.resultArray.forEach(function (element) {
      if (element.result) {
        result++;
      }
    });

    if (_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) {
      var data = {
        learnedWords: this.resultArray.length + statistic,
        optional: {
          a: 1,
          b: 2
        }
      };
      _api__WEBPACK_IMPORTED_MODULE_0__.API.updateUserStatisticFromServer((_a = _dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage.userData) === null || _a === void 0 ? void 0 : _a.userId, JSON.stringify(data));
    }

    ;
    if (result === 0) return 0;
    return Math.floor(result / this.resultArray.length * 100);
  };

  return SprintGame;
}();



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



/***/ }),

/***/ "./components/navClick.ts":
/*!********************************!*\
  !*** ./components/navClick.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavClick": () => (/* binding */ NavClick)
/* harmony export */ });
/* harmony import */ var _startPageListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startPageListener */ "./components/startPageListener.ts");


var NavClick =
/** @class */
function () {
  function NavClick() {}

  NavClick.prototype.active = function () {
    var onClick = function onClick(e) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      if (e.target.innerHTML == 'Textbook') {
        (_a = document.querySelector('.hero-page')) === null || _a === void 0 ? void 0 : _a.classList.add('display_none');
        (_b = document.querySelector('.advantages-page')) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
        (_c = document.querySelector('.about-page')) === null || _c === void 0 ? void 0 : _c.classList.add('display_none');
      } else {
        (_d = document.querySelector('.hero-page')) === null || _d === void 0 ? void 0 : _d.classList.remove('display_none');
        (_e = document.querySelector('.advantages-page')) === null || _e === void 0 ? void 0 : _e.classList.remove('display_none');
        (_f = document.querySelector('.about-page')) === null || _f === void 0 ? void 0 : _f.classList.remove('display_none');
        (_g = document.querySelector('.groups')) === null || _g === void 0 ? void 0 : _g.classList.add('display_none');
        (_h = document.querySelector('.main_container')) === null || _h === void 0 ? void 0 : _h.classList.add('display_none');
        (_j = document.querySelector('#pagination')) === null || _j === void 0 ? void 0 : _j.classList.add('display_none');
      }
    };

    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.NAV) {
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.NAV.addEventListener('click', onClick);
    }
  };

  return NavClick;
}();



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
    StartPageListener.STATISTIC = document.getElementById('statistic');
    StartPageListener.NAV = document.querySelector('.nav');
    StartPageListener.GAME_PAGE = document.getElementById('game-page');
    StartPageListener.GAME_PAGE_WRAPPER = document.getElementById('game-page-wrapper');
    StartPageListener.TIMER = document.querySelector('.sprint-game-timer');
    StartPageListener.SPRINT_WINDOW = document.querySelector('#sprint-game-window');
    StartPageListener.AUDIO_WINDOW = document.querySelector('#audio-game-window');
    StartPageListener.GAME_ICON = document.querySelector('#game-main-card');
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
    if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
      var STATISTIC = document.createElement('div');
      STATISTIC.id = 'statistic';
      STATISTIC.innerHTML = "\n            <div>\n            <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</p>\n            <button class=\"get-statistic\">\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 \u0434\u0435\u043D\u044C</button>\n            <div class=\"statistic-result\"><p>\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0435</p></div>\n            </div>\n            ";
      _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN.before(STATISTIC);
      STATISTIC.classList.add('display_none');
    }

    _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.listen();
    this.buttonClick();
  };

  StatisticPage.prototype.buttonClick = function () {
    var _this = this;

    var onClick = function onClick(e) {
      var _a, _b, _c;

      if (e.target.innerHTML == 'Statistics') {
        if (_startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN) {
          _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.MAIN.classList.add('display_none');
          (_a = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC) === null || _a === void 0 ? void 0 : _a.classList.remove('display_none');
          (_b = _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.GAME_PAGE) === null || _b === void 0 ? void 0 : _b.classList.add('display_none');
          (_c = document.querySelector('.get-statistic')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', getDataCtatistic);
        }
      }
    };

    var getDataCtatistic = function getDataCtatistic() {
      return __awaiter(_this, void 0, void 0, function () {
        var statistic;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
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
              console.log(statistic);
              _startPageListener__WEBPACK_IMPORTED_MODULE_0__.StartPageListener.STATISTIC.children[0].children[2].innerHTML = statistic.learnedWords.toString();
              _a.label = 2;

            case 2:
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
/* harmony export */   "renderCards": () => (/* binding */ renderCards)
/* harmony export */ });
/* harmony import */ var _styles_sass_pages_textbook_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sass/pages/_textbook.scss */ "./styles/sass/pages/_textbook.scss");


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
    var targetElement = event.target;

    if (targetElement.dataset.audio === "audioBtn") {
      this.playAudio(targetElement.firstElementChild);
    }
  };

  Card.prototype.createCardTemplate = function () {
    return "<ul class=\"wrapper textbook-list\">\n                <li class=\"textbook-list_item\">\n                  <img src=\"https://rs-lang-react.herokuapp.com/".concat(this.wordData.image, "\" alt=\"").concat(this.wordData.word, "\" class=\"textbook-card-img\">\n                  <div class=\"textbook-list_item__wrapper\">\n                  <div class=\"upper_card-row\">\n                   <div class=\"upper_card-box\">\n                      <div class=\"word-wrapper\">\n                        <h2 class=\"word\">").concat(this.wordData.word, " <p class=\"transcription\">").concat(this.wordData.transcription, "</p></h2>\n                      </div>\n                      <div class=\"translate\">").concat(this.wordData.wordTranslate, "</div>\n                    </div>\n                    <button data-audio=\"audioBtn\" class=\"btn-basic bnt-textbook\">&#128264; Word\n                    <audio id=\"sound\">\n                    <source type=\"audio/mp3\" src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.audio, "\">\n                    </audio>\n                   </button>\n                  </div>\n                  <div class=\"upper_card-row\">\n                    <div class=\"lower_card-box\">\n                      <p class=\"description\">").concat(this.wordData.textMeaning, "</p>\n                      <p class=\"description-translate\">").concat(this.wordData.textMeaningTranslate, "</p>\n                    </div>\n                    <button data-audio=\"audioBtn\" class=\"btn-basic bnt-bell\">&#128264;\n                      <audio id=\"sound\">\n                      <source type=\"audio/mp3\" src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.audioMeaning, "\">\n                      </audio>\n                    </button>\n                  </div>\n                  <div class=\"upper_card-row\">\n                    <div class=\"lower_card-box\">\n                      <p class=\"example\">").concat(this.wordData.textExample, "</p>\n                      <p class=\"example-translate\">").concat(this.wordData.textExampleTranslate, "</p>\n                      </div>\n                      <button data-audio=\"audioBtn\" class=\"btn-basic bnt-bell\">&#128264;\n                        <audio id=\"sound\">\n                        <source type=\"audio/mp3\" src=\"https://rs-lang-react.herokuapp.com/").concat(this.wordData.audioExample, "\">\n                        </audio>\n                      </button>\n                    </div>\n                  </div>\n                </li>\n              </ul>");
  };

  return Card;
}();


function renderCards(cards) {
  var container = document.querySelector(".main_container");
  var result = cards.reduce(function (prevValue, currValue) {
    var card = new Card(container, currValue);
    var template = card.createCardTemplate();
    return prevValue + template;
  }, "");

  if (container) {
    container.innerHTML = result;
  }
}

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
/* harmony import */ var _components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/textbook/textbook */ "./components/textbook/textbook.ts");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _components_statistic_staticticPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/statistic/staticticPage */ "./components/statistic/staticticPage.ts");
/* harmony import */ var _components_games_selectGamePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/games/selectGamePage */ "./components/games/selectGamePage.ts");
/* harmony import */ var _components_games_sprint_sprintGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/games/sprint/sprintGame */ "./components/games/sprint/sprintGame.ts");
/* harmony import */ var _components_games_audio_audioGame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/games/audio/audioGame */ "./components/games/audio/audioGame.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal */ "./components/modal.ts");
/* harmony import */ var _components_navClick__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navClick */ "./components/navClick.ts");
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













var server = "https://rs-lang-final-project.herokuapp.com";
var modalWindow = new _components_modal__WEBPACK_IMPORTED_MODULE_10__.ModalWindow();
modalWindow.active();
var autorisationForm = new _components_autorisation_autorisation_form__WEBPACK_IMPORTED_MODULE_0__.AutorisationForm();
var dataStorage = new _components_dataStorage__WEBPACK_IMPORTED_MODULE_2__.DataStorage();
var startPageListener = new _components_startPageListener__WEBPACK_IMPORTED_MODULE_3__.StartPageListener();
var api = new _components_api__WEBPACK_IMPORTED_MODULE_1__.API(server);
autorisationForm.buttonAutorisationForm();
var statistic = new _components_statistic_staticticPage__WEBPACK_IMPORTED_MODULE_6__.StatisticPage();
statistic.build();
var navClick = new _components_navClick__WEBPACK_IMPORTED_MODULE_11__.NavClick();
navClick.active();
var selectGame = new _components_games_selectGamePage__WEBPACK_IMPORTED_MODULE_7__.SelectGamePage();
selectGame.build();
var sprintGame = new _components_games_sprint_sprintGame__WEBPACK_IMPORTED_MODULE_8__.SprintGame();
sprintGame.btnClick();
var audioGame = new _components_games_audio_audioGame__WEBPACK_IMPORTED_MODULE_9__.AudioGame();
audioGame.btnClick();
var nav = document.querySelector(".nav");
var groups = document.querySelector(".groups");
var pagination = document.querySelector("#pagination");
var quantityPages = 30;
var visiblePages = 6;
var quantityGroups = 6;
var englishLevel = ["Easy - A1", "Easy - A2", "Medium - B1", "Medium - B2", "Hard - C1", "Hard - C2"];

function dynamicList(maxValue, elementNameFirst, className, containerForElement, groupsLevel, elementNameSecond) {
  for (var i = 1; i <= maxValue; i++) {
    var element = document.createElement(elementNameFirst);
    element.classList.add(className);

    if (groupsLevel) {
      element.innerText = groupsLevel[i - 1];
      element.setAttribute(elementNameSecond, String(i));
    } else {
      element.innerText = String(i);
    }

    containerForElement.insertAdjacentElement("beforeend", element);
  }
}

var btnNumber = 1;
var btnGroupNumber = 1;

function handleNextClick() {
  return __awaiter(this, void 0, void 0, function () {
    var allPages, lastPage, firstPage, nextPage, active, i, nextPageData, nextPageData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          allPages = document.querySelectorAll("li.pagination_number");
          lastPage = allPages[5];
          firstPage = allPages[0];
          nextPage = document.getElementsByClassName('active-page')[0].nextElementSibling;
          active = document.querySelector(".active-page");
          if (!(active.innerHTML === lastPage.innerHTML && +active.innerHTML !== quantityPages)) return [3
          /*break*/
          , 2];
          btnNumber += 1;

          for (i = 0; i < allPages.length && i + btnNumber <= quantityPages; i++) {
            allPages[i].innerHTML = String(btnNumber + i);
          }

          if (active != null) {
            active.classList.remove("active-page");
          }

          firstPage.classList.add("active-page");
          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1)];

        case 1:
          nextPageData = _a.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(nextPageData);
          return [3
          /*break*/
          , 4];

        case 2:
          btnNumber = +nextPage.innerText;

          if (active != null && active.innerHTML !== String(quantityPages)) {
            active.classList.remove("active-page");
            nextPage.classList.add("active-page");
          }

          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1)];

        case 3:
          nextPageData = _a.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(nextPageData);
          _a.label = 4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function handlePrevClick() {
  return __awaiter(this, void 0, void 0, function () {
    var allPages, lastPage, firstPage, prevPage, active, i, nextPageData, nextPageData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          allPages = document.querySelectorAll("li.pagination_number");
          lastPage = allPages[5];
          firstPage = allPages[0];
          prevPage = document.getElementsByClassName('active-page')[0].previousElementSibling;
          active = document.querySelector(".active-page");
          if (!(active.innerHTML === firstPage.innerHTML && +active.innerHTML !== 1)) return [3
          /*break*/
          , 2];
          btnNumber -= 1;

          for (i = 0; i < allPages.length && btnNumber - i >= 1; i++) {
            allPages[allPages.length - i - 1].innerHTML = String(btnNumber - i);
          }

          if (active != null) {
            active.classList.remove("active-page");
          }

          lastPage.classList.add("active-page");
          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1)];

        case 1:
          nextPageData = _a.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(nextPageData);
          return [3
          /*break*/
          , 4];

        case 2:
          btnNumber = +prevPage.innerText;

          if (active != null && +active.innerHTML !== 1) {
            active.classList.remove("active-page");
            prevPage.classList.add("active-page");
          }

          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1)];

        case 3:
          nextPageData = _a.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(nextPageData);
          _a.label = 4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

nav === null || nav === void 0 ? void 0 : nav.addEventListener("click", function (event) {
  return __awaiter(void 0, void 0, void 0, function () {
    var btn, item, selectedNavItem, _a, dataCards, btnNext, btnPrev, firstPaginationElement, firstGroupsElement;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          btn = event.target;
          item = btn.parentElement;
          selectedNavItem = item.getAttribute("data-nav");
          _a = selectedNavItem;

          switch (_a) {
            case "home":
              return [3
              /*break*/
              , 1];

            case "textbook":
              return [3
              /*break*/
              , 2];

            case "games":
              return [3
              /*break*/
              , 4];

            case "statistics":
              return [3
              /*break*/
              , 5];

            case "about":
              return [3
              /*break*/
              , 6];
          }

          return [3
          /*break*/
          , 7];

        case 1:
          console.log(selectedNavItem);
          return [3
          /*break*/
          , 7];

        case 2:
          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(0, 0)];

        case 3:
          dataCards = _b.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(dataCards);
          dynamicList(quantityGroups, "button", "groups_list__item", groups, englishLevel, "id");
          dynamicList(visiblePages, "li", "pagination_number", pagination);
          btnNext = document.createElement("li");
          btnPrev = document.createElement("li");
          btnNext.classList.add("next-btn");
          btnPrev.classList.add("prev-btn");
          btnNext.innerHTML = "&#8594;";
          btnPrev.innerHTML = "&#8592;";
          pagination.insertAdjacentElement("afterbegin", btnPrev);
          pagination.insertAdjacentElement("beforeend", btnNext);
          btnNext.addEventListener("click", handleNextClick);
          btnPrev.addEventListener("click", handlePrevClick); //

          item.classList.add("active");
          btn.classList.add("active");
          firstPaginationElement = pagination.querySelector(".pagination_number");
          firstGroupsElement = groups === null || groups === void 0 ? void 0 : groups.querySelector(".groups_list__item");
          firstPaginationElement.classList.add("active-page");
          firstGroupsElement.classList.add("active-group");
          return [3
          /*break*/
          , 7];

        case 4:
          console.log(selectedNavItem);
          return [3
          /*break*/
          , 7];

        case 5:
          console.log(selectedNavItem);
          return [3
          /*break*/
          , 7];

        case 6:
          console.log(selectedNavItem);
          return [3
          /*break*/
          , 7];

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
});
groups === null || groups === void 0 ? void 0 : groups.addEventListener("click", function (event) {
  return __awaiter(void 0, void 0, void 0, function () {
    var btnGroup, allPages, firstPage, activeBtn, i, active, nextGroupData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          btnGroup = event === null || event === void 0 ? void 0 : event.target;
          if (!btnGroup.classList.contains("groups_list__item")) return [3
          /*break*/
          , 2];
          allPages = document.querySelectorAll("li.pagination_number");
          firstPage = allPages[0];
          activeBtn = document.querySelector(".active-page");

          if (+activeBtn.innerHTML !== 1) {
            btnNumber = 1;

            for (i = 0; i < allPages.length; i++) {
              allPages[i].innerHTML = String(btnNumber + i);
            }

            activeBtn.classList.remove("active-page");
            firstPage.classList.add("active-page");
          }

          btnGroupNumber = +btnGroup.id;
          active = document.querySelector(".active-group");

          if (active != null) {
            active.classList.remove("active-group");
          }

          btnGroup.classList.add("active-group");
          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1)];

        case 1:
          nextGroupData = _a.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(nextGroupData);
          _a.label = 2;

        case 2:
          return [2
          /*return*/
          ];
      }
    });
  });
});
pagination === null || pagination === void 0 ? void 0 : pagination.addEventListener("click", function (event) {
  return __awaiter(void 0, void 0, void 0, function () {
    var btn, active, nextPageData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          btn = event === null || event === void 0 ? void 0 : event.target;
          if (!btn.classList.contains("pagination_number")) return [3
          /*break*/
          , 2];
          btnNumber = +btn.innerText;
          active = document.querySelector(".active-page");

          if (active != null) {
            active.classList.remove("active-page");
          }

          btn.classList.add("active-page");
          return [4
          /*yield*/
          , _components_api__WEBPACK_IMPORTED_MODULE_1__.API.loadWordsFromServer(btnGroupNumber - 1, btnNumber - 1)];

        case 1:
          nextPageData = _a.sent();
          (0,_components_textbook_textbook__WEBPACK_IMPORTED_MODULE_4__.renderCards)(nextPageData);
          _a.label = 2;

        case 2:
          return [2
          /*return*/
          ];
      }
    });
  });
});

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
___CSS_LOADER_EXPORT___.push([module.id, ".btn-basic {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: #3F5069;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s ease-out;\n}\n\n.btn-basic:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.button-panel .button-sign-in {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-panel .button-sign-up {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-sign-in:hover,\n.button-sign-up:hover {\n  background-color: #ffb108;\n  box-shadow: 0 8px 22px 0 rgba(37, 44, 97, 0.15), 0 4px 6px 0 rgba(93, 100, 148, 0.2);\n}\n\n.cta-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin-top: 24px;\n  background-color: #fa6930;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: background-color 0.5s ease 0s;\n  text-transform: none;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease-in;\n  -moz-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n  transition: all 0.8s ease 0s;\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n}\n\n.modal:target {\n  opacity: 1;\n  pointer-events: auto;\n  overflow-y: auto;\n  transform: translate(0px, 0px);\n}\n\n.modal:target .form-wrapper {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n\n.modal-dialog {\n  width: 45vw;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n  }\n}\n.overlay__modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.overlay__modal::after {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 100%;\n  content: \"\";\n}\n\n.modal-out-area {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n/* Fonts */\n/* fontawesome */\n[class*=fontawesome-]:before {\n  font-family: \"FontAwesome\", sans-serif;\n}\n\n/* body */\nbody {\n  background: #e9e9e9;\n  color: #5e5e5e;\n}\n\n/* Form Layout */\n.form-wrapper {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(0px, -100%);\n}\n\nh1 {\n  text-align: center;\n  padding: 1em 0;\n}\n\nform {\n  padding: 0 1.5em;\n}\n\n.form-item {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n.form-item input {\n  background: #fafafa;\n  border: none;\n  border-bottom: 2px solid #e9e9e9;\n  color: #666;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1em;\n  height: 50px;\n  transition: border-color 0.3s;\n  width: 100%;\n}\n\n.form-item input:focus {\n  border-bottom: 2px solid #c0c0c0;\n  outline: none;\n}\n\n.button-panel {\n  margin: 2em 0 0;\n  width: 100%;\n}\n\n.form-footer {\n  font-size: 1em;\n  padding: 2em 0;\n  text-align: center;\n}\n\n.form-footer a {\n  color: #8c8c8c;\n  text-decoration: none;\n  transition: border-color 0.3s;\n}\n\n.form-footer a:hover {\n  border-bottom: 1px dotted #8c8c8c;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  padding: 15px;\n}\n\n.close:focus, .close:hover {\n  cursor: pointer;\n  opacity: 0.75;\n}\n\n.signup-link {\n  cursor: pointer;\n}\n\n.signup-link a:focus {\n  color: #2c3849;\n}\n\n.signup-form-container {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(-50%, -60%);\n  display: none;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/* Remove outline on the forms and links */\n:active, :hover, :focus {\n  outline: 0;\n  outline-offset: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.section-title {\n  font-size: 3rem;\n  color: #3F5069;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n}\n\n.card-title {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 24px;\n  color: #000;\n  font-weight: 400;\n}\n\n.paragraph-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.header {\n  background-color: #f4efe7;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.logo {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 2rem;\n  color: #3F5069;\n  padding-left: 10px;\n  margin-left: 10px;\n  border-left: 2px solid #3F5069;\n  cursor: pointer;\n}\n\n.logo:hover {\n  color: #2c3849;\n  transition: all 0.3s ease-in-out;\n}\n\n.header-right {\n  display: flex;\n  align-items: center;\n}\n\n.nav__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  margin-right: 15px;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  position: relative;\n}\n\n.nav-item::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s;\n}\n\n.nav-item:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.nav-link {\n  color: #000;\n}\n\n.active {\n  color: red;\n  pointer-events: none;\n}\n\n.act::after {\n  content: none;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.sticky + .main {\n  padding-top: 80px;\n}\n\n.wrapper {\n  width: 90%;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\nbody {\n  scroll-behavior: smooth;\n  background-color: #f4efe7;\n}\n\n.footer {\n  background-color: #2c3849;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\n.year-box {\n  max-height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.github-box {\n  width: 60vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.github-link {\n  font-family: \"Roboto\", sans-serif;\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  margin-left: 1rem;\n}\n\n.github-link::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.8s;\n}\n\n.github-link:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.rss-logo {\n  width: 7rem;\n  height: auto;\n}\n\n.rss-logo:hover {\n  filter: invert(29%) sepia(32%) saturate(1382%) hue-rotate(354deg) brightness(103%) contrast(101%);\n  transition: 0.5s;\n}\n\n.wrongPassword {\n  background-color: aqua;\n}\n\n.closeModal {\n  display: none;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  margin: 0px 8px;\n  background: #3f5069;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  user-select: none;\n  transition: color 0.3s ease 0s;\n  outline: none;\n  cursor: pointer;\n}\n\n.prev-btn:hover,\n.next-btn:hover {\n  background-color: #ffb108;\n}\n\n.active-page {\n  background-color: #ffb108;\n}\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.textbook-list_item {\n  width: 60rem;\n  height: 18rem;\n  display: flex;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 28rem;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.7rem;\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  height: 1.3rem;\n  margin: 0.2rem;\n}\n\n.bnt-bell {\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.groups_list__item {\n  height: 70px;\n  width: 215px;\n  background-color: #3f5069;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.4rem;\n  overflow: hidden;\n  border: none;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n}\n\n.groups_list__item:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.active-group {\n  background-color: #ffb108;\n}\n\n.advantages-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.advantages-content {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6rem;\n  margin-bottom: 7rem;\n}\n\n.adv-card-icon {\n  display: inline-block;\n  margin-bottom: 2rem;\n}\n\n.advantages-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 290px;\n  padding: 40px 20px;\n  flex-wrap: wrap;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n\n.adv-card-title {\n  margin-bottom: 1.5rem;\n}\n\n.adv-card-desc {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.about-photo {\n  width: 273px;\n  height: auto;\n  margin: 0px;\n}\n\n.about-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  row-gap: 3rem;\n  padding: 32px 0px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 7rem;\n}\n\n.about-card {\n  max-width: 67rem;\n  max-height: 16.6rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1.5;\n  background-color: #3F5069;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2.5rem;\n}\n\n.about-name {\n  margin: 0;\n}\n\n.about-subtitle {\n  font-size: \"Roboto\", sans-serif;\n  color: #8d8d8d;\n}\n\n.about-desc {\n  margin: 14px 0px 0px;\n  color: #fff;\n}\n\n.github-icon {\n  max-width: 2.5rem;\n  height: auto;\n  margin: 14px 0 0;\n}\n\n.github-icon:hover {\n  filter: invert(29%) sepia(32%) saturate(1382%) hue-rotate(354deg) brightness(103%) contrast(101%);\n  transition: 0.5s;\n}\n\n.about-name {\n  color: #fff;\n}\n\n#game-page {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  max-width: 1440px;\n  height: 100vh;\n  margin: 8rem 0 10rem 0;\n}\n#game-page #sprint-game-window {\n  width: 100%;\n  height: 100%;\n}\n#game-page #sprint-game-window .sprint-flex-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5rem;\n}\n#game-page #sprint-game-window .sprint-game-timer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #2c3849;\n}\n#game-page #sprint-game-window .sprint-game-timer p {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  font-size: 4rem;\n  color: #f4efe7;\n}\n#game-page #sprint-game-window .sprint-game-window-active {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 70vw;\n  height: 45vh;\n  overflow-x: scroll;\n  margin: 0 auto;\n  padding: 2px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-shrink: 1;\n  padding: 0;\n  margin: 0;\n  flex-direction: row;\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress .progress {\n  min-width: 35px;\n  height: 35px;\n  padding: 0;\n  border: solid 1px white;\n  border-radius: 5px;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .english-word {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .translate-word {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n  height: 10vh;\n  max-height: 40px;\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  margin-bottom: 3rem;\n  column-gap: 1rem;\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint #game-btn {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 0 16px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #fa6930;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.2s ease-out !important;\n}\n\n#game-btn:hover {\n  background: #ffb108 radial-gradient(circle, transparent 1%, #ffb108 1%) center/15000% !important;\n}\n\n#game-btn:active {\n  background-color: #f8c963 !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-no:hover {\n  background: red radial-gradient(circle, transparent 1%, red 1%) center/15000% !important;\n}\n\n#game-btn.btn-no:active {\n  background-color: rgb(247, 160, 160) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-yes:hover {\n  background: greenyellow radial-gradient(circle, transparent 1%, greenyellow 1%) center/15000% !important;\n}\n\n#game-btn.btn-yes:active {\n  background-color: rgb(255, 255, 255) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n.game-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.result-window {\n  width: 80vw;\n  height: 68vh;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: #3F5069;\n  color: #fff;\n  overflow: scroll;\n  padding: 1.7rem;\n}\n.result-window .gameResult {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 80vw;\n  height: auto;\n  margin: 0.6rem 0 0 0;\n  padding: 0;\n}\n.result-window .gameResult .result-left-side {\n  display: flex;\n}\n.result-window .gameResult .point-result {\n  width: 15px;\n  height: 15px;\n  border-radius: 10px;\n  margin: 10px;\n}\n.result-window .gameResult .result-word-left {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 26vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-align: start;\n}\n.result-window .gameResult .result-word-left .result-word-span {\n  color: #ffb108;\n}\n.result-window .gameResult .result-word {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 37vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  line-height: 4rem;\n  text-align: start;\n}\n.result-window .gameResult .result-word .result-word-span-right {\n  color: greenyellow;\n}\n\n.correct-result-percent {\n  margin: 0 auto;\n  padding: 0;\n}\n.correct-result-percent p {\n  margin: 0;\n  padding: 0;\n}\n\n.true {\n  background-color: greenyellow;\n}\n\n.false {\n  background-color: red;\n}\n\n.sprintGameInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 3rem 6rem 0;\n}\n\n.audioGameInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 0 6rem 3rem;\n}\n\n.game-title-frame {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg.sprint-title-icon {\n  width: 110px;\n  height: 110px;\n}\n\n.game-icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #fcedd9;\n}\n\n.game-title {\n  font-size: 2rem;\n  color: #2c3849;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n\n.game-description {\n  margin: 0 auto;\n  width: 40vw;\n  height: 15vh;\n  text-align: justify;\n  line-height: 2.4rem;\n  letter-spacing: 0.7px;\n  margin-bottom: 3rem;\n}\n\n.game-level-select {\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n  color: #ffb108;\n}\n\n.game-level-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n}\n\n.select-level-audio,\n.select-level-sprint {\n  cursor: pointer;\n  width: 90px;\n  /* min-height: 60px; */\n  /* max-height: 300px; */\n  border-radius: 15px;\n  background-color: rgb(250, 250, 250);\n  box-shadow: 2px 4px 8px #c5c5c5;\n  transition: all 300ms;\n  border: none;\n  padding: 1rem 0 1rem 1.2rem;\n  color: #ffb108;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 900;\n  font-size: 2rem;\n}\n\n.level-option {\n  color: #fff;\n  background-color: #3F5069;\n}\n\n.sad-boy-icon {\n  width: 16vw;\n  height: auto;\n  margin: 6rem auto;\n}\n\n.good-result-icon {\n  width: 10rem;\n  height: 10rem;\n}\n\n.audio-game-window-active {\n  margin-top: -20rem;\n}\n\n.audio-place {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background: #fffdfd;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n}\n.audio-place .audio-game-icon {\n  width: 180px;\n  height: 180px;\n}\n\n.audio-place:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: 0.3s;\n}\n\n.btn-audio {\n  display: flex;\n  column-gap: 3rem;\n}\n.btn-audio p {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 1rem 0.7rem;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #3F5069;\n  font-size: 16px;\n  height: 50px;\n  letter-spacing: 0.0892857143em;\n  text-transform: uppercase;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.1s ease-out !important;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n.btn-audio :hover {\n  background: #ffb108 radial-gradient(circle, transparent 1%, #ffb108 1%) center/15000% !important;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n}\n.btn-audio :active {\n  background-color: rgb(255, 255, 255) !important;\n  background-size: 100% !important;\n  transition: background 0.1s !important;\n}\n\n.sprint-game-timer {\n  animation: mymove 5s infinite alternate;\n}\n\n@keyframes mymove {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  25% {\n    background-color: rgba(255, 206, 83, 0.604);\n  }\n  35% {\n    background-color: rgba(247, 126, 46, 0.562);\n  }\n  50% {\n    background-color: rgba(255, 0, 55, 0.451);\n  }\n  75% {\n    background-color: rgba(27, 181, 13, 0.381);\n  }\n  85% {\n    background-color: rgb(138, 187, 200);\n  }\n  100% {\n    background-color: rgba(194, 126, 231, 0.601);\n  }\n}\n.btn-click {\n  background-color: rgb(236, 175, 43) !important;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.hero-content {\n  max-width: 424px;\n  margin: 0 -10rem 20rem 0;\n}\n\n.hero-title {\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 3rem;\n  color: #2c3849;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n\n.hero-subtitle {\n  font-family: \"Roboto\", sans-serif;\n  display: block;\n  margin-top: 8px;\n  color: #8d8d8d;\n}\n\n.hero-text,\n.hero-under-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  display: block;\n  margin: 16px 0px 0px;\n}\n\n.hero-img-box {\n  width: 700px;\n  margin: 6rem 0rem 7rem 0rem;\n}\n\n.hero-img-guy {\n  width: 30vw;\n  margin-left: 18rem;\n}\n\n.hero-img-girl {\n  width: 30vw;\n  margin-right: 18rem;\n}\n\n.display_none {\n  display: none;\n}\n\n#statistic {\n  width: 100vw;\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://./styles/sass/components/_buttons.scss","webpack://./styles/sass/abstracts/_mixins.scss","webpack://./styles/sass/abstracts/_variables.scss","webpack://./styles/app.scss","webpack://./styles/sass/components/_modal-window.scss","webpack://./styles/sass/core/_normalize.scss","webpack://./styles/sass/core/_typography.scss","webpack://./styles/sass/layout/_header.scss","webpack://./styles/sass/layout/_wrapper.scss","webpack://./styles/sass/layout/_footer.scss","webpack://./styles/sass/pages/_authorization.scss","webpack://./styles/sass/pages/_textbook.scss","webpack://./styles/sass/pages/_home.scss","webpack://./styles/sass/pages/_games.scss","webpack://./styles/sass/sections/_hero.scss","webpack://./styles/sass/statistics/_statistics.scss"],"names":[],"mappings":"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","sourcesContent":[".btn-basic {\n  @include btn-primary;\n}\n\n.btn-basic:hover {\n  background: $color-accent;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\n.button-panel .button-sign-in {\n  @include btn-signIn;\n}\n\n.button-panel .button-sign-up {\n  @include btn-signIn;\n}\n\n.button-sign-in:hover,\n.button-sign-up:hover {\n  background-color: $color-accent;\n  box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%);\n}\n\n.cta-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin-top: 24px;\n  background-color: $color-orange;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: background-color 0.5s ease 0s;\n  text-transform: none;\n}","@mixin btn-primary() {\n  font-family: 'Roboto', sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: $color-dark;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: .0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  transition: all .2s ease-out;\n}\n\n@mixin btn-signIn {\n  background: $color-dark;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);\n  transition: all .2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n@mixin section-title {\n  font-size: 3rem;\n  color: $color-dark;\n  font-family: $font-stack;\n  font-weight: 400;\n}\n\n@mixin card-title {\n  font-family: $font-stack;\n  font-size: 24px;\n  color: $font-color_primary;\n  font-weight: 400;\n}\n\n@mixin paragraph-txt {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: $font-stack;\n  color: $font-color_primary;\n}\n\n","$color-primary: #f4efe7;\n$color-paper: #fcedd9;\n$color-gray: #8d8d8d;\n$color-dark: #3F5069;\n$color-dark-m: #2c3849;\n$color-accent: #ffb108;\n$color-orange: #fa6930;\n$font-color_primary: #000;\n$font-color_light: #fff;","@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n.btn-basic {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  background: #3F5069;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  min-width: 64px;\n  border: none;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s ease-out;\n}\n\n.btn-basic:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.button-panel .button-sign-in {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-panel .button-sign-up {\n  background: #3F5069;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 50px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15), 0 1px 3px 0 rgba(93, 100, 148, 0.2);\n  transition: all 0.2s ease-out;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.button-sign-in:hover,\n.button-sign-up:hover {\n  background-color: #ffb108;\n  box-shadow: 0 8px 22px 0 rgba(37, 44, 97, 0.15), 0 4px 6px 0 rgba(93, 100, 148, 0.2);\n}\n\n.cta-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin-top: 24px;\n  background-color: #fa6930;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: background-color 0.5s ease 0s;\n  text-transform: none;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease-in;\n  -moz-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n  transition: all 0.8s ease 0s;\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n}\n\n.modal:target {\n  opacity: 1;\n  pointer-events: auto;\n  overflow-y: auto;\n  transform: translate(0px, 0px);\n}\n\n.modal:target .form-wrapper {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n\n.modal-dialog {\n  width: 45vw;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n  }\n}\n.overlay__modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.overlay__modal::after {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 100%;\n  content: \"\";\n}\n\n.modal-out-area {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n/* Fonts */\n/* fontawesome */\n[class*=fontawesome-]:before {\n  font-family: \"FontAwesome\", sans-serif;\n}\n\n/* body */\nbody {\n  background: #e9e9e9;\n  color: #5e5e5e;\n}\n\n/* Form Layout */\n.form-wrapper {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(0px, -100%);\n}\n\nh1 {\n  text-align: center;\n  padding: 1em 0;\n}\n\nform {\n  padding: 0 1.5em;\n}\n\n.form-item {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n.form-item input {\n  background: #fafafa;\n  border: none;\n  border-bottom: 2px solid #e9e9e9;\n  color: #666;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1em;\n  height: 50px;\n  transition: border-color 0.3s;\n  width: 100%;\n}\n\n.form-item input:focus {\n  border-bottom: 2px solid #c0c0c0;\n  outline: none;\n}\n\n.button-panel {\n  margin: 2em 0 0;\n  width: 100%;\n}\n\n.form-footer {\n  font-size: 1em;\n  padding: 2em 0;\n  text-align: center;\n}\n\n.form-footer a {\n  color: #8c8c8c;\n  text-decoration: none;\n  transition: border-color 0.3s;\n}\n\n.form-footer a:hover {\n  border-bottom: 1px dotted #8c8c8c;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  padding: 15px;\n}\n\n.close:focus, .close:hover {\n  cursor: pointer;\n  opacity: 0.75;\n}\n\n.signup-link {\n  cursor: pointer;\n}\n\n.signup-link a:focus {\n  color: #2c3849;\n}\n\n.signup-form-container {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em \"Open Sans\", sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(-50%, -60%);\n  display: none;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/* Remove outline on the forms and links */\n:active, :hover, :focus {\n  outline: 0;\n  outline-offset: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.section-title {\n  font-size: 3rem;\n  color: #3F5069;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n}\n\n.card-title {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 24px;\n  color: #000;\n  font-weight: 400;\n}\n\n.paragraph-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.header {\n  background-color: #f4efe7;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.logo {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 2rem;\n  color: #3F5069;\n  padding-left: 10px;\n  margin-left: 10px;\n  border-left: 2px solid #3F5069;\n  cursor: pointer;\n}\n\n.logo:hover {\n  color: #2c3849;\n  transition: all 0.3s ease-in-out;\n}\n\n.header-right {\n  display: flex;\n  align-items: center;\n}\n\n.nav__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  margin-right: 15px;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  position: relative;\n}\n\n.nav-item::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s;\n}\n\n.nav-item:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.nav-link {\n  color: #000;\n}\n\n.active {\n  color: red;\n  pointer-events: none;\n}\n\n.act::after {\n  content: none;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.sticky + .main {\n  padding-top: 80px;\n}\n\n.wrapper {\n  width: 90%;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\nbody {\n  scroll-behavior: smooth;\n  background-color: #f4efe7;\n}\n\n.footer {\n  background-color: #2c3849;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\n.year-box {\n  max-height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.github-box {\n  width: 60vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.github-link {\n  font-family: \"Roboto\", sans-serif;\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  margin-left: 1rem;\n}\n\n.github-link::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #ffb108;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.8s;\n}\n\n.github-link:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.rss-logo {\n  width: 7rem;\n  height: auto;\n}\n\n.rss-logo:hover {\n  filter: invert(29%) sepia(32%) saturate(1382%) hue-rotate(354deg) brightness(103%) contrast(101%);\n  transition: 0.5s;\n}\n\n.wrongPassword {\n  background-color: aqua;\n}\n\n.closeModal {\n  display: none;\n}\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  margin: 0px 8px;\n  background: #3f5069;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  user-select: none;\n  transition: color 0.3s ease 0s;\n  outline: none;\n  cursor: pointer;\n}\n\n.prev-btn:hover,\n.next-btn:hover {\n  background-color: #ffb108;\n}\n\n.active-page {\n  background-color: #ffb108;\n}\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.textbook-list_item {\n  width: 60rem;\n  height: 18rem;\n  display: flex;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 28rem;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.7rem;\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  height: 1.3rem;\n  margin: 0.2rem;\n}\n\n.bnt-bell {\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.groups_list__item {\n  height: 70px;\n  width: 215px;\n  background-color: #3f5069;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.4rem;\n  overflow: hidden;\n  border: none;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n}\n\n.groups_list__item:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.active-group {\n  background-color: #ffb108;\n}\n\n.advantages-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.advantages-content {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6rem;\n  margin-bottom: 7rem;\n}\n\n.adv-card-icon {\n  display: inline-block;\n  margin-bottom: 2rem;\n}\n\n.advantages-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 290px;\n  padding: 40px 20px;\n  flex-wrap: wrap;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n\n.adv-card-title {\n  margin-bottom: 1.5rem;\n}\n\n.adv-card-desc {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n\n.about-photo {\n  width: 273px;\n  height: auto;\n  margin: 0px;\n}\n\n.about-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  row-gap: 3rem;\n  padding: 32px 0px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 7rem;\n}\n\n.about-card {\n  max-width: 67rem;\n  max-height: 16.6rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1.5;\n  background-color: #3F5069;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2.5rem;\n}\n\n.about-name {\n  margin: 0;\n}\n\n.about-subtitle {\n  font-size: \"Roboto\", sans-serif;\n  color: #8d8d8d;\n}\n\n.about-desc {\n  margin: 14px 0px 0px;\n  color: #fff;\n}\n\n.github-icon {\n  max-width: 2.5rem;\n  height: auto;\n  margin: 14px 0 0;\n}\n\n.github-icon:hover {\n  filter: invert(29%) sepia(32%) saturate(1382%) hue-rotate(354deg) brightness(103%) contrast(101%);\n  transition: 0.5s;\n}\n\n.about-name {\n  color: #fff;\n}\n\n#game-page {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  max-width: 1440px;\n  height: 100vh;\n  margin: 8rem 0 10rem 0;\n}\n#game-page #sprint-game-window {\n  width: 100%;\n  height: 100%;\n}\n#game-page #sprint-game-window .sprint-flex-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5rem;\n}\n#game-page #sprint-game-window .sprint-game-timer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #2c3849;\n}\n#game-page #sprint-game-window .sprint-game-timer p {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  font-size: 4rem;\n  color: #f4efe7;\n}\n#game-page #sprint-game-window .sprint-game-window-active {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 70vw;\n  height: 45vh;\n  overflow-x: scroll;\n  margin: 0 auto;\n  padding: 2px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-shrink: 1;\n  padding: 0;\n  margin: 0;\n  flex-direction: row;\n}\n#game-page #sprint-game-window .sprint-game-window-active .sprint-progress .progress {\n  min-width: 35px;\n  height: 35px;\n  padding: 0;\n  border: solid 1px white;\n  border-radius: 5px;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .english-word {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .main-sprint .translate-word {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint {\n  height: 10vh;\n  max-height: 40px;\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  margin-bottom: 3rem;\n  column-gap: 1rem;\n}\n#game-page #sprint-game-window .sprint-game-window-active .btn-sprint #game-btn {\n  font-family: \"Roboto\", sans-serif;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 0 16px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #fa6930;\n  line-height: 1.15;\n  font-size: 14px;\n  height: 36px;\n  word-spacing: 0px;\n  letter-spacing: 0.0892857143em;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.2s ease-out !important;\n}\n\n#game-btn:hover {\n  background: #ffb108 radial-gradient(circle, transparent 1%, #ffb108 1%) center/15000% !important;\n}\n\n#game-btn:active {\n  background-color: #f8c963 !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-no:hover {\n  background: red radial-gradient(circle, transparent 1%, red 1%) center/15000% !important;\n}\n\n#game-btn.btn-no:active {\n  background-color: rgb(247, 160, 160) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n#game-btn.btn-yes:hover {\n  background: greenyellow radial-gradient(circle, transparent 1%, greenyellow 1%) center/15000% !important;\n}\n\n#game-btn.btn-yes:active {\n  background-color: rgb(255, 255, 255) !important;\n  background-size: 100% !important;\n  transition: background 0s !important;\n}\n\n.game-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.result-window {\n  width: 80vw;\n  height: 68vh;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: #3F5069;\n  color: #fff;\n  overflow: scroll;\n  padding: 1.7rem;\n}\n.result-window .gameResult {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 80vw;\n  height: auto;\n  margin: 0.6rem 0 0 0;\n  padding: 0;\n}\n.result-window .gameResult .result-left-side {\n  display: flex;\n}\n.result-window .gameResult .point-result {\n  width: 15px;\n  height: 15px;\n  border-radius: 10px;\n  margin: 10px;\n}\n.result-window .gameResult .result-word-left {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 26vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-align: start;\n}\n.result-window .gameResult .result-word-left .result-word-span {\n  color: #ffb108;\n}\n.result-window .gameResult .result-word {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  width: 37vw;\n  font-family: Roboto, sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  line-height: 4rem;\n  text-align: start;\n}\n.result-window .gameResult .result-word .result-word-span-right {\n  color: greenyellow;\n}\n\n.correct-result-percent {\n  margin: 0 auto;\n  padding: 0;\n}\n.correct-result-percent p {\n  margin: 0;\n  padding: 0;\n}\n\n.true {\n  background-color: greenyellow;\n}\n\n.false {\n  background-color: red;\n}\n\n.sprintGameInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 3rem 6rem 0;\n}\n\n.audioGameInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 0 6rem 3rem;\n}\n\n.game-title-frame {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg.sprint-title-icon {\n  width: 110px;\n  height: 110px;\n}\n\n.game-icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #fcedd9;\n}\n\n.game-title {\n  font-size: 2rem;\n  color: #2c3849;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n\n.game-description {\n  margin: 0 auto;\n  width: 40vw;\n  height: 15vh;\n  text-align: justify;\n  line-height: 2.4rem;\n  letter-spacing: 0.7px;\n  margin-bottom: 3rem;\n}\n\n.game-level-select {\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n  color: #ffb108;\n}\n\n.game-level-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n}\n\n.select-level-audio,\n.select-level-sprint {\n  cursor: pointer;\n  width: 90px;\n  /* min-height: 60px; */\n  /* max-height: 300px; */\n  border-radius: 15px;\n  background-color: rgb(250, 250, 250);\n  box-shadow: 2px 4px 8px #c5c5c5;\n  transition: all 300ms;\n  border: none;\n  padding: 1rem 0 1rem 1.2rem;\n  color: #ffb108;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 900;\n  font-size: 2rem;\n}\n\n.level-option {\n  color: #fff;\n  background-color: #3F5069;\n}\n\n.sad-boy-icon {\n  width: 16vw;\n  height: auto;\n  margin: 6rem auto;\n}\n\n.good-result-icon {\n  width: 10rem;\n  height: 10rem;\n}\n\n.audio-game-window-active {\n  margin-top: -20rem;\n}\n\n.audio-place {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  background: #fffdfd;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n}\n.audio-place .audio-game-icon {\n  width: 180px;\n  height: 180px;\n}\n\n.audio-place:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n  transition: 0.3s;\n}\n\n.btn-audio {\n  display: flex;\n  column-gap: 3rem;\n}\n.btn-audio p {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 1rem 0.7rem;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background: #3F5069;\n  font-size: 16px;\n  height: 50px;\n  letter-spacing: 0.0892857143em;\n  text-transform: uppercase;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-position: center !important;\n  transition: background 0.8s !important;\n  transition: all 0.1s ease-out !important;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n.btn-audio :hover {\n  background: #ffb108 radial-gradient(circle, transparent 1%, #ffb108 1%) center/15000% !important;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: #fff;\n}\n.btn-audio :active {\n  background-color: rgb(255, 255, 255) !important;\n  background-size: 100% !important;\n  transition: background 0.1s !important;\n}\n\n.sprint-game-timer {\n  animation: mymove 5s infinite alternate;\n}\n\n@keyframes mymove {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  25% {\n    background-color: rgba(255, 206, 83, 0.604);\n  }\n  35% {\n    background-color: rgba(247, 126, 46, 0.562);\n  }\n  50% {\n    background-color: rgba(255, 0, 55, 0.451);\n  }\n  75% {\n    background-color: rgba(27, 181, 13, 0.381);\n  }\n  85% {\n    background-color: rgb(138, 187, 200);\n  }\n  100% {\n    background-color: rgba(194, 126, 231, 0.601);\n  }\n}\n.btn-click {\n  background-color: rgb(236, 175, 43) !important;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.hero-content {\n  max-width: 424px;\n  margin: 0 -10rem 20rem 0;\n}\n\n.hero-title {\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 3rem;\n  color: #2c3849;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n\n.hero-subtitle {\n  font-family: \"Roboto\", sans-serif;\n  display: block;\n  margin-top: 8px;\n  color: #8d8d8d;\n}\n\n.hero-text,\n.hero-under-text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n  color: #000;\n  display: block;\n  margin: 16px 0px 0px;\n}\n\n.hero-img-box {\n  width: 700px;\n  margin: 6rem 0rem 7rem 0rem;\n}\n\n.hero-img-guy {\n  width: 30vw;\n  margin-left: 18rem;\n}\n\n.hero-img-girl {\n  width: 30vw;\n  margin-right: 18rem;\n}\n\n.display_none {\n  display: none;\n}\n\n#statistic {\n  width: 100vw;\n  height: 100vh;\n}",".modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 1050;\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease-in; \n  -moz-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n  transition: all 0.8s ease 0s;\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n}\n\n.modal:target {\n  opacity: 1;\n  pointer-events: auto;\n  overflow-y: auto;\n  transform: translate(0px, 0px);\n}\n\n.modal:target .form-wrapper {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n\n.modal-dialog {\n  width: 45vw;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n      max-width: 500px;\n      margin: 30px auto;\n  }\n}\n\n.overlay__modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.overlay__modal::after {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 100%;\n  content: '';\n}\n\n.modal-out-area {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n} \n\n/* Fonts */\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n\n/* fontawesome */\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n[class*=\"fontawesome-\"]:before {\n  font-family: 'FontAwesome', sans-serif;\n}\n\n/* body */\nbody {\n  background: #e9e9e9;\n  color: #5e5e5e;\n}\n\n/* Form Layout */\n.form-wrapper {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em 'Open Sans', sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(0px, -100%);\n}\n\nh1 {\n  text-align: center;\n  padding: 1em 0;\n}\n\nform {\n  padding: 0 1.5em;\n}\n\n.form-item {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n.form-item input {\n  background: #fafafa;\n  border: none;\n  border-bottom: 2px solid #e9e9e9;\n  color: #666;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1em;\n  height: 50px;\n  transition: border-color 0.3s;\n  width: 100%;\n}\n\n.form-item input:focus {\n  border-bottom: 2px solid #c0c0c0;\n  outline: none;\n}\n\n.button-panel {\n  margin: 2em 0 0;\n  width: 100%;\n} \n\n.form-footer {\n  font-size: 1em;\n  padding: 2em 0;\n  text-align: center;\n}\n\n.form-footer a {\n  color: #8c8c8c;\n  text-decoration: none;\n  transition: border-color 0.3s;\n}\n\n.form-footer a:hover {\n  border-bottom: 1px dotted #8c8c8c;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  padding: 15px;\n}\n\n.close:focus, .close:hover {\n  cursor: pointer;\n  opacity: .75;\n}\n\n.signup-link {\ncursor: pointer;\n}\n\n.signup-link a:focus {\n  color: $color-dark-m;\n}\n\n.signup-form-container {\n  position: relative;\n  background: #fafafa;\n  margin: 3em auto;\n  padding: 0 1em;\n  max-width: 370px;\n  font: 400 87.5%/1.5em 'Open Sans', sans-serif;\n  transition: all 0.8s ease 0s;\n  opacity: 0;\n  transform: translate(-50%,-60%);\n  display: none;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/* Remove outline on the forms and links */\n:active, :hover, :focus {\n  outline: 0;\n  outline-offset: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style: none;\n}\n\n* {\n  box-sizing: border-box;\n}","$font-stack: 'Roboto', sans-serif;\n\n.section-title {\n  @include section-title;\n}\n\n.card-title {\n  @include card-title;\n}\n\n.paragraph-text {\n  @include paragraph-txt;\n}",".header {\n  background-color: $color-primary;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n  font-size: 1rem;\n  font-family: $font-stack;\n}\n\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.logo {\n  font-family: $font-stack;\n  font-weight: 700;\n  font-size: 2rem;\n  color: $color-dark;\n  padding-left: 10px;\n  margin-left: 10px;\n  border-left: 2px solid $color-dark;\n  cursor: pointer;\n}\n\n.logo:hover {\n  color: $color-dark-m;\n  transition: all 0.3s ease-in-out;\n}\n\n.header-right {\n  display: flex;\n  align-items: center;\n}\n\n.nav__container{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  margin-right: 15px;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  position: relative;\n}\n\n.nav-item::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: $color-accent;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.5s;\n}\n\n.nav-item:hover::after{\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n\n.nav-link {\n  color: $font-color_primary;\n}\n\n.active {\n  color: red;\n  pointer-events: none;\n}\n\n.act::after {\n  content: none;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%\n}\n\n.sticky + .main {\n  padding-top: 80px;\n}",".wrapper {\n  width: 90%;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\nbody {\n  scroll-behavior: smooth;\n  background-color: $color-primary;\n}",".footer {\n  background-color: $color-dark-m;\n}\n\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: $font-color_light;\n}\n\n.year-box {\n  max-height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: $font-stack;\n}\n\n.github-box {\n  width: 60vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.github-link {\n  font-family: $font-stack;\n  position: relative;\n  color: $font-color_light;\n  text-decoration: none;\n  margin-left: 1rem;\n}\n\n.github-link::after {\n  position: absolute;\n  content: \"\";\n  top: 120%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: $color-accent;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.8s;\n}\n\n.github-link:hover::after{\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.rss-logo {\n  width: 7rem;\n  height: auto;\n}\n\n.rss-logo:hover {\n  filter: invert(29%) sepia(32%) saturate(1382%) hue-rotate(354deg) brightness(103%) contrast(101%);\n  transition: 0.5s;\n}",".wrongPassword {\n  background-color: aqua;\n}\n.closeModal {\n  display: none;\n}","@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    margin: 0px 8px;\n    background: #3f5069;\n    color: #fff;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n    user-select: none;\n    transition: color 0.3s ease 0s;\n    outline: none;\n    cursor: pointer;\n}\n\n.prev-btn:hover,\n.next-btn:hover {\n  background-color: #ffb108;\n}\n\n.active-page {\n  background-color: #ffb108;\n}\n\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.textbook-list_item {\n  width: 60rem;\n  height: 18rem;\n  display: flex;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 28rem;\n  height: 100%;\n  border-radius: 10px;\n  // object-fit: cover;\n  // object-position: center center;\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.7rem;\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  height: 1.3rem;\n  margin: 0.2rem;\n}\n\n.bnt-bell {\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.groups_list__item {\n  height: 70px;\n  width: 215px;\n  background-color: #3f5069;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.4rem;\n  overflow: hidden;\n  border: none;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n}\n\n.groups_list__item:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\n.active-group {\n  background-color: #ffb108;\n}\n\n","// advantages section\n.advantages-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n\n.advantages-content {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6rem;\n  margin-bottom: 7rem;\n}\n\n.adv-card-icon {\n  display: inline-block;\n  margin-bottom: 2rem;\n}\n\n.advantages-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 290px;\n  padding: 40px 20px;\n  flex-wrap: wrap;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n}\n\n.adv-card-title {\n  margin-bottom: 1.5rem;\n}\n\n.adv-card-desc {\n  @include paragraph-txt;\n}\n\n// our team section\n\n.about-photo {\n  width: 273px;\n  height: auto;\n  margin: 0px;\n}\n\n.about-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  row-gap: 3rem;\n  padding: 32px 0px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 7rem;\n}\n\n.about-card {\n  max-width: 67rem;\n  max-height: 16.6rem;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 1.5;\n  background-color: $color-dark;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 2.5rem;\n}\n\n.about-name {\n  margin: 0;\n}\n\n.about-subtitle {\n  font-size: $font-stack;\n  color: $color-gray;\n}\n\n.about-desc {\n  margin: 14px 0px 0px;\n  color: $font-color_light;\n}\n\n.github-icon {\n  max-width: 2.5rem;\n  height: auto;\n  margin: 14px 0 0;\n}\n\n.github-icon:hover {\n  filter: invert(29%) sepia(32%) saturate(1382%) hue-rotate(354deg) brightness(103%) contrast(101%);\n  transition: 0.5s;\n}\n\n.about-name {\n  color: $font-color_light;\n}","#game-page {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  max-width: 1440px;\n  height: 100vh;\n  margin: 8rem 0 10rem 0;\n\n    #sprint-game-window {\n        width: 100%;\n        height: 100%;\n        .sprint-flex-wrapper {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          row-gap: 5rem;\n        }\n        .sprint-game-timer {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          width: 180px;\n          height: 180px;\n          border-radius: 50%;\n          background-color: $color-dark-m;\n            p{\n              margin: 0;\n              padding: 0;\n              font-family: Roboto, sans-serif;\n              font-weight: 400;\n              font-size: 4rem;\n              color: $color-primary;\n            }\n        }\n        .sprint-game-window-active {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: space-between;\n          width: 70vw;\n          height: 45vh;\n          overflow-x: scroll;\n          margin: 0 auto;\n          padding: 2px;\n          border-radius: 10px;\n          box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n          background-color: rgb(255, 255, 255);\n            .sprint-progress {\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-shrink: 1;\n                padding: 0;\n                margin: 0;\n                flex-direction: row;\n                .progress {\n                  min-width: 35px;\n                  height: 35px;\n                  padding: 0;\n                  border: solid 1px white;\n                  border-radius: 5px;\n                }\n            }\n            .main-sprint {\n\n                .english-word {\n                  font-size: 2rem;\n                  font-weight: 400;\n                  line-height: 1.6;\n                  font-family: $font-stack;\n                  color: $font-color_primary;\n                }\n                \n                .translate-word {\n                  font-size: 1rem;\n                  font-weight: 400;\n                  line-height: 1.6;\n                  font-family: $font-stack;\n                  color: $font-color_primary;\n                }\n            }\n            .btn-sprint {\n                height: 10vh;\n                max-height: 40px;\n                display: flex;\n                flex-direction: row;\n                padding: 0;\n                margin-bottom: 3rem;\n                column-gap: 1rem;\n                #game-btn {\n                  font-family: 'Roboto', sans-serif;\n                  display: inline-block;\n                  outline: none;\n                  cursor: pointer;\n                  font-weight: 500;\n                  padding: 0 16px;\n                  border-radius: 4px;\n                  border: none;\n                  color: #fff;\n                  background: $color-orange;\n                  line-height: 1.15;\n                  font-size: 14px;\n                  height: 36px;\n                  word-spacing: 0px;\n                  letter-spacing: .0892857143em;\n                  text-decoration: none;\n                  text-transform: uppercase;\n                  text-align: center;\n                  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n                  background-position: center!important;\n                  transition: background 0.8s!important;\n                  transition: all .2s ease-out!important;\n                }\n            }\n        }\n    }\n}\n\n#game-btn:hover {\n  background: $color-accent radial-gradient(circle, transparent 1%, $color-accent 1%) center/15000%!important;\n}\n\n#game-btn:active {\n  background-color: #f8c963!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n}\n\n#game-btn.btn-no:hover {\n  background: red radial-gradient(circle, transparent 1%, red 1%) center/15000%!important;\n}\n\n#game-btn.btn-no:active {\n  background-color: rgb(247, 160, 160)!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n}\n\n#game-btn.btn-yes:hover {\n  background: greenyellow radial-gradient(circle, transparent 1%, greenyellow 1%) center/15000%!important;\n}\n\n#game-btn.btn-yes:active {\n  background-color: rgb(255, 255, 255)!important;\n  background-size: 100%!important;\n  transition: background 0s!important;\n}\n\n\n.game-result-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 3rem;\n}\n.result-window{\n  width: 80vw;\n  height: 68vh;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  // justify-content: space-around;\n  margin-bottom: 3rem;\n  border-radius: 25px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background-color: #3F5069;\n  color: #fff;\n  overflow: scroll;\n  padding: 1.7rem;\n  \n    .gameResult {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-end;\n        align-items: center;\n        width: 80vw;\n        height: auto;\n        margin: 0.6rem 0 0 0;\n        padding: 0;\n      \n        .result-left-side {\n          display: flex;\n        }\n        .point-result{\n          width: 15px;\n          height: 15px;\n          border-radius: 10px;\n          margin: 10px;\n        }\n        .result-word-left {\n          display: flex;\n          flex-direction: row;\n          column-gap: 1rem;\n          width: 26vw;\n          font-family: Roboto, sans-serif;\n          font-size: 2rem;\n          font-weight: 300;\n          text-align: start;\n          .result-word-span {\n            color: $color-accent;\n          }\n        }\n        .result-word{\n          display: flex;\n          flex-direction: row;\n          column-gap: 1rem;\n          width: 37vw;\n          font-family: Roboto, sans-serif;\n          font-size: 2rem;\n          font-weight: 300;\n          line-height: 4rem;\n          text-align: start;\n          .result-word-span-right {\n            color: greenyellow;\n          }\n        }\n    }\n}\n.correct-result-percent{\n    margin: 0 auto;\n    padding: 0;\n    p{\n        margin: 0;\n        padding: 0;\n    }\n}\n\n.true {\n  background-color: greenyellow;\n}\n\n.false {\n  background-color: red;\n}\n\n.sprintGameInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 3rem 6rem 0;\n}\n.audioGameInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 0 6rem 3rem;\n}\n\n.game-title-frame {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background-color: rgb(255, 255, 255);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nimg.sprint-title-icon {\n  width: 110px;\n  height: 110px;\n}\n\n.game-icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: $color-paper;\n}\n\n.game-title {\n  font-size: 2rem;\n  color: $color-dark-m;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n.game-description {\n  margin: 0 auto;\n  width: 40vw;\n  height: 15vh;\n  text-align: justify;\n  line-height: 2.4rem;\n  letter-spacing: 0.7px;\n  margin-bottom: 3rem;\n}\n\n.game-level-select {\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n  color: $color-accent;\n}\n\n.game-level-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n}\n\n.select-level-audio,\n.select-level-sprint {\n  cursor: pointer;\n    width: 90px;\n    /* min-height: 60px; */\n    /* max-height: 300px; */\n    border-radius: 15px;\n    background-color: rgb(250, 250, 250);\n    box-shadow: 2px 4px 8px #c5c5c5;\n    transition: all 300ms;\n    border: none;\n    padding: 1rem 0 1rem 1.2rem;\n    color: $color-accent;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 900;\n    font-size: 2rem;\n}\n\n.level-option {\n  color: $font-color_light;\n  background-color: $color-dark;\n}\n\n.sad-boy-icon {\n  width: 16vw;\n  height: auto;\n  margin: 6rem auto;\n}\n\n.good-result-icon {\n  width: 10rem;\n  height: 10rem;\n}\n\n\n.audio-game-window-active {\n  margin-top: -20rem;\n}\n\n.audio-place {\n  display: flex;\n  width: 340px;\n  height: 340px;\n  margin: 0 auto;\n  margin-bottom: 3rem;\n  border-radius: 10%;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  background: #fffdfd;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  cursor: pointer;\n\n  .audio-game-icon {\n    width: 180px;\n    height: 180px;\n  }\n}\n\n.audio-place:hover {\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  background-color: $font-color_light;\n  transition: 0.3s;\n}\n\n.btn-audio {\n  display: flex;\n  column-gap: 3rem;\n  p {\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    outline: none;\n    cursor: pointer;\n    font-weight: 500;\n    padding: 1rem 0.7rem;\n    border-radius: 4px;\n    border: none;\n    color: #fff;\n    background: $color-dark;\n    font-size: 16px;\n    height: 50px;\n    letter-spacing: .0892857143em;\n    text-transform: uppercase;\n    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n    background-position: center!important;\n    transition: background 0.8s!important;\n    transition: all 0.1s ease-out!important;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n  }\n  :hover {\n    background: $color-accent radial-gradient(circle, transparent 1%, $color-accent 1%) center/15000%!important;\n    box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n    background-color: $font-color_light;\n    // transition: 0.7s;\n  }\n  \n  :active {\n    background-color: rgb(255, 255, 255)!important;\n    background-size: 100%!important;\n    transition: background 0.1s!important;\n  }\n}\n\n.sprint-game-timer {\n  animation: mymove 5s infinite alternate;\n}\n@keyframes mymove {\n  0% { background-color: rgba(0, 0, 0, 0); }\n  25% { background-color: rgba(255, 206, 83, 0.604); }\n  35% { background-color: rgba(247, 126, 46, 0.562); }\n  50% { background-color: rgba(255, 0, 55, 0.451); }\n  75% { background-color: rgba(27, 181, 13, 0.381); }\n  85% { background-color: rgba(138, 187, 200); }\n  100% { background-color: rgba(194, 126, 231, 0.601); }\n}\n\n.btn-click {\n  background-color:rgb(236 175 43) !important;\n}\n",".hero-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.hero-content {\n  max-width: 424px;\n  margin: 0 -10rem 20rem 0;\n}\n\n.hero-title {\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 3rem;\n  color: $color-dark-m;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n\n.hero-subtitle {\n  font-family: $font-stack;\n  display: block;\n  margin-top: 8px;\n  color: $color-gray;\n}\n\n.hero-text,\n.hero-under-text {\n  @include paragraph-txt;\n  display: block;\n  margin: 16px 0px 0px;\n}\n\n.hero-img-box {\n  width: 700px;\n  margin: 6rem 0rem 7rem 0rem;\n}\n\n.hero-img-guy {\n  width: 30vw;\n  margin-left: 18rem;\n}\n\n.hero-img-girl {\n  width: 30vw;\n  margin-right: 18rem;\n}",".display_none {\n    display: none;\n}\n#statistic {\n    width: 100vw;\n    height: 100vh;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".wrongPassword {\n  background-color: aqua;\n}\n\n.closeModal {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./styles/sass/pages/_authorization.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AACA;EACE,aAAA;AAEF","sourcesContent":[".wrongPassword {\n  background-color: aqua;\n}\n.closeModal {\n  display: none;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  margin: 0px 8px;\n  background: #3f5069;\n  color: #fff;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  user-select: none;\n  transition: color 0.3s ease 0s;\n  outline: none;\n  cursor: pointer;\n}\n\n.prev-btn:hover,\n.next-btn:hover {\n  background-color: #ffb108;\n}\n\n.active-page {\n  background-color: #ffb108;\n}\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.textbook-list_item {\n  width: 60rem;\n  height: 18rem;\n  display: flex;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 28rem;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.7rem;\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  height: 1.3rem;\n  margin: 0.2rem;\n}\n\n.bnt-bell {\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.groups_list__item {\n  height: 70px;\n  width: 215px;\n  background-color: #3f5069;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.4rem;\n  overflow: hidden;\n  border: none;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  border-radius: 10px;\n}\n\n.groups_list__item:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.active-group {\n  background-color: #ffb108;\n}", "",{"version":3,"sources":["webpack://./styles/sass/pages/_textbook.scss"],"names":[],"mappings":"AAGA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,UAAA;EACA,qBAAA;AAAF;;AAGA;;;EAGI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,uDAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,4CAAA;EACA,iBAAA;EACA,8BAAA;EACA,aAAA;EACA,eAAA;AAAJ;;AAGA;;EAEE,yBAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAIA;EACE,UAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AADF;;AAIA;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,4CAAA;EACA,mBAAA;EACA,UAAA;EACA,oCAAA;EACA,WAAA;EACA,mBAAA;EACA,uDAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AADF;;AAIA;;;EAGE,yBAAA;AADF;;AAIA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AADF;;AAMA;EACE,aAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AAHF;;AAMA;EACE,WAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAHF;;AAMA;EACE,aAAA;EACA,eAAA;AAHF;;AAMA;EACE,8BAAA;EACA,kBAAA;AAHF;;AAMA;;;;;;EAME,SAAA;AAHF;;AAMA;EACE,eAAA;EACA,0BAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;AAHF;;AAMA;EACE,eAAA;EACA,iBAAA;EACA,oBAAA;EACA,gBAAA;AAHF;;AAMA;EACE,cAAA;EACA,cAAA;AAHF;;AAMA;EACE,iBAAA;EACA,cAAA;EACA,cAAA;EACA,0BAAA;AAHF;;AAMA;EACE,eAAA;EACA,OAAA;EACA,MAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,8BAAA;AAHF;;AAMA;EACE,YAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,+BAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;EACA,4CAAA;EACA,mBAAA;AAHF;;AAMA;EACE,mBAAA;EACA,0HAAA;AAHF;;AAMA;EACE,yBAAA;AAHF","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);\n@import url(http://weloveiconfonts.com/api/?family=fontawesome);\n\n#pagination {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  list-style-type: none;\n}\n\n.pagination_number,\n.prev-btn,\n.next-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    margin: 0px 8px;\n    background: #3f5069;\n    color: #fff;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    border-radius: 10px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n    user-select: none;\n    transition: color 0.3s ease 0s;\n    outline: none;\n    cursor: pointer;\n}\n\n.prev-btn:hover,\n.next-btn:hover {\n  background-color: #ffb108;\n}\n\n.active-page {\n  background-color: #ffb108;\n}\n\n\n.textbook-list {\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n\n.textbook-list_item {\n  width: 60rem;\n  height: 18rem;\n  display: flex;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n  padding: 0;\n  background-color: rgb(250, 252, 254);\n  color: #000;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\n\n.translate,\n.description-translate,\n.example-translate {\n  color: rgb(136, 136, 136);\n}\n\n.textbook-card-img {\n  width: 28rem;\n  height: 100%;\n  border-radius: 10px;\n  // object-fit: cover;\n  // object-position: center center;\n}\n\n.textbook-list_item__wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: 1.2rem;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.7rem;\n}\n\n.upper_card-row {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.word-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.upper_card-box {\n  border-left: 3px solid #3f5069;\n  padding-left: 23px;\n}\n\n.word,\np.description,\np.description-translate,\np.example,\np.example-translate,\np.transcription {\n  margin: 0;\n}\n\nh2.word {\n  display: inline;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 28px;\n}\n\np.transcription {\n  display: inline;\n  font-size: 1.2rem;\n  text-transform: none;\n  font-weight: 300;\n}\n\n.bnt-textbook {\n  height: 1.3rem;\n  margin: 0.2rem;\n}\n\n.bnt-bell {\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.2rem;\n  padding: 0 0 0.2rem 0.2rem;\n}\n\n.groups {\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.groups_list__item {\n  height: 70px;\n  width: 215px;\n  background-color: #3f5069;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  border-radius: 3px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: #fff;\n  line-height: 1.15;\n  font-size: 1.4rem;\n  overflow: hidden;\n  border: none;\n  cursor: pointer;\n  transition: all easy 0.5s;\n  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\n  border-radius: 10px;\n}\n\n.groups_list__item:hover {\n  background: #ffb108;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}\n\n.active-group {\n  background-color: #ffb108;\n}\n\n"],"sourceRoot":""}]);
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