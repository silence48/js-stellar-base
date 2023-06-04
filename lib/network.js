"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Networks = void 0;
function cov_u5wyb356h() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\network.js";
  var hash = "5d23acf587ff471c681677c94b2f10e4d4b9c424";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\network.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 10,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5d23acf587ff471c681677c94b2f10e4d4b9c424"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_u5wyb356h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_u5wyb356h();
/**
 * Contains passphrases for common networks:
 * * `Networks.PUBLIC`: `Public Global Stellar Network ; September 2015`
 * * `Networks.TESTNET`: `Test SDF Network ; September 2015`
 * @type {{PUBLIC: string, TESTNET: string}}
 */
var Networks = (cov_u5wyb356h().s[0]++, {
  PUBLIC: 'Public Global Stellar Network ; September 2015',
  TESTNET: 'Test SDF Network ; September 2015'
});
exports.Networks = Networks;