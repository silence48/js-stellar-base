"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClaimableBalance = createClaimableBalance;
var _xdr = _interopRequireDefault(require("../xdr"));
var _asset = require("../asset");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_yhjh4n7c1() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\create_claimable_balance.js";
  var hash = "c797bacedaf83f2ed4e9650542e7f2760c254fd6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\create_claimable_balance.js",
    statementMap: {
      "0": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "1": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 42,
          column: 6
        }
      },
      "2": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 47,
          column: 3
        }
      },
      "3": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 73
        }
      },
      "4": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "5": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 58
        }
      },
      "6": {
        start: {
          line: 53,
          column: 21
        },
        end: {
          line: 53,
          column: 23
        }
      },
      "7": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 46
        }
      },
      "8": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 55,
          column: 53
        }
      },
      "9": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 56,
          column: 68
        }
      },
      "10": {
        start: {
          line: 56,
          column: 51
        },
        end: {
          line: 56,
          column: 66
        }
      },
      "11": {
        start: {
          line: 58,
          column: 35
        },
        end: {
          line: 58,
          column: 79
        }
      },
      "12": {
        start: {
          line: 60,
          column: 23
        },
        end: {
          line: 60,
          column: 25
        }
      },
      "13": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 63,
          column: 4
        }
      },
      "14": {
        start: {
          line: 64,
          column: 2
        },
        end: {
          line: 64,
          column: 44
        }
      },
      "15": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 66,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "createClaimableBalance",
        decl: {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 38,
            column: 38
          }
        },
        loc: {
          start: {
            line: 38,
            column: 45
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 56,
            column: 44
          },
          end: {
            line: 56,
            column: 45
          }
        },
        loc: {
          start: {
            line: 56,
            column: 51
          },
          end: {
            line: 56,
            column: 66
          }
        },
        line: 56
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 43,
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
            line: 43,
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
      "1": {
        loc: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 47,
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
        line: 45
      },
      "2": {
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
      },
      "3": {
        loc: {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 36
          }
        }, {
          start: {
            line: 49,
            column: 40
          },
          end: {
            line: 49,
            column: 67
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
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c797bacedaf83f2ed4e9650542e7f2760c254fd6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_yhjh4n7c1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_yhjh4n7c1();
/**
 * Create a new claimable balance operation.
 *
 * @function
 * @alias Operation.createClaimableBalance
 *
 * @param {object} opts Options object
 * @param {Asset} opts.asset - The asset for the claimable balance.
 * @param {string} opts.amount - Amount.
 * @param {Claimant[]} opts.claimants - An array of Claimants
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 *
 * @returns {xdr.Operation} Create claimable balance operation
 *
 * @example
 * const asset = new Asset(
 *   'USD',
 *   'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7'
 * );
 * const amount = '100.0000000';
 * const claimants = [
 *   new Claimant(
 *     'GCEZWKCA5VLDNRLN3RPRJMRZOX3Z6G5CHCGSNFHEYVXM3XOJMDS674JZ',
 *      Claimant.predicateBeforeAbsoluteTime("4102444800000")
 *   )
 * ];
 *
 * const op = Operation.createClaimableBalance({
 *   asset,
 *   amount,
 *   claimants
 * });
 *
 */
function createClaimableBalance(opts) {
  cov_yhjh4n7c1().f[0]++;
  cov_yhjh4n7c1().s[0]++;
  if (!(opts.asset instanceof _asset.Asset)) {
    cov_yhjh4n7c1().b[0][0]++;
    cov_yhjh4n7c1().s[1]++;
    throw new Error('must provide an asset for create claimable balance operation');
  } else {
    cov_yhjh4n7c1().b[0][1]++;
  }
  cov_yhjh4n7c1().s[2]++;
  if (!this.isValidAmount(opts.amount)) {
    cov_yhjh4n7c1().b[1][0]++;
    cov_yhjh4n7c1().s[3]++;
    throw new TypeError(this.constructAmountRequirementsError('amount'));
  } else {
    cov_yhjh4n7c1().b[1][1]++;
  }
  cov_yhjh4n7c1().s[4]++;
  if ((cov_yhjh4n7c1().b[3][0]++, !Array.isArray(opts.claimants)) || (cov_yhjh4n7c1().b[3][1]++, opts.claimants.length === 0)) {
    cov_yhjh4n7c1().b[2][0]++;
    cov_yhjh4n7c1().s[5]++;
    throw new Error('must provide at least one claimant');
  } else {
    cov_yhjh4n7c1().b[2][1]++;
  }
  var attributes = (cov_yhjh4n7c1().s[6]++, {});
  cov_yhjh4n7c1().s[7]++;
  attributes.asset = opts.asset.toXDRObject();
  cov_yhjh4n7c1().s[8]++;
  attributes.amount = this._toXDRAmount(opts.amount);
  cov_yhjh4n7c1().s[9]++;
  attributes.claimants = opts.claimants.map(function (c) {
    cov_yhjh4n7c1().f[1]++;
    cov_yhjh4n7c1().s[10]++;
    return c.toXDRObject();
  });
  var createClaimableBalanceOp = (cov_yhjh4n7c1().s[11]++, new _xdr["default"].CreateClaimableBalanceOp(attributes));
  var opAttributes = (cov_yhjh4n7c1().s[12]++, {});
  cov_yhjh4n7c1().s[13]++;
  opAttributes.body = _xdr["default"].OperationBody.createClaimableBalance(createClaimableBalanceOp);
  cov_yhjh4n7c1().s[14]++;
  this.setSourceAccount(opAttributes, opts);
  cov_yhjh4n7c1().s[15]++;
  return new _xdr["default"].Operation(opAttributes);
}