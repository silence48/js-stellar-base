"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeTrust = changeTrust;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _jsXdr = require("js-xdr");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _xdr = _interopRequireDefault(require("../xdr"));
var _asset = require("../asset");
var _liquidity_pool_asset = require("../liquidity_pool_asset");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_197iwzf589() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\change_trust.js";
  var hash = "dd6e64661aa9b0c3b9e978c787787d1fc605ced2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\change_trust.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 39
        }
      },
      "1": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 23
        }
      },
      "2": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 31,
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
          column: 58
        }
      },
      "4": {
        start: {
          line: 27,
          column: 9
        },
        end: {
          line: 31,
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
          column: 47
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 69
        }
      },
      "7": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "8": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 72
        }
      },
      "9": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 41,
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
          column: 53
        }
      },
      "11": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 77
        }
      },
      "12": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "13": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 50
        }
      },
      "14": {
        start: {
          line: 46,
          column: 24
        },
        end: {
          line: 46,
          column: 57
        }
      },
      "15": {
        start: {
          line: 48,
          column: 23
        },
        end: {
          line: 48,
          column: 25
        }
      },
      "16": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 67
        }
      },
      "17": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 50,
          column: 44
        }
      },
      "18": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "changeTrust",
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 27
          }
        },
        loc: {
          start: {
            line: 22,
            column: 34
          },
          end: {
            line: 53,
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
            line: 25,
            column: 2
          },
          end: {
            line: 31,
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
            line: 31,
            column: 3
          }
        }, {
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 31,
            column: 3
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 31,
            column: 3
          }
        }, {
          start: {
            line: 29,
            column: 9
          },
          end: {
            line: 31,
            column: 3
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 33,
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
            line: 33,
            column: 2
          },
          end: {
            line: 35,
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
        line: 33
      },
      "3": {
        loc: {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 30
          }
        }, {
          start: {
            line: 33,
            column: 34
          },
          end: {
            line: 33,
            column: 71
          }
        }],
        line: 33
      },
      "4": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 41,
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
            line: 41,
            column: 3
          }
        }, {
          start: {
            line: 39,
            column: 9
          },
          end: {
            line: 41,
            column: 3
          }
        }],
        line: 37
      },
      "5": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
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
        line: 43
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
      "18": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dd6e64661aa9b0c3b9e978c787787d1fc605ced2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_197iwzf589 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_197iwzf589();
var MAX_INT64 = (cov_197iwzf589().s[0]++, '9223372036854775807');

/**
 * Returns an XDR ChangeTrustOp. A "change trust" operation adds, removes, or updates a
 * trust line for a given asset from the source account to another.
 * @function
 * @alias Operation.changeTrust
 * @param {object} opts Options object
 * @param {Asset | LiquidityPoolAsset} opts.asset - The asset for the trust line.
 * @param {string} [opts.limit] - The limit for the asset, defaults to max int64.
 *                                If the limit is set to "0" it deletes the trustline.
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 * @returns {xdr.ChangeTrustOp} Change Trust operation
 */
function changeTrust(opts) {
  cov_197iwzf589().f[0]++;
  var attributes = (cov_197iwzf589().s[1]++, {});
  cov_197iwzf589().s[2]++;
  if (opts.asset instanceof _asset.Asset) {
    cov_197iwzf589().b[0][0]++;
    cov_197iwzf589().s[3]++;
    attributes.line = opts.asset.toChangeTrustXDRObject();
  } else {
    cov_197iwzf589().b[0][1]++;
    cov_197iwzf589().s[4]++;
    if (opts.asset instanceof _liquidity_pool_asset.LiquidityPoolAsset) {
      cov_197iwzf589().b[1][0]++;
      cov_197iwzf589().s[5]++;
      attributes.line = opts.asset.toXDRObject();
    } else {
      cov_197iwzf589().b[1][1]++;
      cov_197iwzf589().s[6]++;
      throw new TypeError('asset must be Asset or LiquidityPoolAsset');
    }
  }
  cov_197iwzf589().s[7]++;
  if ((cov_197iwzf589().b[3][0]++, !(0, _isUndefined["default"])(opts.limit)) && (cov_197iwzf589().b[3][1]++, !this.isValidAmount(opts.limit, true))) {
    cov_197iwzf589().b[2][0]++;
    cov_197iwzf589().s[8]++;
    throw new TypeError(this.constructAmountRequirementsError('limit'));
  } else {
    cov_197iwzf589().b[2][1]++;
  }
  cov_197iwzf589().s[9]++;
  if (opts.limit) {
    cov_197iwzf589().b[4][0]++;
    cov_197iwzf589().s[10]++;
    attributes.limit = this._toXDRAmount(opts.limit);
  } else {
    cov_197iwzf589().b[4][1]++;
    cov_197iwzf589().s[11]++;
    attributes.limit = _jsXdr.Hyper.fromString(new _bignumber["default"](MAX_INT64).toString());
  }
  cov_197iwzf589().s[12]++;
  if (opts.source) {
    cov_197iwzf589().b[5][0]++;
    cov_197iwzf589().s[13]++;
    attributes.source = opts.source.masterKeypair;
  } else {
    cov_197iwzf589().b[5][1]++;
  }
  var changeTrustOP = (cov_197iwzf589().s[14]++, new _xdr["default"].ChangeTrustOp(attributes));
  var opAttributes = (cov_197iwzf589().s[15]++, {});
  cov_197iwzf589().s[16]++;
  opAttributes.body = _xdr["default"].OperationBody.changeTrust(changeTrustOP);
  cov_197iwzf589().s[17]++;
  this.setSourceAccount(opAttributes, opts);
  cov_197iwzf589().s[18]++;
  return new _xdr["default"].Operation(opAttributes);
}