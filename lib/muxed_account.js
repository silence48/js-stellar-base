"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuxedAccount = void 0;
var _isString = _interopRequireDefault(require("lodash/isString"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _account = require("./account");
var _strkey = require("./strkey");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1q7w1nhms() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\muxed_account.js";
  var hash = "aa61c0f496e3fd5e8e1d154da9bc247f43450728";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\muxed_account.js",
    statementMap: {
      "0": {
        start: {
          line: 52,
          column: 22
        },
        end: {
          line: 52,
          column: 45
        }
      },
      "1": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "2": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 46
        }
      },
      "3": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 31
        }
      },
      "4": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 55
        }
      },
      "5": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 65
        }
      },
      "6": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 18
        }
      },
      "7": {
        start: {
          line: 75,
          column: 25
        },
        end: {
          line: 75,
          column: 62
        }
      },
      "8": {
        start: {
          line: 76,
          column: 21
        },
        end: {
          line: 76,
          column: 49
        }
      },
      "9": {
        start: {
          line: 77,
          column: 15
        },
        end: {
          line: 77,
          column: 54
        }
      },
      "10": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 68
        }
      },
      "11": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 24
        }
      },
      "12": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 26
        }
      },
      "13": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 20
        }
      },
      "14": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 104,
          column: 5
        }
      },
      "15": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 103,
          column: 78
        }
      },
      "16": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 60
        }
      },
      "17": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 65
        }
      },
      "18": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 18
        }
      },
      "19": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 16
        }
      },
      "20": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 41
        }
      },
      "21": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 125,
          column: 50
        }
      },
      "22": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 133,
          column: 26
        }
      },
      "23": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 31
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 51
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 44
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 74
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 86,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        loc: {
          start: {
            line: 86,
            column: 16
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 86
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        loc: {
          start: {
            line: 93,
            column: 14
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 93
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 7
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 97
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        loc: {
          start: {
            line: 101,
            column: 12
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 101
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 116,
            column: 3
          }
        },
        loc: {
          start: {
            line: 116,
            column: 19
          },
          end: {
            line: 118,
            column: 3
          }
        },
        line: 116
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 124,
            column: 3
          }
        },
        loc: {
          start: {
            line: 124,
            column: 28
          },
          end: {
            line: 126,
            column: 3
          }
        },
        line: 124
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 132,
            column: 2
          },
          end: {
            line: 132,
            column: 3
          }
        },
        loc: {
          start: {
            line: 132,
            column: 16
          },
          end: {
            line: 134,
            column: 3
          }
        },
        line: 132
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 3
          }
        },
        loc: {
          start: {
            line: 136,
            column: 28
          },
          end: {
            line: 138,
            column: 3
          }
        },
        line: 136
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 55,
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
        line: 53
      },
      "1": {
        loc: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 104,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 104,
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
        line: 102
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
      "23": 0
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
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "aa61c0f496e3fd5e8e1d154da9bc247f43450728"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1q7w1nhms = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1q7w1nhms();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Represents a muxed account for transactions and operations.
 *
 * A muxed (or *multiplexed*) account (defined rigorously in
 * [CAP-27](https://stellar.org/protocol/cap-27) and briefly in
 * [SEP-23](https://stellar.org/protocol/sep-23)) is one that resolves a single
 * Stellar `G...`` account to many different underlying IDs.
 *
 * For example, you may have a single Stellar address for accounting purposes:
 *   GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZ
 *
 * Yet would like to use it for 4 different family members:
 *   1: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAAGZFQ
 *   2: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAALIWQ
 *   3: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAAPYHQ
 *   4: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAAQLQQ
 *
 * This object makes it easy to create muxed accounts from regular accounts,
 * duplicate them, get/set the underlying IDs, etc. without mucking around with
 * the raw XDR.
 *
 * Because muxed accounts are purely an off-chain convention, they all share the
 * sequence number tied to their underlying G... account. Thus, this object
 * *requires* an {@link Account} instance to be passed in, so that muxed
 * instances of an account can collectively modify the sequence number whenever
 * a muxed account is used as the source of a @{link Transaction} with {@link
 * TransactionBuilder}.
 *
 * @constructor
 *
 * @param {Account}   account - the @{link Account} instance representing the
 *                              underlying G... address
 * @param {string}    id      - a stringified uint64 value that represents the
 *                              ID of the muxed account
 *
 * @link https://developers.stellar.org/docs/glossary/muxed-accounts/
 */
var MuxedAccount = /*#__PURE__*/function () {
  function MuxedAccount(baseAccount, id) {
    _classCallCheck(this, MuxedAccount);
    cov_1q7w1nhms().f[0]++;
    var accountId = (cov_1q7w1nhms().s[0]++, baseAccount.accountId());
    cov_1q7w1nhms().s[1]++;
    if (!_strkey.StrKey.isValidEd25519PublicKey(accountId)) {
      cov_1q7w1nhms().b[0][0]++;
      cov_1q7w1nhms().s[2]++;
      throw new Error('accountId is invalid');
    } else {
      cov_1q7w1nhms().b[0][1]++;
    }
    cov_1q7w1nhms().s[3]++;
    this.account = baseAccount;
    cov_1q7w1nhms().s[4]++;
    this._muxedXdr = (0, _decode_encode_muxed_account.encodeMuxedAccount)(accountId, id);
    cov_1q7w1nhms().s[5]++;
    this._mAddress = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(this._muxedXdr);
    cov_1q7w1nhms().s[6]++;
    this._id = id;
  }

  /**
   * Parses an M-address into a MuxedAccount object.
   *
   * @param  {string} mAddress    - an M-address to transform
   * @param  {string} sequenceNum - the sequence number of the underlying {@link
   *     Account}, to use for the underlying base account (@link
   *     MuxedAccount.baseAccount). If you're using the SDK, you can use
   *     `server.loadAccount` to fetch this if you don't know it.
   *
   * @return {MuxedAccount}
   */
  _createClass(MuxedAccount, [{
    key: "baseAccount",
    value:
    /**
     * @return {Account} the underlying account object shared among all muxed
     *     accounts with this Stellar address
     */
    function baseAccount() {
      cov_1q7w1nhms().f[2]++;
      cov_1q7w1nhms().s[11]++;
      return this.account;
    }

    /**
     * @return {string} the M-address representing this account's (G-address, ID)
     */
  }, {
    key: "accountId",
    value: function accountId() {
      cov_1q7w1nhms().f[3]++;
      cov_1q7w1nhms().s[12]++;
      return this._mAddress;
    }
  }, {
    key: "id",
    value: function id() {
      cov_1q7w1nhms().f[4]++;
      cov_1q7w1nhms().s[13]++;
      return this._id;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      cov_1q7w1nhms().f[5]++;
      cov_1q7w1nhms().s[14]++;
      if (!(0, _isString["default"])(id)) {
        cov_1q7w1nhms().b[1][0]++;
        cov_1q7w1nhms().s[15]++;
        throw new Error('id should be a string representing a number (uint64)');
      } else {
        cov_1q7w1nhms().b[1][1]++;
      }
      cov_1q7w1nhms().s[16]++;
      this._muxedXdr.med25519().id(_xdr["default"].Uint64.fromString(id));
      cov_1q7w1nhms().s[17]++;
      this._mAddress = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(this._muxedXdr);
      cov_1q7w1nhms().s[18]++;
      this._id = id;
      cov_1q7w1nhms().s[19]++;
      return this;
    }

    /**
     * Accesses the underlying account's sequence number.
     * @return {string}  strigified sequence number for the underlying account
     */
  }, {
    key: "sequenceNumber",
    value: function sequenceNumber() {
      cov_1q7w1nhms().f[6]++;
      cov_1q7w1nhms().s[20]++;
      return this.account.sequenceNumber();
    }

    /**
     * Increments the underlying account's sequence number by one.
     * @return {void}
     */
  }, {
    key: "incrementSequenceNumber",
    value: function incrementSequenceNumber() {
      cov_1q7w1nhms().f[7]++;
      cov_1q7w1nhms().s[21]++;
      return this.account.incrementSequenceNumber();
    }

    /**
     * @return {xdr.MuxedAccount} the XDR object representing this muxed account's
     *     G-address and uint64 ID
     */
  }, {
    key: "toXDRObject",
    value: function toXDRObject() {
      cov_1q7w1nhms().f[8]++;
      cov_1q7w1nhms().s[22]++;
      return this._muxedXdr;
    }
  }, {
    key: "equals",
    value: function equals(otherMuxedAccount) {
      cov_1q7w1nhms().f[9]++;
      cov_1q7w1nhms().s[23]++;
      return this.accountId() === otherMuxedAccount.accountId();
    }
  }], [{
    key: "fromAddress",
    value: function fromAddress(mAddress, sequenceNum) {
      cov_1q7w1nhms().f[1]++;
      var muxedAccount = (cov_1q7w1nhms().s[7]++, (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(mAddress));
      var gAddress = (cov_1q7w1nhms().s[8]++, (0, _decode_encode_muxed_account.extractBaseAddress)(mAddress));
      var id = (cov_1q7w1nhms().s[9]++, muxedAccount.med25519().id().toString());
      cov_1q7w1nhms().s[10]++;
      return new MuxedAccount(new _account.Account(gAddress, sequenceNum), id);
    }
  }]);
  return MuxedAccount;
}();
exports.MuxedAccount = MuxedAccount;