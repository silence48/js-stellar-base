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
    if (!assetA || !(assetA instanceof _asset.Asset)) {
      throw new Error('assetA is invalid');
    }
    if (!assetB || !(assetB instanceof _asset.Asset)) {
      throw new Error('assetB is invalid');
    }
    if (_asset.Asset.compare(assetA, assetB) !== -1) {
      throw new Error('Assets are not in lexicographic order');
    }
    if (!fee || fee !== _get_liquidity_pool_id.LiquidityPoolFeeV18) {
      throw new Error('fee is invalid');
    }
    this.assetA = assetA;
    this.assetB = assetB;
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
      var lpConstantProductParamsXdr = new _xdr["default"].LiquidityPoolConstantProductParameters({
        assetA: this.assetA.toXDRObject(),
        assetB: this.assetB.toXDRObject(),
        fee: this.fee
      });
      var lpParamsXdr = new _xdr["default"].LiquidityPoolParameters('liquidityPoolConstantProduct', lpConstantProductParamsXdr);
      return new _xdr["default"].ChangeTrustAsset('assetTypePoolShare', lpParamsXdr);
    }

    /**
     * @returns {LiquidityPoolParameters} Liquidity pool parameters.
     */
  }, {
    key: "getLiquidityPoolParameters",
    value: function getLiquidityPoolParameters() {
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
      return 'liquidity_pool_shares';
    }

    /**
     * @param {LiquidityPoolAsset} other the LiquidityPoolAsset to compare
     * @returns {boolean} `true` if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      return this.assetA.equals(other.assetA) && this.assetB.equals(other.assetB) && this.fee === other.fee;
    }
  }, {
    key: "toString",
    value: function toString() {
      var poolId = (0, _get_liquidity_pool_id.getLiquidityPoolId)('constant_product', this.getLiquidityPoolParameters()).toString('hex');
      return "liquidity_pool:".concat(poolId);
    }
  }], [{
    key: "fromOperation",
    value: function fromOperation(ctAssetXdr) {
      var assetType = ctAssetXdr["switch"]();
      if (assetType === _xdr["default"].AssetType.assetTypePoolShare()) {
        var liquidityPoolParameters = ctAssetXdr.liquidityPool().constantProduct();
        return new this(_asset.Asset.fromOperation(liquidityPoolParameters.assetA()), _asset.Asset.fromOperation(liquidityPoolParameters.assetB()), liquidityPoolParameters.fee());
      }
      throw new Error("Invalid asset type: ".concat(assetType.name));
    }
  }]);
  return LiquidityPoolAsset;
}();
exports.LiquidityPoolAsset = LiquidityPoolAsset;