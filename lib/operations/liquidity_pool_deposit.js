"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liquidityPoolDeposit = liquidityPoolDeposit;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_zgqrt77aw() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\liquidity_pool_deposit.js";
  var hash = "2ac8a5c98518c2ac37796c62a0bd0dd96982213c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\liquidity_pool_deposit.js",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 74
        },
        end: {
          line: 26,
          column: 78
        }
      },
      "1": {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 23
        }
      },
      "2": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "3": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 64
        }
      },
      "4": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 74
        }
      },
      "5": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "6": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 59
        }
      },
      "7": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 56
        }
      },
      "8": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "9": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 59
        }
      },
      "10": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 56
        }
      },
      "11": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "12": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 57
        }
      },
      "13": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 51
        }
      },
      "14": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "15": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 57
        }
      },
      "16": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 51
        }
      },
      "17": {
        start: {
          line: 54,
          column: 33
        },
        end: {
          line: 54,
          column: 75
        }
      },
      "18": {
        start: {
          line: 55,
          column: 23
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "19": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 44
        }
      },
      "20": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "liquidityPoolDeposit",
        decl: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 25,
            column: 36
          }
        },
        loc: {
          start: {
            line: 25,
            column: 48
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 37
          },
          end: {
            line: 25,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 25,
            column: 44
          },
          end: {
            line: 25,
            column: 46
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 31,
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
        line: 29
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 36,
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
        line: 34
      },
      "3": {
        loc: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 41,
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
            line: 41,
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
      "4": {
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
      "5": {
        loc: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
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
        line: 49
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
      "0": 0
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
    hash: "2ac8a5c98518c2ac37796c62a0bd0dd96982213c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zgqrt77aw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_zgqrt77aw();
/**
 * Creates a liquidity pool deposit operation.
 *
 * @function
 * @alias Operation.liquidityPoolDeposit
 * @see https://developers.stellar.org/docs/start/list-of-operations/#liquidity-pool-deposit
 *
 * @param {object} opts - Options object
 * @param {string} opts.liquidityPoolId - The liquidity pool ID.
 * @param {string} opts.maxAmountA - Maximum amount of first asset to deposit.
 * @param {string} opts.maxAmountB - Maximum amount of second asset to deposit.
 * @param {number|string|BigNumber|Object} opts.minPrice -  Minimum depositA/depositB price.
 * @param {number} opts.minPrice.n - If `opts.minPrice` is an object: the price numerator
 * @param {number} opts.minPrice.d - If `opts.minPrice` is an object: the price denominator
 * @param {number|string|BigNumber|Object} opts.maxPrice -  Maximum depositA/depositB price.
 * @param {number} opts.maxPrice.n - If `opts.maxPrice` is an object: the price numerator
 * @param {number} opts.maxPrice.d - If `opts.maxPrice` is an object: the price denominator
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 *
 * @returns {xdr.Operation} The resulting operation (xdr.LiquidityPoolDepositOp).
 */
function liquidityPoolDeposit() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_zgqrt77aw().b[0][0]++, {});
  cov_zgqrt77aw().f[0]++;
  var _ref = (cov_zgqrt77aw().s[0]++, opts),
    liquidityPoolId = _ref.liquidityPoolId,
    maxAmountA = _ref.maxAmountA,
    maxAmountB = _ref.maxAmountB,
    minPrice = _ref.minPrice,
    maxPrice = _ref.maxPrice;
  var attributes = (cov_zgqrt77aw().s[1]++, {});
  cov_zgqrt77aw().s[2]++;
  if (!liquidityPoolId) {
    cov_zgqrt77aw().b[1][0]++;
    cov_zgqrt77aw().s[3]++;
    throw new TypeError('liquidityPoolId argument is required');
  } else {
    cov_zgqrt77aw().b[1][1]++;
  }
  cov_zgqrt77aw().s[4]++;
  attributes.liquidityPoolId = _xdr["default"].PoolId.fromXDR(liquidityPoolId, 'hex');
  cov_zgqrt77aw().s[5]++;
  if (!this.isValidAmount(maxAmountA, true)) {
    cov_zgqrt77aw().b[2][0]++;
    cov_zgqrt77aw().s[6]++;
    throw new TypeError('maxAmountA argument is required');
  } else {
    cov_zgqrt77aw().b[2][1]++;
  }
  cov_zgqrt77aw().s[7]++;
  attributes.maxAmountA = this._toXDRAmount(maxAmountA);
  cov_zgqrt77aw().s[8]++;
  if (!this.isValidAmount(maxAmountB, true)) {
    cov_zgqrt77aw().b[3][0]++;
    cov_zgqrt77aw().s[9]++;
    throw new TypeError('maxAmountB argument is required');
  } else {
    cov_zgqrt77aw().b[3][1]++;
  }
  cov_zgqrt77aw().s[10]++;
  attributes.maxAmountB = this._toXDRAmount(maxAmountB);
  cov_zgqrt77aw().s[11]++;
  if ((0, _isUndefined["default"])(minPrice)) {
    cov_zgqrt77aw().b[4][0]++;
    cov_zgqrt77aw().s[12]++;
    throw new TypeError('minPrice argument is required');
  } else {
    cov_zgqrt77aw().b[4][1]++;
  }
  cov_zgqrt77aw().s[13]++;
  attributes.minPrice = this._toXDRPrice(minPrice);
  cov_zgqrt77aw().s[14]++;
  if ((0, _isUndefined["default"])(maxPrice)) {
    cov_zgqrt77aw().b[5][0]++;
    cov_zgqrt77aw().s[15]++;
    throw new TypeError('maxPrice argument is required');
  } else {
    cov_zgqrt77aw().b[5][1]++;
  }
  cov_zgqrt77aw().s[16]++;
  attributes.maxPrice = this._toXDRPrice(maxPrice);
  var liquidityPoolDepositOp = (cov_zgqrt77aw().s[17]++, new _xdr["default"].LiquidityPoolDepositOp(attributes));
  var opAttributes = (cov_zgqrt77aw().s[18]++, {
    body: _xdr["default"].OperationBody.liquidityPoolDeposit(liquidityPoolDepositOp)
  });
  cov_zgqrt77aw().s[19]++;
  this.setSourceAccount(opAttributes, opts);
  cov_zgqrt77aw().s[20]++;
  return new _xdr["default"].Operation(opAttributes);
}