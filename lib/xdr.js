"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _curr_generated = _interopRequireDefault(require("./generated/curr_generated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_29ypckpr1z() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\xdr.js";
  var hash = "3ab04a652cc19ac056fcdb01d8018f929f3c6704";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\xdr.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3ab04a652cc19ac056fcdb01d8018f929f3c6704"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29ypckpr1z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_29ypckpr1z();
var _default = _curr_generated["default"];
exports["default"] = _default;