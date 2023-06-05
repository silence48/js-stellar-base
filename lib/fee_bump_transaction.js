"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeeBumpTransaction = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _hashing = require("./hashing");
var _transaction = require("./transaction");
var _transaction_base = require("./transaction_base");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2hg7bjtz9p() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\fee_bump_transaction.js";
  var hash = "2a47c9df27da58e670a29375bd79cac82455a47e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\fee_bump_transaction.js",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "1": {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 59
        }
      },
      "2": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 57
        }
      },
      "3": {
        start: {
          line: 31,
          column: 25
        },
        end: {
          line: 31,
          column: 42
        }
      },
      "4": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "5": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 35,
          column: 8
        }
      },
      "6": {
        start: {
          line: 38,
          column: 23
        },
        end: {
          line: 38,
          column: 39
        }
      },
      "7": {
        start: {
          line: 39,
          column: 15
        },
        end: {
          line: 39,
          column: 30
        }
      },
      "8": {
        start: {
          line: 40,
          column: 16
        },
        end: {
          line: 40,
          column: 35
        }
      },
      "9": {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 42,
          column: 62
        }
      },
      "10": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 50
        }
      },
      "11": {
        start: {
          line: 46,
          column: 28
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "12": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 71
        }
      },
      "13": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 53,
          column: 6
        }
      },
      "14": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 34
        }
      },
      "15": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 27
        }
      },
      "16": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 85,
          column: 7
        }
      },
      "17": {
        start: {
          line: 87,
          column: 24
        },
        end: {
          line: 90,
          column: 6
        }
      },
      "18": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 31
        }
      },
      "19": {
        start: {
          line: 100,
          column: 21
        },
        end: {
          line: 103,
          column: 6
        }
      },
      "20": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 71
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 43
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 25
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 25
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 60
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 18
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 18
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 81
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 15
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 99
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 29,
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
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 36,
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
            line: 36,
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
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 47
          }
        }, {
          start: {
            line: 42,
            column: 51
          },
          end: {
            line: 42,
            column: 53
          }
        }],
        line: 42
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
      "20": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2a47c9df27da58e670a29375bd79cac82455a47e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hg7bjtz9p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hg7bjtz9p();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Use {@link TransactionBuilder.buildFeeBumpTransaction} to build a
 * FeeBumpTransaction object. If you have an object or base64-encoded string of
 * the transaction envelope XDR use {@link TransactionBuilder.fromXDR}.
 *
 * Once a {@link FeeBumpTransaction} has been created, its attributes and operations
 * should not be changed. You should only add signatures (using {@link FeeBumpTransaction#sign}) before
 * submitting to the network or forwarding on to additional signers.
 *
 * @param {string|xdr.TransactionEnvelope} envelope - transaction envelope
 *     object or base64 encoded string.
 * @param {string} networkPassphrase - passphrase of the target Stellar network
 *     (e.g. "Public Global Stellar Network ; September 2015").
 *
 * @extends TransactionBase
 */
var FeeBumpTransaction = /*#__PURE__*/function (_TransactionBase) {
  _inherits(FeeBumpTransaction, _TransactionBase);
  var _super = _createSuper(FeeBumpTransaction);
  function FeeBumpTransaction(envelope, networkPassphrase) {
    var _this;
    _classCallCheck(this, FeeBumpTransaction);
    cov_2hg7bjtz9p().f[0]++;
    cov_2hg7bjtz9p().s[0]++;
    if (typeof envelope === 'string') {
      cov_2hg7bjtz9p().b[0][0]++;
      var buffer = (cov_2hg7bjtz9p().s[1]++, _BrowserBuffer["default"].from(envelope, 'base64'));
      cov_2hg7bjtz9p().s[2]++;
      envelope = _xdr["default"].TransactionEnvelope.fromXDR(buffer);
    } else {
      cov_2hg7bjtz9p().b[0][1]++;
    }
    var envelopeType = (cov_2hg7bjtz9p().s[3]++, envelope["switch"]());
    cov_2hg7bjtz9p().s[4]++;
    if (envelopeType !== _xdr["default"].EnvelopeType.envelopeTypeTxFeeBump()) {
      cov_2hg7bjtz9p().b[1][0]++;
      cov_2hg7bjtz9p().s[5]++;
      throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxFeeBump but received an ".concat(envelopeType.name, "."));
    } else {
      cov_2hg7bjtz9p().b[1][1]++;
    }
    var txEnvelope = (cov_2hg7bjtz9p().s[6]++, envelope.value());
    var tx = (cov_2hg7bjtz9p().s[7]++, txEnvelope.tx());
    var fee = (cov_2hg7bjtz9p().s[8]++, tx.fee().toString());
    // clone signatures
    var signatures = (cov_2hg7bjtz9p().s[9]++, ((cov_2hg7bjtz9p().b[2][0]++, txEnvelope.signatures()) || (cov_2hg7bjtz9p().b[2][1]++, [])).slice());
    cov_2hg7bjtz9p().s[10]++;
    _this = _super.call(this, tx, signatures, fee, networkPassphrase);
    var innerTxEnvelope = (cov_2hg7bjtz9p().s[11]++, _xdr["default"].TransactionEnvelope.envelopeTypeTx(tx.innerTx().v1()));
    cov_2hg7bjtz9p().s[12]++;
    _this._feeSource = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(_this.tx.feeSource());
    cov_2hg7bjtz9p().s[13]++;
    _this._innerTransaction = new _transaction.Transaction(innerTxEnvelope, networkPassphrase);
    return _this;
  }

  /**
   * @type {Transaction}
   * @readonly
   */
  _createClass(FeeBumpTransaction, [{
    key: "innerTransaction",
    get: function get() {
      cov_2hg7bjtz9p().f[1]++;
      cov_2hg7bjtz9p().s[14]++;
      return this._innerTransaction;
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "feeSource",
    get: function get() {
      cov_2hg7bjtz9p().f[2]++;
      cov_2hg7bjtz9p().s[15]++;
      return this._feeSource;
    }

    /**
     * Returns the "signature base" of this transaction, which is the value
     * that, when hashed, should be signed to create a signature that
     * validators on the Stellar Network will accept.
     *
     * It is composed of a 4 prefix bytes followed by the xdr-encoded form
     * of this transaction.
     * @returns {BrowserBuffer}
     */
  }, {
    key: "signatureBase",
    value: function signatureBase() {
      cov_2hg7bjtz9p().f[3]++;
      var taggedTransaction = (cov_2hg7bjtz9p().s[16]++, new _xdr["default"].TransactionSignaturePayloadTaggedTransaction.envelopeTypeTxFeeBump(this.tx));
      var txSignature = (cov_2hg7bjtz9p().s[17]++, new _xdr["default"].TransactionSignaturePayload({
        networkId: _xdr["default"].Hash.fromXDR((0, _hashing.hash)(this.networkPassphrase)),
        taggedTransaction: taggedTransaction
      }));
      cov_2hg7bjtz9p().s[18]++;
      return txSignature.toXDR();
    }

    /**
     * To envelope returns a xdr.TransactionEnvelope which can be submitted to the network.
     * @returns {xdr.TransactionEnvelope}
     */
  }, {
    key: "toEnvelope",
    value: function toEnvelope() {
      cov_2hg7bjtz9p().f[4]++;
      var envelope = (cov_2hg7bjtz9p().s[19]++, new _xdr["default"].FeeBumpTransactionEnvelope({
        tx: _xdr["default"].FeeBumpTransaction.fromXDR(this.tx.toXDR()),
        // make a copy of the tx
        signatures: this.signatures.slice() // make a copy of the signatures
      }));
      cov_2hg7bjtz9p().s[20]++;
      return new _xdr["default"].TransactionEnvelope.envelopeTypeTxFeeBump(envelope);
    }
  }]);
  return FeeBumpTransaction;
}(_transaction_base.TransactionBase);
exports.FeeBumpTransaction = FeeBumpTransaction;