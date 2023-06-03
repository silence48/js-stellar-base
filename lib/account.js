"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;
var _isString = _interopRequireDefault(require("lodash/isString"));
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _strkey = require("./strkey");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_bm0p59jbk() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\account.js";
  var hash = "a73e7a7aedc4887d50c56fe541162e68a58bf964";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\account.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "1": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 77
        }
      },
      "2": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "3": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 46
        }
      },
      "4": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "5": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 57
        }
      },
      "6": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 32
        }
      },
      "7": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 44
        }
      },
      "8": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 27
        }
      },
      "9": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 36
        }
      },
      "10": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        loc: {
          start: {
            line: 24,
            column: 35
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 14
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        loc: {
          start: {
            line: 52,
            column: 19
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 52
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        loc: {
          start: {
            line: 60,
            column: 28
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 60
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
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
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
        line: 29
      },
      "2": {
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a73e7a7aedc4887d50c56fe541162e68a58bf964"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bm0p59jbk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_bm0p59jbk();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Create a new Account object.
 *
 * `Account` represents a single account in the Stellar network and its sequence
 * number. Account tracks the sequence number as it is used by {@link
 * TransactionBuilder}. See
 * [Accounts](https://developers.stellar.org/docs/glossary/accounts/) for
 * more information about how accounts work in Stellar.
 *
 * @constructor
 *
 * @param {string} accountId - ID of the account (ex.
 *     `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`). If you
 *     provide a muxed account address, this will throw; use {@link
 *     MuxedAccount} instead.
 * @param {string} sequence  - current sequence number of the account
 */
var Account = /*#__PURE__*/function () {
  function Account(accountId, sequence) {
    _classCallCheck(this, Account);
    cov_bm0p59jbk().f[0]++;
    cov_bm0p59jbk().s[0]++;
    if (_strkey.StrKey.isValidMed25519PublicKey(accountId)) {
      cov_bm0p59jbk().b[0][0]++;
      cov_bm0p59jbk().s[1]++;
      throw new Error('accountId is an M-address; use MuxedAccount instead');
    } else {
      cov_bm0p59jbk().b[0][1]++;
    }
    cov_bm0p59jbk().s[2]++;
    if (!_strkey.StrKey.isValidEd25519PublicKey(accountId)) {
      cov_bm0p59jbk().b[1][0]++;
      cov_bm0p59jbk().s[3]++;
      throw new Error('accountId is invalid');
    } else {
      cov_bm0p59jbk().b[1][1]++;
    }
    cov_bm0p59jbk().s[4]++;
    if (!(0, _isString["default"])(sequence)) {
      cov_bm0p59jbk().b[2][0]++;
      cov_bm0p59jbk().s[5]++;
      throw new Error('sequence must be of type string');
    } else {
      cov_bm0p59jbk().b[2][1]++;
    }
    cov_bm0p59jbk().s[6]++;
    this._accountId = accountId;
    cov_bm0p59jbk().s[7]++;
    this.sequence = new _bignumber["default"](sequence);
  }

  /**
   * Returns Stellar account ID, ex.
   * `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`.
   * @returns {string}
   */
  _createClass(Account, [{
    key: "accountId",
    value: function accountId() {
      cov_bm0p59jbk().f[1]++;
      cov_bm0p59jbk().s[8]++;
      return this._accountId;
    }

    /**
     * @returns {string}  sequence number for the account as a string
     */
  }, {
    key: "sequenceNumber",
    value: function sequenceNumber() {
      cov_bm0p59jbk().f[2]++;
      cov_bm0p59jbk().s[9]++;
      return this.sequence.toString();
    }

    /**
     * Increments sequence number in this object by one.
     * @returns {void}
     */
  }, {
    key: "incrementSequenceNumber",
    value: function incrementSequenceNumber() {
      cov_bm0p59jbk().f[3]++;
      cov_bm0p59jbk().s[10]++;
      this.sequence = this.sequence.plus(1);
    }
  }]);
  return Account;
}();
exports.Account = Account;