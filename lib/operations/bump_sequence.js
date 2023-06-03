"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bumpSequence = bumpSequence;
var _jsXdr = require("js-xdr");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_15h3wsncx9() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\bump_sequence.js";
  var hash = "cd98c9b36c59efff3f3694eb7131f5f099c130a7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\bump_sequence.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 21
        },
        end: {
          line: 16,
          column: 23
        }
      },
      "1": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 47
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 31
        }
      },
      "5": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 59
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 52
        }
      },
      "7": {
        start: {
          line: 31,
          column: 25
        },
        end: {
          line: 31,
          column: 59
        }
      },
      "8": {
        start: {
          line: 33,
          column: 23
        },
        end: {
          line: 33,
          column: 25
        }
      },
      "9": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 69
        }
      },
      "10": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 44
        }
      },
      "11": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "bumpSequence",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 28
          }
        },
        loc: {
          start: {
            line: 15,
            column: 35
          },
          end: {
            line: 38,
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
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
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
        line: 18
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
      "11": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cd98c9b36c59efff3f3694eb7131f5f099c130a7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15h3wsncx9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_15h3wsncx9();
/**
 * This operation bumps sequence number.
 * @function
 * @alias Operation.bumpSequence
 * @param {object} opts Options object
 * @param {string} opts.bumpTo - Sequence number to bump to.
 * @param {string} [opts.source] - The optional source account.
 * @returns {xdr.BumpSequenceOp} Operation
 */
function bumpSequence(opts) {
  cov_15h3wsncx9().f[0]++;
  var attributes = (cov_15h3wsncx9().s[0]++, {});
  cov_15h3wsncx9().s[1]++;
  if (!(0, _isString["default"])(opts.bumpTo)) {
    cov_15h3wsncx9().b[0][0]++;
    cov_15h3wsncx9().s[2]++;
    throw new Error('bumpTo must be a string');
  } else {
    cov_15h3wsncx9().b[0][1]++;
  }
  cov_15h3wsncx9().s[3]++;
  try {
    cov_15h3wsncx9().s[4]++;
    // eslint-disable-next-line no-new
    new _bignumber["default"](opts.bumpTo);
  } catch (e) {
    cov_15h3wsncx9().s[5]++;
    throw new Error('bumpTo must be a stringified number');
  }
  cov_15h3wsncx9().s[6]++;
  attributes.bumpTo = _jsXdr.Hyper.fromString(opts.bumpTo);
  var bumpSequenceOp = (cov_15h3wsncx9().s[7]++, new _xdr["default"].BumpSequenceOp(attributes));
  var opAttributes = (cov_15h3wsncx9().s[8]++, {});
  cov_15h3wsncx9().s[9]++;
  opAttributes.body = _xdr["default"].OperationBody.bumpSequence(bumpSequenceOp);
  cov_15h3wsncx9().s[10]++;
  this.setSourceAccount(opAttributes, opts);
  cov_15h3wsncx9().s[11]++;
  return new _xdr["default"].Operation(opAttributes);
}