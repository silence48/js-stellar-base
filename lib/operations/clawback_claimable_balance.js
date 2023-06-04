"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clawbackClaimableBalance = clawbackClaimableBalance;
var _xdr = _interopRequireDefault(require("../xdr"));
var _claim_claimable_balance = require("./claim_claimable_balance");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_23kqwxa76h() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\clawback_claimable_balance.js";
  var hash = "f43e24daad8e8cd29381e1c23afead76ad2c51b6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\clawback_claimable_balance.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 45
        }
      },
      "1": {
        start: {
          line: 25,
          column: 21
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "2": {
        start: {
          line: 29,
          column: 23
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "3": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 44
        }
      },
      "4": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "clawbackClaimableBalance",
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 40
          }
        },
        loc: {
          start: {
            line: 22,
            column: 52
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 41
          },
          end: {
            line: 22,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 22,
            column: 48
          },
          end: {
            line: 22,
            column: 50
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f43e24daad8e8cd29381e1c23afead76ad2c51b6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23kqwxa76h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_23kqwxa76h();
/**
 * Creates a clawback operation for a claimable balance.
 *
 * @function
 * @alias Operation.clawbackClaimableBalance
 * @param {object} opts - Options object
 * @param {string} opts.balanceId - The claimable balance ID to be clawed back.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 *
 * @return {xdr.ClawbackClaimableBalanceOp}
 *
 * @example
 * const op = Operation.clawbackClaimableBalance({
 *   balanceId: '00000000da0d57da7d4850e7fc10d2a9d0ebc731f7afb40574c03395b17d49149b91f5be',
 * });
 *
 * @link https://github.com/stellar/stellar-protocol/blob/master/core/cap-0035.md#clawback-claimable-balance-operation
 */
function clawbackClaimableBalance() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_23kqwxa76h().b[0][0]++, {});
  cov_23kqwxa76h().f[0]++;
  cov_23kqwxa76h().s[0]++;
  (0, _claim_claimable_balance.validateClaimableBalanceId)(opts.balanceId);
  var attributes = (cov_23kqwxa76h().s[1]++, {
    balanceId: _xdr["default"].ClaimableBalanceId.fromXDR(opts.balanceId, 'hex')
  });
  var opAttributes = (cov_23kqwxa76h().s[2]++, {
    body: _xdr["default"].OperationBody.clawbackClaimableBalance(new _xdr["default"].ClawbackClaimableBalanceOp(attributes))
  });
  cov_23kqwxa76h().s[3]++;
  this.setSourceAccount(opAttributes, opts);
  cov_23kqwxa76h().s[4]++;
  return new _xdr["default"].Operation(opAttributes);
}