"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liquidityPoolWithdraw = liquidityPoolWithdraw;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2c8eds4ur2() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\liquidity_pool_withdraw.js";
  var hash = "09c935da7800371799ddfb60f5e1bb9d4d020e43";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\liquidity_pool_withdraw.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 20,
          column: 23
        }
      },
      "1": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 64
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 79
        }
      },
      "4": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "5": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 55
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 53
        }
      },
      "7": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "8": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 59
        }
      },
      "9": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 61
        }
      },
      "10": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "11": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 59
        }
      },
      "12": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 61
        }
      },
      "13": {
        start: {
          line: 41,
          column: 34
        },
        end: {
          line: 41,
          column: 77
        }
      },
      "14": {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "15": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 44
        }
      },
      "16": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "liquidityPoolWithdraw",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 37
          }
        },
        loc: {
          start: {
            line: 19,
            column: 49
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 38
          },
          end: {
            line: 19,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 19,
            column: 45
          },
          end: {
            line: 19,
            column: 47
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
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
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
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
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
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
        line: 31
      },
      "4": {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 38,
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
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "09c935da7800371799ddfb60f5e1bb9d4d020e43"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2c8eds4ur2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2c8eds4ur2();
/**
 * Creates a liquidity pool withdraw operation.
 *
 * @function
 * @alias Operation.liquidityPoolWithdraw
 * @see https://developers.stellar.org/docs/start/list-of-operations/#liquidity-pool-withdraw
 *
 * @param {object} opts - Options object
 * @param {string} opts.liquidityPoolId - The liquidity pool ID.
 * @param {string} opts.amount - Amount of pool shares to withdraw.
 * @param {string} opts.minAmountA - Minimum amount of first asset to withdraw.
 * @param {string} opts.minAmountB - Minimum amount of second asset to withdraw.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 *
 * @returns {xdr.Operation}   The resulting operation (xdr.LiquidityPoolWithdrawOp).
 */
function liquidityPoolWithdraw() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2c8eds4ur2().b[0][0]++, {});
  cov_2c8eds4ur2().f[0]++;
  var attributes = (cov_2c8eds4ur2().s[0]++, {});
  cov_2c8eds4ur2().s[1]++;
  if (!opts.liquidityPoolId) {
    cov_2c8eds4ur2().b[1][0]++;
    cov_2c8eds4ur2().s[2]++;
    throw new TypeError('liquidityPoolId argument is required');
  } else {
    cov_2c8eds4ur2().b[1][1]++;
  }
  cov_2c8eds4ur2().s[3]++;
  attributes.liquidityPoolId = _xdr["default"].PoolId.fromXDR(opts.liquidityPoolId, 'hex');
  cov_2c8eds4ur2().s[4]++;
  if (!this.isValidAmount(opts.amount)) {
    cov_2c8eds4ur2().b[2][0]++;
    cov_2c8eds4ur2().s[5]++;
    throw new TypeError('amount argument is required');
  } else {
    cov_2c8eds4ur2().b[2][1]++;
  }
  cov_2c8eds4ur2().s[6]++;
  attributes.amount = this._toXDRAmount(opts.amount);
  cov_2c8eds4ur2().s[7]++;
  if (!this.isValidAmount(opts.minAmountA, true)) {
    cov_2c8eds4ur2().b[3][0]++;
    cov_2c8eds4ur2().s[8]++;
    throw new TypeError('minAmountA argument is required');
  } else {
    cov_2c8eds4ur2().b[3][1]++;
  }
  cov_2c8eds4ur2().s[9]++;
  attributes.minAmountA = this._toXDRAmount(opts.minAmountA);
  cov_2c8eds4ur2().s[10]++;
  if (!this.isValidAmount(opts.minAmountB, true)) {
    cov_2c8eds4ur2().b[4][0]++;
    cov_2c8eds4ur2().s[11]++;
    throw new TypeError('minAmountB argument is required');
  } else {
    cov_2c8eds4ur2().b[4][1]++;
  }
  cov_2c8eds4ur2().s[12]++;
  attributes.minAmountB = this._toXDRAmount(opts.minAmountB);
  var liquidityPoolWithdrawOp = (cov_2c8eds4ur2().s[13]++, new _xdr["default"].LiquidityPoolWithdrawOp(attributes));
  var opAttributes = (cov_2c8eds4ur2().s[14]++, {
    body: _xdr["default"].OperationBody.liquidityPoolWithdraw(liquidityPoolWithdrawOp)
  });
  cov_2c8eds4ur2().s[15]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2c8eds4ur2().s[16]++;
  return new _xdr["default"].Operation(opAttributes);
}