"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clawback = clawback;
var _xdr = _interopRequireDefault(require("../xdr"));
var _decode_encode_muxed_account = require("../util/decode_encode_muxed_account");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1ddtao17cz() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\clawback.js";
  var hash = "1492bc2d02f28640ccbf478345151b1d884edca0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\clawback.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 21
        },
        end: {
          line: 24,
          column: 23
        }
      },
      "1": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "2": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 73
        }
      },
      "3": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 53
        }
      },
      "4": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 46
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "6": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 61
        }
      },
      "7": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 47
        }
      },
      "8": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "9": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 44
        }
      },
      "10": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "clawback",
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 24
          }
        },
        loc: {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 23
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
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
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
        line: 25
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
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1492bc2d02f28640ccbf478345151b1d884edca0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ddtao17cz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ddtao17cz();
/**
 * Creates a clawback operation.
 *
 * @function
 * @alias Operation.clawback
 *
 * @param {object} opts - Options object
 * @param {Asset}  opts.asset   - The asset being clawed back.
 * @param {string} opts.amount  - The amount of the asset to claw back.
 * @param {string} opts.from    - The public key of the (optionally-muxed)
 *     account to claw back from.
 *
 * @param {string} [opts.source] - The source account for the operation.
 *     Defaults to the transaction's source account.
 *
 * @return {xdr.ClawbackOp}
 *
 * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0035.md#clawback-operation
 */
function clawback(opts) {
  cov_1ddtao17cz().f[0]++;
  var attributes = (cov_1ddtao17cz().s[0]++, {});
  cov_1ddtao17cz().s[1]++;
  if (!this.isValidAmount(opts.amount)) {
    cov_1ddtao17cz().b[0][0]++;
    cov_1ddtao17cz().s[2]++;
    throw new TypeError(this.constructAmountRequirementsError('amount'));
  } else {
    cov_1ddtao17cz().b[0][1]++;
  }
  cov_1ddtao17cz().s[3]++;
  attributes.amount = this._toXDRAmount(opts.amount);
  cov_1ddtao17cz().s[4]++;
  attributes.asset = opts.asset.toXDRObject();
  cov_1ddtao17cz().s[5]++;
  try {
    cov_1ddtao17cz().s[6]++;
    attributes.from = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(opts.from);
  } catch (e) {
    cov_1ddtao17cz().s[7]++;
    throw new Error('from address is invalid');
  }
  var opAttributes = (cov_1ddtao17cz().s[8]++, {
    body: _xdr["default"].OperationBody.clawback(new _xdr["default"].ClawbackOp(attributes))
  });
  cov_1ddtao17cz().s[9]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1ddtao17cz().s[10]++;
  return new _xdr["default"].Operation(opAttributes);
}