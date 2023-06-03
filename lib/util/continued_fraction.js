"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.best_r = best_r;
var _bignumber = _interopRequireDefault(require("bignumber.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2hlg4yoewk() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\util\\continued_fraction.js";
  var hash = "cb944c1fa0c5c2d8ec5f7c6569ea16992faa39d9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\util\\continued_fraction.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 37
        }
      },
      "1": {
        start: {
          line: 14,
          column: 15
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "2": {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "3": {
        start: {
          line: 21,
          column: 10
        },
        end: {
          line: 21,
          column: 11
        }
      },
      "4": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "5": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "6": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 12
        }
      },
      "7": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 51
        }
      },
      "8": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 24
        }
      },
      "9": {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 30,
          column: 68
        }
      },
      "10": {
        start: {
          line: 31,
          column: 14
        },
        end: {
          line: 31,
          column: 68
        }
      },
      "11": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "12": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 12
        }
      },
      "13": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 27
        }
      },
      "14": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "15": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 12
        }
      },
      "16": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 37
        }
      },
      "17": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 11
        }
      },
      "18": {
        start: {
          line: 42,
          column: 17
        },
        end: {
          line: 42,
          column: 48
        }
      },
      "19": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "20": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 51
        }
      },
      "21": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "best_r",
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 22
          }
        },
        loc: {
          start: {
            line: 13,
            column: 34
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 32
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 21
          }
        }, {
          start: {
            line: 32,
            column: 25
          },
          end: {
            line: 32,
            column: 38
          }
        }],
        line: 32
      },
      "3": {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 36
      },
      "4": {
        loc: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 44
      },
      "5": {
        loc: {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 30
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 16
          }
        }, {
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 44,
            column: 30
          }
        }],
        line: 44
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cb944c1fa0c5c2d8ec5f7c6569ea16992faa39d9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hlg4yoewk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hlg4yoewk();
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// eslint-disable-next-line no-bitwise
var MAX_INT = (cov_2hlg4yoewk().s[0]++, (1 << 31 >>> 0) - 1);

/**
 * Calculates and returns the best rational approximation of the given real number.
 * @private
 * @param {string|number|BigNumber} rawNumber Real number
 * @throws Error Throws `Error` when the best rational approximation cannot be found.
 * @returns {array} first element is n (numerator), second element is d (denominator)
 */
function best_r(rawNumber) {
  cov_2hlg4yoewk().f[0]++;
  var number = (cov_2hlg4yoewk().s[1]++, new _bignumber["default"](rawNumber));
  var a;
  var f;
  var fractions = (cov_2hlg4yoewk().s[2]++, [[new _bignumber["default"](0), new _bignumber["default"](1)], [new _bignumber["default"](1), new _bignumber["default"](0)]]);
  var i = (cov_2hlg4yoewk().s[3]++, 2);

  // eslint-disable-next-line no-constant-condition
  cov_2hlg4yoewk().s[4]++;
  while (true) {
    cov_2hlg4yoewk().s[5]++;
    if (number.gt(MAX_INT)) {
      cov_2hlg4yoewk().b[0][0]++;
      cov_2hlg4yoewk().s[6]++;
      break;
    } else {
      cov_2hlg4yoewk().b[0][1]++;
    }
    cov_2hlg4yoewk().s[7]++;
    a = number.integerValue(_bignumber["default"].ROUND_FLOOR);
    cov_2hlg4yoewk().s[8]++;
    f = number.minus(a);
    var h = (cov_2hlg4yoewk().s[9]++, a.times(fractions[i - 1][0]).plus(fractions[i - 2][0]));
    var k = (cov_2hlg4yoewk().s[10]++, a.times(fractions[i - 1][1]).plus(fractions[i - 2][1]));
    cov_2hlg4yoewk().s[11]++;
    if ((cov_2hlg4yoewk().b[2][0]++, h.gt(MAX_INT)) || (cov_2hlg4yoewk().b[2][1]++, k.gt(MAX_INT))) {
      cov_2hlg4yoewk().b[1][0]++;
      cov_2hlg4yoewk().s[12]++;
      break;
    } else {
      cov_2hlg4yoewk().b[1][1]++;
    }
    cov_2hlg4yoewk().s[13]++;
    fractions.push([h, k]);
    cov_2hlg4yoewk().s[14]++;
    if (f.eq(0)) {
      cov_2hlg4yoewk().b[3][0]++;
      cov_2hlg4yoewk().s[15]++;
      break;
    } else {
      cov_2hlg4yoewk().b[3][1]++;
    }
    cov_2hlg4yoewk().s[16]++;
    number = new _bignumber["default"](1).div(f);
    cov_2hlg4yoewk().s[17]++;
    i += 1;
  }
  var _ref = (cov_2hlg4yoewk().s[18]++, fractions[fractions.length - 1]),
    _ref2 = _slicedToArray(_ref, 2),
    n = _ref2[0],
    d = _ref2[1];
  cov_2hlg4yoewk().s[19]++;
  if ((cov_2hlg4yoewk().b[5][0]++, n.isZero()) || (cov_2hlg4yoewk().b[5][1]++, d.isZero())) {
    cov_2hlg4yoewk().b[4][0]++;
    cov_2hlg4yoewk().s[20]++;
    throw new Error("Couldn't find approximation");
  } else {
    cov_2hlg4yoewk().b[4][1]++;
  }
  cov_2hlg4yoewk().s[21]++;
  return [n.toNumber(), d.toNumber()];
}