"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payment = payment;
var _xdr = _interopRequireDefault(require("../xdr"));
var _decode_encode_muxed_account = require("../util/decode_encode_muxed_account");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1nu7fwkrr9() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\payment.js";
  var hash = "65a1c0800fa91c799934e9da2c9d1343e529215b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\payment.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "1": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 69
        }
      },
      "2": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 73
        }
      },
      "4": {
        start: {
          line: 29,
          column: 21
        },
        end: {
          line: 29,
          column: 23
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
          column: 75
        }
      },
      "7": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 46
        }
      },
      "8": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 46
        }
      },
      "9": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 53
        }
      },
      "10": {
        start: {
          line: 38,
          column: 20
        },
        end: {
          line: 38,
          column: 49
        }
      },
      "11": {
        start: {
          line: 40,
          column: 23
        },
        end: {
          line: 40,
          column: 25
        }
      },
      "12": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 59
        }
      },
      "13": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 44
        }
      },
      "14": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "payment",
        decl: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 23
          }
        },
        loc: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
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
            line: 22,
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
        line: 22
      },
      "1": {
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "65a1c0800fa91c799934e9da2c9d1343e529215b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1nu7fwkrr9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1nu7fwkrr9();
/**
 * Create a payment operation.
 *
 * @function
 * @alias Operation.payment
 * @see https://developers.stellar.org/docs/start/list-of-operations/#payment
 *
 * @param {object}  opts - Options object
 * @param {string}  opts.destination  - destination account ID
 * @param {Asset}   opts.asset        - asset to send
 * @param {string}  opts.amount       - amount to send
 *
 * @param {string}  [opts.source]     - The source account for the payment.
 *     Defaults to the transaction's source account.
 *
 * @returns {xdr.Operation}   The resulting payment operation (xdr.PaymentOp)
 */
function payment(opts) {
  cov_1nu7fwkrr9().f[0]++;
  cov_1nu7fwkrr9().s[0]++;
  if (!opts.asset) {
    cov_1nu7fwkrr9().b[0][0]++;
    cov_1nu7fwkrr9().s[1]++;
    throw new Error('Must provide an asset for a payment operation');
  } else {
    cov_1nu7fwkrr9().b[0][1]++;
  }
  cov_1nu7fwkrr9().s[2]++;
  if (!this.isValidAmount(opts.amount)) {
    cov_1nu7fwkrr9().b[1][0]++;
    cov_1nu7fwkrr9().s[3]++;
    throw new TypeError(this.constructAmountRequirementsError('amount'));
  } else {
    cov_1nu7fwkrr9().b[1][1]++;
  }
  var attributes = (cov_1nu7fwkrr9().s[4]++, {});
  cov_1nu7fwkrr9().s[5]++;
  try {
    cov_1nu7fwkrr9().s[6]++;
    attributes.destination = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(opts.destination);
  } catch (e) {
    cov_1nu7fwkrr9().s[7]++;
    throw new Error('destination is invalid');
  }
  cov_1nu7fwkrr9().s[8]++;
  attributes.asset = opts.asset.toXDRObject();
  cov_1nu7fwkrr9().s[9]++;
  attributes.amount = this._toXDRAmount(opts.amount);
  var paymentOp = (cov_1nu7fwkrr9().s[10]++, new _xdr["default"].PaymentOp(attributes));
  var opAttributes = (cov_1nu7fwkrr9().s[11]++, {});
  cov_1nu7fwkrr9().s[12]++;
  opAttributes.body = _xdr["default"].OperationBody.payment(paymentOp);
  cov_1nu7fwkrr9().s[13]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1nu7fwkrr9().s[14]++;
  return new _xdr["default"].Operation(opAttributes);
}