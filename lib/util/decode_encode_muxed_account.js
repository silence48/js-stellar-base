"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeAddressToMuxedAccount = decodeAddressToMuxedAccount;
exports.encodeMuxedAccount = encodeMuxedAccount;
exports.encodeMuxedAccountToAddress = encodeMuxedAccountToAddress;
exports.extractBaseAddress = extractBaseAddress;
var _isString = _interopRequireDefault(require("lodash/isString"));
var _xdr = _interopRequireDefault(require("../xdr"));
var _strkey = require("../strkey");
var _BrowserBuffer = _interopRequireDefault(require("./BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_rw3r7tb9y() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\util\\decode_encode_muxed_account.js";
  var hash = "7fdbfaf95ee130c8ee70b8615d00657c619ea252";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\util\\decode_encode_muxed_account.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 54
        }
      },
      "2": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      },
      "3": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "4": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 59
        }
      },
      "5": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 63
        }
      },
      "6": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 60,
          column: 3
        }
      },
      "7": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 69
        }
      },
      "8": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 63,
          column: 3
        }
      },
      "9": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 76
        }
      },
      "10": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 70,
          column: 4
        }
      },
      "11": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 81,
          column: 3
        }
      },
      "12": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 19
        }
      },
      "13": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 85,
          column: 3
        }
      },
      "14": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 73
        }
      },
      "15": {
        start: {
          line: 87,
          column: 23
        },
        end: {
          line: 87,
          column: 59
        }
      },
      "16": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 88,
          column: 74
        }
      },
      "17": {
        start: {
          line: 93,
          column: 19
        },
        end: {
          line: 93,
          column: 58
        }
      },
      "18": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 113,
          column: 4
        }
      },
      "19": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 120,
          column: 3
        }
      },
      "20": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 53
        }
      },
      "21": {
        start: {
          line: 122,
          column: 16
        },
        end: {
          line: 122,
          column: 39
        }
      },
      "22": {
        start: {
          line: 123,
          column: 2
        },
        end: {
          line: 125,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "decodeAddressToMuxedAccount",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 43
          }
        },
        loc: {
          start: {
            line: 16,
            column: 53
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "encodeMuxedAccountToAddress",
        decl: {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 38,
            column: 43
          }
        },
        loc: {
          start: {
            line: 38,
            column: 58
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 38
      },
      "2": {
        name: "encodeMuxedAccount",
        decl: {
          start: {
            line: 57,
            column: 16
          },
          end: {
            line: 57,
            column: 34
          }
        },
        loc: {
          start: {
            line: 57,
            column: 48
          },
          end: {
            line: 71,
            column: 1
          }
        },
        line: 57
      },
      "3": {
        name: "extractBaseAddress",
        decl: {
          start: {
            line: 78,
            column: 16
          },
          end: {
            line: 78,
            column: 34
          }
        },
        loc: {
          start: {
            line: 78,
            column: 44
          },
          end: {
            line: 89,
            column: 1
          }
        },
        line: 78
      },
      "4": {
        name: "_decodeAddressFullyToMuxedAccount",
        decl: {
          start: {
            line: 92,
            column: 9
          },
          end: {
            line: 92,
            column: 42
          }
        },
        loc: {
          start: {
            line: 92,
            column: 52
          },
          end: {
            line: 114,
            column: 1
          }
        },
        line: 92
      },
      "5": {
        name: "_encodeMuxedAccountFullyToAddress",
        decl: {
          start: {
            line: 117,
            column: 9
          },
          end: {
            line: 117,
            column: 42
          }
        },
        loc: {
          start: {
            line: 117,
            column: 57
          },
          end: {
            line: 126,
            column: 1
          }
        },
        line: 117
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
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
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 44,
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
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 60,
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
        line: 58
      },
      "3": {
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 63,
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
        line: 61
      },
      "4": {
        loc: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 81,
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
        line: 79
      },
      "5": {
        loc: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 85,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 85,
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
        line: 83
      },
      "6": {
        loc: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 120,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 120,
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
        line: 118
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
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7fdbfaf95ee130c8ee70b8615d00657c619ea252"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_rw3r7tb9y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_rw3r7tb9y();
/**
 * Converts a Stellar address (in G... or M... form) to an `xdr.MuxedAccount`
 * structure, using the ed25519 representation when possible.
 *
 * This supports full muxed accounts, where an `M...` address will resolve to
 * both its underlying `G...` address and an integer ID.
 *
 * @param   {string}  address   G... or M... address to encode into XDR
 * @returns {xdr.MuxedAccount}  a muxed account object for this address string
 */
function decodeAddressToMuxedAccount(address) {
  cov_rw3r7tb9y().f[0]++;
  cov_rw3r7tb9y().s[0]++;
  if (_strkey.StrKey.isValidMed25519PublicKey(address)) {
    cov_rw3r7tb9y().b[0][0]++;
    cov_rw3r7tb9y().s[1]++;
    return _decodeAddressFullyToMuxedAccount(address);
  } else {
    cov_rw3r7tb9y().b[0][1]++;
  }
  cov_rw3r7tb9y().s[2]++;
  return _xdr["default"].MuxedAccount.keyTypeEd25519(_strkey.StrKey.decodeEd25519PublicKey(address));
}

/**
 * Converts an xdr.MuxedAccount to its StrKey representation.
 *
 * This returns its "M..." string representation if there is a muxing ID within
 * the object and returns the "G..." representation otherwise.
 *
 * @param   {xdr.MuxedAccount} muxedAccount   Raw account to stringify
 * @returns {string} Stringified G... (corresponding to the underlying pubkey)
 *     or M... address (corresponding to both the key and the muxed ID)
 *
 * @see https://stellar.org/protocol/sep-23
 */
function encodeMuxedAccountToAddress(muxedAccount) {
  cov_rw3r7tb9y().f[1]++;
  cov_rw3r7tb9y().s[3]++;
  if (muxedAccount["switch"]().value === _xdr["default"].CryptoKeyType.keyTypeMuxedEd25519().value) {
    cov_rw3r7tb9y().b[1][0]++;
    cov_rw3r7tb9y().s[4]++;
    return _encodeMuxedAccountFullyToAddress(muxedAccount);
  } else {
    cov_rw3r7tb9y().b[1][1]++;
  }
  cov_rw3r7tb9y().s[5]++;
  return _strkey.StrKey.encodeEd25519PublicKey(muxedAccount.ed25519());
}

/**
 * Transform a Stellar address (G...) and an ID into its XDR representation.
 *
 * @param  {string} address   - a Stellar G... address
 * @param  {string} id        - a Uint64 ID represented as a string
 *
 * @return {xdr.MuxedAccount} - XDR representation of the above muxed account
 */
function encodeMuxedAccount(address, id) {
  cov_rw3r7tb9y().f[2]++;
  cov_rw3r7tb9y().s[6]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(address)) {
    cov_rw3r7tb9y().b[2][0]++;
    cov_rw3r7tb9y().s[7]++;
    throw new Error('address should be a Stellar account ID (G...)');
  } else {
    cov_rw3r7tb9y().b[2][1]++;
  }
  cov_rw3r7tb9y().s[8]++;
  if (!(0, _isString["default"])(id)) {
    cov_rw3r7tb9y().b[3][0]++;
    cov_rw3r7tb9y().s[9]++;
    throw new Error('id should be a string representing a number (uint64)');
  } else {
    cov_rw3r7tb9y().b[3][1]++;
  }
  cov_rw3r7tb9y().s[10]++;
  return _xdr["default"].MuxedAccount.keyTypeMuxedEd25519(new _xdr["default"].MuxedAccountMed25519({
    id: _xdr["default"].Uint64.fromString(id),
    ed25519: _strkey.StrKey.decodeEd25519PublicKey(address)
  }));
}

/**
 * Extracts the underlying base (G...) address from an M-address.
 * @param  {string} address   an account address (either M... or G...)
 * @return {string} a Stellar public key address (G...)
 */
function extractBaseAddress(address) {
  cov_rw3r7tb9y().f[3]++;
  cov_rw3r7tb9y().s[11]++;
  if (_strkey.StrKey.isValidEd25519PublicKey(address)) {
    cov_rw3r7tb9y().b[4][0]++;
    cov_rw3r7tb9y().s[12]++;
    return address;
  } else {
    cov_rw3r7tb9y().b[4][1]++;
  }
  cov_rw3r7tb9y().s[13]++;
  if (!_strkey.StrKey.isValidMed25519PublicKey(address)) {
    cov_rw3r7tb9y().b[5][0]++;
    cov_rw3r7tb9y().s[14]++;
    throw new TypeError("expected muxed account (M...), got ".concat(address));
  } else {
    cov_rw3r7tb9y().b[5][1]++;
  }
  var muxedAccount = (cov_rw3r7tb9y().s[15]++, decodeAddressToMuxedAccount(address));
  cov_rw3r7tb9y().s[16]++;
  return _strkey.StrKey.encodeEd25519PublicKey(muxedAccount.med25519().ed25519());
}

// Decodes an "M..." account ID into its MuxedAccount object representation.
function _decodeAddressFullyToMuxedAccount(address) {
  cov_rw3r7tb9y().f[4]++;
  var rawBytes = (cov_rw3r7tb9y().s[17]++, _strkey.StrKey.decodeMed25519PublicKey(address));

  // Decoding M... addresses cannot be done through a simple
  // MuxedAccountMed25519.fromXDR() call, because the definition is:
  //
  //    constructor(attributes: { id: Uint64; ed25519: BrowserBuffer });
  //
  // Note the ID is the first attribute. However, the ID comes *last* in the
  // stringified (base32-encoded) address itself (it's the last 8-byte suffix).
  // The `fromXDR()` method interprets bytes in order, so we need to parse out
  // the raw binary into its requisite parts, i.e. use the MuxedAccountMed25519
  // constructor directly.
  //
  // Refer to https://github.com/stellar/go/blob/master/xdr/muxed_account.go#L26
  // for the Golang implementation of the M... parsing.
  cov_rw3r7tb9y().s[18]++;
  return _xdr["default"].MuxedAccount.keyTypeMuxedEd25519(new _xdr["default"].MuxedAccountMed25519({
    id: _xdr["default"].Uint64.fromXDR(rawBytes.subarray(-8)),
    ed25519: rawBytes.subarray(0, -8)
  }));
}

// Converts an xdr.MuxedAccount into its *true* "M..." string representation.
function _encodeMuxedAccountFullyToAddress(muxedAccount) {
  cov_rw3r7tb9y().f[5]++;
  cov_rw3r7tb9y().s[19]++;
  if (muxedAccount["switch"]() === _xdr["default"].CryptoKeyType.keyTypeEd25519()) {
    cov_rw3r7tb9y().b[6][0]++;
    cov_rw3r7tb9y().s[20]++;
    return encodeMuxedAccountToAddress(muxedAccount);
  } else {
    cov_rw3r7tb9y().b[6][1]++;
  }
  var muxed = (cov_rw3r7tb9y().s[21]++, muxedAccount.med25519());
  cov_rw3r7tb9y().s[22]++;
  return _strkey.StrKey.encodeMed25519PublicKey(_BrowserBuffer["default"].concat([muxed.ed25519(), muxed.id().toXDR('raw')]));
}