"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignerKey = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _strkey = require("./strkey");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1sqbjacexy() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\signerkey.js";
  var hash = "83f82867159a745faff6bcb308a61c750b99a065";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\signerkey.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 25
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "1": {
        start: {
          line: 31,
          column: 15
        },
        end: {
          line: 31,
          column: 54
        }
      },
      "2": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 36
        }
      },
      "3": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "4": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 57
        }
      },
      "5": {
        start: {
          line: 37,
          column: 16
        },
        end: {
          line: 37,
          column: 40
        }
      },
      "6": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "7": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 45,
          column: 10
        }
      },
      "8": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 28
        }
      },
      "9": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 88,
          column: 5
        }
      },
      "10": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 40
        }
      },
      "11": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 32
        }
      },
      "12": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 14
        }
      },
      "13": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 33
        }
      },
      "14": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 32
        }
      },
      "15": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 14
        }
      },
      "16": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 34
        }
      },
      "17": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 32
        }
      },
      "18": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 14
        }
      },
      "19": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 37
        }
      },
      "20": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 60
        }
      },
      "21": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 14
        }
      },
      "22": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 75
        }
      },
      "23": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 32
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 3
          }
        },
        loc: {
          start: {
            line: 61,
            column: 36
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 61
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
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
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 45,
            column: 10
          }
        }, {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 47,
            column: 30
          }
        }, {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 23
          }
        }, {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 24
          }
        }, {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 51,
            column: 28
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 69,
            column: 14
          }
        }, {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 74,
            column: 14
          }
        }, {
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 79,
            column: 14
          }
        }, {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 84,
            column: 14
          }
        }, {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 87,
            column: 75
          }
        }],
        line: 65
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
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0, 0],
      "2": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "83f82867159a745faff6bcb308a61c750b99a065"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1sqbjacexy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1sqbjacexy();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A container class with helpers to convert between signer keys
 * (`xdr.SignerKey`) and {@link StrKey}s.
 *
 * It's primarly used for manipulating the `extraSigners` precondition on a
 * {@link Transaction}.
 *
 * @see {@link TransactionBuilder.setExtraSigners}
 */
var SignerKey = /*#__PURE__*/function () {
  function SignerKey() {
    _classCallCheck(this, SignerKey);
  }
  _createClass(SignerKey, null, [{
    key: "decodeAddress",
    value:
    /**
     * Decodes a StrKey address into an xdr.SignerKey instance.
     *
     * Only ED25519 public keys (G...), pre-auth transactions (T...), hashes
     * (H...), and signed payloads (P...) can be signer keys.
     *
     * @param   {string} address  a StrKey-encoded signer address
     * @returns {xdr.SignerKey}
     */
    function decodeAddress(address) {
      cov_1sqbjacexy().f[0]++;
      var signerKeyMap = (cov_1sqbjacexy().s[0]++, {
        ed25519PublicKey: _xdr["default"].SignerKey.signerKeyTypeEd25519,
        preAuthTx: _xdr["default"].SignerKey.signerKeyTypePreAuthTx,
        sha256Hash: _xdr["default"].SignerKey.signerKeyTypeHashX,
        signedPayload: _xdr["default"].SignerKey.signerKeyTypeEd25519SignedPayload
      });
      var vb = (cov_1sqbjacexy().s[1]++, _strkey.StrKey.getVersionByteForPrefix(address));
      var encoder = (cov_1sqbjacexy().s[2]++, signerKeyMap[vb]);
      cov_1sqbjacexy().s[3]++;
      if (!encoder) {
        cov_1sqbjacexy().b[0][0]++;
        cov_1sqbjacexy().s[4]++;
        throw new Error("invalid signer key type (".concat(vb, ")"));
      } else {
        cov_1sqbjacexy().b[0][1]++;
      }
      var raw = (cov_1sqbjacexy().s[5]++, (0, _strkey.decodeCheck)(vb, address));
      cov_1sqbjacexy().s[6]++;
      switch (vb) {
        case 'signedPayload':
          cov_1sqbjacexy().b[1][0]++;
          cov_1sqbjacexy().s[7]++;
          return encoder(new _xdr["default"].SignerKeyEd25519SignedPayload({
            ed25519: raw.slice(0, 32),
            payload: raw.slice(32 + 4)
          }));
        case 'ed25519PublicKey':
          cov_1sqbjacexy().b[1][1]++;
        // falls through
        case 'preAuthTx':
          cov_1sqbjacexy().b[1][2]++;
        // falls through
        case 'sha256Hash':
          cov_1sqbjacexy().b[1][3]++;
        // falls through
        default:
          cov_1sqbjacexy().b[1][4]++;
          cov_1sqbjacexy().s[8]++;
          return encoder(raw);
      }
    }

    /**
     * Encodes a signer key into its StrKey equivalent.
     *
     * @param   {xdr.SignerKey} signerKey   the signer
     * @returns {string} the StrKey representation of the signer
     */
  }, {
    key: "encodeSignerKey",
    value: function encodeSignerKey(signerKey) {
      cov_1sqbjacexy().f[1]++;
      var strkeyType;
      var raw;
      cov_1sqbjacexy().s[9]++;
      switch (signerKey["switch"]()) {
        case _xdr["default"].SignerKeyType.signerKeyTypeEd25519():
          cov_1sqbjacexy().b[2][0]++;
          cov_1sqbjacexy().s[10]++;
          strkeyType = 'ed25519PublicKey';
          cov_1sqbjacexy().s[11]++;
          raw = signerKey.value();
          cov_1sqbjacexy().s[12]++;
          break;
        case _xdr["default"].SignerKeyType.signerKeyTypePreAuthTx():
          cov_1sqbjacexy().b[2][1]++;
          cov_1sqbjacexy().s[13]++;
          strkeyType = 'preAuthTx';
          cov_1sqbjacexy().s[14]++;
          raw = signerKey.value();
          cov_1sqbjacexy().s[15]++;
          break;
        case _xdr["default"].SignerKeyType.signerKeyTypeHashX():
          cov_1sqbjacexy().b[2][2]++;
          cov_1sqbjacexy().s[16]++;
          strkeyType = 'sha256Hash';
          cov_1sqbjacexy().s[17]++;
          raw = signerKey.value();
          cov_1sqbjacexy().s[18]++;
          break;
        case _xdr["default"].SignerKeyType.signerKeyTypeEd25519SignedPayload():
          cov_1sqbjacexy().b[2][3]++;
          cov_1sqbjacexy().s[19]++;
          strkeyType = 'signedPayload';
          cov_1sqbjacexy().s[20]++;
          raw = signerKey.ed25519SignedPayload().toXDR('raw');
          cov_1sqbjacexy().s[21]++;
          break;
        default:
          cov_1sqbjacexy().b[2][4]++;
          cov_1sqbjacexy().s[22]++;
          throw new Error("invalid SignerKey (type: ".concat(signerKey["switch"](), ")"));
      }
      cov_1sqbjacexy().s[23]++;
      return (0, _strkey.encodeCheck)(strkeyType, raw);
    }
  }]);
  return SignerKey;
}();
exports.SignerKey = SignerKey;