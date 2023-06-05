"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FastSigning = void 0;
exports.generate = generate;
exports.sign = sign;
exports.verify = verify;
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2bubcqbflb() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\signing.js";
  var hash = "79ea7fc34076aec85e15960d2f23b1feb57c7932";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\signing.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 24
        }
      },
      "1": {
        start: {
          line: 15,
          column: 27
        },
        end: {
          line: 15,
          column: 45
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 45
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 58
        }
      },
      "4": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 43
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 32
        }
      },
      "6": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "7": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 38
        }
      },
      "8": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 37
        }
      },
      "9": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "10": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 37
        }
      },
      "11": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 55,
          column: 4
        }
      },
      "12": {
        start: {
          line: 51,
          column: 15
        },
        end: {
          line: 51,
          column: 69
        }
      },
      "13": {
        start: {
          line: 52,
          column: 15
        },
        end: {
          line: 52,
          column: 69
        }
      },
      "14": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 55
        }
      },
      "15": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 14
        }
      },
      "16": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 62,
          column: 4
        }
      },
      "17": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 36
        }
      },
      "18": {
        start: {
          line: 59,
          column: 22
        },
        end: {
          line: 59,
          column: 67
        }
      },
      "19": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 60
        }
      },
      "20": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 21
        }
      },
      "21": {
        start: {
          line: 64,
          column: 2
        },
        end: {
          line: 72,
          column: 4
        }
      },
      "22": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 108
        }
      },
      "23": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 36
        }
      },
      "24": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 71,
          column: 5
        }
      },
      "25": {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 68,
          column: 76
        }
      },
      "26": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 19
        }
      },
      "27": {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 14
        }
      },
      "28": {
        start: {
          line: 81,
          column: 15
        },
        end: {
          line: 81,
          column: 35
        }
      },
      "29": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 87,
          column: 4
        }
      },
      "30": {
        start: {
          line: 84,
          column: 27
        },
        end: {
          line: 84,
          column: 55
        }
      },
      "31": {
        start: {
          line: 85,
          column: 21
        },
        end: {
          line: 85,
          column: 63
        }
      },
      "32": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 50
        }
      },
      "33": {
        start: {
          line: 89,
          column: 2
        },
        end: {
          line: 97,
          column: 4
        }
      },
      "34": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 36
        }
      },
      "35": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 49
        }
      },
      "36": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 59
        }
      },
      "37": {
        start: {
          line: 94,
          column: 22
        },
        end: {
          line: 94,
          column: 57
        }
      },
      "38": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 41
        }
      },
      "39": {
        start: {
          line: 99,
          column: 2
        },
        end: {
          line: 106,
          column: 4
        }
      },
      "40": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 36
        }
      },
      "41": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 49
        }
      },
      "42": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 59
        }
      },
      "43": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 103,
          column: 59
        }
      },
      "44": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 65
        }
      },
      "45": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 108,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "sign",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 20
          }
        },
        loc: {
          start: {
            line: 17,
            column: 38
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "verify",
        decl: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 22
          }
        },
        loc: {
          start: {
            line: 21,
            column: 51
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 21
      },
      "2": {
        name: "generate",
        decl: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 25,
            column: 24
          }
        },
        loc: {
          start: {
            line: 25,
            column: 36
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 25
      },
      "3": {
        name: "checkFastSigning",
        decl: {
          start: {
            line: 29,
            column: 9
          },
          end: {
            line: 29,
            column: 25
          }
        },
        loc: {
          start: {
            line: 29,
            column: 28
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 29
      },
      "4": {
        name: "checkFastSigningNode",
        decl: {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 35,
            column: 29
          }
        },
        loc: {
          start: {
            line: 35,
            column: 32
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 35
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 50,
            column: 27
          },
          end: {
            line: 50,
            column: 28
          }
        },
        loc: {
          start: {
            line: 50,
            column: 42
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 50
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 57,
            column: 23
          },
          end: {
            line: 57,
            column: 24
          }
        },
        loc: {
          start: {
            line: 57,
            column: 44
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 57
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 64,
            column: 25
          },
          end: {
            line: 64,
            column: 26
          }
        },
        loc: {
          start: {
            line: 64,
            column: 57
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 64
      },
      "8": {
        name: "checkFastSigningBrowser",
        decl: {
          start: {
            line: 77,
            column: 9
          },
          end: {
            line: 77,
            column: 32
          }
        },
        loc: {
          start: {
            line: 77,
            column: 35
          },
          end: {
            line: 109,
            column: 1
          }
        },
        line: 77
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 28
          }
        },
        loc: {
          start: {
            line: 83,
            column: 42
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 83
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 89,
            column: 23
          },
          end: {
            line: 89,
            column: 24
          }
        },
        loc: {
          start: {
            line: 89,
            column: 44
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 89
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 99,
            column: 25
          },
          end: {
            line: 99,
            column: 26
          }
        },
        loc: {
          start: {
            line: 99,
            column: 57
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
            line: 30,
            column: 9
          },
          end: {
            line: 32,
            column: 31
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 28
          }
        }, {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 31
          }
        }],
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 48,
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
        line: 46
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
      "43": 0,
      "44": 0,
      "45": 0
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
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "79ea7fc34076aec85e15960d2f23b1feb57c7932"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bubcqbflb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2bubcqbflb();
//  This module provides the signing functionality used by the stellar network
//  The code below may look a little strange... this is because we try to provide
//  the most efficient signing method possible.  First, we try to load the
//  native `sodium-native` package for node.js environments, and if that fails we
//  fallback to `tweetnacl`
var actualMethods = (cov_2bubcqbflb().s[0]++, {});

/**
 * Use this flag to check if fast signing (provided by `sodium-native` package) is available.
 * If your app is signing a large number of transaction or verifying a large number
 * of signatures make sure `sodium-native` package is installed.
 */
var FastSigning = (cov_2bubcqbflb().s[1]++, checkFastSigning());
exports.FastSigning = FastSigning;
function sign(data, secretKey) {
  cov_2bubcqbflb().f[0]++;
  cov_2bubcqbflb().s[2]++;
  return actualMethods.sign(data, secretKey);
}
function verify(data, signature, publicKey) {
  cov_2bubcqbflb().f[1]++;
  cov_2bubcqbflb().s[3]++;
  return actualMethods.verify(data, signature, publicKey);
}
function generate(secretKey) {
  cov_2bubcqbflb().f[2]++;
  cov_2bubcqbflb().s[4]++;
  return actualMethods.generate(secretKey);
}
function checkFastSigning() {
  cov_2bubcqbflb().f[3]++;
  cov_2bubcqbflb().s[5]++;
  return typeof window === 'undefined' ? (cov_2bubcqbflb().b[0][0]++, checkFastSigningNode()) : (cov_2bubcqbflb().b[0][1]++, checkFastSigningBrowser());
}
function checkFastSigningNode() {
  cov_2bubcqbflb().f[4]++;
  // NOTE: we use commonjs style require here because es6 imports
  // can only occur at the top level.  thanks, obama.
  var sodium;
  cov_2bubcqbflb().s[6]++;
  try {
    cov_2bubcqbflb().s[7]++;
    // eslint-disable-next-line
    sodium = require('sodium-native');
  } catch (err) {
    cov_2bubcqbflb().s[8]++;
    return checkFastSigningBrowser();
  }
  cov_2bubcqbflb().s[9]++;
  if (!Object.keys(sodium).length) {
    cov_2bubcqbflb().b[1][0]++;
    cov_2bubcqbflb().s[10]++;
    return checkFastSigningBrowser();
  } else {
    cov_2bubcqbflb().b[1][1]++;
  }
  cov_2bubcqbflb().s[11]++;
  actualMethods.generate = function (secretKey) {
    cov_2bubcqbflb().f[5]++;
    var pk = (cov_2bubcqbflb().s[12]++, _BrowserBuffer["default"].alloc(sodium.crypto_sign_PUBLICKEYBYTES));
    var sk = (cov_2bubcqbflb().s[13]++, _BrowserBuffer["default"].alloc(sodium.crypto_sign_SECRETKEYBYTES));
    cov_2bubcqbflb().s[14]++;
    sodium.crypto_sign_seed_keypair(pk, sk, secretKey);
    cov_2bubcqbflb().s[15]++;
    return pk;
  };
  cov_2bubcqbflb().s[16]++;
  actualMethods.sign = function (data, secretKey) {
    cov_2bubcqbflb().f[6]++;
    cov_2bubcqbflb().s[17]++;
    data = _BrowserBuffer["default"].from(data);
    var signature = (cov_2bubcqbflb().s[18]++, _BrowserBuffer["default"].alloc(sodium.crypto_sign_BYTES));
    cov_2bubcqbflb().s[19]++;
    sodium.crypto_sign_detached(signature, data, secretKey);
    cov_2bubcqbflb().s[20]++;
    return signature;
  };
  cov_2bubcqbflb().s[21]++;
  actualMethods.verify = function (data, signature, publicKey) {
    cov_2bubcqbflb().f[7]++;
    cov_2bubcqbflb().s[22]++;
    console.log(JSON.stringify(data), JSON.stringify(signature), JSON.stringify(publicKey), 'VERIFY METHOD');
    cov_2bubcqbflb().s[23]++;
    data = _BrowserBuffer["default"].from(data);
    cov_2bubcqbflb().s[24]++;
    try {
      cov_2bubcqbflb().s[25]++;
      return sodium.crypto_sign_verify_detached(signature, data, publicKey);
    } catch (e) {
      cov_2bubcqbflb().s[26]++;
      return false;
    }
  };
  cov_2bubcqbflb().s[27]++;
  return true;
}
function checkFastSigningBrowser() {
  cov_2bubcqbflb().f[8]++;
  // fallback to `tweetnacl` if we're in the browser or
  // if there was a failure installing `sodium-native`
  // eslint-disable-next-line
  var nacl = (cov_2bubcqbflb().s[28]++, require('tweetnacl'));
  cov_2bubcqbflb().s[29]++;
  actualMethods.generate = function (secretKey) {
    cov_2bubcqbflb().f[9]++;
    var secretKeyUint8 = (cov_2bubcqbflb().s[30]++, new _BrowserBuffer["default"](secretKey));
    var naclKeys = (cov_2bubcqbflb().s[31]++, nacl.sign.keyPair.fromSeed(secretKeyUint8));
    cov_2bubcqbflb().s[32]++;
    return _BrowserBuffer["default"].from(naclKeys.publicKey);
  };
  cov_2bubcqbflb().s[33]++;
  actualMethods.sign = function (data, secretKey) {
    cov_2bubcqbflb().f[10]++;
    cov_2bubcqbflb().s[34]++;
    data = _BrowserBuffer["default"].from(data);
    cov_2bubcqbflb().s[35]++;
    data = new _BrowserBuffer["default"](data.toJSON().data);
    cov_2bubcqbflb().s[36]++;
    secretKey = new _BrowserBuffer["default"](secretKey.toJSON().data);
    var signature = (cov_2bubcqbflb().s[37]++, nacl.sign.detached(data, secretKey));
    cov_2bubcqbflb().s[38]++;
    return _BrowserBuffer["default"].from(signature);
  };
  cov_2bubcqbflb().s[39]++;
  actualMethods.verify = function (data, signature, publicKey) {
    cov_2bubcqbflb().f[11]++;
    cov_2bubcqbflb().s[40]++;
    data = _BrowserBuffer["default"].from(data);
    cov_2bubcqbflb().s[41]++;
    data = new _BrowserBuffer["default"](data.toJSON().data);
    cov_2bubcqbflb().s[42]++;
    signature = new _BrowserBuffer["default"](signature.toJSON().data);
    cov_2bubcqbflb().s[43]++;
    publicKey = new _BrowserBuffer["default"](publicKey.toJSON().data);
    cov_2bubcqbflb().s[44]++;
    return nacl.sign.detached.verify(data, signature, publicKey);
  };
  cov_2bubcqbflb().s[45]++;
  return false;
}