"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.claimClaimableBalance = claimClaimableBalance;
exports.validateClaimableBalanceId = validateClaimableBalanceId;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1pubez7fch() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\claim_claimable_balance.js";
  var hash = "94c2aeb2ba30fb1150fe6cd193ebc74a29c8ae5d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\claim_claimable_balance.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 45
        }
      },
      "1": {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 21,
          column: 23
        }
      },
      "2": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 79
        }
      },
      "3": {
        start: {
          line: 23,
          column: 34
        },
        end: {
          line: 23,
          column: 77
        }
      },
      "4": {
        start: {
          line: 25,
          column: 23
        },
        end: {
          line: 25,
          column: 25
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 4
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 44
        }
      },
      "7": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 41
        }
      },
      "8": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "9": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "claimClaimableBalance",
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 37
          }
        },
        loc: {
          start: {
            line: 18,
            column: 49
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "validateClaimableBalanceId",
        decl: {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 34,
            column: 42
          }
        },
        loc: {
          start: {
            line: 34,
            column: 54
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 34
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 38
          },
          end: {
            line: 18,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 18,
            column: 45
          },
          end: {
            line: 18,
            column: 47
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 40,
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
        line: 35
      },
      "2": {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 37,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 33
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 31
          }
        }],
        line: 36
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "94c2aeb2ba30fb1150fe6cd193ebc74a29c8ae5d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pubez7fch = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1pubez7fch();
/**
 * Create a new claim claimable balance operation.
 * @function
 * @alias Operation.claimClaimableBalance
 * @param {object} opts Options object
 * @param {string} opts.balanceId - The claimable balance id to be claimed.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} Claim claimable balance operation
 *
 * @example
 * const op = Operation.claimClaimableBalance({
 *   balanceId: '00000000da0d57da7d4850e7fc10d2a9d0ebc731f7afb40574c03395b17d49149b91f5be',
 * });
 *
 */
function claimClaimableBalance() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1pubez7fch().b[0][0]++, {});
  cov_1pubez7fch().f[0]++;
  cov_1pubez7fch().s[0]++;
  validateClaimableBalanceId(opts.balanceId);
  var attributes = (cov_1pubez7fch().s[1]++, {});
  cov_1pubez7fch().s[2]++;
  attributes.balanceId = _xdr["default"].ClaimableBalanceId.fromXDR(opts.balanceId, 'hex');
  var claimClaimableBalanceOp = (cov_1pubez7fch().s[3]++, new _xdr["default"].ClaimClaimableBalanceOp(attributes));
  var opAttributes = (cov_1pubez7fch().s[4]++, {});
  cov_1pubez7fch().s[5]++;
  opAttributes.body = _xdr["default"].OperationBody.claimClaimableBalance(claimClaimableBalanceOp);
  cov_1pubez7fch().s[6]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1pubez7fch().s[7]++;
  return new _xdr["default"].Operation(opAttributes);
}
function validateClaimableBalanceId(balanceId) {
  cov_1pubez7fch().f[1]++;
  cov_1pubez7fch().s[8]++;
  if ((cov_1pubez7fch().b[2][0]++, typeof balanceId !== 'string') || (cov_1pubez7fch().b[2][1]++, balanceId.length !== 8 + 64) /* 8b discriminant + 64b string */) {
    cov_1pubez7fch().b[1][0]++;
    cov_1pubez7fch().s[9]++;
    throw new Error('must provide a valid claimable balance id');
  } else {
    cov_1pubez7fch().b[1][1]++;
  }
}