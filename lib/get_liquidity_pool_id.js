"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolFeeV18 = void 0;
exports.getLiquidityPoolId = getLiquidityPoolId;
var _xdr = _interopRequireDefault(require("./xdr"));
var _asset = require("./asset");
var _hashing = require("./hashing");
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_olekc9ahj() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\get_liquidity_pool_id.js";
  var hash = "f91bab0288232ea1717aad62faa42815dbde37cb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\get_liquidity_pool_id.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 7,
          column: 37
        }
      },
      "1": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 52
        }
      },
      "3": {
        start: {
          line: 31,
          column: 34
        },
        end: {
          line: 31,
          column: 57
        }
      },
      "4": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "5": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 41
        }
      },
      "6": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "7": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 41
        }
      },
      "8": {
        start: {
          line: 38,
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
          column: 38
        }
      },
      "10": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "11": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 61
        }
      },
      "12": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 64
        }
      },
      "13": {
        start: {
          line: 48,
          column: 23
        },
        end: {
          line: 52,
          column: 12
        }
      },
      "14": {
        start: {
          line: 53,
          column: 18
        },
        end: {
          line: 53,
          column: 66
        }
      },
      "15": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "getLiquidityPoolId",
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 34
          }
        },
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 30
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 25,
            column: 28
          },
          end: {
            line: 25,
            column: 30
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 29,
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
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
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
        line: 32
      },
      "3": {
        loc: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 13
          }
        }, {
          start: {
            line: 32,
            column: 17
          },
          end: {
            line: 32,
            column: 43
          }
        }],
        line: 32
      },
      "4": {
        loc: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 37,
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
            line: 37,
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
      "5": {
        loc: {
          start: {
            line: 35,
            column: 6
          },
          end: {
            line: 35,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 6
          },
          end: {
            line: 35,
            column: 13
          }
        }, {
          start: {
            line: 35,
            column: 17
          },
          end: {
            line: 35,
            column: 43
          }
        }],
        line: 35
      },
      "6": {
        loc: {
          start: {
            line: 38,
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
            line: 38,
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
        line: 38
      },
      "7": {
        loc: {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 10
          }
        }, {
          start: {
            line: 38,
            column: 14
          },
          end: {
            line: 38,
            column: 41
          }
        }],
        line: 38
      },
      "8": {
        loc: {
          start: {
            line: 42,
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
            line: 42,
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
      "15": 0
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
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f91bab0288232ea1717aad62faa42815dbde37cb"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_olekc9ahj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_olekc9ahj();
// LiquidityPoolFeeV18 is the default liquidity pool fee in protocol v18. It defaults to 30 base points (0.3%).
var LiquidityPoolFeeV18 = (cov_olekc9ahj().s[0]++, 30);

/**
 * getLiquidityPoolId computes the Pool ID for the given assets, fee and pool type.
 *
 * @see [stellar-core getPoolID](https://github.com/stellar/stellar-core/blob/9f3a48c6a8f1aa77b6043a055d0638661f718080/src/ledger/test/LedgerTxnTests.cpp#L3746-L3751)
 *
 * @export
 * @param {string} liquidityPoolType – A string representing the liquidity pool type.
 * @param {object} liquidityPoolParameters        – The liquidity pool parameters.
 * @param {Asset}  liquidityPoolParameters.assetA – The first asset in the Pool, it must respect the rule assetA < assetB.
 * @param {Asset}  liquidityPoolParameters.assetB – The second asset in the Pool, it must respect the rule assetA < assetB.
 * @param {number} liquidityPoolParameters.fee    – The liquidity pool fee. For now the only fee supported is `30`.
 *
 * @return {Uint8Array} the raw Pool ID buffer, which can be stringfied with `toString('hex')`
 */
exports.LiquidityPoolFeeV18 = LiquidityPoolFeeV18;
function getLiquidityPoolId(liquidityPoolType) {
  var liquidityPoolParameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_olekc9ahj().b[0][0]++, {});
  cov_olekc9ahj().f[0]++;
  cov_olekc9ahj().s[1]++;
  if (liquidityPoolType !== 'constant_product') {
    cov_olekc9ahj().b[1][0]++;
    cov_olekc9ahj().s[2]++;
    throw new Error('liquidityPoolType is invalid');
  } else {
    cov_olekc9ahj().b[1][1]++;
  }
  var _ref = (cov_olekc9ahj().s[3]++, liquidityPoolParameters),
    assetA = _ref.assetA,
    assetB = _ref.assetB,
    fee = _ref.fee;
  cov_olekc9ahj().s[4]++;
  if ((cov_olekc9ahj().b[3][0]++, !assetA) || (cov_olekc9ahj().b[3][1]++, !(assetA instanceof _asset.Asset))) {
    cov_olekc9ahj().b[2][0]++;
    cov_olekc9ahj().s[5]++;
    throw new Error('assetA is invalid');
  } else {
    cov_olekc9ahj().b[2][1]++;
  }
  cov_olekc9ahj().s[6]++;
  if ((cov_olekc9ahj().b[5][0]++, !assetB) || (cov_olekc9ahj().b[5][1]++, !(assetB instanceof _asset.Asset))) {
    cov_olekc9ahj().b[4][0]++;
    cov_olekc9ahj().s[7]++;
    throw new Error('assetB is invalid');
  } else {
    cov_olekc9ahj().b[4][1]++;
  }
  cov_olekc9ahj().s[8]++;
  if ((cov_olekc9ahj().b[7][0]++, !fee) || (cov_olekc9ahj().b[7][1]++, fee !== LiquidityPoolFeeV18)) {
    cov_olekc9ahj().b[6][0]++;
    cov_olekc9ahj().s[9]++;
    throw new Error('fee is invalid');
  } else {
    cov_olekc9ahj().b[6][1]++;
  }
  cov_olekc9ahj().s[10]++;
  if (_asset.Asset.compare(assetA, assetB) !== -1) {
    cov_olekc9ahj().b[8][0]++;
    cov_olekc9ahj().s[11]++;
    throw new Error('Assets are not in lexicographic order');
  } else {
    cov_olekc9ahj().b[8][1]++;
  }
  var lpTypeData = (cov_olekc9ahj().s[12]++, _xdr["default"].LiquidityPoolType.liquidityPoolConstantProduct().toXDR());
  var lpParamsData = (cov_olekc9ahj().s[13]++, new _xdr["default"].LiquidityPoolConstantProductParameters({
    assetA: assetA.toXDRObject(),
    assetB: assetB.toXDRObject(),
    fee: fee
  }).toXDR());
  var payload = (cov_olekc9ahj().s[14]++, _BrowserBuffer["default"].concat([lpTypeData, lpParamsData]));
  cov_olekc9ahj().s[15]++;
  return (0, _hashing.hash)(payload);
}