"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPassiveSellOffer = createPassiveSellOffer;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_22iqqtf8na() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\create_passive_sell_offer.js";
  var hash = "2e4e2749b0f19d712e54098d5766ab45dfadff9e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\create_passive_sell_offer.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 23
        }
      },
      "1": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 50
        }
      },
      "2": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 48
        }
      },
      "3": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "4": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 73
        }
      },
      "5": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 53
        }
      },
      "6": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "7": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 54
        }
      },
      "8": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 50
        }
      },
      "9": {
        start: {
          line: 34,
          column: 35
        },
        end: {
          line: 34,
          column: 79
        }
      },
      "10": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 36,
          column: 25
        }
      },
      "11": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      },
      "12": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 44
        }
      },
      "13": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "createPassiveSellOffer",
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 38
          }
        },
        loc: {
          start: {
            line: 22,
            column: 45
          },
          end: {
            line: 43,
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
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
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
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
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
        line: 30
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
      "13": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2e4e2749b0f19d712e54098d5766ab45dfadff9e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22iqqtf8na = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_22iqqtf8na();
/**
 * Returns a XDR CreatePasiveSellOfferOp. A "create passive offer" operation creates an
 * offer that won't consume a counter offer that exactly matches this offer. This is
 * useful for offers just used as 1:1 exchanges for path payments. Use manage offer
 * to manage this offer after using this operation to create it.
 * @function
 * @alias Operation.createPassiveSellOffer
 * @param {object} opts Options object
 * @param {Asset} opts.selling - What you're selling.
 * @param {Asset} opts.buying - What you're buying.
 * @param {string} opts.amount - The total amount you're selling. If 0, deletes the offer.
 * @param {number|string|BigNumber|Object} opts.price - Price of 1 unit of `selling` in terms of `buying`.
 * @param {number} opts.price.n - If `opts.price` is an object: the price numerator
 * @param {number} opts.price.d - If `opts.price` is an object: the price denominator
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 * @throws {Error} Throws `Error` when the best rational approximation of `price` cannot be found.
 * @returns {xdr.CreatePassiveSellOfferOp} Create Passive Sell Offer operation
 */
function createPassiveSellOffer(opts) {
  cov_22iqqtf8na().f[0]++;
  var attributes = (cov_22iqqtf8na().s[0]++, {});
  cov_22iqqtf8na().s[1]++;
  attributes.selling = opts.selling.toXDRObject();
  cov_22iqqtf8na().s[2]++;
  attributes.buying = opts.buying.toXDRObject();
  cov_22iqqtf8na().s[3]++;
  if (!this.isValidAmount(opts.amount)) {
    cov_22iqqtf8na().b[0][0]++;
    cov_22iqqtf8na().s[4]++;
    throw new TypeError(this.constructAmountRequirementsError('amount'));
  } else {
    cov_22iqqtf8na().b[0][1]++;
  }
  cov_22iqqtf8na().s[5]++;
  attributes.amount = this._toXDRAmount(opts.amount);
  cov_22iqqtf8na().s[6]++;
  if ((0, _isUndefined["default"])(opts.price)) {
    cov_22iqqtf8na().b[1][0]++;
    cov_22iqqtf8na().s[7]++;
    throw new TypeError('price argument is required');
  } else {
    cov_22iqqtf8na().b[1][1]++;
  }
  cov_22iqqtf8na().s[8]++;
  attributes.price = this._toXDRPrice(opts.price);
  var createPassiveSellOfferOp = (cov_22iqqtf8na().s[9]++, new _xdr["default"].CreatePassiveSellOfferOp(attributes));
  var opAttributes = (cov_22iqqtf8na().s[10]++, {});
  cov_22iqqtf8na().s[11]++;
  opAttributes.body = _xdr["default"].OperationBody.createPassiveSellOffer(createPassiveSellOfferOp);
  cov_22iqqtf8na().s[12]++;
  this.setSourceAccount(opAttributes, opts);
  cov_22iqqtf8na().s[13]++;
  return new _xdr["default"].Operation(opAttributes);
}