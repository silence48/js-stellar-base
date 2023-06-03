"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccount = createAccount;
var _xdr = _interopRequireDefault(require("../xdr"));
var _keypair = require("../keypair");
var _strkey = require("../strkey");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2m6ap3ncdj() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\create_account.js";
  var hash = "7573f0ee4b17ed3d14b5166a0868c63fc31d9c73";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\create_account.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 46
        }
      },
      "2": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 6
        }
      },
      "4": {
        start: {
          line: 25,
          column: 21
        },
        end: {
          line: 25,
          column: 23
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 19
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 71
        }
      },
      "7": {
        start: {
          line: 30,
          column: 26
        },
        end: {
          line: 30,
          column: 61
        }
      },
      "8": {
        start: {
          line: 32,
          column: 23
        },
        end: {
          line: 32,
          column: 25
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 71
        }
      },
      "10": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 44
        }
      },
      "11": {
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
        name: "createAccount",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 29
          }
        },
        loc: {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
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
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 24,
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
        line: 20
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
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7573f0ee4b17ed3d14b5166a0868c63fc31d9c73"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2m6ap3ncdj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2m6ap3ncdj();
/**
 * Create and fund a non existent account.
 * @function
 * @alias Operation.createAccount
 * @param {object} opts Options object
 * @param {string} opts.destination - Destination account ID to create an account for.
 * @param {string} opts.startingBalance - Amount in XLM the account should be funded for. Must be greater
 *                                   than the [reserve balance amount](https://developers.stellar.org/docs/glossary/fees/).
 * @param {string} [opts.source] - The source account for the payment. Defaults to the transaction's source account.
 * @returns {xdr.CreateAccountOp} Create account operation
 */
function createAccount(opts) {
  cov_2m6ap3ncdj().f[0]++;
  cov_2m6ap3ncdj().s[0]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(opts.destination)) {
    cov_2m6ap3ncdj().b[0][0]++;
    cov_2m6ap3ncdj().s[1]++;
    throw new Error('destination is invalid');
  } else {
    cov_2m6ap3ncdj().b[0][1]++;
  }
  cov_2m6ap3ncdj().s[2]++;
  if (!this.isValidAmount(opts.startingBalance, true)) {
    cov_2m6ap3ncdj().b[1][0]++;
    cov_2m6ap3ncdj().s[3]++;
    throw new TypeError('startingBalance must be of type String, represent a non-negative number and have at most 7 digits after the decimal');
  } else {
    cov_2m6ap3ncdj().b[1][1]++;
  }
  var attributes = (cov_2m6ap3ncdj().s[4]++, {});
  cov_2m6ap3ncdj().s[5]++;
  attributes.destination = _keypair.Keypair.fromPublicKey(opts.destination).xdrAccountId();
  cov_2m6ap3ncdj().s[6]++;
  attributes.startingBalance = this._toXDRAmount(opts.startingBalance);
  var createAccountOp = (cov_2m6ap3ncdj().s[7]++, new _xdr["default"].CreateAccountOp(attributes));
  var opAttributes = (cov_2m6ap3ncdj().s[8]++, {});
  cov_2m6ap3ncdj().s[9]++;
  opAttributes.body = _xdr["default"].OperationBody.createAccount(createAccountOp);
  cov_2m6ap3ncdj().s[10]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2m6ap3ncdj().s[11]++;
  return new _xdr["default"].Operation(opAttributes);
}