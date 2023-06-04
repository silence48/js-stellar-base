"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolAsset = void 0;
var _clone = _interopRequireDefault(require("lodash/clone"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _asset = require("./asset");
var _get_liquidity_pool_id = require("./get_liquidity_pool_id");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2gv5w16r6d() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\liquidity_pool_asset.js";
  var hash = "395a60c36d8babed31a1407e479cfdd332387331";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\liquidity_pool_asset.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "1": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 43
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "3": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 43
        }
      },
      "4": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "5": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 63
        }
      },
      "6": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "7": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 40
        }
      },
      "8": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 25
        }
      },
      "9": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 25
        }
      },
      "10": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 19
        }
      },
      "11": {
        start: {
          line: 44,
          column: 22
        },
        end: {
          line: 44,
          column: 41
        }
      },
      "12": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 54,
          column: 5
        }
      },
      "13": {
        start: {
          line: 46,
          column: 38
        },
        end: {
          line: 48,
          column: 26
        }
      },
      "14": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 53,
          column: 8
        }
      },
      "15": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 61
        }
      },
      "16": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 74,
          column: 8
        }
      },
      "17": {
        start: {
          line: 75,
          column: 24
        },
        end: {
          line: 78,
          column: 5
        }
      },
      "18": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 71
        }
      },
      "19": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 90,
          column: 7
        }
      },
      "20": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 35
        }
      },
      "21": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 110,
          column: 6
        }
      },
      "22": {
        start: {
          line: 114,
          column: 19
        },
        end: {
          line: 117,
          column: 21
        }
      },
      "23": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 118,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 35
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 35
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 16
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 68
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 85,
            column: 2
          },
          end: {
            line: 85,
            column: 3
          }
        },
        loc: {
          start: {
            line: 85,
            column: 31
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 85
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 17
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 97
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        loc: {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 105
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 13
          },
          end: {
            line: 119,
            column: 3
          }
        },
        line: 113
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
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
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 8
          },
          end: {
            line: 19,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 19,
            column: 8
          },
          end: {
            line: 19,
            column: 15
          }
        }, {
          start: {
            line: 19,
            column: 19
          },
          end: {
            line: 19,
            column: 45
          }
        }],
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 24,
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
        line: 22
      },
      "3": {
        loc: {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 22,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 22,
            column: 15
          }
        }, {
          start: {
            line: 22,
            column: 19
          },
          end: {
            line: 22,
            column: 45
          }
        }],
        line: 22
      },
      "4": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
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
        line: 25
      },
      "5": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
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
        line: 28
      },
      "6": {
        loc: {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 12
          }
        }, {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 28,
            column: 43
          }
        }],
        line: 28
      },
      "7": {
        loc: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 54,
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
        line: 45
      },
      "8": {
        loc: {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
            column: 28
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 107,
            column: 38
          }
        }, {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 38
          }
        }, {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 28
          }
        }],
        line: 107
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
      "21": 0,
      "22": 0,
      "23": 0
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
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "395a60c36d8babed31a1407e479cfdd332387331"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gv5w16r6d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2gv5w16r6d();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * LiquidityPoolAsset class represents a liquidity pool trustline change.
 *
 * @constructor
 * @param {Asset} assetA – The first asset in the Pool, it must respect the rule assetA < assetB. See {@link Asset.compare} for more details on how assets are sorted.
 * @param {Asset} assetB – The second asset in the Pool, it must respect the rule assetA < assetB. See {@link Asset.compare} for more details on how assets are sorted.
 * @param {number} fee – The liquidity pool fee. For now the only fee supported is `30`.
 */
var LiquidityPoolAsset = /*#__PURE__*/function () {
  function LiquidityPoolAsset(assetA, assetB, fee) {
    _classCallCheck(this, LiquidityPoolAsset);
    cov_2gv5w16r6d().f[0]++;
    cov_2gv5w16r6d().s[0]++;
    if ((cov_2gv5w16r6d().b[1][0]++, !assetA) || (cov_2gv5w16r6d().b[1][1]++, !(assetA instanceof _asset.Asset))) {
      cov_2gv5w16r6d().b[0][0]++;
      cov_2gv5w16r6d().s[1]++;
      throw new Error('assetA is invalid');
    } else {
      cov_2gv5w16r6d().b[0][1]++;
    }
    cov_2gv5w16r6d().s[2]++;
    if ((cov_2gv5w16r6d().b[3][0]++, !assetB) || (cov_2gv5w16r6d().b[3][1]++, !(assetB instanceof _asset.Asset))) {
      cov_2gv5w16r6d().b[2][0]++;
      cov_2gv5w16r6d().s[3]++;
      throw new Error('assetB is invalid');
    } else {
      cov_2gv5w16r6d().b[2][1]++;
    }
    cov_2gv5w16r6d().s[4]++;
    if (_asset.Asset.compare(assetA, assetB) !== -1) {
      cov_2gv5w16r6d().b[4][0]++;
      cov_2gv5w16r6d().s[5]++;
      throw new Error('Assets are not in lexicographic order');
    } else {
      cov_2gv5w16r6d().b[4][1]++;
    }
    cov_2gv5w16r6d().s[6]++;
    if ((cov_2gv5w16r6d().b[6][0]++, !fee) || (cov_2gv5w16r6d().b[6][1]++, fee !== _get_liquidity_pool_id.LiquidityPoolFeeV18)) {
      cov_2gv5w16r6d().b[5][0]++;
      cov_2gv5w16r6d().s[7]++;
      throw new Error('fee is invalid');
    } else {
      cov_2gv5w16r6d().b[5][1]++;
    }
    cov_2gv5w16r6d().s[8]++;
    this.assetA = assetA;
    cov_2gv5w16r6d().s[9]++;
    this.assetB = assetB;
    cov_2gv5w16r6d().s[10]++;
    this.fee = fee;
  }

  /**
   * Returns a liquidity pool asset object from its XDR ChangeTrustAsset object
   * representation.
   * @param {xdr.ChangeTrustAsset} ctAssetXdr - The asset XDR object.
   * @returns {LiquidityPoolAsset}
   */
  _createClass(LiquidityPoolAsset, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the `xdr.ChangeTrustAsset` object for this liquidity pool asset.
     *
     * Note: To convert from an {@link Asset `Asset`} to `xdr.ChangeTrustAsset`
     * please refer to the
     * {@link Asset.toChangeTrustXDRObject `Asset.toChangeTrustXDRObject`} method.
     *
     * @returns {xdr.ChangeTrustAsset} XDR ChangeTrustAsset object.
     */
    function toXDRObject() {
      cov_2gv5w16r6d().f[2]++;
      var lpConstantProductParamsXdr = (cov_2gv5w16r6d().s[16]++, new _xdr["default"].LiquidityPoolConstantProductParameters({
        assetA: this.assetA.toXDRObject(),
        assetB: this.assetB.toXDRObject(),
        fee: this.fee
      }));
      var lpParamsXdr = (cov_2gv5w16r6d().s[17]++, new _xdr["default"].LiquidityPoolParameters('liquidityPoolConstantProduct', lpConstantProductParamsXdr));
      cov_2gv5w16r6d().s[18]++;
      return new _xdr["default"].ChangeTrustAsset('assetTypePoolShare', lpParamsXdr);
    }

    /**
     * @returns {LiquidityPoolParameters} Liquidity pool parameters.
     */
  }, {
    key: "getLiquidityPoolParameters",
    value: function getLiquidityPoolParameters() {
      cov_2gv5w16r6d().f[3]++;
      cov_2gv5w16r6d().s[19]++;
      return (0, _clone["default"])({
        assetA: this.assetA,
        assetB: this.assetB,
        fee: this.fee
      });
    }

    /**
     * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
     * @returns {AssetType.liquidityPoolShares} asset type. Can only be `liquidity_pool_shares`.
     */
  }, {
    key: "getAssetType",
    value: function getAssetType() {
      cov_2gv5w16r6d().f[4]++;
      cov_2gv5w16r6d().s[20]++;
      return 'liquidity_pool_shares';
    }

    /**
     * @param {LiquidityPoolAsset} other the LiquidityPoolAsset to compare
     * @returns {boolean} `true` if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      cov_2gv5w16r6d().f[5]++;
      cov_2gv5w16r6d().s[21]++;
      return (cov_2gv5w16r6d().b[8][0]++, this.assetA.equals(other.assetA)) && (cov_2gv5w16r6d().b[8][1]++, this.assetB.equals(other.assetB)) && (cov_2gv5w16r6d().b[8][2]++, this.fee === other.fee);
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_2gv5w16r6d().f[6]++;
      var poolId = (cov_2gv5w16r6d().s[22]++, (0, _get_liquidity_pool_id.getLiquidityPoolId)('constant_product', this.getLiquidityPoolParameters()).toString('hex'));
      cov_2gv5w16r6d().s[23]++;
      return "liquidity_pool:".concat(poolId);
    }
  }], [{
    key: "fromOperation",
    value: function fromOperation(ctAssetXdr) {
      cov_2gv5w16r6d().f[1]++;
      var assetType = (cov_2gv5w16r6d().s[11]++, ctAssetXdr["switch"]());
      cov_2gv5w16r6d().s[12]++;
      if (assetType === _xdr["default"].AssetType.assetTypePoolShare()) {
        cov_2gv5w16r6d().b[7][0]++;
        var liquidityPoolParameters = (cov_2gv5w16r6d().s[13]++, ctAssetXdr.liquidityPool().constantProduct());
        cov_2gv5w16r6d().s[14]++;
        return new this(_asset.Asset.fromOperation(liquidityPoolParameters.assetA()), _asset.Asset.fromOperation(liquidityPoolParameters.assetB()), liquidityPoolParameters.fee());
      } else {
        cov_2gv5w16r6d().b[7][1]++;
      }
      cov_2gv5w16r6d().s[15]++;
      throw new Error("Invalid asset type: ".concat(assetType.name));
    }
  }]);
  return LiquidityPoolAsset;
}();
exports.LiquidityPoolAsset = LiquidityPoolAsset;