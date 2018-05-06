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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var GET_VIDEO_DETAIL_FROM_ID = exports.GET_VIDEO_DETAIL_FROM_ID = 'GET_VIDEO_DETAIL_FROM_ID';
var GET_NEWES_VIDEO = exports.GET_NEWES_VIDEO = 'GET_NEWES_VIDEO';
var GET_RELATED_VIDEO = exports.GET_RELATED_VIDEO = 'GET_RELATED_VIDEO';
var GET_TRENDING_VIDEO = exports.GET_TRENDING_VIDEO = 'GET_TRENDING_VIDEO';
var GET_TRENDING_MUSIC = exports.GET_TRENDING_MUSIC = 'GET_TRENDING_MUSIC';
var GET_TRENDING_MOVIE = exports.GET_TRENDING_MOVIE = 'GET_TRENDING_MOVIE';
var GET_TRENDING_GAME = exports.GET_TRENDING_GAME = 'GET_TRENDING_GAME';
var GET_TRENDING_SPORT = exports.GET_TRENDING_SPORT = 'GET_TRENDING_SPORT';
var GET_SEARCH = exports.GET_SEARCH = 'GET_SEARCH';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_search = exports.get_trending_sport = exports.get_trending_game = exports.get_trending_movie = exports.get_trending_music = exports.get_trending_video = exports.get_related_video = exports.get_newest_video = exports.get_player = undefined;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

var _callAPI = __webpack_require__(15);

var _callAPI2 = _interopRequireDefault(_callAPI);

var _syncData = __webpack_require__(16);

var _syncData2 = _interopRequireDefault(_syncData);

var _getRelated = __webpack_require__(18);

var _getRelated2 = _interopRequireDefault(_getRelated);

var _trendingAPI = __webpack_require__(19);

var _trendingAPI2 = _interopRequireDefault(_trendingAPI);

var _trendingCategory = __webpack_require__(20);

var _trendingCategory2 = _interopRequireDefault(_trendingCategory);

var _searchAPI = __webpack_require__(21);

var _searchAPI2 = _interopRequireDefault(_searchAPI);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var get_player = exports.get_player = function get_player(id) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _callAPI2.default)(id);

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: Type.GET_VIDEO_DETAIL_FROM_ID,
                                player: res.data
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};

var get_newest_video = exports.get_newest_video = function get_newest_video() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _axios2.default.get('https://backend-video.herokuapp.com/video/get/8');

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: Type.GET_NEWES_VIDEO,
                                newest: res.data
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var get_related_video = exports.get_related_video = function get_related_video(id) {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return (0, _getRelated2.default)(id);

                        case 2:
                            res = _context3.sent;

                            dispatch({
                                type: Type.GET_RELATED_VIDEO,
                                related: res.data
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();
};

var get_trending_video = exports.get_trending_video = function get_trending_video() {
    return function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return (0, _trendingAPI2.default)();

                        case 2:
                            res = _context4.sent;

                            dispatch({
                                type: Type.GET_TRENDING_VIDEO,
                                trending: res.data
                            });

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function (_x7, _x8) {
            return _ref4.apply(this, arguments);
        };
    }();
};

var get_trending_music = exports.get_trending_music = function get_trending_music() {
    return function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return (0, _trendingCategory2.default)('10');

                        case 2:
                            res = _context5.sent;

                            dispatch({
                                type: Type.GET_TRENDING_MUSIC,
                                music: res.data
                            });

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function (_x9, _x10) {
            return _ref5.apply(this, arguments);
        };
    }();
};

var get_trending_movie = exports.get_trending_movie = function get_trending_movie() {
    return function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return (0, _trendingCategory2.default)('1');

                        case 2:
                            res = _context6.sent;

                            dispatch({
                                type: Type.GET_TRENDING_MOVIE,
                                movie: res.data
                            });

                        case 4:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined);
        }));

        return function (_x11, _x12) {
            return _ref6.apply(this, arguments);
        };
    }();
};

var get_trending_game = exports.get_trending_game = function get_trending_game() {
    return function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return (0, _trendingCategory2.default)('20');

                        case 2:
                            res = _context7.sent;

                            dispatch({
                                type: Type.GET_TRENDING_GAME,
                                game: res.data
                            });

                        case 4:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined);
        }));

        return function (_x13, _x14) {
            return _ref7.apply(this, arguments);
        };
    }();
};

var get_trending_sport = exports.get_trending_sport = function get_trending_sport() {
    return function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return (0, _trendingCategory2.default)('17');

                        case 2:
                            res = _context8.sent;

                            dispatch({
                                type: Type.GET_TRENDING_SPORT,
                                sport: res.data
                            });

                        case 4:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, undefined);
        }));

        return function (_x15, _x16) {
            return _ref8.apply(this, arguments);
        };
    }();
};

var get_search = exports.get_search = function get_search(key) {
    return function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch, getState) {
            var res;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return (0, _searchAPI2.default)(key);

                        case 2:
                            res = _context9.sent;

                            dispatch({
                                type: Type.GET_SEARCH,
                                search: res.data
                            });

                        case 4:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, undefined);
        }));

        return function (_x17, _x18) {
            return _ref9.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    })]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(26);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(6);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(40);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('/', function (req, res) {
    var store = (0, _createStore2.default)(req);
    console.log(store);

    _Routes2.default[0].routes[0].trending_movie(store);
    _Routes2.default[0].routes[0].newest_video(store);
    _Routes2.default[0].routes[0].trending_video(store);
    _Routes2.default[0].routes[0].trending_music(store);
    //Routes[0].routes[0].trending_sport(store);
    //Routes[0].routes[0].trending_game(store);

    setTimeout(function () {
        res.send((0, _renderer2.default)(req, store));
    }, 2000);
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(4);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(6);

var _serializeJavascript = __webpack_require__(25);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));
    return '\n        <html>\n            <head>\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(5);

var _home = __webpack_require__(41);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_home2.default, null)
            );
        }
    }]);

    return HomePage;
}(_react.Component);

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function newest_video(store) {
    return store.dispatch((0, _index.get_newest_video)());
}

function trending_video(store) {
    return store.dispatch((0, _index.get_trending_video)());
}

function trending_music(store) {
    return store.dispatch((0, _index.get_trending_music)());
}

function trending_movie(store) {
    return store.dispatch((0, _index.get_trending_movie)());
}

function trending_game(store) {
    return store.dispatch((0, _index.get_trending_game)());
}

function trending_sport(store) {
    return store.dispatch((0, _index.get_trending_sport)());
}

exports.default = {
    newest_video: newest_video,
    trending_video: trending_video,
    trending_music: trending_music,
    trending_movie: trending_movie,
    trending_game: trending_game,
    trending_sport: trending_sport,
    component: (0, _reactRedux.connect)(mapStateToProps, { get_newest_video: _index.get_newest_video, get_trending_video: _index.get_trending_video, get_trending_music: _index.get_trending_music, get_trending_movie: _index.get_trending_movie, get_trending_game: _index.get_trending_game, get_trending_sport: _index.get_trending_sport })(HomePage)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = callApi;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callApi(id) {
    return (0, _axios2.default)({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY%20&part=snippet,contentDetails,statistics,status'
    }).catch(function (err) {
        throw err;
    });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = syncData;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(17);

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syncData(endpoint) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var body = arguments[2];
    var token = arguments[3];

    return (0, _axios2.default)({
        method: method,
        url: '' + config.BASE_URL + endpoint,
        data: body,
        headers: { 'token': token }
    }).catch(function (err) {
        throw err;
    });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URL = exports.BASE_URL = 'https://backend-video.herokuapp.com/';

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getRelated;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelated(id) {
    return (0, _axios2.default)({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=' + id + '&type=video&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY&maxResults=50'
    }).catch(function (err) {
        throw err;
    });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = trendingAPI;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trendingAPI(id) {
    return (0, _axios2.default)({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics,status&chart=mostPopular&regionCode=VN&maxResults=50&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY'
    }).catch(function (err) {
        throw err;
    });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getRelated;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelated(id) {
    return (0, _axios2.default)({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics,status&chart=mostPopular&regionCode=VN&videoCategoryId=' + id + '&maxResults=50&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY'
    }).catch(function (err) {
        throw err;
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = searchAPI;

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchAPI(key) {
    return (0, _axios2.default)({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + key + '&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY&maxResults=6'
    }).catch(function (err) {
        throw err;
    });
};

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(6);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'React SSR'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/users' },
                'Users'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/admins' },
                'Admins'
            )
        )
    );
};

function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(27);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(28);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _usersReducer = __webpack_require__(29);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(30);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _player = __webpack_require__(31);

var _player2 = _interopRequireDefault(_player);

var _newest = __webpack_require__(32);

var _newest2 = _interopRequireDefault(_newest);

var _related = __webpack_require__(33);

var _related2 = _interopRequireDefault(_related);

var _trending = __webpack_require__(34);

var _trending2 = _interopRequireDefault(_trending);

var _music = __webpack_require__(35);

var _music2 = _interopRequireDefault(_music);

var _movie = __webpack_require__(36);

var _movie2 = _interopRequireDefault(_movie);

var _game = __webpack_require__(37);

var _game2 = _interopRequireDefault(_game);

var _sport = __webpack_require__(38);

var _sport2 = _interopRequireDefault(_sport);

var _search = __webpack_require__(39);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _usersReducer2.default,
    auth: _authReducer2.default,
    player: _player2.default,
    newest: _newest2.default,
    related: _related2.default,
    trending: _trending2.default,
    music: _music2.default,
    movie: _movie2.default,
    game: _game2.default,
    sport: _sport2.default,
    search: _search2.default
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case Type.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case Type.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
    kind: 'youtube#videoListResponse',
    etag: '"RmznBCICv9YtgWaaa_nWDIH1_GM/KeOik9Ri5nMPZgjDLHtO3tGN6Pc"',
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
    },
    items: []
};
var player = function player() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_VIDEO_DETAIL_FROM_ID:
            state = action.player;
    }
    return state;
};

exports.default = player;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];
var newest = function newest() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_NEWES_VIDEO:
            state = action.newest;
    }
    return state;
};

exports.default = newest;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
    items: []
};
var related = function related() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_RELATED_VIDEO:
            state = action.related;
    }
    return state;
};

exports.default = related;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];

var trending = function trending() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_TRENDING_VIDEO:
            state = action.trending.items;
    }
    return state;
};

exports.default = trending;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];

var music = function music() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_TRENDING_MUSIC:
            state = action.music.items;
    }
    return state;
};

exports.default = music;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];

var movie = function movie() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_TRENDING_MOVIE:
            state = action.movie.items;
    }
    return state;
};

exports.default = movie;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];

var game = function game() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_TRENDING_GAME:
            state = action.game.items;
    }
    return state;
};

exports.default = game;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];

var sport = function sport() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_TRENDING_SPORT:
            state = action.sport.items;
    }
    return state;
};

exports.default = sport;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = __webpack_require__(0);

var Type = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = [];

var search = function search() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case Type.GET_SEARCH:
            state = action.search.items;
    }
    return state;
};

exports.default = search;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _data = __webpack_require__(42);

var constants = _interopRequireWildcard(_data);

var _functions = __webpack_require__(43);

var functions = _interopRequireWildcard(_functions);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(5);

var act = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                trending = _props.trending,
                music = _props.music,
                movie = _props.movie,
                game = _props.game,
                sport = _props.sport;


            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'wrap' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 25, fontWeight: 'bold' } },
                            'Ph\u1ED5 bi\u1EBFn nh\u1EA5t'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row', style: { marginTop: 10 } },
                            _react2.default.createElement(
                                'div',
                                { className: 'col l12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    trending.length > 0 ? this.renderData(trending) : _react2.default.createElement('div', null)
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 25, fontWeight: 'bold' } },
                            '\xC2m Nh\u1EA1c'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row', style: { marginTop: 10 } },
                            trending.length > 0 ? this.renderData(music) : _react2.default.createElement('div', null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 25, fontWeight: 'bold' } },
                            'Phim'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row', style: { marginTop: 10 } },
                            trending.length > 0 ? this.renderData(movie) : _react2.default.createElement('div', null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 25, fontWeight: 'bold' } },
                            'Th\u1EC3 thao'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row', style: { marginTop: 10 } },
                            trending.length > 0 ? this.renderData(sport) : _react2.default.createElement('div', null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 25, fontWeight: 'bold' } },
                            'Tr\xF2 ch\u01A1i'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row', style: { marginTop: 10 } },
                            trending.length > 0 ? this.renderData(game) : _react2.default.createElement('div', null)
                        )
                    )
                )
            );
        }
    }, {
        key: 'renderData',
        value: function renderData(data) {
            var _this2 = this;

            var result = null;
            result = data.map(function (value, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'col l2', key: index, style: { marginTop: 30 } },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/view/' + functions.xoa_dau(value.snippet.title) + '/' + value.id, style: { color: 'inherit' } },
                        _react2.default.createElement('img', { src: value.snippet.thumbnails.medium.url, style: { width: '100%', height: '100%' } }),
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 14, fontWeight: 'bold', textAlign: 'justify' } },
                            value.snippet.title.length > 15 ? value.snippet.title.substring(0, 15) + '...' : value.snippet.title
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 14 } },
                            value.snippet.channelTitle.length > 18 ? value.snippet.channelTitle.substring(0, 18) + '...' : value.snippet.channelTitle
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'row', style: { fontSize: 14 } },
                            _this2.showViewCount(value.statistics.viewCount)
                        )
                    )
                );
            });
            return result;
        }
    }, {
        key: 'showViewCount',
        value: function showViewCount(data) {
            if (data / 1000 > 0 && data / 1000 < 1000) {
                return (data / 1000).toFixed(1) + ' Ngh\xECn views';
            } else if (data / 1000000 > 0 && data / 1000000 < 1000) {
                return (data / 1000000).toFixed(1) + ' Tri\u1EC7u views';
            }
        }
    }]);

    return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        newest: state.newest,
        trending: state.trending,
        music: state.music,
        movie: state.movie,
        game: state.game,
        sport: state.sport
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Home);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = exports.data = [{
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/tQxJ5bmS495Gn7Esk_QLtDr83gI\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/V85mQxXexyj364rf2gPUc_CQls4\"",
        "id": "7lCDEYXw3mM",
        "snippet": {
            "publishedAt": "2012-06-20T23:12:38.000Z",
            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            "title": "Google I/O 101: Q&A On Using Google APIs",
            "description": "Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Google Developers",
            "tags": ["api", "gdl", "i-o"],
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Google I/O 101: Q&A On Using Google APIs",
                "description": "Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0."
            }
        },
        "contentDetails": {
            "duration": "PT15M51S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "8413",
            "likeCount": "46",
            "dislikeCount": "2",
            "favoriteCount": "0",
            "commentCount": "3"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/O9eU_RZWRexl3e9zE_Yq1Jp5HLk\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/Y6FIrYIysACGORKtNCj6Mnk689E\"",
        "id": "xlGdXDthL2w",
        "snippet": {
            "publishedAt": "2011-05-13T18:02:46.000Z",
            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            "title": "Google I/O 2011: Google Tasks API",
            "description": "David Tattersall, Fabian Schlup,  Andreas Signer, Nicolas Garnier\r\n\r\nThe Google Tasks team have been hard at work and are proud to announce the Google Tasks API! We will introduce the new API and show you how to build awesome applications using it.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Google Developers",
            "tags": ["Tasks", "Tasks API", "API", "Enterprise", "Interop"],
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Google I/O 2011: Google Tasks API",
                "description": "David Tattersall, Fabian Schlup,  Andreas Signer, Nicolas Garnier\r\n\r\nThe Google Tasks team have been hard at work and are proud to announce the Google Tasks API! We will introduce the new API and show you how to build awesome applications using it."
            }
        },
        "contentDetails": {
            "duration": "PT51M9S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "10975",
            "likeCount": "49",
            "dislikeCount": "1",
            "favoriteCount": "0",
            "commentCount": "8"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}];

var related = exports.related = [{
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/tQxJ5bmS495Gn7Esk_QLtDr83gI\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/V85mQxXexyj364rf2gPUc_CQls4\"",
        "id": "7lCDEYXw3mM",
        "snippet": {
            "publishedAt": "2012-06-20T23:12:38.000Z",
            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            "title": "Google I/O 101: Q&A On Using Google APIs",
            "description": "Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Google Developers",
            "tags": ["api", "gdl", "i-o"],
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Google I/O 101: Q&A On Using Google APIs",
                "description": "Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0."
            }
        },
        "contentDetails": {
            "duration": "PT15M51S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "8413",
            "likeCount": "46",
            "dislikeCount": "2",
            "favoriteCount": "0",
            "commentCount": "3"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/O9eU_RZWRexl3e9zE_Yq1Jp5HLk\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/Y6FIrYIysACGORKtNCj6Mnk689E\"",
        "id": "xlGdXDthL2w",
        "snippet": {
            "publishedAt": "2011-05-13T18:02:46.000Z",
            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            "title": "Google I/O 2011: Google Tasks API",
            "description": "David Tattersall, Fabian Schlup,  Andreas Signer, Nicolas Garnier\r\n\r\nThe Google Tasks team have been hard at work and are proud to announce the Google Tasks API! We will introduce the new API and show you how to build awesome applications using it.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/xlGdXDthL2w/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Google Developers",
            "tags": ["Tasks", "Tasks API", "API", "Enterprise", "Interop"],
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Google I/O 2011: Google Tasks API",
                "description": "David Tattersall, Fabian Schlup,  Andreas Signer, Nicolas Garnier\r\n\r\nThe Google Tasks team have been hard at work and are proud to announce the Google Tasks API! We will introduce the new API and show you how to build awesome applications using it."
            }
        },
        "contentDetails": {
            "duration": "PT51M9S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "10975",
            "likeCount": "49",
            "dislikeCount": "1",
            "favoriteCount": "0",
            "commentCount": "8"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}, {
    "kind": "youtube#videoListResponse",
    "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/_bpVq3WIkjjpj1a-9BcRjq2OvL0\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [{
        "kind": "youtube#video",
        "etag": "\"RmznBCICv9YtgWaaa_nWDIH1_GM/AHoT-KnMP6wASVwlHtLbS0ObusE\"",
        "id": "PSq6IAFckM8",
        "snippet": {
            "publishedAt": "2014-09-24T13:31:45.000Z",
            "channelId": "UCtXHg_2dlsRnhIETY3peGYw",
            "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
            "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Love And Music",
            "tags": ["nhac phim trung quoc", "nhac hoa", "nhac phim co trang trung quoc", "nhac hoa hay nhat", "nhac phim co trang trung quoc buon va lang man nhat", "nhac phim trung quoc hay nhat", "nhung ca khuc nhac hoa hay nhat", "nhac hoa buon nhat"],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1",
                "description": "☞☞Video nhạc mới cũng rất hay và buồn mời cả nhà cùng thưởng thức và ủng hộ ạ! https://www.youtube.com/watch?v=4y3Ln2-P4kchttp://bit.ly/khuyenmaisieukunglazada\n☞  Những Bản Nhạc Phim Trung Quốc Buồn Nhất - NGHE là KHÓC - cả nhà cùng nghe nhé: https://www.youtube.com/watch?v=9Ke1OpVLkhE\nNhững Ca Khúc Nhạc Hoa Trong Phim Làm Bạn Khóc ll Phần 1\nNhững Ca Khúc Hay Nhất Trong Phim Cổ Trang Trung Quốc - Phần 1\nNhung ca khuc hay nhat trong phim co trang Trung Quoc\n========================================\n===================================\nTag Video:\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\ndan tranh,nhac tieng anh soi dong,nhac hoa,hoa tau dan tranh,nhạc phim trung quốc hay nhất,hoa tau sao truc,nhac phim trung quoc,đàn tranh,nhung ca khuc nhac hoa hay nhat,những bài hát trung quốc hay nhất,nhac hoa,nhac trung quoc,nhac hoa hay nhat,nhac hoa bat hu,nhac hoa noi tieng,nhac trung quoc,hoa tau,hòa tấu đàn tranh,nhac hoa tau,nhac hoa hay,nhac sao truc hay nhat,sao truc,Ngan le Sau\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa hay,nhạc sáo trúc hay nhất,sáo trúc\nđàn tranh,nhạc tiếng anh sôi động,nhạc hoa,hòa tấu đàn tranh,nhạc phim trung quốc hay nhất,hòa tấu sáo trúc,nhạc phim trung quốc,đàn tranh,những ca khúc nhạc hoa hay nhất,những bài hát trung quốc hay nhất,nhạc hoa,nhạc trung quốc,nhạc hoa hay nhất,nhạc hoa bất hủ,nhạc hoa nổi tiếng,nhạc trung quốc,hòa tấu,hòa tấu đàn tranh,nhạc hòa tấu,nhạc hoa ha\n================================================================================\nTrack List:\nList nhạc và mốc thời gian đây nha cả nhà! (cảm ơn bạn David Ochi nhé) :3\n00:00 Tuý hồng nhan\n03:02 Thề ngôn\n07:40 Hoạ tình\n13:05 Tương tư dẫn\n17:36 Hồ ly trắng\n22:42 Hoa rơi\n26:00 Kiếm hiệp tình duyên\n30:12 Hoạ tâm\n34:26 Thiên long bát bộ\n38:00 Châm thượng thư\n43:00 Cung dưỡng ái tình (Mute)\n46:34 Lệ ngàn năm\n50:36 Quá giới hạn\n55:40 Là em tự đa tình\n1:00:27 Lương Sơn Bá - Chúc Anh Đài"
            }
        },
        "contentDetails": {
            "duration": "PT1H5M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "projection": "rectangular"
        },
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        },
        "statistics": {
            "viewCount": "3803648",
            "likeCount": "17146",
            "dislikeCount": "1426",
            "favoriteCount": "0",
            "commentCount": "1779"
        }
    }]
}];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var xoa_dau = exports.xoa_dau = function xoa_dau(title) {
    var str = title;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    str = str.replace(/\s+/g, ' ');
    str.trim();
    for (var i = 0; i < str.length / 4; i++) {
        str = str.replace(/ /, '-');
    }
    return str;
};

/***/ })
/******/ ]);