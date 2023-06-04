"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageData = manageData;
var _isString = _interopRequireDefault(require("lodash/isString"));
var _xdr = _interopRequireDefault(require("../xdr"));
var _BrowserBuffer = _interopRequireDefault(require("../util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1lo7tuwyik() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\manage_data.js";
  var hash = "aa1b3ecf26e93bb485accf242bd87d109c185337";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\manage_data.js",
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
          column: 66
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "4": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "5": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 69
        }
      },
      "6": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 58
        }
      },
      "8": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 38
        }
      },
      "9": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "10": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 60
        }
      },
      "11": {
        start: {
          line: 41,
          column: 23
        },
        end: {
          line: 41,
          column: 55
        }
      },
      "12": {
        start: {
          line: 43,
          column: 23
        },
        end: {
          line: 43,
          column: 25
        }
      },
      "13": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 65
        }
      },
      "14": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 44
        }
      },
      "15": {
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
        name: "manageData",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 26
          }
        },
        loc: {
          start: {
            line: 15,
            column: 33
          },
          end: {
            line: 48,
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
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 27
          }
        }, {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 18,
            column: 53
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 23,
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
            line: 23,
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
        line: 23
      },
      "3": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 25
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 39
          }
        }, {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 23
          }
        }],
        line: 24
      },
      "4": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 35,
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
            line: 35,
            column: 3
          }
        }, {
          start: {
            line: 33,
            column: 9
          },
          end: {
            line: 35,
            column: 3
          }
        }],
        line: 31
      },
      "5": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 39,
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
        line: 37
      },
      "6": {
        loc: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 35
          }
        }, {
          start: {
            line: 37,
            column: 39
          },
          end: {
            line: 37,
            column: 71
          }
        }],
        line: 37
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "aa1b3ecf26e93bb485accf242bd87d109c185337"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1lo7tuwyik = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1lo7tuwyik();
/**
 * This operation adds data entry to the ledger.
 * @function
 * @alias Operation.manageData
 * @param {object} opts Options object
 * @param {string} opts.name - The name of the data entry.
 * @param {string|Buffer} opts.value - The value of the data entry.
 * @param {string} [opts.source] - The optional source account.
 * @returns {xdr.ManageDataOp} Manage Data operation
 */
function manageData(opts) {
  cov_1lo7tuwyik().f[0]++;
  var attributes = (cov_1lo7tuwyik().s[0]++, {});
  cov_1lo7tuwyik().s[1]++;
  if (!((cov_1lo7tuwyik().b[1][0]++, (0, _isString["default"])(opts.name)) && (cov_1lo7tuwyik().b[1][1]++, opts.name.length <= 64))) {
    cov_1lo7tuwyik().b[0][0]++;
    cov_1lo7tuwyik().s[2]++;
    throw new Error('name must be a string, up to 64 characters');
  } else {
    cov_1lo7tuwyik().b[0][1]++;
  }
  cov_1lo7tuwyik().s[3]++;
  attributes.dataName = opts.name;
  cov_1lo7tuwyik().s[4]++;
  if ((cov_1lo7tuwyik().b[3][0]++, !(0, _isString["default"])(opts.value)) && (cov_1lo7tuwyik().b[3][1]++, !_BrowserBuffer["default"].isBuffer(opts.value)) && (cov_1lo7tuwyik().b[3][2]++, opts.value !== null)) {
    cov_1lo7tuwyik().b[2][0]++;
    cov_1lo7tuwyik().s[5]++;
    throw new Error('value must be a string, BrowserBuffer or null');
  } else {
    cov_1lo7tuwyik().b[2][1]++;
  }
  cov_1lo7tuwyik().s[6]++;
  if ((0, _isString["default"])(opts.value)) {
    cov_1lo7tuwyik().b[4][0]++;
    cov_1lo7tuwyik().s[7]++;
    attributes.dataValue = _BrowserBuffer["default"].from(opts.value);
  } else {
    cov_1lo7tuwyik().b[4][1]++;
    cov_1lo7tuwyik().s[8]++;
    attributes.dataValue = opts.value;
  }
  cov_1lo7tuwyik().s[9]++;
  if ((cov_1lo7tuwyik().b[6][0]++, attributes.dataValue !== null) && (cov_1lo7tuwyik().b[6][1]++, attributes.dataValue.length > 64)) {
    cov_1lo7tuwyik().b[5][0]++;
    cov_1lo7tuwyik().s[10]++;
    throw new Error('value cannot be longer that 64 bytes');
  } else {
    cov_1lo7tuwyik().b[5][1]++;
  }
  var manageDataOp = (cov_1lo7tuwyik().s[11]++, new _xdr["default"].ManageDataOp(attributes));
  var opAttributes = (cov_1lo7tuwyik().s[12]++, {});
  cov_1lo7tuwyik().s[13]++;
  opAttributes.body = _xdr["default"].OperationBody.manageData(manageDataOp);
  cov_1lo7tuwyik().s[14]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1lo7tuwyik().s[15]++;
  return new _xdr["default"].Operation(opAttributes);
}