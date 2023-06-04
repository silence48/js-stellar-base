"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionBase = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _hashing = require("./hashing");
var _keypair = require("./keypair");
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2qrmp2lcrq() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\transaction_base.js";
  var hash = "ef72f361a5e9a27617b7768a2f75c1acea00cd82";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\transaction_base.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "1": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 14,
          column: 8
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 48
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 18
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 34
        }
      },
      "5": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 20
        }
      },
      "6": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 28
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 48
        }
      },
      "8": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 20
        }
      },
      "9": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 48
        }
      },
      "10": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 21
        }
      },
      "11": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 48
        }
      },
      "12": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 35
        }
      },
      "13": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 48
        }
      },
      "14": {
        start: {
          line: 73,
          column: 19
        },
        end: {
          line: 73,
          column: 30
        }
      },
      "15": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 77,
          column: 7
        }
      },
      "16": {
        start: {
          line: 75,
          column: 18
        },
        end: {
          line: 75,
          column: 42
        }
      },
      "17": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 76,
          column: 32
        }
      },
      "18": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 103,
          column: 56
        }
      },
      "19": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      "20": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 132,
          column: 43
        }
      },
      "21": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 137,
          column: 5
        }
      },
      "22": {
        start: {
          line: 136,
          column: 6
        },
        end: {
          line: 136,
          column: 43
        }
      },
      "23": {
        start: {
          line: 141,
          column: 28
        },
        end: {
          line: 141,
          column: 67
        }
      },
      "24": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "25": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 49
        }
      },
      "26": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 37
        }
      },
      "27": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 43
        }
      },
      "28": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "29": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 43
        }
      },
      "30": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 159,
          column: 6
        }
      },
      "31": {
        start: {
          line: 172,
          column: 4
        },
        end: {
          line: 172,
          column: 36
        }
      },
      "32": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 183,
          column: 5
        }
      },
      "33": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 182,
          column: 53
        }
      },
      "34": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 187,
          column: 5
        }
      },
      "35": {
        start: {
          line: 186,
          column: 6
        },
        end: {
          line: 186,
          column: 66
        }
      },
      "36": {
        start: {
          line: 189,
          column: 22
        },
        end: {
          line: 189,
          column: 30
        }
      },
      "37": {
        start: {
          line: 190,
          column: 18
        },
        end: {
          line: 190,
          column: 32
        }
      },
      "38": {
        start: {
          line: 191,
          column: 17
        },
        end: {
          line: 191,
          column: 46
        }
      },
      "39": {
        start: {
          line: 192,
          column: 4
        },
        end: {
          line: 192,
          column: 74
        }
      },
      "40": {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 200,
          column: 38
        }
      },
      "41": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 204,
          column: 45
        }
      },
      "42": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 208,
          column: 45
        }
      },
      "43": {
        start: {
          line: 216,
          column: 4
        },
        end: {
          line: 216,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 54
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 19
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 31
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        loc: {
          start: {
            line: 47,
            column: 12
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 47
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 17
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 51
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 26
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 59
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 43
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 63
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        loc: {
          start: {
            line: 72,
            column: 20
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 72
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 74,
            column: 21
          },
          end: {
            line: 74,
            column: 22
          }
        },
        loc: {
          start: {
            line: 74,
            column: 29
          },
          end: {
            line: 77,
            column: 5
          }
        },
        line: 74
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 102,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        },
        loc: {
          start: {
            line: 102,
            column: 31
          },
          end: {
            line: 104,
            column: 3
          }
        },
        line: 102
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 47
          },
          end: {
            line: 160,
            column: 3
          }
        },
        line: 130
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 171,
            column: 2
          },
          end: {
            line: 171,
            column: 3
          }
        },
        loc: {
          start: {
            line: 171,
            column: 35
          },
          end: {
            line: 173,
            column: 3
          }
        },
        line: 171
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 180,
            column: 3
          }
        },
        loc: {
          start: {
            line: 180,
            column: 22
          },
          end: {
            line: 193,
            column: 3
          }
        },
        line: 180
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 199,
            column: 2
          },
          end: {
            line: 199,
            column: 3
          }
        },
        loc: {
          start: {
            line: 199,
            column: 9
          },
          end: {
            line: 201,
            column: 3
          }
        },
        line: 199
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 203,
            column: 2
          },
          end: {
            line: 203,
            column: 3
          }
        },
        loc: {
          start: {
            line: 203,
            column: 18
          },
          end: {
            line: 205,
            column: 3
          }
        },
        line: 203
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 207,
            column: 2
          },
          end: {
            line: 207,
            column: 3
          }
        },
        loc: {
          start: {
            line: 207,
            column: 15
          },
          end: {
            line: 209,
            column: 3
          }
        },
        line: 207
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 215,
            column: 2
          },
          end: {
            line: 215,
            column: 3
          }
        },
        loc: {
          start: {
            line: 215,
            column: 10
          },
          end: {
            line: 217,
            column: 3
          }
        },
        line: 215
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 15,
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
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 130,
            column: 15
          },
          end: {
            line: 130,
            column: 29
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 130,
            column: 27
          },
          end: {
            line: 130,
            column: 29
          }
        }],
        line: 130
      },
      "2": {
        loc: {
          start: {
            line: 130,
            column: 31
          },
          end: {
            line: 130,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 130,
            column: 43
          },
          end: {
            line: 130,
            column: 45
          }
        }],
        line: 130
      },
      "3": {
        loc: {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
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
        line: 131
      },
      "4": {
        loc: {
          start: {
            line: 131,
            column: 8
          },
          end: {
            line: 131,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 131,
            column: 8
          },
          end: {
            line: 131,
            column: 18
          }
        }, {
          start: {
            line: 131,
            column: 22
          },
          end: {
            line: 131,
            column: 51
          }
        }],
        line: 131
      },
      "5": {
        loc: {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
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
        line: 135
      },
      "6": {
        loc: {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 18
          }
        }, {
          start: {
            line: 135,
            column: 22
          },
          end: {
            line: 135,
            column: 51
          }
        }],
        line: 135
      },
      "7": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
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
        line: 150
      },
      "8": {
        loc: {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
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
        line: 181
      },
      "9": {
        loc: {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 187,
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
        line: 185
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
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0
    },
    f: {
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
      "18": 0
    },
    b: {
      "0": [0, 0],
      "1": [0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ef72f361a5e9a27617b7768a2f75c1acea00cd82"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qrmp2lcrq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2qrmp2lcrq();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @ignore
 */
var TransactionBase = /*#__PURE__*/function () {
  function TransactionBase(tx, signatures, fee, networkPassphrase) {
    _classCallCheck(this, TransactionBase);
    cov_2qrmp2lcrq().f[0]++;
    cov_2qrmp2lcrq().s[0]++;
    if (typeof networkPassphrase !== 'string') {
      cov_2qrmp2lcrq().b[0][0]++;
      cov_2qrmp2lcrq().s[1]++;
      throw new Error("Invalid passphrase provided to Transaction: expected a string but got a ".concat(_typeof(networkPassphrase)));
    } else {
      cov_2qrmp2lcrq().b[0][1]++;
    }
    cov_2qrmp2lcrq().s[2]++;
    this._networkPassphrase = networkPassphrase;
    cov_2qrmp2lcrq().s[3]++;
    this._tx = tx;
    cov_2qrmp2lcrq().s[4]++;
    this._signatures = signatures;
    cov_2qrmp2lcrq().s[5]++;
    this._fee = fee;
  }

  /**
   * @type {Array.<xdr.DecoratedSignature>}
   * @readonly
   */
  _createClass(TransactionBase, [{
    key: "signatures",
    get: function get() {
      cov_2qrmp2lcrq().f[1]++;
      cov_2qrmp2lcrq().s[6]++;
      return this._signatures;
    },
    set: function set(value) {
      cov_2qrmp2lcrq().f[2]++;
      cov_2qrmp2lcrq().s[7]++;
      throw new Error('Transaction is immutable');
    }
  }, {
    key: "tx",
    get: function get() {
      cov_2qrmp2lcrq().f[3]++;
      cov_2qrmp2lcrq().s[8]++;
      return this._tx;
    },
    set: function set(value) {
      cov_2qrmp2lcrq().f[4]++;
      cov_2qrmp2lcrq().s[9]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "fee",
    get: function get() {
      cov_2qrmp2lcrq().f[5]++;
      cov_2qrmp2lcrq().s[10]++;
      return this._fee;
    },
    set: function set(value) {
      cov_2qrmp2lcrq().f[6]++;
      cov_2qrmp2lcrq().s[11]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "networkPassphrase",
    get: function get() {
      cov_2qrmp2lcrq().f[7]++;
      cov_2qrmp2lcrq().s[12]++;
      return this._networkPassphrase;
    },
    set: function set(networkPassphrase) {
      cov_2qrmp2lcrq().f[8]++;
      cov_2qrmp2lcrq().s[13]++;
      this._networkPassphrase = networkPassphrase;
    }

    /**
     * Signs the transaction with the given {@link Keypair}.
     * @param {...Keypair} keypairs Keypairs of signers
     * @returns {void}
     */
  }, {
    key: "sign",
    value: function sign() {
      var _this = this;
      cov_2qrmp2lcrq().f[9]++;
      var txHash = (cov_2qrmp2lcrq().s[14]++, this.hash());
      cov_2qrmp2lcrq().s[15]++;
      for (var _len = arguments.length, keypairs = new Array(_len), _key = 0; _key < _len; _key++) {
        keypairs[_key] = arguments[_key];
      }
      keypairs.forEach(function (kp) {
        cov_2qrmp2lcrq().f[10]++;
        var sig = (cov_2qrmp2lcrq().s[16]++, kp.signDecorated(txHash));
        cov_2qrmp2lcrq().s[17]++;
        _this.signatures.push(sig);
      });
    }

    /**
     * Signs a transaction with the given {@link Keypair}. Useful if someone sends
     * you a transaction XDR for you to sign and return (see
     * [addSignature](#addSignature) for more information).
     *
     * When you get a transaction XDR to sign....
     * - Instantiate a `Transaction` object with the XDR
     * - Use {@link Keypair} to generate a keypair object for your Stellar seed.
     * - Run `getKeypairSignature` with that keypair
     * - Send back the signature along with your publicKey (not your secret seed!)
     *
     * Example:
     * ```javascript
     * // `transactionXDR` is a string from the person generating the transaction
     * const transaction = new Transaction(transactionXDR, networkPassphrase);
     * const keypair = Keypair.fromSecret(myStellarSeed);
     * return transaction.getKeypairSignature(keypair);
     * ```
     *
     * @param {Keypair} keypair Keypair of signer
     * @returns {string} Signature string
     */
  }, {
    key: "getKeypairSignature",
    value: function getKeypairSignature(keypair) {
      cov_2qrmp2lcrq().f[11]++;
      cov_2qrmp2lcrq().s[18]++;
      return keypair.sign(this.hash()).toString('base64');
    }

    /**
     * Add a signature to the transaction. Useful when a party wants to pre-sign
     * a transaction but doesn't want to give access to their secret keys.
     * This will also verify whether the signature is valid.
     *
     * Here's how you would use this feature to solicit multiple signatures.
     * - Use `TransactionBuilder` to build a new transaction.
     * - Make sure to set a long enough timeout on that transaction to give your
     * signers enough time to sign!
     * - Once you build the transaction, use `transaction.toXDR()` to get the
     * base64-encoded XDR string.
     * - _Warning!_ Once you've built this transaction, don't submit any other
     * transactions onto your account! Doing so will invalidate this pre-compiled
     * transaction!
     * - Send this XDR string to your other parties. They can use the instructions
     * for [getKeypairSignature](#getKeypairSignature) to sign the transaction.
     * - They should send you back their `publicKey` and the `signature` string
     * from [getKeypairSignature](#getKeypairSignature), both of which you pass to
     * this function.
     *
     * @param {string} publicKey The public key of the signer
     * @param {string} signature The base64 value of the signature XDR
     * @returns {void}
     */
  }, {
    key: "addSignature",
    value: function addSignature() {
      var publicKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2qrmp2lcrq().b[1][0]++, '');
      var signature = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2qrmp2lcrq().b[2][0]++, '');
      cov_2qrmp2lcrq().f[12]++;
      cov_2qrmp2lcrq().s[19]++;
      if ((cov_2qrmp2lcrq().b[4][0]++, !signature) || (cov_2qrmp2lcrq().b[4][1]++, typeof signature !== 'string')) {
        cov_2qrmp2lcrq().b[3][0]++;
        cov_2qrmp2lcrq().s[20]++;
        throw new Error('Invalid signature');
      } else {
        cov_2qrmp2lcrq().b[3][1]++;
      }
      cov_2qrmp2lcrq().s[21]++;
      if ((cov_2qrmp2lcrq().b[6][0]++, !publicKey) || (cov_2qrmp2lcrq().b[6][1]++, typeof publicKey !== 'string')) {
        cov_2qrmp2lcrq().b[5][0]++;
        cov_2qrmp2lcrq().s[22]++;
        throw new Error('Invalid publicKey');
      } else {
        cov_2qrmp2lcrq().b[5][1]++;
      }
      var keypair;
      var hint;
      var signatureBuffer = (cov_2qrmp2lcrq().s[23]++, _BrowserBuffer["default"].from(signature, 'base64'));
      cov_2qrmp2lcrq().s[24]++;
      try {
        cov_2qrmp2lcrq().s[25]++;
        keypair = _keypair.Keypair.fromPublicKey(publicKey);
        cov_2qrmp2lcrq().s[26]++;
        hint = keypair.signatureHint();
      } catch (e) {
        cov_2qrmp2lcrq().s[27]++;
        throw new Error('Invalid publicKey');
      }
      cov_2qrmp2lcrq().s[28]++;
      if (!keypair.verify(this.hash(), signatureBuffer)) {
        cov_2qrmp2lcrq().b[7][0]++;
        cov_2qrmp2lcrq().s[29]++;
        throw new Error('Invalid signature');
      } else {
        cov_2qrmp2lcrq().b[7][1]++;
      }
      cov_2qrmp2lcrq().s[30]++;
      this.signatures.push(new _xdr["default"].DecoratedSignature({
        hint: hint,
        signature: signatureBuffer
      }));
    }

    /**
     * Add a decorated signature directly to the transaction envelope.
     *
     * @param {xdr.DecoratedSignature} signature    raw signature to add
     * @returns {void}
     *
     * @see Keypair.signDecorated
     * @see Keypair.signPayloadDecorated
     */
  }, {
    key: "addDecoratedSignature",
    value: function addDecoratedSignature(signature) {
      cov_2qrmp2lcrq().f[13]++;
      cov_2qrmp2lcrq().s[31]++;
      this.signatures.push(signature);
    }

    /**
     * Add `hashX` signer preimage as signature.
     * @param {Buffer|String} preimage Preimage of hash used as signer
     * @returns {void}
     */
  }, {
    key: "signHashX",
    value: function signHashX(preimage) {
      cov_2qrmp2lcrq().f[14]++;
      cov_2qrmp2lcrq().s[32]++;
      if (typeof preimage === 'string') {
        cov_2qrmp2lcrq().b[8][0]++;
        cov_2qrmp2lcrq().s[33]++;
        preimage = _BrowserBuffer["default"].from(preimage, 'hex');
      } else {
        cov_2qrmp2lcrq().b[8][1]++;
      }
      cov_2qrmp2lcrq().s[34]++;
      if (preimage.length > 64) {
        cov_2qrmp2lcrq().b[9][0]++;
        cov_2qrmp2lcrq().s[35]++;
        throw new Error('preimage cannnot be longer than 64 bytes');
      } else {
        cov_2qrmp2lcrq().b[9][1]++;
      }
      var signature = (cov_2qrmp2lcrq().s[36]++, preimage);
      var hashX = (cov_2qrmp2lcrq().s[37]++, (0, _hashing.hash)(preimage));
      var hint = (cov_2qrmp2lcrq().s[38]++, hashX.slice(hashX.length - 4));
      cov_2qrmp2lcrq().s[39]++;
      this.signatures.push(new _xdr["default"].DecoratedSignature({
        hint: hint,
        signature: signature
      }));
    }

    /**
     * Returns a hash for this transaction, suitable for signing.
     * @returns {Buffer}
     */
  }, {
    key: "hash",
    value: function hash() {
      cov_2qrmp2lcrq().f[15]++;
      cov_2qrmp2lcrq().s[40]++;
      return (0, _hashing.hash)(this.signatureBase());
    }
  }, {
    key: "signatureBase",
    value: function signatureBase() {
      cov_2qrmp2lcrq().f[16]++;
      cov_2qrmp2lcrq().s[41]++;
      throw new Error('Implement in subclass');
    }
  }, {
    key: "toEnvelope",
    value: function toEnvelope() {
      cov_2qrmp2lcrq().f[17]++;
      cov_2qrmp2lcrq().s[42]++;
      throw new Error('Implement in subclass');
    }

    /**
     * Get the transaction envelope as a base64-encoded string
     * @returns {string} XDR string
     */
  }, {
    key: "toXDR",
    value: function toXDR() {
      cov_2qrmp2lcrq().f[18]++;
      cov_2qrmp2lcrq().s[43]++;
      return this.toEnvelope().toXDR().toString('base64');
    }
  }]);
  return TransactionBase;
}();
exports.TransactionBase = TransactionBase;