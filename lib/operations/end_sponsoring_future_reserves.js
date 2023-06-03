"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endSponsoringFutureReserves = endSponsoringFutureReserves;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_uvozezv8q() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\end_sponsoring_future_reserves.js";
  var hash = "150b0396119616d482edc3506aa0b55f8df491e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\end_sponsoring_future_reserves.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 23
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 70
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 44
        }
      },
      "3": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "endSponsoringFutureReserves",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 43
          }
        },
        loc: {
          start: {
            line: 15,
            column: 55
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 44
          },
          end: {
            line: 15,
            column: 53
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 51
          },
          end: {
            line: 15,
            column: 53
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "150b0396119616d482edc3506aa0b55f8df491e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_uvozezv8q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_uvozezv8q();
/**
 * Create an "end sponsoring future reserves" operation.
 * @function
 * @alias Operation.endSponsoringFutureReserves
 * @param {object} opts Options object
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.endSponsoringFutureReserves();
 *
 */
function endSponsoringFutureReserves() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_uvozezv8q().b[0][0]++, {});
  cov_uvozezv8q().f[0]++;
  var opAttributes = (cov_uvozezv8q().s[0]++, {});
  cov_uvozezv8q().s[1]++;
  opAttributes.body = _xdr["default"].OperationBody.endSponsoringFutureReserves();
  cov_uvozezv8q().s[2]++;
  this.setSourceAccount(opAttributes, opts);
  cov_uvozezv8q().s[3]++;
  return new _xdr["default"].Operation(opAttributes);
}