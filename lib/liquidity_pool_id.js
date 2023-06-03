"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolId = void 0;
var _clone = _interopRequireDefault(require("lodash/clone"));
var _xdr = _interopRequireDefault(require("./xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2glcac2tn0() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\liquidity_pool_id.js";
  var hash = "5d2cd998cd4ca9bc31c998e3e9113a3b2cf0b136";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\liquidity_pool_id.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "1": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 57
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "3": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 63
        }
      },
      "4": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 43
        }
      },
      "5": {
        start: {
          line: 29,
          column: 22
        },
        end: {
          line: 29,
          column: 41
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "7": {
        start: {
          line: 31,
          column: 30
        },
        end: {
          line: 31,
          column: 74
        }
      },
      "8": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 39
        }
      },
      "9": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 61
        }
      },
      "10": {
        start: {
          line: 48,
          column: 22
        },
        end: {
          line: 48,
          column: 69
        }
      },
      "11": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 67
        }
      },
      "12": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 39
        }
      },
      "13": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 35
        }
      },
      "14": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 63
        }
      },
      "15": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 35
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        loc: {
          start: {
            line: 47,
            column: 16
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 47
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 23
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 55
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 17
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 63
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 16
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 71
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        loc: {
          start: {
            line: 75,
            column: 13
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 75
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
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
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
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
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 33,
            column: 5
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
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5d2cd998cd4ca9bc31c998e3e9113a3b2cf0b136"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2glcac2tn0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2glcac2tn0();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * LiquidityPoolId class represents the asset referenced by a trustline to a
 * liquidity pool.
 *
 * @constructor
 * @param {string} liquidityPoolId - The ID of the liquidity pool in string 'hex'.
 */
var LiquidityPoolId = /*#__PURE__*/function () {
  function LiquidityPoolId(liquidityPoolId) {
    _classCallCheck(this, LiquidityPoolId);
    cov_2glcac2tn0().f[0]++;
    cov_2glcac2tn0().s[0]++;
    if (!liquidityPoolId) {
      cov_2glcac2tn0().b[0][0]++;
      cov_2glcac2tn0().s[1]++;
      throw new Error('liquidityPoolId cannot be empty');
    } else {
      cov_2glcac2tn0().b[0][1]++;
    }
    cov_2glcac2tn0().s[2]++;
    if (!/^[a-f0-9]{64}$/.test(liquidityPoolId)) {
      cov_2glcac2tn0().b[1][0]++;
      cov_2glcac2tn0().s[3]++;
      throw new Error('Liquidity pool ID is not a valid hash');
    } else {
      cov_2glcac2tn0().b[1][1]++;
    }
    cov_2glcac2tn0().s[4]++;
    this.liquidityPoolId = liquidityPoolId;
  }

  /**
   * Returns a liquidity pool ID object from its xdr.TrustLineAsset representation.
   * @param {xdr.TrustLineAsset} tlAssetXdr - The asset XDR object.
   * @returns {LiquidityPoolId}
   */
  _createClass(LiquidityPoolId, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the `xdr.TrustLineAsset` object for this liquidity pool ID.
     *
     * Note: To convert from {@link Asset `Asset`} to `xdr.TrustLineAsset` please
     * refer to the
     * {@link Asset.toTrustLineXDRObject `Asset.toTrustLineXDRObject`} method.
     *
     * @returns {xdr.TrustLineAsset} XDR LiquidityPoolId object
     */
    function toXDRObject() {
      cov_2glcac2tn0().f[2]++;
      var xdrPoolId = (cov_2glcac2tn0().s[10]++, _xdr["default"].PoolId.fromXDR(this.liquidityPoolId, 'hex'));
      cov_2glcac2tn0().s[11]++;
      return new _xdr["default"].TrustLineAsset('assetTypePoolShare', xdrPoolId);
    }

    /**
     * @returns {string} Liquidity pool ID.
     */
  }, {
    key: "getLiquidityPoolId",
    value: function getLiquidityPoolId() {
      cov_2glcac2tn0().f[3]++;
      cov_2glcac2tn0().s[12]++;
      return (0, _clone["default"])(this.liquidityPoolId);
    }

    /**
     * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
     * @returns {AssetType.liquidityPoolShares} asset type. Can only be `liquidity_pool_shares`.
     */
  }, {
    key: "getAssetType",
    value: function getAssetType() {
      cov_2glcac2tn0().f[4]++;
      cov_2glcac2tn0().s[13]++;
      return 'liquidity_pool_shares';
    }

    /**
     * @param {LiquidityPoolId} asset LiquidityPoolId to compare.
     * @returns {boolean} `true` if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(asset) {
      cov_2glcac2tn0().f[5]++;
      cov_2glcac2tn0().s[14]++;
      return this.liquidityPoolId === asset.getLiquidityPoolId();
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_2glcac2tn0().f[6]++;
      cov_2glcac2tn0().s[15]++;
      return "liquidity_pool:".concat(this.liquidityPoolId);
    }
  }], [{
    key: "fromOperation",
    value: function fromOperation(tlAssetXdr) {
      cov_2glcac2tn0().f[1]++;
      var assetType = (cov_2glcac2tn0().s[5]++, tlAssetXdr["switch"]());
      cov_2glcac2tn0().s[6]++;
      if (assetType === _xdr["default"].AssetType.assetTypePoolShare()) {
        cov_2glcac2tn0().b[2][0]++;
        var liquidityPoolId = (cov_2glcac2tn0().s[7]++, tlAssetXdr.liquidityPoolId().toString('hex'));
        cov_2glcac2tn0().s[8]++;
        return new this(liquidityPoolId);
      } else {
        cov_2glcac2tn0().b[2][1]++;
      }
      cov_2glcac2tn0().s[9]++;
      throw new Error("Invalid asset type: ".concat(assetType.name));
    }
  }]);
  return LiquidityPoolId;
}();
exports.LiquidityPoolId = LiquidityPoolId;