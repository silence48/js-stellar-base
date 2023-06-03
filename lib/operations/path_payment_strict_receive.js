"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathPaymentStrictReceive = pathPaymentStrictReceive;
var _xdr = _interopRequireDefault(require("../xdr"));
var _decode_encode_muxed_account = require("../util/decode_encode_muxed_account");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_10iaajmhxi() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\path_payment_strict_receive.js";
  var hash = "5ab65cd268458c287d22890c3800277c5dfd34cf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\path_payment_strict_receive.js",
    statementMap: {
      "0": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "1": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 51
        }
      },
      "2": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 76
        }
      },
      "3": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 74
        }
      },
      "4": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 79
        }
      },
      "5": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 12
        }
      },
      "6": {
        start: {
          line: 44,
          column: 21
        },
        end: {
          line: 44,
          column: 23
        }
      },
      "7": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 54
        }
      },
      "8": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 55
        }
      },
      "9": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "10": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 75
        }
      },
      "11": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 46
        }
      },
      "12": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 54
        }
      },
      "13": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 61
        }
      },
      "14": {
        start: {
          line: 56,
          column: 15
        },
        end: {
          line: 56,
          column: 41
        }
      },
      "15": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 57,
          column: 53
        }
      },
      "16": {
        start: {
          line: 57,
          column: 36
        },
        end: {
          line: 57,
          column: 51
        }
      },
      "17": {
        start: {
          line: 59,
          column: 18
        },
        end: {
          line: 59,
          column: 64
        }
      },
      "18": {
        start: {
          line: 61,
          column: 23
        },
        end: {
          line: 61,
          column: 25
        }
      },
      "19": {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 62,
          column: 74
        }
      },
      "20": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 63,
          column: 44
        }
      },
      "21": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 65,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "pathPaymentStrictReceive",
        decl: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 40
          }
        },
        loc: {
          start: {
            line: 30,
            column: 47
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 30
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 57,
            column: 29
          },
          end: {
            line: 57,
            column: 30
          }
        },
        loc: {
          start: {
            line: 57,
            column: 36
          },
          end: {
            line: 57,
            column: 51
          }
        },
        line: 57
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 33,
            column: 51
          }
        }, {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 35,
            column: 76
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 37,
            column: 74
          }
        }, {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 39,
            column: 79
          }
        }, {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 41,
            column: 12
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 56,
            column: 15
          },
          end: {
            line: 56,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 56,
            column: 27
          },
          end: {
            line: 56,
            column: 36
          }
        }, {
          start: {
            line: 56,
            column: 39
          },
          end: {
            line: 56,
            column: 41
          }
        }],
        line: 56
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
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5ab65cd268458c287d22890c3800277c5dfd34cf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10iaajmhxi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10iaajmhxi();
/**
 * Creates a PathPaymentStrictReceive operation.
 *
 * A `PathPaymentStrictReceive` operation sends the specified amount to the
 * destination account. It credits the destination with `destAmount` of
 * `destAsset`, while debiting at most `sendMax` of `sendAsset` from the source.
 * The transfer optionally occurs through a path. XLM payments create the
 * destination account if it does not exist.
 *
 * @function
 * @alias Operation.pathPaymentStrictReceive
 * @see https://developers.stellar.org/docs/start/list-of-operations/#path-payment-strict-receive
 *
 * @param {object}  opts - Options object
 * @param {Asset}   opts.sendAsset    - asset to pay with
 * @param {string}  opts.sendMax      - maximum amount of sendAsset to send
 * @param {string}  opts.destination  - destination account to send to
 * @param {Asset}   opts.destAsset    - asset the destination will receive
 * @param {string}  opts.destAmount   - amount the destination receives
 * @param {Asset[]} opts.path         - array of Asset objects to use as the path
 *
 * @param {string}  [opts.source]     - The source account for the payment.
 *     Defaults to the transaction's source account.
 *
 * @returns {xdr.PathPaymentStrictReceiveOp} the resulting path payment op
 */
function pathPaymentStrictReceive(opts) {
  cov_10iaajmhxi().f[0]++;
  cov_10iaajmhxi().s[0]++;
  switch (true) {
    case !opts.sendAsset:
      cov_10iaajmhxi().b[0][0]++;
      cov_10iaajmhxi().s[1]++;
      throw new Error('Must specify a send asset');
    case !this.isValidAmount(opts.sendMax):
      cov_10iaajmhxi().b[0][1]++;
      cov_10iaajmhxi().s[2]++;
      throw new TypeError(this.constructAmountRequirementsError('sendMax'));
    case !opts.destAsset:
      cov_10iaajmhxi().b[0][2]++;
      cov_10iaajmhxi().s[3]++;
      throw new Error('Must provide a destAsset for a payment operation');
    case !this.isValidAmount(opts.destAmount):
      cov_10iaajmhxi().b[0][3]++;
      cov_10iaajmhxi().s[4]++;
      throw new TypeError(this.constructAmountRequirementsError('destAmount'));
    default:
      cov_10iaajmhxi().b[0][4]++;
      cov_10iaajmhxi().s[5]++;
      break;
  }
  var attributes = (cov_10iaajmhxi().s[6]++, {});
  cov_10iaajmhxi().s[7]++;
  attributes.sendAsset = opts.sendAsset.toXDRObject();
  cov_10iaajmhxi().s[8]++;
  attributes.sendMax = this._toXDRAmount(opts.sendMax);
  cov_10iaajmhxi().s[9]++;
  try {
    cov_10iaajmhxi().s[10]++;
    attributes.destination = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(opts.destination);
  } catch (e) {
    cov_10iaajmhxi().s[11]++;
    throw new Error('destination is invalid');
  }
  cov_10iaajmhxi().s[12]++;
  attributes.destAsset = opts.destAsset.toXDRObject();
  cov_10iaajmhxi().s[13]++;
  attributes.destAmount = this._toXDRAmount(opts.destAmount);
  var path = (cov_10iaajmhxi().s[14]++, opts.path ? (cov_10iaajmhxi().b[1][0]++, opts.path) : (cov_10iaajmhxi().b[1][1]++, []));
  cov_10iaajmhxi().s[15]++;
  attributes.path = path.map(function (x) {
    cov_10iaajmhxi().f[1]++;
    cov_10iaajmhxi().s[16]++;
    return x.toXDRObject();
  });
  var payment = (cov_10iaajmhxi().s[17]++, new _xdr["default"].PathPaymentStrictReceiveOp(attributes));
  var opAttributes = (cov_10iaajmhxi().s[18]++, {});
  cov_10iaajmhxi().s[19]++;
  opAttributes.body = _xdr["default"].OperationBody.pathPaymentStrictReceive(payment);
  cov_10iaajmhxi().s[20]++;
  this.setSourceAccount(opAttributes, opts);
  cov_10iaajmhxi().s[21]++;
  return new _xdr["default"].Operation(opAttributes);
}