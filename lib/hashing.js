"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;
var _sha = require("sha.js");
function cov_3zv50hsoy() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\hashing.js";
  var hash = "a900a381f5140c34e0abe2caed22ff812cb07723";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\hashing.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 4,
          column: 29
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 30
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "hash",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a900a381f5140c34e0abe2caed22ff812cb07723"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3zv50hsoy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_3zv50hsoy();
function hash(data) {
  cov_3zv50hsoy().f[0]++;
  var hasher = (cov_3zv50hsoy().s[0]++, new _sha.sha256());
  cov_3zv50hsoy().s[1]++;
  hasher.update(data, 'utf8');
  cov_3zv50hsoy().s[2]++;
  return hasher.digest();
}