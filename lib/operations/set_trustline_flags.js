"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTrustLineFlags = setTrustLineFlags;
var _xdr = _interopRequireDefault(require("../xdr"));
var _keypair = require("../keypair");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1pd4gw8hy7() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\set_trustline_flags.js";
  var hash = "872cae68ea434140f8f76f16c77e2831e9d1e5ec";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\set_trustline_flags.js",
    statementMap: {
      "0": {
        start: {
          line: 42,
          column: 21
        },
        end: {
          line: 42,
          column: 23
        }
      },
      "1": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "2": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 75
        }
      },
      "3": {
        start: {
          line: 48,
          column: 18
        },
        end: {
          line: 53,
          column: 3
        }
      },
      "4": {
        start: {
          line: 56,
          column: 18
        },
        end: {
          line: 56,
          column: 19
        }
      },
      "5": {
        start: {
          line: 57,
          column: 16
        },
        end: {
          line: 57,
          column: 17
        }
      },
      "6": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 71,
          column: 5
        }
      },
      "7": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "8": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 70
        }
      },
      "9": {
        start: {
          line: 64,
          column: 22
        },
        end: {
          line: 64,
          column: 42
        }
      },
      "10": {
        start: {
          line: 65,
          column: 16
        },
        end: {
          line: 65,
          column: 39
        }
      },
      "11": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "12": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 21
        }
      },
      "13": {
        start: {
          line: 68,
          column: 11
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "14": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 23
        }
      },
      "15": {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 73,
          column: 74
        }
      },
      "16": {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 46
        }
      },
      "17": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 75,
          column: 36
        }
      },
      "18": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 76,
          column: 32
        }
      },
      "19": {
        start: {
          line: 78,
          column: 23
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "20": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 83,
          column: 44
        }
      },
      "21": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 85,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "setTrustLineFlags",
        decl: {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 41,
            column: 33
          }
        },
        loc: {
          start: {
            line: 41,
            column: 45
          },
          end: {
            line: 86,
            column: 1
          }
        },
        line: 41
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 59,
            column: 34
          },
          end: {
            line: 59,
            column: 35
          }
        },
        loc: {
          start: {
            line: 59,
            column: 48
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 59
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 41,
            column: 34
          },
          end: {
            line: 41,
            column: 43
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 41,
            column: 41
          },
          end: {
            line: 41,
            column: 43
          }
        }],
        line: 41
      },
      "1": {
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
      "2": {
        loc: {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 76
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
            column: 36
          }
        }, {
          start: {
            line: 44,
            column: 40
          },
          end: {
            line: 44,
            column: 76
          }
        }],
        line: 44
      },
      "3": {
        loc: {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 62,
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
        line: 60
      },
      "4": {
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }, {
          start: {
            line: 68,
            column: 11
          },
          end: {
            line: 70,
            column: 5
          }
        }],
        line: 66
      },
      "5": {
        loc: {
          start: {
            line: 68,
            column: 11
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 11
          },
          end: {
            line: 70,
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
        line: 68
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
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "872cae68ea434140f8f76f16c77e2831e9d1e5ec"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pd4gw8hy7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1pd4gw8hy7();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Creates a trustline flag configuring operation.
 *
 * For the flags, set them to true to enable them and false to disable them. Any
 * unmodified operations will be marked `undefined` in the result.
 *
 * Note that you can only **clear** the clawbackEnabled flag set; it must be set
 * account-wide via operations.SetOptions (setting
 * xdr.AccountFlags.clawbackEnabled).
 *
 * @function
 * @alias Operation.setTrustLineFlags
 *
 * @param {object} opts - Options object
 * @param {string} opts.trustor     - the account whose trustline this is
 * @param {Asset}  opts.asset       - the asset on the trustline
 * @param {object} opts.flags       - the set of flags to modify
 *
 * @param {bool}   [opts.flags.authorized]  - authorize account to perform
 *     transactions with its credit
 * @param {bool}   [opts.flags.authorizedToMaintainLiabilities] - authorize
 *     account to maintain and reduce liabilities for its credit
 * @param {bool}   [opts.flags.clawbackEnabled] - stop claimable balances on
 *     this trustlines from having clawbacks enabled (this flag can only be set
 *     to false!)
 * @param {string} [opts.source] - The source account for the operation.
 *                                 Defaults to the transaction's source account.
 *
 * @note You must include at least one flag.
 *
 * @return {xdr.SetTrustLineFlagsOp}
 *
 * @link xdr.AccountFlags
 * @link xdr.TrustLineFlags
 * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0035.md#set-trustline-flags-operation
 * @see https://developers.stellar.org/docs/start/list-of-operations/#set-options
 */
function setTrustLineFlags() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1pd4gw8hy7().b[0][0]++, {});
  cov_1pd4gw8hy7().f[0]++;
  var attributes = (cov_1pd4gw8hy7().s[0]++, {});
  cov_1pd4gw8hy7().s[1]++;
  if ((cov_1pd4gw8hy7().b[2][0]++, _typeof(opts.flags) !== 'object') || (cov_1pd4gw8hy7().b[2][1]++, Object.keys(opts.flags).length === 0)) {
    cov_1pd4gw8hy7().b[1][0]++;
    cov_1pd4gw8hy7().s[2]++;
    throw new Error('opts.flags must be a map of boolean flags to modify');
  } else {
    cov_1pd4gw8hy7().b[1][1]++;
  }
  var mapping = (cov_1pd4gw8hy7().s[3]++, {
    authorized: _xdr["default"].TrustLineFlags.authorizedFlag(),
    authorizedToMaintainLiabilities: _xdr["default"].TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
    clawbackEnabled: _xdr["default"].TrustLineFlags.trustlineClawbackEnabledFlag()
  });

  /* eslint no-bitwise: "off" */
  var clearFlag = (cov_1pd4gw8hy7().s[4]++, 0);
  var setFlag = (cov_1pd4gw8hy7().s[5]++, 0);
  cov_1pd4gw8hy7().s[6]++;
  Object.keys(opts.flags).forEach(function (flagName) {
    cov_1pd4gw8hy7().f[1]++;
    cov_1pd4gw8hy7().s[7]++;
    if (!Object.prototype.hasOwnProperty.call(mapping, flagName)) {
      cov_1pd4gw8hy7().b[3][0]++;
      cov_1pd4gw8hy7().s[8]++;
      throw new Error("unsupported flag name specified: ".concat(flagName));
    } else {
      cov_1pd4gw8hy7().b[3][1]++;
    }
    var flagValue = (cov_1pd4gw8hy7().s[9]++, opts.flags[flagName]);
    var bit = (cov_1pd4gw8hy7().s[10]++, mapping[flagName].value);
    cov_1pd4gw8hy7().s[11]++;
    if (flagValue === true) {
      cov_1pd4gw8hy7().b[4][0]++;
      cov_1pd4gw8hy7().s[12]++;
      setFlag |= bit;
    } else {
      cov_1pd4gw8hy7().b[4][1]++;
      cov_1pd4gw8hy7().s[13]++;
      if (flagValue === false) {
        cov_1pd4gw8hy7().b[5][0]++;
        cov_1pd4gw8hy7().s[14]++;
        clearFlag |= bit;
      } else {
        cov_1pd4gw8hy7().b[5][1]++;
      }
    }
  });
  cov_1pd4gw8hy7().s[15]++;
  attributes.trustor = _keypair.Keypair.fromPublicKey(opts.trustor).xdrAccountId();
  cov_1pd4gw8hy7().s[16]++;
  attributes.asset = opts.asset.toXDRObject();
  cov_1pd4gw8hy7().s[17]++;
  attributes.clearFlags = clearFlag;
  cov_1pd4gw8hy7().s[18]++;
  attributes.setFlags = setFlag;
  var opAttributes = (cov_1pd4gw8hy7().s[19]++, {
    body: _xdr["default"].OperationBody.setTrustLineFlags(new _xdr["default"].SetTrustLineFlagsOp(attributes))
  });
  cov_1pd4gw8hy7().s[20]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1pd4gw8hy7().s[21]++;
  return new _xdr["default"].Operation(opAttributes);
}